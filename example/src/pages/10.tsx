import React from 'react';

import { Stateview, Layer } from '~/index';
import { Logined, UnLogin } from '../layers/10';
import styles from './index.less';

/**
 * 嵌套+分组：首层同时并列2个Stateview 
 */
export default () => {
  return (
    <>
      <div className={styles.panel}>
        <Stateview default='unlogin' group="a">
          <Layer state='logined' component={<Logined name='跳转到未登录状态' />} />
          <Layer state='unlogin' component={<UnLogin name='跳转到登录状态' />} />
        </Stateview>
      </div>
      <div className={styles.panel}>
        <Stateview default='logined1' className={styles.panel} group="c">
          <Layer state='logined1' component={<Logined name='跳转到未登录状态' />} />
          <Layer state='unlogin1' component={<UnLogin name='跳转到登录状态' />} />
        </Stateview>
      </div>
    </>
  );
}
