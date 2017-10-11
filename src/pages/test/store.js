import { types, applySnapshot } from 'mobx-state-tree';
import Ajax from 'ajax';

const Hotel = types.model('Hotel', {
  province: types.string,
  hotelId: types.number,
  hotelName: types.string,
  city: types.string
});

const Store = types.model('Store', {
  loadStatus: types.number,
  username: types.string,
  hotelList: types.array(Hotel)
}).views(self => ({
  get hotelsCount() {
    return self.hotelList.length;
  }
})).actions(self => ({
  async getHotelList() {
    self.apply({
      loadStatus: 0
    });
    const res = await Ajax({
      url: '/api/hotelList',
      type: 'GET',
      data: {
        delay: 1500
      }
    });
    if (res && res.ret) {
      if (res.data) {
        self.apply({
          loadStatus: 1,
          hotelList: res.data
        });
      } else {
        self.apply({
          loadStatus: -1
        });
      }
    } else {
      self.apply({
        loadStatus: -1
      });
      console.log(res.errmsg || `未知错误。错误代码：${res.errcode}`);
    }
  },
  apply(snapshot) {
    applySnapshot(self, Object.assign({}, self, snapshot));
  }
}));

export default Store;
