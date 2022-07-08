/*
 * @Author: licl
 * @Date: 2022-07-08 15:56:57
 * @LastEditTime: 2022-07-08 16:31:01
 * @LastEditors: licl
 * @Description:
 */
import { describe, expect, it } from 'vitest'
import { getClass, transformCode } from '../src/core'

const reactCode = `<View className='content'>
<View className='indent-1/2'> indent-1/2 </View>
<View className='font-[system-ui] bg-teal-200:55'> font-[system-ui] </View>
<View className='font-$font-name'> font-$font-name </View>

<View className='tracking-[2/5] bg-teal-200:55'> tracking-[2/5] </View>
<View className='h-1.000%'> h-1.000% </View>

<View className='bg-teal-200:55'> bg-teal-200:55 </View>
<View className='text-area'>

</View>

<View className='text-gray-500_50'>
text-gray-500
</View>

<View className='text-gray-500:50'>
text-gray-500
</View>

<View className='text-gray-500/50'>
text-gray-500
</View>

<View className='text-red-500_50'>
text-red-500
</View>

<View className='text-red-500:50'>
text-red-500
</View>

<View className='text-red-500/50'>
text-red-500
</View>

<View className='text-yellow-500_50'>
text-yellow-500
</View>

<View className='text-yellow-500:50'>
text-yellow-500
</View>

<View className='text-yellow-500/50'>
text-yellow-500
</View>

<View className='text-blue-500_50'>
text-blue-500
</View>

<View className='text-blue-500/50'>
text-blue-500
</View>

<View className='text-blue-500:50'>
text-blue-500
</View>

<View className='text-green-500_50'>
text-green-500
</View>

<View className='text-green-500:50'>
text-green-500
</View>

<View className='text-green-500/50'>
text-green-500
</View>

<View className='c-hex-157_60'>
c-hex-157
</View>

<View className='c-hex-157/60'>
c-hex-157
</View>

<View className='c-[#157]/60'>
c-[#157]
</View>

<View className='c-[#157]_60'>
c-[#157]
</View>

<View className='c-[#157]:60'>
c-[#157]
</View>
</View>`

describe('react', () => {
  it('getClass', () => {
    expect(getClass(reactCode)).toMatchInlineSnapshot(
    `
      [
        [
          "className='content'",
          "content",
        ],
        [
          "className='indent-1/2'",
          "indent-1/2",
        ],
        [
          "className='font-[system-ui] bg-teal-200:55'",
          "font-[system-ui] bg-teal-200:55",
        ],
        [
          "className='font-\$font-name'",
          "font-\$font-name",
        ],
        [
          "className='tracking-[2/5] bg-teal-200:55'",
          "tracking-[2/5] bg-teal-200:55",
        ],
        [
          "className='h-1.000%'",
          "h-1.000%",
        ],
        [
          "className='bg-teal-200:55'",
          "bg-teal-200:55",
        ],
        [
          "className='text-area'",
          "text-area",
        ],
        [
          "className='text-gray-500_50'",
          "text-gray-500_50",
        ],
        [
          "className='text-gray-500:50'",
          "text-gray-500:50",
        ],
        [
          "className='text-gray-500/50'",
          "text-gray-500/50",
        ],
        [
          "className='text-red-500_50'",
          "text-red-500_50",
        ],
        [
          "className='text-red-500:50'",
          "text-red-500:50",
        ],
        [
          "className='text-red-500/50'",
          "text-red-500/50",
        ],
        [
          "className='text-yellow-500_50'",
          "text-yellow-500_50",
        ],
        [
          "className='text-yellow-500:50'",
          "text-yellow-500:50",
        ],
        [
          "className='text-yellow-500/50'",
          "text-yellow-500/50",
        ],
        [
          "className='text-blue-500_50'",
          "text-blue-500_50",
        ],
        [
          "className='text-blue-500/50'",
          "text-blue-500/50",
        ],
        [
          "className='text-blue-500:50'",
          "text-blue-500:50",
        ],
        [
          "className='text-green-500_50'",
          "text-green-500_50",
        ],
        [
          "className='text-green-500:50'",
          "text-green-500:50",
        ],
        [
          "className='text-green-500/50'",
          "text-green-500/50",
        ],
        [
          "className='c-hex-157_60'",
          "c-hex-157_60",
        ],
        [
          "className='c-hex-157/60'",
          "c-hex-157/60",
        ],
        [
          "className='c-[#157]/60'",
          "c-[#157]/60",
        ],
        [
          "className='c-[#157]_60'",
          "c-[#157]_60",
        ],
        [
          "className='c-[#157]:60'",
          "c-[#157]:60",
        ],
      ]
    `)
  })

  it('transformCode', () => {
    expect(transformCode(reactCode)).toMatchInlineSnapshot(
    `
      "<View className='content'>
      <View className='indent-1-s-2'> indent-1/2 </View>
      <View className='font--fl-system-ui-fr- bg-teal-200-c-55'> font-[system-ui] </View>
      <View className='font--r-font-name'> font-\$font-name </View>

      <View className='tracking--fl-2-s-5-fr- bg-teal-200-c-55'> tracking-[2/5] </View>
      <View className='h-1-d-000-p-'> h-1.000% </View>

      <View className='bg-teal-200-c-55'> bg-teal-200:55 </View>
      <View className='text-area'>

      </View>

      <View className='text-gray-500_50'>
      text-gray-500
      </View>

      <View className='text-gray-500-c-50'>
      text-gray-500
      </View>

      <View className='text-gray-500-s-50'>
      text-gray-500
      </View>

      <View className='text-red-500_50'>
      text-red-500
      </View>

      <View className='text-red-500-c-50'>
      text-red-500
      </View>

      <View className='text-red-500-s-50'>
      text-red-500
      </View>

      <View className='text-yellow-500_50'>
      text-yellow-500
      </View>

      <View className='text-yellow-500-c-50'>
      text-yellow-500
      </View>

      <View className='text-yellow-500-s-50'>
      text-yellow-500
      </View>

      <View className='text-blue-500_50'>
      text-blue-500
      </View>

      <View className='text-blue-500-s-50'>
      text-blue-500
      </View>

      <View className='text-blue-500-c-50'>
      text-blue-500
      </View>

      <View className='text-green-500_50'>
      text-green-500
      </View>

      <View className='text-green-500-c-50'>
      text-green-500
      </View>

      <View className='text-green-500-s-50'>
      text-green-500
      </View>

      <View className='c-hex-157_60'>
      c-hex-157
      </View>

      <View className='c-hex-157-s-60'>
      c-hex-157
      </View>

      <View className='c--fl--w-157-fr--s-60'>
      c-[#157]
      </View>

      <View className='c--fl--w-157-fr-_60'>
      c-[#157]
      </View>

      <View className='c--fl--w-157-fr--c-60'>
      c-[#157]
      </View>
      </View>"
    `)
  })
})
