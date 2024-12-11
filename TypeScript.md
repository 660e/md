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
