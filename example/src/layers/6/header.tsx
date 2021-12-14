import React from 'react';
import { Stateview, Layer } from '~/index';
import { Play0, Play1, Like0, Like1 } from './headers/index';

export function Header(props: any) {
  return <>
    <Stateview block default='play1' height="200px" >
      <Layer router='play0' component={<Play0/>} />
      <Layer router='play1' component={<Play1/>} />
    </Stateview>
    <Stateview block default='like0' height="200px" >
      <Layer router='like0' component={<Like0/>} />
      <Layer router='like1' component={<Like1/>} />
    </Stateview>
  </>;
}
