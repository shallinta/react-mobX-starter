/**
 * 页面示例
 */

import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import TimeStore from './time-store';
import './style.css';

@observer
class Page extends React.Component {

  componentWillMount() {
    this.timeStore = {};
    this.props.store.getHotelList();
  }

  componentDidMount() {
    this.timeStore = new TimeStore();
  }

  componentWillReact() {
    console.log('有被观察的变量更新了！');
  }

  @action.bound
  handleClick() {
    this.timeStore.stopTime();
  }

  render() {
    const { loadStatus, username, hotelList, hotelsCount } = this.props.store;
    const { timestamp, date, wastedTime } = this.timeStore;

    if (loadStatus === 0) {
      return (
        <div className="page-loading">加载中...</div>
      );
    }

    if (loadStatus === -1) {
      return (
        <div className="page-error">加载失败</div>
      );
    }

    return (
      <div className="page-container" styleName="page-container">
        <div styleName="timestamp">
          <span>时间戳：{ timestamp }</span>
          <span>日期：{ date }</span>
          <span>此网页打开后已经过：{ wastedTime } 秒</span>
          <button onClick={this.handleClick}>停止时间滚动</button>
        </div>
        <div styleName="header">{ username }</div>
        <div styleName="title">{ `共有${hotelsCount}家酒店` }</div>
        <div styleName="content">
          <ul>
            { hotelList.map(hotel => (<li key={`hotel-${hotel.hotelId}`} styleName="hotel-list-item">{ hotel.hotelName }</li>)) }
          </ul>
        </div>
      </div>
    );
  }
}

export default Page;
