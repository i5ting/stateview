import React from 'react';
import { Stateview, Layer, useStateContext } from '~/index';
import { CanDraw, NotDraw } from './logined/index';
import styles from './logined.less';

export function Logined(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('unlogin')
  }

  return <>
    <h1>Logined, <button onClick={sayHello}>{props.name}</button></h1>
    <Stateview default='notdraw' className={styles.panel} >
      <Layer router='candraw' component={<CanDraw name='跳转到未登录状态' />} />
      <Layer router='notdraw' component={<NotDraw name='跳转到可领状态' />} />
    </Stateview>
    <Stateview default='candraw1' className={styles.panel}>
      <Layer router='candraw1' component={<CanDraw name='跳转到未登录状态' />} />
      <Layer router='notdraw1' component={<NotDraw name='跳转到可领状态' />} />
    </Stateview>
  </>;
}
