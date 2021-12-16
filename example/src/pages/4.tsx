import React from 'react';
import { Stateview, Layer, Debug } from '~/index';

/**
 * block demo：2个状态切换 
 */
export default (props: any) => {
  const debug = Debug("example1")

  function unlogin() {
    debug('unlogin')
    stateview.show('unlogin')
  }

  function logined() {
    debug('logined')
    stateview.show('logined')
  }

  return (
    <Stateview nonblock default='unlogin' height="200px">
      <Layer router='logined'>
        Logined, <button onClick={unlogin}>go to UnLogin</button>
      </Layer>
      <Layer router='unlogin'>
        UnLogin, <button onClick={logined}>go to Logined</button>
      </Layer>
    </Stateview>
  );
}
