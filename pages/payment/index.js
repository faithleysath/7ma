(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/payment/index"], {
    1763: function(e, t, a) {
      a.d(t, "b", (function() {
        return r
      })), a.d(t, "c", (function() {
        return n
      })), a.d(t, "a", (function() {}));
      var r = function() {
          var e = this,
            t = (e.$createElement, e._self._c, 1 == e.has_stock || e.show_loading || e.loading2 ? null : e.__map(e.payments, (function(t, a) {
              return {
                $orig: e.__get_orig(t),
                g0: e.payments.length
              }
            })));
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: t
            }
          })
        },
        n = []
    },
    "1cb7": function(e, t, a) {
      var r = a("68a0");
      a.n(r).a
    },
    "372e": function(e, t, a) {},
    "4a14": function(e, t, a) {
      (function(e, t) {
        var r = a("47a9");
        a("671b"), r(a("3240"));
        var n = r(a("ce3f"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "68a0": function(e, t, a) {},
    "8b42": function(e, t, a) {
      (function(e, r) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = n(a("7eb4")),
          c = n(a("7ca3")),
          d = n(a("ee10"));

        function i(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), a.push.apply(a, r)
          }
          return a
        }

        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(a), !0).forEach((function(t) {
              (0, c.default)(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            }))
          }
          return e
        }
        var u = {
          name: "payment_index",
          components: {
            card: function() {
              a.e("pages/payment/components/card").then(function() {
                return resolve(a("6688"))
              }.bind(null, a)).catch(a.oe)
            }
          },
          data: function() {
            return {
              payments: [],
              checked_payment_id: 0,
              price: 0,
              card: {},
              order_id: 0,
              order_type: 0,
              card_type: 0,
              created_at: "",
              has_stock: 0,
              card_code: "",
              loading: !1,
              user: void 0,
              show_loading: !0,
              loading2: !0
            }
          },
          methods: {
            cardPlay: function(e) {
              this.checked_payment_id = e.checked_payment_id, this.pay()
            },
            getPayments: function() {
              var e = this;
              return (0, d.default)(o.default.mark((function t() {
                var a;
                return o.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.$http.get("payments?order_type=" + e.order_type);
                    case 2:
                      (a = t.sent).data && (e.payments = a.data);
                    case 4:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            checkPayment: function(e) {
              var t = this;
              return (0, d.default)(o.default.mark((function a() {
                var r;
                return o.default.wrap((function(a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      if (0 !== t.payments.length) {
                        a.next = 5;
                        break
                      }
                      return a.next = 3, t.getPayments();
                    case 3:
                      if (0 !== t.payments.length) {
                        a.next = 5;
                        break
                      }
                      return a.abrupt("return");
                    case 5:
                      r = t, t.payments.forEach((function(t, a) {
                        r.$set(t, "checked", a === e ? 1 : 0), 1 === t.checked && (r.checked_payment_id = t.id)
                      }));
                    case 7:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            pay: function() {
              var t = arguments,
                a = this;
              return (0, d.default)(o.default.mark((function n() {
                var c, d, i;
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if (c = t.length > 0 && void 0 !== t[0] ? t[0] : 1, !a.loading) {
                        n.next = 3;
                        break
                      }
                      return n.abrupt("return");
                    case 3:
                      return a.loading = !0, a.showLoading({
                        title: "支付中",
                        mask: !0
                      }), d = a, n.next = 8, a.$http.post("payment/pay", {
                        payment_id: a.checked_payment_id,
                        order_id: a.order_id,
                        order_type: a.order_type,
                        created_at: a.created_at,
                        wechat_openid: e.getStorageSync("openid"),
                        paysn_qz: c
                      });
                    case 8:
                      if (i = n.sent, console.log(i, "payment/pay返回结果"), 1 !== a.checked_payment_id || void 0 !== i.status_code || void 0 === i.data) {
                        n.next = 14;
                        break
                      }
                      e.showToast({
                        title: "支付成功",
                        icon: "success",
                        mask: !0,
                        complete: function() {
                          d.gotoPath()
                        }
                      }), n.next = 25;
                      break;
                    case 14:
                      if (void 0 === i.data || void 0 === i.data.payinfo || !i.data.payinfo) {
                        n.next = 24;
                        break
                      }
                      if ("0001" != i.data.payinfo.returnCode) {
                        n.next = 18;
                        break
                      }
                      return setTimeout((function() {
                        e.hideLoading(), a.loading = !1, e.showModal({
                          title: "重要提示",
                          content: "请确认该笔订单是否已支付，已支付请点击“我已支付”完成核验，如未支付请点击“重新支付”，完成订单支付。支付中如遇各种问题请联系客服，切勿重复支付！！",
                          cancelText: "我已支付",
                          confirmText: "重新支付",
                          success: function(e) {
                            e.confirm ? d.pay(2) : d.query_order()
                          }
                        })
                      }), 6e3), n.abrupt("return");
                    case 18:
                      if (888 != a.checked_payment_id) {
                        n.next = 21;
                        break
                      }
                      return r.redirectTo({
                        url: "/pages/payment/control?timeStamp=" + i.data.payinfo.timeStamp + "&nonceStr=" + encodeURIComponent(i.data.payinfo.nonceStr) + "&_package=" + encodeURIComponent(i.data.payinfo.package) + "&signType=" + encodeURIComponent(i.data.payinfo.signType) + "&paySign=" + encodeURIComponent(i.data.payinfo.paySign) + "&price=" + a.price + "&order_type=" + a.order_type
                      }), n.abrupt("return");
                    case 21:
                      e.requestPayment({
                        timeStamp: i.data.payinfo.timeStamp,
                        nonceStr: i.data.payinfo.nonceStr,
                        package: i.data.payinfo.package,
                        signType: i.data.payinfo.signType,
                        paySign: i.data.payinfo.paySign,
                        success: function() {
                          d.query_order()
                        },
                        fail: function(t) {
                          "requestPayment:fail cancel" == t.errMsg ? e.showToast({
                            title: "取消支付",
                            icon: "none"
                          }) : e.showToast({
                            title: "支付失败",
                            icon: "none"
                          }), d.loading = !1
                        }
                      }), n.next = 25;
                      break;
                    case 24:
                      void 0 !== i.data && i.data.cashier_url ? r.redirectTo({
                        url: "/pages/payment/h5?src=" + encodeURIComponent(i.data.cashier_url)
                      }) : (e.showToast({
                        title: void 0 !== i.message && i.message ? i.message : "发起支付失败",
                        icon: "none"
                      }), d.loading = !1);
                    case 25:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            query_order: function() {
              var t = this;
              return (0, d.default)(o.default.mark((function a() {
                var r, n;
                return o.default.wrap((function(a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      return t.showLoading({
                        title: "支付结果确认中",
                        mask: !0
                      }), a.next = 3, t.$http.get("payment/query_order?order_id=" + t.order_id + "&order_type=" + t.order_type + "&created_at=" + t.created_at);
                    case 3:
                      r = a.sent, t.hideLoading(), void 0 !== r.status_code && 200 === r.status_code ? (n = t, e.showToast({
                        title: "支付成功",
                        icon: "success",
                        mask: !0,
                        complete: function() {
                          n.gotoPath()
                        }
                      })) : e.showToast({
                        title: void 0 !== r.message && r.message ? r.message : "支付失败",
                        icon: "none"
                      });
                    case 6:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            gotoPath: function() {
              1 == this.order_type ? r.redirectTo({
                url: "/pages/order/detail?showBanner=1&order_id=" + this.order_id + "&created_at=" + this.created_at
              }) : 2 == this.order_type || 3 == this.order_type ? e.switchTab({
                url: "/pages/wallet/index"
              }) : 4 == this.order_type ? e.switchTab({
                url: "/pages/home/index"
              }) : 5 != this.order_type && 6 != this.order_type || e.switchTab({
                url: "/pages/home/index"
              })
            },
            getUser: function() {
              var e = this;
              return (0, d.default)(o.default.mark((function t() {
                var a;
                return o.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.$http.get("user");
                    case 2:
                      a = t.sent, e.user = a.data;
                    case 4:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            gotoRecharge: function() {
              r.navigateTo({
                url: "/pages/recharge/index"
              })
            },
            handleAutoPay: function() {
              var e = this;
              return (0, d.default)(o.default.mark((function t() {
                var a;
                return o.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (console.log("this.order_state", e.order_state), console.log("this.order_type", e.order_type), console.log("this.user.balance", e.user.balance), console.log("this.price", e.price), console.log("this.user.balance >= this.price", e.user.balance >= e.price), 40 != e.order_state) {
                        t.next = 9;
                        break
                      }
                      r.redirectTo({
                        url: "/pages/order/detail?showBanner=1&order_id=" + e.order_id + "&created_at=" + (e.created_at || "")
                      }), t.next = 14;
                      break;
                    case 9:
                      if (!(1 == e.order_type && parseFloat(e.user.balance) >= parseFloat(e.price))) {
                        t.next = 14;
                        break
                      }
                      return t.next = 12, e.$http.post("payment/pay", {
                        payment_id: 1,
                        order_id: e.order_id,
                        order_type: 1,
                        created_at: e.created_at
                      });
                    case 12:
                      void 0 !== (a = t.sent).data && void 0 !== a.data.order && r.redirectTo({
                        url: "/pages/order/detail?showBanner=1&order_id=" + e.order_id + "&created_at=" + (e.created_at || "")
                      });
                    case 14:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            setStorageInfo: function(t, a) {
              e.setStorageSync(t, s(s({}, a), {}, {
                time: Date.now()
              }))
            }
          },
          onShow: function() {
            var e = this;
            return (0, d.default)(o.default.mark((function t() {
              return o.default.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.hideLoading(), e.check_is_login().then((0, d.default)(o.default.mark((function t() {
                      return o.default.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.loading = !1, e.show_loading = !0, t.next = 4, e.getUser();
                          case 4:
                            e.show_loading = !1;
                          case 5:
                          case "end":
                            return t.stop()
                        }
                      }), t)
                    }))));
                  case 2:
                  case "end":
                    return t.stop()
                }
              }), t)
            })))()
          },
          onLoad: function(t) {
            var a = this;
            return (0, d.default)(o.default.mark((function r() {
              return o.default.wrap((function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    console.log(t), console.log("onLoad"), e.login({
                      success: function() {
                        var t = (0, d.default)(o.default.mark((function t(r) {
                          var n;
                          return o.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!r.code) {
                                  t.next = 6;
                                  break
                                }
                                return t.next = 3, a.$http.authPost("wechat/login", {
                                  code: r.code,
                                  device_id: e.getStorageSync("__DC_STAT_UUID"),
                                  force_new_account: !1,
                                  restore_confirm: !1
                                });
                              case 3:
                                n = t.sent, n.data.openid && e.setStorageSync("openid", a.user.wechat_openid);
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
                    }), a.loading2 = !0, a.check_is_login().then((0, d.default)(o.default.mark((function e() {
                      return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, a.getUser();
                          case 2:
                            getCurrentPages(), a.price = t.price, a.order_id = t.order_id, a.order_type = t.order_type, a.card_type = "undefined" !== t.card_type ? t.card_type : 0, a.order_state = "undefined" !== t.order_state ? t.order_state : 0, a.created_at = "undefined" !== t.created_at ? t.created_at : "", a.has_stock = t.has_stock, a.card_code = t.card_code, a.checkPayment(0), a.handleAutoPay(), a.loading2 = !1, a.has_stock && !t.formStore && a.setStorageInfo("hasStockCard", {
                              price: a.price,
                              order_id: a.order_id,
                              order_type: a.order_type,
                              card_type: a.card_type,
                              order_state: a.order_state,
                              created_at: a.created_at,
                              has_stock: a.has_stock,
                              card_code: a.card_code,
                              formStore: 1
                            });
                          case 15:
                          case "end":
                            return e.stop()
                        }
                      }), e)
                    }))));
                  case 5:
                  case "end":
                    return r.stop()
                }
              }), r)
            })))()
          }
        };
        t.default = u
      }).call(this, a("3223").default, a("df3c").default)
    },
    "91ea": function(e, t, a) {
      a.r(t);
      var r = a("8b42"),
        n = a.n(r);
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        a.d(t, e, (function() {
          return r[e]
        }))
      }(o);
      t.default = n.a
    },
    a536: function(e, t, a) {
      var r = a("372e");
      a.n(r).a
    },
    ce3f: function(e, t, a) {
      a.r(t);
      var r = a("1763"),
        n = a("91ea");
      for (var o in n)["default"].indexOf(o) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(o);
      a("1cb7"), a("a536");
      var c = a("828b"),
        d = Object(c.a)(n.default, r.b, r.c, !1, null, "6fc1d9b0", null, !1, r.a, void 0);
      t.default = d.exports
    }
  },
  [
    ["4a14", "common/runtime", "common/vendor"]
  ]
]);