Page({
  data: {
    openid: ""
  },
  onLoad: function(a) {
    this.setData({
      openid: getApp().globalData.openid
    })
  }
});