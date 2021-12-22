export interface IState {
    show: Function;
    component: any;
    [index: string]: any;
}

export interface GlobalStateMapping {
    currentState: string;
    [index: string]: any;
}

export interface ICconfig {
    ref?: any;
    GlobalStateMapping?: any;
    component?: any;
}
