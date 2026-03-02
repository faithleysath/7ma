(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/auth/verificationcode"], {
    "40fa": function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "491e": function(e, t, n) {
      n.r(t);
      var o = n("40fa"),
        i = n("9009");
      for (var r in i)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(r);
      n("a1fd"), n("b018");
      var a = n("828b"),
        c = Object(a.a)(i.default, o.b, o.c, !1, null, "9464c24a", null, !1, o.a, void 0);
      t.default = c.exports
    },
    "514e": function(e, t, n) {},
    "6faf": function(e, t, n) {
      (function(e, o) {
        var i = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = i(n("7eb4")),
          a = i(n("7ca3")),
          c = i(n("ee10")),
          s = i(n("b2d0"));

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
              (0, a.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var d = {
          name: "auth_verificationcode",
          data: function() {
            return {
              phone: "",
              verification_code: "",
              verification_codes: ["", "", "", "", "", ""],
              show_focus: [!0, !1, !1, !1, !1, !1],
              focus: !0,
              sec: 60,
              code: "",
              interval: void 0,
              n: [0, 1, 2, 3, 4, 5],
              last_verification_code: "",
              is_loging: !1,
              force_new_account: !1,
              restore_confirm: !1,
              device_id: ""
            }
          },
          methods: {
            countdown: function() {
              var e = this;
              void 0 === this.interval && (this.code = this.sec + "s后重新获取", this.interval = setInterval((function() {
                e.sec--, e.code = e.sec + "s后重新获取", e.sec <= 0 && (clearInterval(e.interval), e.interval = void 0, e.sec = 60, e.code = "重新获取")
              }), 1e3))
            },
            onInput: function(t) {
              var n = this;
              return (0, c.default)(r.default.mark((function i() {
                var a, c, u;
                return r.default.wrap((function(i) {
                  for (;;) switch (i.prev = i.next) {
                    case 0:
                      if (!n.is_loging) {
                        i.next = 2;
                        break
                      }
                      return i.abrupt("return");
                    case 2:
                      for (n.is_loging = !0, (n.last_verification_code.length < t.target.value.length || n.last_verification_code.length > t.target.value.length) && (n.show_focus = [], n.show_focus[t.target.value.length] = !0), n.last_verification_code = t.target.value, n.verification_codes = ["", "", "", "", "", ""], a = 0; a < t.target.value.length; a++) n.verification_codes[a] = t.target.value.substr(a, 1);
                      if (6 !== t.target.value.length) {
                        i.next = 12;
                        break
                      }
                      return i.next = 10, n.$http.authPost("login", {
                        phone: n.phone,
                        code: t.target.value,
                        login_type: "sms_code",
                        device_id: n.device_id,
                        force_new_account: n.force_new_account,
                        restore_confirm: n.restore_confirm,
                        wechat_openid: e.getStorageSync("openid")
                      });
                    case 10:
                      void 0 !== (c = i.sent).data && void 0 !== c.data.token ? (e.setStorageSync("token", c.data.token), u = new Date(c.data.expire_time.replace(/\-/g, "/")).getTime(), e.setStorageSync("token_expire_time", u), n.$http.authGet("shared_key").then((function(e) {
                        if (e) {
                          var t = f(f({}, e), {}, {
                            id: e.session_id
                          });
                          s.default.setStorageKey(t.id, t.socketKey, t.socketUrl), o.$emit("checkAndReconnect"), n.$store.dispatch("wss/setUserInfo", t)
                        } else n.user = {}, n.$store.dispatch("wss/setUserInfo", {})
                      })), n.reset(), o.navigateBack({
                        delta: 3,
                        fail: function() {
                          e.switchTab({
                            url: "/pages/home/index"
                          })
                        }
                      })) : e.showToast({
                        title: void 0 !== c.message ? c.message : "登录失败",
                        icon: "none"
                      });
                    case 12:
                      n.is_loging = !1;
                    case 13:
                    case "end":
                      return i.stop()
                  }
                }), i)
              })))()
            },
            getVerificationCode: function() {
              var t = this;
              return (0, c.default)(r.default.mark((function n() {
                var o;
                return r.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if ("重新获取" === t.code) {
                        n.next = 2;
                        break
                      }
                      return n.abrupt("return");
                    case 2:
                      return n.next = 4, t.$http.post("verificationcode", {
                        phone: t.phone,
                        scene: 1
                      });
                    case 4:
                      200 !== (o = n.sent).status_code ? e.showToast({
                        title: void 0 !== o.message ? o.message : "验证码发送失败",
                        icon: "none"
                      }) : (e.showToast({
                        title: void 0 !== o.message ? o.message : "验证码已发送"
                      }), t.countdown());
                    case 6:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            gotoService: function() {
              o.navigateTo({
                url: "/pages/service/index"
              })
            },
            handleClipboardData: function(e) {},
            reset: function() {
              console.log("reset"), this.verification_code = "", this.verification_codes = ["", "", "", "", "", ""], this.focus = !0, this.show_focus = [!0], this.sec = 60, this.code = "", this.last_verification_code = "", void 0 !== this.interval && (clearInterval(this.interval), this.interval = void 0)
            }
          },
          onShow: function() {
            this.hideLoading(), void 0 !== this.interval && (clearInterval(this.interval), this.interval = void 0), this.phone = this.$route.query.phone, this.countdown()
          },
          onLoad: function(t) {
            var n = this;
            return (0, c.default)(r.default.mark((function o() {
              var i, a, c, s;
              return r.default.wrap((function(o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    i = t.force_new_account, a = t.restore_confirm, n.device_id = "", c = e.getStorageSync("device_id"), s = e.getStorageSync("openid"), n.device_id = c || "not_model", n.device_id = s ? n.device_id + "_" + s : n.device_id + "_not_openid", n.force_new_account = "true" == i, n.restore_confirm = "true" == a;
                  case 8:
                  case "end":
                    return o.stop()
                }
              }), o)
            })))()
          },
          onUnload: function() {
            this.reset()
          }
        };
        t.default = d
      }).call(this, n("3223").default, n("df3c").default)
    },
    9009: function(e, t, n) {
      n.r(t);
      var o = n("6faf"),
        i = n.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      t.default = i.a
    },
    a1fd: function(e, t, n) {
      var o = n("514e");
      n.n(o).a
    },
    b018: function(e, t, n) {
      var o = n("ce05");
      n.n(o).a
    },
    c325: function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("671b"), o(n("3240"));
        var i = o(n("491e"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    ce05: function(e, t, n) {}
  },
  [
    ["c325", "common/runtime", "common/vendor"]
  ]
]);