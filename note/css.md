### 样式重置

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
th,
td,
p,
button,
input,
select,
textarea {
  margin: 0;
  padding: 0;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #999;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #666;
}
::selection {
  background-color: #0af;
  color: #fff;
}
```

### 重排（reflow）

触发重排，从 layout 开始重新渲染

```javascript
node.appendChild(child); // 添加、删除可见元素
node.innerText(text); // 改变文本内容
element.style.right = '1px'; // 改变元素位置：top、left、right、bottom...
element.style.width = '1px'; // 改变元素尺寸：border、padding、margin、width、height...
element.offsetTop; // 返回元素偏移量：offsetTop、scrollTop、clientTop...
element.onresize = function () {}; // 改变窗口大小
window.getComputedStyle(element); // 计算样式
```

### 重绘（repaint）

触发重绘，从 paint 开始重新渲染

```css
.demo {
  animation: name 1s linear 2s infinite alternate;
  transition: color 1s linear 2s;
  transform: translateZ(0);
}
```

### 格式化上下文

BFC（block formatting context）

```css
.demo {
  display: inline-block/inline-flex/flex/table-caption/table-cell;
  float: left/right;
  overflow: hidden/scroll;
  position: absolute/fixed;
}
```

IFC（inline formatting context）

```html
<!-- block元素中仅包含inline元素 -->
<div>
  <a></a>
  <b></b>
</div>
```

FFC（flex formatting context）

```css
.demo {
  display: inline-flex/flex;
}
```

GFC（grid formatting context）

```css
.demo {
  display: grid;
}
```

### 参考资料

- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
