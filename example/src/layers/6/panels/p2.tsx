import React from 'react';
import { setViewState } from '~/index';

export function P2(props: any) {

  function sayHello() {
    setViewState('like0')
    // stateview.show('notdraw1')
  }

  return <h1>p2</h1>;
}
