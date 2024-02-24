export const defaultRules: Record<string, string> = {
  '.': '_dl_',
  '/': '_sl_',
  ':': '_cl_',
  '%': '_pes_',
  '!': '_el_',
  '#': '_wn_',
  '(': '_lbl_',
  ')': '_lbr_',
  '[': '_lfl_',
  ']': '_lfr_',
  '$': '_do_',
  ',': '_lco_',
  '=': '_eqe_',
  '+': '_plus_',
  '*': '_star_',
}

export function escapeRegExp(str = '') {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function createTransformRegExp(rules: Record<string, string>, needEscape = false) {
  const escapePrefix = '\\'
  return new RegExp(Object.keys(rules).map(rule => escapeRegExp(`${needEscape ? escapePrefix : ''}${rule}`)).join('|'), 'g')
}

/**
 * 转换选择器字符
 * @param selector 选择器
 * @param rules 转换规则
 * @example bg-[#452233]:50 => bg--fl--w-452233-fr--c-40-c-50
 */
export function transformSelector(selector = '', rules = defaultRules) {
  const transformRegExp = createTransformRegExp(rules)

  return selector.replaceAll(transformRegExp, (m) => {
    return rules[m]
  })
}

export const cacheTransformSelector = (function () {
  let transformRegExp: RegExp

  return (selector = '', rules = defaultRules) => {
    if (!transformRegExp)
      transformRegExp = createTransformRegExp(rules)

    return selector.replaceAll(transformRegExp, (m) => {
      return rules[m]
    })
  }
}())

/**
 * 转换转义的选择器字符
 * @param selector 转义选择器
 * @param rules 转换规则
 * @example bg-\[\#452233\]\:50 => bg--fl--w-452233-fr--c-40-c-50
 */
export function transformEscapESelector(selector = '', rules = defaultRules) {
  const transformRegExp = createTransformRegExp(rules, true)

  return selector.replaceAll(transformRegExp, (m) => {
    return rules[m.replace('\\', '')]
  })
}

export const cacheTransformEscapESelector = (function () {
  let transformRegExp: RegExp

  return (selector = '', rules = defaultRules) => {
    if (!transformRegExp)
      transformRegExp = createTransformRegExp(rules, true)

    return selector.replaceAll(transformRegExp, (m) => {
      return rules[m.replace('\\', '')]
    })
  }
}())

/**
 * 还原转换后的选择器
 * @param selector 选择器
 * @param rules 转换规则
 * @example .bg--fl--w-452233-fr--c-40-c-50 => .bg-[#452233]:50
 */
export function restoreSelector(selector = '', rules = defaultRules) {
  const reverseRules = Object.fromEntries(Object.entries(rules).map(([key, value]) => [value, key]))
  const transformRegExp = createTransformRegExp(reverseRules)

  return selector.replaceAll(transformRegExp, (m) => {
    return reverseRules[m]
  })
}

export const cacheRestoreSelector = (function () {
  let transformRegExp: RegExp
  let reverseRules: Record<string, string>

  return (selector = '', rules = defaultRules) => {
    if (!transformRegExp) {
      reverseRules = Object.fromEntries(Object.entries(rules).map(([key, value]) => [value, key]))
      transformRegExp = createTransformRegExp(reverseRules)
    }

    return selector.replaceAll(transformRegExp, (m) => {
      return reverseRules[m]
    })
  }
}())

export { transformCode, getClass } from './core'
