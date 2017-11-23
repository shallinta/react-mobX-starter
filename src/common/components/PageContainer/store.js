/**
 * 页面框架 store文件
 */

import { observable, action, runInAction, useStrict } from 'mobx';
import Ajax from 'ajax';

useStrict(true);

class Store {

  id = Math.random();

  @observable username = 'xxx';
  @observable menuList = [];

  @action('获取菜单列表')
  async getMenuList() {
    const res = await Ajax({
      url: '/api/queryMenu',
      type: 'GET',
      data: {
        delay: 1500
      }
    });
    if (res && res.ret) {
      runInAction('Menu列表返回', () => {
        if (res.data) {
          this.menuList = res.data;
        }
      });
    } else {
      runInAction('Menu列表请求出错', () => {
        console.log(res.errmsg || `未知错误。错误代码：${res.errcode}`);
      });
    }
  }
}

const store = new Store();

export default store;
