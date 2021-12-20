import React from 'react';
import { useStateContext } from '~/index';

export function UnLogin(props: any) {
  const { stateview } = useStateContext()

  function sayHello() {
    stateview.datashow('logined', { name: 'UnLogin i5ting' })
  }

  return <h1 >UnLogin, <button onClick={sayHello}>{props.data.name}</button></h1>;
}
