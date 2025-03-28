App({
  onLaunch: function() {
    wx.cloud ? wx.cloud.init({
      traceUser: !0
    }) : console.error("请使用 2.2.3 或以上的基础库以使用云能力"), this.globalData = {
      client: null,
      openid: null,
      id: null,
      lockpanel: !1,
      maplat: 0,
      maplng: 0,
      parastr: "",
      waittime: 3e3,
      netflag: 0,
      localurl: ""
    }
  }
});