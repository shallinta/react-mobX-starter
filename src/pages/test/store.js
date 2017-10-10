import Ajax from 'packing-ajax';
import { observable, computed, action, runInAction, transaction, useStrict } from 'mobx';

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

  @action('获取酒店列表') getHotelList() {
    this.loadStatus = 0;
    Ajax({
      url: '/api/hotelList',
      type: 'GET',
      success: (res) => {
        runInAction('酒店列表返回结果', () => {
          if (res && res.ret && res.data) {
            transaction(() => {
              this.loadStatus = 1;
              this.hotelList = res.data;
            });
          } else {
            this.loadStatus = -1;
          }
        });
      },
      error: action('酒店列表请求出错', (err) => {
        this.loadStatus = -1;
        console.log(err);
      })
    });
  }

}
