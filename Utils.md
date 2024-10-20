### 660e

```javascript
export function test() {
  return "明".charCodeAt().toString(16);
}
```

### flattenTree

```javascript
export function flattenTree(data, children = "children") {
  return data.reduce((accumulator, currentValue) => {
    return [...accumulator, currentValue, ...flattenTree(currentValue[children] || [])];
  }, []);
}
```

### buildTree

```javascript
export function buildTree(data, id = "id", pid = "pid", children = "children") {
  const map = {};
  data.forEach((node) => {
    map[node[id]] = { ...node, [children]: [] };
  });

  return data.reduce((accumulator, currentValue) => {
    if (!currentValue[pid]) {
      accumulator.push(map[currentValue[id]]);
    } else {
      if (map[currentValue[pid]]) {
        map[currentValue[pid]][children].push(map[currentValue[id]]);
      }
    }
    return accumulator;
  }, []);
}
```

### downloadBlob

```javascript
export function downloadBlob(blob, filename, type) {
  const _a = document.createElement("a");
  const _u = window.URL.createObjectURL(new Blob([blob], { type }));
  _a.download = filename;
  _a.href = _u;
  _a.style.display = "none";

  document.body.appendChild(_a);
  _a.click();
  document.body.removeChild(_a);
  URL.revokeObjectURL(_u);
}
```
