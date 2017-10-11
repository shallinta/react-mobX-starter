import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import Page from '.';
import Store from './store';

const store = Store.create({
  loadStatus: 0,
  username: 'DiYi Shuai',
  hotelList: []
});

const App = () => (
  <div className="wrapper">
    <Page store={store} />
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
