import React, { Fragment } from 'react';

interface LayerProps {
    state: string;
    component?: any;
    children?: any;
    data?: any;
}

export function Layer(props: LayerProps) {
    return <Fragment>{props.component}</Fragment>;
}
