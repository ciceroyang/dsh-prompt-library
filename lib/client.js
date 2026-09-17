/**
 * GENERATED FILE - do not edit.
 *
 * Source: lib/library.js + client/index.js
 * Rebuild: node build.mjs
 */
window.__ModuleLoader__.load({
	id: "dsh-prompt-library",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const React = require("react");
  /**
   * The prompt catalogue for dsh-prompt-library.
   *
   * Pure data plus pure lookups: no DOM, no network, no dependencies. The browser
   * half inlines this file, so the search the user experiences and the search the
   * tests exercise are the same code.
   *
   * Every entry is a complete, ready-to-send instruction written for someone who
   * has never written a prompt. Placeholders use the corner-bracket form
   * 「这里换成你的内容」 so the user has exactly one obvious thing to replace.
   *
   * @module dsh-prompt-library/library
   */

  /**
   * One ready-made instruction.
   * - id: stable, unique, used as the React key and in tests.
   * - title: what the user sees in the list.
   * - text: the prompt that lands in the composer.
   * - hint: one short line explaining when to reach for it.
   */
  const GROUPS = [
    {
      id: 'writing',
      title: '写东西',
      items: [
        { id: 'pyq', title: '写一条朋友圈', hint: '发之前先给你三个版本挑', text: '帮我写 3 条朋友圈文案，主题是「这里写主题」，一条轻松、一条文艺、一条幽默。每条不超过 60 字，不要用 emoji。' },
        { id: 'xhs', title: '写一篇小红书笔记', hint: '标题 + 正文 + 标签', text: '帮我写一篇小红书笔记，主题是「这里写主题」。要求：一个有吸引力的标题，正文 300 字左右，口语化，像朋友分享；最后给 8 个标签。' },
        { id: 'email', title: '写一封邮件', hint: '说明目的和对象就行', text: '帮我写一封邮件。收件人是「这里写收件人」，目的是「这里写目的」，语气要「正式/客气/亲切」，200 字以内。' },
        { id: 'leave', title: '写请假条', hint: '填时间和理由', text: '帮我写一张请假条。请假人是我，时间「这里写时间」，事由「这里写事由」。语气礼貌、简洁，200 字以内。' },
        { id: 'intro', title: '写自我介绍', hint: '面试 / 群聊 / 演讲都能用', text: '帮我写一段自我介绍，用于「这里写场合」。我的基本信息是「这里写你的信息」。要求分三段，每段两三句话，口语化，不要用「本人」这种词。' },
        { id: 'title', title: '起 10 个标题', hint: '文章、视频、笔记都行', text: '给「这里写主题」起 10 个标题。要求：不超过 20 字，有具体信息，不用夸张词，最后标出你认为最好的 3 个并说明理由。' },
        { id: 'bless', title: '写祝福语', hint: '节日、生日、开业', text: '帮我写 5 条祝福语，场合是「这里写场合」，对象是「这里写对象」。要求每条风格不同，控制在 30 字以内，不要套话。' },
      ],
    },
    {
      id: 'office',
      title: '办公',
      items: [
        { id: 'meeting', title: '整理会议记录', hint: '贴原文就行', text: '下面是会议记录原文，请帮我整理成：一、结论；二、待办事项（每条写明负责人和截止时间，没提到的写「待定」）；三、还需要确认的问题。原文：\n「这里贴原文」' },
        { id: 'weekly', title: '写周报', hint: '把流水账变成周报', text: '把下面这周做的事情整理成一份周报：一、本周完成（按重要性排序）；二、遇到的问题；三、下周计划。语气客观，不要写「努力」「积极」这类形容词。素材：\n「这里贴素材」' },
        { id: 'todos', title: '提炼待办清单', hint: '从一段话里挑出要做的事', text: '从下面这段内容里提炼出所有待办事项，每条一句话，按先后顺序排列。看不出来谁负责的，标上「负责人待定」。内容：\n「这里贴内容」' },
        { id: 'formal', title: '改得更正式', hint: '口语 → 书面', text: '把下面这段话改成正式书面语，保持原意和长度，不要增加我没说过的信息。原文：\n「这里贴原文」' },
        { id: 'summarize', title: '缩成三句话', hint: '再长也能压', text: '把下面这段内容压缩成三句话，第一句说结论，第二句说最重要的依据，第三句说下一步该怎么办。原文：\n「这里贴原文」' },
        { id: 'translate', title: '中英互译', hint: '自动判断方向', text: '把下面这段内容翻译成「中文/英文」，译文要自然，像母语者写的，不要逐字直译。如果有专业术语，在括号里保留原文。原文：\n「这里贴原文」' },
        { id: 'reply', title: '帮我回一条消息', hint: '给个立场，别替你吵架', text: '帮我回复下面这条消息。我的立场是「这里写你的立场」，语气要「客气/直接/委婉」，字数控制在 100 字以内。对方的消息：\n「这里贴消息」' },
      ],
    },
    {
      id: 'study',
      title: '学习',
      items: [
        { id: 'plain', title: '用大白话解释', hint: '假装我是完全外行', text: '用大白话解释「这里写概念」。要求：假设我完全没有基础，不要用行话；先用一个生活里的类比，再说清楚它到底解决什么问题，最后给一个具体例子。' },
        { id: 'example', title: '举个例子', hint: '抽象变具体', text: '为「这里写概念」举 3 个具体例子，要求一个来自日常生活、一个来自工作场景、一个来自常见错误。每个例子两三句话。' },
        { id: 'quiz', title: '出题考我', hint: '用提问检验我懂没懂', text: '针对「这里写主题」给我出 5 道题，从易到难。先只给题目，等我回答后再逐题点评：对的说明为什么对，错的指出错在哪。' },
        { id: 'proofread', title: '检查错别字', hint: '只改错，不改风格', text: '检查下面这段文字的错别字、标点和病句。只改确定的错误，不要动我的语气和用词习惯。逐条列出「原文 → 修改后」，并说明原因。原文：\n「这里贴原文」' },
        { id: 'plan', title: '列一个学习计划', hint: '给时间和目标', text: '我想在「这里写多长时间，比如 4 周」内学会「这里写主题」，我每天能投入「这里写时长」。请给一个按天排的计划，每天只安排一个重点任务，并说明怎么判断当天学会了。' },
        { id: 'step', title: '拆成步骤', hint: '把「怎么做」说清楚', text: '把「这里写要做的事」拆成按顺序执行的步骤。每一步都要写：做什么、大概花多久、做完怎么确认这一步成功了。如果某一步有常见坑，单独提醒我。' },
      ],
    },
    {
      id: 'life',
      title: '生活',
      items: [
        { id: 'menu', title: '排一周菜谱', hint: '带采购清单', text: '帮我安排一周的晚餐菜谱，两个人吃，口味「这里写口味」，忌口「这里写忌口」。要求荤素搭配、尽量不重样，最后汇总成一份采购清单。' },
        { id: 'trip', title: '规划一次旅行', hint: '给出可执行的日程', text: '帮我规划「这里写几天」的「这里写目的地」行程。出发地「这里写出发地」，预算「这里写预算」，同行的人「这里写同行人」。按天上下午排，写清交通方式和大概花费。' },
        { id: 'gift', title: '送礼建议', hint: '给对象和预算', text: '给「这里写对象」送「这里写场合」的礼物，预算「这里写预算」。给 5 个建议，每个写清买什么、大概多少钱、为什么合适，并指出其中一个可能踩雷的地方。' },
        { id: 'name', title: '起名字', hint: '宝宝、店铺、账号', text: '帮我给「这里写对象」起 10 个名字。风格偏向「这里写风格」，要避开谐音不好的词。每个名字后面用一句话说明含义。' },
        { id: 'bargain', title: '帮我想砍价话术', hint: '礼貌但有效', text: '我想买「这里写商品」，对方开价「这里写价格」，我的心理价位是「这里写价格」。帮我想 3 段砍价话术，语气要客气但不软，每段不超过 80 字。' },
        { id: 'plan-week', title: '帮我安排这一天', hint: '事情多、时间少的时候用', text: '我有一天的空闲时间「这里写起止时间」，要做的事情有「这里列出事项」。帮我排一个时间表，把重要的事放在精力最好的时段，中间留出休息，最后告诉我如果只能完成两件事该做哪两件。' },
      ],
    },
    {
      id: 'think',
      title: '想清楚',
      items: [
        { id: 'compare', title: '对比两个方案', hint: '列成表格', text: '帮我对比「方案 A」和「方案 B」。列出评价维度，做成表格，每个维度给一个明确结论。最后说：在什么情况下该选 A，什么情况下该选 B。' },
        { id: 'pros-cons', title: '列优缺点', hint: '别只顺着我说', text: '我想做「这里写你的想法」。请列出它的优点和缺点，各至少 4 条，缺点那部分要尽量尖锐，不要为了照顾我而省略。最后给一句你的判断。' },
        { id: 'counter', title: '从反面反驳我', hint: '专门找我没想到的地方', text: '我的观点是「这里写你的观点」。请站在反方，找出这个观点里最薄弱的 3 个地方，每个都给出具体理由和反例。最后说：如果我要坚持这个观点，需要补上什么证据。' },
        { id: 'assumption', title: '我漏了什么', hint: '找出没说出口的假设', text: '关于「这里写你的计划或判断」，请找出我可能没有意识到的假设，以及这些假设如果不成立会发生什么。按「假设 → 不成立会怎样 → 怎么提前验证」三段来写。' },
        { id: 'risk', title: '可能出什么问题', hint: '提前想好退路', text: '我准备做「这里写你要做的事」。请列出最可能出问题的 5 个地方，按可能性排序，每个都给出一个能提前做的准备，或者一个出问题后的补救办法。' },
        { id: 'decide', title: '帮我做决定', hint: '给出问题和判断标准', text: '我需要在「这里写选项」之间做决定。我在意的是「这里写你的标准，按重要性排序」。请先指出我给出的标准里可能互相冲突的地方，再给出你的建议和理由，最后说这个建议在什么条件下会变。' },
      ],
    },
  ]

  /** Every entry, flattened, in catalogue order, each carrying its group title. */
  function allPrompts() {
    const out = []
    for (const group of GROUPS) {
      for (const item of group.items) {
        out.push({ id: item.id, title: item.title, hint: item.hint, text: item.text, groupId: group.id, groupTitle: group.title })
      }
    }
    return out
  }

  /** Total number of prompts, for the host-side boot line and for tests. */
  function countPrompts() {
    return allPrompts().length
  }

  /**
   * Search the catalogue. A blank query returns everything, so opening the panel
   * always shows a full list rather than an empty one.
   * @param query - what the user typed.
   * @returns matching entries in catalogue order.
   */
  function searchPrompts(query) {
    const all = allPrompts()
    const needle = typeof query === 'string' ? query.trim().toLowerCase() : ''
    if (needle.length === 0) return all
    return all.filter(function (item) {
      return (item.title + ' ' + item.hint + ' ' + item.groupTitle + ' ' + item.text).toLowerCase().indexOf(needle) !== -1
    })
  }

  /**
   * Browser half of dsh-prompt-library.
   *
   * This file is a FACTORY BODY, not a module: build.mjs inlines it (plus
   * lib/library.js) into the generated lib/client.js, so everything below runs
   * inside the module-loader factory closure where React and the catalogue
   * helpers are already in scope.
   *
   * It renders one compact control into conversation.input.left - the left edge
   * of the composer tool row - and a search panel that opens above the composer.
   */

  const h = React.createElement

  /** Injected stylesheet owner id; removed when the plugin unloads. */
  const STYLE_ID = 'dsh-prompt-library-style'

  const CSS = [
    '.dpl-root { position: relative; display: inline-flex; }',
    '.dpl-btn {',
    '  display: inline-flex;',
    '  align-items: center;',
    '  gap: 5px;',
    '  padding: 3px 10px;',
    '  border: 1px solid var(--dsw-alias-border-l2);',
    '  border-radius: 999px;',
    '  background: transparent;',
    '  color: var(--dsw-alias-label-secondary);',
    '  font: 12px/1.4 ui-sans-serif, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;',
    '  cursor: pointer;',
    '  white-space: nowrap;',
    '}',
    '.dpl-btn:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }',
    '.dpl-panel {',
    '  position: fixed;',
    '  left: 16px;',
    '  bottom: 116px;',
    '  z-index: 45;',
    '  width: min(420px, calc(100vw - 32px));',
    '  max-height: min(56vh, 460px);',
    '  display: flex;',
    '  flex-direction: column;',
    '  overflow: hidden;',
    '  border: 1px solid var(--dsw-alias-border-l2);',
    '  border-radius: 14px;',
    '  background: var(--dsw-alias-bg-layer-1);',
    '  box-shadow: 0 18px 44px rgb(0 0 0 / 24%);',
    '  color: var(--dsw-alias-label-primary);',
    '  font: 12px/1.55 ui-sans-serif, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;',
    '}',
    '.dpl-head { display: flex; gap: 8px; align-items: center; padding: 9px 10px; border-bottom: 1px solid var(--dsw-alias-border-l1); }',
    '.dpl-search {',
    '  flex: 1;',
    '  min-width: 0;',
    '  padding: 5px 9px;',
    '  border: 1px solid var(--dsw-alias-border-l2);',
    '  border-radius: 8px;',
    '  background: var(--dsw-alias-bg-layer-2, transparent);',
    '  color: inherit;',
    '  font: inherit;',
    '  outline: none;',
    '}',
    '.dpl-search:focus { border-color: var(--dsw-alias-border-l3, #9aa4b2); }',
    '.dpl-close {',
    '  flex: none;',
    '  padding: 4px 9px;',
    '  border: 1px solid transparent;',
    '  border-radius: 8px;',
    '  background: transparent;',
    '  color: var(--dsw-alias-label-tertiary);',
    '  font: inherit;',
    '  cursor: pointer;',
    '}',
    '.dpl-close:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }',
    '.dpl-list { overflow-y: auto; padding: 6px; }',
    '.dpl-item {',
    '  display: flex;',
    '  align-items: baseline;',
    '  gap: 8px;',
    '  width: 100%;',
    '  padding: 6px 9px;',
    '  border: none;',
    '  border-radius: 8px;',
    '  background: transparent;',
    '  color: inherit;',
    '  font: inherit;',
    '  text-align: left;',
    '  cursor: pointer;',
    '}',
    '.dpl-item:hover { background: var(--dsw-alias-interactive-bg-hover); }',
    '.dpl-item__title { flex: none; font-weight: 600; }',
    '.dpl-item__hint { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-tertiary); }',
    '.dpl-item__group { flex: none; color: var(--dsw-alias-label-tertiary); font-size: 11px; }',
    '.dpl-empty { padding: 18px 10px; text-align: center; color: var(--dsw-alias-label-tertiary); }',
  ].join('\n')

  /**
   * The trigger plus, when open, a searchable list of ready-made instructions.
   * Picking one writes it into the composer draft; it never sends by itself.
   * @param props - session-scope slot props; only inputActions is read.
   * @returns the control element.
   */
  function PromptLibrary(props) {
    const openState = React.useState(false)
    const isOpen = openState[0] === true
    const setOpen = openState[1]
    const queryState = React.useState('')
    const query = typeof queryState[0] === 'string' ? queryState[0] : ''
    const setQuery = queryState[1]
    const actions = props.inputActions

    const results = React.useMemo(function () { return searchPrompts(query) }, [query])

    const trigger = h('button', {
      type: 'button',
      className: 'dpl-btn',
      title: '常用指令库：搜一下，点一下，填进输入框',
      'aria-expanded': isOpen ? 'true' : 'false',
      onClick: function () { setOpen(!isOpen) },
    }, '指令库')

    if (!isOpen) return h('div', { className: 'dpl-root' }, trigger)

    const rows = results.map(function (item) {
      return h('button', {
        type: 'button',
        className: 'dpl-item',
        key: item.id,
        title: item.text,
        onClick: function () {
          if (actions && typeof actions.setDraft === 'function') actions.setDraft(item.text)
          setOpen(false)
        },
      },
      h('span', { className: 'dpl-item__title' }, item.title),
      h('span', { className: 'dpl-item__hint' }, item.hint),
      h('span', { className: 'dpl-item__group' }, item.groupTitle))
    })

    return h('div', { className: 'dpl-root' },
      trigger,
      h('div', { className: 'dpl-panel', role: 'dialog', 'aria-label': '常用指令库' },
        h('div', { className: 'dpl-head' },
          h('input', {
            className: 'dpl-search',
            type: 'search',
            value: query,
            placeholder: '搜一下，比如 翻译 / 周报 / 说明白',
            autoFocus: true,
            onChange: function (event) { setQuery(event && event.target ? event.target.value : '') },
          }),
          h('button', { type: 'button', className: 'dpl-close', onClick: function () { setOpen(false) } }, '关闭')),
        h('div', { className: 'dpl-list' },
          results.length === 0
            ? h('div', { className: 'dpl-empty' }, '没找到，换个说法试试')
            : rows)))
  }

  /** Cordis services this browser half waits for: the slot registry. */
  const inject = ['slots']

  /**
   * Register the control at the left of the composer tool row, and keep the
   * stylesheet tied to this fiber's lifetime.
   * @param ctx - browser-half plugin context.
   */
  function apply(ctx) {
    ctx.effect(function () {
      const style = document.createElement('style')
      style.id = STYLE_ID
      style.textContent = CSS
      document.head.append(style)
      return function () { style.remove() }
    }, 'prompt-library: stylesheet')

    ctx.slots.inject('conversation.input.left', function () {
      return ctx.slots.register({ name: 'conversation.input.left', id: 'prompt-library' }, PromptLibrary)
    })
  }

		exports.PromptLibrary = PromptLibrary;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
