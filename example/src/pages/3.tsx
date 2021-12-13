import React, { useEffect, createContext, useState, useContext, useMemo, useRef } from 'react';

import { Stateview, Layer, useStateContext } from '~/index';
import { Logined, UnLogin} from '../layers/2';
import styles from './index.less';

/**
 * 嵌套+并列的Demo：5个状态切换 
 */ 
export default () => {
  const { stateContent, stateview } = useStateContext()
 
  return (
    <Stateview default='unlogin' height="200px" onStateChange={onChange} >
      <Layer router='logined' component={<Logined name='跳转到未登录状态' />} />
      <Layer router='unlogin' component={<UnLogin name='跳转到登录状态' />} />
    </Stateview>
  );
}
