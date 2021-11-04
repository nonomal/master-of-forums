module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  rules: {
    'max-line-length': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-type-no-unknown': null,
    'value-keyword-case': null,
  },
};
