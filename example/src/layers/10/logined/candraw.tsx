import React from 'react';

export function CanDraw(props: any) {

  function sayHello() {
    window.stateview.a.show('unlogin')
  }

  return <h1 >CanDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
