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

describe('vue', () => {
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

    const code2 = `
    {
      'bg-blue-600:80': flag,
      'text-green-600/40': !flag,
    }
  >
    111111111
  </view>`

    expect(getObjClass(code2)).toMatchInlineSnapshot(`
      [
        "bg-blue-600:80",
        "text-green-600/40",
      ]
    `)
  })

  it('getClass', () => {
    const code = `<view class="text-red-500:20  bg-blue-200:20">
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
    const code = `<view class="text-red-500:20  bg-blue-200:20">
    text-red-500:20
  </view>`
    expect(transformCode(code)).toMatchInlineSnapshot(
    `
      "<view class=\\"text-red-500-c-20  bg-blue-200-c-20\\">
          text-red-500:20
        </view>"
    `)
  })

  it('transformCode', () => {
    const code2 = `
    <template>
    <view class="p-2">
      <view class="w-300 p-2 bg-green-200 text-center" @click="onChange">
        change flag
      </view>
  
      <view
        :class="{
          'bg-blue-600:80': flag,
          'text-green-600/40': !flag,
        }"
      >
        111111111
      </view>
  
      <view
        :class="{'bg-blue-600:80': flag,'text-green-600/40': !flag}"
      >
        111111111
      </view>


      <view
      :class="[
        flag ? 'bg-blue-600/40' : 'bg-blue-600:80',
        !flag ? 'text-yellow-800/80' : 'text-yellow-800/40',
      ]"
    >
      111111111
    </view>
    </view>
  </template>
`

    expect(transformCode(code2)).toMatchInlineSnapshot(
    `
      "
          <template>
          <view class=\\"p-2\\">
            <view class=\\"w-300 p-2 bg-green-200 text-center\\" @click=\\"onChange\\">
              change flag
            </view>
        
            <view
              :class=\\"{
                'bg-blue-600-c-80': flag,
                'text-green-600-s-40': !flag,
              }\\"
            >
              111111111
            </view>
        
            <view
              :class=\\"{'bg-blue-600-c-80': flag,'text-green-600-s-40': !flag}\\"
            >
              111111111
            </view>


            <view
            :class=\\"[
              flag ? 'bg-blue-600-s-40' : 'bg-blue-600-c-80',
              !flag ? 'text-yellow-800-s-80' : 'text-yellow-800-s-40',
            ]\\"
          >
            111111111
          </view>
          </view>
        </template>
      "
    `)
  })
})
