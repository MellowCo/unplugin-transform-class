export const defaultRules: Record<string, string> = {
  '.': '-d-',
  '/': '-s-',
  ':': '-c-',
  '%': '-p-',
  '!': '-e-',
  '#': '-w-',
  '(': '-bl-',
  ')': '-br-',
  '[': '-fl-',
  ']': '-fr-',
  '$': '-r-',
  ',': '-co-',
}

const transformRegExp = /[,\.\/:%!#\(\)\[\]$]/

const escapePrefix = '\\'

export function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * 转换选择器字符
 * @param selector 选择器
 * @param rules 转换规则
 * @example .bg-[#452233]:50 => .bg--fl--w-452233-fr--c-40-c-50
 */
export function transformSelector(selector: string, rules = defaultRules) {
  if (transformRegExp.test(selector)) {
    for (const transformRule in rules) {
      const replaceReg = new RegExp(`${escapePrefix}${transformRule}`, 'g')
      selector = selector.replace(replaceReg, rules[transformRule])
    }
  }

  return selector
}

/**
 * 转换转义的选择器字符
 * @param selector 转义选择器
 * @param rules 转换规则
 * @example .bg-\[\#452233\]\:50 => .bg--fl--w-452233-fr--c-40-c-50
 */
export function transformEscapESelector(selector: string, rules = defaultRules) {
  if (transformRegExp.test(selector)) {
    for (const transformRule in rules) {
      const replaceReg = new RegExp(escapeRegExp(`${escapePrefix}${transformRule}`), 'g')
      selector = selector.replace(replaceReg, rules[transformRule])
    }
  }

  return selector
}

/**
 * 还原转换后的选择器
 * @param selector 选择器
 * @param rules 转换规则
 * @example .bg--fl--w-452233-fr--c-40-c-50 => .bg-[#452233]:50
 */
export function restoreSelector(selector: string, rules = defaultRules) {
  for (const transformRule in rules) {
    const replaceReg = new RegExp(rules[transformRule], 'g')
    selector = selector.replace(replaceReg, transformRule)
  }
  return selector
}

export { transformCode } from './core'
