import eslint from '@antfu/eslint-config'

export default eslint({
  componentExts: ['next/core-web-vitals'],
  formatters: true,
  jsx: true,

  rules: {},
})
