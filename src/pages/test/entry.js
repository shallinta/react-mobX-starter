import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import Page from '.';

const App = () => (
  <div className="wrapper">
    <Page />
    <DevTools />
  </div>
);

const dom = document.getElementById('app');

ReactDOM.render(
  <App />,
  dom
);

if (module.hot) {
  module.hot.accept();
}
