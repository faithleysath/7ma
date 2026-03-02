(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/wallet/index"], {
    1317: function(t, e, n) {
      n.r(e);
      var a = n("b43e"),
        r = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      e.default = r.a
    },
    3070: function(t, e, n) {
      (function(t, e) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var r = a(n("b8f5"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "3a2f": function(t, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return r
      })), n.d(e, "a", (function() {}));
      var a = function() {
          var t = this,
            e = (t.$createElement, t._self._c, (3 == t.user.cert1_status || 0 === t.user.cycling_card_show && 3 != t.user.cert1_status || t.user.id && 0 === t.school.cycling_card_show) && !t.hasStockCard.order_id ? t.myCardList.length : null),
            n = 3 == t.user.cert1_status || 0 === t.user.cycling_card_show && 3 != t.user.cert1_status || t.user.id && 0 === t.school.cycling_card_show ? t.cardList.length : null;
          t._isMounted || (t.e0 = function(e) {
            t.adBannerShow = !1
          }, t.e1 = function(e) {
            t.adBannerShow = !0
          }, t.e2 = function(e) {
            t.dialogShow = !1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: n
            }
          })
        },
        r = []
    },
    "457f": function(t, e, n) {
      var a = n("c8ad");
      n.n(a).a
    },
    b43e: function(t, e, n) {
      (function(t, a) {
        var r = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = r(n("7eb4")),
          c = r(n("af34")),
          i = r(n("ee10")),
          s = (r(n("5595")), null),
          u = {
            name: "wallet_index",
            components: {
              cardList: function() {
                n.e("components/my-card/index").then(function() {
                  return resolve(n("f04a"))
                }.bind(null, n)).catch(n.oe)
              },
              myCard: function() {
                n.e("components/my-card/my").then(function() {
                  return resolve(n("cdce"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                dialogShow: !1,
                confirmButtonText: 8,
                user: {},
                banner: void 0,
                adBannerShow: !1,
                cardList: [],
                myCardList: [],
                school: {},
                hasStockCard: {
                  order_id: ""
                }
              }
            },
            methods: {
              freeze: function(e) {
                var n = this;
                return (0, i.default)(o.default.mark((function a() {
                  var r, c, i;
                  return o.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return r = e.id, c = e.is_freeze, a.next = 3, n.$http.post("user/cycling_card/" + r + "/freeze", {
                          is_freeze: c
                        });
                      case 3:
                        if (200 != (i = a.sent).status_code) {
                          a.next = 12;
                          break
                        }
                        return t.showToast({
                          title: i.message,
                          icon: "none"
                        }), n.loading = !0, a.next = 9, n.getCards();
                      case 9:
                        n.loading = !1, a.next = 13;
                        break;
                      case 12:
                        t.showToast({
                          title: i.message,
                          icon: "none"
                        });
                      case 13:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              getCards: function() {
                var t = this;
                return (0, i.default)(o.default.mark((function e() {
                  var n, a, r, i;
                  return o.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.$http.get("user/cycling_card/lists");
                      case 2:
                        if (n = e.sent, a = n.data, r = [], a)
                          for (i in a) r.push.apply(r, (0, c.default)(a[i]));
                        t.myCardList = r.slice(0, 1);
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              go: function(e) {
                t.navigateTo({
                  url: e
                })
              },
              confirm: function() {
                var e = this;
                a.showLoading({
                  title: "处理中",
                  icon: "loading",
                  mask: !0
                }), this.$http.post("refund_apply").then((function(n) {
                  200 == n.status_code ? (t.showToast({
                    title: "申请成功",
                    icon: "none"
                  }), e.$http.delete("authorizations"), a.switchTab({
                    url: "/pages/home/index",
                    complete: function(t) {
                      a.removeStorageSync("token")
                    }
                  })) : t.showToast({
                    title: n.message,
                    icon: "none"
                  })
                })).catch((function(e) {
                  t.showToast({
                    title: "提交错误",
                    icon: "none"
                  })
                }))
              },
              action: function(t) {
                this.gotoRoute(this, t)
              },
              gotoRecharge: function() {
                this.check_is_login().then((function() {
                  t.navigateTo({
                    url: "/pages/recharge/index"
                  })
                }))
              },
              gotoMenu: function(e) {
                var n = this;
                switch (e) {
                  case 0:
                    this.check_is_login().then((function() {
                      return n.check_cert1(n)
                    })).then((function() {
                      t.navigateTo({
                        url: "/pages/card/index"
                      })
                    }));
                    break;
                  case 1:
                    this.check_is_login().then((function() {
                      return n.check_cert1(n)
                    })).then((function() {
                      t.navigateTo({
                        url: "/pages/card/exchange"
                      })
                    }));
                    break;
                  case 2:
                    this.check_is_login().then((function() {
                      return n.check_cert1(n)
                    })).then((function() {
                      t.navigateTo({
                        url: "/pages/wallet/bill"
                      })
                    }));
                    break;
                  case 3:
                    this.check_is_login().then((function() {
                      return n.check_cert1(n)
                    })).then((function() {
                      t.navigateTo({
                        url: "/pages/billingMain/billingMain"
                      })
                    }));
                    break;
                  case 4:
                    this.dialogShow = !0
                }
              },
              getBanner: function() {
                var t = this;
                return (0, i.default)(o.default.mark((function e() {
                  var n;
                  return o.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.$http.get("banner/4");
                      case 2:
                        void 0 !== (n = e.sent).data && void 0 !== n.data.banners && n.data && (t.banner = n.data.banners.length > 0 ? n.data.banners[0] : void 0);
                      case 4:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              getLocation: function() {
                return new Promise((function(t, e) {
                  a.getLocation({
                    type: "gcj02",
                    success: function(e) {
                      t(e)
                    },
                    fail: function() {
                      t({
                        latitude: 0,
                        longitude: 0
                      })
                    }
                  })
                }))
              },
              getStorageInfo: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                  n = 6e4 * e,
                  r = a.getStorageSync(t) || {
                    time: 0
                  },
                  o = Date.now();
                return o - r.time > n ? (a.removeStorageSync(t), !1) : r
              },
              goPayment: function() {
                a.navigateTo({
                  url: "/pages/payment/index?order_id=" + this.hasStockCard.order_id + "&order_type=" + this.hasStockCard.order_type + "&price=" + this.hasStockCard.price + "&card_type=" + this.hasStockCard.card_type + "&created_at=" + this.hasStockCard.created_at + "&has_stock=" + this.hasStockCard.has_stock + "&card_code=" + this.hasStockCard.card_code + "&formStore=" + this.hasStockCard.formStore
                })
              }
            },
            watch: {
              dialogShow: function(t) {
                var e = this;
                t ? (this.confirmButtonText = 8, clearInterval(s), s = setInterval((function() {
                  e.confirmButtonText <= 1 ? (e.confirmButtonText = "确定", clearInterval(s)) : e.confirmButtonText--
                }), 1e3)) : (this.confirmButtonText = 8, clearInterval(s))
              }
            },
            onShow: function() {
              var t = this;
              return (0, i.default)(o.default.mark((function e() {
                var n, r, c, i, s, u, d, l, f, h, g, _;
                return o.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (n = t.getStorageInfo("hasStockCard", 15) || {}, console.log(n, "hasStockCard"), t.hasStockCard = n, t.hideLoading(), !a.getStorageSync("token")) {
                        e.next = 32;
                        break
                      }
                      return e.next = 7, t.$http.get("user");
                    case 7:
                      if (r = e.sent, t.user = r.data, (c = a.getStorageSync("recharge_order_id")) && t.query_order(c), i = 0, 0 !== t.user.school_id) {
                        e.next = 24;
                        break
                      }
                      return e.next = 15, t.getLocation();
                    case 15:
                      return s = e.sent, u = s.latitude, d = s.longitude, e.next = 20, t.$http.get("atoperationAreas", {
                        latitude: u,
                        longitude: d
                      });
                    case 20:
                      l = e.sent, f = l.status_code, h = l.data, 200 == f ? (i = h.id, t.school = h) : t.school = {};
                    case 24:
                      return e.next = 26, t.$http.get("cycling_card/recommend", {
                        school_id: i
                      });
                    case 26:
                      g = e.sent, _ = g.data, t.cardList = _.datas, t.getCards(), e.next = 36;
                      break;
                    case 32:
                      t.user = {}, t.myCardList = [], t.carList = [], t.school = {};
                    case 36:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            }
          };
        e.default = u
      }).call(this, n("df3c").default, n("3223").default)
    },
    b8f5: function(t, e, n) {
      n.r(e);
      var a = n("3a2f"),
        r = n("1317");
      for (var o in r)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(o);
      n("457f");
      var c = n("828b"),
        i = Object(c.a)(r.default, a.b, a.c, !1, null, "72dd1bc9", null, !1, a.a, void 0);
      e.default = i.exports
    },
    c8ad: function(t, e, n) {}
  },
  [
    ["3070", "common/runtime", "common/vendor"]
  ]
]);