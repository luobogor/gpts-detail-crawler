# GPTs Detail Crawler

English | [中文](./README-cn.md)

Crawls GPTs detail page data based on GPTs uuid.  It is recommended to use it in conjunction with [Twitter GPTs Crawler](https://github.com/luobogor/twitter-gpts-crawler) to crawl GPTs links.

<p align="center">
★ Powered by <a target="_blank" href="https://gptshappy.tools?utm_source=gpts-detail-crawler">GPTsHappy.tools</a> ★
</p>

<p align="center">
  <a target="_blank" href="https://gptshappy.tools?utm_source=gpts-detail-crawler">
    <img alt="GPTsHunter" src="./logo.png">
  </a>
</p>


## Installation
```Shell
# node version >= 18.0.0
npm install
```

## Usage
1. Modify `gptslist.txt` and fill in the GPTs uuid.
2. If you need to use a proxy, modify the `PROXY_SERVER` variable in `index.js`.
3. Execute `npm start`, and the data will be saved to the file after successful execution.

Output example:

```json5
  {
  "gizmo": {
    "id": "g-xtyzCTs7m",
    "organization_id": "org-p4KAzVYNuaWkNmCnfbtQVRv7",
    "short_url": "g-xtyzCTs7m-the-man-of-sisu",
    "author": {
      "user_id": "user-OAri8MB104ThdFkgxu8myTJ6"
    },
    "display": {
      "name": "The Man of Sisu",
      "description": "Finnish therapist, rooted in Stoicism",
      "welcome_message": "Tervetuloa! Let's explore Stoic wisdom with a Finnish touch.",
      "prompt_starters": [
        "How can I balance work and family?",
        "Strategies for stress?",
        "Exercise with limited time?",
        "Stoic advice for parenting?"
      ],
      "profile_pic_id": null,
      "profile_picture_url": "https://files.oaiusercontent.com/file-Lo7TtuGfDhfKzrGoAIITY8Xz?se=2123-10-17T03%3A02%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D65738db2-492a-4553-96cb-00c32794a9e3.png&sig=godXcXuLgYg7Ck6gIf25fNQeMJTfehVSyOa6GSlKu/o%3D",
    },
    "created_at": "2023-11-10T02:51:01.258265+00:00",
    "updated_at": "2023-11-10T19:24:30.835122+00:00",
  },
  "tools": [
    {
      "id": "gzm_cnf_RzlSfhIekCglXGEJU5L38fA9~gzm_tool_u3g5Vpz1m73gV8qyAmRnszLQ",
      "type": "dalle",
      "settings": null,
      "metadata": null
    },
    {
      "id": "gzm_cnf_RzlSfhIekCglXGEJU5L38fA9~gzm_tool_JulErTdvcAf9vWLCPmZjjjuy",
      "type": "browser",
      "settings": null,
      "metadata": null
    },
    {
      "id": "gzm_cnf_RzlSfhIekCglXGEJU5L38fA9~gzm_tool_E6mwxpBEBmmyoK9vYM3aJahJ",
      "type": "python",
      "settings": null,
      "metadata": null
    }
  ]
}
```

