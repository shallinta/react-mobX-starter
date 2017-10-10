/**
 * 多个store文件的示例
 */

import { observable, computed, action, runInAction, useStrict } from 'mobx';
import { AjaxPromise } from 'ajax';

useStrict(true);

export default class TimeStore {

  id = Math.random();
  createTime = Date.now();

  @observable timestamp = Date.now();

  @computed get wastedTime() {
    return Math.floor((this.timestamp - this.createTime) / 1000);
  }
  @computed get date() {
    return new Date(this.timestamp).toLocaleDateString();
  }

  constructor() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 50);
  }

  @action('获取最新时间') getCurrentTime() {
    AjaxPromise({
      url: '/api/getTimestamp',
      type: 'GET'
    }).then((res) => {
      if (res && res.now) {
        runInAction('更新时间', () => {
          this.timestamp = res.now;
        });
      }
    });
  }

  stopTime() {
    clearInterval(this.timer);
  }

}
