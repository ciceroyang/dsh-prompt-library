# dsh-prompt-library

A shelf of ready-made Chinese instructions for DeepSeek Harness, for people who do not know how to
write a prompt. Search, click, and the text lands in the composer — you still press send.

  「指令库」 button sits at the left of the composer tool row.

## Why

Most people who struggle with an AI assistant are not struggling with the model. They are staring at an
empty box. This plugin fills the box with 30+ instructions written in plain Chinese, each with a single
obvious placeholder to replace.

## What is inside

| group | examples |
| --- | --- |
| 写东西 | 朋友圈文案、小红书笔记、邮件、请假条、自我介绍、起标题、祝福语 |
| 办公 | 整理会议记录、写周报、提炼待办、改正式、缩成三句话、中英互译、回复消息 |
| 学习 | 用大白话解释、举例子、出题考我、检查错别字、学习计划、拆步骤 |
| 生活 | 一周菜谱、旅行规划、送礼建议、起名字、砍价话术、安排一天 |
| 想清楚 | 对比方案、列优缺点、从反面反驳、我漏了什么、可能出什么问题、帮我决定 |

## Install

    dsh plugin --profile web add github:ciceroyang/dsh-prompt-library#v0.1.1

One command installs the package and mounts it: the manifest declares `dsh.bundle`, so the
profile adds the package to its loader tree, and the browser half is served from
`exports["./client"]`.

From a local checkout instead, mount it by hand:

    ln -sfn "$PWD/dsh-prompt-library" ~/.dsh/profiles/web/node_modules/dsh-prompt-library
    # then in ~/.dsh/profiles/web/cordis.patch.yml
    - insert:
        - id: prompt-library
          name: dsh-prompt-library

The web profile reloads the patch live; refresh the page afterwards.

## Use

1. Click 指令库 at the left of the composer.
2. Type a word — 翻译, 周报, 说明白 — or scroll.
3. Click an entry. The prompt fills the composer; replace the 「placeholder」 and send.

Nothing is sent automatically, so there is always a chance to edit first.

## Notes

- The catalogue is plain data in `lib/library.js`. Adding an entry is a data change plus a test.
- Search covers the title, the hint, the group name and the prompt body, case-insensitively.
- No network, no storage, no telemetry: the panel runs entirely in your browser.

## Test

    node build.mjs && node --test

## Licence

MIT. Maintained by [@ciceroyang](https://github.com/ciceroyang).
