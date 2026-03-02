(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/bxDetail/index"], {
    "2d11": function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          data: function() {
            return {
              info: {}
            }
          },
          onLoad: function(n) {
            var e = n.data;
            this.info = JSON.parse(decodeURIComponent(e))
          },
          methods: {
            go: function(e) {
              n.navigateTo({
                url: e + "?data=" + encodeURIComponent(JSON.stringify(this.info))
              })
            },
            openTel: function() {
              n.makePhoneCall({
                phoneNumber: "0519-86999222"
              })
            }
          }
        };
        e.default = t
      }).call(this, t("3223").default)
    },
    3923: function(n, e, t) {
      (function(n, e) {
        var o = t("47a9");
        t("671b"), o(t("3240"));
        var a = o(t("5970"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(a.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    5970: function(n, e, t) {
      t.r(e);
      var o = t("9171"),
        a = t("6942");
      for (var f in a)["default"].indexOf(f) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(f);
      t("c24e");
      var u = t("828b"),
        i = Object(u.a)(a.default, o.b, o.c, !1, null, "3ccfdfe1", null, !1, o.a, void 0);
      e.default = i.exports
    },
    6942: function(n, e, t) {
      t.r(e);
      var o = t("2d11"),
        a = t.n(o);
      for (var f in o)["default"].indexOf(f) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(f);
      e.default = a.a
    },
    9171: function(n, e, t) {
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
    bfb1: function(n, e, t) {},
    c24e: function(n, e, t) {
      var o = t("bfb1");
      t.n(o).a
    }
  },
  [
    ["3923", "common/runtime", "common/vendor"]
  ]
]);