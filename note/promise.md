### [promise](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/global_objects/promise)

用于表示一个异步操作的最终状态，以及其返回的值

```javascript
const fn1 = () => console.log(1);
const fn2 = () => console.log(2);
const p = new Promise((resolve, reject) => {
  console.log(3);
  window.setTimeout(() => {
    true ? resolve() : reject();
  }, 1000);
});
p.then(() => fn1()).catch(() => fn2());
```

```
3
1
```

包装

```javascript
const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
const p3 = new Promise(resolve => resolve(3));
Promise.all([p1, p2, p3]).then(response => console.log(response)); // > [1, 2, 3]
```

链式调用

```javascript
const arr = [];
const fn = (i, resolve) => {
  resolve(i);
};
new Promise(resolve => {
  fn(1, resolve);
}).then(response => {
  return new Promise(resolve => {
    arr.push(response);
    fn(2, resolve);
  });
}).then(response => {
  return new Promise(resolve => {
    arr.push(response);
    fn(3, resolve);
  });
}).then(response => {
  arr.push(response);
  console.log(arr); // > [1, 2, 3]
});
```

### [async](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/statements/async_function)

用于定义一个返回AsyncFunction对象（隐式的Promise）的异步函数，await会使async暂停，等待Promise的结果，await仅在async中有效

```javascript
const fn1 = () => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};
async function fn2() {
  console.log(2);
  const a = await fn1(); // 等待
  console.log(a);
}
fn2();
```

```
2
1
```

### [generator](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/global_objects/generator)

```javascript
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
```

```
1
2
3
undefined
```

