(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/auth/index"], {
    "192a": function(e, t, n) {},
    "4b77": function(e, t, n) {
      var o = n("afb1");
      n.n(o).a
    },
    "57f4": function(e, t, n) {
      n.r(t);
      var o = n("af2f"),
        a = n("700b");
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      n("8b52"), n("4b77");
      var c = n("828b"),
        i = Object(c.a)(a.default, o.b, o.c, !1, null, "af30a154", null, !1, o.a, void 0);
      t.default = i.exports
    },
    "700b": function(e, t, n) {
      n.r(t);
      var o = n("7814"),
        a = n.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      t.default = a.a
    },
    7814: function(e, t, n) {
      (function(e, o) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = a(n("7eb4")),
          c = a(n("7ca3")),
          i = a(n("ee10")),
          s = a(n("b2d0"));

        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(n), !0).forEach((function(t) {
              (0, c.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var d = {
          name: "auth_index",
          data: function() {
            return {
              authcode: "",
              session_key: "",
              isPass: !1,
              needAuthorization: !1,
              token: "",
              status: 0,
              force_new_account: !1,
              restore_confirm: !1,
              device_id: ""
            }
          },
          methods: {
            go: function(t) {
              e.navigateTo({
                url: t
              })
            },
            isPassChange: function(e) {
              this.isPass = e.detail
            },
            toast: function() {
              e.showToast({
                title: "请先阅读并同意《用户协议》与《隐私政策》",
                icon: "none"
              })
            },
            wx_login: function() {
              var t = this;
              return (0, i.default)(r.default.mark((function n() {
                var o;
                return r.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      s.default.updateXTraceId(), console.log("wx_login"), (o = t).status = 0, e.login({
                        success: function() {
                          var n = (0, i.default)(r.default.mark((function n(a) {
                            var c;
                            return r.default.wrap((function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  if (!a.code) {
                                    n.next = 9;
                                    break
                                  }
                                  return t.authcode = a.code, n.next = 4, t.$http.authPost("wechat/login", {
                                    code: t.authcode,
                                    device_id: t.device_id,
                                    force_new_account: t.force_new_account,
                                    restore_confirm: t.restore_confirm
                                  }).catch((function(e) {
                                    return console.log(e), {
                                      message: "授权超时",
                                      status_code: 255
                                    }
                                  }));
                                case 4:
                                  c = n.sent, console.log(c, "response"), 200 == c.status_code ? (o.status = 1, o.session_key = c.data.session_key, o.token = c.data.token, c.data.expire_time && (o.expire_time = new Date(c.data.expire_time.replace(/\-/g, "/")).getTime()), e.setStorageSync("openid", c.data.openid)) : 403001 == c.status_code ? e.showModal({
                                    title: "提示",
                                    content: c.message,
                                    confirmText: "创建账号",
                                    cancelText: "恢复账号",
                                    success: function(e) {
                                      e.confirm ? (t.force_new_account = !0, t.restore_confirm = !1) : (t.force_new_account = !1, t.restore_confirm = !0), t.wx_login()
                                    }
                                  }) : o.status = 2, n.next = 10;
                                  break;
                                case 9:
                                  console.log("登录失败！" + a.errMsg);
                                case 10:
                                case "end":
                                  return n.stop()
                              }
                            }), n)
                          })));
                          return function(e) {
                            return n.apply(this, arguments)
                          }
                        }(),
                        fail: function() {
                          o.status = 2
                        }
                      });
                    case 5:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            gotoUseCarAgreement: function() {
              var e = this;
              return (0, i.default)(r.default.mark((function t() {
                var n;
                return r.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.$http.get("agreement/use_car");
                    case 2:
                      n = t.sent, e.gotoH5(n.data);
                    case 4:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            gotoPrivacyAgreement: function() {
              var e = this;
              return (0, i.default)(r.default.mark((function t() {
                var n;
                return r.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.$http.get("agreement/privacy");
                    case 2:
                      n = t.sent, e.gotoH5(n.data);
                    case 4:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            gotoPhoneAuth: function() {
              o.redirectTo({
                url: "/pages/auth/phone?force_new_account=" + this.force_new_account + "&restore_confirm=" + this.restore_confirm
              })
            },
            gotoAppeal: function() {
              o.redirectTo({
                url: "/pages/appeal/index"
              })
            },
            auth: function(t) {
              var n = this;
              return (0, i.default)(r.default.mark((function a() {
                var c;
                return r.default.wrap((function(a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      return console.log("auth"), a.next = 3, n.$http.post("auth/wechat", {
                        authcode: n.authcode,
                        encryptData: t
                      });
                    case 3:
                      c = a.sent, console.log("auth/wechat"), console.log("auth/wechat", {
                        authcode: n.authcode,
                        encryptData: t
                      }), console.log("auth/wechat", c), void 0 !== c.data && void 0 !== c.data.token ? (e.setStorageSync("token", c.data.token), e.setStorageSync("token_expire_time", n.expire_time), n.$http.authGet("shared_key").then((function(e) {
                        if (e) {
                          var t = f(f({}, e), {}, {
                            id: e.session_id
                          });
                          s.default.setStorageKey(t.id, t.socketKey, t.socketUrl), o.$emit("checkAndReconnect"), n.$store.dispatch("wss/setUserInfo", t)
                        } else n.user = {}, n.$store.dispatch("wss/setUserInfo", {})
                      })), o.navigateBack({
                        delta: 1,
                        fail: function() {
                          e.switchTab({
                            url: "/pages/home/index"
                          })
                        }
                      })) : e.showToast({
                        title: void 0 !== c.message ? c.message : "登录失败",
                        icon: "none"
                      });
                    case 8:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            login: function() {
              var t = this;
              this.showLoading({
                title: "为您登录中...",
                icon: "none"
              }), e.setStorageSync("token", this.token), e.setStorageSync("token_expire_time", this.expire_time), this.$http.authGet("shared_key").then((function(e) {
                if (e) {
                  var n = f(f({}, e), {}, {
                    id: e.session_id
                  });
                  s.default.setStorageKey(n.id, n.socketKey, n.socketUrl), o.$emit("checkAndReconnect")
                } else t.user = {}
              })), setTimeout((function() {
                o.navigateBack({
                  delta: 1,
                  fail: function() {
                    e.switchTab({
                      url: "/pages/home/index"
                    })
                  }
                })
              }), 2e3)
            },
            fastLogin: function(t) {
              var n = this;
              console.log("fastLogin"), console.log(t), "getPhoneNumber:ok" == t.target.errMsg ? e.checkSession({
                success: function() {
                  var a = (0, i.default)(r.default.mark((function a(c) {
                    var i;
                    return r.default.wrap((function(a) {
                      for (;;) switch (a.prev = a.next) {
                        case 0:
                          return console.log("checkSession-success", c), n.showLoading({
                            title: "为您登录中...",
                            icon: "none"
                          }), a.next = 4, n.$http.authPost("wechat/bind_phone", {
                            device_id: n.device_id,
                            phone_code: t.detail.code,
                            wechat_openid: e.getStorageSync("openid")
                          });
                        case 4:
                          i = a.sent, console.log("miniapp/phone_number", i), 200 === i.status_code ? (e.setStorageSync("token", i.data.token), n.expire_time = new Date(i.data.expire_time.replace(/\-/g, "/")).getTime(), e.setStorageSync("token_expire_time", n.expire_time), n.$http.authGet("shared_key").then((function(e) {
                            if (e) {
                              var t = f(f({}, e), {}, {
                                id: e.session_id
                              });
                              s.default.setStorageKey(t.id, t.socketKey, t.socketUrl), o.$emit("checkAndReconnect"), n.$store.dispatch("wss/setUserInfo", t)
                            } else n.user = {}, n.$store.dispatch("wss/setUserInfo", {})
                          })), o.navigateBack({
                            delta: 1,
                            fail: function() {
                              e.switchTab({
                                url: "/pages/home/index"
                              })
                            }
                          })) : n.status = 2;
                        case 7:
                        case "end":
                          return a.stop()
                      }
                    }), a)
                  })));
                  return function(e) {
                    return a.apply(this, arguments)
                  }
                }(),
                fail: function(t) {
                  console.log("checkSession-fail", t), n.status = 2, e.showToast({
                    title: "本次登录已失效，请重新授权登录",
                    icon: "none"
                  })
                }
              }) : e.showToast({
                title: "获取微信手机号失败, 请尝试用其他方式登录",
                icon: "none"
              })
            }
          },
          onLoad: function() {
            var t = this;
            return (0, i.default)(r.default.mark((function n() {
              var o, a;
              return r.default.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    t.device_id = "", o = e.getStorageSync("device_id"), a = e.getStorageSync("openid"), t.device_id = o || "not_model", t.device_id = a ? t.device_id + "_" + a : t.device_id + "_not_openid";
                  case 5:
                  case "end":
                    return n.stop()
                }
              }), n)
            })))()
          },
          onShow: function() {
            var t = this;
            return (0, i.default)(r.default.mark((function n() {
              return r.default.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return e.getPrivacySetting && e.getPrivacySetting({
                      success: function(n) {
                        var o = n.needAuthorization,
                          a = n.privacyContractName;
                        t.needAuthorization = o, o && e.showModal({
                          title: "提示",
                          content: "您还未同意" + a + "，根据微信相关规定，请先同意" + a + "，否则将会影响您部分功能的使用",
                          confirmText: "前往查看",
                          success: function(t) {
                            t.confirm && e.navigateTo({
                              url: "/pages/privacy/privacy"
                            })
                          }
                        })
                      }
                    }), t.hideLoading(), e.removeStorageSync("_401"), n.next = 5, t.wx_login();
                  case 5:
                  case "end":
                    return n.stop()
                }
              }), n)
            })))()
          }
        };
        t.default = d
      }).call(this, n("3223").default, n("df3c").default)
    },
    "8b52": function(e, t, n) {
      var o = n("192a");
      n.n(o).a
    },
    af2f: function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    afb1: function(e, t, n) {},
    c5e4: function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("671b"), o(n("3240"));
        var a = o(n("57f4"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["c5e4", "common/runtime", "common/vendor"]
  ]
]);