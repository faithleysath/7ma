(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/seat/index"], {
    4143: function(e, n, t) {},
    "5ac0": function(e, n, t) {
      (function(e, o) {
        var a = t("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var c = a(t("7eb4")),
          i = a(t("ee10")),
          u = {
            data: function() {
              return {
                code: "",
                user: {},
                union_id: ""
              }
            },
            onLoad: function(e) {
              this.code = e.q ? this.getQueryVariable(decodeURIComponent(e.q), "code") : e.code, console.log(this.code, "code")
            },
            onShow: function() {
              var e = this;
              setTimeout((function() {
                e.getUnionId()
              }), 1e3)
            },
            methods: {
              getUnionId: function() {
                var n = this;
                return (0, i.default)(c.default.mark((function t() {
                  var a, i;
                  return c.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (e.getStorageSync("token")) {
                          t.next = 3;
                          break
                        }
                        return e.navigateTo({
                          url: "/pages/auth/index"
                        }), t.abrupt("return");
                      case 3:
                        return e.showLoading({
                          title: "加载中",
                          mask: !0
                        }), t.next = 6, n.$http.get("user");
                      case 6:
                        return a = t.sent, n.user = a.data, t.next = 10, n.$http.post("user/getUserUnion", {
                          school_id: n.user.school_id
                        });
                      case 10:
                        i = t.sent, console.log(a, i, n.user.school_id, 12234234), e.hideLoading(), 200 == i.status_code ? n.union_id = i.data.union_id : 40010 == i.status_code ? o.showModal({
                          title: "提示",
                          content: "您还没有认证，请前往认证",
                          confirmText: "前往认证",
                          showCancel: !1,
                          success: function(e) {
                            o.navigateTo({
                              url: "/pages/cert/cert1"
                            })
                          }
                        }) : o.showModal({
                          title: "提示",
                          content: i.message,
                          confirmText: "好的",
                          showCancel: !1,
                          success: function(e) {
                            n.goHome()
                          }
                        });
                      case 14:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              goHome: function() {
                e.reLaunch({
                  url: "/pages/home/index"
                })
              },
              go: function() {
                var n = this;
                e.navigateToMiniProgram({
                  appId: "wx301b6388b50aca83",
                  path: "pages/home/index",
                  envVersion: "trial",
                  extraData: {
                    code: this.code,
                    uid: this.union_id,
                    post_type: "qima"
                  },
                  success: function(e) {
                    console.log(e, "成功"), n.$http.post("user/setUserUnionLog", {
                      code: n.code
                    })
                  },
                  fail: function(e) {
                    console.log(e)
                  }
                })
              }
            }
          };
        n.default = u
      }).call(this, t("3223").default, t("df3c").default)
    },
    "5d4d": function(e, n, t) {
      t.r(n);
      var o = t("7842"),
        a = t("715d");
      for (var c in a)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return a[e]
        }))
      }(c);
      t("7350");
      var i = t("828b"),
        u = Object(i.a)(a.default, o.b, o.c, !1, null, "96ec0922", null, !1, o.a, void 0);
      n.default = u.exports
    },
    "715d": function(e, n, t) {
      t.r(n);
      var o = t("5ac0"),
        a = t.n(o);
      for (var c in o)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(c);
      n.default = a.a
    },
    7350: function(e, n, t) {
      var o = t("4143");
      t.n(o).a
    },
    7842: function(e, n, t) {
      t.d(n, "b", (function() {
        return o
      })), t.d(n, "c", (function() {
        return a
      })), t.d(n, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    b4d1: function(e, n, t) {
      (function(e, n) {
        var o = t("47a9");
        t("671b"), o(t("3240"));
        var a = o(t("5d4d"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, n(a.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    }
  },
  [
    ["b4d1", "common/runtime", "common/vendor"]
  ]
]);