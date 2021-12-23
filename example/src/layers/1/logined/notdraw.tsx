import React from 'react';
import { setViewState } from '~/index';

export function NotDraw(props: any) {

  function sayHello() {
    setViewState('candraw')
    setViewState('notdraw1')
  }

  return <h1 >NotDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
