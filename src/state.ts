import type { ICconfig, IState } from './type';
import React from 'react';
import { Debug } from './debug';

const debug = Debug("src/state.ts")

export const SState = (config: ICconfig) => {
    // 处理配置项

    // 对外行为
    return Object.assign(config, {
        _vshow: function (path: string, c: any) {
            let state = this.getStateBy(path);
            var setVisibaleComponent = state.show
            setVisibaleComponent(c)
        },
        _setCurrent(path: string) {
            config.GlobalStateMapping.currentState = path
        },
        /**
         * 获取所有States信息
         */
        getStates() {
            const states = Object.keys(config.GlobalStateMapping)
            return states
        },
        /**
         * 根据path，获取State信息
         */
        getStateBy(path: string) {
            let state = config.GlobalStateMapping[path] as IState;
            return state
        },
        /**
         * 根据path，获取Component信息
         */
        getComponentBy(path: string) {
            let state = this.getStateBy(path);
            return state.component
        },
        /**
         * 根据path，显示path对应的Layer
         */
        datashow: function (path: string, data: any[]) {
            let state = this.getStateBy(path);
            let states = this.getStates();

            // 如果状态一样，则无需刷新
            if (path === config.GlobalStateMapping.currentState) {
                console.warn("状态一样，无需刷新")
                return
            }
            // 确保状态在states中，完成show切换
            if (states.indexOf(path) !== -1) {
                // TODO：根据path，获得该path归属的stateview
                // 状态嵌套
                debug(path)

                // 注意此时需要改变props.data
                let visibaleComponent = React.cloneElement(
                    state.component,
                    {
                        data: data
                    }
                )

                // 设置stateview渲染view
                this._vshow(path, visibaleComponent)

                // 设置当前的状态
                this._setCurrent(path)
            } else {
                console.warn("setCurrent()参数中的" + path + " 状态不在stateview中[" + states.join('/') + "]")
            }
        },
        /**
         * 根据path，显示path对应的Layer
         */
        show: function (path: string) {
            let state = this.getStateBy(path);
            let states = this.getStates();

            // 如果状态一样，则无需刷新
            if (path === config.GlobalStateMapping.currentState) {
                console.warn("状态一样，无需刷新")
                return
            }
            // 确保状态在states中，完成show切换
            if (states.indexOf(path) !== -1) {
                // TODO：根据path，获得该path归属的stateview
                // 状态嵌套
                debug(path)

                // 根据状态获取视图
                let visibaleComponent = state.component

                // 设置stateview渲染view
                this._vshow(path, visibaleComponent)

                // 设置当前的状态
                this._setCurrent(path)
            } else {
                console.warn("setCurrent()参数中的" + path + " 状态不在stateview中[" + states.join('/') + "]")
            }
        }
    })
}


