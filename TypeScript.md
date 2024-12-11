### Optional

```typescript
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface IFoo {
  a: string;
  b: number;
  c: boolean;
  d: null;
  e: undefined;
}

type TBar = Optional<IFoo, "d" | "e">;

function fn(options: TBar) {
  console.log(options);
}

fn({ a: "", b: 0, c: false });
```

### GetOptional

```typescript
type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

interface IFoo {
  a: string;
  b: number;
  c?: boolean;
  d?: null;
  e?: undefined;
}

const bar: GetOptional<IFoo> = {};

console.log(bar);
```

### Union Type

```typescript
type TFoo = { a: number; b: number } | { b: number; c: number };

const foo: TFoo = { a: 1, b: 1, c: 1 };

console.log(foo.b);
```

### Intersection Type

```typescript
type TFoo = { a: number; b: number } & { b: number; c: number };

const foo: TFoo = { a: 1, b: 1, c: 1 };

console.log(foo.a);
console.log(foo.b);
console.log(foo.c);
```
