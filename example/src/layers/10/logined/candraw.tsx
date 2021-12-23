import React from 'react';
import { getStateview } from '~/index';

export function CanDraw(props: any) {

  function sayHello() {
    getStateview('a').setViewState('logined')
    getStateview('c').setViewState('unlogin1')
  }

  return <h1 >CanDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
