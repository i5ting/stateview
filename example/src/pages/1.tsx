import React from 'react';

import { Stateview, Layer, useStateContext, Debug } from '~/index';

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
    <Stateview default='unlogin' height="200px">
      <Layer router='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer router='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>
      </Layer>
    </Stateview>
  );
}
