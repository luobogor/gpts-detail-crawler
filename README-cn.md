# GPTs Detail Crawler

[English](./README.md) | 中文

根据 GPTs uuid，爬取 GPTs 详情页的数据。推荐结合 [Twitter GPTs Crawler](https://github.com/luobogor/twitter-gpts-crawler) 爬取 GPTs 链接。

<p align="center">
★ 由 <a target="_blank" href="https://gptshappy.tools?utm_source=gpts-detail-crawler">GPTsHappy.tools</a> 提供支持 ★
</p>

<p align="center">
  <a target="_blank" href="https://gptshappy.tools?utm_source=gpts-detail-crawler">
    <img alt="GPTsHunter" src="./logo.png">
  </a>
</p>

## 安装
```shell
# node 版本 >= 18.0.0
npm install
```

## 使用
1. 修改 `gptslist.txt`，填入 GPTs uuid。
2. 如需要使用代理，修改 `index.js` 里的 `PROXY_SERVER` 变量。
3. 执行 `npm start`，执行成功数据保存到文件。


输出范例：

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
