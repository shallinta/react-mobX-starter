/**
 * 页面顶部
 */

import React from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import '../style.css';

@observer
export default class Header extends React.Component {
  render() {
    return (
      <div styleName="page-header">
        {store.username}
      </div>
    );
  }
}
