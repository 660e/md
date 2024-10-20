### [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

```javascript
const a = Symbol("x");
const b = Symbol("x");
const obj = {
  [a]: 1,
  [b]: 2,
  x: 3,
};

console.log(obj[a]); // > 1
console.log(obj[b]); // > 2
console.log(obj.x); // > 3

console.log(a); // > Symbol(x)
console.log(b); // > Symbol(x)
console.log(a === b); // > false
```
