import React from 'react';
import { setViewState } from '~/index';

export function UnLogin(props: any) {
  function sayHello() {
    setViewState('logined', { name: 'UnLogin i5ting' })
  }

  return <h1 >UnLogin, <button onClick={sayHello}>{props.data.name}</button></h1>;
}
