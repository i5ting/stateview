import React from 'react';

export function NotDraw(props: any) {

  function sayHello() {
    window.stateview.show('candraw')
    window.stateview.show('notdraw1')
  }

  return <h1 >NotDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
