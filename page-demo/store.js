/**
 * {{demo}} 页面 store文件
 * {{date}}
 */

import { observable, computed, action, runInAction, useStrict } from 'mobx';
import Ajax from 'ajax';

useStrict(true);

class Store {

  id = Math.random();

  @observable loadStatus = 1;

  // TODO Define computed getters:
  @computed
  get loadStatusDesc() {
    const statusDesc = {
      0: '加载中...',
      1: '加载完成',
      2: '加载失败！'
    };
    return statusDesc[this.loadStatus];
  }

  constructor(config) {
    // TODO Init config here:

  }

  // TODO Define actions:
  @action('***')
  async xxx() { // modify function name when using
    this.loadStatus = 0;
    const res = await Ajax({
      url: '/api/***', // modify url when using
      type: 'GET',
      data: {

      }
    });
    if (res && res.ret) {
      runInAction('***', () => { // modify action identifier
        if (res.data) {
          this.loadStatus = 1;
          // TODO Process ajax data:
        } else {
          this.loadStatus = 2;
          // TODO Process error data:
        }
      });
    } else {
      runInAction('***', () => { // modify action identifier
        this.loadStatus = 2;
        // TODO Process ajax error:
        console.log(res.errmsg || `未知错误。错误代码：${res.errcode}`);
      });
    }
  }
}

// TODO Singleton store
let store = null;
const getInstance = () => {
  if (!store) {
    store = new Store({
      // Set init data
    });
  }
  return store;
};

export default getInstance();
