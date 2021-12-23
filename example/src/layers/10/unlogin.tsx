import React from 'react';
import { getStateview } from '~/index';

export function UnLogin(props: any) {

  function sayHello() {
    getStateview('a').setViewState('logined')
  }

  return <h1 >UnLogin, <button onClick={sayHello}>{props.name}</button></h1>;
}
