var postcss = require('postcss');

module.exports = postcss.plugin('postcss-calc-yui', function () {
  return function (css) {
    var re = /calc\(\s*(.+\S)\s*\+\s*(.+\S)\s*\)/g;
    var format = 'calc($1 - -$2)';

    css.walkRules(function (rule) {
      rule.walkDecls(function (decl) {
        decl.value = decl.value.replace(re, format);
      });
    });
  };
});
