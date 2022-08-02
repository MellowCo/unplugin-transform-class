export const getArrClassCode = `[
  title === '2.3' ? 'font-$font-name bg-teal-200:55' :'tracking-[2/5]',
  isFont ? 'font-$font-name' : 'tracking-[2/5]'
]`

export const getObjClassCode1 = `
{ 
  'bg-teal-200:55': title === 'Hello', 
  'h-1.000%': title === 'Hello', 
  'font-$font-name': isFont 
}`

export const getObjClassCode2 = `
{
  'bg-blue-600:80': flag,
  'text-green-600/40': !flag,
}
>
111111111
</view>`

export const getClassCode = `<view class="text-red-500:20  bg-blue-200:20">
text-red-500:20
</view>`

export const replaceAllCode = `<view class="text-red-500:20  bg-blue-200:20 bg-[#333]/50 bg-[#999]/50">
text-red-500:20
</view>`

export const vueCode = `<template>
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

export const vueCode2 = `
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

<view
  :class="[
    flag ? 'bg-blue-600/40' : 'bg-blue-600:80',
    !flag ? 'text-yellow-800/80' : 'text-yellow-800/40',
  ]"
>
  111111111
</view>

<view class="content title foot">view</view>

</view>
</template>
`
// 非 [] {} 动态class
export const vueCode3 = `
<template>
<view v-if="n.name=='img'" :class="'_img '+n.attrs.class" :style="n.attrs.style" :data-attrs="n.attrs" @tap="imgtap">
</view>
<view :class="n.attrs.class"></view>  
</template>
`
