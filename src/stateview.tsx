import React, { Fragment, useLayoutEffect, useState, useRef } from 'react';
import { Debug } from './debug';
import { getQueryStringByName } from './utils';
import { SState } from './state';
import type { ICconfig } from './type';

const debug = Debug("stateview.jsx")

var count: number = 0;
var GlobalStateMapping: any = {}
var groups: any = {}

export const Stateview = React.forwardRef((props: any, ref: any) => {
    const [visibaleComponent, setVisibaleComponent] = useState(0);
    // const states = getStates(props.children); 
    let states: any = []
    let group: string = props.group
    let hasGroupName: Boolean = (group !== undefined)
    let instance: any = hasGroupName ? GlobalStateMapping[group] : GlobalStateMapping
    console.dir(group)
    if (!instance) instance = {}

    if (hasGroupName) groups[group] = true
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

        instance[child.props.state] = {
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

    if (hasGroupName) {
        window.stateview[group] = SState({
            GlobalStateMapping: instance
        })
    }

    debug(count++)
    debug(sState)

    useLayoutEffect(() => {
        // show default
        let d = instance[props.default]
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
    let tag = props.tag ? props.tag : isNonBlock ? 'span' : 'div'

    const ele = React.createElement(tag, { ref, ...props }, visibaleComponent);
    return (
        <Fragment >
            {ele}
        </Fragment>
    );
})
