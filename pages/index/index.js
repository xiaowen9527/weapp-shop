import {
  request
} from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    catesList: [],
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getCatesList()
    this.getFloorList()
  },
  // 获取轮播图
  getSwiperList() {
    request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
      })
      .then(res => {
        this.setData({
          swiperList: res.data.message
        })
      })
  },
  // 获取分类导航
  getCatesList() {
    request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"
      })
      .then(res => {
        this.setData({
          catesList: res.data.message
        })
      })
  },
  // 获取楼层
  getFloorList() {
    request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"
      })
      .then(res => {
        this.setData({
          floorList: res.data.message
        })
      })
  }
})