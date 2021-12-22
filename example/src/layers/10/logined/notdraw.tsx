import React from 'react';

export function NotDraw(props: any) {

  function sayHello() {
    window.stateview.b.show('candraw')
  }

  return <h1 >NotDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
