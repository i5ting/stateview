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
    <Stateview block default='play0' height="200px" >
      <Layer router='play0' component={<Play0 name='跳转到未登录状态' />} />
      <Layer router='play1' component={<Play1 name='跳转到可领状态' />} />
    </Stateview>
    <Stateview block default='like0' height="200px" >
      <Layer router='like0' component={<Like0 name='跳转到未登录状态' />} />
      <Layer router='like1' component={<Like1 name='跳转到可领状态' />} />
    </Stateview>
  </>;
}
