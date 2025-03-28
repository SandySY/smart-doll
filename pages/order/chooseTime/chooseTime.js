var t, e = (t = require("../../../utils/event")) && t.__esModule ? t : {
    default: t
  },
  a = require("../../../utils/util");
var i = require("../../../utils/util.js"),
  l = getApp();
Page({
  data: {
    key: -1,
    date: (0, a.formatTime)(new Date, 1),
    time: (0, a.formatTime)(new Date, 2),
    date1: (0, a.formatTime)(new Date, 1),
    time1: (0, a.formatTime)(new Date, 2)
  },
  onLoad: function(t) {
    var e = getCurrentPages(),
      i = (e[e.length - 1], e[e.length - 2]);
    this.data.key = t.id, this.setData({
      date: (0, a.formatTime)(new Date(i.data.timestamp), 1),
      time: (0, a.formatTime)(new Date(i.data.timestamp), 2),
      date1: (0, a.formatTime)(new Date(i.data.timestamp1), 1),
      time1: (0, a.formatTime)(new Date(i.data.timestamp1), 2)
    })
  },
  compare: function(t) {
    return function(e, a) {
      var i = e[t],
        l = a[t];
      return i < l ? -1 : i > l ? 1 : 0
    }
  },
  onUnload: function() {
    var t = getCurrentPages(),
      e = (t[t.length - 1], t[t.length - 2]),
      a = [];
    try {
      var d = wx.getStorageSync("users");
      if (d) var o = JSON.parse(d)
    } catch (t) {
      return void console.log("没有数据")
    }
    var n = o[this.data.key].location,
      m = [],
      r = Date.parse(this.data.date + " " + this.data.time + ":00");
    e.data.timestamp = r;
    var s = Date.parse(this.data.date1 + " " + this.data.time1 + ":00");
    if (e.data.timestamp1 = s, 1 == e.data.items[0].checked && 1 == e.data.items[1].checked) {
      for (var u = 0; u < n.length; u++)
        if (n[u].loctime > r && n[u].loctime < s) {
          var h = n[u];
          h.latitude = h.latitude + l.globalData.maplat, h.longitude = h.longitude + l.globalData.maplng, m.push(h)
        }
    } else if (1 == e.data.items[0].checked) {
      for (var g = 0; g < n.length; g++)
        if ("GPS" == n[g].locationtype && n[g].loctime > r && n[g].loctime < s) {
          var c = n[g];
          c.latitude = c.latitude + l.globalData.maplat, c.longitude = c.longitude + l.globalData.maplng, m.push(c)
        }
    } else
      for (var f = 0; f < n.length; f++)
        if ("AGS" == n[f].locationtype && n[f].loctime > r && n[f].loctime < s) {
          var p = n[f];
          p.latitude = p.latitude + l.globalData.maplat, p.longitude = p.longitude + l.globalData.maplng, m.push(p)
        } 0 == m.length ? wx.showModal({
      content: "没找到24小时内轨迹",
      showCancel: !1
    }) : m.sort(this.compare("loctime")), e.setData({
      polyline: [{
        points: m,
        color: "#0000FF",
        width: 8,
        dottedLine: !1,
        arrowLine: !0
      }]
    }), e.data.markers.length = 0;
    for (var D = 0, v = 0, w = 0; w < m.length; w++)
      if (m[w].latitude == D && m[w].longitude == v) console.log("忽略相同marker");
      else {
        var T = {
            id: w,
            title: "",
            width: 40,
            height: 40
          },
          b = parseInt(m[w].loctime);
        T.title = 0 == w ? "起点" + i.formatTimestamp(b, "Y/M/D h:m:s") : i.formatTimestamp(b, "Y/M/D h:m:s"), D = m[w].latitude, v = m[w].longitude, T.latitude = m[w].latitude, T.longitude = m[w].longitude, (a = e.data.markers).push(T)
      } m.length > 0 && (a[a.length - 1].title = "终点" + a[a.length - 1].title), e.setData({
      markers: a,
      date: this.data.date,
      time: this.data.time,
      date1: this.data.date1,
      time1: this.data.time1,
      timestamp: r,
      timestamp1: s
    })
  },
  bindDateChange: function(t) {
    this.setData({
      date: t.detail.value
    }), e.default.set("orderDate", t.detail.value)
  },
  bindTimeChange: function(t) {
    this.setData({
      time: t.detail.value
    }), e.default.set("orderTime", t.detail.value)
  },
  bindDateChange1: function(t) {
    this.setData({
      date1: t.detail.value
    }), e.default.set("orderDate", t.detail.value)
  },
  bindTimeChange1: function(t) {
    this.setData({
      time1: t.detail.value
    }), e.default.set("orderTime", t.detail.value)
  }
});