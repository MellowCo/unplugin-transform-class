# unplugin-transform-we-class

[![NPM version](https://img.shields.io/npm/v/unplugin-transform-we-class?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-transform-we-class)

> 使用该插件转换微信小程序中带有特殊转义`class`，例如`\[` `\!` `\.`
>
> 结合[unocss 小程序预设](https://github.com/MellowCo/unocss-preset-weapp)，实现 `unocss` 在小程序中开发使用

## 转换规则
```js
const transformRules = {
  '.': '-d-',
  '/': '-s-',
  ':': '-c-',
  '%': '-p-',
  '!': '-e-',
  '#': '-w-',
  '(': '-bl-',
  ')': '-br-',
  '[': '-fl-',
  ']': '-fr-',
  '$': '-r-',
}
```



## 安装
### webpack

> 在[uniapp vue2](https://uniapp.dcloud.io/quickstart-cli.html#创建uni-app)中使用


```bash
# 创建uni-app
vue create -p dcloudio/uni-preset-vue my-project
# 安装unocss
pnpm add -D unocss @unocss/webpack unplugin-transform-we-class unocss-preset-weapp
```

>  vue.config.js

```ts
const UnoCSS = require('unocss/webpack').default
const presetWeapp = require('unocss-preset-weapp').default
const transformWeClass = require('unplugin-transform-we-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS({
        presets: [
          presetWeapp(),
        ],
        shortcuts: [
          {
            'border-base': 'border border-gray-500_10',
            'center': 'flex justify-center items-center',
          },
        ],
      }),
      transformWeClass()
    ],
  },
}
```



---

### vite

> 在[uni-app vue3中使用](https://ask.dcloud.net.cn/article/37834)中使用

```shell
# 使用Vue3/Vite版
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
# 安装unocss
pnpm add -D unocss unplugin-transform-we-class unocss-preset-weapp
```

> vite.config.ts

```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWeapp from 'unocss-preset-weapp'
import transformWeClass from 'unplugin-transform-we-class/vite'

export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        presetWeapp(),
      ],
      shortcuts: [
        {
          'border-base': 'border border-gray-500_10',
          'center': 'flex justify-center items-center',
        },
      ],
    }),
    transformWeClass(),
  ],
})
```



---

## 示例


[uniapp_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue3)   
[uniapp_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue2)   
[taro_react](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_react)   
[taro_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue2)   
[taro_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue3)  

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031414239.png" alt="image-20220703141451188" style="zoom:50%;" />



