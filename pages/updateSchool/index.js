(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/updateSchool/index"], {
    "02f5": function(n, t, e) {
      e.d(t, "b", (function() {
        return a
      })), e.d(t, "c", (function() {
        return u
      })), e.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    "195a": function(n, t, e) {
      (function(n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var e = {
          data: function() {
            return {}
          },
          methods: {
            go: function(t) {
              n.navigateTo({
                url: t
              })
            }
          }
        };
        t.default = e
      }).call(this, e("df3c").default)
    },
    ab4b: function(n, t, e) {
      (function(n, t) {
        var a = e("47a9");
        e("671b"), a(e("3240"));
        var u = a(e("db1f"));
        n.__webpack_require_UNI_MP_PLUGIN__ = e, t(u.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    db1f: function(n, t, e) {
      e.r(t);
      var a = e("02f5"),
        u = e("dc30");
      for (var f in u)["default"].indexOf(f) < 0 && function(n) {
        e.d(t, n, (function() {
          return u[n]
        }))
      }(f);
      var o = e("828b"),
        c = Object(o.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      t.default = c.exports
    },
    dc30: function(n, t, e) {
      e.r(t);
      var a = e("195a"),
        u = e.n(a);
      for (var f in a)["default"].indexOf(f) < 0 && function(n) {
        e.d(t, n, (function() {
          return a[n]
        }))
      }(f);
      t.default = u.a
    }
  },
  [
    ["ab4b", "common/runtime", "common/vendor"]
  ]
]);