/**
 * 页面左侧导航栏
 */

import React from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import '../style.css';

@observer
export default class Nav extends React.Component {

  componentWillMount() {
    store.getMenuList();
  }

  render() {
    const { url } = this.props;
    return (
      <div styleName="page-nav">
        current page url : {url}
        <br />
        todo: navs
      </div>
    );
  }
}
