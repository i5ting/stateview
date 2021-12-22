import React from 'react';

export function Logined(props: any) {

  function sayHello() {
    window.stateview.datashow('unlogin', { 'name': 'Logined i5ting' })
  }

  return <>
    <h1>Logined, <button onClick={sayHello}>{props.data.name}</button></h1>
  </>;
}
