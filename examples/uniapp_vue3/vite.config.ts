//@ts-nocheck
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWxapp from 'unocss-preset-wxapp'
import {transformWxClass,transformSelector} from '../../src/vite'

// https://vitejs.dev/config/
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
