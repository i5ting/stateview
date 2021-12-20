import React from 'react';
import { Stateview, Layer, useStateContext } from '~/index';
import { Play0, Play1, Like0, Like1 } from './icon/index';

export function Logined(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('unlogin')
  }

  return <>
    <div>Logined, <button onClick={sayHello}>{props.name}</button></div>
    <Stateview nonblock default='play0'>
      <Layer state='play0' component={<Play0 name='跳转到未登录状态' />} />
      <Layer state='play1' component={<Play1 name='跳转到可领状态' />} />
    </Stateview>
    <Stateview nonblock default='like0'>
      <Layer state='like0' component={<Like0 name='跳转到未登录状态' />} />
      <Layer state='like1' component={<Like1 name='跳转到可领状态' />} />
    </Stateview>
  </>;
}
