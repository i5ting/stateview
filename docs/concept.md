
# 核心概念

核心概念： 

> 返回是 Fragment，将 DOM 控制权交给开发者


```js
import { Stateview, Layer } from 'stateview';
```

- Stateview组件
  - 属性
    - default='unlogin' 默认状态
    - data={} 默认状态的默认数据
    - group 分组名称，要解决复杂场景同时存在多个Stateview命名空间冲突问题
- Layer组件
  - 属性
    - state='logined' 状态名称
    - component={<Logined name='跳转到未登录状态' data={...}/>} 状态对应的视图组件
    - 如果有props.children优先，如无，则展示component
