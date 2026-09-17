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
