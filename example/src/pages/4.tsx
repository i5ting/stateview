import React from 'react';
import { Stateview, Layer, Debug } from '~/index';

/**
 * block demo：2个状态切换 
 */
export default (props: any) => {
  const debug = Debug("example1")

  function unlogin() {
    debug('unlogin')
    window.stateview.show('unlogin')
  }

  function logined() {
    debug('logined')
    window.stateview.show('logined')
  }

  return (
    <Stateview nonblock default='unlogin' height="200px">
      <Layer state='logined'>
        Logined, <button onClick={unlogin}>go to UnLogin</button>
      </Layer>
      <Layer state='unlogin'>
        UnLogin, <button onClick={logined}>go to Logined</button>
      </Layer>
    </Stateview>
  );
}
