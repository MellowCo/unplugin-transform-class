import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/transformSelector',
    'src/vite',
    'src/webpack',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals:[
    'webpack'
  ]
})

