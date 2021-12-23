import React from 'react';
import { Stateview, Layer, getStateview } from '~/index';
import { CanDraw, NotDraw } from './logined/index';

export function Logined(props: any) {

  function sayHello() {
    getStateview('a').setViewState('unlogin')
  }

  return <>
    <h1>Logined, <button onClick={sayHello}>{props.name}</button></h1>
    <Stateview default='notdraw' group="b">
      <Layer state='candraw' component={<CanDraw name='跳转到未登录状态' />} />
      <Layer state='notdraw' component={<NotDraw name='跳转到可领状态' />} />
    </Stateview>
  </>;
}
