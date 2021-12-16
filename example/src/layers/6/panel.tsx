import React from 'react';
import { Stateview, Layer } from '~/index';
import { P1,P2 } from './panels/index';
import styles from './tab.less';

export function Panel(props: any) {
  return <>
    <Stateview default='p1' height="200px" className={styles.panel}>
      <Layer router='p1' component={<P1/>} />
      <Layer router='p2' component={<P2/>} />
    </Stateview>
  </>;
}
