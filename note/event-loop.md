### 事件循环（event loop）

click、setTimeout 等宏任务（task）会进入循环，Promise、MutationObserver 等微任务（microtask）会进入另一个循环

```javascript
console.log(1);
window.setTimeout(() => {
  console.log(2);
}, 1000);
window.setTimeout(() => {
  console.log(3);
}, 0);
new Promise(resolve => {
  console.log(4);
  resolve();
}).then(() => {
  console.log(5);
});
console.log(6);
```

```
1
4
6
5
3
2
```

Promise.resolve 直接返回 resolved 状态，并在本轮事件循环结束时执行 then

```javascript
console.log(1);
new Promise(resolve => {
  resolve();
  Promise.resolve().then(() => {
    console.log(2);
  });
  console.log(3);
}).then(() => {
  console.log(4);
});
console.log(5);
```

```
1
3
5
2
4
```

第一轮宏任务：打印 1；打印 2；将 setTimeout 回调放入下一轮宏任务；将 resolve(5)的 then 放入第一轮微任务；将 resolve(6)的 then 放入第一轮微任务；打印 7

第一轮微任务：打印 5；打印 6

第二轮宏任务：打印 3；resolve(5)已执行，resolve(4)无效

```javascript
const fn = () =>
  new Promise(resolve => {
    console.log(1);
    const p = new Promise(resolve => {
      console.log(2);
      window.setTimeout(() => {
        console.log(3);
        resolve(4);
      }, 0);
      resolve(5);
    });
    resolve(6);
    p.then(a => {
      console.log(a);
    });
  });
fn().then(b => {
  console.log(b);
});
console.log(7);
```

```
1
2
7
5
6
3
```

await 等待的结果如果不是 Promise，则先执行 async 外的同步代码，再回到 async 内顺序执行

```javascript
async function fn1() {
  console.log(1);
  await fn2();
  console.log(2);
}
async function fn2() {
  console.log(3);
}
console.log(4);
window.setTimeout(() => {
  console.log(5);
}, 0);
fn1();
new Promise(resolve => {
  console.log(6);
  resolve();
}).then(() => {
  console.log(7);
});
console.log(8);
```

```
4
1
3
6
8
2
7
5
```

await 等待的结果如果是 Promise，则先执行 async 外的同步代码，然后等待所有 Promise 执行完毕，再回到 async 内顺序执行

```javascript
async function fn1() {
  await fn2();
  console.log(2);
}
function fn2() {}
fn1();
new Promise(resolve => {
  resolve();
}).then(() => {
  console.log(7);
});
```

```
2
7
```
