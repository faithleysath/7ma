(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uni_modules/lime-painter/components/l-painter-text/l-painter-text"], {
    "6e2e": function(e, t, n) {
      n.r(t);
      var i = n("853d"),
        r = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      t.default = r.a
    },
    8016: function(e, t, n) {
      n.r(t);
      var i = n("9b84"),
        r = n("6e2e");
      for (var a in r)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(a);
      var o = n("828b"),
        l = Object(o.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      t.default = l.exports
    },
    "853d": function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = {
        name: "lime-painter-text",
        mixins: [(0, n("762d2").children)("painter")],
        props: {
          type: {
            type: String,
            default: "text"
          },
          uid: String,
          css: [String, Object],
          text: [String, Number],
          replace: Object
        },
        data: function() {
          return {
            el: {
              css: {},
              text: null
            }
          }
        }
      };
      t.default = i
    },
    "9b84": function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uni_modules/lime-painter/components/l-painter-text/l-painter-text-create-component", {
    "uni_modules/lime-painter/components/l-painter-text/l-painter-text-create-component": function(e, t, n) {
      n("df3c").createComponent(n("8016"))
    }
  },
  [
    ["uni_modules/lime-painter/components/l-painter-text/l-painter-text-create-component"]
  ]
]);