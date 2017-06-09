/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// see http://eslint.org/docs/user-guide/configuring.html#configuring-rules
const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },

    plugins: [
        'babel',
        'react',
    ],

    rules: {
        // The rules below are listed in the order they appear on the eslint
        // rules page. All rules are listed to make it easier to keep in sync
        // as new ESLint rules are added.
        // http://eslint.org/docs/rules/
        // - Rules in the `eslint:recommended` ruleset that aren't specifically
        //     mentioned by the google styleguide are listed but commented out (so
        //     they don't override a base ruleset).
        // - Rules that are recommended but contradict the Google styleguide
        //     are explicitely set to the Google styleguide value.

        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        // ---------------------------------------------
        'no-cond-assign': 0, // eslint:recommended
        // 'no-console': 2, // eslint:recommended
        // 'no-constant-condition': 2, // eslint:recommended
        // 'no-control-regex': 2, // eslint:recommended
        // 'no-debugger': 2, // eslint:recommended
        // 'no-dupe-args': 2, // eslint:recommended
        // 'no-dupe-keys': 2, // eslint:recommended
        // 'no-duplicate-case': 2, // eslint:recommended
        // 'no-empty-character-class': 2, // eslint:recommended
        // 'no-empty': 2, // eslint:recommended
        // 'no-ex-assign': 2, // eslint:recommended
        // 'no-extra-boolean-cast': 2, // eslint:recommended
        // 'no-extra-parens': 0,
        // 'no-extra-semi': 2, // eslint:recommended
        // 'no-func-assign': 2, // eslint:recommended
        // 'no-inner-declarations': 2, // eslint:recommended
        // 'no-invalid-regexp': 2, // eslint:recommended
        'no-irregular-whitespace': 2, // eslint:recommended
        // 'no-obj-calls': 2, // eslint:recommended
        // 'no-prototype-builtins': 0,
        // 'no-regex-spaces': 2, // eslint:recommended
        // 'no-sparse-arrays': 2, // eslint:recommended
        // 'no-template-curly-in-string': 0,
        'no-unexpected-multiline': 2, // eslint:recommended
        // 'no-unreachable': 2, // eslint:recommended
        // 'no-unsafe-finally': 2, // eslint:recommended
        // 'no-unsafe-negation': 0,
        // 'use-isnan': 2 // eslint:recommended
        'valid-jsdoc': [2, {
            requireParamDescription: false,
            requireReturnDescription: false,
            requireReturn: false,
            prefer: {returns: 'return'},
        }],
        // 'valid-typeof': 2 // eslint:recommended


        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        // --------------------------------------------

        // 'accessor-pairs': 0,
        // 'array-callback-return': 0,
        // 'block-scoped-var': 0,
        // 'class-methods-use-this': 0,
        // 'complexity': 0,
        // 'consistent-return': 0
        'curly': [2, 'multi-line'], // TODO(philipwalton): add an option to enforce
                                                                // braces with the exception of simple,
                                                                // single-line if statements.
        // 'default-case': 0,
        // 'dot-location': 0,
        // 'dot-notation': 0,
        // 'eqeqeq': 0,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        // 'no-case-declarations': 2, // eslint:recommended
        // 'no-div-regex': 0,
        // 'no-else-return': 0,
        // 'no-empty-function': 0,
        // 'no-empty-pattern': 2, // eslint:recommended
        // 'no-eq-null': 0,
        // 'no-eval': 0,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        // 'no-extra-label': 0,
        // 'no-fallthrough': 2, // eslint:recommended
        // 'no-floating-decimal': 0,
        // 'no-global-assign': 0,
        // 'no-implicit-coercion': 0,
        // 'no-implicit-globals': 0,
        // 'no-implied-eval': 0,
        'no-invalid-this': 2,
        // 'no-iterator': 0,
        // 'no-labels': 0,
        // 'no-lone-blocks': 0,
        // 'no-loop-func': 0,
        // 'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        // 'no-new-func': 0,
        'no-new-wrappers': 2,
        // 'no-new': 0,
        // 'no-octal-escape': 0,
        // 'no-octal': 2, // eslint:recommended
        // 'no-param-reassign': 0,
        // 'no-proto': 0,
        // 'no-redeclare': 2, // eslint:recommended
        // 'no-return-assign': 0,
        // 'no-script-url': 0,
        // 'no-self-assign': 2, // eslint:recommended
        // 'no-self-compare': 0,
        // 'no-sequences': 0,
        'no-throw-literal': 2, // eslint:recommended
        // 'no-unmodified-loop-condition': 0,
        // 'no-unused-expressions': 0,
        // 'no-unused-labels': 2, // eslint:recommended
        // 'no-useless-call': 0,
        // 'no-useless-concat': 0,
        // 'no-useless-escape': 0,
        // 'no-void': 0,
        // 'no-warning-comments': 0,
        'no-with': 2,
        // 'radix': 0,
        // 'vars-on-top': 0,
        // 'wrap-iife': 0,
        'yoda': ['error', 'always', {'onlyEquality': true}],

        // Strict Mode
        // http://eslint.org/docs/rules/#strict-mode
        // -----------------------------------------
        // 'script': 0,

        // Variables
        // http://eslint.org/docs/rules/#variables
        // ---------------------------------------
        // 'init-declarations': 0,
        // 'no-catch-shadow': 0,
        // 'no-delete-var': 2, // eslint:recommended
        // 'no-label-var': 0,
        // 'no-restricted-globals': 0,
        // 'no-shadow-restricted-names': 0,
        // 'no-shadow': 0,
        // 'no-undef-init': 0,
        // 'no-undef': 2, // eslint:recommended
        // 'no-undefined': 0,
        'no-unused-vars': [2, {args: 'none'}], // eslint:recommended
        // 'no-use-before-define': 0,

        // Node.js and CommonJS
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -------------------------------------------------
        // 'callback-return': 0,
        // 'global-require': 0,
        // 'handle-callback-err': 0,
        // 'no-mixed-requires': 0,
        // 'no-new-require': 0,
        // 'no-path-concat': 0,
        // 'no-process-env': 0,
        // 'no-process-exit': 0,
        // 'no-restricted-modules': 0,
        // 'no-restricted-properties': 0,
        // 'no-sync': 0,

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------
        'array-bracket-spacing': [2, 'never'],
        // 'block-spacing': 0,
        'brace-style': 2,
        'camelcase': [2, {properties: 'never'}],
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        // 'consistent-this': 0,
        'eol-last': 2,
        'func-call-spacing': 2,
        // 'func-name-matching': 0,
        // 'func-names': 0,
        // 'func-style': 0,
        // 'id-blacklist': 0,
        // 'id-length': 0,
        // 'id-match': 0,
        'indent': [2, 4, {'SwitchCase': 1}],

        // 'jsx-quotes': 0,
        'key-spacing': 2,
        'keyword-spacing': 2,
        // 'line-comment-position': 0,
        'linebreak-style': 2,
        // 'lines-around-comment': 0,
        // 'lines-around-directive': 0,
        // 'max-depth': 0,
        'max-len': [2, {
            code: 110,
            tabWidth: 4,
            ignoreUrls: true,
            ignorePattern: '.min.js$',
        }],
        // 'max-lines': 0,
        // 'max-nested-callbacks': 0,
        // 'max-params': 0,
        // 'max-statements-per-line': 0,
        // 'max-statements': 0,
        // 'multiline-ternary': 0, // TODO(philipwalton): add a rule to enforce the
                                                             // operator appearing at the end of the line.
        'new-cap': 2,
        // 'new-parens': 0,
        // 'newline-after-var': 0,
        // 'newline-before-return': 0,
        // 'newline-per-chained-call': 0,
        'no-array-constructor': 2,
        // 'no-bitwise': 0,
        // 'no-continue': 0,
        // 'no-inline-comments': 0,
        // 'no-lonely-if': 0,
        // 'no-mixed-operators': 0,
        'no-mixed-spaces-and-tabs': 2, // eslint:recommended
        'no-multiple-empty-lines': [2, {max: 2}],
        // 'no-negated-condition': 0,
        // 'no-nested-ternary': 0,
        'no-new-object': 2,
        // 'no-plusplus': 0,
        // 'no-restricted-syntax': 0,
        // 'no-tabs': 0,
        // 'no-ternary': 0,
        'no-trailing-spaces': 2,
        // 'no-underscore-dangle': 0,
        // 'no-unneeded-ternary': 0,
        // 'no-whitespace-before-property': 0,
        // 'object-curly-newline': 0,
        'object-curly-spacing': 2,
        // 'object-property-newline': 0,
        // 'one-var-declaration-per-line': 0,
        'one-var': [2, {
            var: 'never',
            let: 'never',
            const: 'never',
        }],
        // 'operator-assignment': 0,
        // 'operator-linebreak': 0,
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'consistent'],
        'quotes': [2, 'single', {allowTemplateLiterals: true}],
        'require-jsdoc': [2, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
            },
        }],
        'semi-spacing': 2,
        'semi': 2,
        // 'sort-keys': 0,
        // 'sort-vars': 0,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, 'always'],
        // 'space-in-parens': 0,
        // 'space-infix-ops': 0,
        // 'space-unary-ops': 0,
        'spaced-comment': [2, 'always'],
        // 'unicode-bom': 0,
        // 'wrap-regex': 0,

        // ECMAScript 6
        // http://eslint.org/docs/rules/#ecmascript-6
        // ------------------------------------------
        // 'arrow-body-style': 0,
        'arrow-parens': [2, 'always'], // TODO(philipwalton): technically arrow
                                                                     // parens are optional but recommended.
                                                                     // ESLint doesn't support a *consistent*
                                                                     // setting so "always" is used.
        // 'arrow-spacing': 0,
        'constructor-super': 2, // eslint:recommended
        'generator-star-spacing': [2, 'after'],
        // 'no-class-assign': 0,
        // 'no-confusing-arrow': 0,
        // 'no-const-assign': 0, // eslint:recommended
        // 'no-dupe-class-members': 0, // eslint:recommended
        // 'no-duplicate-imports': 0,
        'no-new-symbol': 2, // eslint:recommended
        // 'no-restricted-imports': 0,
        'no-this-before-super': 2,    // eslint:recommended
        // 'no-useless-computed-key': 0,
        // 'no-useless-constructor': 0,
        // 'no-useless-rename': 0,
        'no-var': 2,
        // 'object-shorthand': 0,
        // 'prefer-arrow-callback': 0,
        // 'prefer-const': 0,
        // 'prefer-numeric-literals': 0,
        // 'prefer-reflect': 0,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        // 'prefer-template': 0,
        // 'require-yield': 2, // eslint:recommended
        'rest-spread-spacing': 2,
        // 'sort-imports': 0,
        // 'symbol-description': 0,
        // 'template-curly-spacing': 0,
        'yield-star-spacing': [2, 'after'],


        // Rules from fbjs standard: https://github.com/facebook/fbjs
        // eslint-plugin-react <https://github.com/yannickcr/eslint-plugin-react>
        // TODO: We're being extremely conservative here as we roll out eslint on
        // www. As we finish rollout, we can turn on more of these, and replace
        // some legacy regex rules in the process.
        'react/display-name': OFF,
        'react/forbid-prop-types': OFF,
        'react/jsx-boolean-value': OFF,
        'react/jsx-closing-bracket-location': OFF,
        'react/jsx-curly-spacing': OFF,
        'react/jsx-equals-spacing': WARNING,
        'react/jsx-filename-extension': OFF,
        'react/jsx-first-prop-new-line': OFF,
        'react/jsx-handler-names': OFF,
        'react/jsx-indent': OFF,
        'react/jsx-indent-props': OFF,
        'react/jsx-key': OFF,
        'react/jsx-max-props-per-line': OFF,
        'react/jsx-no-bind': OFF,
        'react/jsx-no-duplicate-props': ERROR,
        'react/jsx-no-literals': OFF,
        'react/jsx-no-target-blank': OFF,
        'react/jsx-no-undef': ERROR,
        'react/jsx-pascal-case': OFF,
        'react/jsx-sort-props': OFF,
        'react/jsx-space-before-closing': OFF,
        // forked to fb-www/jsx-uses-react
        'react/jsx-uses-react': OFF,
        'react/jsx-uses-vars': ERROR,
        'react/no-comment-textnodes': OFF,
        'react/no-danger': OFF,
        'react/no-deprecated': OFF,
        'react/no-did-mount-set-state': OFF,
        'react/no-did-update-set-state': OFF,
        'react/no-direct-mutation-state': OFF,
        'react/no-is-mounted': WARNING,
        'react/no-multi-comp': OFF,
        'react/no-render-return-value': OFF,
        'react/no-set-state': OFF,
        'react/no-string-refs': OFF,
        'react/no-unknown-property': OFF,
        'react/prefer-es6-class': OFF,
        'react/prefer-stateless-function': OFF,
        'react/prop-types': OFF,
        // forked to fb-www/react-in-jsx-scope
        'react/react-in-jsx-scope': OFF,
        'react/require-extension': OFF,
        'react/require-optimization': OFF,
        'react/require-render-return': OFF,
        'react/self-closing-comp': OFF,
        'react/sort-comp': OFF,
        'react/sort-prop-types': OFF,
        'react/wrap-multilines': OFF,
    },
};
