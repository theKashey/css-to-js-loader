var converter = require('postcss-to-js');

module.exports = function (ast, complete) {
  const result = `import styled, { css, injectGlobal }  from 'styled-components';` +
    converter.toStyled(ast).map(line => 'export const ' + line[0] + ' = ' + line[1] + ';').join('\n')

  complete(result, 'styled');
}