### Object.entries()

```javascript
const obj = { a: 1, b: 2 };
Object.entries(obj).forEach(([key, value]) => {
  console.log(key); // > a, b
  console.log(value); // > 1, 2
});
```

### Object.hasOwn()

```javascript
const obj = { a: 1, b: 2 };
console.log(Object.hasOwn(obj, "a")); // > true
console.log(Object.hasOwn(obj, "toString")); // > false
```

### Object.preventExtensions()

```javascript
const obj = { a: 1, b: 2 };
Object.preventExtensions(obj);
obj.c = 3;
console.log(obj.c); // > undefined
```

### Object.seal()

```javascript
const obj = { a: 1, b: 2 };
Object.seal(obj);
delete obj.a;
console.log(obj.a); // > 1
```

### Object.freeze()

```javascript
const obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3;
delete obj.b;
obj.c = 4;
console.log(obj.a); // > 1
console.log(obj.b); // > 2
console.log(obj.c); // > undefined
```
