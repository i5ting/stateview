import React from 'react';
import { setViewState } from '~/index';

export function CanDraw(props: any) {

  function sayHello() {
    setViewState('unlogin')
  }

  return <h1 >CanDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
