import React, { useEffect, useState, useRef } from 'react';
import { Debug } from './debug';
import { getQueryStringByName } from './utils';
import { GlobalStateContent, StateContext } from './context';
import { SState } from './state';

import type { ICconfig } from './type';
import styles from './stateview.less';

const debug = Debug("stateview.jsx")

var count: number = 0;
var GlobalStateMapping: any = {}

export const Stateview = React.forwardRef((props: any, ref: any) => {
    const [visibaleComponent, setVisibaleComponent] = useState(0);
    // const states = getStates(props.children); 
    let states: any = []
    // states.for()
    React.Children.forEach(props.children, child => {
        // const childType = { ...child.type }
        debug(child)
        // console.log(child.name)
        debug(child.props.router)
        states.push(child.props.router)

        let c = child.props.component

        if (!child.props.component) {
            c = child.props.children
        }

        GlobalStateMapping[child.props.router] = {
            show: setVisibaleComponent,
            child: child,
            component: c
        }
    })

    const stateviewRef = useRef(null);

    const sState = SState({
        ref: stateviewRef,
        GlobalStateMapping: GlobalStateMapping
    } as ICconfig)

    if (count === 0) {
        GlobalStateMapping.currentState = props.default
        window.stateview = sState
    }

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

    let isBlock = props.block ? true : false

    return (
        <StateContext.Provider value={ctx} >
            {isBlock
                ? <span ref={ref} className={styles.example} style={{ height: props.height }}>
                    {visibaleComponent}
                </span>
                : <div ref={ref} className={styles.example} style={{ height: props.height }}>
                    {visibaleComponent}
                </div>
            }
        </StateContext.Provider>
    );
})
