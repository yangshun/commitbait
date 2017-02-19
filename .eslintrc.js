module.exports = {
  parser: 'babel-eslint',
  root: true,
  extends: [
    'airbnb',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.config.common.js',
      },
    },
  },
  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'mocha': true,
    'jest': true,
  },
  rules: {
    // Turning it on causes undecipherable errors.
    'arrow-body-style': 'off',
    // Import required only for non-js files.
    'import/extensions': ['error', 'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    // To allow enzyme to be imported in tests.
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.test.js'] }],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-duplicate-imports': 'off',
    'no-underscore-dangle': ['error', { 'allowAfterThis': true, 'allowAfterSuper': true }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': ['error', 'never'],
    // It just looks nicer without the space.
    'react/jsx-space-before-closing': 'off',
    // TODO: https://github.com/yannickcr/eslint-plugin-react/issues/861
    'react/no-unused-prop-types': 'off',
    'react/jsx-tag-spacing': ['error', {
      beforeSelfClosing: 'never',
    }],
    // Let git handle the linebreaks instead
    'linebreak-style': 'off',
  }
}
