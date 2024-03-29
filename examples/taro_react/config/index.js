/* eslint-disable import/no-commonjs */
const UnoCSS = require('unocss/webpack').default
const presetWeapp = require('unocss-preset-weapp').default
const transformWeClass = require('unplugin-transform-class/webpack')

const config = {
  projectName: 'taro_react',
  date: '2022-7-8',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain){
      chain.plugin('unocss')
        .use(UnoCSS({
          presets: [
            presetWeapp({
              // h5兼容
              isH5: process.env.TARO_ENV === 'h5',
              platform: 'taro',
              designWidth: 750
            }),
          ],
          shortcuts: [
            {
              'border-base': 'border border-gray-500_10',
              'center': 'flex justify-center items-center',
            },
          ]
        }))

      chain
        .plugin('transformWeClass')
        .use(transformWeClass())
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain){
      chain.plugin('unocss')
        .use(UnoCSS({
          presets: [
            presetWeapp({
              // h5兼容
              isH5: process.env.TARO_ENV === 'h5',
              platform: 'taro',
              designWidth: 750
            }),
          ],
          shortcuts: [
            {
              'border-base': 'border border-gray-500_10',
              'center': 'flex justify-center items-center',
            },
          ]
        }))

      chain
        .plugin('transformWeClass')
        .use(transformWeClass())
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
