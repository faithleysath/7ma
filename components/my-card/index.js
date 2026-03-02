(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/my-card/index"], {
    1517: function(n, e, t) {
      var o = t("a492");
      t.n(o).a
    },
    2790: function(n, e, t) {
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return a
      })), t.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    "8e9f": function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        props: {
          card: {
            type: Object,
            default: function() {
              return {}
            }
          },
          top: {
            type: String,
            default: "40rpx"
          },
          bottom: {
            type: String,
            default: "40rpx"
          },
          scale: {
            type: Number,
            default: 1
          }
        }
      };
      e.default = o
    },
    a492: function(n, e, t) {},
    a4f9: function(n, e, t) {
      t.r(e);
      var o = t("8e9f"),
        a = t.n(o);
      for (var c in o)["default"].indexOf(c) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(c);
      e.default = a.a
    },
    f04a: function(n, e, t) {
      t.r(e);
      var o = t("2790"),
        a = t("a4f9");
      for (var c in a)["default"].indexOf(c) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(c);
      t("1517");
      var f = t("828b"),
        r = Object(f.a)(a.default, o.b, o.c, !1, null, "3f5fc082", null, !1, o.a, void 0);
      e.default = r.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/my-card/index-create-component", {
    "components/my-card/index-create-component": function(n, e, t) {
      t("df3c").createComponent(t("f04a"))
    }
  },
  [
    ["components/my-card/index-create-component"]
  ]
]);