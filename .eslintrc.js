module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    require.resolve('@my/eslint-config-standard'),
    require.resolve('@my/eslint-config-prettier'),
  ],
  rules: {
    'no-unused-vars': 'warn'
  },
  globals: {
    Page: true,
    wx: true
  }
}
