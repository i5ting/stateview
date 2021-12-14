import React from 'react';
import { useStateContext } from '~/index';

export function UnLogin(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.show('logined')
  }

  return <span>UnLogin, <button onClick={sayHello}>{props.name}</button></span>;
}
