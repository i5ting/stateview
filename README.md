# stateview


## 3模式

主要是状态视图有3种模式，可以切换查看，并点击具体状态来查看对应的可视化视图

### 模式1（默认）

完整流程图视图，去除状态后，但保存判定的视图

![](docs/2.png)

### 模式2

完整脑图图视图，去除状态后的视图

![](docs/2.png)

### 模式3

完整流程图视图，包含状态后接判定条件

![](docs/1.png)

## 如何定义状态

![](docs/4.png)

- 新建状态：成年人=age>=18
- 新建状态：未成年人
- 新建状态判定：判断用户是否合法
    - 添加判定，如果（成年人），返回“Y”
    - 添加判定，如果（未成年人），返回“N”

说明：状态判定

- 选字段（设置类型），可能值，含义别名
    - 模型（空）
    - 性别sex
        - 0 男
        - 1 女
        - 2 其他
- 选择操作，比如>，包含，正则，枚举等
    - 选择操作返回是boolean
        - Y 填入状态名
        - N 填入状态名
    - 假定字段是string，选择操作返回是枚举
        - ==a  专家
        - ==b  高级专家
        - > 1

继续

- 新状态 = if(状态名) aaa else bbb

继续

- 新状态（含组合） = if(状态名 && a==1) aaa else bbb

## 对接接口或模型

当配置完成状态之后，输出结构

- 状态图
- 状态，字段，判定等入库
- 有依赖的字段进一步列出来，变成一个class，需要接口与之赋值对接

```
const Stateview = require('stateview')

const stateview = new Stateview('someconfig')

// 获取最终依赖的字段模型
const AttrModel = stateview.getAttrs()

// 通过网络请求，获取接口字段
const res = ajax.get('path')

// 实例化字段模型
let m = new AttrModel()

// 将接口字段与字段模型进行绑定赋值
m.a = res.a
m.b = res.b

// 设置第一个初始state
stateview.init()

// 设置某一个state
stateview.setSelectedSate('key')

// 显示状态图，选中某个状态
stateview.show()
```

## 拆分

- stateview是react组件，支持layer层面，也支持组件层面。
- state.json

## 用法

1、按照目录加载

```
<stateview src='./some/folder' />
```

2、配置优先

```
<stateview config={{   }} src='./some/folder' />
```

3、最原始的写法

每个状态是一个组件

```
<stateview  config={{   }}  src='./some/folder'>
    <view  state='a' />
    <view  state='b' />
    <view  state='c' />
</stateview>
```

4、api

```
let stateObj = getStateInstance('name')

stateObj.getStates（）
stateObj.getCurrentState（）
stateObj.setCurrentState（'stateName'）
```

## 路由引入到组件中

```
<Stateview>
    <Layer path='/' />
    <Layer path='/user' />
    <Layer path='/user/a' />
    <Layer path='/topic' />
    <Layer path='/topic/b' />
</Stateview>
```

分析可知

- '/'是默认
    - user 
        - /
        - a
    - topic
        - /
        - b


## 渲染模式

- tab实现：通过替换props.children
    - 原理：渲染时加载资源
    - 适用场景：适合数据量小
- css控制display
    - 原理：display:none，提前加载资源
    - 适用场景：适合数据量大