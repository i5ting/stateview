import React from 'react';
import { Stateview, Layer } from '~/index';
import { Play0, Play1, Like0, Like1 } from './headers/index';
import styles from './tab.less';

export function Header(props: any) {
  return <div className={styles.header}>
    <Stateview nonblock default='play1'>
      <Layer state='play0' component={<Play0 />} />
      <Layer state='play1' component={<Play1 />} />
    </Stateview>
    <Stateview nonblock default='like0'>
      <Layer state='like0' component={<Like0 />} />
      <Layer state='like1' component={<Like1 />} />
    </Stateview>
  </div>;
}
