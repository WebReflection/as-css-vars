# as-css-vars

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/as-css-vars/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/as-css-vars?branch=master) [![Build Status](https://travis-ci.com/WebReflection/as-css-vars.svg?branch=master)](https://travis-ci.com/WebReflection/as-css-vars) [![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

This is a micro-utility to convert a generic object into CSS variables, as string.

```js
// --some-test:someValue;
asCSSVars({someTest: 'someValue'});

// --a:a;--b:b;
asCSSVars({a: 'a', b: 'b'})

// --component-a:a;--component-b:b;
asCSSVars('component', {a: 'a', b: 'b'});
```

CSS variables can be set all at once on a generic element, since these reflect the cascading property of CSS.

You could use a tiny utility like this to create updates, as shown in this [CodePen](https://codepen.io/WebReflection/pen/yqzZKv?editors=0110).
