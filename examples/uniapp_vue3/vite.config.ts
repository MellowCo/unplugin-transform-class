import uni from '@dcloudio/vite-plugin-uni'
import presetWeapp from 'unocss-preset-weapp'
import Unocss from 'unocss/vite'
import transformWeClass from 'unplugin-transform-class/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    transformWeClass(),
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
  ],
})
