var t, a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator");
(t = require("../../utils/mqtt")) && t.__esModule;
var i, n = require("../../utils/util.js"),
  o = getApp();
Page({
  data: {
    items: [],
    quitemode: [],
    touchStart: "",
    touchEnd: "",
    key: 0,
    clicked: !1
  },
  onLoad: function(t) {
    var a = getCurrentPages(),
      e = (a[a.length - 1], a[a.length - 2]);
    t, this.setData({
      items: e.data.items
    }), e.setData({
      clicked: !1
    })
  },
  onReady: function() {},
  onShow: function() {
    o.globalData.lockpanel ? o.globalData.client.pingreq() : o.globalData.lockpanel = !0
  },
  onHide: function() {},
  onUnload: (i = e(a().mark((function t() {
    var e, i, s, l, r, c, d, u, g;
    return a().wrap((function(t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          e = this, (i = getCurrentPages())[i.length - 1], s = i[i.length - 2], o.globalData.lockpanel = !1;
          try {
            wx.setStorageSync("users", JSON.stringify(e.data.items))
          } catch (t) {
            wx.showModal({
              content: " 保存失败",
              showCancel: !1
            })
          }
          return s.setData({
            items: e.data.items
          }), t.next = 9, s.getmsglimit();
        case 9:
          if (l = t.sent, console.log(" res1: " + l.data), 0 != s.data.items.length) {
            t.next = 14;
            break
          }
          return s.setData({
            markers: []
          }), t.abrupt("return");
        case 14:
          r = e.data.key, c = {
            iconPath: "../../images/eye.jpg",
            id: r,
            name: "店家地址2",
            desc: "店家地址3",
            width: 40,
            height: 40,
            callout: {
              content: "",
              display: "ALWAYS",
              borderRadius: 10,
              bgColor: "#fbf9fe",
              padding: 5,
              borderColor: "#ffd700",
              borderWidth: 2
            }
          }, 0 == e.data.items[r].location.length ? (c.callout.content = e.data.items[r].name + "(离线)", c.latitude = 23.099994, c.longitude = 113.32452) : (c.latitude = e.data.items[r].location[e.data.items[r].location.length - 1].latitude + o.globalData.maplat, c.longitude = e.data.items[r].location[e.data.items[r].location.length - 1].longitude + o.globalData.maplng, d = parseInt(e.data.items[r].location[e.data.items[r].location.length - 1].loctime), u = "GPS" == e.data.items[r].location[e.data.items[r].location.length - 1].locationtype ? "GPS定位" : "基站定位", c.callout.content = e.data.items[r].name + " " + e.data.items[r].online + "  电量:" + s.data.batvol[r] + "% 消息:" + s.data.msgcount[r] + "/" + s.data.msglimit[r] + " " + u + n.formatTimestamp(d, " Y/M/D h:m:s")), s.data.markers && (s.data.markers.length = 0), (g = s.data.markers).push(c), s.setData({
            tips: "宝宝:" + e.data.items[r].name,
            key: r,
            markers: g
          }), setTimeout((function() {
            s.setData({
              markerkey: 0,
              mapscale: 13
            })
          }), 100);
        case 22:
        case "end":
          return t.stop()
      }
    }), t, this)
  }))), function() {
    return i.apply(this, arguments)
  }),
  touchStart: function(t) {
    this.setData({
      touchStart: t.timeStamp,
      key: t.currentTarget.dataset.index
    })
  },
  touchEnd: function(t) {
    this.setData({
      touchEnd: t.timeStamp
    })
  },
  pressTap: function(t) {
    var a = this;
    a.data.touchEnd - a.data.touchStart > 1e3 && wx.showModal({
      title: "警告️",
      content: "是否删除",
      success: function(e) {
        if (e.cancel) return !0;
        o.globalData.client.unsubscribe("gpstalk/location/" + a.data.items[t.currentTarget.dataset.index].imei, {
          qos: 1
        }, (function(t, a) {
          t ? wx.showToast({
            title: "订阅主题失败",
            icon: "fail",
            duration: 2e3
          }) : console.log(" 取消订阅坐标主题成功")
        })), o.globalData.client.unsubscribe("gpstalk/message/" + a.data.items[t.currentTarget.dataset.index].imei, {
          qos: 1
        }, (function(t, a) {
          t ? wx.showToast({
            title: "订阅主题失败",
            icon: "fail",
            duration: 2e3
          }) : console.log(" 取消订阅消息主题成功")
        })), o.globalData.client.publish("gpstalk/set/" + a.data.items[t.currentTarget.dataset.index].imei, a.data.items[t.currentTarget.dataset.index].imei + "," + o.globalData.openid + ",0,99,2,1", {
          qos: 1,
          retain: !0,
          dup: !0
        });
        var i = a.data.items;
        i.splice(t.currentTarget.dataset.index, 1), a.setData({
          items: i,
          key: 0
        }), wx.setStorage({
          key: "users",
          data: JSON.stringify(a.data.items),
          fail: function(t) {
            console.log(t.data), wx.showModal({
              content: " 保存失败",
              showCancel: !1
            })
          }
        })
      }
    }), a.setData({
      viewBg: "white"
    })
  },
  lineview: function(t) {
    if (!this.data.clicked) {
      this.data.clicked = !0;
      var a = this.data.key;
      o.globalData.lockpanel = !1, wx.navigateTo({
        url: "../order/order?id=" + a
      })
    }
  },
  tocaruser: function(t) {
    if (!this.data.clicked) {
      this.data.clicked = !0;
      var a = this.data.key;
      o.globalData.lockpanel = !1, wx.navigateTo({
        url: "../user/user?id=" + a
      })
    }
  },
  bindViewTap: function() {
    this.data.clicked || (this.data.clicked = !0, o.globalData.lockpanel = !1, wx.navigateTo({
      url: "../user/user"
    }))
  },
  lodingto: function() {
    wx.showLoading({
      title: "正在加载",
      icon: "loading"
    })
  },
  closeloding: function() {
    wx.hideLoading()
  }
});