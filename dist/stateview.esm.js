import React, { createContext, useContext, useState, useRef, useEffect, Fragment } from 'react';
import IDebug from 'debug';

var styles = ".stateview {\n  border: 1px dashed lightblue;\n}\n.example {\n  border: 1px dashed red;\n}\n";

var Debug = function Debug(content) {
  return IDebug(content);
};

var getQueryStringByName = function getQueryStringByName(name) {
  var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));

  if (result == null || result.length < 1) {
    return "";
  }

  return result[1];
};

var StateContext = /*#__PURE__*/createContext({
  stateContent: {},
  stateview: null,
  setStateview: function setStateview() {}
});
var useStateContext = function useStateContext() {
  return useContext(StateContext);
};

var debug = /*#__PURE__*/Debug("src/state.ts"); // 获取对象
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

var SState = function SState(config) {
  // 处理配置
  var states = Object.keys(config.GlobalStateMapping); // 对外行为

  return Object.assign(config, {
    _vshow: function _vshow(path, c) {
      var state = this._getStateBy(path);

      var setVisibaleComponent = state.show;
      setVisibaleComponent(c);
    },
    _setCurrent: function _setCurrent(path) {
      config.GlobalStateMapping.currentState = path;
    },
    _getStateBy: function _getStateBy(path) {
      var state = config.GlobalStateMapping[path];
      return state;
    },

    /**
     * 根据path，显示path对应的Layer
     */
    show: function show(path) {
      var state = this._getStateBy(path); // 如果状态一样，则无需刷新


      if (path === state.currentState) {
        console.warn("状态一样，无需刷新");
        return;
      } // 确保状态在states中，完成show切换


      if (states.indexOf(path) !== -1) {
        // TODO：根据path，获得该path归属的stateview
        // 状态嵌套
        debug(path); // 根据状态获取视图

        var visibaleComponent = state.component; // 设置stateview渲染view

        this._vshow(path, visibaleComponent); // 设置当前的状态


        this._setCurrent(path);
      } else {
        console.warn("setCurrent()参数中的" + path + " 状态不在stateview中[" + states.join('/') + "]");
      }
    }
  });
};

var debug$1 = /*#__PURE__*/Debug("stateview.jsx");
var count = 0;
var GlobalStateMapping = {};
function Stateview(props) {
  var _useState = useState(0),
      visibaleComponent = _useState[0],
      setVisibaleComponent = _useState[1]; // const states = getStates(props.children); 

  React.Children.forEach(props.children, function (child) {
    // const childType = { ...child.type }
    debug$1(child); // console.log(child.name)

    debug$1(child.props.router);
    GlobalStateMapping[child.props.router] = {
      show: setVisibaleComponent,
      child: child,
      component: child.props.component
    };
  }); // debug(stateViewMapping)

  var stateviewRef = useRef(null); // const { setStateview } = useStateContext()

  if (count === 0) {
    GlobalStateMapping.currentState = props["default"];
  }

  var sState = SState({
    ref: stateviewRef,
    // states: states,
    GlobalStateMapping: GlobalStateMapping
  });
  debug$1(count++);
  debug$1(sState);
  var ctx = {
    stateContent: props.children,
    stateview: sState
  };
  useEffect(function () {
    // show default
    var d = GlobalStateMapping[props["default"]];
    d.show(d.component);
  }, []);
  var i = getQueryStringByName('s');
  debug$1(props.children[i]);
  return React.createElement(StateContext.Provider, {
    value: ctx
  }, React.createElement("div", {
    ref: stateviewRef,
    className: styles.example,
    style: {
      height: props.height
    }
  }, visibaleComponent));
}

function Layer(props) {
  // const { stateContent } = useStateContext()
  // console.dir(props.component)
  // console.dir( stateContent )
  return React.createElement(Fragment, null, props.component);
}

export { Debug, Layer, SState, StateContext, Stateview, useStateContext };
//# sourceMappingURL=stateview.esm.js.map
