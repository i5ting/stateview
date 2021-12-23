import React from 'react';

import { Stateview, Layer, setViewState } from '~/index';

const Logined = (props: any) => {
  function unlogin() {
    setViewState('unlogin', { name: 'unlogin i5ting' })
  }
  return (<h1>Logined, <button onClick={unlogin}>{props.data.name}</button></h1>)
}

const UnLogin = (props: any) => {
  return (<h1 >UnLogin, <button onClick={props.action}>{props.data.name}</button></h1>)
}

export default (props: any) => {

  function logined() {
    setViewState('logined', { name: 'logined i5ting' })
  }

  return (
    <span>
      <Stateview default='unlogin' data={{ name: 'somename' }}>
        <Layer state='logined' component={<Logined />} />
        <Layer state='unlogin' component={<UnLogin action={logined} />} />
      </Stateview>
    </span>
  );
}
