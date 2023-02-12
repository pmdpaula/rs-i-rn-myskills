module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
