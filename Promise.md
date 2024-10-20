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
