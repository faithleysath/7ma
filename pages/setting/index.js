(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/setting/index"], {
    "0f46": function(t, e, n) {
      n.r(e);
      var a = n("8779"),
        r = n.n(a);
      for (var u in a)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(u);
      e.default = r.a
    },
    "10af": function(t, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return r
      })), n.d(e, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    8779: function(t, e, n) {
      (function(t) {
        var a = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = a(n("7eb4")),
          u = a(n("af34")),
          o = a(n("ee10")),
          c = a(n("1020")),
          i = a(n("b2d0")),
          s = {
            name: "setting_index",
            data: function() {
              return {
                menus: [{
                  icon: "refresh.png",
                  title: "检查新版本(" + c.default.version + ")"
                }, {
                  icon: "about_us.png",
                  title: "关于我们"
                }],
                about_us: void 0
              }
            },
            methods: {
              action: function(e) {
                var n = this;
                return (0, o.default)(r.default.mark((function a() {
                  return r.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        a.t0 = e, a.next = 0 === a.t0 ? 3 : 1 === a.t0 ? 5 : 2 === a.t0 ? 7 : 3 === a.t0 ? 11 : 15;
                        break;
                      case 3:
                        return n.checkNewVersion(), a.abrupt("break", 15);
                      case 5:
                        return void 0 !== n.about_us && n.gotoH5({
                          h5_title: n.about_us.h5_title,
                          h5_url: n.about_us.h5_url
                        }), a.abrupt("break", 15);
                      case 7:
                        if (t.getStorageSync("token")) {
                          a.next = 9;
                          break
                        }
                        return a.abrupt("return");
                      case 9:
                        return t.showModal({
                          title: "温馨提示",
                          content: "您将退出7MA出行",
                          success: function() {
                            var t = (0, o.default)(r.default.mark((function t(e) {
                              return r.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!e.confirm) {
                                      t.next = 3;
                                      break
                                    }
                                    return t.next = 3, n.logout();
                                  case 3:
                                  case "end":
                                    return t.stop()
                                }
                              }), t)
                            })));
                            return function(e) {
                              return t.apply(this, arguments)
                            }
                          }()
                        }), a.abrupt("break", 15);
                      case 11:
                        if (t.getStorageSync("token")) {
                          a.next = 13;
                          break
                        }
                        return a.abrupt("return");
                      case 13:
                        return t.showModal({
                          title: "温馨提示",
                          content: "注销后该账余额、套餐卡都将清零，是否确定注销?",
                          success: function() {
                            var e = (0, o.default)(r.default.mark((function e(a) {
                              return r.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    a.confirm && n.$http.get("user/logout").then((function(e) {
                                      200 == e.status_code ? (t.removeStorageSync("token"), i.default.clearStorage(), n.$store.dispatch("wss/close"), t.switchTab({
                                        url: "/pages/home/index",
                                        complete: function(t) {}
                                      })) : t.showToast({
                                        title: e.message,
                                        icon: "none"
                                      })
                                    }));
                                  case 1:
                                  case "end":
                                    return e.stop()
                                }
                              }), e)
                            })));
                            return function(t) {
                              return e.apply(this, arguments)
                            }
                          }()
                        }), a.abrupt("break", 15);
                      case 15:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              logout: function() {
                t.removeStorageSync("token"), i.default.clearStorage(), this.$store.dispatch("wss/close"), t.switchTab({
                  url: "/pages/home/index",
                  complete: function(t) {}
                })
              },
              getAboutUs: function() {
                var t = this;
                return (0, o.default)(r.default.mark((function e() {
                  var n;
                  return r.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.$http.get("aboutus");
                      case 2:
                        void 0 !== (n = e.sent).data && (t.about_us = n.data);
                      case 4:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              }
            },
            onShow: function() {
              (this.hideLoading(), t.getStorageSync("token")) && (this.menus.some((function(t) {
                return "退出登录" == t.title || "注销" == t.title
              })) || (this.menus = [].concat((0, u.default)(this.menus), [{
                icon: "logout.png",
                title: "退出登录"
              }, {
                icon: "loginout.png",
                title: "注销"
              }])));
              this.getAboutUs()
            },
            onUnload: function() {
              Object.assign(this.$data, this.$options.data())
            }
          };
        e.default = s
      }).call(this, n("3223").default)
    },
    "986c": function(t, e, n) {
      (function(t, e) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var r = a(n("aaee"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "99f8": function(t, e, n) {
      var a = n("a92f");
      n.n(a).a
    },
    a92f: function(t, e, n) {},
    aaee: function(t, e, n) {
      n.r(e);
      var a = n("10af"),
        r = n("0f46");
      for (var u in r)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(u);
      n("99f8");
      var o = n("828b"),
        c = Object(o.a)(r.default, a.b, a.c, !1, null, "31d69968", null, !1, a.a, void 0);
      e.default = c.exports
    }
  },
  [
    ["986c", "common/runtime", "common/vendor"]
  ]
]);