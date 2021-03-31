### mixins

```javascript
const mixin = {
  data() {
    return {
      a: 1,
      b: 2
    };
  },
  mounted() {
    console.log('a');
    console.log(this.b); // > 4
  },
  methods: {
    fn1() {
      console.log(this.c);
    },
    fn2() {
      console.log(this.a);
    }
  }
};
export default {
  mixins: [mixin],
  data() {
    return {
      b: 4,
      c: 3
    };
  },
  mounted() {
    console.log('b');
    console.log(this.a);
    console.log(this.b); // > 4
    console.log(this.c);
    this.fn1();
    this.fn2();
  },
  methods: {
    fn2() {
      console.log(this.b);
    }
  }
};
```

```
a
4
b
1
4
3
3
4
```
