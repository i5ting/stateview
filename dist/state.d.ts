import type { ICconfig, IState } from './type';
export declare const SState: (config: ICconfig) => ICconfig & {
    _vshow: (path: string, c: any) => void;
    _setCurrent(path: string): void;
    _getStateBy(path: string): IState;
    /**
     * 根据path，显示path对应的Layer
     */
    show: (path: string) => void;
};
//# sourceMappingURL=state.d.ts.map