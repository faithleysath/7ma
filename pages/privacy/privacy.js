(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/privacy/privacy"], {
    "82e6": function(n, e, a) {
      (function(n, e) {
        var t = a("47a9");
        a("671b"), t(a("3240"));
        var c = t(a("f2a0"));
        n.__webpack_require_UNI_MP_PLUGIN__ = a, e(c.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "866c": function(n, e, a) {
      a.d(e, "b", (function() {
        return t
      })), a.d(e, "c", (function() {
        return c
      })), a.d(e, "a", (function() {}));
      var t = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    cc74: function(n, e, a) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          data: function() {
            return {}
          },
          methods: {
            open: function() {
              n.openPrivacyContract && n.openPrivacyContract()
            },
            agreeprivacyauthorization: function() {
              n.navigateBack({
                url: "/pages/home/index"
              })
            }
          }
        };
        e.default = a
      }).call(this, a("3223").default)
    },
    cea6: function(n, e, a) {
      a.r(e);
      var t = a("cc74"),
        c = a.n(t);
      for (var u in t)["default"].indexOf(u) < 0 && function(n) {
        a.d(e, n, (function() {
          return t[n]
        }))
      }(u);
      e.default = c.a
    },
    f2a0: function(n, e, a) {
      a.r(e);
      var t = a("866c"),
        c = a("cea6");
      for (var u in c)["default"].indexOf(u) < 0 && function(n) {
        a.d(e, n, (function() {
          return c[n]
        }))
      }(u);
      var o = a("828b"),
        r = Object(o.a)(c.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
      e.default = r.exports
    }
  },
  [
    ["82e6", "common/runtime", "common/vendor"]
  ]
]);