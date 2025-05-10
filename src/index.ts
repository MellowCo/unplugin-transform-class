import type { UnpluginFactory } from 'unplugin'
import type { Options } from './types'
import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import { transformCode } from './core'

export const unpluginFactory: UnpluginFactory<Options|undefined> = (options = {}) => {

  const rules = options.rules

  const filter = createFilter(
    options.include || [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )

  return {
    name: 'unplugin-transform-class',
    enforce: 'pre',
    transformInclude(id) {
      return filter(id)
    },
    transform(code) {
      return transformCode(code, rules)
    },
  }


}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
