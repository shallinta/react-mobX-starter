export default (req, res) => {
  const data = {
    data : [
      {
        "province": "新疆",
        "hotelId": 4350383,
        "hotelName": "卡亚木库卡库卡葫芦集团测试酒店（测试酒店，请勿下单，订单无效）",
        "city": "卡亚木库卡库卡"
      }, {
        "province": "新疆",
        "hotelId": 14413422,
        "hotelName": "两大分销商对接测试酒店（请勿修改）（测试酒店，请勿下单，订单无效）",
        "city": "卡亚木库卡库卡"
      }, {
        "province": "比奥比奥",
        "hotelId": 4692941,
        "hotelName": "卡亚木库卡库卡葫芦单体测试酒店（测试酒店，请勿下单，订单无效）",
        "city": "康塞普西翁"
      }, {
        "province": "黑龙江",
        "hotelId": 15282657,
        "hotelName": "牡丹江市爱民区牡丹宴商务酒店",
        "city": "牡丹江"
      }, {
        "province": "重庆",
        "hotelId": 68917,
        "hotelName": "重庆精通一心酒店",
        "city": "重庆"
      }, {
        "province": "浙江",
        "hotelId": 43283325,
        "hotelName": "乌镇梦幻风情客栈",
        "city": "嘉兴"
      }, {
        "province": "内蒙古",
        "hotelId": 5004227,
        "hotelName": "呼和浩特心想是城主题公寓酒店二分店",
        "city": "呼和浩特"
      }, {
        "province": "新疆",
        "hotelId": 42255990,
        "hotelName": "卡亚木库卡库卡葫芦单体测试酒店（测试酒店，请勿下单，订单无效）",
        "city": "卡亚木库卡库卡"
      }, {
        "province": "广东",
        "hotelId": 8423606,
        "hotelName": "7天酒店广州花都火车北站秀全公园店",
        "city": "广州"
      }, {
        "province": "新疆",
        "hotelId": 531808,
        "hotelName": "卡亚木库卡库卡QTA国内测试酒店（测试酒店，请勿下单，订单无效）",
        "city": "卡亚木库卡库卡"
      }, {
        "province": "新疆",
        "hotelId": 34023876,
        "hotelName": "卡亚布库卡库卡亚县大酒店",
        "city": "卡亚木库卡库卡"
      }, {
        "province": "山东",
        "hotelId": 55000,
        "hotelName": "长岛老侯渔家",
        "city": "烟台"
      }, {
        "province": "河北",
        "hotelId": 184398,
        "hotelName": "廊坊坤厚商务酒店",
        "city": "廊坊"
      }, {
        "province": "四川",
        "hotelId": 61536000,
        "hotelName": "成都窝心的小窝808公寓",
        "city": "成都"
      }, {
        "province": "河北",
        "hotelId": 583,
        "hotelName": "秦皇岛旭日海景公寓",
        "city": "秦皇岛"
      }, {
        "province": "云南",
        "hotelId": 43194900,
        "hotelName": "昆明长水机场逸兰酒店",
        "city": "昆明"
      }, {
        "province": "河南",
        "hotelId": 42206463,
        "hotelName": "郑州雅居生活馆酒店公寓",
        "city": "郑州"
      }
    ],
    ret : true
  };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
