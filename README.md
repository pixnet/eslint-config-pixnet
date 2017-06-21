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


## 與 Google JavaScript coding style 的差異

*若產品有其時空背景或特殊條件限制，可覆寫規則*

- 四個空白字元縮排 (4 Spaces)
- 不使用 Yoda condition
- 除了舊專案以外，不使用 alert 函數
- function 名稱與開始括號之間須要一個空白字元，即 ESLint 規則名 - [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)


## License

Apache-2 © Google
