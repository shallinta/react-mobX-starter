/**
 * 页面容器
 */

import React from 'react';
import Nav from './Nav';
import Header from './Header';
import './style.css';

export default class PageContainer extends React.Component {

  getLoading() {
    const { loadStatus } = this.props;
    if (loadStatus === 0) {
      return (
        <div styleName="page-loading">
          <div className="loading-text">加载中</div>
        </div>
      );
    } else if (loadStatus === 2) {
      return (
        <div styleName="page-error">
          <div styleName="error-text">加载失败</div>
        </div>
      );
    }
    return null;
  }

  render() {
    const { children, className, loadStatus, ...rest } = this.props;

    return (
      <div styleName="page-container">
        {this.getLoading()}
        <Nav url="" />
        <div styleName="page-content">
          <Header />
          <div className={className} styleName="page-content-container" {...rest}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
