interface Product {
  name: string;
  price: number;
}
type ReadonlyType<T> = { readonly [K in keyof T]: T[K] };
type OptionalType<T> = { [K in keyof T]?: T[K] };
type NullableType<T> = { [K in keyof T]: T[K] | null };

const p: ReadonlyType<Product> = { name: "A", price: 1 };
p.name = "B"; // 编译错误，属性只读
