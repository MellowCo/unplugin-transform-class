/*
 * @Author: licl
 * @Date: 2022-07-08 15:56:57
 * @LastEditTime: 2022-07-23 09:08:28
 * @LastEditors: licl
 * @Description:
 */
import { describe, expect, it } from 'vitest'
import { getClass, transformCode } from '../src/core'
import { reactCode } from './assets/react'

describe('react', () => {
  it('getClass', () => {
    expect(getClass(reactCode)).toMatchSnapshot()
  })

  it('transformCode', () => {
    expect(transformCode(reactCode)).toMatchSnapshot()
  })
})
