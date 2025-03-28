Page({
  data: {
    weRunResult: "",
    userInfoResult: ""
  },
  onGetWeRunData: function() {
    var t = this;
    wx.getWeRunData({
      success: function(n) {
        wx.cloud.callFunction({
          name: "echo",
          data: {
            info: wx.cloud.CloudID(n.cloudID)
          }
        }).then((function(n) {
          console.log("[onGetWeRunData] 收到 echo 回包：", n), t.setData({
            weRunResult: JSON.stringify(n.result)
          }), wx.showToast({
            title: "敏感数据获取成功"
          })
        })).catch((function(t) {
          console.log("[onGetWeRunData] 失败：", t)
        }))
      }
    })
  },
  onGetUserInfo: function(t) {
    var n = this;
    console.log(t), wx.cloud.callFunction({
      name: "openapi",
      data: {
        action: "getOpenData",
        openData: {
          list: [t.detail.cloudID]
        }
      }
    }).then((function(t) {
      console.log("[onGetUserInfo] 调用成功：", t), n.setData({
        userInfoResult: JSON.stringify(t.result)
      }), wx.showToast({
        title: "敏感数据获取成功"
      })
    }))
  }
});