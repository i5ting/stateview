import React from 'react';
import { setViewState } from '~/index';

export function P1(props: any) {

  function sayHello() {
    setViewState('like1')
  }

  return <h1>p1</h1>;
}
