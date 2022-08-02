import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { transformCode } from './core'

export default createUnplugin<Options>(() => ({
  name: 'unplugin-transform-we-class',
  enforce: 'pre',
  transformInclude(id) {
    return !id.includes('node_modules') && /.(vue|jsx|tsx)$/.test(id)
  },
  transform(code) {
    return transformCode(code)
  },
}))
