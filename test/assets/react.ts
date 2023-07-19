export const reactCode = `<View className='content'>
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

<View className="text-gray-500/50">
text-gray-500
</View>

<View className="text-red-500_50">
text-red-500
</View>

<View className="text-red-500:50">
text-red-500
</View>

<View className="text-red-500/50">
text-red-500
</View>

<View className="text-yellow-500_50">
text-yellow-500
</View>

<View className="text-yellow-500:50">
text-yellow-500
</View>

<View className="text-yellow-500/50">
text-yellow-500
</View>

<View className="text-blue-500_50">
text-blue-500
</View>

<View className="text-blue-500/50">
text-blue-500
</View>

<View className="text-blue-500:50">
text-blue-500
</View>

<View className="text-green-500_50">
text-green-500
</View>

<View className="text-green-500:50">
text-green-500
</View>

<View className="text-green-500/50">
text-green-500
</View>

<View className="c-hex-157_60">
c-hex-157
</View>

<View className="c-hex-157/60">
c-hex-157
</View>

<View className="c-[#157]/60">
c-[#157]
</View>

<View className="c-[#157]_60">
c-[#157]
</View>

<View className="c-[#157]:60">
c-[#157]
</View>
</View>`

export const dynamicCode = `
<div className={day < 20 ? 'c-#e67e22' : "c-[#157]/60"} >剩余 {day} 天</div>
<div className />
<div className={classnames({
  'c-#e67e22':true, 
  "tracking-[2/5]":false
})
}/>
`
// 空 className
export const emptyClassName = `
<View className="">
    <Button size="lg">123123</Button>
</View>

<View className={}>
    <Button size="lg">123123</Button>
</View>
`
