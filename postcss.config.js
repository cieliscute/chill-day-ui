export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-plugin-px2rem': {
      rootValue: 16,
      propList: ['*'],
      // unitPrecision: 5,
      // propWhiteList: [],
      // propBlackList: [],
      // exclude: ['/node_modules/'],
      // selectorBlackList: ['noRem'],
      // ignoreIdentifier: false,
      // replace: true,
      // mediaQuery: false,
      // minPixelValue: 10,
    },
  },
}
