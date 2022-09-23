<H1 align='center'>
unplugin-transform-class
</H1>


<p align='center'>
<b>English</b> | <a href="https://github.com/MellowCo/unplugin-transform-class/blob/main/README.zh-CN.md">简体中文</a>
</p>


[![Version](https://img.shields.io/npm/v/unplugin-transform-we-class.svg?style=flat-square&logo=npm) 
![Downloads](https://img.shields.io/npm/dm/unplugin-transform-we-class.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/unplugin-transform-we-class)

transfrom `html class` selector by custom rules 

to fit the functional semantics，`unplugin-transform-we-class` rename to `unplugin-transform-class`

---

static class

```html
<view class="tracking-[2/5] bg-teal-200:55">
  tracking-[2/5]
</view>
```

setting rules

```js
const rules = {
  '/': '-s-',
  ':': '-c-',
  '[': '-fl-',
  ']': '-fr-',
}

transformClass({
  rules
})
```

transfrom

```html
  <view class="tracking--fl-2-sr-5-fr- bg-teal-200-c-55">
    tracking-[2/5]
  </view>
```

---

dynamic class

```html
<view
  :class="{'bg-blue-600:80': flag,'text-green-600/40': !flag}"
>
  111111111
</view>

<view
  :class="[
    flag ? 'bg-blue-600/40' : 'bg-blue-600:80',
    !flag ? 'text-yellow-800/80' : 'text-yellow-800/40',
  ]"
>
  111111111
</view>
```

transfrom

```html

  <view
    :class="{'bg-blue-600-c-80': flag,'text-green-600-s-40': !flag}"
  >
    111111111
  </view>


  <view
  :class="[
    flag ? 'bg-blue-600-s-40' : 'bg-blue-600-c-80',
    !flag ? 'text-yellow-800-s-80' : 'text-yellow-800-s-40',
  ]"
>
  111111111
</view>
```



## installation

```shell
npm i unplugin-transform-class -D
```

<details>
<summary>Vite</summary><br>

```ts
import { defineConfig } from 'vite'
import transformClass from 'unplugin-transform-class/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/MellowCo/unplugin-transform-class
    transformClass(),
  ],
})
```

<br></details>


<details>
<summary>webpack</summary><br>

```ts
const transformClass = require('unplugin-transform-class/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      // https://github.com/MellowCo/unplugin-transform-class
      transformClass(),
    ],
  },
}
```

<br></details>

---
## usage

### options
```ts
export interface Options {
  /**
   * custom transform Rules
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
   * exclude
   * @default [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
   */
  exclude?: FilterPattern

  /**
   * include
   * @default [/\.[jt]sx?$/, /\.vue$/,  /\.vue\?vue/]
   */
  include?: FilterPattern
}
```

---
### custom transform Rules

```ts
// webpack
// const transformClass =  require('unplugin-transform-class/webpack')
// import transformClass from 'unplugin-transform-class/webpack'

// vite
import transformClass from 'unplugin-transform-class/vite'

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
### exclude include
```ts
// webpack
// const transformClass =  require('unplugin-transform-class/webpack')
// import transformClass from 'unplugin-transform-class/webpack'

// vite
import transformClass from 'unplugin-transform-class/vite'

transformWeClass({
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]my-folder[\\/]/],
  include: [/\.vue$/, /\.vue\?vue/]
})
```

---
### utils
```ts
import { defaultRules, escapeRegExp, restoreSelector, transformCode, transformEscapESelector, transformSelector } from 'unplugin-transform-class/utils'

const code = `
<view class="tracking-[2/5] bg-teal-200:55">
  tracking-[2/5]
</view>`

const rules = {
  '/': '-s-',
  ':': '-c-',
  '[': '-fl-',
  ']': '-fr-',
}

const newCode = transformCode(code, rules)
```

---
## use case

### use atomic css in miniprogram 

> transfrom the escape class  not supported by miniprogram, like `\\`，`\:` `\[` `\$`  `\.` , implement the atomic css in miniprogram

![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202209181628083.png)

> for example use [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp), use unocss development in miniprogram

![image-20220703141301371](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031413496.png)



related links
* [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand atomic css engine.
* [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) - the unocss preset for wechat miniprogram.
* [unplugin-transform-class](https://github.com/MellowCo/unplugin-transform-class) - transform class plugin, support use in vite, rollup, webpack
* [unplugin-unocss-attributify-wechat](https://github.com/MellowCo/unplugin-attributify-to-class) - css attributify mode to class, support use in vite, rollup, webpack
* [unocss-webpack-uniapp2](https://github.com/MellowCo/unocss-webpack-uniapp2#unocss-webpack-uniapp2) - compatible uniApp vue2 app plugin by unocss
* [uni-vue3-starter](https://github.com/MellowCo/uni-vue3-starter) - uniapp-vite template
* atomic css conflict problem，like [tmui](https://tmui.design/) built-in [atomic css](https://tmui.design/doc/CSSTool/css.html) conflict with unocss，[solution](https://github.com/MellowCo/unocss-preset-weapp#%E5%8E%9F%E5%AD%90%E5%8C%96-css-%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98)
