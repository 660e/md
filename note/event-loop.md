### 事件循环（event loop）

click、setTimeout等宏任务（task）会进入循环，Promise、MutationObserver等微任务（microtask）会进入另一个循环

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

Promise.resolve直接返回resolved状态，并在本轮事件循环结束时执行then

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

**第一轮宏任务：**打印1；打印2；将setTimeout回调放入下一轮宏任务；将resolve(5)的then放入第一轮微任务；将resolve(6)的then放入第一轮微任务；打印7

**第一轮微任务：**打印5；打印6

**第二轮宏任务：**打印3；resolve(5)已执行，resolve(4)无效

```javascript
const fn = () => (new Promise(resolve => {
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
}));
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

await等待的结果如果不是Promise，则先执行async外的同步代码，再回到async内顺序执行

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

await等待的结果如果是Promise，则先执行async外的同步代码，然后等待所有Promise执行完毕，再回到async内顺序执行

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

