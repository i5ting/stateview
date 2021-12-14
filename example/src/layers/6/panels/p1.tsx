import React from 'react';
import { useStateContext } from '~/index';
import styles from './player.less';

export function P1(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('like1')
  }

  return <h1>p1</h1>;
}
