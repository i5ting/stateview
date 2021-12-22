import React from 'react';

import { Stateview, Layer, Debug } from '~/index';

/**
 * 最简单的Demo：2个状态切换 
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
    <Stateview default='unlogin' tag='h1' nonblock>
      <Layer state='logined'>
        <div>tag外层是h1，Logined, <button onClick={unlogin}>go to UnLogin</button></div>
      </Layer>
      <Layer state='unlogin'>
        <div>tag外层是h1，UnLogin, <button onClick={logined}>go to Logined</button></div>
      </Layer>
    </Stateview>
  );
}
