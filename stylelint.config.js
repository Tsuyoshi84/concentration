module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-pretty-order'],
  plugins: ['stylelint-use-logical-spec'],
  rules: {
    'liberty/use-logical-spec': 'always',
  },
};
