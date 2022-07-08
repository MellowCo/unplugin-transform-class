
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

<View className='text-cyan-500_50'>
text-cyan-500
</View>

<View className='text-cyan-500:50'>
text-cyan-500
</View>

<View className='text-cyan-500/50'>
text-cyan-500
</View>

<View className='c-hex-6366f1_60'>
c-hex-6366f1
</View>

<View className='c-hex-6366f1/60'>
c-hex-#6366f1
</View>

<View className='c-[#6366f1]/60'>
c-[#6366f1]
</View>

<View className='c-[#6366f1]_60'>
c-[#6366f1]
</View>

<View className='c-[#6366f1]:60'>
c-[#6366f1]
</View>
</View>
  )
}

