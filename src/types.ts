import type { FilterPattern } from '@rollup/pluginutils'

export interface Options {
  /**
   * 自定义转换规则
   * @default
   * {
      '.': '-dl-',
      '/': '-sl-',
      ':': '-cl-',
      '%': '-pes-',
      '!': '-el-',
      '#': '-wn-',
      '(': '-lbl-',
      ')': '-lbr-',
      '[': '-lfl-',
      ']': '-lfr-',
      '$': '-do-',
      ',': '-lco-',
      '=': '-eqe-',
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
}
