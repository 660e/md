### [class](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/statements/class)

class 声明可以创建一个基于原型继承的新类

```javascript
class Cls {
  constructor(c) {
    this.a = 1;
    this.b = 2;
    this.c = c;
  }
  fn1() {
    console.log(this.a);
    console.log(this.c);
  }
}
Cls.prototype.d = 4;
Cls.prototype.fn2 = function () {
  console.log(this.b);
  console.log(this.d);
};
const obj1 = new Cls(3);
const obj2 = new Cls();
obj1.fn1();
obj2.fn2();
```

```
1
3
2
4
```

通过 extends 实现继承

```javascript
class Cls1 {
  constructor() {
    this.a = 1;
  }
  fn1(b) {
    console.log(b);
  }
}
class Cls2 extends Cls1 {
  constructor() {
    super(); // 代表父类的构造函数，用来新建父类的this
  }
  fn1() {
    console.log(2);
  }
  fn2() {
    super.fn1(this.a); // 调用父类的fn1
    this.fn1(); // 调用子类的fn1
  }
}
const obj1 = new Cls1();
const obj2 = new Cls2();
obj1.fn1(3);
obj2.fn2();
```

```
3
1
2
```
