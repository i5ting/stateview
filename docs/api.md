# Api

在具体的Layer状态对应的视图组件里使用。

```js
import { useStateContext } from 'stateview';

const { stateview } = useStateContext()
```

API

- stateview.show(path: string) 显示具体的状态，参数可以是一个，也可以是数组
- stateview.datashow('unlogin', { ... }) 显示具体的状态，参数2个，第二个参数是数据
- stateview.getStateBy(path: string) 根据path，获取State信息
- stateview.getComponentBy(path: string) 根据path，获取Component信息
- stateview.getStates() 获取所有States信息

当然，你也可以使用是window.stateview替代useStateContext