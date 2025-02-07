# 开发规范

### 目录的命名规范

- 目录名全部使用小写，单词需采用复数形式，`kebab-case`形式命名。
- 如果需要有多个单词表达，使用中划线连接，如`new-page`、`components`。

### 文件的命名规范

- 如果该文件是单文件组件/类，采用`PascalCase`形式命名，方便导入和使用，如`CustomSelect.vue`。
- 如果该文件是目录下的主文件，采用`index`名称命名，方便导入，如`index.ts`、`index.vue`。
- 如果该文件是接口定义文件，采用`camelCase`形式命名，方便区分文件关联性，如`list.ts`、`listModel.ts`。
- 如果该文件是资源/样式文件，采用`kebab-case`形式命名。

### 代码中的命名规范

```javascript
// 常量
const CONST_NAME = 1;

// 变量
let letName = 1;

// 函数
function functionName() {}

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

### 分支规范

- 主干分支：`develop`
- 功能分支：`feature`
- 修复分支：`hotfix`

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
