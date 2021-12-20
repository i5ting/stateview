 
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

## 预览

可以通过[StackBlitz](http://stackblitz.com/)进行线上预览:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/i5ting/stateview)

## 安装

    $ npm install --save stateview

## 用法

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
      <Layer router='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer router='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>;
      </Layer>
    </Stateview>
  );
}
```

注意：此时使用的window.stateview

### 核心概念

```js
import { Stateview, Layer } from 'stateview';
```

核心概念

- Stateview组件
  - 属性
    - default='unlogin' 默认状态
    - nonblock 是否为块级元素，默认div，如果有nonblock，显示为span
- Layer组件
  - 属性
    - router='logined' 状态名称
    - component={<Logined name='跳转到未登录状态' />} 状态对应的视图组件
    - 如果有props.children优先，如无，则展示component

### Api

在具体的Layer状态对应的视图组件里使用。

```js
import { useStateContext } from 'stateview';

const { stateview } = useStateContext()
```

API

- stateview.show(path: string) 显示具体的状态，参数可以是一个，也可以是数组
- stateview.getStateBy(path: string) 根据path，获取State信息
- stateview.getComponentBy(path: string) 根据path，获取Component信息
- stateview.getStates() 获取所有States信息

当然，你也可以使用是window.stateview替代useStateContext

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

## 设计

使用stateview首先你需要改变一下设计思维。从状态的角度去思考组成的组成。下面以tab为例

### 定义tab

由2部分组成

- header 互斥逻辑，一个是高亮量，另一个是正常态
- panel 2选1显示，排他逻辑

### 定义状态

header假设有2个，由2个stateview并排显示即可，每个header item有高亮量和正常态，定一个react组件即可（注意此时block，意味着它是非块级元素，由span渲染）

```js
export function Header(props: any) {
  return <>
    <Stateview nonblock default='play1' >
      <Layer router='play0' component={<Play0 />} />
      <Layer router='play1' component={<Play1 />} />
    </Stateview>
    <Stateview nonblock default='like0' height="200px" >
      <Layer router='like0' component={<Like0 />} />
      <Layer router='like1' component={<Like1 />} />
    </Stateview>
  </>;
}
```

panel就1个stateview，里面内嵌2个layer即可

```js
export function Panel(props: any) {
  return <>
    <Stateview default='p1'>
      <Layer router='p1' component={<P1/>} />
      <Layer router='p2' component={<P2/>} />
    </Stateview>
  </>;
}
```

### 行为定义

header切换的时候，选中1个是高亮态，其他需要设置为正常态、注意当状态是高亮的时候，点击无行为

```js
import React from 'react';
import styles from './player.less';

export function Like0(props: any) {

  function sayHello() {
    stateview.show('p2')
    stateview.show('like1')
    stateview.show('play0')
  }

  return <span onClick={sayHello}><svg t="1639443196975" className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1341" width="200" height="200"><path d="M511.4 511.9m-426.3 0a426.3 426.3 0 1 0 852.6 0 426.3 426.3 0 1 0-852.6 0Z" fill="#FFFFFF" p-id="1342"></path><path d="M511.4 958.2c-60.2 0-118.7-11.8-173.7-35.1-53.1-22.5-100.9-54.7-141.9-95.6-41-41-73.2-88.7-95.6-141.9-23.3-55-35.1-113.5-35.1-173.7s11.8-118.7 35.1-173.7c22.5-53.1 54.7-100.9 95.6-141.9 41-41 88.7-73.2 141.9-95.6 55-23.3 113.5-35.1 173.7-35.1s118.7 11.8 173.7 35.1c53.1 22.5 100.9 54.7 141.9 95.6 41 41 73.2 88.7 95.6 141.9 23.3 55 35.1 113.5 35.1 173.7s-11.7 118.7-35 173.7C900.2 738.8 868 786.5 827 827.5s-88.7 73.2-141.9 95.6c-55 23.3-113.4 35.1-173.7 35.1z m0-852.6c-224 0-406.3 182.3-406.3 406.3s182.3 406.3 406.3 406.3 406.3-182.3 406.3-406.3c0.1-224-182.2-406.3-406.3-406.3z" fill="#FF7A4E" p-id="1343"></path><path d="M531.9 250.5l58.4 118.4c4.4 8.9 12.9 15 22.6 16.5l130.6 19c24.7 3.6 34.5 33.9 16.7 51.3l-94.5 92.1c-7.1 6.9-10.3 16.9-8.7 26.6l22.3 130.1c4.2 24.6-21.6 43.3-43.6 31.7L519 674.8c-8.8-4.6-19.2-4.6-28 0l-116.8 61.4c-22.1 11.6-47.9-7.1-43.6-31.7l22.3-130.1c1.7-9.8-1.6-19.7-8.7-26.6l-94.5-92.1c-17.9-17.4-8-47.7 16.7-51.3l130.6-19c9.8-1.4 18.3-7.6 22.6-16.5L478 250.5c11-22.4 42.9-22.4 53.9 0z" fill="#FF7A4E" p-id="1344"></path></svg></span>;
}
```

这样实现状态非常快，且清晰

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