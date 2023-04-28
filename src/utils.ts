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
}

const escapePrefix = '\\'

export function escapeRegExp(str = '') {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function createTransformRegExp(rules: Record<string, string>) {
  return new RegExp(`[${escapeRegExp(Object.keys(rules).join(''))}]`)
}

/**
 * 转换选择器字符
 * @param selector 选择器
 * @param rules 转换规则
 * @example .bg-[#452233]:50 => .bg--fl--w-452233-fr--c-40-c-50
 */
export function transformSelector(selector = '', rules = defaultRules) {
  const transformRegExp = createTransformRegExp(rules)

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
export function transformEscapESelector(selector = '', rules = defaultRules) {
  const transformRegExp = createTransformRegExp(rules)

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
export function restoreSelector(selector = '', rules = defaultRules) {
  for (const transformRule in rules) {
    const replaceReg = new RegExp(rules[transformRule], 'g')
    selector = selector.replace(replaceReg, transformRule)
  }
  return selector
}

export { transformCode, getClass } from './core'
