// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // will drop all `console.log` in webpack
    "no-console": 0,
    // 警告 alert、confirm 和 prompt
    "no-alert": 1,
    // 不强制使用 === 与 !== 但是警告
    "eqeqeq": 1,
    // 不强制关键字周围空格的一致性,但是警告
    "keyword-spacing": 1,
    // 使用非单引号给予警告
    "quotes": [1, 'single'],
    // 不强制在模块顶部调用 require()
    "global-require": 0,
    "import/no-unresolved": 0,
    // import 允许不带ext后缀名
    "import/extensions": 0,
    // 允许使用匿名函数
    "func-names": 0,
    // 不强制回调函数使用箭头函数的形式呈现
    "prefer-arrow-callback": 0
  }
}
