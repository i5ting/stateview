import React from 'react';
import { useStateContext } from '~/index';

export function Logined(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.datashow('unlogin', { 'name': 'Logined i5ting' })
  }

  return <>
    <h1>Logined, <button onClick={sayHello}>{props.data.name}</button></h1>
  </>;
}
