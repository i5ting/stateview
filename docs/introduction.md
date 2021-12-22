# introduction

## 什么是多状态视图？

<div align="center">
  <img src="https://img.alicdn.com/imgextra/i1/O1CN01SLfF1z1V78ToX9dJo_!!6000000002605-2-tps-1560-756.png"/>
</div>
<br />

- 首先解决多状态问题
- 其次留好低代码的可能性

## 状态表达

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

假设一个视图，有已登录和未登录二个状态，每个状态显示的不一样的。

- 外层定义了一个Stateview，说明Stateview里面的所有Layer是一组的，这些Layer只能有一个展示。
- Layer是其中一种状态对应的视图，只要是Layer，它都会有一个props是state，这样就可以作为唯一标识来查找和切换状态了。
- 注意Layer是可以有1到n个，也就是说，一组状态视图中，每次只能有一个Layer进行展示

上面的例子再加一个默认展示，首先进入默认图层，然后根据jsbridge信息判断是否登录，然后分别展示具体图层。

```js
export default () => {
  return (
    <Stateview default='default'>
      <Layer state='default' component={<Default />} />
			<Layer state='logined' component={<Logined name='跳转到未登录状态' />} />
      <Layer state='unlogin' component={<UnLogin name='跳转到登录状态' />} />
    </Stateview>
  );
}
```

这里面最难的是问题的抽象，Stateview和Layer职责是什么，如何做到递归，以最小成本达到效用最大化。

## 状态切换

代码如下

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

通过window.stateview.show('unlogin') 可以非常简单的切换状态。

## 数据切换

datashow用于切换视图，并把数据带过去。

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

通过stateview.datashow('logined', { name: 'logined i5ting' })可以非常简单的切换状态。

如果一个图层带data，那么它就是一个模板.

```js
传值

<Layer state='unlogin' component={<UnLogin name='跳转到登录状态' data={{name:'s'}} />} />
  

组件中使用props.data
export function UnLogin(props: any) {

  function sayHello() {
    window.stateview.datashow('logined', { name: 'UnLogin i5ting' })
  }

  return <h1 >UnLogin, <button onClick={sayHello}>{props.data.name}</button></h1>;
}
```

将模块拆分多个图层（Layer），将每个Layer看成是数据和模板组装的组件，这样会进一步将多状态视图问题进行简化。

有了stateview.show和stateview.datashow，纯展示型的图层和带有数据的图层都能支持，且可以互相混用。

## 嵌套表达

举个例子，图层分了已登录和未登录。但已登录还会继续划分，比如可领和次数不足。

<div align="center">
  <img src="https://img.alicdn.com/imgextra/i4/O1CN010Gcd5H1Oo0EvylwuU_!!6000000001751-2-tps-1492-582.png"/>
</div>

假设，可领和次数不足的ui是不一样的。
按这种方式推导，我们就需要有4个状态：初始态，未登录，可领和次数不足。

```js
export default () => {
  return (
    <Stateview default='default'>
      <Layer state='default' component={<Default />} />
			<Layer state='logined'/>
        <Stateview default='notdraw'>
           <Layer state='candraw' component={<CanDraw name='可领' />} />
           <Layer state='notdraw' component={<NotDraw name='次数不足' />} />
         </Stateview>
      </Layer>
      <Layer state='unlogin' component={<UnLogin name='跳转到登录状态' />} />
    </Stateview>
  );
}
```

这样写起来是不是更简单？

<div align="center">
  <img src="https://img.alicdn.com/imgextra/i3/O1CN01mspQkq1mGc9AnkL9V_!!6000000004927-2-tps-2448-1372.png"/>
</div>
<br />


