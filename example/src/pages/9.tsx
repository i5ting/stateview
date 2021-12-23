import React from 'react';

import { Stateview, Layer, getStateview } from '~/index';

/**
 * 最简单的分组Demo：2个状态切换 
 */
export default (props: any) => {

  function unlogin() {
    getStateview('alfred').setViewState('unlogin')
  }

  function logined() {
    getStateview('alfred').setViewState('logined')
  }

  return (
    <Stateview default='unlogin' group='alfred'>
      <Layer state='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer state='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>
      </Layer>
    </Stateview>
  );
}
