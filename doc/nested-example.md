### 示例

带嵌套的3个状态示例

```js
- root
    - 已登录logined
        - 可领 candraw
        - 次数不足 notdraw
    - 未登录unlogin
```

entry

```js
import React from 'react';

import { Stateview, Layer } from 'stateview';
import { Logined, UnLogin } from '../layers/1';

export default () => {
  return (
    <Stateview default='unlogin'>
      <Layer router='logined' component={<Logined name='跳转到未登录状态' />} />
      <Layer router='unlogin' component={<UnLogin name='跳转到登录状态' />} />
    </Stateview>
  );
}
```

unlogin

```js
import React from 'react';
import { useStateContext } from 'stateview';

export function UnLogin(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('logined')
  }

  return <h1 >UnLogin, <button onClick={sayHello}>{props.name}</button></h1>;
}
```

logined

```js
import React from 'react';
import { Stateview, Layer, useStateContext } from 'stateview';
import { CanDraw, NotDraw } from './logined/index';

export function Logined(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('unlogin')
  }

  return <>
    <h1>Logined, <button onClick={sayHello}>{props.name}</button></h1>
    <Stateview default='notdraw'>
      <Layer router='candraw' component={<CanDraw name='跳转到未登录状态' />} />
      <Layer router='notdraw' component={<NotDraw name='跳转到可领状态' />} />
    </Stateview>
  </>;
}
```