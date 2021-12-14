import React from 'react';
import { useStateContext } from '~/index';
import styles from './player.less';

export function P2(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('like0')
    // stateview.show('notdraw1')
  }

  return <h1>p2</h1>;
}
