### [destructuring](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/operators/destructuring_assignment)

从对象中提取属性到不同的变量

```javascript
const obj = {
  a: 1,
  b: 2,
  c: {
    i: 3,
    j: 4
  }
};
const {
  a,
  b: x,
  c: { i, j: y }
} = obj;
console.log(a); // > 1
console.log(x); // > 2
console.log(i); // > 3
console.log(y); // > 4
```

从数组中提取元素到不同的变量

```javascript
const arr = [1, [2, 3]];
const [a, [b, c]] = arr;
console.log(a); // > 1
console.log(b); // > 2
console.log(c); // > 3
```

结合扩展语法使用

```javascript
const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log(a); // > 1
console.log(b); // > 2
console.log(c); // > [3, 4, 5]
```

设置默认值

```javascript
const arr = [1, 2];
const [a = 4, b = 5, c = 6] = arr;
console.log(a); // > 1
console.log(b); // > 2
console.log(c); // > 6
```
