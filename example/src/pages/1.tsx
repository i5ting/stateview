import React, { useEffect, createContext, useState, useContext, useMemo, useRef } from 'react';

import { Stateview, Layer, useStateContext } from '../../../src/index';
import { Logined, UnLogin} from '../layers/1';
import styles from './index.less';

export default () => {

  const { stateContent, stateview } = useStateContext()

  function onChange(pre: Object, current: Object) {

  }
 
  return (
    <Stateview default='unlogin' height="200px" onStateChange={onChange} >
      <Layer router='logined' component={<Logined name='跳转到未登录状态' />} />
      <Layer router='unlogin' component={<UnLogin name='跳转到登录状态' />} />
    </Stateview>
  );
}
