
# Data


## 定义默认数据

```js
export default () => {
  return (
    <Stateview default='unlogin' className={styles.panel} data={{name: 'defaultname'}}>
      <Layer router='logined' component={<Logined name='跳转到未登录状态'  />} />
      <Layer router='unlogin' component={<UnLogin name='跳转到登录状态'  />} />
    </Stateview>
  );
}
```

## API调用

- stateview.show('unlogin')
- stateview.datashow('unlogin', { ... })

```js
import React from 'react';
import { useStateContext } from '~/index';

export function Logined(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.datashow('unlogin', { 'name': 'Logined i5ting' })
  }

  return <>
    <h1>Logined, <button onClick={sayHello}>{props.data.name}</button></h1>
  </>;
}
```

## 组件默认值

- 组件自己的数据，通过props.data定义 <UnLogin name='跳转到登录状态' data={{name:'s'}} />}
- 在Stateview上有默认状态，默认状态对应的props.data是对应的default对应的数据。
- 优先级：Stateview对应的props.data > 组件自己的props.data

```js
export default () => {
  return (
    <Stateview default='unlogin' className={styles.panel} data={{name: 'defaultname'}}>
      <Layer router='logined' component={<Logined name='跳转到未登录状态'  />} />
      <Layer router='unlogin' component={<UnLogin name='跳转到登录状态' data={{name:'s'}} />} />
    </Stateview>
  );
}
```

## 注意

下面这种情况是不适合使用stateview.datashow，必须是独立的Component才可以

```js
export default (props: any) => {
  const debug = Debug("example1")

  function unlogin() {
    debug('unlogin')
    stateview.datashow('unlogin', {a:1})
  }

  function logined() {
    debug('logined')
    stateview.show('logined')
  }

  return (
    <Stateview default='unlogin'>
      <Layer router='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer router='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>
      </Layer>
    </Stateview>
  );
}
```
