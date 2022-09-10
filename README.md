# unplugin-transform-we-class
[![Version](https://img.shields.io/npm/v/unplugin-transform-we-class.svg?style=flat-square&logo=npm) 
![Downloads](https://img.shields.io/npm/dm/unplugin-transform-we-class.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/unplugin-transform-we-class)


> 使用该插件中转换 `微信小程序` 中不支持的 `\\`，`\:` `\[` `\$`  `\.` 等转义类名
>
> 结合 [unocss 小程序预设](https://github.com/MellowCo/unocss-preset-weapp) ，实现 `unocss` 在小程序中开发使用

![image-20220703141301371](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031413496.png)

相关链接

* [UnoCSS](https://github.com/unocss/unocss) - 即时按需原子CSS引擎
* [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) - UnoCSS 微信小程序预设
* [unplugin-transform-we-class](https://github.com/MellowCo/unplugin-transform-we-class) - 小程序原子化 CSS 转换转义类名插件
* [unplugin-unocss-attributify-wechat](https://github.com/MellowCo/unplugin-unocss-attributify-wechat) - 小程序 Attributify Mode 插件
* [unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2) - 兼容 UniApp Vue2 App开发插件
* [uni-vue3-starter](https://github.com/MellowCo/uni-vue3-starter) - Uniapp-Vite 模版
* 原子化css冲突问题，例 [tmui](https://tmui.design/) 内置 [原子化css](https://tmui.design/doc/CSSTool/css.html) 与 unocss 冲突问题，[解决方案](https://github.com/MellowCo/unplugin-unocss-attributify-wechat#%E5%8E%9F%E5%AD%90%E5%8C%96-css-%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98)

## options
```ts
export interface Options {
  /**
   * 自定义转换规则
   * @default
   * {
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
      ',': '-co-',
    }
   */
  rules?: Record<string, string>

  /**
   * 排除转换目标
   * @default [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
   */
  exclude?: FilterPattern

  /**
   * 需要转换的目标
   * @default [/\.[jt]sx?$/, /\.vue$/,  /\.vue\?vue/]
   */
  include?: FilterPattern
}
```

---

## 使用

### webpack
```ts
const transformWeClass = require('unplugin-transform-we-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/MellowCo/unplugin-transform-we-class
      transformWeClass(),
    ],
  },
}
```


---

### vite
```ts
import { defineConfig } from 'vite'
import transformWeClass from 'unplugin-transform-we-class/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/MellowCo/unplugin-transform-we-class
    transformWeClass(),
  ],
})
```

---
## 自定义转换规则

```ts
// webpack
// const transformWeClass =  require('unplugin-transform-we-class/webpack')
// import transformWeClass from 'unplugin-transform-we-class/webpack'

// vite
import transformWeClass from 'unplugin-transform-we-class/vite'

const myRules = {
  '.': '-ddd-',
  '/': '-ss-',
  ':': '-cc-',
  '%': '-pp-'
}

transformWeClass({
  rules: myRules
})
```

---
## 设置 exclude include
```ts
// webpack
// const transformWeClass =  require('unplugin-transform-we-class/webpack')
// import transformWeClass from 'unplugin-transform-we-class/webpack'

// vite
import transformWeClass from 'unplugin-transform-we-class/vite'

transformWeClass({
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]my-folder[\\/]/],
  include: [/\.vue$/, /\.vue\?vue/]
})
```

---
## 工具方法导出
```ts
import { defaultRules, escapeRegExp, restoreSelector, transformEscapESelector, transformSelector } from 'unplugin-transform-we-class/utils'
```

---
## 示例

[uniapp_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue3)   
[uniapp_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue2)   
[taro_react](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_react)   
[taro_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue2)   
[taro_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue3)  

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031414239.png" alt="image-20220703141451188" style="zoom:50%;" />



