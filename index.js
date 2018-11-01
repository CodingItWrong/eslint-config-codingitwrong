module.exports = {
  'rules': {
    // safety
    'curly': ['error', 'all'],
    'eqeqeq': ['error', 'always'],
    'no-eval': ['error'],
    'no-implied-eval': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-undef': ['error'],
    'no-var': ['error'],
    'no-with': ['error'],
    'require-await': ['error'],
    'semi': ['error', 'always'],
    'use-isnan': ['error'],

    // diffs
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
      'imports': 'always-multiline',
      'objects': 'always-multiline',
    }],

    // enabling refactoring
    'no-alert': ['off'],
    'no-console': ['off'],
    'no-constant-condition': ['off'],
    'no-debugger': ['off'],
    'no-empty': ['off'],
    'no-unreachable': ['off'],

    // simplicity
    'no-dupe-args': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-imports': ['error'],
    'no-duplicate-case': ['error'],
    'no-extra-semi': ['error'],
    'no-return-await': ['error'],

    // conciseness
    'no-cond-assign': ['off'],

    // style
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    'max-len': ['error', { 'code': 120 }],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': ['error'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['error', {
      'properties': 'never',
      'ignoreDestructuring': true,
    }],
    'comma-spacing': ['error'],
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-irregular-whitespace': ['error'],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-trailing-spaces': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'asyncArrow': 'always',
      'named': 'never',
    }],
    'space-in-parens': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
  }
};
