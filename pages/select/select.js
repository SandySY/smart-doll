Page({
  openActionSheet: function() {
    var e = ["选项1", "选项2", "选项3", "选项4"];
    wx.showActionSheet({
      itemList: e,
      cancelText: "取消",
      destructiveText: "删除",
      success: function(t) {
        -1 !== t.tapIndex ? console.log("用户选择了选项：" + e[t.tapIndex]) : console.log("用户点击了取消")
      },
      fail: function(e) {
        console.error("显示操作表失败", e)
      }
    })
  }
});