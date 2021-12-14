import React from 'react';
import { Stateview, Layer, useStateContext } from '~/index';
import { Play0, Play1, Like0, Like1 } from './headers/index';

export function Header(props: any) {
  return <>
    <Stateview block default='play1' height="200px" >
      <Layer router='play0' component={<Play0 name='跳转到未登录状态' />} />
      <Layer router='play1' component={<Play1 name='跳转到可领状态' />} />
    </Stateview>
    <Stateview block default='like0' height="200px" >
      <Layer router='like0' component={<Like0 name='跳转到未登录状态' />} />
      <Layer router='like1' component={<Like1 name='跳转到可领状态' />} />
    </Stateview>
  </>;
}
