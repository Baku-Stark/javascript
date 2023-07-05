<div align="center">

## Trocar Títulos das páginas (métodos)

</div>

> **1**
```ts
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    document.title = 'My Page Title';
  }, []);
}
```

<hr>


> **2**
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