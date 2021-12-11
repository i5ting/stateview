import React from 'react';

import {  useStateContext } from '../../../../../src/index';

export function CanDraw(props: any) {
  const { stateContent, stateview } = useStateContext()
  console.dir("UnLogin")
  console.dir(stateview.current)

  function sayHello(){
    // alert('sayHello')
    stateview.show('unlogin')
  }

  return <h1 >CanDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
