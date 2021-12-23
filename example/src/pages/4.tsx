import React from 'react';
import { Stateview, Layer, setViewState, Debug } from '~/index';

/**
 * block demo：2个状态切换 
 */
export default (props: any) => {
  const debug = Debug("example1")

  function unlogin() {
    debug('unlogin')
    setViewState('unlogin')
  }

  function logined() {
    debug('logined')
    setViewState('logined')
  }

  return (
    <span>
      <Stateview default='unlogin'>
        <Layer state='logined'>
          Logined, <button onClick={unlogin}>go to UnLogin</button>
        </Layer>
        <Layer state='unlogin'>
          UnLogin, <button onClick={logined}>go to Logined</button>
        </Layer>
      </Stateview>
    </span>
  );
}
