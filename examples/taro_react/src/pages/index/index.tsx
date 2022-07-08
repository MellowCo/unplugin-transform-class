import { Component } from 'react'
import { View} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
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
    </View>
    )
  }
}
