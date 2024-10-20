### [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

```javascript
let num = 9007199254740991;
console.log(num++); // > 9007199254740991
console.log(num++); // > 9007199254740992
console.log(num++); // > 9007199254740992
```

```javascript
let num = 9007199254740991n;
console.log(num++); // > 9007199254740991n
console.log(num++); // > 9007199254740992n
console.log(num++); // > 9007199254740993n
```

```javascript
let num = BigInt("9007199254740991");
console.log(num++); // > 9007199254740991n
console.log(num++); // > 9007199254740992n
console.log(num++); // > 9007199254740993n
console.log(typeof num); // > bigint
console.log(num > 1); // > true
```
