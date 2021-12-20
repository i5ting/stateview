import React, { useLayoutEffect, useState, useRef } from 'react';
import { Debug } from './debug';
import { getQueryStringByName } from './utils';
import { GlobalStateContent, StateContext } from './context';
import { SState } from './state';
import type { ICconfig } from './type';

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
        debug(child.props.state)
        states.push(child.props.state)

        let component = child.props.component

        if (!child.props.component) {
            component = child.props.children
        }

        GlobalStateMapping[child.props.state] = {
            show: setVisibaleComponent,
            child: child,
            component: component
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

    useLayoutEffect(() => {
        // show default
        let d = GlobalStateMapping[props.default]
        let _component = d.component
        if (props.data) {
            _component = React.cloneElement(
                d.component,
                {
                    data: props.data
                }
            )
        }
        d.show(_component)
    }, [])

    let i = getQueryStringByName('s')
    debug(props.children[i])

    let isNonBlock = props.nonblock ? true : false

    return (
        <StateContext.Provider value={ctx} >
            {isNonBlock
                ? <span ref={ref} {...props}>
                    {visibaleComponent}
                </span>
                : <div ref={ref} {...props}>
                    {visibaleComponent}
                </div>
            }
        </StateContext.Provider>
    );
})
