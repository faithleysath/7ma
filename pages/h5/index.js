(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/h5/index"], {
    "28cd": function(t, e, n) {
      n.r(e);
      var a = n("52a8"),
        i = n("5bd6");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(r);
      var o = n("828b"),
        u = Object(o.a)(i.default, a.b, a.c, !1, null, "80d6195e", null, !1, a.a, void 0);
      e.default = u.exports
    },
    "31c6": function(t, e, n) {
      (function(t, e) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var i = a(n("28cd"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "52a8": function(t, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "5bd6": function(t, e, n) {
      n.r(e);
      var a = n("cd49"),
        i = n.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(r);
      e.default = i.a
    },
    cd49: function(t, e, n) {
      (function(t) {
        var a = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = a(n("7eb4")),
          r = a(n("ee10")),
          o = {
            name: "index",
            data: function() {
              return {
                path: "",
                title: "",
                token: ""
              }
            },
            onShow: function() {
              var e = this;
              return (0, r.default)(i.default.mark((function n() {
                return i.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return e.hideLoading(), e.path = decodeURIComponent(e.$route.query.path), e.token = e.$route.query.token, (e.token || e.$route.query.client) && (e.path += (e.path.indexOf("?") > -1 ? "&" : "?") + "token=" + e.token + "&v=v1&client=" + e.$route.query.client), console.log(e.path), e.title = e.$route.query.title, t.setNavigationBarTitle({
                        title: e.title ? e.title : "7MA出行"
                      }), n.next = 9, e.getData();
                    case 9:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            methods: {
              getData: function() {
                var t = this;
                return (0, r.default)(i.default.mark((function e() {
                  var n;
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!(t.path.indexOf("activity/invite") > -1)) {
                          e.next = 5;
                          break
                        }
                        return e.next = 3, t.$http.get("invite/index");
                      case 3:
                        void 0 !== (n = e.sent).data && void 0 === n.data.errorcode && (t.data = n.data);
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              }
            },
            onShareAppMessage: function() {
              if (this.path.indexOf("activity/invite") > -1) return {
                title: this.data.title,
                path: "/pages/h5/index?title=" + this.data.title + "&path=" + encodeURIComponent(this.data.path),
                imageUrl: this.data.cover
              }
            }
          };
        e.default = o
      }).call(this, n("3223").default)
    }
  },
  [
    ["31c6", "common/runtime", "common/vendor"]
  ]
]);