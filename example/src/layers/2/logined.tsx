import React from 'react';
 
import { Stateview, Layer, useStateContext } from '../../../../src/index';

import { CanDraw, NotDraw } from'./logined/index';

export function Logined(props: any) {
  const { stateContent, stateview } = useStateContext()
  console.dir("Logined")
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
    stateview.show('unlogin')
  } 
  
  {/* <Stateview default='candraw' height="200px" >
  <Layer router='candraw' component={<CanDraw name='跳转到未登录状态' />} />
  <Layer router='notdraw' component={<NotDraw name='跳转到可领状态' />} />
  </Stateview> */}
  // <h1>Logined, <button onClick={sayHello}>{props.name}</button></h1>

  return <>
    <h1>Logined, <button onClick={sayHello}>{props.name}</button></h1>
    <Stateview default='notdraw' height="200px" >
      <Layer router='candraw' component={<CanDraw name='跳转到未登录状态' />} />
      <Layer router='notdraw' component={<NotDraw name='跳转到可领状态' />} />
    </Stateview>
    <Stateview default='candraw1' height="200px" >
      <Layer router='candraw1' component={<CanDraw name='跳转到未登录状态' />} />
      <Layer router='notdraw1' component={<NotDraw name='跳转到可领状态' />} />
    </Stateview>
    </>;
}
