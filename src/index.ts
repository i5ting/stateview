
import type { IState } from './type';

declare global {
    interface Window {
        stateview: IState
    }
}

export * from './type' 
export * from './stateview'
export * from './layer'
export * from './context'
export * from './state'
export * from './debug' 