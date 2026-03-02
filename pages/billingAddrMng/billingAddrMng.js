(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/billingAddrMng/billingAddrMng"], {
    "2a9b": function(n, t, a) {
      a.d(t, "b", (function() {
        return e
      })), a.d(t, "c", (function() {
        return i
      })), a.d(t, "a", (function() {}));
      var e = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "471b": function(n, t, a) {
      (function(n, t) {
        var e = a("47a9");
        a("671b"), e(a("3240"));
        var i = e(a("5121"));
        n.__webpack_require_UNI_MP_PLUGIN__ = a, t(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    4771: function(n, t, a) {
      a.r(t);
      var e = a("c0bf"),
        i = a.n(e);
      for (var u in e)["default"].indexOf(u) < 0 && function(n) {
        a.d(t, n, (function() {
          return e[n]
        }))
      }(u);
      t.default = i.a
    },
    5121: function(n, t, a) {
      a.r(t);
      var e = a("2a9b"),
        i = a("4771");
      for (var u in i)["default"].indexOf(u) < 0 && function(n) {
        a.d(t, n, (function() {
          return i[n]
        }))
      }(u);
      a("d30a");
      var o = a("828b"),
        f = Object(o.a)(i.default, e.b, e.c, !1, null, "61563d12", null, !1, e.a, void 0);
      t.default = f.exports
    },
    "6b50": function(n, t, a) {},
    c0bf: function(n, t, a) {
      (function(n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          data: function() {
            return {
              list: []
            }
          },
          onShow: function() {
            this.getList()
          },
          methods: {
            getList: function() {
              var n = this;
              this.$http.get("billing/address").then((function(t) {
                n.list = t.data
              }))
            },
            go: function(t) {
              n.navigateTo({
                url: t
              })
            }
          }
        };
        t.default = a
      }).call(this, a("df3c").default)
    },
    d30a: function(n, t, a) {
      var e = a("6b50");
      a.n(e).a
    }
  },
  [
    ["471b", "common/runtime", "common/vendor"]
  ]
]);