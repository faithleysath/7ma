Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.addUnit = function(e) {
  if (!n(e)) return;
  return r(e = String(e)) ? "".concat(e, "px") : e
}, exports.getSystemInfoSync = function() {
  return e(e(e(e(e({}, wx.getSystemSetting()), wx.getDeviceInfo()), wx.getWindowInfo()), wx.getAppBaseInfo()), wx.getAppAuthorizeSetting())
}, exports.isDef = n, exports.isNumber = r, exports.isObj = function(e) {
  var n = t(e);
  return null !== e && ("object" === n || "function" === n)
}, exports.nextTick = function(e) {
  setTimeout((function() {
    e()
  }), 1e3 / 30)
}, exports.range = function(e, t, n) {
  return Math.min(Math.max(e, t), n)
};
var e = require("../../../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../../../@babel/runtime/helpers/typeof");

function n(e) {
  return null != e
}

function r(e) {
  return /^\d+(\.\d+)?$/.test(e)
}