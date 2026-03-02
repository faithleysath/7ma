(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/auth/phone"], {
    "0880": function(e, t, n) {
      n.r(t);
      var a = n("d52b"),
        r = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      t.default = r.a
    },
    "6ff3": function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var r = a(n("e75a"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "77b9": function(e, t, n) {},
    "7a17": function(e, t, n) {
      var a = n("77b9");
      n.n(a).a
    },
    8217: function(e, t, n) {
      var a = n("b9de");
      n.n(a).a
    },
    a11d: function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    b9de: function(e, t, n) {},
    d52b: function(e, t, n) {
      (function(e, a) {
        var r = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = r(n("7eb4")),
          s = r(n("ee10")),
          i = {
            name: "auth_phone",
            data: function() {
              return {
                phone: "",
                agreement: {
                  h5_title: ""
                },
                valid: !1,
                isPass: !1,
                status: 0,
                force_new_account: !1,
                restore_confirm: !1
              }
            },
            methods: {
              isPassChange: function(e) {
                this.isPass = e.detail
              },
              onInput: function(e) {
                var t = this;
                console.log("onInput", e);
                var n = "";
                11 === e.detail.length && (n = this.phone), this.phone = e.detail, this.phone.split(" ").join("").length > 11 ? setTimeout((function() {
                  t.phone = n || t.phone, t.valid = 11 === t.phone.split(" ").join("").length
                }), 0) : this.valid = 11 === this.phone.split(" ").join("").length
              },
              goBack: function() {
                e.switchTab({
                  url: "/pages/home/index"
                })
              },
              gotoAgreement: function() {
                this.gotoH5(this.agreement)
              },
              gotoVerificationcode: function() {
                var t = this;
                return (0, s.default)(o.default.mark((function n() {
                  var r;
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (t.valid) {
                          n.next = 2;
                          break
                        }
                        return n.abrupt("return");
                      case 2:
                        if (t.isPass) {
                          n.next = 5;
                          break
                        }
                        return e.showToast({
                          title: "请先阅读并同意《服务协议》",
                          icon: "none"
                        }), n.abrupt("return");
                      case 5:
                        if (e.getStorageSync("openid")) {
                          n.next = 8;
                          break
                        }
                        return e.showToast({
                          title: "微信授权失败",
                          icon: "none"
                        }), n.abrupt("return");
                      case 8:
                        return n.next = 10, t.$http.authPost("sms/send", {
                          phone: t.phone.split(" ").join(""),
                          type: "login",
                          scene: 1
                        });
                      case 10:
                        if (406 != (r = n.sent).status_code) {
                          n.next = 16;
                          break
                        }
                        return e.showModal({
                          title: "提示",
                          content: r.message,
                          confirmText: "知道了",
                          showCancel: !1,
                          success: function(e) {
                            e.confirm
                          }
                        }), n.abrupt("return");
                      case 16:
                        if (200 === r.status_code) {
                          n.next = 21;
                          break
                        }
                        return e.showToast({
                          title: void 0 !== r.message ? r.message : "验证码发送失败",
                          icon: "none"
                        }), n.abrupt("return");
                      case 21:
                        e.showToast({
                          title: void 0 !== r.message ? r.message : "验证码已发送"
                        });
                      case 22:
                        a.redirectTo({
                          url: "/pages/auth/verificationcode?phone=" + t.phone.split(" ").join("") + "&force_new_account=" + t.force_new_account + "&restore_confirm=" + t.restore_confirm
                        });
                      case 23:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              wx_login: function() {
                var t = this;
                return (0, s.default)(o.default.mark((function n() {
                  var a, r;
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return (a = t).status = 0, e.login({
                          success: function() {
                            var n = (0, s.default)(o.default.mark((function n(r) {
                              var s;
                              return o.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (!r.code) {
                                      n.next = 12;
                                      break
                                    }
                                    return n.next = 3, t.$http.post("miniapp/authorization_code", {
                                      code: r.code
                                    }).catch((function(e) {
                                      return {
                                        message: "授权超时",
                                        status_code: 255
                                      }
                                    }));
                                  case 3:
                                    if (200 === (s = n.sent).status_code) {
                                      n.next = 8;
                                      break
                                    }
                                    return e.showToast({
                                      title: s.message,
                                      icon: "none"
                                    }), a.status = 2, n.abrupt("return");
                                  case 8:
                                    a.status = 1, e.setStorageSync("openid", s.data.openid), n.next = 12;
                                    break;
                                  case 12:
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
                            a.status = 2
                          }
                        }), n.next = 5, t.$http.get("agreement/use_car");
                      case 5:
                        r = n.sent, t.agreement = r.data;
                      case 7:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              gotoAppeal: function() {
                a.redirectTo({
                  url: "/pages/appeal/index"
                })
              }
            },
            onLoad: function(e) {
              var t = this;
              return (0, s.default)(o.default.mark((function n() {
                var a, r;
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      a = e.force_new_account, r = e.restore_confirm, t.force_new_account = a, t.restore_confirm = r;
                    case 3:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            onShow: function() {
              var t = this;
              return (0, s.default)(o.default.mark((function n() {
                var a;
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return t.hideLoading(), a = getCurrentPages(), console.log("pages", a), t.phone = "", t.valid = !1, n.next = 7, t.wx_login();
                    case 7:
                      e.removeStorageSync("_401");
                    case 8:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            }
          };
        t.default = i
      }).call(this, n("3223").default, n("df3c").default)
    },
    e75a: function(e, t, n) {
      n.r(t);
      var a = n("a11d"),
        r = n("0880");
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(o);
      n("7a17"), n("8217");
      var s = n("828b"),
        i = Object(s.a)(r.default, a.b, a.c, !1, null, "3b5cdfc2", null, !1, a.a, void 0);
      t.default = i.exports
    }
  },
  [
    ["6ff3", "common/runtime", "common/vendor"]
  ]
]);