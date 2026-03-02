(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/appeal/index"], {
    "149c": function(e, t, n) {},
    "28dd": function(e, t, n) {
      n.r(t);
      var a = n("ff60"),
        o = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      t.default = o.a
    },
    3558: function(e, t, n) {
      n.r(t);
      var a = n("5864"),
        o = n("28dd");
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      n("5b21"), n("bd6d");
      var s = n("828b"),
        c = Object(s.a)(o.default, a.b, a.c, !1, null, "43e2f56a", null, !1, a.a, void 0);
      t.default = c.exports
    },
    "35ae": function(e, t, n) {},
    5864: function(e, t, n) {
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
    "5b21": function(e, t, n) {
      var a = n("35ae");
      n.n(a).a
    },
    bd6d: function(e, t, n) {
      var a = n("149c");
      n.n(a).a
    },
    f836: function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var o = a(n("3558"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    ff60: function(e, t, n) {
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = a(n("7eb4")),
          i = a(n("ee10")),
          s = {
            name: "appeal_index",
            data: function() {
              return {
                show_labels: {
                  _1: !0,
                  _2: !0,
                  _3: !0,
                  _4: !0
                },
                old_phone: "",
                old_password: "",
                new_phone: "",
                verification_code: "",
                cert_photo: [],
                holding_cert_photo: "",
                valid: !1,
                tempImg: [],
                tempImgPath: [],
                upload_token: "",
                loading: !1,
                code: "获取验证码",
                sec: 60,
                interval: void 0,
                is_verify: 1
              }
            },
            methods: {
              onInput: function(e, t) {
                switch (console.log("onInput", e), this.show_labels["_" + t] = "" === e.detail, t) {
                  case 1:
                    this.old_phone = e.detail;
                    break;
                  case 2:
                    this.old_password = e.detail;
                    break;
                  case 3:
                    this.new_phone = e.detail;
                    break;
                  case 4:
                    this.verification_code = e.detail
                }
              },
              onBlur: function(e, t) {
                switch (console.log("onBlur", e), this.show_labels["_" + t] = "" === e.detail.value, t) {
                  case 1:
                    this.old_phone = e.detail.value;
                    break;
                  case 2:
                    this.old_password = e.detail.value;
                    break;
                  case 3:
                    this.new_phone = e.detail.value;
                    break;
                  case 4:
                    this.verification_code = e.detail.value
                }
              },
              getVerificationCode: function() {
                var t = this;
                return (0, i.default)(o.default.mark((function n() {
                  var a;
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, t.$http.post("verificationcode", {
                          phone: t.new_phone,
                          scene: 2
                        });
                      case 2:
                        void 0 !== (a = n.sent).status_code && 200 === a.status_code ? (t.countdown(), e.showToast({
                          title: void 0 !== a.message && a.message ? a.message : "发送成功",
                          icon: "success"
                        })) : e.showToast({
                          title: void 0 !== a.message && a.message ? a.message : "发送失败",
                          icon: "none"
                        });
                      case 4:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              countdown: function() {
                var e = this;
                void 0 === this.interval && (this.interval = setInterval((function() {
                  e.sec--, e.code = e.sec + "s", e.sec <= 0 && (clearInterval(e.interval), e.interval = void 0, e.sec = 60, e.code = "重新获取")
                }), 1e3))
              },
              getUploadToken: function() {
                var e = this;
                return (0, i.default)(o.default.mark((function t() {
                  var n;
                  return o.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.$http.get("qiniu/uploadtoken");
                      case 2:
                        void 0 !== (n = t.sent).data && void 0 !== n.data.token && (e.upload_token = n.data.token);
                      case 4:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              chooseImage: function(t) {
                var n = this;
                e.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["album", "camera"],
                  success: function() {
                    var e = (0, i.default)(o.default.mark((function e(a) {
                      return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            n.$set(n.tempImg, t, a.tempFilePaths), n.$set(n.tempImgPath, t, a.tempFilePaths[0]);
                          case 2:
                          case "end":
                            return e.stop()
                        }
                      }), e)
                    })));
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  }(),
                  fail: function(e) {
                    console.log(e)
                  }
                })
              },
              qiniuUpload: function(e) {
                var t = this;
                return new Promise((function(n, a) {
                  var o = t;
                  void 0 !== o.tempImgPath[e] ? o.$qiniuUploader.upload(o.tempImgPath[e], (function(t) {
                    o.$set(o.cert_photo, e, t.image.key), n()
                  }), (function() {
                    a()
                  }), {
                    region: "ECN",
                    uptoken: o.upload_token
                  }) : n()
                }))
              },
              submit: function() {
                var t = this;
                return (0, i.default)(o.default.mark((function n() {
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!t.loading) {
                          n.next = 2;
                          break
                        }
                        return n.abrupt("return");
                      case 2:
                        return t.showLoading({
                          title: "提交中",
                          mask: !0
                        }), t.loading = !0, n.next = 6, t.getUploadToken();
                      case 6:
                        Promise.all([t.qiniuUpload(1), t.qiniuUpload(2)]).then((0, i.default)(o.default.mark((function n() {
                          var a, i;
                          return o.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, t.$http.post("appeal", {
                                  old_phone: t.old_phone,
                                  old_password: t.$md5(t.old_password),
                                  new_phone: t.new_phone,
                                  verification_code: t.verification_code
                                });
                              case 2:
                                a = n.sent, i = t, void 0 !== a.status_code && 200 === a.status_code ? e.showToast({
                                  title: void 0 !== a.message && a.message ? a.message : "提交成功",
                                  icon: "success",
                                  complete: function() {
                                    i.loading = !1, i.hideLoading(), i.back()
                                  }
                                }) : e.showToast({
                                  title: void 0 !== a.message && a.message ? a.message : "提交失败",
                                  icon: "none",
                                  complete: function(e) {
                                    i.loading = !1
                                  }
                                });
                              case 5:
                              case "end":
                                return n.stop()
                            }
                          }), n)
                        })))).catch((function(n) {
                          t.loading = !1, t.hideLoading(), e.showToast({
                            title: "提交失败",
                            icon: "none"
                          })
                        }));
                      case 7:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              check_is_verify: function() {
                var e = this;
                return (0, i.default)(o.default.mark((function t() {
                  return o.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.$http.get("is_verify");
                      case 2:
                        1 === t.sent.ret ? e.is_verify = 1 : e.is_verify = 0;
                      case 4:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              }
            },
            onShow: function() {
              this.hideLoading(), this.check_is_verify()
            },
            onUnload: function() {
              Object.assign(this.$data, this.$options.data())
            }
          };
        t.default = s
      }).call(this, n("3223").default)
    }
  },
  [
    ["f836", "common/runtime", "common/vendor"]
  ]
]);