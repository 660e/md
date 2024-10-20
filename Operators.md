### Nullish coalescing operator (??)

```javascript
console.log(undefined ?? 1); // > 1
console.log(null ?? 1); // > 1
console.log("" ?? 1); // > ""
console.log(0 ?? 1); // > 0
```

### Nullish coalescing assignment (??=)

```javascript
const obj = { a: 1, b: 2 };
obj.a ??= 3;
obj.c ??= 4;
console.log(obj.a); // > 1
console.log(obj.c); // > 4
```
