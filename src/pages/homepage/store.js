/**
 * 经典store文件示例
 */

import { observable, computed, action, runInAction, transaction, useStrict } from 'mobx';
import Ajax from 'ajax';

useStrict(true);

export default class Store {

  id = Math.random();

  @observable loadStatus = 1;
  @observable username = '';
  @observable hotelList = [];

  @computed get hotelsCount() {
    return this.hotelList.length;
  }

  constructor(config) {
    if (config && config.username) {
      this.username = config.username;
    } else {
      this.username = '未登录';
    }
  }

  @action('获取酒店列表') async getHotelList() {
    this.loadStatus = 0;
    const res = await Ajax({
      url: '/api/hotelList',
      type: 'GET',
      data: {
        delay: 1500
      }
    });
    if (res && res.ret) {
      runInAction('酒店列表返回结果', () => {
        if (res.data) {
          transaction(() => {
            this.loadStatus = 1;
            this.hotelList = res.data;
          });
        } else {
          this.loadStatus = -1;
        }
      });
    } else {
      runInAction('酒店列表请求出错', () => {
        this.loadStatus = -1;
        console.log(res.errmsg || `未知错误。错误代码：${res.errcode}`);
      });
    }
  }

}
