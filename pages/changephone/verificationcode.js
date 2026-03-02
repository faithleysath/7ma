(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/changephone/verificationcode"], {
    "2a8b": function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    6032: function(e, t, n) {},
    "7baa": function(e, t, n) {},
    "89a0": function(e, t, n) {
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = a(n("7eb4")),
          i = a(n("ee10")),
          c = {
            name: "changephone_verificationcode",
            data: function() {
              return {
                phone: "",
                verification_code: "",
                verification_codes: ["", "", "", "", "", ""],
                focus: !0,
                show_focus: [!0, !1, !1, !1, !1, !1],
                sec: 60,
                code: "",
                interval: void 0,
                n: [0, 1, 2, 3, 4, 5],
                last_verification_code: "",
                is_loging: !1
              }
            },
            methods: {
              countdown: function() {
                var e = this;
                void 0 === this.interval && (this.code = "(" + this.sec + "秒)", this.interval = setInterval((function() {
                  e.sec--, e.code = "(" + e.sec + "秒)", e.sec <= 0 && (clearInterval(e.interval), e.interval = void 0, e.sec = 60, e.code = "重新获取")
                }), 1e3))
              },
              onInput: function(t) {
                var n = this;
                return (0, i.default)(o.default.mark((function a() {
                  var i, c;
                  return o.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (!n.is_loging) {
                          a.next = 2;
                          break
                        }
                        return a.abrupt("return");
                      case 2:
                        for (n.is_loging = !0, (n.last_verification_code.length < t.target.value.length || n.last_verification_code.length > t.target.value.length) && (n.show_focus = [], n.show_focus[t.target.value.length] = !0), n.last_verification_code = t.target.value, n.verification_codes = ["", "", "", "", "", ""], i = 0; i < t.target.value.length; i++) n.verification_codes[i] = t.target.value.substr(i, 1);
                        if (6 !== t.target.value.length) {
                          a.next = 12;
                          break
                        }
                        return a.next = 10, n.$http.post("user/change_phone", {
                          new_phone: n.phone,
                          verification_code: t.target.value
                        });
                      case 10:
                        void 0 !== (c = a.sent).status_code && 200 === c.status_code ? e.showToast({
                          title: void 0 !== c.message && c.message ? c.message : "换绑成功",
                          icon: "success",
                          complete: function() {
                            e.switchTab({
                              url: "/pages/member/index"
                            })
                          }
                        }) : e.showToast({
                          title: void 0 !== c.message ? c.message : "换绑失败",
                          icon: "none"
                        });
                      case 12:
                        n.is_loging = !1;
                      case 13:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              getVerificationCode: function() {
                var t = this;
                return (0, i.default)(o.default.mark((function n() {
                  var a;
                  return o.default.wrap((function(n) {
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
                          scene: 2
                        });
                      case 4:
                        200 !== (a = n.sent).status_code ? e.showToast({
                          title: void 0 !== a.message ? a.message : "验证码发送失败"
                        }) : e.showToast({
                          title: void 0 !== a.message ? a.message : "验证码已发送"
                        });
                      case 6:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              focusShow: function() {
                console.log("focusShow"), this.focus = !1, this.focus = !0
              },
              handleClipboardData: function(e) {}
            },
            onShow: function() {
              var e = this;
              this.hideLoading(), this.check_is_login().then((function() {
                e.phone = e.$route.query.phone, void 0 !== e.interval && (clearInterval(e.interval), e.interval = void 0), e.phone = e.$route.query.phone, e.countdown(), e.countdown()
              }))
            }
          };
        t.default = c
      }).call(this, n("3223").default)
    },
    "972d": function(e, t, n) {
      var a = n("7baa");
      n.n(a).a
    },
    b099: function(e, t, n) {
      n.r(t);
      var a = n("89a0"),
        o = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      t.default = o.a
    },
    c0c3: function(e, t, n) {
      n.r(t);
      var a = n("2a8b"),
        o = n("b099");
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      n("972d"), n("e240");
      var c = n("828b"),
        r = Object(c.a)(o.default, a.b, a.c, !1, null, "46fe93d8", null, !1, a.a, void 0);
      t.default = r.exports
    },
    e240: function(e, t, n) {
      var a = n("6032");
      n.n(a).a
    },
    fea5: function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var o = a(n("c0c3"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["fea5", "common/runtime", "common/vendor"]
  ]
]);