const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const request = require('request')
const fs = require('fs');
const _ = require('lodash')
const path = require('path');
const filePath = path.resolve(__dirname, 'gptslist.txt');

// const PROXY_SERVER = 'http://127.0.0.1:7890';
const PROXY_SERVER = '';
let browser = null;
let gptsList = []


function getOutputFileName () {
  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`
}


async function getRedirectShortUrl(targetUrl) {
  return await new Promise((resolve) => {
    request.get({
      url: targetUrl,
      proxy: PROXY_SERVER,
    }, (error, response) => {
      if (response) {
        resolve(response.request.path.split('/g/')[1]);
      } else {
        resolve(null)
      }
    });
  })
}

const sendRequest = async (shortUrl) => {
  let firstReq = true;
  const targetUrl = 'https://chat.openai.com/g/' + shortUrl

  const page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on('request', async (request) => {
    if (firstReq) {
      firstReq = false
      request.continue()
    } else {
      request.abort()
    }
  });

  page.on('response', async (response) => {
    if (response.status() !== 200) {
      if (String(response.status()).startsWith('3')) {
        const redirectShortUrl = await getRedirectShortUrl(targetUrl)
        if (!redirectShortUrl) {
          return
        }

        await sendRequest(redirectShortUrl)

        return;
      }
    }

    let data

    try {
      data = await response.text();
    } catch (err) {
      console.error(shortUrl, err)
      return
    }

    try {
      const $ = cheerio.load(data);
      const dataContent = $('#__NEXT_DATA__').html();
      const obj = JSON.parse(dataContent);

      // if (obj.props.pageProps.statusCode === 404) {
      //   console.log('data not found:', shortUrl)
      //   return
      // }

      const gpts = _.get(obj, 'props.pageProps.gizmo')
      if (!gpts) {
        console.log('data not found:', shortUrl)
      }

      console.log('got data:', shortUrl);
      gptsList.push(gpts)
    } catch (error) {
      console.error('crawler error: ', shortUrl, ' ', error);
    }
  })

  await page.goto(targetUrl);
}


async function sendRequestsSerially(shortUrls) {
  browser = await puppeteer.launch({
    args: [ `--proxy-server=${ PROXY_SERVER }` ]
  });

  for (const shortUrl of shortUrls) {
    try {
      await sendRequest(shortUrl);
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      await new Promise(resolve => setTimeout(resolve, 2 * 1000));
    }
  }

  await browser.close();
}

function getList() {
  return new Promise((resolve) => {
    fs.readFile(filePath, 'utf8', async (err, data) => {
      if (err) {
        console.error('read file error: ', err);
        return;
      }

      const uuids = data.trim().split('\n');

      resolve(_.compact(uuids))
    });
  })
}

async function main() {
  const list = await getList()
  await sendRequestsSerially(list);

  fs.writeFile(`${getOutputFileName()}.json`, JSON.stringify(gptsList, null, 2), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File written successfully!');
    }
  });
}

main()
