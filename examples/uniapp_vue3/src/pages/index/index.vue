<script setup lang="ts">
  import { ref } from 'vue'

  const title = ref('Hello')
</script>

<template>
  <view class="content">
    <view class="indent-1/2">
      1
    </view>
    <view class="font-[system-ui] bg-teal-200:55">
      2
    </view>
    <view class="font-$font-name">
      3
    </view>

    <view class="font-$font-name" :class="[title === '2.3' ? 'font-$font-name' : 'tracking-[2/5]']">
      4
    </view>

    <view :class="{ 'bg-teal-200:55': title !== 'Hello', 'h-1.000%': title === 'Hello' }">
      5
    </view>

    <view class="tracking-[2/5] bg-teal-200:55">
      6
    </view>
    <view class="h-1.000%">
      7
    </view>

    <view class="bg-teal-200:55">
      8
    </view>

    <view class="bg-red">
      9
    </view>

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
