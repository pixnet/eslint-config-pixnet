# eslint-config-pixnet

> PIXNET 的 ESLint 共用設定，基於 [Google JavaScript style guide](https://google.github.io/styleguide/jsguide.html) 所擴充。


## Installation

```
$ npm install --save-dev eslint eslint-config-pixnet
```


## Usage

安裝 `eslint-config-pixnet` 套件後， 你可以在 [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) 欄位指定「pixnet」，使 ESLint 根據 PIXNET 的 JavaScript 程式碼風格進行檢查。

```js
{
  "extends": "pixnet",
  "rules": {
    // 專案獨有的規則
  }
}
```

ES2015 專案的範例設定

```js
{
  "extends": "pixnet",
  "env": {
    "es6": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    // 專案獨有的規則
  }
}
```


## 與 Google JavaScript coding style 的差異

*若產品有其時空背景或特殊條件限制，可覆寫規則*

- 四個空白字元縮排 (4 Spaces)
- 不使用 Yoda condition
- 除了舊專案以外，不使用 alert 函數
- function 名稱與開始括號之間須要一個空白字元，可參考 ESLint 規則 - [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)
- 為了提升程式的可讀性，強制大括號內使用空白字元，可參考 ESLint 規則 - [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)
- 變數賦值的等號前後需要一個空白字元， 可參考 ESLint 規則 - [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)

## License

Apache-2 © Google
