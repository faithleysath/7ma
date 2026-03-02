(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/rule/index2"], {
    "669b": function(n, t, a) {
      a.r(t);
      var e = a("a5f2"),
        u = a.n(e);
      for (var c in e)["default"].indexOf(c) < 0 && function(n) {
        a.d(t, n, (function() {
          return e[n]
        }))
      }(c);
      t.default = u.a
    },
    "77d0": function(n, t, a) {
      a.d(t, "b", (function() {
        return e
      })), a.d(t, "c", (function() {
        return u
      })), a.d(t, "a", (function() {}));
      var e = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    "7b15": function(n, t, a) {
      var e = a("cb9a");
      a.n(e).a
    },
    a5f2: function(n, t, a) {
      (function(n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          data: function() {
            return {}
          },
          methods: {
            go: function(t) {
              n.navigateTo({
                url: t
              })
            }
          },
          onLoad: function(n) {}
        };
        t.default = a
      }).call(this, a("df3c").default)
    },
    cb9a: function(n, t, a) {},
    cbba: function(n, t, a) {
      a.r(t);
      var e = a("77d0"),
        u = a("669b");
      for (var c in u)["default"].indexOf(c) < 0 && function(n) {
        a.d(t, n, (function() {
          return u[n]
        }))
      }(c);
      a("7b15");
      var f = a("828b"),
        o = Object(f.a)(u.default, e.b, e.c, !1, null, "095f1470", null, !1, e.a, void 0);
      t.default = o.exports
    },
    f5ce: function(n, t, a) {
      (function(n, t) {
        var e = a("47a9");
        a("671b"), e(a("3240"));
        var u = e(a("cbba"));
        n.__webpack_require_UNI_MP_PLUGIN__ = a, t(u.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    }
  },
  [
    ["f5ce", "common/runtime", "common/vendor"]
  ]
]);