module.exports = {
  extends: [
    'eslint-config-qunar'
  ].map(require.resolve),
  rules: {
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0
  }
};
