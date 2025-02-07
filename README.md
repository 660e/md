### 早期返回模式

```javascript
function fn(a, b, c) {
  if (a) {
    if (b) {
      if (c) {
        console.log(true);
      } else {
        console.log("!c");
      }
    } else {
      console.log("!b");
    }
  } else {
    console.log("!a");
  }
}
```

```javascript
function fn(a, b, c) {
  if (!a) {
    console.log("!a");
    return;
  }
  if (!b) {
    console.log("!b");
    return;
  }
  if (!c) {
    console.log("!c");
    return;
  }
  console.log(true);
}
```

### DTO（Data Transfer Object）

```typescript
interface CreateUserDTO {
  id: string;
  username: string;
  email: string;
  password: string;
}
```

### VO（Value Object）

```typescript
interface UserVO {
  username: string;
  email: string;
  password: string;
}
```
