var t = a(require("../../utils/event")),
  e = (a(require("../../utils/api")), require("../../utils/util"));

function a(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var i = require("../../utils/util.js"),
  o = getApp();
Page({
  data: {
    items: [{
      name: "GPS定位轨迹",
      value: "GPS",
      checked: !0
    }, {
      name: "基站定位轨迹",
      value: "AGPS",
      checked: !0
    }],
    width: 0,
    height: 0,
    markers: [],
    polyline: [],
    key: -1,
    date: (0, e.formatTime)(new Date((new Date).getTime() - 432e5), 1),
    time: (0, e.formatTime)(new Date((new Date).getTime() - 432e5), 2),
    date1: (0, e.formatTime)(new Date, 1),
    time1: (0, e.formatTime)(new Date, 2),
    timestamp: (new Date).getTime() - 432e5,
    timestamp1: (new Date).getTime()
  },
  formSubmit: function(t) {
    console.log("form发生了submit事件，携带数据为：", t.detail)
  },
  formReset: function() {
    console.log("form发生了reset事件")
  },
  bindViewSpeak: function() {
    wx.navigateTo({
      url: "../speak/speak"
    })
  },
  chooseTime: function() {
    wx.navigateTo({
      url: "./chooseTime/chooseTime?id=" + this.data.key
    })
  },
  chooseAddress: function() {
    wx.navigateTo({
      url: "./chooseAddress/chooseAddress"
    })
  },
  chooseTeacher: function() {
    wx.navigateTo({
      url: "../parents/parents"
    })
  },
  submit: function() {
    var t = this,
      e = getCurrentPages(),
      a = (e[e.length - 1], e[e.length - 2]);
    wx.showModal({
      title: "警告️",
      content: "是否删除",
      success: function(e) {
        if (e.cancel) return !0;
        a.data.items[t.data.key].location.length = 0;
        var i = a.data.items;
        a.setData({
          items: i
        }), wx.setStorage({
          key: "users",
          data: JSON.stringify(a.data.items),
          success: function(t) {
            console.log(t.data)
          },
          fail: function(t) {
            console.log(t.data), wx.showModal({
              content: " 保存失败",
              showCancel: !1
            })
          }
        })
      }
    })
  },
  onShow: function() {},
  checkboxChange: function(t) {
    var e = t.detail.value,
      a = getCurrentPages(),
      l = (a[a.length - 1], a[a.length - 2]),
      n = [],
      s = this.data.key,
      m = l.data.items[s].location,
      d = [];
    if (2 == e.length) {
      this.data.items[0].checked = !0, this.data.items[1].checked = !0;
      for (var r = 0; r < m.length; r++)
        if (m[r].loctime > this.data.timestamp && m[r].loctime < this.data.timestamp1) {
          var h = m[r];
          h.latitude = h.latitude + o.globalData.maplat, h.longitude = h.longitude + o.globalData.maplng, d.push(h)
        }
    } else if (1 == e.length)
      if ("GPS" == e[0]) {
        this.data.items[0].checked = !0, this.data.items[1].checked = !1;
        for (var c = 0; c < m.length; c++)
          if ("GPS" == m[c].locationtype && m[c].loctime > this.data.timestamp && m[c].loctime < this.data.timestamp1) {
            var u = m[c];
            u.latitude = u.latitude + o.globalData.maplat, u.longitude = u.longitude + o.globalData.maplng, d.push(u)
          }
      } else {
        this.data.items[0].checked = !1, this.data.items[1].checked = !0;
        for (var g = 0; g < m.length; g++)
          if ("AGS" == m[g].locationtype && m[g].loctime > this.data.timestamp && m[g].loctime < this.data.timestamp1) {
            var f = m[g];
            f.latitude = f.latitude + o.globalData.maplat, f.longitude = f.longitude + o.globalData.maplng, d.push(f)
          }
      } 0 == d.length ? wx.showModal({
      content: "没找到24小时内轨迹",
      showCancel: !1
    }) : d.sort(this.compare("loctime")), this.setData({
      polyline: [{
        points: d,
        color: "#0000FF",
        width: 8,
        dottedLine: !1,
        arrowLine: !0
      }]
    }), this.data.markers.length = 0;
    for (var p = 0, w = 0, D = 0; D < d.length; D++)
      if (d[D].latitude == p && d[D].longitude == w) console.log("忽略相同marker");
      else {
        var T = {
            id: D,
            title: "",
            width: 40,
            height: 40
          },
          k = parseInt(d[D].loctime);
        T.title = 0 == D ? "起点" + i.formatTimestamp(k, "Y/M/D h:m:s") : i.formatTimestamp(k, "Y/M/D h:m:s"), p = d[D].latitude, w = d[D].longitude, T.latitude = d[D].latitude, T.longitude = d[D].longitude, (n = this.data.markers).push(T)
      } d.length > 0 && (n[n.length - 1].title = "终点" + n[n.length - 1].title), this.setData({
      markers: n
    })
  },
  compare: function(t) {
    return function(e, a) {
      var i = e[t],
        o = a[t];
      return i < o ? -1 : i > o ? 1 : 0
    }
  },
  onLoad: function(a) {
    var l = this,
      n = this,
      s = getCurrentPages(),
      m = (s[s.length - 1], s[s.length - 2]),
      d = [];
    console.log(a), wx.getSystemInfo({
      success: function(t) {
        n.setData({
          width: t.windowWidth,
          height: t.windowHeight - 200
        })
      }
    }), n.setData({
      date: (0, e.formatTime)(new Date((new Date).getTime() - 432e5), 1),
      time: (0, e.formatTime)(new Date((new Date).getTime() - 432e5), 2),
      date1: (0, e.formatTime)(new Date, 1),
      time1: (0, e.formatTime)(new Date, 2),
      timestamp: (new Date).getTime() - 432e5,
      timestamp1: (new Date).getTime()
    }), m.setData({
      clicked: !1
    });
    for (var r = a.id, h = m.data.items[r].location, c = [], u = 0; u < h.length; u++)
      if (h[u].loctime > n.data.timestamp && h[u].loctime < n.data.timestamp1) {
        var g = h[u];
        g.latitude = g.latitude + o.globalData.maplat, g.longitude = g.longitude + o.globalData.maplng, c.push(g)
      } 0 == c.length ? wx.showModal({
      content: "没找到24小时内轨迹",
      showCancel: !1
    }) : c.sort(n.compare("loctime")), n.setData({
      key: a.id,
      polyline: [{
        points: c,
        color: "#0000FF",
        width: 8,
        dottedLine: !1,
        arrowLine: !0
      }]
    }), n.data.markers.length = 0;
    for (var f = 0, p = 0, w = 0; w < c.length; w++)
      if (c[w].latitude == f && c[w].longitude == p) console.log("忽略相同marker");
      else {
        var D = {
            id: w,
            title: "",
            width: 40,
            height: 40
          },
          T = parseInt(c[w].loctime);
        D.title = 0 == w ? "起点" + i.formatTimestamp(T, "Y/M/D h:m:s") : i.formatTimestamp(T, "Y/M/D h:m:s"), f = c[w].latitude, p = c[w].longitude, D.latitude = c[w].latitude, D.longitude = c[w].longitude, (d = n.data.markers).push(D)
      } c.length > 0 && (d[d.length - 1].title = "终点" + d[d.length - 1].title), n.setData({
      markers: d
    }), t.default.on("orderDate", (function(t) {
      console.log(t), l.setData({
        date: t
      })
    })), t.default.on("orderTime", (function(t) {
      console.log(t), l.setData({
        time: t
      })
    }))
  }
});