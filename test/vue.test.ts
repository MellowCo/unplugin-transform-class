import { describe, expect, it } from 'vitest'
import { getArrClass, getClass, getObjClass, transformCode } from '../src/core'
import { restoreSelector } from '../src/utils'
import { equalCode, firstUI, getArrClassCode, getClassCode, getObjClassCode1, getObjClassCode2, replaceAllCode, tmText, vueCode, vueCode2, vueCode3, vueCode4, vueCode5, vueCode6 } from './assets/vue'

const rules = {
  '.': '-dr-',
  '/': '-sr-',
  ':': '-cr-',
  '%': '-pr-',
  '!': '-er-',
  '#': '-wr-',
  '(': '-blr-',
  ')': '-brr-',
  '[': '-flr-',
  ']': '-frr-',
  '$': '-rr-',
  ',': '-ccc',
  '=': '-eqq-',
}

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
    expect(getClass(tmText)).toMatchSnapshot()
  })

  it('replaceAll', () => {
    expect(transformCode(replaceAllCode)).toMatchSnapshot()
  })

  it('transformCode', () => {
    expect(transformCode(vueCode)).toMatchSnapshot()
    expect(transformCode(vueCode2)).toMatchSnapshot()
    expect(transformCode(vueCode3)).toMatchSnapshot()
    expect(transformCode(vueCode4)).toMatchSnapshot()
    expect(transformCode(vueCode5)).toMatchSnapshot()
    expect(transformCode(vueCode6)).toMatchSnapshot()
    expect(transformCode(tmText)).toMatchSnapshot()
    expect(transformCode(firstUI)).toMatchSnapshot()
    expect(transformCode(equalCode)).toMatchSnapshot()
  })

  it('transform rules', () => {
    expect(transformCode(vueCode, rules)).toMatchSnapshot()
    expect(transformCode(vueCode2, rules)).toMatchSnapshot()
    expect(transformCode(vueCode3, rules)).toMatchSnapshot()
    expect(transformCode(vueCode4, rules)).toMatchSnapshot()
    expect(transformCode(vueCode5, rules)).toMatchSnapshot()
    expect(transformCode(tmText, rules)).toMatchSnapshot()
    expect(transformCode(firstUI, rules)).toMatchSnapshot()
    expect(transformCode(equalCode, rules)).toMatchSnapshot()
  })

  it('restoreSelector', () => {
    expect(restoreSelector(undefined, rules)).toMatchSnapshot()
    expect(restoreSelector('tracking--flr-2-sr-5-frr-', rules)).toMatchSnapshot()
    expect(restoreSelector('bg--flr-url-blr-https-cr--sr--sr-img-dr-cdn-dr-sugarat-dr-top-sr-mdImg-sr-MTY2ODA4OTc3MjcyMg-eqq--eqq-unocss-icon-gray-dr-svg-brr--frr-', rules)).toMatchSnapshot()
  })
})
