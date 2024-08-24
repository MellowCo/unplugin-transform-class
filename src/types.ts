import type { FilterPattern } from '@rollup/pluginutils'

export type ClassNameMatcher = RegExp | string
export interface Options {
  /**
   * 自定义转换规则
   * @default
   * {
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
   */
  rules?: Record<string, string>

  /**
   * 排除转换目标
   * @default [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
   */
  exclude?: FilterPattern

  /**
   * 需要转换的目标
   * @default [/\.[jt]sx?$/, /\.vue$/,  /\.vue\?vue/]
   */
  include?: FilterPattern

  /**
   * 需要转换的类名匹配规则
   * @default "class"
   */
  classNameMatcher?: ClassNameMatcher
}
