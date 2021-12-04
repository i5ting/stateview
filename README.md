# stateview

```js
<Stateview  config={{...}}  src='./some/folder'>
	<Layer  state='a'  src='v1.jsx' default /> 
	<Layer  state='b'  src='v2.dsl.json' /> 
	<Layer  state='c' /> 
</Stateview>
``` 

在组件生命周期里，加载状态机，useStateLoader()
