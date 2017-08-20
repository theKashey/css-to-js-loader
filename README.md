CSS-in-JS? Not yet.

Most of libraries just create stylesheets for you. From pure CSS or pure JS code.
 
[![NPM](https://nodei.co/npm/css-to-js-loader.png?downloads=true&stars=true)](https://nodei.co/npm/css-to-js-loader/) 
 
# CSS-to-JS
This webpack loader actually __converts CSS code__ into the __JavaScript__.
Not just provide classNames, but wraps everything with client-side CSS-in-JS libraries. 

## Supported APIs
 - Styled-Components 
 
### Example
Given css:
```css
.h1 {
    color: #F00;
}

.P {
    font-size: 14px;
    color: #0F0;
    --css-to-js-component: div;
}
```
And JS 
```js
import { h1, P } from '!css-to-js-loader!./style.css'

// h1 is styled.css
// you can use h1 as mixin
const H1 = styled.div`${h1};`;


// and P is the real styled-component
const App = () => <P>I am Component!</P>   
```

Thus allows you to write more modular code. And keep all CSS inside CSS.

### mixins

```css
.h {
    font-size: 10px;
}

.h1 {
    --css-in-js-mixin: ".h"; /** same as LESS mixins. In css way **/
    color: #F00;
}
``` 

# Existing CSS libraries.
 To manage existing libraries see *-mixins
 - [styled-components-mixins](https://github.com/theKashey/styled-components-mixins)

# Licence
 MIT