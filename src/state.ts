// import { createContext, useRef } from "react"
import type { ICconfig, IState } from './type';

import { Debug } from './debug';

const debug = Debug("src/state.ts")
// 获取对象
//  1. React.Children.forEach(statview.props.children）
//       注册状态和Layer，statview-ref
//  2. 实现statview的行为
//       stateview.setCurrent(this | 'somepath')
//       stateview.keyframes(from , to)
//       ...
//  3. 通过useStateContext，可以在Layer中使用
// 
// 示例如下:
// 
// function Welcome(props: any) {
//     const { stateContent, stateview } = useStateContext()
//     console.dir("Welcome")
//     console.dir(stateContent)
// 
//     // stateview.setCurrent(this | 'somepath')
//     // stateview.keyframes(from , to)
// 
//     return <h1>Hello, { props.name } < /h1>;
// }
//  



export const SState = (config: ICconfig) => {
    // 处理配置

    const states = Object.keys(config.GlobalStateMapping)

    // 对外行为
    return Object.assign(config, {
        _vshow: function (path: string, c: any) {
            let state = this._getStateBy(path);
            var setVisibaleComponent = state.show
            setVisibaleComponent(c)
        },
        _setCurrent(path: string) {
            config.GlobalStateMapping.currentState = path
        },
        _getStateBy(path: string) {
            let state = config.GlobalStateMapping[path] as IState;
            return state
        },
        /**
         * 根据path，显示path对应的Layer
         */
        show: function (path: string) {
            let state = this._getStateBy(path);
            // 如果状态一样，则无需刷新
            if (path === state.currentState) {
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


