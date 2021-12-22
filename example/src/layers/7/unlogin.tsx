import React from 'react';

export function UnLogin(props: any) {
  function sayHello() {
    window.stateview.datashow('logined', { name: 'UnLogin i5ting' })
  }

  return <h1 >UnLogin, <button onClick={sayHello}>{props.data.name}</button></h1>;
}
