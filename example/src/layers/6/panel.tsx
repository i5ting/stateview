import React from 'react';
import { Stateview, Layer } from '~/index';
import { P1, P2 } from './panels/index';
import styles from './tab.less';

export function Panel(props: any) {
  return (
    <div className={styles.panel}>
      <Stateview default='p1'>
        <Layer state='p1' component={<P1 />} />
        <Layer state='p2' component={<P2 />} />
      </Stateview>
    </div>
  );
}
