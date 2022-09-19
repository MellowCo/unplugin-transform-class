// webpack.config.js
const UnoCSS = require('unocss/webpack').default
const presetWeapp = require('unocss-preset-weapp').default
const transformWeClass =  require('unplugin-transform-class/webpack')

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
