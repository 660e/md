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

function foo(bar: TBar) {
  console.log(bar);
}

foo({ a: "", b: 0, c: false });
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

const foo: GetOptional<IFoo> = {};

console.log(foo);
```

### Generics

```typescript
function foo<T>(bar: T): T {
  return bar;
}

foo<number>(1);
foo(1);
```

```typescript
interface IFoo<T> {
  a: T;
}

const foo: IFoo<number> = { a: 1 };
console.log(foo.a);
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
