var e, t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
getApp();
Page({
  data: {
    avatarUrl: "./user-unlogin.png",
    userInfo: null,
    logged: !1,
    takeSession: !1,
    requestResult: "",
    chatRoomCollection: "chatroom",
    chatRoomGroupId: "demo",
    chatRoomGroupName: "聊天室",
    onGetUserInfo: null,
    getOpenID: null
  },
  onLoad: function() {
    var e = this;
    wx.getSetting({
      success: function(t) {
        t.authSetting["scope.userInfo"] && wx.getUserInfo({
          success: function(t) {
            e.setData({
              avatarUrl: t.userInfo.avatarUrl,
              userInfo: t.userInfo
            })
          }
        })
      }
    }), this.setData({
      onGetUserInfo: this.onGetUserInfo,
      getOpenID: this.getOpenID
    }), wx.getSystemInfo({
      success: function(t) {
        if (console.log("system info", t), t.safeArea) {
          var n = t.safeArea,
            o = n.top,
            r = n.bottom;
          e.setData({
            containerStyle: "padding-top: ".concat((/ios/i.test(t.system) ? 10 : 20) + o, "px; padding-bottom: ").concat(20 + t.windowHeight - r, "px")
          })
        }
      }
    })
  },
  getOpenID: (e = n(t().mark((function e() {
    var n, o;
    return t().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (!this.openid) {
            e.next = 2;
            break
          }
          return e.abrupt("return", this.openid);
        case 2:
          return e.next = 4, wx.cloud.callFunction({
            name: "login"
          });
        case 4:
          return n = e.sent, o = n.result, e.abrupt("return", o.openid);
        case 7:
        case "end":
          return e.stop()
      }
    }), e, this)
  }))), function() {
    return e.apply(this, arguments)
  }),
  onGetUserInfo: function(e) {
    !this.logged && e.detail.userInfo && this.setData({
      logged: !0,
      avatarUrl: e.detail.userInfo.avatarUrl,
      userInfo: e.detail.userInfo
    })
  },
  onShareAppMessage: function() {
    return {
      title: "即时通信 Demo",
      path: "/pages/im/room/room"
    }
  }
});