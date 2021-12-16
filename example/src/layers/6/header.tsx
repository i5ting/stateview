import React from 'react';
import { Stateview, Layer } from '~/index';
import { Play0, Play1, Like0, Like1 } from './headers/index';
import styles from './tab.less';

export function Header(props: any) {
  return <div className={styles.header}>
    <Stateview nonblock default='play1'>
      <Layer router='play0' component={<Play0 />} />
      <Layer router='play1' component={<Play1 />} />
    </Stateview>
    <Stateview nonblock default='like0'>
      <Layer router='like0' component={<Like0 />} />
      <Layer router='like1' component={<Like1 />} />
    </Stateview>
  </div>;
}
