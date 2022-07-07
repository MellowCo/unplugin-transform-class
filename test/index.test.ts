import { describe, expect, it } from 'vitest'
import { getArrClass, getClass, getObjClass, transformCode } from '../src/core'

const code = `<template>
<view class="content">
  <view class="indent-1/2">
    indent-1/2
  </view>
  <view class="font-[system-ui] bg-teal-200:55">
    font-[system-ui]
  </view>
  <view class="font-$font-name">
    font-$font-name
  </view>

  <view class="font-$font-name" :class="[title === '2.3' ? 'font-$font-name bg-teal-200:55' : 'tracking-[2/5]',isFont ? 'font-$font-name' : 'tracking-[2/5]']">
    [title === '2.3' ? 'font-$font-name bg-teal-200:55' : 'tracking-[2/5]',isFont ? 'font-$font-name' : 'tracking-[2/5]']
  </view>

  <view :class="{ 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello', 'font-$font-name': isFont }">
    { 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello', 'font-$font-name': isFont }
  </view>

  <view class="tracking-[2/5] bg-teal-200:55">
    tracking-[2/5]
  </view>

  <view class="h-1.000%">
    h-1.000%
  </view>

  <view class="h-1\.000\%">
  h-1.000%
</view>

  <view class="bg-teal-200:55">
    bg-teal-200:55
  </view>
  <image class="logo" src="/static/logo.png" />
  <view class="text-area">
    <text class="title">
      {{ title }}
    </text>
  </view>
</view>
</template>`

describe('should', () => {
  it('getArrClass', () => {
    const code = `[
        title === '2.3' ? 'font-$font-name bg-teal-200:55' :'tracking-[2/5]',
        isFont ? 'font-$font-name' : 'tracking-[2/5]'
      ]`

    expect(getArrClass(code)).toMatchInlineSnapshot(`
      [
        "font-$font-name bg-teal-200:55",
        "tracking-[2/5]",
        "font-$font-name",
        "tracking-[2/5]",
      ]
    `)
  })

  it('getObjClass', () => {
    const code = `
    { 
      'bg-teal-200:55': title === 'Hello', 
      'h-1.000%': title === 'Hello', 
      'font-$font-name': isFont 
    }`

    expect(getObjClass(code)).toMatchInlineSnapshot(`
      [
        "bg-teal-200:55",
        "h-1.000%",
        "font-$font-name",
      ]
    `)
  })

  it('getClass', () => {
    const code = ` <view class="text-red-500:20  bg-blue-200:20">
    text-red-500:20
  </view>`

    expect(getClass(code)).toMatchInlineSnapshot(
    `
      [
        [
          "class=\\"text-red-500:20  bg-blue-200:20\\"",
          "text-red-500:20  bg-blue-200:20",
        ],
      ]
    `)
  })

  it('transformCode-replaceAll', () => {
    const code = ` <view class="text-red-500:20  bg-blue-200:20">
    text-red-500:20
  </view>`
    expect(transformCode(code)).toMatchInlineSnapshot(
    `
      " <view class=\\"text-red-500-c-20  bg-blue-200-c-20\\">
          text-red-500:20
        </view>"
    `)
  })

  it('transformCode', () => {
    expect(transformCode(code)).toMatchInlineSnapshot(
    `
      "<template>
      <view class=\\"content\\">
        <view class=\\"indent-1-s-2\\">
          indent-1/2
        </view>
        <view class=\\"font--fl-system-ui-fr- bg-teal-200-c-55\\">
          font-[system-ui]
        </view>
        <view class=\\"font--r-font-name\\">
          font-\$font-name
        </view>

        <view class=\\"font--r-font-name\\" :class=\\"[title === '2.3' ? 'font--r-font-name bg-teal-200-c-55' : 'tracking--fl-2-s-5-fr-',isFont ? 'font--r-font-name' : 'tracking--fl-2-s-5-fr-']\\">
          [title === '2.3' ? 'font-\$font-name bg-teal-200:55' : 'tracking-[2/5]',isFont ? 'font-\$font-name' : 'tracking-[2/5]']
        </view>

        <view :class=\\"{ 'bg-teal-200-c-55': title === 'Hello', 'h-1-d-000-p-': title === 'Hello', 'font--r-font-name': isFont }\\">
          { 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello', 'font-\$font-name': isFont }
        </view>

        <view class=\\"tracking--fl-2-s-5-fr- bg-teal-200-c-55\\">
          tracking-[2/5]
        </view>

        <view class=\\"h-1-d-000-p-\\">
          h-1.000%
        </view>

        <view class=\\"h-1-d-000-p-\\">
        h-1.000%
      </view>

        <view class=\\"bg-teal-200-c-55\\">
          bg-teal-200:55
        </view>
        <image class=\\"logo\\" src=\\"/static/logo.png\\" />
        <view class=\\"text-area\\">
          <text class=\\"title\\">
            {{ title }}
          </text>
        </view>
      </view>
      </template>"
    `)
  })
})
