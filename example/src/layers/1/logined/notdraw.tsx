import React from 'react';
import { useStateContext } from '../../../../../src/index';

export function NotDraw(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('candraw')
    stateview.show('notdraw1')
  }

  return <h1 >NotDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
