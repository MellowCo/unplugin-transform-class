/*
 * @Author: licl
 * @Date: 2022-07-08 16:18:34
 * @LastEditTime: 2022-07-08 16:27:42
 * @LastEditors: licl
 * @Description:
 */
import {View} from '@tarojs/components'


export default function index() {
  return (
    <View className='content'>
<View className='indent-1/2'> indent-1/2 </View>
<View className='font-[system-ui] bg-teal-200:55'> font-[system-ui] </View>
<View className='font-$font-name'> font-$font-name </View>

<View className='tracking-[2/5] bg-teal-200:55'> tracking-[2/5] </View>
<View className='h-1.000%'> h-1.000% </View>

<View className='bg-teal-200:55'> bg-teal-200:55 </View>
<View className='text-area'>

</View>

<View className='text-rose-500_50'>
text-rose-500
</View>

<View className='text-rose-500:50'>
text-rose-500
</View>

<View className='text-rose-500/50'>
text-rose-500
</View>

<View className='c-hex-84cc16_60'>
c-hex-84cc16
</View>

<View className='c-hex-84cc16/60'>
c-hex-#84cc16
</View>

<View className='c-[#84cc16]/60'>
c-[#84cc16]
</View>

<View className='c-[#84cc16]_60'>
c-[#84cc16]
</View>

<View className='c-[#84cc16]:60'>
c-[#84cc16]
</View>
</View>
  )
}
