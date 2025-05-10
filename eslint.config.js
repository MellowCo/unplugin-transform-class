import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
}, {
  ignores: [
    '*.global.js',
    'build',
    'node_modules',
    'interactive',
    'examples',
    'defaultConfig.ts',
    '*.json',
  ],
})
