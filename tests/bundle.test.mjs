/**
 * Contract test for the generated browser bundle: it must be valid, register
 * under the package name, and wire the component into conversation.input.left.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function loadBundle() {
  let registration = null
  globalThis.window = { __ModuleLoader__: { load(reg) { registration = reg } } }
  const stateWrites = []
  const react = {
    createElement: function () {
      return { type: arguments[0], props: arguments[1] || {}, children: Array.prototype.slice.call(arguments, 2) }
    },
    useMemo: function (fn) { return fn() },
    useState: function (initial) {
      return [typeof initial === 'function' ? initial() : initial, function (value) { stateWrites.push(value) }]
    },
    useEffect: function () {},
    useRef: function (value) { return { current: value } },
  }
  const code = readFileSync(join(root, 'lib/client.js'), 'utf8')
  new Function(code)()
  assert.ok(registration, 'the bundle must register with the module loader')
  const mod = registration.factory(function (name) {
    if (name === 'react') return react
    throw new Error('unexpected require: ' + name)
  })
  return { registration, mod, stateWrites }
}

test('the generated bundle registers under the package name', () => {
  const { registration } = loadBundle()
  assert.equal(registration.id, 'dsh-prompt-library')
})

test('the client half registers at the left of the composer tool row', () => {
  const { mod } = loadBundle()
  assert.deepEqual(mod.inject, ['slots'])
  const injected = []
  const registered = []
  let style = null
  globalThis.document = {
    createElement: function () { style = { id: '', textContent: '', remove: function () {} }; return style },
    head: { append: function () {} },
  }
  const ctx = {
    effect: function (fn, label) { assert.equal(typeof label, 'string'); assert.equal(typeof fn(), 'function') },
    slots: {
      inject: function (name, cb) { injected.push(name); cb() },
      register: function (options, Component) { registered.push({ options, Component }); return function () {} },
    },
  }
  mod.apply(ctx)
  assert.deepEqual(injected, ['conversation.input.left'])
  assert.equal(registered[0].options.name, 'conversation.input.left')
  assert.equal(registered[0].options.id, 'prompt-library')
  assert.ok(style && style.id === 'dsh-prompt-library-style')
  assert.ok(style.textContent.indexOf('dpl-panel') !== -1)
})

test('the control renders a trigger and toggles the panel on click', () => {
  const { mod, stateWrites } = loadBundle()
  const node = mod.PromptLibrary({ inputActions: { setDraft: function () {} } })
  assert.ok(node, 'the control must render')
  const trigger = node.children[0]
  assert.equal(trigger.props.className, 'dpl-btn')
  assert.deepEqual(trigger.children, ['指令库'])
  trigger.props.onClick()
  assert.deepEqual(stateWrites, [true])
})
