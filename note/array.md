### .map((element, index, array) => {}, thisArg)

用提供的函数处理数组中的所有元素，返回一个新数组（浅拷贝）

```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = arr1.map((element, index) => {
  return element + index;
});
console.log(arr2); // > [1, 3, 5, 7]
```

### .filter((element, index, array) => {}, thisArg)

用提供的函数处理数组中的所有元素，返回一个新数组（浅拷贝）

```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = arr1.filter(element => {
  if (element % 2) {
    return element;
  }
});
console.log(arr2); // > [1, 3]
```

### .reduce((accumulator, element, index, array) => {}, initial)

对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值

```javascript
const arr = [1, 2, 3, 4];
const sum = arr.reduce((accumulator, element) => {
  return accumulator + element; // ((1 + 2) + 3) + 4
});
console.log(sum); // > 10
```

设置第一次调用的第一个参数的值

```javascript
const arr = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }];
const sum = arr.reduce((accumulator, element) => {
  return accumulator + element.a * element.b; // 第一次：0 + 1 * 2
}, 0);
console.log(sum); // > 44
```

### .indexOf(element, fromIndex)

在数组中查找指定元素，返回找到的第一个元素的索引

```javascript
const arr = [1, 2, 3, 4];
console.log(arr.indexOf(3)); // > 2
console.log(arr.indexOf(3, 1)); // > 2
console.log(arr.indexOf(3, 3)); // > -1
```

### .includes(element, fromIndex)

在数组中查找指定元素，根据情况，返回true或false

```javascript
const arr = [1, 2, 3, 4];
console.log(arr.includes(3)); // > true
console.log(arr.includes(3, 1)); // > true
console.log(arr.includes(3, 3)); // > false
```

### .find((element, index, array) => {}, thisArg)

用提供的函数处理数组中的所有元素，如果有元素满足条件，则返回该元素，并立即终止处理

```javascript
const arr = [1, 2, 3, 4];
const a = arr.find(element => {
  return element > 2;
});
console.log(a); // > 3
```

### .some((element, index, array) => {}, thisArg)

用提供的函数处理数组中的所有元素，如果有元素满足条件，则返回true，并立即终止处理

```javascript
const arr = [1, 2, 3, 4];
const a = arr.some(element => {
  console.log(element);
  return element > 2;
});
console.log(a);
```

```
1
2
3
true
```

### .every((element, index, array) => {}, thisArg)

用提供的函数处理数组中的所有元素，如果有元素不满足条件，则返回false，并立即终止处理

```javascript
const arr = [1, 2, 3, 4];
const a = arr.every(element => {
  console.log(element);
  return element < 2;
});
console.log(a);
```

```
1
2
false
```

### .concat(values)

合并多个数组，返回一个新数组（浅拷贝）

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [].concat(arr1, arr2);
console.log(arr3); // > [1, 2, 3, 4]
```

### .slice(start, end)

提取数组（浅拷贝）

```javascript
const arr = [1, 2, 3, 4];
// start -> end
console.log(arr.slice(1)); // > [2, 3, 4]
console.log(arr.slice(1, 3)); // > [2, 3]
console.log(arr.slice(-3, -2)); // > [2]
```

### .splice(start, deleteCount, items)

添加/删除元素，并返回被删除的元素

```javascript
const arr1 = [1, 2, 3, 4];
console.log(arr1.splice(2)); // > [3, 4]
console.log(arr1); // > [1, 2]
const arr2 = [1, 2, 3, 4];
console.log(arr2.splice(2, 1)); // > [3]
console.log(arr2); // > [1, 2, 4]
const arr3 = [1, 2, 3, 4];
console.log(arr3.splice(2, 1, 5, 6)); // > [3]
console.log(arr3); // > [1, 2, 5, 6, 4]
```

### .shift()

从数组开头删除一个元素（改变原数组），并返回该元素

```javascript
const arr = [1, 2, 3, 4];
const a = arr.shift();
console.log(arr); // > [2, 3, 4]
console.log(a); // > 1
```

### .unshift(element)

向数组开头添加一个或多个元素

```javascript
const arr = [1, 2, 3, 4];
arr.unshift(5);
console.log(arr); // > [5, 1, 2, 3, 4]
```

### .pop()

从数组末尾删除一个元素（改变原数组），并返回该元素

```javascript
const arr = [1, 2, 3, 4];
const a = arr.pop();
console.log(arr); // > [1, 2, 3]
console.log(a); // > 4
```

### .push(element)

向数组末尾添加一个或多个元素

```javascript
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr); // > [1, 2, 3, 4, 5]
```

