import React from 'react';

export function UnLogin(props: any) {

  function sayHello() {
    window.stateview.show('logined')
  }

  return <span>UnLogin, <button onClick={sayHello}>{props.name}</button></span>;
}
