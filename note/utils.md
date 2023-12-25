### 660e

```javascript
function test() {
  return '明'.charCodeAt().toString(16);
}
```

### 页面隐藏/展示时执行（最小化时无效）

```javascript
/**
 * 页面隐藏/展示时执行（最小化时无效）
 *
 * @param {function} func_hidden
 * @param {function} func_visible
 *
 */
function visibilityChange(func_hidden, func_visible) {
  let hidden;
  let vc;
  if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden';
    vc = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    vc = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    vc = 'webkitvisibilitychange';
  }
  document.addEventListener(
    vc,
    () => {
      document[hidden] ? func_hidden() : func_visible();
    },
    false
  );
}
```

### 获取 url 参数

```javascript
/**
 * 获取url参数
 *
 * @param  {string} url
 * @return {object}
 *
 */
function getUrlParams(url = '') {
  const params = url.split('?')[1];
  const paramsQuery = {};
  if (params) {
    params.split('&').forEach(param => {
      paramsQuery[param.split('=')[0]] = param.split('=')[1];
    });
  }
  return paramsQuery;
}
```

### 获取 cookie

```javascript
/**
 * 获取cookie
 *
 * @param  {string} name
 * @return {string}
 *
 */
function getCookie(name) {
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  let cookiesQuery;
  cookies.forEach(cookie => {
    const cookiesArray = cookie.split('=');
    cookiesQuery = cookiesArray[0] === name ? cookiesArray[1] : '';
  });
  return cookiesQuery;
}
```

### 设置 cookie

```javascript
/**
 * 设置cookie
 *
 * @param {string} name
 * @param {string} value
 * @param {string} expires
 *
 */
function setCookie(name, value, expires) {
  let date = new Date();
  date.setDate(date.getDate() + expires);
  document.cookie = `${name}=${value};expires=${date}`;
}
```

### 删除 cookie

```javascript
/**
 * 删除cookie
 *
 * @param {string} name
 *
 */
function removeCookie(name) {
  setCookie(name, '0', -1);
}
```

### 休眠

```javascript
/**
 * 休眠
 *
 * @param {number} interval
 *
 */
async function sleep(interval) {
  return new Promise(resolve => window.setTimeout(resolve, interval));
}
```

### 类型判断

```javascript
/**
 * 类型判断
 *
 * @param  {any}     source
 * @return {boolean}
 *
 */
function isFunction(source) {
  return toString.call(source) === '[object Function]';
}

function isObject(source) {
  return toString.call(source) === '[object Object]';
}

function isArray(source) {
  return toString.call(source) === '[object Array]';
}

function isString(source) {
  return toString.call(source) === '[object String]';
}

function isNumber(source) {
  return toString.call(source) === '[object Number]';
}

function isUndefined(source) {
  return toString.call(source) === '[object Undefined]';
}

function isNull(source) {
  return toString.call(source) === '[object Null]';
}

function isDate(source) {
  return toString.call(source) === '[object Date]';
}

function isMath(source) {
  return toString.call(source) === '[object Math]';
}

function isWindow(source) {
  return toString.call(source) === '[object Window]';
}

function isBlob(source) {
  return toString.call(source) === '[object Blob]';
}

function isBoolean(source) {
  return toString.call(source) === '[object Boolean]';
}
```

### 树结构扁平化

```javascript
/**
 * 树结构扁平化
 *
 * @param  {array}  data
 * @param  {array}  keys
 * @param  {number} level
 * @return {array}
 *
 */
function flattenTreeByKeys(data, keys, level = 0) {
  return data.reduce((accumulator, current) => {
    return [
      ...accumulator,
      keys.reduce(
        (acc, k) => {
          acc[k] = current[k];
          return acc;
        },
        { level }
      ),
      ...flattenTreeByKeys(current.children || [], keys, level + 1)
    ];
  }, []);
}
```

```javascript
function flattenTree(data, children = 'children') {
  return data.reduce((accumulator, current) => {
    return [...accumulator, current, ...flattenTree(current[children] || [])];
  }, []);
}
```

### 构建树

```javascript
/**
 * 构建树
 *
 * @param  {array}         data
 * @param  {number,string} pid
 * @return {array}
 *
 */
function buildTree(data, pid = 'pid') {
  const tree = [];
  const keys = {};
  const temp = JSON.parse(JSON.stringify(data));
  temp.forEach(e => (keys[e.id] = e));
  temp.forEach(e => {
    if (!e[pid]) {
      tree.push(e);
    }
    Object.keys(keys).forEach(k => {
      if (e.id === keys[k][pid]) {
        if (e.children) {
          e.children.push(keys[k]);
        } else {
          e.children = [keys[k]];
        }
      }
    });
  });
  return tree;
}
```

### 参数序列化

```javascript
/**
 * 参数序列化
 *
 * @param  {object} params
 * @return {string}
 *
 */
function qs(params) {
  if (isObject(params)) {
    const query = Object.keys(params).map(k => `${k}=${params[k]}`);
    return query.join('&');
  } else {
    return null;
  }
}
```

### Blob 文件下载

```javascript
/**
 * Blob文件下载
 *
 * @param {blob} blob
 *
 */
function download(blob, name, type) {
  let _d = document.createElement('a');
  document.body.appendChild(_d);
  _d.style.display = 'none';
  _d.href = window.URL.createObjectURL(new Blob([blob], { type }));
  _d.setAttribute('download', name);
  _d.click();
  document.body.removeChild(_d);
}
```
