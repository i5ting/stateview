import React from 'react';
import { setViewState } from '~/index';

export function Logined(props: any) {

  function sayHello() {
    setViewState('unlogin', { 'name': 'Logined i5ting' })
  }

  return <>
    <h1>Logined, <button onClick={sayHello}>{props.data.name}</button></h1>
  </>;
}
