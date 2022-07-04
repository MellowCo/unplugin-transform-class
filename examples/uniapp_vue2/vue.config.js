// webpack.config.js
const UnoCSS = require('unocss/webpack').default
const presetWxapp = require('unocss-preset-wxapp').default
const transformWxClass =  require('../../dist/webpack.cjs')
const transformSelector = require('../../dist/transformSelector.cjs')

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
