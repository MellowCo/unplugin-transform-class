# unplugin-transform-we-class

[![NPM version](https://img.shields.io/npm/v/unplugin-transform-we-class?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-transform-we-class)

> 使用该插件中转换 `微信小程序` 中不支持的 `\\`，`\:` `\[` `\$`  `\.` 等转义类名
>
> 结合 [unocss 小程序预设](https://github.com/MellowCo/unocss-preset-weapp) ，实现 `unocss` 在小程序中开发使用

![image-20220703141301371](https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031413496.png)

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

---

## 使用
[使用说明](https://github.com/MellowCo/unocss-preset-weapp#webpack)


---

## 示例

[uniapp_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue3)   
[uniapp_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/uniapp_vue2)   
[taro_react](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_react)   
[taro_vue2](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue2)   
[taro_vue3](https://github.com/MellowCo/unocss-preset-weapp/tree/main/examples/taro_vue3)  

<img src="https://fastly.jsdelivr.net/gh/MellowCo/image-host/2022/202207031414239.png" alt="image-20220703141451188" style="zoom:50%;" />



