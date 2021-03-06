/**
 * {{demo}} 页面
 * {{date}}
 */

import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import PageContainer from 'common/components/PageContainer';
import store from './store';
import './style.css';

@observer
class Page extends React.Component {

  componentWillReact() {
    // console.log('有被观察的变量更新了！');
  }

  @action.bound
  handleClick() {
    // action.bound 可自动绑定this
  }

  render() {
    const { loadStatus } = store;

    return (
      <PageContainer styleName="content-container" loadStatus={loadStatus}>
        <h2>Title</h2>
        <p>Code html here</p>
      </PageContainer>
    );
  }
}

export default Page;
