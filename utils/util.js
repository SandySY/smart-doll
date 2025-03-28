function t(t) {
  return (t = t.toString())[1] ? t : "0" + t
}
module.exports = {
  formatTime: function(r, e) {
    var n = r.getFullYear(),
      a = r.getMonth() + 1,
      o = r.getDate(),
      u = r.getHours(),
      i = r.getMinutes(),
      f = r.getSeconds();
    return 1 == e ? [n, a, o].map(t).join("-") : 2 == e ? [u, i].map(t).join(":") : [n, a, o].map(t).join("-") + " " + [u, i, f].map(t).join(":")
  },
  formatTimestamp: function(r, e) {
    var n = ["Y", "M", "D", "h", "m", "s"],
      a = [],
      o = new Date(r);
    for (var u in a.push(o.getFullYear()), a.push(t(o.getMonth() + 1)), a.push(t(o.getDate())), a.push(t(o.getHours())), a.push(t(o.getMinutes())), a.push(t(o.getSeconds())), a) e = e.replace(n[u], a[u]);
    return e
  },
  str2ab: function(t) {
    for (var r = new ArrayBuffer(2 * t.length), e = new Uint16Array(r), n = 0, a = t.length; n < a; n++) e[n] = t.charCodeAt(n);
    return r
  },
  binb2str: function(t) {
    for (var r = "", e = 0; e < 4 * t.length; e++) r += String.fromCharCode(t[e >> 2] >> 8 * (3 - e % 4) & 255);
    return r
  },
  myHextoString: function(t) {
    for (var r = "", e = 0; e < t.length; e++) {
      var n = t[e] / 16;
      n >= 10 ? n = n - 10 + 97 : n += 48, r += n = String.fromCharCode(n);
      var a = t[e] % 16;
      a >= 10 ? a = a - 10 + 97 : a += 48, r += a = String.fromCharCode(a)
    }
    return r
  },
  arraybuffer2str: function(t) {
    for (var r = new DataView(t), e = "", n = 0; n < r.byteLength; n++) e += String.fromCharCode(r.getUint8(n));
    return e
  },
  createTimeStamp: function() {
    return parseInt((new Date).getTime() / 1e3) + ""
  },
  randomString: function() {
    for (var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", r = t.length, e = "", n = 0; n < 32; n++) e += t.charAt(Math.floor(Math.random() * r));
    return e
  },
  getXMLNodeValue: function(t, r) {
    return r.split("<" + t + ">")[1].split("</" + t + ">")[0]
  }
};