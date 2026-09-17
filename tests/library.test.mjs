import { test } from 'node:test'
import assert from 'node:assert/strict'
import { GROUPS, allPrompts, countPrompts, searchPrompts } from '../lib/library.js'

test('the catalogue has several groups and a useful number of prompts', () => {
  assert.ok(GROUPS.length >= 4, 'expected at least four groups')
  assert.ok(countPrompts() >= 24, 'expected at least 24 prompts, got ' + countPrompts())
})

test('ids are unique and every entry is usable as-is', () => {
  const seen = new Set()
  for (const item of allPrompts()) {
    assert.ok(!seen.has(item.id), 'duplicate id: ' + item.id)
    seen.add(item.id)
    assert.ok(item.title.length > 0, 'empty title for ' + item.id)
    assert.ok(item.hint.length > 0, 'empty hint for ' + item.id)
    assert.ok(item.text.length >= 20, 'prompt too short for ' + item.id)
    assert.ok(item.groupTitle.length > 0, 'missing group title for ' + item.id)
  }
})

test('a blank query returns the whole catalogue', () => {
  assert.equal(searchPrompts('').length, countPrompts())
  assert.equal(searchPrompts('   ').length, countPrompts())
  assert.equal(searchPrompts(undefined).length, countPrompts())
})

test('search matches the title, the hint, the group and the body', () => {
  assert.ok(searchPrompts('翻译').some(item => item.id === 'translate'))
  assert.ok(searchPrompts('周报').some(item => item.id === 'weekly'))
  assert.ok(searchPrompts('朋友圈').some(item => item.id === 'pyq'))
  assert.ok(searchPrompts('学习').some(item => item.groupId === 'study'))
})

test('search is case-insensitive and trims the query', () => {
  const upper = searchPrompts('API')
  const lower = searchPrompts('api')
  assert.deepEqual(upper.map(i => i.id), lower.map(i => i.id))
  assert.equal(searchPrompts('  翻译  ').length, searchPrompts('翻译').length)
})

test('a query with no match returns nothing rather than everything', () => {
  assert.deepEqual(searchPrompts('zzzznope'), [])
})

test('every prompt leaves exactly one obvious thing to replace', () => {
  for (const item of allPrompts()) {
    assert.ok(item.text.indexOf('「') !== -1, 'prompt has no placeholder: ' + item.id)
    assert.ok(item.text.indexOf('」') !== -1, 'prompt has an unclosed placeholder: ' + item.id)
  }
})

test('no prompt is so long that it becomes a document', () => {
  for (const item of allPrompts()) {
    assert.ok(item.text.length <= 400, 'prompt too long for a composer: ' + item.id)
  }
})
