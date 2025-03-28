var n = getApp();
Page({
  data: {
    step: 1,
    counterId: "",
    openid: "",
    count: null,
    queryResult: ""
  },
  onLoad: function(t) {
    n.globalData.openid && this.setData({
      openid: n.globalData.openid
    })
  },
  onAdd: function() {},
  onQuery: function() {},
  onCounterInc: function() {},
  onCounterDec: function() {},
  onRemove: function() {},
  nextStep: function() {
    var t = this;
    if (1 !== this.data.step || this.data.openid) {
      var e = 6 !== this.data.step ? function() {} : function() {
        console.group("数据库文档"), console.log("https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database.html"), console.groupEnd()
      };
      this.setData({
        step: this.data.step + 1
      }, e)
    } else wx.cloud.callFunction({
      name: "login",
      data: {},
      success: function(e) {
        n.globalData.openid = e.result.openid, t.setData({
          step: 2,
          openid: e.result.openid
        })
      },
      fail: function(n) {
        wx.showToast({
          icon: "none",
          title: "获取 openid 失败，请检查是否有部署 login 云函数"
        }), console.log("[云函数] [login] 获取 openid 失败，请检查是否有部署云函数，错误信息：", n)
      }
    })
  },
  prevStep: function() {
    this.setData({
      step: this.data.step - 1
    })
  },
  goHome: function() {
    var n = getCurrentPages();
    2 === n.length ? wx.navigateBack() : 1 === n.length ? wx.redirectTo({
      url: "../index/index"
    }) : wx.reLaunch({
      url: "../index/index"
    })
  }
});