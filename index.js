var converter = require('postcss-to-js');
var loaderUtils = require('loader-utils');

function isStyledChosen(config) {
  return config.use == 'styled-components' || config.styledComponents;
}

function isEmoticonChosen(config) {
  return config.use == 'emoticon' || config.emoticon;
}

function isJSS(config) {
  return config.use == 'jss' || config.jss;
}

module.exports = function (source) {
  this.cacheable(true);
  var callback = this.async();

  var config = loaderUtils.getOptions(this) || {
      use: 'styled-components'
    };

  var ast = loader.parseAst(source);

  if (isStyledChosen(config)) {
    const result = `import { css, injectGlobal }  from 'styled-components';
      ${converter.toStyled(ast).map(line => 'export const ' + line[0] + ' = ' + line[1] + ';').join('\n')}
      `;
    callback(null, result);
  } else {
    throw new Error('css-to-js-webpack-plugin: unknown compilation target');
  }
};