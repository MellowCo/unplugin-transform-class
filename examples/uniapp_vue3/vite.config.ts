import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import presetWeapp from 'unocss-preset-weapp'
import transformWeClass from 'unplugin-transform-we-class/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss({
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
    transformWeClass(),
  ],
})
