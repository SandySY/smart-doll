require("../../utils/util.js");
var t = require("../../utils/ble.js"),
  e = getApp(),
  a = wx.cloud.database(),
  o = a.collection("goods"),
  n = a.collection("msglimit"),
  i = 0;
Page({
  data: {
    items: [],
    key: 0
  },
  onLoad: function(t) {
    var e = this;
    o.get({
      success: function(t) {
        var a = t.data;
        e.setData({
          items: a
        })
      }
    }), i = 0
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {
    i = 1
  },
  onUnload: function() {
    0 == i && (e.globalData.lockpanel = !1)
  },
  touchStart: function(t) {
    this.setData({
      key: t.currentTarget.dataset.index
    })
  },
  touchEnd: function(t) {},
  wxpay: function() {
    if (1 != i) {
      var a = "127.0.0.1";
      wx.request({
        url: "http://ip-api.com/json",
        success: function(t) {
          console.log(t.data), a = t.data.query
        }
      }), wx.showToast({
        title: "正加载支付页面，请等待。。。",
        duration: 2e3
      });
      var o = this.data.key,
        n = this.data.items[o].count;
      wx.cloud.callFunction({
        name: "getPay",
        data: {
          type: "unifiedorder",
          openid: e.globalData.openid,
          goodId: this.data.items[o]._id,
          body: this.data.items[o].name + ":" + this.data.items[o].payinfo,
          total_fee: 100 * parseFloat(this.data.items[o].price).toFixed(2),
          spbill_create_ip: a
        },
        success: function(a) {
          console.log("签名成功");
          var o = {
            timeStamp: a.result.timeStamp,
            package: "prepay_id=" + a.result.prepay_id,
            paySign: a.result.paySign,
            signType: "MD5",
            nonceStr: a.result.nonce_str
          };
          console.log("param小程序支付接口参数", o), wx.requestPayment({
            timeStamp: o.timeStamp,
            nonceStr: o.nonceStr,
            package: o.package,
            signType: o.signType,
            paySign: o.paySign,
            success: function(a) {
              return 1 == e.globalData.netflag ? (console.log(e.globalData.localurl), wx.request({
                url: e.globalData.localurl,
                method: "POST",
                data: "paycount" + n,
                header: {
                  "content-type": "application/json"
                },
                success: function(t) {
                  console.log(t.data), "ok" == t.data && wx.showModal({
                    content: "充值成功",
                    showCancel: !1
                  })
                },
                fail: function(t) {
                  console.error(t)
                }
              })) : t.writeCommand("paycount" + n), console.log("paycount", n), console.log("wx.requestPayment返回信息", a), wx.showModal({
                content: "支付成功！",
                showCancel: !1
              }), !0
            },
            fail: function() {
              return console.log("支付失败"), !1
            },
            complete: function() {
              return console.log("支付完成(成功或失败都为完成)"), !1
            }
          })
        },
        fail: function(t) {
          console.log(t)
        }
      }), e.globalData.lockpanel = !1
    } else wx.showModal({
      content: "请重新连接语言设备！",
      showCancel: !1
    })
  },
  updatedata: function(t) {
    var e = getCurrentPages(),
      a = (e[e.length - 1], e[e.length - 2]);
    n.add({
      data: {
        imei: a.data.imei,
        count: t,
        statime: (new Date).getTime(),
        endtime: (new Date).getTime() + 2592e6
      }
    }).then((function(t) {
      console.log("添加成功！")
    }))
  }
});