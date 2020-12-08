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
  document.addEventListener(vc, () => {
    document[hidden] ? func_hidden() : func_visible();
  }, false);
}
```

### 获取url参数

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

### 获取cookie

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

### 设置cookie

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

### 删除cookie

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
```

