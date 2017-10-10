import React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import Ajax from 'packing-ajax';
import './style.css';

// const state = observable({
//   title: 'Current Time',
//   time: 0,
//   get localeDate() {
//     return new Date(this.time).toLocaleDateString();
//   }
// });

// const localeTime = computed(() => new Date(state.time).toLocaleTimeString());

// autorun(() => {
//   console.log('时间更新为：%d', state.localeTime);
// });

@observer
class Page extends React.Component {

  @observable
  store = {
    title: 'Current Time',
    time: 0,
    get localeDate() {
      return new Date(this.time).toLocaleDateString();
    },
    off: false
  }

  @computed
  get localeTime() {
    return new Date(this.store.time).toLocaleTimeString();
  }

  componentWillReact() {
    console.log('有被观察的变量更新了！');
  }

  @action.bound
  handleClick() {
    Ajax({
      url: '/api/getTimestamp',
      success: action('取到新时间', (res) => {
        this.store.time = res.now;
      })
    });
  }

  @action.bound
  handleAddRemark() {
    this.store.remark = `新增属性不会被观察，只会在其他被观察的属性改变、触发react组件更新时，随之更新到使用的地方， ${Math.random() * 100}`;
  }

  render() {
    return (
      <div>
        {this.store.title} :
        <span className="time"> {this.store.time}</span>
        <button onClick={this.handleClick}>获取时间</button>
        <button onClick={this.handleAddRemark}>新增备注</button>
        <p>日期：{this.store.localeDate}</p>
        <p>时间：{this.localeTime}</p>
        <p>{this.store.remark}</p>
      </div>
    );
  }
}

export default Page;
