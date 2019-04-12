Page({
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    // wx.showLoading({
    //   title: '加载中',
    // })
    this.setData({
      // title: options.title
    })
  },
  data: {
    imgUrls: [
      'https://attachment-center.boxuegu.com/data/picture/online/2018/06/05/14/47c099af83ea4d7db5ec42604676b28b.png',
      'https://attachment-center.boxuegu.com/data/picture/online/2018/11/17/23/c9a8badecfcc4ddfb0ac7362dfae0638.jpg',
      'https://attachment-center.boxuegu.com/data/picture/online/2018/11/17/23/2cd8b0ad890b4ce98054a91cdbadf2e2.jpg'
    ],
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('监听用户下拉动作')
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉触底事件的处理函数')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('用户点击右上角分享')
  }
})