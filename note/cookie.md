### cookie

每次请求时，cookie 都会发送到服务器

```javascript
document.cookie = 'name=value';
```

### sessionStorage

页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话

```javascript
sessionStorage.setItem('key', 'value');
sessionStorage.getItem('key');
sessionStorage.removeItem('key');
sessionStorage.clear();
```

### localStorage

数据存储在 localStorage 是无期限的

```javascript
localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();
```

### [缓存（caching）](https://developer.mozilla.org/zh-CN/docs/web/http/caching_faq)

Cache-Control：缓存机制

```
// 客户端指令
Cache-Control: max-age=3600 // 缓存时效
Cache-Control: max-stale=3600 // 接收一个已经过期的资源
Cache-Control: min-fresh=3600 // 客户端希望在指定的时间内获取最新的响应
Cache-control: no-cache // 强制用户在使用已存储的缓存前检查更新
Cache-control: no-store // 不缓存
Cache-control: no-transform // 不得对资源进行转换
Cache-control: only-if-cached // 只接收已缓存的响应，不会检查更新
```

```
// 服务器指令
Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public // 共享缓存
Cache-control: private // 表明响应只能被单个用户缓存，不能作为共享缓存
Cache-control: proxy-revalidate
Cache-Control: max-age=3600
Cache-control: s-maxage=3600 // 覆盖max-age或expires
```

Expires：指定一个日期，在这个日期之后，响应超时

```
Expires: Wed, 14 Feb 2018 09:13:07 GMT
```

Last-Modified：包含源头服务器认定的资源做出修改的日期及时间

```
Last-Modified: Fri, 10 Feb 2017 12:29:59 GMT
```

ETag：资源的特定版本的标识符

```
ETag: "589db247-17ba0"
```
