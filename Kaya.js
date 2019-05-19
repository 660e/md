// 660e
function test() {
  return '明'.charCodeAt().toString(16);
}

// 页面隐藏/展示时执行（最小化时无效）
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

// 获取url参数
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

// 获取cookie
function getCookie(name) {
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  let cookiesQuery;
  cookies.forEach(cookie => {
    const cookiesArray = cookie.split('=');
    cookiesQuery = cookiesArray[0] === name ? cookiesArray[1] : '';
  });
  return cookiesQuery;
}

// 设置cookie
function setCookie(name, value, expires) {
  let date = new Date();
  date.setDate(date.getDate() + expires);
  document.cookie = `${name}=${value};expires=${date}`;
}

// 删除cookie
function removeCookie(name) {
  setCookie(name, '0', -1);
}