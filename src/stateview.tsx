import React, { useEffect, useState, useRef } from 'react';
import styles from './stateview.less';

import { Debug } from './debug';

import { getQueryStringByName } from './utils';

import { GlobalStateContent, StateContext } from './context';
import { SState } from './state';

import type { ICconfig } from './type';

const debug = Debug("stateview.jsx")

var count: number = 0;

var GlobalStateMapping: any = {}

export function Stateview(props: any) {
    const [visibaleComponent, setVisibaleComponent] = useState(0);
    // const states = getStates(props.children); 
    let states:any = []
    // states.for()
    React.Children.forEach(props.children, child => {
        // const childType = { ...child.type }
        debug(child)
        // console.log(child.name)
        debug(child.props.router)
        states.push(child.props.router)
   
        GlobalStateMapping[child.props.router]={
            show: setVisibaleComponent,
            child: child,
            component: child.props.component
        }
    })

    // debug(stateViewMapping)

    const stateviewRef = useRef(null);
    // const { setStateview } = useStateContext()

    if (count === 0) {
        GlobalStateMapping.currentState = props.default
    }

    const sState = SState({
        ref: stateviewRef, 
        // states: states,
        GlobalStateMapping: GlobalStateMapping
    } as ICconfig)

    debug(count++)
    debug(sState)

    const ctx = {
        stateContent: props.children,
        stateview: sState
    } as GlobalStateContent;

    useEffect(() => {
        // show default
        const d = GlobalStateMapping[props.default]
        d.show(d.component)
    }, [])

    let i = getQueryStringByName('s')
    debug(props.children[i])

    return (
        <StateContext.Provider value={ctx} >
            {/* <div ref={stateviewRef} className={styles.stateview}>
                {props.children}
            </div>
            <hr /> */}
            <div ref={stateviewRef} className={styles.example} style={{ height: props.height }}>
                {visibaleComponent}
            </div>
        </StateContext.Provider>
    );
}
