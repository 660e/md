### [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```javascript
const set = new Set();
const obj = { a: 1 };

set.add(1);
set.add(obj);
set.add({ b: 2 });

console.log(set.has(1)); // > true
console.log(set.has(obj)); // > true
console.log(set.has({ b: 2 })); // > false

console.log(set.delete(1)); // > true
console.log(set.delete(obj)); // > true
console.log(set.delete({ b: 2 })); // > false
```
