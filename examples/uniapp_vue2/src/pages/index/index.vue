

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
	}
</script>


<template>
  <view class="content">
    <view class="indent-1/2 text-red-500-c-20  bg-blue-200-c-20 bg--fl--w-333-fr--s-50 bg--fl--w-999-fr--s-50"> indent-1/2 </view>
    <view class="font-[system-ui] bg-teal-200:55"> font-[system-ui]1 </view>
    <view class="font-$font-name"> font-$font-name </view>

    <view class="font-$font-name" :class="[title === '2.3' ? 'font-$font-name' : 'tracking-[2/5]']"> [title === '2.3' ? 'font-$font-name' : 'tracking-[2/5]'] </view>

    <view :class="{ 'bg-teal-200:55': title !== 'Hello', 'h-1.000%': title === 'Hello' }"> { 'bg-teal-200:55': title !== 'Hello', 'h-1.000%': title === 'Hello' } </view>

    <view class="tracking-[2/5] bg-teal-200:55"> tracking-[2/5] </view>
    <view class="h-1.000%"> h-1.000% </view>

    <view class="bg-teal-200:55"> bg-teal-200:55 </view>
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
