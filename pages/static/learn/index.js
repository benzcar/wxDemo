var app = getApp();
Page({
  data: {
    currentTab: 0, //预设当前项的值
    aa: [], //预设当前项的值
    scrollLeft: 0 //tab标题的滚动条位置
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://dapi.radida.com/admin/bigscreen/statistics/insAndPatProvincesDistribution', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res) => {
        console.log(res)
        this.setData({ // 请求接口更新视图
          aa: res.data.list
        })
      }
    })
  }
})