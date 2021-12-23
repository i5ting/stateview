import React from 'react';

import { Stateview, Layer, setViewState } from '~/index';

/**
 * 最简单的Demo：2个状态切换 
 */
export default () => {

  function unlogin() {
    setViewState('unlogin')
  }

  function logined() {
    setViewState('logined')
  }

  return (
    <Stateview default='unlogin'>
      <Layer state='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer state='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>
      </Layer>
    </Stateview>
  );
}
