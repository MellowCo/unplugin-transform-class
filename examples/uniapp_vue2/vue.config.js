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
