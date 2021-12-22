import React from 'react';

export function UnLogin(props: any) {

  function sayHello() {
    window.stateview.a.show('logined')
  }

  return <h1 >UnLogin, <button onClick={sayHello}>{props.name}</button></h1>;
}
