### Array.from()

```javascript
const arr = Array.from([1, 2, 3], (x) => x + x);
console.log(arr); // > [2, 4, 6]
```

### Array.prototype.reduce()

```javascript
const arr = [1, 2, 3, 4];
const sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 5);
console.log(sum); // > 15
```

### Array.prototype.at()

```javascript
const arr = [1, 2, 3, 4];
console.log(arr.at(1)); // > 2
console.log(arr.at(-1)); // > 4
```
