var e = getApp(),
  t = !1,
  n = !1,
  o = null,
  c = 2e4,
  i = [1, 0],
  a = (o = null, null),
  l = null,
  r = null,
  s = null,
  u = null,
  d = !1,
  f = !1,
  v = null;
Page({
  data: {
    fileID: "",
    cloudPath: "",
    imagePath: "",
    boot: ""
  },
  inputboot: function(e) {
    this.data.boot = e.detail.value
  },
  onLoad: function(t) {
    var n = e.globalData,
      o = n.fileID,
      c = n.cloudPath,
      i = n.imagePath;
    this.setData({
      fileID: o,
      cloudPath: c,
      imagePath: i
    }), console.group("文件存储文档"), console.log("https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/storage.html"), console.groupEnd()
  },
  savepara: function() {
    console.log("boot：" + this.data.boot), this.writeCommand(this.data.boot)
  },
  startTimer: function(e) {
    var t = this;
    t.cancelTimer(), o = setTimeout((function() {
      t.stopScan(), null != e && "function" == typeof e && e()
    }), c)
  },
  cancelTimer: function() {
    null != o && (clearTimeout(o), o = null)
  },
  listenerScanResult: function(e) {
    t || (t = !0, wx.onBluetoothDeviceFound((function(t) {
      t.devices.forEach((function(t) {
        t.name.startsWith("PHASR") && (console.log("扫到设备, deviceName: ", t.name), null != e && "function" == typeof e && e(t))
      }))
    })))
  },
  isScan: function() {
    return n
  },
  stopScan: function() {
    console.log("停止扫描设备 >>>>>>"), this.cancelTimer(), n && (n = !1, wx.stopBluetoothDevicesDiscovery())
  },
  startScan: function(e) {
    var t = e.timeout,
      o = void 0 === t ? 2e4 : t,
      i = e.onFindCallback,
      a = e.onStopCallback,
      l = this;
    n || (console.log("0.开始初始化蓝牙 >>>>>>"), c = o, l.listenerScanResult(i), wx.openBluetoothAdapter({
      mode: "central",
      success: function(e) {
        n = !0, console.log("1.开始扫描设备 >>>>>>"), wx.startBluetoothDevicesDiscovery({
          allowDuplicatesKey: !1
        }), l.startTimer(a)
      },
      fail: function(e) {
        10001 === e.errCode && wx.onBluetoothAdapterStateChange((function(e) {
          e.available && (n = !0, console.log("1.开始扫描设备 >>>>>>"), wx.startBluetoothDevicesDiscovery({
            allowDuplicatesKey: !1
          }), l.startTimer(a))
        }))
      }
    }))
  },
  startTimeoutCheck: function() {
    var e = this;
    e.cancelTimeoutCheck(), o = setTimeout((function() {
      e.close()
    }), 2e4)
  },
  cancelTimeoutCheck: function() {
    null != o && (clearTimeout(o), o = null)
  },
  start: function(e) {
    var t = e.deviceName,
      n = e.timeout,
      o = void 0 === n ? 1e4 : n,
      c = e.onDeviceNotFindCallback,
      i = e.onConnectedCallback,
      s = e.onDisconnectCallback,
      u = e.onReadCallback,
      m = this;
    d || f || (a = i, l = s, r = u, m.startScan({
      timeout: o,
      onFindCallback: function(e) {
        e.name == t && (v = e, m.stopScan(), m.connect(e))
      },
      onStopCallback: function() {
        null == v && (console.log("没找到设备 >>>>>>"), c())
      }
    }))
  },
  connect: function(e) {
    var t = this;
    console.log("2.开始连接 >>>>>>deviceName: " + e.name), d = !0, t.startTimeoutCheck(), wx.createBLEConnection({
      deviceId: e.deviceId,
      success: function() {
        console.log("连接成功 >>>>>>deviceName: " + e.name), t.cancelTimeoutCheck(), null != a && "function" == typeof a && a(), t.requestMtu(e), t.discoverServices(e)
      },
      fail: function(n) {
        console.log("连接失败 >>>>>>deviceName: " + e.name), t.cancelTimeoutCheck(), t.close(), null != l && "function" == typeof l && l()
      }
    })
  },
  requestMtu: function(e) {
    console.log("2.1.请求设置mtu为512 >>>>>>name: " + e.name + e.deviceId), wx.setBLEMTU({
      deviceId: e.deviceId,
      mtu: 200,
      success: function(t) {
        console.log("mtu设置成功 >>>>>>deviceName: " + e.name + " 当前mtu: " + t.mtu)
      },
      fail: function() {
        console.log("mtu设置失败 >>>>>>deviceName: " + e.name)
      }
    })
  },
  discoverServices: function(e) {
    var t = this;
    console.log("3.开始发现服务 >>>>>>deviceName: " + e.name), t.startTimeoutCheck(), wx.getBLEDeviceServices({
      deviceId: e.deviceId,
      success: function(n) {
        console.log("发现服务成功 >>>>>>deviceName: " + e.name), t.cancelTimeoutCheck(), d = !1, f = !0;
        for (var o = n.services.length, c = 0; c < o; c++) {
          var i = n.services[c];
          i.uuid.toUpperCase() == "0000ABF0-0000-1000-8000-00805F9B34FB".toUpperCase() && (console.log("3.2.找到写数据的服务 >>>>>>deviceName: " + e.name + "  serviceUuid: 0000ABF0-0000-1000-8000-00805F9B34FB"), s = i, t.readCharacteristics(e, i))
        }
      }
    })
  },
  readCharacteristics: function(e, t) {
    wx.getBLEDeviceCharacteristics({
      deviceId: e.deviceId,
      serviceId: t.uuid,
      success: function(t) {
        for (var n = t.characteristics.length, o = 0; o < n; o++) {
          var c = t.characteristics[o];
          c.uuid.toUpperCase() == "0000ABF3-0000-1000-8000-00805F9B34FB".toUpperCase() && (console.log("4.2.找到写命令的特征值 >>>>>>deviceName: " + e.name + "  characteristicUUID: 0000ABF3-0000-1000-8000-00805F9B34FB"), u = c)
        }
      }
    })
  },
  setNotificationMode: function(e, t, n) {
    if (console.log("4.1.设置为通知模式 >>>>>>name: " + e.name), wx.onBLECharacteristicValueChange((function(t) {
        null != t && (console.log("接收数据 >>>>>>name: " + e.name + "  data: " + t), r(t))
      })), wx.notifyBLECharacteristicValueChange({
        deviceId: e.deviceId,
        serviceId: t.uuid,
        characteristicId: n.uuid,
        state: !0
      }), n.properties.write) {
      console.log("发送通知模式给设备 >>>>>>name: " + e.name);
      var o = new ArrayBuffer(2),
        c = new DataView(o);
      c.setInt16(0, i[0]), c.setInt16(1, i[1]), wx.writeBLECharacteristicValue({
        deviceId: e.deviceId,
        serviceId: t.serviceId,
        characteristicId: n.uuid,
        value: o
      })
    }
  },
  ab2hex: function(e) {
    return Array.prototype.map.call(new Uint8Array(e), (function(e) {
      return ("00" + e.toString(16)).slice(-2)
    })).join("")
  },
  string2Hex: function(e) {
    for (var t = "", n = 0; n < e.length; n++) "" == t ? t = e.charCodeAt(n).toString(16) : t += e.charCodeAt(n).toString(16);
    return t
  },
  hex2ArrayBuffer: function(e) {
    return new Uint8Array(e.match(/[\da-f]{2}/gi).map((function(e) {
      return parseInt(e, 16)
    }))).buffer
  },
  hexStringToArrayBuffer: function(e) {
    if (console.log("strlen: " + e.length), !e) return new ArrayBuffer(0);
    for (var t = new ArrayBuffer(e.length), n = new DataView(t), o = 0, c = 0, i = e.length; c < i; c += 2) {
      var a = parseInt(e.substr(c, 2), 16);
      console.log("code: " + a), n.setUint8(o, a), o++
    }
    return t
  },
  stringToHex: function(e) {
    for (var t = "", n = 0; n < e.length; n++) "" == t ? t = e.charCodeAt(n).toString(16) : t += "," + e.charCodeAt(n).toString(16);
    return t
  },
  writeCommand: function(e) {
    console.log("发送指令给设备 >>>>>>deviceName: " + s.serviceId + "  data: " + e);
    var t = this.string2Hex(e),
      n = this.hex2ArrayBuffer(t);
    console.log("主机写入的指令:", n), wx.writeBLECharacteristicValue({
      deviceId: v.deviceId,
      serviceId: s.uuid,
      characteristicId: u.uuid,
      value: n,
      success: function(e) {
        console.log("写入成功", e.errMsg)
      },
      fail: function(e) {
        console.log("写入失败", e.errMsg)
      }
    })
  },
  close: function(e) {
    console.log("断开连接 >>>>>>deviceName: " + e.name), d = !1, f = !1, wx.closeBLEConnection({
      deviceId: e.deviceId
    }), wx.closeBluetoothAdapter({})
  },
  startBT: function() {
    this.start({
      deviceName: "PHASR",
      onDeviceNotFindCallback: function() {},
      onConnectedCallback: function() {},
      onDisconnectCallback: function() {},
      onReadCallback: function(e) {}
    })
  }
});