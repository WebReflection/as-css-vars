var asCSSVars = require('../cjs');

console.assert('' === asCSSVars({}));
console.assert('--some-test:someValue;' === asCSSVars({someTest: 'someValue'}));
console.assert('--a:a;--b:b;' === asCSSVars({a: 'a', b: 'b'}));
console.assert('--component-some-test:someValue;' === asCSSVars('component', {someTest: 'someValue'}));
console.assert('--component-a:a;--component-b:b;' === asCSSVars('component', {a: 'a', b: 'b'}));