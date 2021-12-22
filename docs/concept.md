
# 核心概念

```js
import { Stateview, Layer } from 'stateview';
```

核心概念

- Stateview组件
  - 属性
    - default='unlogin' 默认状态
    - nonblock 是否为块级元素，默认div，如果有nonblock，显示为span
    - group 分组名称
- Layer组件
  - 属性
    - state='logined' 状态名称
    - component={<Logined name='跳转到未登录状态' />} 状态对应的视图组件
    - 如果有props.children优先，如无，则展示component
