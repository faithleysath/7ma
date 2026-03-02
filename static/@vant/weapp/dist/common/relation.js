Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.useChildren = function(n, t) {
  var i = "../".concat(n, "/index");
  return {
    relations: e({}, i, {
      type: "descendant",
      linked: function(e) {
        t && t.call(this, e)
      },
      linkChanged: function(e) {
        t && t.call(this, e)
      },
      unlinked: function(e) {
        t && t.call(this, e)
      }
    }),
    mixin: Behavior({
      created: function() {
        var e = this;
        Object.defineProperty(this, "children", {
          get: function() {
            return e.getRelationNodes(i) || []
          }
        })
      }
    })
  }
}, exports.useParent = function(n, t) {
  var i = "../".concat(n, "/index");
  return {
    relations: e({}, i, {
      type: "ancestor",
      linked: function() {
        t && t.call(this)
      },
      linkChanged: function() {
        t && t.call(this)
      },
      unlinked: function() {
        t && t.call(this)
      }
    }),
    mixin: Behavior({
      created: function() {
        var e = this;
        Object.defineProperty(this, "parent", {
          get: function() {
            return e.getRelationNodes(i)[0]
          }
        }), Object.defineProperty(this, "index", {
          get: function() {
            var n, t;
            return null === (t = null === (n = e.parent) || void 0 === n ? void 0 : n.children) || void 0 === t ? void 0 : t.indexOf(e)
          }
        })
      }
    })
  }
};
var e = require("../../../../../@babel/runtime/helpers/defineProperty");