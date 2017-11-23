/**
 * {{demo}} 页面入口
 * {{date}}
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Page from '.';

const App = () => {
  if (process.node_env.BUILD_IN_DEVELOPMENT) {
    // eslint-disable-next-line
    const DevTools = require('mobx-react-devtools').default;
    return (
      <div style={{ flex: 1, display: 'flex' }}>
        <Page />
        <DevTools />
      </div>
    );
  }
  return (<Page />);
};

const dom = document.getElementById('app');

ReactDOM.render(
  <App />,
  dom
);

if (module.hot) {
  module.hot.accept();
}
