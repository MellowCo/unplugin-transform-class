<H1 align='center'>
unplugin-transform-class
</H1>


<p align='center'>
<a href="https://github.com/MellowCo/unplugin-transform-class/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

按照自定义转换规则， 转换 `html class` 选择器

---

静态class

```html
<view class="tracking-[2/5] bg-teal-200:55">
  tracking-[2/5]
</view>
```

设置rules

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

转换后

```html
<view class="tracking--fl-2-sr-5-fr- bg-teal-200-c-55">
  tracking-[2/5]
</view>
```

---

动态复杂class

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

转换后

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



## 下载

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
## 如何使用

### options
```ts
export interface Options {
  /**
   * 自定义转换规则
   * @default
   * {
      '.': '_dl_',
      '/': '_sl_',
      ':': '_cl_',
      '%': '_pes_',
      '!': '_el_',
      '#': '_wn_',
      '(': '_lbl_',
      ')': '_lbr_',
      '[': '_lfl_',
      ']': '_lfr_',
      '$': '_do_',
      ',': '_lco_',
      '=': '_eqe_',
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
### 自定义转换规则

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
### 设置 exclude include
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
### 工具
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
## 使用场景

### 在微信小程序中使用原子化css
> 用于转换 `微信小程序` 不支持的 `\\`，`\:` `\[` `\$`  `\.` 等转义类名， 实现在小程序中使用原子化css

![](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202209181628083.png)

> 例如结合 [unocss 小程序预设](https://github.com/MellowCo/unocss-preset-weapp) ，实现 `unocss` 在小程序中开发使用

![image-20220703141301371](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031413496.png)


相关链接
* [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) - unocss 小程序预设

