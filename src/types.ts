export interface Options {
  /**
   * 自定义转换规则
   * @default
   * {
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
    }
   */
  rules?: Record<string, string>
}
