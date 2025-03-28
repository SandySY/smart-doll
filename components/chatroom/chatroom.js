var e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../@babel/runtime/helpers/objectSpread2"),
  o = {
    scrollTop: 1e5,
    scrollWithAnimation: !0
  };
Component({
  properties: {
    envId: String,
    collection: String,
    groupId: String,
    groupName: String,
    userInfo: Object,
    onGetUserInfo: {
      type: Function
    },
    getOpenID: {
      type: Function
    }
  },
  data: {
    chats: [],
    textInputValue: "",
    openId: "",
    scrollTop: 0,
    scrollToMessage: "",
    hasKeyboard: !1
  },
  methods: {
    onGetUserInfo: function(e) {
      this.properties.onGetUserInfo(e)
    },
    getOpenID: function() {
      return this.properties.getOpenID()
    },
    mergeCommonCriteria: function(e) {
      return a({
        groupId: this.data.groupId
      }, e)
    },
    initRoom: function() {
      var e = this;
      return r(n().mark((function t() {
        return n().wrap((function(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e.try(r(n().mark((function t() {
                var r, a, o, c, s, i, u;
                return n().wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.initOpenID();
                    case 2:
                      return r = e.properties, a = r.envId, o = r.collection, c = e.db = wx.cloud.database({
                        env: a
                      }), s = c.command, t.next = 7, c.collection(o).where(e.mergeCommonCriteria()).orderBy("sendTimeTS", "desc").get();
                    case 7:
                      i = t.sent, u = i.data, console.log("init query chats", u), e.setData({
                        chats: u.reverse(),
                        scrollTop: 1e4
                      }), e.initWatch(u.length ? {
                        sendTimeTS: s.gt(u[u.length - 1].sendTimeTS)
                      } : {});
                    case 12:
                    case "end":
                      return t.stop()
                  }
                }), t)
              }))), "初始化失败");
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))()
    },
    initOpenID: function() {
      var e = this;
      return r(n().mark((function t() {
        return n().wrap((function(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.abrupt("return", e.try(r(n().mark((function t() {
                var r;
                return n().wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.getOpenID();
                    case 2:
                      r = t.sent, e.setData({
                        openId: r
                      });
                    case 4:
                    case "end":
                      return t.stop()
                  }
                }), t)
              }))), "初始化 openId 失败"));
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })))()
    },
    initWatch: function(e) {
      var t = this;
      return r(n().mark((function r() {
        return n().wrap((function(n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              t.try((function() {
                var n = t.properties.collection,
                  r = t.db,
                  a = r.command;
                console.warn("开始监听", e), t.messageListener = r.collection(n).where(t.mergeCommonCriteria(e)).watch({
                  onChange: t.onRealtimeMessageSnapshot.bind(t),
                  onError: function(e) {
                    !t.inited || t.fatalRebuildCount >= 10 ? t.showError(t.inited ? "监听错误，已断开" : "初始化监听失败", e, "重连", (function() {
                      t.initWatch(t.data.chats.length ? {
                        sendTimeTS: a.gt(t.data.chats[t.data.chats.length - 1].sendTimeTS)
                      } : {})
                    })) : t.initWatch(t.data.chats.length ? {
                      sendTimeTS: a.gt(t.data.chats[t.data.chats.length - 1].sendTimeTS)
                    } : {})
                  }
                })
              }), "初始化监听失败");
            case 1:
            case "end":
              return n.stop()
          }
        }), r)
      })))()
    },
    onRealtimeMessageSnapshot: function(n) {
      var r = this;
      if (console.warn("收到消息", n), "init" === n.type) this.setData({
        chats: [].concat(t(this.data.chats), t(t(n.docs).sort((function(e, t) {
          return e.sendTimeTS - t.sendTimeTS
        }))))
      }), this.scrollToBottom(), this.inited = !0;
      else {
        var o, c = !1,
          s = !1,
          i = t(this.data.chats),
          u = e(n.docChanges);
        try {
          var d = function() {
            var e = o.value;
            switch (e.queueType) {
              case "enqueue":
                s = e.doc._openid !== r.data.openId;
                var t = i.findIndex((function(t) {
                  return t._id === e.doc._id
                }));
                t > -1 ? "image" === i[t].msgType && i[t].tempFilePath ? i.splice(t, 1, a(a({}, e.doc), {}, {
                  tempFilePath: i[t].tempFilePath
                })) : i.splice(t, 1, e.doc) : (c = !0, i.push(e.doc))
            }
          };
          for (u.s(); !(o = u.n()).done;) d()
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        this.setData({
          chats: i.sort((function(e, t) {
            return e.sendTimeTS - t.sendTimeTS
          }))
        }), (s || c) && this.scrollToBottom()
      }
    },
    onConfirmSendText: function(e) {
      var o = this;
      return r(n().mark((function c() {
        return n().wrap((function(c) {
          for (;;) switch (c.prev = c.next) {
            case 0:
              o.try(r(n().mark((function r() {
                var c, s, i;
                return n().wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if (e.detail.value) {
                        n.next = 2;
                        break
                      }
                      return n.abrupt("return");
                    case 2:
                      return c = o.properties.collection, s = o.db, s.command, i = {
                        _id: "".concat(Math.random(), "_").concat(Date.now()),
                        groupId: o.data.groupId,
                        avatar: o.data.userInfo.avatarUrl,
                        nickName: o.data.userInfo.nickName,
                        msgType: "text",
                        textContent: e.detail.value,
                        sendTime: new Date,
                        sendTimeTS: Date.now()
                      }, o.setData({
                        textInputValue: "",
                        chats: [].concat(t(o.data.chats), [a(a({}, i), {}, {
                          _openid: o.data.openId,
                          writeStatus: "pending"
                        })])
                      }), o.scrollToBottom(!0), n.next = 10, s.collection(c).add({
                        data: i
                      });
                    case 10:
                      o.setData({
                        chats: o.data.chats.map((function(e) {
                          return e._id === i._id ? a(a({}, e), {}, {
                            writeStatus: "written"
                          }) : e
                        }))
                      });
                    case 11:
                    case "end":
                      return n.stop()
                  }
                }), r)
              }))), "发送文字失败");
            case 1:
            case "end":
              return c.stop()
          }
        }), c)
      })))()
    },
    onChooseImage: function(e) {
      var o = this;
      return r(n().mark((function e() {
        return n().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              wx.chooseImage({
                count: 1,
                sourceType: ["album", "camera"],
                success: function() {
                  var e = r(n().mark((function e(c) {
                    var s, i, u, d;
                    return n().wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          s = o.properties, i = s.envId, u = s.collection, d = {
                            _id: "".concat(Math.random(), "_").concat(Date.now()),
                            groupId: o.data.groupId,
                            avatar: o.data.userInfo.avatarUrl,
                            nickName: o.data.userInfo.nickName,
                            msgType: "image",
                            sendTime: new Date,
                            sendTimeTS: Date.now()
                          }, o.setData({
                            chats: [].concat(t(o.data.chats), [a(a({}, d), {}, {
                              _openid: o.data.openId,
                              tempFilePath: c.tempFilePaths[0],
                              writeStatus: 0
                            })])
                          }), o.scrollToBottom(!0), wx.cloud.uploadFile({
                            cloudPath: "".concat(o.data.openId, "/").concat(Math.random(), "_").concat(Date.now(), ".").concat(c.tempFilePaths[0].match(/\.(\w+)$/)[1]),
                            filePath: c.tempFilePaths[0],
                            config: {
                              env: i
                            },
                            success: function(e) {
                              o.try(r(n().mark((function t() {
                                return n().wrap((function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                    case 0:
                                      return t.next = 2, o.db.collection(u).add({
                                        data: a(a({}, d), {}, {
                                          imgFileID: e.fileID
                                        })
                                      });
                                    case 2:
                                    case "end":
                                      return t.stop()
                                  }
                                }), t)
                              }))), "发送图片失败")
                            },
                            fail: function(e) {
                              o.showError("发送图片失败", e)
                            }
                          }).onProgressUpdate((function(e) {
                            var t = e.progress;
                            o.setData({
                              chats: o.data.chats.map((function(e) {
                                return e._id === d._id ? a(a({}, e), {}, {
                                  writeStatus: t
                                }) : e
                              }))
                            })
                          }));
                        case 6:
                        case "end":
                          return e.stop()
                      }
                    }), e)
                  })));
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                }()
              });
            case 1:
            case "end":
              return e.stop()
          }
        }), e)
      })))()
    },
    onMessageImageTap: function(e) {
      wx.previewImage({
        urls: [e.target.dataset.fileid]
      })
    },
    scrollToBottom: function(e) {
      var t = this;
      if (e) return console.log("force scroll to bottom"), void this.setData(o);
      this.createSelectorQuery().select(".body").boundingClientRect((function(e) {
        t.createSelectorQuery().select(".body").scrollOffset((function(n) {
          n.scrollTop + 3 * e.height > n.scrollHeight && (console.log("should scroll to bottom"), t.setData(o))
        })).exec()
      })).exec()
    },
    onScrollToUpper: function() {
      var e = this;
      return r(n().mark((function r() {
        var a, o, c, s, i;
        return n().wrap((function(n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              if (!e.db || !e.data.chats.length) {
                n.next = 9;
                break
              }
              return o = e.properties.collection, c = e.db.command, n.next = 5, e.db.collection(o).where(e.mergeCommonCriteria({
                sendTimeTS: c.lt(e.data.chats[0].sendTimeTS)
              })).orderBy("sendTimeTS", "desc").get();
            case 5:
              s = n.sent, i = s.data, (a = e.data.chats).unshift.apply(a, t(i.reverse())), e.setData({
                chats: e.data.chats,
                scrollToMessage: "item-".concat(i.length),
                scrollWithAnimation: !1
              });
            case 9:
            case "end":
              return n.stop()
          }
        }), r)
      })))()
    },
    try: function(e, t) {
      var a = this;
      return r(n().mark((function r() {
        return n().wrap((function(n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.prev = 0, n.next = 3, e();
            case 3:
              n.next = 8;
              break;
            case 5:
              n.prev = 5, n.t0 = n.catch(0), a.showError(t, n.t0);
            case 8:
            case "end":
              return n.stop()
          }
        }), r, null, [
          [0, 5]
        ])
      })))()
    },
    showError: function(e, t, n, r) {
      console.error(e, t), wx.showModal({
        title: e,
        content: t.toString(),
        showCancel: !!n,
        confirmText: n,
        success: function(e) {
          e.confirm && r()
        }
      })
    }
  },
  ready: function() {
    global.chatroom = this, this.initRoom(), this.fatalRebuildCount = 0
  }
});