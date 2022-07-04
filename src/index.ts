import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import {transformCode} from './core'

export default createUnplugin<Options>(() => ({
  name: 'unplugin-transform-wx-class',
  enforce:'pre',
  transformInclude(id) {
    return id.endsWith('.vue')
  },
  transform(code) {
    return transformCode(code)
  },
}))
