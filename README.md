# eslint-config-codingitwrong

The goal of this ESLint config is to enforce safety and a consistent style, while not getting in the way of refactoring. In particular:

- Unused variables (and thus imports) are allowed, so that if you are temporarily not using a variable you don't have to comment it out elsewhere.
- Arrow parens and body style are not restricted, so you can add or remove parameters, or switch it between a block and expression without needing to change the style.
- Quote style is not enforced so you won't need to change backticks to another type of quote if you temporarily remove all template expressions.
- Constant conditions are allowed so you can do `if (true)` or `if (false)` to temporarily get a branch to always pass.
- `console.log()`, `alert()`, and `debugger` are allowed. How else are you going to get anything done??
- Unreachable code is allowed so you can put an early `return` in a block for experimentation.

However, curlies are required; it's just too risky to allow leaving them out.

## Usage

Install the package:

`npm install --save-dev eslint-config-codingitwrong`

Then set it in your ESLint config file:

```javascript
module.exports = {
  "extends": [
    "codingitwrong",
  ],
};
```

## License

Apache-2.0
