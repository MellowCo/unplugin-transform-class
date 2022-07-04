# unplugin-transform-wx-class

[![NPM version](https://img.shields.io/npm/v/unplugin-transform-wx-class?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-transform-wx-class)

> 使用该插件转换微信小程序中带有特殊转义`class`，例如`\[` `\!` `\.`
>
> 结合[unocss 小程序预设](https://github.com/MellowCo/unocss-preset-weapp)，实现`unocss`在小程序中开发使用

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
pnpm add -D unocss unplugin-transform-wx-class unocss-preset-wxapp
```

>  vue.config.js

```ts
// webpack.config.js
const UnoCSS = require('unocss/webpack').default
const presetWxapp = require('unocss-preset-wxapp').default
const transformWxClass =  require('unplugin-transform-wx-class/webpack')
const transformSelector = require('unplugin-transform-wx-class/transformSelector')

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS({ 
        presets: [
          presetWxapp(),
        ],
        shortcuts: [
          {
            'border-base': 'border border-gray-500_10',
            'center': 'flex justify-center items-center',
          },
        ],
        postprocess: (css) => {
          css.selector = transformSelector(css.selector)
          return css
        },
      }),
      transformWxClass()
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
pnpm add -D unocss unplugin-transform-wx-class unocss-preset-wxapp
```

> vite.config.ts

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWxapp from 'unocss-preset-wxapp'
import { transformWxClass,transformSelector } from 'unplugin-transform-wx-class/vite'

export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        presetWxapp(),
      ],
      shortcuts: [
        {
          'border-base': 'border border-gray-500_10',
          'center': 'flex justify-center items-center',
        },
      ],
      postprocess: (css) => {
        css.selector = transformSelector(css.selector)
        return css
      },
    }),
    transformWxClass(),
  ],
})
```



