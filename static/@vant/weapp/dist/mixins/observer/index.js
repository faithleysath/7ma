Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.observe = function(r, i) {
  var o = r.watch;
  if (i.behaviors.push(e.behavior), o) {
    var t = i.properties || {};
    Object.keys(o).forEach((function(e) {
      if (e in t) {
        var r = t[e];
        null !== r && "type" in r || (r = {
          type: r
        }), r.observer = o[e], t[e] = r
      }
    })), i.properties = t
  }
};
var e = require("./behavior");