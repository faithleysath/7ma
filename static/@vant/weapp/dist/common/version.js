Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.canIUseAnimate = function() {
  return t("2.9.0")
}, exports.canIUseCanvas2d = function() {
  return t("2.9.0")
}, exports.canIUseFormFieldButton = function() {
  return t("2.10.3")
}, exports.canIUseGetUserProfile = function() {
  return !!wx.getUserProfile
}, exports.canIUseGroupSetData = function() {
  return t("2.4.0")
}, exports.canIUseModel = function() {
  return t("2.9.3")
}, exports.canIUseNextTick = function() {
  return wx.canIUse("nextTick")
};
var e = require("./utils");

function t(t) {
  return function(e, t) {
    e = e.split("."), t = t.split(".");
    for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
    for (; t.length < n;) t.push("0");
    for (var r = 0; r < n; r++) {
      var s = parseInt(e[r], 10),
        o = parseInt(t[r], 10);
      if (s > o) return 1;
      if (s < o) return -1
    }
    return 0
  }((0, e.getSystemInfoSync)().SDKVersion, t) >= 0
}