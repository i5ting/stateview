import React from 'react';
import { getStateview } from '~/index';

export function NotDraw(props: any) {

  function sayHello() {
    getStateview('b').setViewState('candraw')
  }

  return <h1 >NotDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
