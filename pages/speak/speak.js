require("../../utils/util");
var t = "",
  e = wx.getRecorderManager(),
  a = wx.createInnerAudioContext();
Page({
  data: {
    wave: "wave ripple",
    tips: "点击开始说话",
    id: 0
  },
  formSubmit: function(t) {
    console.log("form发生了submit事件，携带数据为：", t.detail)
  },
  formReset: function() {
    console.log("form发生了reset事件")
  },
  speak: function() {
    var i = this,
      o = getCurrentPages(),
      n = (o[o.length - 1], o[o.length - 2]);
    if ("wave" == this.data.wave) {
      this.setData({
        wave: "wave ripple",
        tips: "点击结束"
      });
      e.start({
        duration: 1e4,
        sampleRate: 8e3,
        numberOfChannels: 1,
        encodeBitRate: 16e3,
        format: "mp3",
        frameSize: 50,
        audioSource: "voice_communication"
      }), e.onStart((function() {
        console.log("recorder start")
      })), e.onError((function(t) {
        console.log(t)
      }))
    } else this.setData({
      wave: "wave",
      tips: "点击开始说话"
    }), e.stop(), e.onStop((function(e) {
      t = e.tempFilePath, a.autoplay = !0, a.src = t, a.onPlay((function() {
        console.log("开始播放")
      })), a.onError((function(t) {
        console.log(t.errMsg), console.log(t.errCode)
      }));
      require("../../utils/base64.js");
      wx.getFileSystemManager().readFile({
        filePath: t,
        success: function(t) {
          if (t.data) {
            var e = wx.arrayBufferToBase64(t.data);
            if (n.data.client && n.data.client.connected)
              if (999 == i.data.id)
                for (var a = 0; a < n.data.items.length; a++) n.data.client.publish("gpstalk/p2p/GID_GPSTALK@@@" + n.data.items[a].imei, n.data.items[a].imei + "," + app.globalData.openid), n.data.client.publish("gpstalk/p2p/GID_GPSTALK@@@" + n.data.items[a].imei, e), wx.showToast({
                  title: "发布成功"
                });
              else {
                var o = i.data.id;
                n.data.client.publish("gpstalk/p2p/GID_GPSTALK@@@" + n.data.items[o].imei, n.data.items[o].imei + "," + app.globalData.openid), n.data.client.publish("gpstalk/p2p/GID_GPSTALK@@@" + n.data.items[o].imei, e), wx.showToast({
                  title: "发布成功"
                })
              }
            else wx.showToast({
              title: "网络断开请重试！",
              icon: "none",
              duration: 2e3
            })
          }
        },
        fail: function(t) {
          console.log("读取失败", t), reject(t)
        }
      })
    }))
  },
  onLoad: function(t) {
    var e = getCurrentPages(),
      a = (e[e.length - 1], e[e.length - 2]);
    this.setData({
      id: t.id
    }), 999 == this.data.id ? wx.setNavigationBarTitle({
      title: "广播语音"
    }) : wx.setNavigationBarTitle({
      title: a.data.items[this.data.id].name + "单独语音"
    })
  }
});