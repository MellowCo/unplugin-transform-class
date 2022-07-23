import { describe, expect, it } from 'vitest'
import { getArrClass, getClass, getObjClass, transformCode } from '../src/core'
import { getArrClassCode, getClassCode, getObjClassCode1, getObjClassCode2, replaceAllCode, vueCode, vueCode2 } from './assets/vue'

describe('vue', () => {
  it('getArrClass', () => {
    expect(getArrClass(getArrClassCode)).toMatchSnapshot()
  })

  it('getObjClass', () => {
    expect(getObjClass(getObjClassCode1)).toMatchSnapshot()
    expect(getObjClass(getObjClassCode2)).toMatchSnapshot()
  })

  it('getClass', () => {
    expect(getClass(getClassCode)).toMatchSnapshot()
  })

  it('replaceAll', () => {
    expect(transformCode(replaceAllCode)).toMatchSnapshot()
  })

  it('transformCode', () => {
    expect(transformCode(vueCode)).toMatchSnapshot()
    expect(transformCode(vueCode2)).toMatchSnapshot()
  })
})
