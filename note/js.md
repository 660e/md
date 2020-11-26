### js注释规范

```javascript
/**
 * descriptions
 *
 * @static
 * @private
 * @param   {string}
 * @param   {number}
 * @param   {boolean}
 * @param   {array}
 * @param   {object}
 * @param   {function}
 * @return  {undefined}
 *
 * @author  660e
 * @date    2017-11-18
 *
 */
function function_name(argument) {
  // body...
}
```

### commit规范

* feat/feature：增加新功能
* fix：修复bug
* docs：编写文档、编写注释
* style：变更代码格式（不影响代码运行逻辑）
* refactor：重构
* chore：变更构建过程或构建工具

### 闭包（closure）

能够从函数外部读取该函数内部变量的结构称为闭包

```javascript
const fn1 = () => {
  let a = 1;
  const fn2 = () => {
    console.log(a);
    a++;
  };
  return fn2;
};
const fn3 = fn1();
fn3(); // > 1
fn3(); // > 2 闭包中的a不会被回收
```

### [原型链（prototype chain）](https://developer.mozilla.org/zh-CN/docs/web/javascript/inheritance_and_the_prototype_chain)

调用属性时，优先查找自身（私有）属性，如果不存在，再沿原型链查找相对应的属性

```javascript
function Fn() {
  this.a = 1; // 私有属性
}
Fn.prototype.a = 2; // 原型对象属性
Fn.prototype.b = 3;
const obj = new Fn();
console.log(obj.a); // > 1 优先查找私有属性
console.log(obj.b); // > 3 实际调用obj.__proto__.b
console.log(obj.__proto__.a); // > 2
console.log(Fn.prototype.constructor === obj.__proto__.constructor); // > true
```

### this

this引用的是函数上下文，它的指向取决于函数在哪调用，而不是在哪定义

```javascript
var a = 1;
const obj = {
  a: 2,
  b: {
    a: 3,
    fn1: function() {
      return this.a;
    },
    fn2: () => {
      return this.a;
    }
  }
};
console.log(obj.b.fn1()); // > 3 this指向obj.b
console.log(obj.b.fn2()); // > 1 箭头函数不会创建自己的this，它使用封闭执行上下文的this
console.log(obj.b.fn1.call(obj)); // > 2 改变上下文，this指向obj
console.log(obj.b.fn2.call(obj)); // > 1 箭头函数的this不会改变
```

### [new](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/operators/new)

创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例，实例在内存中是独立的

```javascript
const a = new Number(1);
const b = new Number(1);
console.log(a); // > Number
console.log(a === 1); // > false
console.log(a === b); // > false
console.log(a + 1 === b + 1); // > true
```

Fn的return如果是object，则new Fn()指向当前对象

```javascript
function Fn() {
  this.a = 1;
  return b; // object
}
const b = { a: 2 };
const obj = new Fn();
console.log(obj.a); // > 2
```

Fn的return如果是string、number、boolean、undefined、null，则new Fn()指向Fn

```javascript
function Fn() {
  this.a = 1;
  return b; // number
}
const b = 2;
const obj = new Fn();
console.log(obj.a); // > 1
```

### [].slice.call()

常用来将类数组转化为真正的数组

```javascript
function fn(a, b, c) {
  const args = [].slice.call(arguments);
  console.log(args); // > [1, 2, 3]
  console.log(Array.isArray(args)); // > true
  console.log(Array.isArray(arguments)); // > false
}
fn(1, 2, 3);
```

### js编译过程

* 分词（tokenizing）
* 解析（parsing） -> 抽象语法树（abstract syntax tree）
* 生成原始代码（raw code）

### 优化js

* 始终以相同的顺序实例化对象属性，以便共享隐藏类
* 对象实例化之后，再向对象添加属性将强制执行隐藏类，并降低之前由隐藏类所优化的所有方法的执行速度，所以优先在构造函数内分配属性
* 由于内联缓存的存在，重复执行相同方法的代码比仅执行一次的多个不同方法的代码效率更高
* 避免使用键值不是自增的稀疏数组
* 避免删除数组中的元素
* 尽可能使用31位有符号数字

### MVC

* View传送指令到Controller
* Controller完成业务逻辑后，要求Model改变状态
* Model将新的数据发送到View，用户得到反馈

### MVVM

* 采用双向绑定，ViewModel连接View和Model
* View的变动自动反映在ViewModel上
* Model改变状态，通过ViewModel，自动更新View

### 参考资料

* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

