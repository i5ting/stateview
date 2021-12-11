import React from 'react';
import { useStateContext } from '../../../../src/index';

export function UnLogin(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('logined')
  }

  return <h1 >UnLogin, <button onClick={sayHello}>{props.name}</button></h1>;
}
