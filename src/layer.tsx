import React, { Fragment } from 'react';

interface LayerProps {
    router: string;
    component: any;
}

export function Layer(props: LayerProps) {
    return <Fragment>{props.component}</Fragment>;
}
