# dsh-prompt-library · 常用指令库

给 DeepSeek Harness 用的一组现成中文指令，专门给**不知道怎么写提示词**的人：搜一下、点一下，指令就
填进输入框，发送还是你自己按。

它就在输入框左下角的工具栏里，按钮叫「指令库」。

## 为什么做这个

大部分人用不好 AI，不是模型不行，是**对着空输入框不知道第一句写什么**。这个插件把 30 多条写好的
中文指令放在手边，每条只留一个明显要替换的占位符。

## 里面有什么

| 分组 | 例子 |
| --- | --- |
| 写东西 | 朋友圈文案、小红书笔记、邮件、请假条、自我介绍、起标题、祝福语 |
| 办公 | 整理会议记录、写周报、提炼待办、改正式、缩成三句话、中英互译、回复消息 |
| 学习 | 用大白话解释、举例子、出题考我、检查错别字、学习计划、拆步骤 |
| 生活 | 一周菜谱、旅行规划、送礼建议、起名字、砍价话术、安排一天 |
| 想清楚 | 对比方案、列优缺点、从反面反驳、我漏了什么、可能出什么问题、帮我决定 |

## 安装

    dsh plugin --profile web add github:ciceroyang/dsh-prompt-library#v0.1.1

一条命令就装好并挂载：manifest 里声明了 `dsh.bundle`，profile 会把它加入 loader 树，浏览器端
则通过 `exports["./client"]` 提供。

想从本地源码目录加载，就手动挂：

    ln -sfn "$PWD/dsh-prompt-library" ~/.dsh/profiles/web/node_modules/dsh-prompt-library
    # 然后写进 ~/.dsh/profiles/web/cordis.patch.yml
    - insert:
        - id: prompt-library
          name: dsh-prompt-library

web profile 会热重载 patch，之后刷新页面即可。

## 用法

1. 点输入框左边的「指令库」。
2. 打一个词（翻译 / 周报 / 说明白），或者直接翻。
3. 点一条，指令就填进输入框；把「占位符」换成你的内容再发送。

它不会自动发送，所以永远有改的机会。

## 说明

- 指令就是 `lib/library.js` 里的纯数据，加一条 = 改数据 + 加测试。
- 搜索覆盖标题、说明、分组名和指令正文，不区分大小写。
- 不发网络请求、不写存储、没有埋点。

## 测试

    node build.mjs && node --test

## 许可

MIT。维护者 [@ciceroyang](https://github.com/ciceroyang)。
