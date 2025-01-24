### 660e

```typescript
export function test() {
  return "明".charCodeAt(0).toString(16);
}
```

### flattenTree

```typescript
export function flattenTree<T>(data: T[], children = "children"): T[] {
  return data.reduce((accumulator: T[], currentValue: T) => {
    return [...accumulator, currentValue, ...flattenTree((currentValue[children as keyof T] as T[]) || [])];
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
