var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  e = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
module.exports = {
  base64encode: function(e) {
    var a, t, h, o, c, d;
    for (h = e.length, t = 0, a = ""; t < h;) {
      if (o = 255 & e.charCodeAt(t++), t == h) {
        a += r.charAt(o >> 2), a += r.charAt((3 & o) << 4), a += "==";
        break
      }
      if (c = e.charCodeAt(t++), t == h) {
        a += r.charAt(o >> 2), a += r.charAt((3 & o) << 4 | (240 & c) >> 4), a += r.charAt((15 & c) << 2), a += "=";
        break
      }
      d = e.charCodeAt(t++), a += r.charAt(o >> 2), a += r.charAt((3 & o) << 4 | (240 & c) >> 4), a += r.charAt((15 & c) << 2 | (192 & d) >> 6), a += r.charAt(63 & d)
    }
    return a
  },
  base64decode: function(r) {
    var a, t, h, o, c, d, i;
    for (d = r.length, c = 0, i = ""; c < d;) {
      do {
        a = e[255 & r.charCodeAt(c++)]
      } while (c < d && -1 == a);
      if (-1 == a) break;
      do {
        t = e[255 & r.charCodeAt(c++)]
      } while (c < d && -1 == t);
      if (-1 == t) break;
      i += String.fromCharCode(a << 2 | (48 & t) >> 4);
      do {
        if (61 == (h = 255 & r.charCodeAt(c++))) return i;
        h = e[h]
      } while (c < d && -1 == h);
      if (-1 == h) break;
      i += String.fromCharCode((15 & t) << 4 | (60 & h) >> 2);
      do {
        if (61 == (o = 255 & r.charCodeAt(c++))) return i;
        o = e[o]
      } while (c < d && -1 == o);
      if (-1 == o) break;
      i += String.fromCharCode((3 & h) << 6 | o)
    }
    return i
  }
};