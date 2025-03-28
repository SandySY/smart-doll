var e = a(require("../../../utils/api")),
  t = a(require("../../../utils/event"));

function a(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
Page({
  data: {
    addresses: []
  },
  bindPickerChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  choose: function(e) {
    t.default.set("address", e.target.dataset.address), wx.navigateBack()
  },
  onLoad: function() {
    var t = this;
    // wx.getLocation({
    //   type: "wgs84",
    //   success: function(a) {
    //     e.default.get("engine/map/geocoder", {
    //       latitude: a.latitude,
    //       longitude: a.longitude
    //     }, (function(e) {
    //       console.log(e), t.setData({
    //         addresses: e.result.pois
    //       })
    //     }))
    //   }
    // })
  }
});