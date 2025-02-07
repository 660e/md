### Promise

```javascript
async function fn1() {
  console.log(1);
  return 2;
}
function fn2() {
  return new Promise((resolve) => {
    console.log(3);
    resolve(4);
  });
}
async function fn3() {
  console.log(5);
  const a = await fn1();
  const b = await fn2();
  console.log(6);
  console.log(a);
  console.log(b);
}
setTimeout(() => {
  console.log(7);
}, 0);
new Promise((resolve) => {
  console.log(8);
  resolve(9);
}).then((c) => {
  console.log(c);
});
fn3();
```

```
8
5
1
9
3
6
2
4
7
```

### Promises/A+

- 一个具有`then`方法的对象或函数，其行为符合本[规范](https://promisesaplus.com/)。
- 规范的制定是为了解决 JavaScript 中异步编程的一系列问题，如回调地狱。
- 通过链式调用简化异步编程，避免多层嵌套。
- 规范并不强制 Promise 是异步的。
- ES6 的 Promise 是异步的，它使用微任务机制。
