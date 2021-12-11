import React, { Fragment } from 'react';

// import { useStateContext } from './context'

interface LayerProps {
    key: string;
    component: any;
}

export function Layer(props: LayerProps) {

    // const { stateContent } = useStateContext()
    // console.dir(props.component)
    // console.dir( stateContent )

    return <Fragment>{props.component}</Fragment>;
}
