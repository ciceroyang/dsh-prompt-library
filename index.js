/**
 * Host half of dsh-prompt-library.
 *
 * The catalogue is static data and the panel is pure UI, so this half owns no
 * service and touches no request path. It exists to be a real loader entry and
 * to print the shipped catalogue size once at boot.
 *
 * @module dsh-prompt-library
 */

import { countPrompts, GROUPS } from './lib/library.js'

/**
 * Announce the catalogue this build ships.
 * @param ctx - host plugin context.
 */
export function apply(ctx) {
  ctx.logger?.info?.('prompt-library: 常用指令库已挂载 - ' + countPrompts() + ' 条指令 / ' + GROUPS.length + ' 组')
}
