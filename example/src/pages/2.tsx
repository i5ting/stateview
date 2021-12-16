import React from 'react';

import { Stateview, Layer } from '~/index';
import { Logined, UnLogin } from '../layers/1';
import styles from './index.less';

/**
 * 嵌套Demo：3个状态切换 
 */ 
export default () => {
  return (
    <Stateview default='unlogin' className={styles.panel}>
      <Layer router='logined' component={<Logined name='跳转到未登录状态' />} />
      <Layer router='unlogin' component={<UnLogin name='跳转到登录状态' />} />
    </Stateview>
  );
}
