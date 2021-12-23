import React from 'react';

import { Stateview, Layer, setViewState, Debug } from '~/index';

/**
 * 自定义tag的Demo：使用h1作为外层包裹tag 
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
    <Stateview default='unlogin' tag='h1' >
      <Layer state='logined'>
        <div>tag外层是h1，Logined, <button onClick={unlogin}>go to UnLogin</button></div>
      </Layer>
      <Layer state='unlogin'>
        <div>tag外层是h1，UnLogin, <button onClick={logined}>go to Logined</button></div>
      </Layer>
    </Stateview>
  );
}
