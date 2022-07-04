import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-transform-wx-class',
  enforce:'pre',
  transformInclude(id) {
    return id.endsWith('.vue')
  },
  transform(code) {
    console.log('[ code ] >' , code)
    return code.replace('__UNPLUGIN__', `Hello Unplugin! ${options}`)
  },
}))
