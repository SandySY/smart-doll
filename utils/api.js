Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
exports.default = {
  get: function(e, t, o) {
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 2e3
    }), wx.request({
      url: e,
      data: t,
      success: function(e) {
        wx.hideToast(), o(e.data)
      }
    })
  }
};