import unplugin from '.'

// TODO: some upstream lib failed generate invalid dts, remove the any in the future
export default unplugin.vite as () => any
