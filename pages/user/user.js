var t, a, e, n, o, i, r, l, s, c = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  d = require("../../@babel/runtime/helpers/asyncToGenerator"),
  u = getApp(),
  E = require("../../utils/ble.js"),
  O = "100vh",
  p = 0,
  g = ["0", "1", "3", "4", "5003", "5118", "106", "103", "110", "111", "5", "4003", "4106", "4115", "4119", "4105", "4117", "4100", "4103", "4144", "4278", "4143", "4140", "4129", "4149", "4254", "4206", "4226", "BV700_V2_streaming", "BV705_streaming", "BV701_V2_streaming", "BV001_V2_streaming", "BV700_streaming", "BV406_V2_streaming", "BV407_V2_streaming", "BV407_streaming", "BV001_streaming", "BV002_streaming", "BV701_streaming", "BV123_streaming", "BV120_streaming", "BV119_streaming", "BV115_streaming", "BV107_streaming", "BV100_streaming", "BV104_streaming", "BV004_streaming", "BV113_streaming", "BV102_streaming", "BV405_streaming", "BV007_streaming", "BV009_streaming\t", "BV419_streaming", "BV415_streaming", "BV008_streaming", "BV408_streaming", "BV426_streaming", "BV428_streaming", "BV403_streaming", "BV158_streaming", "BV157_streaming", "BR001_streaming", "BV410_streaming", "BV411_streaming", "BV437_streaming", "BV412_streaming", "BV159_streaming", "BV418_streaming", "BV120_streaming", "BV142_streaming", "BV143_streaming", "BV056_streaming", "BV005_streaming", "BV064_streaming", "BV051_streaming", "BV063_streaming", "BV417_streaming", "BV050_streaming", "BV061_streaming", "BV401_streaming", "BV402_streaming", "BV006_streaming", "BV011_streaming", "BV012_streaming", "BV034_streaming", "BV033_streaming", "BV511_streaming", "BV505_streaming", "BV138_streaming", "BV027_streaming", "BV502_streaming", "BV503_streaming", "BV504_streaming", "BV421_streaming", "BV702_streaming", "BV506_streaming", "BV040_streaming", "BV516_streaming", "BV520_streaming", "BV521_streaming", "BV421_streaming", "BV522_streaming", "BV702_streaming", "BV700_streaming", "BV524_streaming", "BV531_streaming", "BV530_streaming", "BV421_streaming", "BV702_streaming", "BV700_streaming", "BV065_streaming", "BV421_streaming", "BV702_streaming", "BV700_streaming", "BV421_streaming", "BV421_streaming", "BV421_streaming", "BV702_streaming", "BV700_streaming", "BV021_streaming", "BV020_streaming", "BV704_streaming", "BV210_streaming", "BV704_streaming", "BV217_streaming", "BV704_streaming", "BV213_streaming", "BV704_streaming", "BV025_streaming", "BV227_streaming", "BV704_streaming", "BV026_streaming", "BV424_streaming", "BV704_streaming", "BV212_streaming", "BV019_streaming", "BV221_streaming", "BV423_streaming", "BV704_streaming", "BV214_streaming", "BV226_streaming", "BV216_streaming"],
  f = ["pleased", "sorry", "annoyed", "happy", "sad", "angry", "scare", "hate", "surprise", "tear", "novel_dialog", "customer_service", "professional", "serious", "narrator", "narrator_immersive", "comfort", "lovey-dovey", "energetic", "conniving", "tsundere", "charming", "storytelling", "radio", "yoga", "advertising", "assistant", "chat"],
  h = ["cn", "en", "ja", "thth", "vivn", "id", "ptbr", "esmx", "zh_dongbei", "zh_yueyu", "zh_shanghai", "zh_xian", "zh_chengdu", "zh_taipu", "zh_guangxi"],
  I = ["https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie-speed-pro-128k", "https://qianfan.baidubce.com/v2/app/conversation", "https://api.coze.cn/v3/chat", "https://api.coze.cn/v3/chat", "https://api.coze.cn/v3/chat", "https://api.coze.cn/v3/chat", "https://api.coze.cn/v3/chat", "https://api.coze.cn/v3/chat", "https://api.coze.cn/v1/workflow/stream_run"],
  S = ["", "6f1128a6-fe9b-4a76-b642-d0b1e0647b90", "7431489034083778595", "7469410526263590946", "7469404320749355020", "7469407409098981416", "7469408588893634601", "", ""];
Page({
  data: {
    wifiList: [],
    array: ["度小美-标准女主播\t0\t资讯", "度小宇-亲切男声\t1\t对话助手", "度逍遥-情感男声\t 3\t小说", "度丫丫-童声\t4\t小说", "度逍遥-情感男声\t5003\t小说", "度小鹿-甜美女声\t5118\t对话助手", "度博文-专业男主播\t106\t资讯", "度米朵-可爱童声\t103\t对话助手", "度小童-童声主播\t110\t资讯", "度小萌-软萌妹子\t111\t小说", "度小娇-成熟女主播\t5\t资讯", "度逍遥-情感男声\t4003\t小说", "度博文-专业男主播\t4106\t资讯", "度小贤-电台男主播\t4115\t资讯", "度小鹿-甜美女声\t4119\t对话助手", "度灵儿-清激女声\t4105\t对话助手", "度小乔-活泼女声\t4117\t对话助手", "度小雯-活力女主播\t4100\t资讯", "度米朵-可爱女声\t4103\t对话助手", "度姗姗-娱乐女声\t4144\t配音", "度小贝-知识女主播\t4278\t资讯", "度清风-配音男声\t 4143\t配音", "度小新-专业女主播\t4140\t资讯", "度小彦-知识男主播\t4129\t资讯", "度星河-广告男声\t4149\t配音", "度小清-广告女声\t4254\t配音", "度博文-综艺男声\t4206\t配音", "南方-电台女主播\t4226\t资讯", "灿灿2.0（豆包付费）", "炀炀\tBV705_streaming", "擎苍2.0（豆包付费）", "通用女声2.0（豆包付费）", "灿灿\tBV700_streaming", "超自然音色-梓梓2.0（豆包付费）", "超自然音色-燃燃2.0（豆包付费）", "超自然音色-燃燃（豆包付费）", "通用女声\tBV001_streaming", "通用男声\tBV002_streaming", "擎苍\tBV701_streaming", "阳光青年（豆包付费）", "反卷青年（豆包付费）", "通用赘婿\tBV119_streaming", "古风少御\tBV115_streaming", "霸气青叔（豆包付费）", "质朴青年（豆包付费）", "温柔淑女（豆包付费）", "开朗青年（豆包付费）", "甜宠少御\tBV113_streaming", "儒雅青年\tBV102_streaming", "甜美小源（豆包付费）", "亲切女声\tBV007_streaming", "知性女声（豆包付费）", "诚诚（豆包付费）", "童童（豆包付费）", "亲切男声（豆包付费）", "译制片男声（豆包付费）", "懒小羊（豆包付费）", "清新文艺女声（豆包付费）", "鸡汤女声（豆包付费）", "智慧老者（豆包付费）", "慈爱姥姥（豆包付费）", "说唱小哥（豆包付费）", "活力解说男\t（豆包付费）", "影视解说小帅（豆包付费）", "解说小帅-多情感（豆包付费）", "影视解说小美（豆包付费）", "纨绔青年（豆包付费）", "直播一姐（豆包付费）", "反卷青年（豆包付费）", "沉稳解说男（豆包付费）", "潇洒青年（豆包付费）", "阳光男声\tBV056_streaming", "活泼女声\tBV005_streaming", "小萝莉（豆包付费）", "特色音色\t奶气萌娃\tBV051_streaming", "动漫海绵（豆包付费）", "动漫海星（豆包付费）", "动漫小新（豆包付费）", "天才童声（豆包付费）", "广告配音\t促销男声（豆包付费）", "促销女声（豆包付费）", "磁性男声（豆包付费）", "新闻播报\t新闻女声（豆包付费）", "新闻男声（豆包付费）", "教育场景\t知性姐姐-双语\tBV034_streaming", "温柔小哥\tBV033_streaming", "美式英语\t慵懒女声-Ava（豆包付费）", "议论女声-Alicia（豆包付费）", "情感女声-Lawrence（豆包付费）", "美式女声-Amelia\t（豆包付费）", "讲述女声-Amanda（豆包付费）", "活力女声-Ariana（豆包付费）", "活力男声-Jackson\t（豆包付费）", "天才少女（豆包付费）", "Stefan（豆包付费）", "天真萌娃-Lily（豆包付费）", "英式英语\t亲切女声-Anna（豆包付费）", "澳洲英语\t澳洲男声-Henry（豆包付费）", "日语\t元气少女（豆包付费）", "萌系少女（豆包付费）", "天才少女（豆包付费）", "气质女声\tBV522_streaming", "Stefan（豆包付费）", "灿灿\tBV700_streaming", "日语男声\tBV524_streaming", "葡萄牙语\t活力男声Carlos（巴西地区）（豆包付费）", "活力女声（巴西地区）（豆包付费）", "天才少女\t（豆包付费）", "Stefan（豆包付费）", "灿灿\tBV700_streaming", "西班牙语\t气质御姐（墨西哥地区）（豆包付费）", "天才少女（豆包付费）", "Stefan（豆包付费）", "灿灿\tBV700_streaming", "泰语\t天才少女（豆包付费）", "越南语\t天才少女（豆包付费）", "印尼语\t天才少女（豆包付费）", "Stefan\t（豆包付费）", "灿灿\tBV700_streaming", "东北话\t东北老铁\tBV021_streaming", "东北丫头\t（豆包付费）", "方言灿灿（豆包付费）", "西安话\t西安佟掌柜（豆包付费）", "方言灿灿（豆包付费）", "上海话\t沪上阿姐（豆包付费）", "方言灿灿（豆包付费）", "广西普通话\t广西表哥\tBV213_streaming", "方言灿灿（豆包付费）", "台湾普通话\t甜美台妹（豆包付费）", "台普男声\t（豆包付费）", "方言灿灿（豆包付费）", "粤语\t港剧男神（豆包付费）", "广东女仔（豆包付费）", "方言灿灿（豆包付费）", "天津话\t相声演员（豆包付费）", "川渝话\t重庆小伙（豆包付费）", "四川甜妹儿\t（豆包付费）", "重庆幺妹儿（豆包付费）", "方言灿灿（成都）（豆包付费）", "郑州话\t乡村企业家\t（豆包付费）", "湖南普通话\t湖南妹坨（豆包付费）", "长沙话\t长沙靓女（豆包付费）"],
    emotionarray: ["愉悦 pleased", "抱歉 sorry", "嗔怪 annoyed", "开心 happy", "悲伤 sad", "愤怒 angry", "害怕 scare", "厌恶 hate", "惊讶 surprise", "哭腔 tear", "平和 novel_dialog", "客服 customer_service", "专业 professional", "严肃 serious", "旁白-舒缓 narrator", "旁白-沉浸 narrator_immersive", "安慰鼓励 comfort", "撒娇 lovey-dovey", "可爱元气 energetic", "绿茶 conniving", "傲娇 tsundere", "娇媚 charming", "讲故事 storytelling", "情感电台 radio", "瑜伽 yoga", "广告 advertising", "助手 assistant", "自然对话 chat"],
    languagearray: ["中文 cn", "英语 en", "日语 ja", "泰语 thth", "越南语 vivn", "印尼语 id", "葡萄牙语 ptbr", "西班牙语esmx", "东北 zh_dongbei", "粤语 zh_yueyu", "上海 zh_shanghai", "西安 zh_xian", "成都 zh_chengdu", "台湾普通话 zh_taipu", "广西普通话 zh_guangxi"],
    modelarray: ["文心一言大模型", "百度智能体", "豆包智能体", "deepseek大模型", "通义千文", "智谱清言", "kimi大模型", "自定义智能体", "自定义工作流"],
    pickerIndex: 0,
    emotionpickerIndex: 0,
    languagepickerIndex: 0,
    modelpickerIndex: 0,
    peoplelength: [1, 2, 3, 4, 5, 6],
    objectArray: [{
      id: 0,
      name: 1
    }, {
      id: 1,
      name: 2
    }, {
      id: 2,
      name: 3
    }, {
      id: 3,
      name: 4
    }, {
      id: 5,
      name: 6
    }],
    form: !0,
    networkType: !0,
    submit: "submit",
    index: 0,
    peoplename: "小伙伴",
    percent: 0,
    showprogress: !0,
    BOOT: "",
    WELCOME: "",
    SLEEP: "",
    WAIT_VOICE: "",
    WAKE_VOICE: "",
    WAKE_COM: "",
    WAKE_IO: "",
    FAIL: "",
    PASSWORD: "",
    SERVICE_ID: "",
    AI_ACCESS_KEY: "",
    WEBSOCKET_URI: "",
    CARD_ID: "",
    ESPTOUCH: "",
    BUADRATE: "",
    ASRMODE: "",
    COMTIMEOUT: "",
    ASRTIME: "",
    ASRTIMEOUT: "",
    ONLINE: "",
    IOTCMD: "",
    SHAKESTOP: "",
    BLUETOOTH: "",
    FINDTFMP3: "",
    MULTI_ROUND: "",
    SSID: "",
    PIT: "",
    SPD: "",
    VOL: "",
    PER: "",
    EMOTION: "pleased",
    LANGUAGE: "cn",
    src: "../../images/scancode1.jpg"
  },
  BOOT: function(t) {
    this.data.BOOT = t.detail.value
  },
  WELCOME: function(t) {
    this.data.WELCOME = t.detail.value
  },
  SLEEP: function(t) {
    this.data.SLEEP = t.detail.value
  },
  WAIT_VOICE: function(t) {
    this.data.WAIT_VOICE = t.detail.value
  },
  WAKE_VOICE: function(t) {
    this.data.WAKE_VOICE = t.detail.value
  },
  WAKE_COM: function(t) {
    this.data.WAKE_COM = t.detail.value
  },
  WAKE_IO: function(t) {
    this.data.WAKE_IO = t.detail.value
  },
  FAIL: function(t) {
    this.data.FAIL = t.detail.value
  },
  SSID: function(t) {
    this.data.SSID = t.detail.value
  },
  PASSWORD: function(t) {
    this.data.PASSWORD = t.detail.value
  },
  SERVICE_ID: function(t) {
    this.data.SERVICE_ID = t.detail.value
  },
  AI_ACCESS_KEY: function(t) {
    this.data.AI_ACCESS_KEY = t.detail.value
  },
  WEBSOCKET_URI: function(t) {
    this.data.WEBSOCKET_URI = t.detail.value
  },
  CARD_ID: function(t) {
    this.data.CARD_ID = t.detail.value
  },
  BUADRATE: function(t) {
    this.data.BUADRATE = t.detail.value
  },
  ASRMODE: function(t) {
    this.data.ASRMODE = t.detail.value
  },
  COMTIMEOUT: function(t) {
    this.data.COMTIMEOUT = t.detail.value
  },
  ASRTIME: function(t) {
    this.data.ASRTIME = t.detail.value
  },
  ASRTIMEOUT: function(t) {
    this.data.ASRTIMEOUT = t.detail.value
  },
  ONLINE: function(t) {
    this.data.ONLINE = t.detail.value
  },
  IOTCMD: function(t) {
    this.data.IOTCMD = t.detail.value
  },
  SHAKESTOP: function(t) {
    this.data.SHAKESTOP = t.detail.value
  },
  BLUETOOTH: function(t) {
    this.data.BLUETOOTH = t.detail.value
  },
  FINDTFMP3: function(t) {
    this.data.FINDTFMP3 = t.detail.value
  },
  MULTI_ROUND: function(t) {
    this.data.MULTI_ROUND = t.detail.value
  },
  PIT: function(t) {
    this.data.PIT = t.detail.value
  },
  SPD: function(t) {
    this.data.SPD = t.detail.value
  },
  VOL: function(t) {
    this.data.VOL = t.detail.value
  },
  PER: function(t) {
    this.data.PER = t.detail.value
  },
  EMOTION: function(t) {
    this.data.EMOTION = t.detail.value
  },
  LANGUAGE: function(t) {
    this.data.LANGUAGE = t.detail.value
  },
  bindPickerChange: function(t) {
    var a = t.currentTarget.dataset.index;
    1 == a ? t.detail.value > 27 && "0" == this.data.IOTCMD ? wx.showModal({
      content: "视频模式不支持豆包语音",
      showCancel: !1
    }) : -1 !== this.data.array[t.detail.value].indexOf("付费") ? wx.showModal({
      content: "无法使用付费音色",
      showCancel: !1
    }) : (this.setData({
      pickerIndex: t.detail.value
    }), this.data.PER = g[t.detail.value]) : 2 == a ? (this.setData({
      emotionpickerIndex: t.detail.value
    }), this.data.EMOTION = f[t.detail.value]) : 3 == a ? (this.setData({
      languagepickerIndex: t.detail.value
    }), this.data.LANGUAGE = h[t.detail.value]) : 4 == a && (this.setData({
      modelpickerIndex: t.detail.value
    }), 0 == t.detail.value ? this.setData({
      WEBSOCKET_URI: "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie-speed-pro-128k",
      ASRMODE: "0",
      SERVICE_ID: "",
      AI_ACCESS_KEY: ""
    }) : 1 == t.detail.value ? this.setData({
      WEBSOCKET_URI: "https://qianfan.baidubce.com/v2/app/conversation",
      ASRMODE: "3",
      SERVICE_ID: S[1],
      AI_ACCESS_KEY: ""
    }) : 2 == t.detail.value ? this.setData({
      WEBSOCKET_URI: "https://api.coze.cn/v3/chat",
      ASRMODE: "3",
      SERVICE_ID: S[2],
      AI_ACCESS_KEY: ""
    }) : 3 == t.detail.value ? this.setData({
      WEBSOCKET_URI: "https://api.coze.cn/v3/chat",
      ASRMODE: "3",
      SERVICE_ID: S[3],
      AI_ACCESS_KEY: ""
    }) : 4 == t.detail.value ? this.setData({
      WEBSOCKET_URI: "https://api.coze.cn/v3/chat",
      ASRMODE: "3",
      SERVICE_ID: S[4],
      AI_ACCESS_KEY: ""
    }) : 5 == t.detail.value ? this.setData({
      WEBSOCKET_URI: "https://api.coze.cn/v3/chat",
      ASRMODE: "3",
      SERVICE_ID: S[5],
      AI_ACCESS_KEY: ""
    }) : 6 == t.detail.value ? this.setData({
      WEBSOCKET_URI: "https://api.coze.cn/v3/chat",
      ASRMODE: "3",
      SERVICE_ID: S[6],
      AI_ACCESS_KEY: ""
    }) : 7 == t.detail.value ? this.setData({
      WEBSOCKET_URI: "https://api.coze.cn/v3/chat",
      ASRMODE: "3",
      SERVICE_ID: "",
      AI_ACCESS_KEY: ""
    }) : 8 == t.detail.value && this.setData({
      WEBSOCKET_URI: "https://api.coze.cn/v1/workflow/stream_run",
      ASRMODE: "3",
      SERVICE_ID: "",
      AI_ACCESS_KEY: ""
    }))
  },
  onLoad: function(t) {
    wx.getSetting({
      success: function(t) {
        t.authSetting["scope.userLocation"]
      }
    }), wx.getSetting({
      success: function(t) {
        t.authSetting["scope.userInfo"] && console.log("已经授权", t)
      }
    }), wx.cloud.callFunction({
      name: "login",
      data: {},
      success: function(t) {
        console.log("[云函数] [login] user openid: ", t), u.globalData.openid = t.result.openid
      },
      fail: function(t) {
        console.error("[云函数] [login] 调用失败", t)
      }
    }), p = 0
  },
  onReady: function() {},
  onShow: function() {
    0 == u.globalData.lockpanel && (p = 0)
  },
  onHide: function() {
    p = 1, u.globalData.lockpanel = !0
  },
  onUnload: function() {
    clearInterval(s)
  },
  bindPickerChange1: function(t) {
    console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
      index: t.detail.value
    })
  },
  bindDateChange: function(t) {
    this.setData({
      date: t.detail.value
    })
  },
  bindTimeChange: function(t) {
    this.setData({
      time: t.detail.value
    })
  },
  tiemselect: function() {
    var t = new Date,
      a = t.getFullYear(),
      e = t.getMonth() + 1,
      n = t.getDate(),
      r = t.getHours(),
      l = t.getMinutes(),
      s = e + 1;
    console.log(s), a + "-" + e + "-" + n, r + ":" + l, e < 10 && (e = "0" + e), s < 10 && (s = "0" + s), n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), l < 10 && (l = "0" + l), i = a + "-" + e + "-" + n, o = r + ":" + l;
    var c = a + "-" + s + "-" + n;
    console.log(i), console.log(o), this.setData({
      endtime: c,
      startdate: i,
      date: i,
      time: o
    })
  },
  bindradio: function(t) {
    var a;
    console.log(t.detail.value), a = "司机" == t.detail.value ? "剩载客" : "小伙伴", this.setData({
      peoplename: a
    })
  },
  indexFlexQ: function() {
    r = "q", this.qsfunction()
  },
  indexFlexZ: function() {
    r = "z", this.qsfunction()
  },
  qsfunction: function() {
    O = "100vh", this.donghua(), this.setData({
      city_select: !0,
      provinces: u.data.province,
      citys: "",
      qZ: r,
      areas: "",
      carLengthType: !1
    })
  },
  donghua2: function() {
    O = "0vh";
    var t = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 250,
      timingFunction: "ease",
      delay: 0
    });
    t.skew(45, -45).rotate(-180, 180).scale3d(.5, .5, .5).height("50vh").step(), t.skew(-45, -45).rotate(180, -180).scale3d(.1, .1, .1).height(O).step(), this.setData({
      animationData: t.export()
    }), setTimeout(function() {}.bind(this), 700)
  },
  donghua: function() {
    var t = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 500,
      timingFunction: "ease",
      delay: 0
    });
    setTimeout(function() {
      t.height(O).step(), this.setData({
        animationData: t.export()
      })
    }.bind(this), 0)
  },
  resetBottom: function() {
    0 == this.data.citys.length ? this.setData({
      provinces: "",
      citys: u.data.city[t].cities,
      areas: ""
    }) : this.setData({
      provinces: u.data.province,
      citys: "",
      areas: ""
    })
  },
  provincesBottom: function(a) {
    t = a.target.dataset.shengname, this.setData({
      sheng: this.data.provinces[t],
      provinces: "",
      citys: u.data.city[t].cities,
      resetButton: !0
    })
  },
  citysBottom: function(e) {
    a = e.target.dataset.shiname, this.setData({
      provinces: "",
      citys: "",
      areas: u.data.area[t][a].areaes
    })
  },
  areasBottom: function(o) {
    e = o.target.dataset.xianname;
    u.data.province[t];
    var i = u.data.city[t].cities[a],
      l = u.data.area[t][a].areaes[e];
    this.donghua2(), n = i + "-" + l, "q" === r ? this.setData({
      pickPointsq: n
    }) : this.setData({
      pickPointsz: n
    })
  },
  colosecity: function() {
    this.donghua2()
  },
  formReset: function() {
    console.log("form发生了reset事件")
  },
  loadpara: function() {
    console.log(u.globalData.parastr)
  },
  bdapi: function() {
    1 == u.globalData.netflag || 0 != E.bleisconnected() && 1 != p ? 0 != u.globalData.parastr.length ? this.setData({
      WEBSOCKET_URI: "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie-speed-pro-128k",
      ASRMODE: "0"
    }) : wx.showModal({
      content: "请先读取参数",
      showCancel: !1
    }) : wx.showModal({
      content: "设备未连接",
      showCancel: !1
    })
  },
  bdbot: function() {
    1 == u.globalData.netflag || 0 != E.bleisconnected() && 1 != p ? 0 != u.globalData.parastr.length ? this.setData({
      WEBSOCKET_URI: "https://qianfan.baidubce.com/v2/app/conversation",
      ASRMODE: "3"
    }) : wx.showModal({
      content: "请先读取参数",
      showCancel: !1
    }) : wx.showModal({
      content: "设备未连接",
      showCancel: !1
    })
  },
  cozebot: function() {
    1 == u.globalData.netflag || 0 != E.bleisconnected() && 1 != p ? 0 != u.globalData.parastr.length ? this.setData({
      WEBSOCKET_URI: "https://api.coze.cn/v3/chat",
      ASRMODE: "3"
    }) : wx.showModal({
      content: "请先读取参数",
      showCancel: !1
    }) : wx.showModal({
      content: "设备未连接",
      showCancel: !1
    })
  },
  onlineupdate: function() {
    if (1 == u.globalData.netflag) console.log(u.globalData.localurl), wx.request({
      url: u.globalData.localurl,
      method: "POST",
      timeout: 3e3,
      data: "updateapp http://39.106.69.83:8000/app.bin",
      header: {
        "content-type": "application/json"
      },
      success: function(t) {
        console.log(t.data), "ok" == t.data && wx.showModal({
          content: "升级时间大概1到2分钟，升级完成会自动重新联网，请不要断电！",
          showCancel: !1
        })
      },
      fail: function(t) {
        console.error(t)
      }
    });
    else {
      if (0 == E.bleisconnected() || 1 == p) return void wx.showModal({
        content: "设备未连接",
        showCancel: !1
      });
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      E.writeCommand("updateapp")
    }
  },
  reboot: function() {
    if (1 == u.globalData.netflag) console.log(u.globalData.localurl), wx.request({
      url: u.globalData.localurl,
      method: "POST",
      timeout: 3e3,
      data: "reboot",
      header: {
        "content-type": "application/json"
      },
      success: function(t) {
        console.log(t.data), "ok" == t.data && wx.showModal({
          content: "重启设备成功",
          showCancel: !1
        })
      },
      fail: function(t) {
        console.error(t)
      }
    });
    else {
      if (0 == E.bleisconnected() || 1 == p) return void wx.showModal({
        content: "设备未连接",
        showCancel: !1
      });
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      E.writeCommand("reboot")
    }
  },
  formSubmitevet: function() {
    wx.showModal({
      title: "错误",
      content: l,
      showCancel: !1,
      success: function(t) {}
    })
  },
  torequire: function() {
    wx.getStorage({
      key: "tel",
      success: function(t) {}
    })
  },
  match: function() {
    var t = 0,
      a = 0,
      e = 99;
    t = 1 == this.data.quitemode ? 1 : 0, a = 1 == this.data.msgremind ? 1 : 0, e = this.data.alarmpara < 10 ? 10 : 100 == this.data.alarmpara ? 99 : this.data.alarmpara, u.globalData.client && u.globalData.client.connected ? u.globalData.client.publish("gpstalk/p2p/GID_GPSTALK@@@" + this.data.imei, this.data.imei + "," + u.globalData.openid + "," + t + "," + e + ",1," + a + ",0,260", {
      qos: 0,
      retain: !0,
      dup: !0
    }) : (u.globalData.client.pingreq(), wx.showToast({
      title: "网络断开请5秒后重试！",
      icon: "none",
      duration: 2e3
    }))
  },
  remoteopen: function() {
    var t = this;
    if (1 == u.globalData.netflag) console.log(u.globalData.localurl), wx.request({
      url: u.globalData.localurl,
      method: "POST",
      timeout: 3e3,
      data: "readparanet",
      header: {
        "content-type": "application/json"
      },
      success: function(a) {
        u.globalData.parastr = JSON.stringify(a.data);
        var e = JSON.parse(u.globalData.parastr);
        "" == t.data.SSID ? t.setData({
          BOOT: e.BOOT,
          WELCOME: e.WELCOME,
          SLEEP: e.SLEEP,
          WAIT_VOICE: e.WAIT_VOICE,
          WAKE_VOICE: e.WAKE_VOICE,
          WAKE_COM: e.WAKE_COM,
          WAKE_IO: e.WAKE_IO,
          FAIL: e.FAIL,
          SSID: e.SSID,
          PASSWORD: e.PASSWORD,
          SERVICE_ID: e.SERVICE_ID,
          AI_ACCESS_KEY: e.AI_ACCESS_KEY,
          WEBSOCKET_URI: e.WEBSOCKET_URI,
          CARD_ID: e.CARD_ID,
          BUADRATE: e.BUADRATE,
          ASRMODE: e.ASRMODE,
          COMTIMEOUT: e.COMTIMEOUT,
          ASRTIME: e.ASRTIME,
          ASRTIMEOUT: e.ASRTIMEOUT,
          ONLINE: e.ONLINE,
          IOTCMD: e.IOTCMD,
          SHAKESTOP: e.SHAKESTOP,
          BLUETOOTH: e.BLUETOOTH,
          FINDTFMP3: e.FINDTFMP3,
          MULTI_ROUND: e.MULTI_ROUND,
          PIT: e.PIT,
          SPD: e.SPD,
          VOL: e.VOL,
          PER: e.PER,
          EMOTION: e.EMOTION,
          LANGUAGE: e.LANGUAGE
        }) : t.setData({
          BOOT: e.BOOT,
          WELCOME: e.WELCOME,
          SLEEP: e.SLEEP,
          WAIT_VOICE: e.WAIT_VOICE,
          WAKE_VOICE: e.WAKE_VOICE,
          WAKE_COM: e.WAKE_COM,
          WAKE_IO: e.WAKE_IO,
          FAIL: e.FAIL,
          SERVICE_ID: e.SERVICE_ID,
          AI_ACCESS_KEY: e.AI_ACCESS_KEY,
          WEBSOCKET_URI: e.WEBSOCKET_URI,
          CARD_ID: e.CARD_ID,
          BUADRATE: e.BUADRATE,
          ASRMODE: e.ASRMODE,
          COMTIMEOUT: e.COMTIMEOUT,
          ASRTIME: e.ASRTIME,
          ASRTIMEOUT: e.ASRTIMEOUT,
          ONLINE: e.ONLINE,
          IOTCMD: e.IOTCMD,
          SHAKESTOP: e.SHAKESTOP,
          BLUETOOTH: e.BLUETOOTH,
          FINDTFMP3: e.FINDTFMP3,
          MULTI_ROUND: e.MULTI_ROUND,
          PIT: e.PIT,
          SPD: e.SPD,
          VOL: e.VOL,
          PER: e.PER,
          EMOTION: e.EMOTION,
          LANGUAGE: e.LANGUAGE
        });
        for (var n = 0; n < 142; n++) g[n] == e.PER && t.setData({
          pickerIndex: n
        });
        t.data.PER = g[t.data.pickerIndex];
        for (var o = 0; o < 28; o++) f[o] == e.EMOTION && t.setData({
          emotionpickerIndex: o
        });
        t.data.EMOTION = f[t.data.emotionpickerIndex];
        for (var i = 0; i < 15; i++) h[i] == e.LANGUAGE && t.setData({
          languagepickerIndex: i
        });
        t.data.LANGUAGE = h[t.data.languagepickerIndex], t.setData({
          modelpickerIndex: 7
        });
        for (var r = 0; r < 9; r++) {
          if (0 == r && I[r] == e.WEBSOCKET_URI) {
            t.setData({
              modelpickerIndex: r
            });
            break
          }
          if (r > 0 && r < 7 && S[r] == e.SERVICE_ID) {
            t.setData({
              modelpickerIndex: r
            });
            break
          }
          if (r > 6 && I[r] == e.WEBSOCKET_URI) {
            t.setData({
              modelpickerIndex: r
            });
            break
          }
        }
        wx.showModal({
          content: "读取参数成功",
          showCancel: !1
        })
      },
      fail: function(t) {
        console.error(t), wx.showModal({
          content: "读取参数失败，请和语音设备连接到同一热点或者连接到语音设备PHASR热点",
          showCancel: !1
        })
      }
    });
    else {
      if (0 == E.bleisconnected() || 1 == p) return void wx.showModal({
        content: "设备未连接",
        showCancel: !1
      });
      u.globalData.parastr = "", E.writeCommand("readparaALL"), E.readCommand(), t.setData({
        showprogress: !0,
        percent: 0
      }), clearInterval(s);
      var a = 0;
      s = setInterval((function() {
        if (a++, t.setData({
            showprogress: !1,
            percent: a
          }), 0 == E.readfinish() && a < 100) {
          if (a = 100, E.exitread(), !(u.globalData.parastr.length > 0)) return void wx.showModal({
            content: "读取失败",
            showCancel: !1
          });
          wx.showModal({
            content: "读取成功",
            showCancel: !1
          });
          var e = JSON.parse(u.globalData.parastr);
          t.setData({
            BOOT: e.BOOT,
            WELCOME: e.WELCOME,
            SLEEP: e.SLEEP,
            WAIT_VOICE: e.WAIT_VOICE,
            WAKE_VOICE: e.WAKE_VOICE,
            WAKE_COM: e.WAKE_COM,
            WAKE_IO: e.WAKE_IO,
            FAIL: e.FAIL,
            SSID: e.SSID,
            PASSWORD: e.PASSWORD,
            SERVICE_ID: e.SERVICE_ID,
            AI_ACCESS_KEY: e.AI_ACCESS_KEY,
            WEBSOCKET_URI: e.WEBSOCKET_URI,
            CARD_ID: e.CARD_ID,
            BUADRATE: e.BUADRATE,
            ASRMODE: e.ASRMODE,
            COMTIMEOUT: e.COMTIMEOUT,
            ASRTIME: e.ASRTIME,
            ASRTIMEOUT: e.ASRTIMEOUT,
            ONLINE: e.ONLINE,
            IOTCMD: e.IOTCMD,
            SHAKESTOP: e.SHAKESTOP,
            BLUETOOTH: e.BLUETOOTH,
            FINDTFMP3: e.FINDTFMP3,
            MULTI_ROUND: e.MULTI_ROUND,
            PIT: e.PIT,
            SPD: e.SPD,
            VOL: e.VOL,
            PER: e.PER,
            EMOTION: e.EMOTION,
            LANGUAGE: e.LANGUAGE
          });
          for (var n = 0; n < 142; n++) g[n] == e.PER && t.setData({
            pickerIndex: n
          });
          t.data.PER = g[t.data.pickerIndex];
          for (var o = 0; o < 28; o++) f[o] == e.EMOTION && t.setData({
            emotionpickerIndex: o
          });
          t.data.EMOTION = f[t.data.emotionpickerIndex];
          for (var i = 0; i < 15; i++) h[i] == e.LANGUAGE && t.setData({
            languagepickerIndex: i
          });
          t.data.LANGUAGE = h[t.data.languagepickerIndex], t.setData({
            modelpickerIndex: 7
          });
          for (var r = 0; r < 9; r++) {
            if (0 == r && I[r] == e.WEBSOCKET_URI) {
              t.setData({
                modelpickerIndex: r
              });
              break
            }
            if (r > 0 && r < 7 && S[r] == e.SERVICE_ID) {
              t.setData({
                modelpickerIndex: r
              });
              break
            }
            if (r > 6 && I[r] == e.WEBSOCKET_URI) {
              t.setData({
                modelpickerIndex: r
              });
              break
            }
            console.log(r + I[r])
          }
        } else if (100 == a) return E.exitread(), void wx.showModal({
          content: "读取失败",
          showCancel: !1
        })
      }), 800)
    }
  },
  factorypara: function() {
    var t = this;
    if (1 == u.globalData.netflag) wx.request({
      url: u.globalData.localurl,
      method: "POST",
      timeout: 3e3,
      data: "setparaDEFAULT",
      header: {
        "content-type": "application/json"
      },
      success: function(t) {
        console.log(t.data), "ok" == t.data && wx.showModal({
          content: "恢复默认参数成功",
          showCancel: !1
        })
      },
      fail: function(t) {
        console.error(t)
      }
    });
    else {
      if (0 == E.bleisconnected() || 1 == p) return void wx.showModal({
        content: "设备未连接",
        showCancel: !1
      });
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      E.writeCommand("setparaDEFAULT"), t.setData({
        showprogress: !0,
        percent: 0
      }), clearInterval(s);
      var a = 0;
      s = setInterval((function() {
        a++, t.setData({
          showprogress: !1,
          percent: a
        }), 100 == a && wx.showModal({
          content: "恢复默认参数成功",
          showCancel: !1
        })
      }), 100)
    }
  },
  remoteclose: function() {
    var t = this;
    return d(c().mark((function a() {
      var e, n, o, i, r, d, O, g, f, h;
      return c().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (e = t, 1 != u.globalData.netflag) {
              a.next = 20;
              break
            }
            if (0 != u.globalData.parastr.length) {
              a.next = 5;
              break
            }
            return wx.showModal({
              content: "请先读取参数",
              showCancel: !1
            }), a.abrupt("return");
          case 5:
            n = JSON.parse(u.globalData.parastr), Object.defineProperty(n, "WELCOME", {
              value: e.data.WELCOME,
              writable: !0
            }), Object.defineProperty(n, "SLEEP", {
              value: e.data.SLEEP,
              writable: !0
            }), Object.defineProperty(n, "WAIT_VOICE", {
              value: e.data.WAIT_VOICE,
              writable: !0
            }), Object.defineProperty(n, "WAKE_VOICE", {
              value: e.data.WAKE_VOICE,
              writable: !0
            }), Object.defineProperty(n, "WAKE_COM", {
              value: e.data.WAKE_COM,
              writable: !0
            }), Object.defineProperty(n, "FAIL", {
              value: e.data.FAIL,
              writable: !0
            }), Object.defineProperty(n, "SSID", {
              value: e.data.SSID,
              writable: !0
            }), Object.defineProperty(n, "PASSWORD", {
              value: e.data.PASSWORD,
              writable: !0
            }), "" != e.data.ASRMODE && "" != e.data.WEBSOCKET_URI && (Object.defineProperty(n, "ASRMODE", {
              value: e.data.ASRMODE,
              writable: !0
            }), Object.defineProperty(n, "SERVICE_ID", {
              value: e.data.SERVICE_ID,
              writable: !0
            }), Object.defineProperty(n, "AI_ACCESS_KEY", {
              value: e.data.AI_ACCESS_KEY,
              writable: !0
            }), Object.defineProperty(n, "WEBSOCKET_URI", {
              value: e.data.WEBSOCKET_URI,
              writable: !0
            }), Object.defineProperty(n, "PIT", {
              value: e.data.PIT,
              writable: !0
            }), Object.defineProperty(n, "SPD", {
              value: e.data.SPD,
              writable: !0
            }), Object.defineProperty(n, "PER", {
              value: e.data.PER,
              writable: !0
            }), Object.defineProperty(n, "EMOTION", {
              value: e.data.EMOTION,
              writable: !0,
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(n, "LANGUAGE", {
              value: e.data.LANGUAGE,
              writable: !0,
              enumerable: !0,
              configurable: !0
            })), o = JSON.stringify(n), u.globalData.parastr = o.replace(/,/g, ",\n"), wx.request({
              url: u.globalData.localurl,
              method: "POST",
              timeout: 3e3,
              data: "setparanet" + u.globalData.parastr,
              header: {
                "content-type": "application/json"
              },
              success: function(t) {
                console.log(t.data), "ok" == t.data ? wx.showModal({
                  content: "保存参数成功",
                  showCancel: !1
                }) : wx.showModal({
                  content: "保存参数失败",
                  showCancel: !1
                })
              },
              fail: function(t) {
                console.error(t), wx.showModal({
                  content: "保存参数失败，请和语音设备连接到同一热点或者连接到语音设备PHASR热点",
                  showCancel: !1
                })
              }
            }), a.next = 44;
            break;
          case 20:
            if (0 != E.bleisconnected() && 1 != p) {
              a.next = 23;
              break
            }
            return wx.showModal({
              content: "设备未连接",
              showCancel: !1
            }), a.abrupt("return");
          case 23:
            if (0 != u.globalData.parastr.length) {
              a.next = 26;
              break
            }
            return wx.showModal({
              content: "请先读取参数再保存参数",
              showCancel: !1
            }), a.abrupt("return");
          case 26:
            i = JSON.parse(u.globalData.parastr), Object.defineProperty(i, "WELCOME", {
              value: e.data.WELCOME,
              writable: !0
            }), Object.defineProperty(i, "SLEEP", {
              value: e.data.SLEEP,
              writable: !0
            }), Object.defineProperty(i, "WAIT_VOICE", {
              value: e.data.WAIT_VOICE,
              writable: !0
            }), Object.defineProperty(i, "WAKE_VOICE", {
              value: e.data.WAKE_VOICE,
              writable: !0
            }), Object.defineProperty(i, "WAKE_COM", {
              value: e.data.WAKE_COM,
              writable: !0
            }), Object.defineProperty(i, "FAIL", {
              value: e.data.FAIL,
              writable: !0
            }), Object.defineProperty(i, "SSID", {
              value: e.data.SSID,
              writable: !0
            }), Object.defineProperty(i, "PASSWORD", {
              value: e.data.PASSWORD,
              writable: !0
            }), "" != e.data.ASRMODE && "" != e.data.WEBSOCKET_URI && (Object.defineProperty(i, "ASRMODE", {
              value: e.data.ASRMODE,
              writable: !0
            }), Object.defineProperty(i, "SERVICE_ID", {
              value: e.data.SERVICE_ID,
              writable: !0
            }), Object.defineProperty(i, "AI_ACCESS_KEY", {
              value: e.data.AI_ACCESS_KEY,
              writable: !0
            }), Object.defineProperty(i, "WEBSOCKET_URI", {
              value: e.data.WEBSOCKET_URI,
              writable: !0
            }), Object.defineProperty(i, "PIT", {
              value: e.data.PIT,
              writable: !0
            }), Object.defineProperty(i, "SPD", {
              value: e.data.SPD,
              writable: !0
            }), Object.defineProperty(i, "PER", {
              value: e.data.PER,
              writable: !0
            }), Object.defineProperty(i, "EMOTION", {
              value: e.data.EMOTION,
              writable: !0
            }), Object.defineProperty(i, "LANGUAGE", {
              value: e.data.LANGUAGE,
              writable: !0
            })), r = JSON.stringify(i), u.globalData.parastr = r.replace(/,/g, ",\n"), console.log(u.globalData.parastr), E.writeparaALL(), e.setData({
              showprogress: !0,
              percent: 0
            }), clearInterval(s), d = 0, s = setInterval((function() {
              d++, e.setData({
                showprogress: !1,
                percent: d
              }), 50 == d && (E.exitread(), wx.showModal({
                content: "保存成功",
                showCancel: !1
              }))
            }), 50);
          case 44:
            return a.abrupt("return");
          case 55:
            return l = "imei号码应为15位数字", e.formSubmitevet(), a.abrupt("return");
          case 58:
            a.next = 63;
            break;
          case 60:
            return l = "称呼未填写", e.formSubmitevet(), a.abrupt("return");
          case 63:
            if (O = 1 == e.data.quitemode ? 1 : 0, g = 1 == e.data.msgremind ? 1 : 0, f = e.data.alarmpara < 10 ? 10 : 100 == e.data.alarmpara ? 99 : e.data.alarmpara, u.globalData.client && u.globalData.client.connected)
              for (e.data.auth ? (u.globalData.client.publish("gpstalk/p2p/GID_GPSTALK@@@" + e.data.imei, e.data.imei + "," + u.globalData.openid + "," + O + "," + f + ",0," + g + ",0,260", {
                  qos: 0,
                  retain: !0,
                  dup: !0
                }), wx.showToast({
                  title: "远程关机成功",
                  icon: "none",
                  duration: 2e3
                })) : wx.showToast({
                  title: "未授权终端号",
                  icon: "none",
                  duration: 2e3
                }), h = 0; h < (void 0).data.items.length; h++)(void 0).data.items[h].imei == e.data.imei && ((void 0).data.items[h].online = "关机");
            else u.globalData.client.pingreq(), wx.showToast({
              title: "网络断开请5秒后重试！",
              icon: "none",
              duration: 2e3
            });
          case 67:
          case "end":
            return a.stop()
        }
      }), a)
    })))()
  },
  testparaSPD: function() {
    var t = this;
    if (1 == u.globalData.netflag) {
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      wx.request({
        url: u.globalData.localurl,
        method: "POST",
        timeout: 3e3,
        data: "setparaSPD," + t.data.SPD,
        header: {
          "content-type": "application/json"
        },
        success: function(t) {
          console.log(t.data), "ok" == t.data && wx.request({
            url: u.globalData.localurl,
            method: "POST",
            timeout: 3e3,
            data: "play品恒语速测试成功",
            header: {
              "content-type": "application/json"
            },
            success: function(t) {
              console.log(t.data)
            },
            fail: function(t) {
              console.error(t)
            }
          })
        },
        fail: function(t) {
          console.error(t)
        }
      })
    } else {
      if (0 == E.bleisconnected() || 1 == p) return void wx.showModal({
        content: "设备未连接",
        showCancel: !1
      });
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      var a = JSON.parse(u.globalData.parastr);
      Object.defineProperty(a, "WELCOME", {
        value: t.data.WELCOME,
        writable: !0
      }), Object.defineProperty(a, "SLEEP", {
        value: t.data.SLEEP,
        writable: !0
      }), Object.defineProperty(a, "WAIT_VOICE", {
        value: t.data.WAIT_VOICE,
        writable: !0
      }), Object.defineProperty(a, "WAKE_VOICE", {
        value: t.data.WAKE_VOICE,
        writable: !0
      }), Object.defineProperty(a, "WAKE_COM", {
        value: t.data.WAKE_COM,
        writable: !0
      }), Object.defineProperty(a, "FAIL", {
        value: t.data.FAIL,
        writable: !0
      }), Object.defineProperty(a, "SSID", {
        value: t.data.SSID,
        writable: !0
      }), Object.defineProperty(a, "PASSWORD", {
        value: t.data.PASSWORD,
        writable: !0
      }), "" != t.data.ASRMODE && "" != t.data.WEBSOCKET_URI && (Object.defineProperty(a, "ASRMODE", {
        value: t.data.ASRMODE,
        writable: !0
      }), Object.defineProperty(a, "SERVICE_ID", {
        value: t.data.SERVICE_ID,
        writable: !0
      }), Object.defineProperty(a, "AI_ACCESS_KEY", {
        value: t.data.AI_ACCESS_KEY,
        writable: !0
      }), Object.defineProperty(a, "WEBSOCKET_URI", {
        value: t.data.WEBSOCKET_URI,
        writable: !0
      }), Object.defineProperty(a, "PIT", {
        value: t.data.PIT,
        writable: !0
      }), Object.defineProperty(a, "SPD", {
        value: t.data.SPD,
        writable: !0
      }), Object.defineProperty(a, "PER", {
        value: t.data.PER,
        writable: !0
      }), Object.defineProperty(a, "EMOTION", {
        value: t.data.EMOTION,
        writable: !0
      }), Object.defineProperty(a, "LANGUAGE", {
        value: t.data.LANGUAGE,
        writable: !0
      }));
      var e = JSON.stringify(a);
      u.globalData.parastr = e.replace(/,/g, ",\n"), console.log(u.globalData.parastr), E.writeparaALL(), t.setData({
        showprogress: !0,
        percent: 0
      }), clearInterval(s);
      var n = 0;
      s = setInterval((function() {
        n++, t.setData({
          showprogress: !1,
          percent: n
        }), 30 == n && (E.exitread(), E.writeCommand("play测试成功"))
      }), 30)
    }
  },
  findwifi: function() {
    var t = this;
    return d(c().mark((function a() {
      var e;
      return c().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            e = t, wx.startWifi({
              success: function() {
                wx.getWifiList({
                  success: function(t) {
                    wx.offGetWifiList()
                  },
                  fail: function(t) {
                    console.error("获取失败:", t)
                  }
                })
              },
              fail: function(t) {
                console.error("初始化失败:", t)
              }
            }), wx.getConnectedWifi({
              success: function(t) {
                if (-1 !== t.wifi.SSID.indexOf("PHASR")) return wx.showModal({
                  title: "获取wifi列表失败",
                  content: "连接设备热点PHASR不能获取wifi列表，请连接其他热点获取wifi列表。",
                  showCancel: !1
                }), !1
              },
              fail: function(t) {
                wx.showModal({
                  title: "错误",
                  content: "无法获取当前连接的 WiFi 信息,请打开GPS定位",
                  showCancel: !1
                })
              }
            }), wx.getSetting({
              success: function(t) {
                t.authSetting["scope.userLocation"] ? e.fetchWifiList() : wx.authorize({
                  scope: "scope.userLocation",
                  success: function() {
                    e.fetchWifiList()
                  },
                  fail: function() {
                    wx.showModal({
                      title: "授权提示",
                      content: "需要授权获取您的位置信息以获取附近的WiFi列表",
                      success: function(t) {
                        t.confirm && wx.openSetting({
                          success: function(t) {
                            t.authSetting["scope.userLocation"] && e.fetchWifiList()
                          }
                        })
                      }
                    })
                  }
                })
              }
            });
          case 4:
          case "end":
            return a.stop()
        }
      }), a)
    })))()
  },
  fetchWifiList: function() {
    var t = this;
    wx.getWifiList({
      success: function() {
        wx.onGetWifiList((function(a) {
          a.wifiList && a.wifiList.length > 0 ? t.setData({
            wifiList: a.wifiList
          }, (function() {
            t.showWifiMenu()
          })) : wx.showToast({
            title: "未找到附近的WiFi",
            icon: "none"
          })
        }))
      },
      fail: function(t) {
        wx.showModal({
          title: "获取wifi列表失败",
          content: "请打开wifi和GPS定位",
          showCancel: !1
        }), console.error(t)
      }
    })
  },
  showWifiMenu: function() {
    var t = this,
      a = this,
      e = this.data.wifiList.map((function(t) {
        return {
          name: "".concat(t.SSID, " - 信号强度：").concat(t.signalStrength)
        }
      }));
    wx.showActionSheet({
      itemList: e.map((function(t) {
        return t.name
      })),
      success: function(e) {
        var n = e.tapIndex;
        if (void 0 !== n) {
          var o = a.data.wifiList[n];
          t.setData({
            SSID: o.SSID
          }), wx.stopWifi()
        }
      },
      fail: function(t) {
        console.error(t)
      }
    })
  },
  testparaPIT: function() {
    var t = this;
    if (1 == u.globalData.netflag) {
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      wx.request({
        url: u.globalData.localurl,
        method: "POST",
        timeout: 3e3,
        data: "setparaPIT," + t.data.PIT,
        header: {
          "content-type": "application/json"
        },
        success: function(t) {
          console.log(t.data), "ok" == t.data && wx.request({
            url: u.globalData.localurl,
            method: "POST",
            timeout: 3e3,
            data: "play品恒语调测试成功",
            header: {
              "content-type": "application/json"
            },
            success: function(t) {
              console.log(t.data)
            },
            fail: function(t) {
              console.error(t)
            }
          })
        },
        fail: function(t) {
          console.error(t)
        }
      })
    } else {
      if (0 == E.bleisconnected() || 1 == p) return void wx.showModal({
        content: "设备未连接",
        showCancel: !1
      });
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      var a = JSON.parse(u.globalData.parastr);
      Object.defineProperty(a, "WELCOME", {
        value: t.data.WELCOME,
        writable: !0
      }), Object.defineProperty(a, "SLEEP", {
        value: t.data.SLEEP,
        writable: !0
      }), Object.defineProperty(a, "WAIT_VOICE", {
        value: t.data.WAIT_VOICE,
        writable: !0
      }), Object.defineProperty(a, "WAKE_VOICE", {
        value: t.data.WAKE_VOICE,
        writable: !0
      }), Object.defineProperty(a, "WAKE_COM", {
        value: t.data.WAKE_COM,
        writable: !0
      }), Object.defineProperty(a, "FAIL", {
        value: t.data.FAIL,
        writable: !0
      }), Object.defineProperty(a, "SSID", {
        value: t.data.SSID,
        writable: !0
      }), Object.defineProperty(a, "PASSWORD", {
        value: t.data.PASSWORD,
        writable: !0
      }), "" != t.data.ASRMODE && "" != t.data.WEBSOCKET_URI && (Object.defineProperty(a, "ASRMODE", {
        value: t.data.ASRMODE,
        writable: !0
      }), Object.defineProperty(a, "SERVICE_ID", {
        value: t.data.SERVICE_ID,
        writable: !0
      }), Object.defineProperty(a, "AI_ACCESS_KEY", {
        value: t.data.AI_ACCESS_KEY,
        writable: !0
      }), Object.defineProperty(a, "WEBSOCKET_URI", {
        value: t.data.WEBSOCKET_URI,
        writable: !0
      }), Object.defineProperty(a, "PIT", {
        value: t.data.PIT,
        writable: !0
      }), Object.defineProperty(a, "SPD", {
        value: t.data.SPD,
        writable: !0
      }), Object.defineProperty(a, "PER", {
        value: t.data.PER,
        writable: !0
      }), Object.defineProperty(a, "EMOTION", {
        value: t.data.EMOTION,
        writable: !0
      }), Object.defineProperty(a, "LANGUAGE", {
        value: t.data.LANGUAGE,
        writable: !0
      }));
      var e = JSON.stringify(a);
      u.globalData.parastr = e.replace(/,/g, ",\n"), console.log(u.globalData.parastr), E.writeparaALL(), t.setData({
        showprogress: !0,
        percent: 0
      }), clearInterval(s);
      var n = 0;
      s = setInterval((function() {
        n++, t.setData({
          showprogress: !1,
          percent: n
        }), 30 == n && (E.exitread(), E.writeCommand("play测试成功"))
      }), 30)
    }
  },
  testparaPER: function() {
    var t = this;
    if (1 == u.globalData.netflag) {
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      console.log("setparaEMOTION," + t.data.EMOTION), wx.request({
        url: u.globalData.localurl,
        method: "POST",
        timeout: 3e3,
        data: "setparaEMOTION," + t.data.EMOTION,
        header: {
          "content-type": "application/json"
        },
        success: function(a) {
          console.log(a.data), console.log("setparaLANGUAGE," + t.data.LANGUAGE), wx.request({
            url: u.globalData.localurl,
            method: "POST",
            timeout: 3e3,
            data: "setparaLANGUAGE," + t.data.LANGUAGE,
            header: {
              "content-type": "application/json"
            },
            success: function(a) {
              console.log(a.data), console.log("setparaPER," + t.data.PER), wx.request({
                url: u.globalData.localurl,
                method: "POST",
                timeout: 3e3,
                data: "setparaPER," + t.data.PER,
                header: {
                  "content-type": "application/json"
                },
                success: function(a) {
                  console.log(a.data), "ok" == a.data && (console.log("play" + t.data.array[t.data.pickerIndex]), wx.request({
                    url: u.globalData.localurl,
                    method: "POST",
                    timeout: 3e3,
                    data: "play在宁静的夜晚，月光洒在湖面上，微风轻拂，柳枝摇曳，仿佛在低声诉说着一个古老的传说。",
                    header: {
                      "content-type": "application/json"
                    },
                    success: function(t) {
                      console.log(t.data)
                    },
                    fail: function(t) {
                      console.error(t)
                    }
                  }))
                },
                fail: function(t) {
                  console.error(t)
                }
              })
            },
            fail: function(t) {
              console.error(t)
            }
          })
        },
        fail: function(t) {
          console.error(t)
        }
      })
    } else {
      if (0 == E.bleisconnected() || 1 == p) return void wx.showModal({
        content: "设备未连接",
        showCancel: !1
      });
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数",
        showCancel: !1
      });
      var a = JSON.parse(u.globalData.parastr);
      Object.defineProperty(a, "WELCOME", {
        value: t.data.WELCOME,
        writable: !0
      }), Object.defineProperty(a, "SLEEP", {
        value: t.data.SLEEP,
        writable: !0
      }), Object.defineProperty(a, "WAIT_VOICE", {
        value: t.data.WAIT_VOICE,
        writable: !0
      }), Object.defineProperty(a, "WAKE_VOICE", {
        value: t.data.WAKE_VOICE,
        writable: !0
      }), Object.defineProperty(a, "WAKE_COM", {
        value: t.data.WAKE_COM,
        writable: !0
      }), Object.defineProperty(a, "FAIL", {
        value: t.data.FAIL,
        writable: !0
      }), Object.defineProperty(a, "SSID", {
        value: t.data.SSID,
        writable: !0
      }), Object.defineProperty(a, "PASSWORD", {
        value: t.data.PASSWORD,
        writable: !0
      }), "" != t.data.ASRMODE && "" != t.data.WEBSOCKET_URI && (Object.defineProperty(a, "ASRMODE", {
        value: t.data.ASRMODE,
        writable: !0
      }), Object.defineProperty(a, "SERVICE_ID", {
        value: t.data.SERVICE_ID,
        writable: !0
      }), Object.defineProperty(a, "AI_ACCESS_KEY", {
        value: t.data.AI_ACCESS_KEY,
        writable: !0
      }), Object.defineProperty(a, "WEBSOCKET_URI", {
        value: t.data.WEBSOCKET_URI,
        writable: !0
      }), Object.defineProperty(a, "PIT", {
        value: t.data.PIT,
        writable: !0
      }), Object.defineProperty(a, "SPD", {
        value: t.data.SPD,
        writable: !0
      }), Object.defineProperty(a, "PER", {
        value: t.data.PER,
        writable: !0
      }), Object.defineProperty(a, "EMOTION", {
        value: t.data.EMOTION,
        writable: !0
      }), Object.defineProperty(a, "LANGUAGE", {
        value: t.data.LANGUAGE,
        writable: !0
      }));
      var e = JSON.stringify(a);
      u.globalData.parastr = e.replace(/,/g, ",\n"), console.log(u.globalData.parastr), E.writeparaALL(), t.setData({
        showprogress: !0,
        percent: 0
      }), clearInterval(s);
      var n = 0;
      s = setInterval((function() {
        n++, t.setData({
          showprogress: !1,
          percent: n
        }), 30 == n && (E.exitread(), E.writeCommand("play" + t.data.array[t.data.pickerIndex]))
      }), 30)
    }
  },
  messagepackage: function() {
    var t = this;
    if (1 != u.globalData.netflag) {
      if (0 == E.bleisconnected() || 1 == p) return void wx.showModal({
        content: "设备未连接",
        showCancel: !1
      });
      if (0 == u.globalData.parastr.length) return void wx.showModal({
        content: "请先读取参数再充值",
        showCancel: !1
      });
      E.writeCommand("readid"), E.readCommand()
    }
    t.setData({
      showprogress: !0,
      percent: 0
    }), clearInterval(s);
    var a = 0;
    s = setInterval((function() {
      a++, t.setData({
        showprogress: !1,
        percent: a
      }), (E.checkpay() || 1 == u.globalData.netflag) && a < 100 ? (E.exitread(), console.log("连接成功"), a = 100, wx.navigateTo({
        url: "../pay/pay"
      })) : 100 == a && (E.exitread(), wx.showModal({
        content: "连接失败",
        showCancel: !1
      }))
    }), 100)
  },
  scancode: function() {
    var t = this;
    wx.scanCode({
      success: function(a) {
        console.log(a), t.setData({
          imei: a.result
        })
      },
      fail: function(t) {
        console.log(t), wx.showToast({
          title: "失败",
          icon: "none",
          duration: 2e3
        })
      }
    })
  },
  openbt: function() {
    var t = this,
      a = [],
      e = [];
    console.log("搜索网络"), wx.showLoading({
      title: "搜索设备中..."
    }), u.globalData.netflag = 2, wx.startLocalServiceDiscovery({
      serviceType: "_http._tcp",
      success: function(t) {
        wx.onLocalServiceFound((function(t) {
          console.log(t.serviceName), t.serviceName.includes("PHASR") && (console.log(t.serviceName), a.push(t.serviceName), e.push(t.ip))
        }))
      },
      fail: function(t) {
        console.log(t), wx.showModal({
          content: "没找到语音设备，请和语音设备连接到同一热点或者连接到语音设备PHASR热点",
          showCancel: !1
        }), u.globalData.netflag = 0
      }
    }), setTimeout((function() {
      if (wx.hideLoading({
          success: function(t) {}
        }), wx.stopLocalServiceDiscovery({
          success: function(t) {
            console.log("服务发现已停止")
          },
          fail: function(t) {
            console.error("停止服务发现失败:", t)
          }
        }), "" != a) {
        wx.showActionSheet({
          itemList: a,
          cancelText: "取消",
          destructiveText: "删除",
          success: function(n) {
            if (-1 !== n.tapIndex) {
              if (console.log("用户选择了选项：" + a[n.tapIndex]), a[n.tapIndex].includes("PHASR") && 2 == u.globalData.netflag) {
                u.globalData.netflag = 3, u.globalData.localurl = "http://" + e[n.tapIndex] + ":80/echo", console.log(u.globalData.localurl);
                wx.request({
                  url: u.globalData.localurl,
                  method: "POST",
                  timeout: 3e3,
                  data: "hello",
                  header: {
                    "content-type": "application/json"
                  },
                  success: function(a) {
                    console.log(a.data), "ok" == a.data ? (wx.showModal({
                      content: "语音设备网络连接成功",
                      showCancel: !1
                    }), u.globalData.netflag = 1, t.remoteopen()) : (wx.showModal({
                      content: "语音设备无响应，，请和语音设备连接到同一热点或者连接到语音设备PHASR热点",
                      showCancel: !1
                    }), u.globalData.netflag = 0)
                  },
                  fail: function(t) {
                    console.error(t), wx.showModal({
                      content: "语音设备网络连接失败，请和语音设备连接到同一热点或者连接到语音设备PHASR热点",
                      showCancel: !1
                    }), u.globalData.netflag = 0
                  }
                })
              }
            } else {
              console.log("用户点击了取消"), console.log("连接蓝牙"), E.startBT(t.data.CARD_ID), t.setData({
                showprogress: !0,
                percent: 0
              }), clearInterval(s);
              var o = 0;
              s = setInterval((function() {
                o++, t.setData({
                  showprogress: !1,
                  percent: o
                }), 0 == E.blecheck() && (p = 0, o = 100)
              }), 200)
            }
          },
          fail: function(t) {
            wx.showModal({
              content: "没找到语音设备，请和语音设备连接到同一热点或者连接到语音设备PHASR热点",
              showCancel: !1
            }), console.error("显示操作表失败", t)
          }
        })
      } else wx.showModal({
        content: "没找到语音设备，请和语音设备连接到同一热点或者连接到语音设备PHASR热点",
        showCancel: !1
      })
    }), 3e3)
  },
  conphasr: function() {
    console.log("连接网络"), wx.showLoading({
      title: "搜索设备中..."
    }), wx.startLocalServiceDiscovery({
      serviceType: "_http._tcp",
      success: function(t) {
        wx.onLocalServiceFound((function(t) {
          "ESP32-WebServer1" == t.serviceName && (u.globalData.localurl = "http://" + t.ip + ":80/hello", console.log(u.globalData.localurl), wx.request({
            url: u.globalData.localurl,
            method: "GET",
            timeout: 3e3,
            success: function(t) {
              console.log(t.data)
            },
            fail: function(t) {
              console.error(t)
            }
          }))
        }))
      },
      fail: function(t) {
        console.log(t)
      }
    }), setTimeout((function() {
      wx.hideLoading({
        success: function(t) {}
      }), wx.stopLocalServiceDiscovery({
        success: function(t) {}
      })
    }), 3500)
  }
});