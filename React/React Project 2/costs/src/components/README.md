<div align="center">

## Trocar Títulos das páginas (métodos)

</div>

> **Maneira 1**
```ts
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    document.title = 'My Page Title';
  }, []);
}
```


> **Maneira 2**
```ts
import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'My Page Title';

class MyComponent extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        ...
      </>
    )
  }
}
```

---

<div align="center">

## Dashboards (CHART JS)

[How to Create Bar Chart with React Chart JS 2](https://www.youtube.com/watch?v=GVQ2gXGGREM)

</div>

> **REACT NPM**

```
npm install --save chart.js react-chartjs-2
```

---

<div align="center">

## Error Type

[Element implicitly has an 'any' type because expression of type 'string' can't be used to index type](https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression)

</div>

> **Solve the error using a type assertion**

```ts
const str = 'name' as string;

const obj = {
  name: 'Bobby Hadz',
  country: 'Chile',
};

// 👇️ "Bobby Hadz"
console.log(obj[str as keyof typeof obj]);

// 👇️ type T = "name" | "country"
type T = keyof typeof obj;

```

> **Use an object with an index signature to store key-value pairs**

```ts
type Person = {
  [key: string]: any;
};

const obj: Person = {
  name: 'Bobby Hadz',
};

obj.age = 30;
obj.salary = 100;
obj.tasks = ['develop', 'test'];

console.log(obj['age']); // 👉️ 30
console.log(obj['salary']); // 👉️ 100

```