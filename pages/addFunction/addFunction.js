Page({
  data: {
    result: "",
    canIUseClipboard: wx.canIUse("setClipboardData")
  },
  onLoad: function(t) {},
  copyCode: function() {
    wx.setClipboardData({
      data: "// 云函数入口函数\nexports.main = (event, context) => {\n  console.log(event)\n  console.log(context)\n  return {\n    sum: event.a + event.b\n  }\n}",
      success: function() {
        wx.showToast({
          title: "复制成功"
        })
      }
    })
  },
  testFunction: function() {
    var t = this;
    wx.cloud.callFunction({
      name: "sum",
      data: {
        a: 1,
        b: 2
      },
      success: function(n) {
        wx.showToast({
          title: "调用成功"
        }), t.setData({
          result: JSON.stringify(n.result)
        })
      },
      fail: function(t) {
        wx.showToast({
          icon: "none",
          title: "调用失败"
        }), console.error("[云函数] [sum] 调用失败：", t)
      }
    })
  }
});