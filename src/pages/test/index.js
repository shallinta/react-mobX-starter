import React from 'react';
import { observer } from 'mobx-react';
import './style.css';

@observer
class Page extends React.Component {

  componentWillMount() {
    this.props.store.getHotelList();
  }

  componentWillReact() {
    console.log('有被观察的变量更新了！');
  }

  render() {
    console.log('render');
    const { loadStatus, username, hotelList, hotelsCount } = this.props.store;

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
