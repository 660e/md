### 提交规范

- 功能：`feat`
- 修补：`fix`
- 文档：`docs`
- 格式：`style`
- 重构：`refactor`
- 测试：`test`
- 发布：`release`
- 回滚：`revert`
- 其他：`chore`

### 命名规范

```javascript
// 常量
const CONST_NAME = 1;

// 变量
let letName = 1;

// 函数
function fnName() {}

// 类
class ClassName {}

// 短生命周期
[1, 2].map((e, i) => e + i);
```

```typescript
// 类型
type TName = string;

// 接口
interface IUser {
  name: TName;
}
```
