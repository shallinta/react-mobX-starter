import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import Page from '.';

const dom = document.getElementById('app');
const App = () => (
  <div className="wrapper">
    <Page />
    <DevTools />
    <div className="dev-tools-intro">
      <span className="dev-tools-intro-0">MobX DevTools 功能说明：</span>
      <span className="dev-tools-intro-1">1. 显示渲染次数与时间(开关)↑</span>
      <span className="dev-tools-intro-2">2. 查看双向绑定的节点及绑定的变量(动作)↑</span>
      <span className="dev-tools-intro-3">3. 控制台打印更新日志(开关)↑</span>
    </div>
  </div>
);

ReactDOM.render(
  <App />,
  dom
);

if (module.hot) {
  module.hot.accept();
}
