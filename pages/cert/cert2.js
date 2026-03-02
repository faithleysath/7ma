(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/cert/cert2"], {
    "2e82": function(e, t, n) {},
    "363c": function(e, t, n) {
      n.r(t);
      var a = n("a638"),
        r = n("df44");
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(o);
      n("dd68"), n("cbad");
      var i = n("828b"),
        c = Object(i.a)(r.default, a.b, a.c, !1, null, "5cf9e532", null, !1, a.a, void 0);
      t.default = c.exports
    },
    "391a": function(e, t, n) {
      (function(e, a) {
        var r = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = r(n("7eb4")),
          i = r(n("ee10")),
          c = {
            name: "cert_cert2",
            data: function() {
              return {
                user_name: "",
                identity_number: "",
                cert_photo: [],
                tempImg: [],
                tempImgPath: [],
                upload_token: "",
                deposit_price: "",
                cert: void 0,
                show_loading: !0,
                loading: !1,
                agreement1: {},
                agreement2: {},
                is_verify: 1
              }
            },
            methods: {
              onInput: function(e, t) {
                console.log("onInput", e), 1 == t ? this.user_name = e.detail : 2 == t && (this.identity_number = e.detail)
              },
              onBlur: function(e, t) {
                console.log("onBlur", e), 1 == t ? this.user_name = e.detail.value : 2 == t && (this.identity_number = e.detail.value)
              },
              gotoPayment: function() {
                var t = this;
                return (0, i.default)(o.default.mark((function n() {
                  var r;
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return t.showLoading({
                          title: "订单创建中",
                          mask: !0
                        }), n.next = 4, t.$http.post("order", {
                          order_type: 4,
                          price: t.deposit_price
                        });
                      case 4:
                        if (200 !== (r = n.sent).status_code) {
                          n.next = 9;
                          break
                        }
                        e.showToast({
                          title: r.message,
                          icon: "success",
                          mask: !0,
                          complete: function() {
                            a.redirectTo({
                              url: "/pages/payment/index?order_id=" + r.data.order_id + "&order_type=" + r.data.order_type + "&price=" + r.data.order_amount
                            })
                          }
                        }), n.next = 11;
                        break;
                      case 9:
                        return e.showToast({
                          title: r.message,
                          icon: "none"
                        }), n.abrupt("return");
                      case 11:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getDepositPrice: function() {
                var e = this;
                return (0, i.default)(o.default.mark((function t() {
                  var n;
                  return o.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.$http.get("depositprice");
                      case 2:
                        void 0 !== (n = t.sent).data && "{}" !== JSON.stringify(n.data) && (e.deposit_price = n.data.price);
                      case 4:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getCert: function() {
                var e = this;
                return (0, i.default)(o.default.mark((function t() {
                  var n;
                  return o.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e.show_loading = !0, t.next = 3, e.$http.get("cert?type=2");
                      case 3:
                        n = t.sent, e.show_loading = !1, void 0 !== n.data && "{}" !== JSON.stringify(n.data) && (e.cert = n.data, e.user_name = e.cert.user_name, e.identity_number = e.cert.identity_number, e.$set(e.cert_photo, "1", e.cert.cert_photo), e.$set(e.cert_photo, "2", e.cert.holding_cert_photo), e.$set(e.tempImg, "1", e.cert.cert_photo_url), e.$set(e.tempImg, "2", e.cert.holding_cert_photo_url));
                      case 6:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
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
                if (void 0 === this.cert || 1 != this.cert.status && 3 != this.cert.status) {
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
                    fail: function(e) {}
                  })
                }
              },
              qiniuUpload: function(e) {
                var t = this;
                return new Promise((function(n, a) {
                  var r = t;
                  void 0 !== r.tempImgPath[e] ? r.$qiniuUploader.upload(r.tempImgPath[e], (function(t) {
                    console.log("$qiniuUploader", t), r.$set(r.cert_photo, e, t.image.key), n()
                  }), (function() {
                    a()
                  }), {
                    region: "ECN",
                    uptoken: r.upload_token
                  }) : n()
                }))
              },
              submitCert: function() {
                var t = this;
                return (0, i.default)(o.default.mark((function n() {
                  var a;
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (a = t, !t.loading) {
                          n.next = 3;
                          break
                        }
                        return n.abrupt("return");
                      case 3:
                        return t.showLoading({
                          title: "提交中",
                          mask: !0
                        }), t.loading = !0, n.next = 7, t.getUploadToken();
                      case 7:
                        Promise.all([t.qiniuUpload(1), t.qiniuUpload(2)]).then((0, i.default)(o.default.mark((function n() {
                          var r;
                          return o.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, t.$http.post("cert", {
                                  type: 2,
                                  user_name: t.user_name,
                                  identity_number: t.identity_number,
                                  cert_photo: void 0 !== t.cert_photo[1] ? t.cert_photo[1] : "",
                                  holding_cert_photo: void 0 !== t.cert_photo[2] ? t.cert_photo[2] : ""
                                });
                              case 2:
                                void 0 !== (r = n.sent).status_code && 200 === r.status_code ? e.showToast({
                                  title: void 0 !== r.message && r.message ? r.message : "提交成功",
                                  icon: "success",
                                  mask: !0,
                                  complete: function() {
                                    a.loading = !1, void 0 === a.cert || void 0 !== a.cert.status && 0 == a.cert.status ? a.gotoPayment() : e.switchTab({
                                      url: "/pages/home/index"
                                    })
                                  }
                                }) : e.showToast({
                                  title: void 0 !== r.message && r.message ? r.message : "提交失败",
                                  icon: "none",
                                  complete: function() {
                                    a.loading = !1
                                  }
                                });
                              case 4:
                              case "end":
                                return n.stop()
                            }
                          }), n)
                        })))).catch((function(t) {
                          a.hideLoading(), e.showToast({
                            title: "提交失败",
                            icon: "none"
                          })
                        }));
                      case 8:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              gotoAgreement: function(e) {
                this.gotoH5(1 === e ? this.agreement1 : this.agreement2)
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
              },
              gotoRight: function() {
                a.navigateTo({
                  url: "/pages/service/index"
                })
              }
            },
            onShow: function() {
              this.hideLoading(), this.check_is_verify(), this.check_is_login()
            },
            onLoad: function() {
              var e = this;
              return (0, i.default)(o.default.mark((function t() {
                var n, a;
                return o.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return e.getCert(), e.getDepositPrice(), t.next = 4, e.$http.get("agreement/use_car");
                    case 4:
                      return n = t.sent, e.agreement1 = n.data, t.next = 8, e.$http.get("agreement/recharge");
                    case 8:
                      a = t.sent, e.agreement2 = a.data;
                    case 10:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            onUnload: function() {
              Object.assign(this.$data, this.$options.data())
            }
          };
        t.default = c
      }).call(this, n("3223").default, n("df3c").default)
    },
    7082: function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var r = a(n("363c"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    a638: function(e, t, n) {
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
    cbad: function(e, t, n) {
      var a = n("ea34");
      n.n(a).a
    },
    dd68: function(e, t, n) {
      var a = n("2e82");
      n.n(a).a
    },
    df44: function(e, t, n) {
      n.r(t);
      var a = n("391a"),
        r = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      t.default = r.a
    },
    ea34: function(e, t, n) {}
  },
  [
    ["7082", "common/runtime", "common/vendor"]
  ]
]);