import React from 'react';
import { Stateview, Layer, setViewState } from '~/index';
import { CanDraw, NotDraw } from './logined/index';
import styles from './logined.less';

export function Logined(props: any) {

  function sayHello() {
    setViewState('unlogin')
  }

  return (
    <div className={styles.panel}>
      <h1>Logined, <button onClick={sayHello}>{props.name}</button></h1>
      <Stateview default='notdraw' >
        <Layer state='candraw' component={<CanDraw name='跳转到未登录状态' />} />
        <Layer state='notdraw' component={<NotDraw name='跳转到可领状态' />} />
      </Stateview>
      <Stateview default='candraw1' className={styles.panel}>
        <Layer state='candraw1' component={<CanDraw name='跳转到未登录状态' />} />
        <Layer state='notdraw1' component={<NotDraw name='跳转到可领状态' />} />
      </Stateview>
    </div>
  );
}
