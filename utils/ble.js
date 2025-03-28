var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../@babel/runtime/helpers/asyncToGenerator"),
  o = getApp(),
  t = !1,
  c = !1,
  i = null,
  a = 3e3,
  r = (i = null, null),
  l = null,
  u = null,
  s = null,
  d = !1,
  f = !1,
  v = !1,
  g = null,
  h = 0,
  m = new Array,
  p = 0,
  C = 0,
  w = "",
  I = !1;

function B(e) {
  b(), i = setTimeout((function() {
    x(), null != e && "function" == typeof e && e()
  }), a)
}

function b() {
  null != i && (clearTimeout(i), i = null)
}

function x() {
  console.log("停止扫描设备 >>>>>>"), b(), c && (c = !1, wx.stopBluetoothDevicesDiscovery())
}

function y(e) {
  var n = e.timeout,
    o = void 0 === n ? 3e3 : n,
    i = e.onFindCallback,
    r = e.onStopCallback;
  c || (console.log("0.开始初始化蓝牙 >>>>>>"), a = o, function(e) {
    t || (t = !0, wx.onBluetoothDeviceFound((function(n) {
      n.devices.forEach((function(n) {
        n.name.startsWith(w) && (console.log("扫到设备, deviceName: ", n.name), null != e && "function" == typeof e && e(n))
      }))
    })))
  }(i), wx.openBluetoothAdapter({
    mode: "central",
    success: function(e) {
      c = !0, console.log("1.开始扫描设备 >>>>>>"), wx.startBluetoothDevicesDiscovery({
        allowDuplicatesKey: !1
      }), B(r)
    },
    fail: function(e) {
      C = 0, wx.showModal({
        content: "初始化蓝牙失败，请打开蓝牙和gps",
        showCancel: !1
      })
    }
  }))
}

function D() {
  F(), i = setTimeout((function() {
    T()
  }), 3e3)
}

function F() {
  null != i && (clearTimeout(i), i = null)
}

function k(e) {
  var n = e.deviceName,
    o = e.timeout,
    t = void 0 === o ? 1e4 : o,
    c = e.onDeviceNotFindCallback,
    i = e.onConnectedCallback,
    a = e.onDisconnectCallback,
    s = e.onReadCallback;
  (d || f) && T(g), r = i, l = a, s, y({
    timeout: t,
    onFindCallback: function(e) {
      e.name == n && (g = e, x(), function(e) {
        console.log("2.开始连接 >>>>>>deviceName: " + e.name), d = !0, D(), wx.createBLEConnection({
          deviceId: e.deviceId,
          success: function() {
            C = 0, console.log("连接成功 >>>>>>deviceName: " + e.name), wx.showModal({
                content: "蓝牙连接成功",
                showCancel: !1
              }), F(), null != r && "function" == typeof r && r(),
              function(e) {
                console.log("2.1.请求设置mtu为512 >>>>>>name: " + e.name + e.deviceId), wx.setBLEMTU({
                  deviceId: e.deviceId,
                  mtu: 23,
                  success: function(n) {
                    console.log("mtu设置成功 >>>>>>deviceName: " + e.name + " 当前mtu: " + n.mtu)
                  },
                  fail: function() {
                    console.log("mtu设置失败 >>>>>>deviceName: " + e.name)
                  }
                })
              }(e),
              function(e) {
                console.log("3.开始发现服务 >>>>>>deviceName: " + e.name), D(), wx.getBLEDeviceServices({
                  deviceId: e.deviceId,
                  success: function(n) {
                    console.log("发现服务成功 >>>>>>deviceName: " + e.name), F(), d = !1, f = !0;
                    for (var o = n.services.length, t = 0; t < o; t++) {
                      var c = n.services[t],
                        i = c.uuid;
                      console.log("3.1.找到服务 >>>>>>deviceName: " + e.name + "  serviceUuid: " + i.toUpperCase()), i.toUpperCase() == "0000ABF0-0000-1000-8000-00805F9B34FB".toUpperCase() && (console.log("3.2.找到写数据的服务 >>>>>>deviceName: " + e.name + "  serviceUuid: 0000ABF0-0000-1000-8000-00805F9B34FB"), u = c, L(e, c))
                    }
                  }
                })
              }(e)
          },
          fail: function(n) {
            C = 0, console.log("连接失败 >>>>>>deviceName: " + e.name), wx.showModal({
              content: "蓝牙连接失败",
              showCancel: !1
            }), F(), T(), null != l && "function" == typeof l && l()
          }
        })
      }(e))
    },
    onStopCallback: function() {
      null == g && (C = 0, console.log("没找到语音设备 >>>>>>"), wx.showModal({
        content: "没找到语音设备，请打开蓝牙和GPS定位并和语音设备连接到同一网络。",
        showCancel: !1
      }), c())
    }
  })
}

function L(e, n) {
  wx.getBLEDeviceCharacteristics({
    deviceId: e.deviceId,
    serviceId: n.uuid,
    success: function(o) {
      for (var t = o.characteristics.length, c = 0; c < t; c++) {
        var i = o.characteristics[c],
          a = i.uuid;
        a.toUpperCase() == "0000ABF4-0000-1000-8000-00805F9B34FB".toUpperCase() ? (console.log("4.1.找到设置模式的特征值 >>>>>>deviceName: " + e.name + "  characteristicUUID: 0000ABF4-0000-1000-8000-00805F9B34FBserviceItem.uuid" + n.uuid), i, N(e, n, i)) : a.toUpperCase() == "0000ABF3-0000-1000-8000-00805F9B34FB".toUpperCase() && (console.log("4.2.找到写命令的特征值 >>>>>>deviceName: " + e.name + "  characteristicUUID: 0000ABF3-0000-1000-8000-00805F9B34FB"), (s = i).properties.read && wx.readBLECharacteristicValue({
          deviceId: g.deviceId,
          serviceId: u.uuid,
          characteristicId: s.uuid,
          success: function(e) {
            console.log("readBLECharacteristicValue success", e.errMsg)
          },
          fail: function(e) {
            console.log("readBLECharacteristicValue fail", e.errMsg)
          }
        }))
      }
    }
  })
}

function N(e, n, o) {
  return A.apply(this, arguments)
}

function A() {
  return (A = n(e().mark((function n(t, c, i) {
    return e().wrap((function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          console.log("4.1.设置为通知模式 >>>>>>name: " + t.name), wx.notifyBLECharacteristicValueChange({
            deviceId: t.deviceId,
            serviceId: c.uuid,
            characteristicId: i.uuid,
            state: !0,
            success: function(e) {
              console.log("设置为Notification成功"), wx.onBLECharacteristicValueChange((function(e) {
                if (0 != h) {
                  var n = U(e.value);
                  if (1 != I)
                    if ("idok" != n) {
                      if ("spdok" == n) return wx.showModal({
                        content: "恢复默认参数成功",
                        showCancel: !1
                      }), void(h = 0);
                      if ("end" == n) {
                        for (var t = new ArrayBuffer(m.length), c = new DataView(t), i = 0; i < m.length; i++) c.setInt8(i, m[i]);
                        return o.globalData.parastr = R(t), void(h = 0)
                      }
                      if ("btok" == n) {
                        var a = o.globalData.parastr.length;
                        for (console.log("btsendlen=", a); p < a;) o.globalData.parastr.length - p > 6 ? (S(o.globalData.parastr.slice(p, p + 6)), p += 6) : (S(o.globalData.parastr.slice(p)), p = o.globalData.parastr.length), M(500);
                        return console.log("end"), S("end"), void(h = 0)
                      }
                      if ("readparaALL" != n && 1 == h)
                        for (var r = new Int8Array(e.value), l = 0; l < e.value.byteLength; l++) m.push(r[l]);
                      1 == h && wx.readBLECharacteristicValue({
                        deviceId: g.deviceId,
                        serviceId: u.uuid,
                        characteristicId: s.uuid,
                        success: function(e) {
                          console.log("读成功", e.errMsg)
                        },
                        fail: function(e) {
                          console.log("读失败", e.errMsg)
                        }
                      })
                    } else v = !0
                }
              }))
            },
            fail: function(e) {
              console.log(e.errMsg + "设置为Notification失败")
            }
          });
        case 2:
        case "end":
          return e.stop()
      }
    }), n)
  })))).apply(this, arguments)
}

function U(e) {
  return String.fromCharCode.apply(null, new Uint8Array(e))
}

function M(e) {
  return new Promise((function(n, o) {
    setTimeout((function() {
      return n("a1")
    }), e)
  }))
}

function E() {
  wx.readBLECharacteristicValue({
    deviceId: g.deviceId,
    serviceId: u.uuid,
    characteristicId: s.uuid,
    success: function(e) {
      console.log("读成功", e.errMsg)
    },
    fail: function(e) {
      console.log("读失败", e.errMsg)
    }
  }), I = !1, h = 1, v = !1, m.splice(0, m.length)
}

function S(e) {
  var n = V(e),
    o = new Uint8Array(n.match(/[\da-f]{2}/gi).map((function(e) {
      return parseInt(e, 16)
    }))).buffer;
  console.log("主机写入的指令:", o), wx.writeBLECharacteristicValue({
    deviceId: g.deviceId,
    serviceId: u.uuid,
    characteristicId: s.uuid,
    value: o,
    success: function(e) {
      console.log("写入成功", e.errMsg)
    },
    fail: function(e) {
      console.log("写入失败", e.errMsg)
    }
  })
}

function T(e) {
  console.log("断开连接 >>>>>>deviceName: " + e.name), d = !1, f = !1, wx.closeBLEConnection({
    deviceId: e.deviceId
  }), wx.closeBluetoothAdapter({})
}

function V(e) {
  for (var n = (e = unescape(encodeURIComponent(e))).length, o = [], t = 0; t < n; t++) o[t >>> 2] |= (255 & e.charCodeAt(t)) << 24 - t % 4 * 8;
  for (var c = [], i = 0; i < n; i++) {
    var a = o[i >>> 2] >>> 24 - i % 4 * 8 & 255;
    c.push((a >>> 4).toString(16)), c.push((15 & a).toString(16))
  }
  return c.join("")
}

function R(e) {
  if ("string" == typeof e) return e;
  for (var n = new DataView(e), o = new Uint8Array(n.byteLength), t = n.byteLength, c = 0; c < t; c++) o[c] = n.getUint8(c);
  for (var i = "", a = e = o, r = 0; r < a.length; r++) {
    var l = a[r].toString(2),
      u = l.match(/^1+?(?=0)/);
    if (u && 8 == l.length) {
      for (var s = u[0].length, d = a[r].toString(2).slice(7 - s), f = 1; f < s; f++) d += a[f + r].toString(2).slice(2);
      i += String.fromCharCode(parseInt(d, 2)), r += s - 1
    } else i += String.fromCharCode(a[r])
  }
  return i
}
module.exports = {
  startBT: function(e) {
    C = 1, w = e, 0 == e.length ? k({
      deviceName: "PHASR",
      onDeviceNotFindCallback: function() {},
      onConnectedCallback: function() {},
      onDisconnectCallback: function() {},
      onReadCallback: function(e) {}
    }) : k({
      deviceName: e,
      onDeviceNotFindCallback: function() {},
      onConnectedCallback: function() {},
      onDisconnectCallback: function() {},
      onReadCallback: function(e) {}
    })
  },
  writeCommand: S,
  readCommand: E,
  writepara: function(e) {
    for (var n = "setparaBOOT," + e, o = 0; o < n.length;) {
      if (!(o + 6 < n.length)) {
        S(n.slice(o, o + n.length - 1));
        break
      }
      S(n.slice(o, o + 6)), o += 6
    }
  },
  writeparaALL: function() {
    S("setparaALL"), p = 0, E()
  },
  delayms: M,
  parseUtf8StringToHex: V,
  blecheck: function() {
    return C
  },
  bleisconnected: function() {
    return f
  },
  checkpay: function() {
    return v
  },
  exitread: function() {
    I = !0
  },
  readfinish: function() {
    return h
  }
};