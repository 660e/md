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
