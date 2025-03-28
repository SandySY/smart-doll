Page({
  data: {
    templateMessageResult: "",
    wxacodeSrc: "",
    wxacodeResult: "",
    showClearWXACodeCache: !1
  },
  submitTemplateMessageForm: function(e) {
    var a = this;
    this.setData({
      templateMessageResult: ""
    }), wx.cloud.callFunction({
      name: "openapi",
      data: {
        action: "sendTemplateMessage",
        formId: e.detail.formId
      },
      success: function(e) {
        console.warn("[云函数] [openapi] templateMessage.send 调用成功：", e), wx.showModal({
          title: "发送成功",
          content: "请返回微信主界面查看",
          showCancel: !1
        }), wx.showToast({
          title: "发送成功，请返回微信主界面查看"
        }), a.setData({
          templateMessageResult: JSON.stringify(e.result)
        })
      },
      fail: function(e) {
        wx.showToast({
          icon: "none",
          title: "调用失败"
        }), console.error("[云函数] [openapi] templateMessage.send 调用失败：", e)
      }
    })
  },
  onGetWXACode: function() {
    var e = this;
    this.setData({
      wxacodeSrc: "",
      wxacodeResult: "",
      showClearWXACodeCache: !1
    });
    var a = wx.getStorageSync("wxacodeCloudID");
    a ? (this.setData({
      wxacodeSrc: a,
      wxacodeResult: "从本地缓存中取得了小程序码的云文件 ID",
      showClearWXACodeCache: !0
    }), console.log("从本地缓存中取得了小程序码的云文件 ID：".concat(a))) : wx.cloud.callFunction({
      name: "openapi",
      data: {
        action: "getWXACode"
      },
      success: function(a) {
        console.warn("[云函数] [openapi] wxacode.get 调用成功：", a), wx.showToast({
          title: "调用成功"
        }), e.setData({
          wxacodeSrc: a.result,
          wxacodeResult: "云函数获取二维码成功",
          showClearWXACodeCache: !0
        }), wx.setStorageSync("wxacodeCloudID", a.result)
      },
      fail: function(e) {
        wx.showToast({
          icon: "none",
          title: "调用失败"
        }), console.error("[云函数] [openapi] wxacode.get 调用失败：", e)
      }
    })
  },
  clearWXACodeCache: function() {
    wx.removeStorageSync("wxacodeCloudID"), this.setData({
      wxacodeSrc: "",
      wxacodeResult: "",
      showClearWXACodeCache: !1
    }), wx.showToast({
      title: "清除成功"
    })
  }
});