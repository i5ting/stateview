import React from 'react';
import { Stateview, Layer } from '~/index';
import { Logined, UnLogin } from '../layers/5';

/**
 * 嵌套+并列的Demo：5个状态切换 
 */
export default () => {
  return (
    <span>
      <Stateview default='unlogin'>
        <Layer state='logined' component={<Logined name='跳转到未登录状态' />} />
        <Layer state='unlogin' component={<UnLogin name='跳转到登录状态' />} />
      </Stateview>
    </span>
  );
}
