# as-css-vars

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
