import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import type { Options } from './types'
import { transformCode } from './core'

const filter = createFilter(
  [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/],
  [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
)

export default createUnplugin<Options>((options) => {
  const rules = options.rules

  return {
    name: 'unplugin-transform-we-class',
    enforce: 'pre',
    transformInclude(id) {
      return filter(id)
    },
    transform(code) {
      return transformCode(code, rules)
    },
  }
})
