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

</div>

> **REACT NPM**

````
npm install --save chart.js react-chartjs-2
```