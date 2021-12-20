 
<div>
  简体中文 ｜ <a href="./README_EN.md">English</a>
</div>

<h1 align="center"> Stateview </h1>
<div align="center">
  <img src="https://img.alicdn.com/imgextra/i3/O1CN01ukckHc1yE7ND85M1s_!!6000000006546-2-tps-1088-970.png" width="300" />
</div>
<br />

<div align="center">
  <strong> a react render solution for Multi-State View.</strong>
</div>
<br />

<div align="center">
  <a href="https://badge.fury.io/js/stateview"><img src="https://badge.fury.io/js/stateview.svg" alt="npm version" height="18"></a>
  <a href="https://npmcharts.com/compare/stateview" target="_blank"><img src="https://img.shields.io/npm/dm/stateview" alt="download"></a>
  <a href="https://standardjs.com" target="_blank"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standardjs"></a>
  <a href="https://github.com/i5ting/stateview" target="_blank"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://github.com/zhangyuang/i5ting/stateview" target="_blank"><img src="https://img.shields.io/badge/node-%3E=12-green.svg" alt="Node"></a>
</div>
<br />

## Features

<div align="center">
  <img src="https://img.alicdn.com/imgextra/i3/O1CN01mspQkq1mGc9AnkL9V_!!6000000004927-2-tps-2448-1372.png"/>
</div>
<br />

- Compatible with the React Component
- Built-in the Multi-State View with {Stateview , Layer}
- Customize the Data via React Component props.data
- Built-in Switch State with show or datashow method
- Support the Nested Stateview

## 预览

可以通过[StackBlitz](http://stackblitz.com/)进行线上预览:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/i5ting/stateview)

## 安装

    $ npm install --save stateview

## 用法

下面是3个示例，展示Stateview在多状态视图切换功能上的抽象和能力。

- 示例1：最小示例，只有Logined和UnLogin二个状态，纯UI展示型，通过stateview.show切换视图
- 示例2：通过stateview.datashow切换状态来控制视图展示，视图组件在切换的时候，根据props.data进行渲染
- 示例3：嵌套示例，主要演示复杂场景里多状态视图切换。

### 最小示例

最小示例，只有Logined和UnLogin二个状态。

```js
import React from 'react';

import { Stateview, Layer } from 'stateview';

export default () => {

  function unlogin() {
    stateview.show('unlogin')
  }

  function logined() {
    stateview.show('logined')
  }

  return (
    <Stateview default='unlogin'>
      <Layer state='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer state='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>;
      </Layer>
    </Stateview>
  );
}
```

注意：此时使用的window.stateview

### 数据示例

```js
import React from 'react';

import { Stateview, Layer, Debug } from '~/index';

const Logined = (props: any) => {
  function unlogin() {
    stateview.datashow('unlogin', { name: 'unlogin i5ting' })
  }
  return (<h1>Logined, <button onClick={unlogin}>{props.data.name}</button></h1>)
}

const UnLogin = (props: any) => {
  return (<h1 >UnLogin, <button onClick={props.action}>{props.data.name}</button></h1>)
}

export default (props: any) => {

  function logined() {
    stateview.datashow('logined', { name: 'logined i5ting' })
  }

  return (
    <Stateview default='unlogin' data={{ name: 'somename' }}>
      <Layer state='logined' component={<Logined />} />
      <Layer state='unlogin' component={<UnLogin action={logined} />} />
    </Stateview>
  );
}
```

### 嵌套示例

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
      <Layer state='logined' component={<Logined name='跳转到未登录状态' />} />
      <Layer state='unlogin' component={<UnLogin name='跳转到登录状态' />} />
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
      <Layer state='candraw' component={<CanDraw name='跳转到未登录状态' />} />
      <Layer state='notdraw' component={<NotDraw name='跳转到可领状态' />} />
    </Stateview>
  </>;
}
```

## 文档

- [Introduction](./docs/introduction.md)
- [Quick Start](./docs/quick-start.md)
- [API](./docs/api.md)
- [Concept](./docs/concept.md)
- [Design](./docs/design.md)
- [Data](./docs/data.md)
- [Examples](./examples)

## 运行示例方法

```shell
$ npm i 
$ npm run dev
```

## 参与贡献

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Refer to the [CONTRIBUTING](./CONTRIBUTING.md).

## License

Copyright © i5ting. All rights reserved.

Licensed under the MIT license.