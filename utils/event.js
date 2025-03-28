Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  l = function() {
    return t((function t() {
      e(this, t), this.callbacks = {}
    }), [{
      key: "set",
      value: function(e, t) {
        e && e in this.callbacks && this.callbacks[e](t)
      }
    }, {
      key: "on",
      value: function(e, t) {
        return !(!e || "function" != typeof t) && (this.callbacks[e] = t, !0)
      }
    }])
  }();
exports.default = new l;