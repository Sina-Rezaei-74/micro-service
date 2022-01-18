module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: 'eslint:recommended',
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  }
}
