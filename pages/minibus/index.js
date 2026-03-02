(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/minibus/index"], {
    "1b38": function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var o = a(n("673f"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "673f": function(e, t, n) {
      n.r(t);
      var a = n("f70e"),
        o = n("a46d");
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      n("c025");
      var r = n("828b"),
        c = Object(r.a)(o.default, a.b, a.c, !1, null, "094a41b4", null, !1, a.a, void 0);
      t.default = c.exports
    },
    "7f04": function(e, t, n) {},
    a46d: function(e, t, n) {
      n.r(t);
      var a = n("f679"),
        o = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      t.default = o.a
    },
    c025: function(e, t, n) {
      var a = n("7f04");
      n.n(a).a
    },
    f679: function(e, t, n) {
      (function(e, a) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = o(n("7eb4")),
          r = o(n("ee10")),
          c = {
            data: function() {
              return {
                form: {
                  number: "",
                  payment_id: "",
                  person_number: 1,
                  order_type: 7,
                  wechat_openid: e.getStorageSync("openid")
                },
                info: {
                  active_card: {},
                  number: "",
                  price: 0
                },
                user: {
                  balance: 0
                },
                moreList: [],
                paymentList: [],
                morePicker: !1
              }
            },
            onLoad: function(t) {
              var n = this;
              return (0, r.default)(i.default.mark((function a() {
                var o, c;
                return i.default.wrap((function(a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      for (o = t.number, e.login({
                          success: function() {
                            var t = (0, r.default)(i.default.mark((function t(a) {
                              var o, r;
                              return i.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!a.code) {
                                      t.next = 6;
                                      break
                                    }
                                    return t.next = 3, n.$http.authPost("wechat/login", {
                                      code: a.code,
                                      device_id: e.getStorageSync("__DC_STAT_UUID"),
                                      force_new_account: !1,
                                      restore_confirm: !1
                                    });
                                  case 3:
                                    o = t.sent, (r = o.data.openid) && (e.setStorageSync("openid", n.user.wechat_openid), n.form.wechat_openid = r);
                                  case 6:
                                  case "end":
                                    return t.stop()
                                }
                              }), t)
                            })));
                            return function(e) {
                              return t.apply(this, arguments)
                            }
                          }(),
                          fail: function() {}
                        }), n.moreList = [], c = 5; c <= 20; c++) n.moreList.push({
                        name: c + "人",
                        id: c
                      });
                      n.form.number = o, n.getPaymentList();
                    case 6:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            onShow: function() {
              this.getUser(), this.getCarInfo()
            },
            methods: {
              go: function(e) {
                a.navigateTo({
                  url: e
                })
              },
              togglePaymentId: function(e) {
                this.form.payment_id = e.id
              },
              getUser: function() {
                var e = this;
                this.$http.get("user").then((function(t) {
                  e.user = t.data
                }))
              },
              payment: function() {
                var t = this;
                e.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.$http.post("payment/pay", this.form).then((function(n) {
                  if (e.hideLoading(), 1 == t.form.payment_id && void 0 === n.status_code && void 0 !== n.data) e.showToast({
                    title: "支付成功",
                    icon: "success",
                    mask: !0,
                    complete: function() {
                      a.reLaunch({
                        url: "/pages/home/index"
                      })
                    }
                  });
                  else if (void 0 !== n.data && void 0 !== n.data.payinfo && n.data.payinfo) {
                    if (888 == t.checked_payment_id) return void a.redirectTo({
                      url: "/pages/payment/control?timeStamp=" + n.data.payinfo.timeStamp + "&nonceStr=" + encodeURIComponent(n.data.payinfo.nonceStr) + "&_package=" + encodeURIComponent(n.data.payinfo.package) + "&signType=" + encodeURIComponent(n.data.payinfo.signType) + "&paySign=" + encodeURIComponent(n.data.payinfo.paySign) + "&price=" + t.getPrice + "&order_type=7"
                    });
                    e.requestPayment({
                      timeStamp: n.data.payinfo.timeStamp,
                      nonceStr: n.data.payinfo.nonceStr,
                      package: n.data.payinfo.package,
                      signType: n.data.payinfo.signType,
                      paySign: n.data.payinfo.paySign,
                      success: function() {
                        a.reLaunch({
                          url: "/pages/home/index"
                        })
                      },
                      fail: function(t) {
                        "requestPayment:fail cancel" == t.errMsg ? e.showToast({
                          title: "取消支付",
                          icon: "none"
                        }) : e.showToast({
                          title: "支付失败",
                          icon: "none"
                        })
                      }
                    })
                  } else void 0 !== n.data && n.data.cashier_url ? a.redirectTo({
                    url: "/pages/payment/h5?src=" + encodeURIComponent(n.data.cashier_url)
                  }) : e.showToast({
                    title: n.message || "发起支付失败",
                    icon: "none",
                    complete: function() {
                      "支付成功" == n.message && a.reLaunch({
                        url: "/pages/home/index"
                      })
                    }
                  })
                })).catch((function(t) {
                  e.hideLoading()
                }))
              },
              getCarInfo: function() {
                var e = this;
                this.$http.get("minibus/" + this.form.number).then((function(t) {
                  e.info = t.data
                }))
              },
              confirm: function(e) {
                var t = e.detail;
                this.form.person_number = t.value.id, this.morePicker = !1
              },
              togglePersonNumber: function(e) {
                this.form.person_number = e
              },
              getPaymentList: function() {
                var e = this;
                this.$http.get("payments", {
                  order_type: 7,
                  number: this.form.number
                }).then((function(t) {
                  e.paymentList = t.data, e.form.payment_id = t.data[0] ? t.data[0].id : ""
                }))
              }
            },
            computed: {
              getPrice: function() {
                return ((this.info.active_card.id ? this.form.person_number - 1 : this.form.person_number) * this.info.price).toFixed(2)
              }
            }
          };
        t.default = c
      }).call(this, n("3223").default, n("df3c").default)
    },
    f70e: function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var a = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.morePicker = !0
          }, e.e1 = function(t) {
            e.morePicker = !1
          })
        },
        o = []
    }
  },
  [
    ["1b38", "common/runtime", "common/vendor"]
  ]
]);