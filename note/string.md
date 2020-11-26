### .indexOf(value, fromIndex)

在字符串中查找指定值，返回找到的第一个值的索引

```javascript
const str = 'lorem ipsum';
console.log(str.indexOf('m')); // > 4
console.log(str.indexOf('a')); // > -1
console.log(str.indexOf('m', 5)); // > 10
```

### .slice(start, end)

提取字符串

```javascript
const str = 'lorem ipsum';
// start -> end
console.log(str.slice(4)); // > 'm ipsum'
console.log(str.slice(4, 6)); // > 'm'
console.log(str.slice(-4, -2)); // > 'ps'
```

### .substr(start, length)

提取字符串

```javascript
const str = 'lorem ipsum';
// start -> length
console.log(str.substr(3)); // > 'em ipsum'
console.log(str.substr(3, 5)); // > 'em ip'
console.log(str.substr(-4, 2)); // > 'ps'
```

### .substring(start, end)

提取字符串

```javascript
const str = 'lorem ipsum';
// start -> end; end <- start
console.log(str.substring(3)); // > 'em ipsum'
console.log(str.substring(3, 8)); // > 'em ip'
console.log(str.substring(9, 7)); // > 'ps'
```

