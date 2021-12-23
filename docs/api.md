# Api

在具体的Layer状态对应的视图组件里使用。

推荐API

```js
import { Stateview, Layer, setViewState, getStateview } from 'stateview';
```

- setViewState
- getStateview(group: string).setViewState

原始API

```js
window.stateview
window.stateview[groupName]
```

API

- stateview.show(path: string) 显示具体的状态，参数可以是一个，也可以是数组
- stateview.datashow('unlogin', { ... }) 显示具体的状态，参数2个，第二个参数是数据
- stateview.getStateBy(path: string) 根据path，获取State信息
- stateview.getComponentBy(path: string) 根据path，获取Component信息
- stateview.getStates() 获取所有States信息
