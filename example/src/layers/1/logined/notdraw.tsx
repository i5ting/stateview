import React from 'react';

import {  useStateContext } from '../../../../../src/index';

export function NotDraw(props: any) {
  const { stateContent, stateview } = useStateContext()
  console.dir("UnLogin")
  console.dir(stateview.current)
  // console.dir(stateContent)

  // useEffect(() => {
  //   const divElement = stateview;

  //   console.log('WelcomedivElement');
  //   console.log(stateview); // logs <div>I'm an element</div>
  // }, [])

  // stateview.setCurrent('2')
  // stateview.keyframes(from , to)

  function sayHello(){
    // alert('sayHello')
    stateview.show('candraw')
    stateview.show('notdraw1')
  }

  return <h1 >NotDraw, <button onClick={sayHello}>{props.name}</button></h1>;
}
