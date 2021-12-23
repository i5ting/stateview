import React from 'react';
// import { act } from 'react-dom/test-utils';
import { Stateview, Layer, setViewState } from '../../src';
// import type { ExtendablePromise } from '../src/types';

export const Example1 = () => {

    function unlogin() {
        setViewState('unlogin')
    }

    function logined() {
        setViewState('logined')
    }

    return (
        <Stateview default='unlogin'>
            <Layer state='logined'>
                <h1>Logined, <button id="go_to_unlogin_button" onClick={unlogin}>go to UnLogin</button></h1>
            </Layer>
            <Layer state='unlogin'>
                <h1 >UnLogin, <button id="go_to_logined_button" onClick={logined}>go to Logined</button></h1>;
            </Layer>
        </Stateview>
    );
}