### .keys()

返回在对象上找到的可枚举的属性

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log(Object.keys(obj)); // > ["a", "b", "c"]
```

### .values()

返回在对象上找到的可枚举的属性值

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log(Object.values(obj)); // > [1, 2, 3]
```

### .entries()

返回在对象上找到的可枚举的属性和属性值

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log(Object.entries(obj));
```

```
[
  ["a", 1],
  ["b", 2],
  ["c", 3]
]
```

### .assign()

将所有可枚举属性的值从一个或多个源对象复制到目标对象，返回目标对象

```javascript
const obj1 = {
  a: 1,
  b: 2
};
const obj2 = {
  b: 3,
  c: 4
};
console.log(Object.assign(obj1, obj2));
```

```
{
  a: 1,
  b: 3,
  c: 4
}
```

### [.preventExtensions()](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/global_objects/object/preventextensions)

```javascript
let obj = {
  a: 1
};
Object.preventExtensions(obj);
obj.b = 2; // 不可扩展
console.log(obj.a); // > 1
console.log(obj.b); // > undefined
console.log(Object.isExtensible(obj)); // > false
```

### [.seal()](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/global_objects/object/seal)

```javascript
let obj = {
  a: 1
};
Object.seal(obj);
delete obj.a; // 不可删除
console.log(obj.a); // > 1
console.log(Object.isSealed(obj)); // > true
```

### [.freeze()](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/global_objects/object/freeze)

```javascript
let obj = {
  a: 1
};
Object.freeze(obj);
delete obj.a; // 不可删除
obj.a = 2; // 不可修改
obj.b = 3; // 不可扩展
console.log(obj.a); // > 1
console.log(obj.b); // > undefined
console.log(Object.isExtensible(obj)); // > false
console.log(Object.isSealed(obj)); // > true
console.log(Object.isFrozen(obj)); // > true
```

