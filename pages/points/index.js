(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/points/index"], {
    "1d3a": function(n, t, e) {},
    "61c8": function(n, t, e) {
      e.r(t);
      var s = e("dca9"),
        i = e("d641");
      for (var a in i)["default"].indexOf(a) < 0 && function(n) {
        e.d(t, n, (function() {
          return i[n]
        }))
      }(a);
      e("7966"), e("ccdd");
      var o = e("828b"),
        r = Object(o.a)(i.default, s.b, s.c, !1, null, "371b012a", null, !1, s.a, void 0);
      t.default = r.exports
    },
    "6b2d": function(n, t, e) {
      (function(n, s) {
        var i = e("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = i(e("7eb4")),
          o = i(e("ee10")),
          r = i(e("1020")),
          c = null,
          u = {
            name: "points.index",
            data: function() {
              return {
                show_loading: !0,
                loading: !0,
                has_signin_task: !1,
                signin_popup_show: !1,
                signin_popup_title: "",
                signin_popup_desc: "",
                signin_popup_points: 0,
                signin_action: !1,
                today_is_signin: 0,
                signin_days: 0,
                user_points: 0,
                user_cert1_status: void 0,
                user_cert2_status: void 0,
                points_rule: "",
                points_tasks: {
                  one_time_tasks: [],
                  daily_tasks: []
                },
                signin_process_details: [],
                exchange_lists: []
              }
            },
            methods: {
              goPointsRecords: function(t) {
                n.navigateTo({
                  url: "/pages/points/records?user_points=" + t
                })
              },
              goPointsExchangeRecords: function() {
                n.navigateTo({
                  url: "/pages/points/exchange_records"
                })
              },
              signin_confirm: function() {
                this.signin_popup_show = !1, this.lookAd()
              },
              lookAd: function() {
                c && c.show().catch((function() {
                  c.load().then((function() {
                    return c.show()
                  })).catch((function(t) {
                    console.log("激励视频 广告显示失败"), console.log(t, "激励视频 广告显示失败"), r.default.adError[t.errCode] && n.showToast({
                      title: r.default.adError[t.errCode].title,
                      icon: "none"
                    })
                  }))
                }))
              },
              getPointsIndex: function() {
                var n = this;
                return (0, o.default)(a.default.mark((function t() {
                  var e, s;
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, n.$http.get("points/index");
                      case 2:
                        e = t.sent, s = e.data, n.user_points = s.user_points, n.user_cert1_status = s.user_cert1_status, n.user_cert2_status = s.user_cert2_status, n.points_rule = s.points_rule.replace(/\n/g, "<br />");
                      case 8:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getPointsTasks: function() {
                var n = this;
                return (0, o.default)(a.default.mark((function t() {
                  var e, s;
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, n.$http.get("points/tasks");
                      case 2:
                        e = t.sent, s = e.data, n.points_tasks = s, n.signin_days = 0, n.has_signin_task = !1, n.points_tasks.daily_tasks.forEach((function(t) {
                          "signin" === t.name && (n.has_signin_task = !0, n.signin_process_details = JSON.parse(t.process_details), n.signin_process_details.forEach((function(t) {
                            t.is_signin && n.signin_days++, 1 === t.current && (n.today_is_signin = t.is_signin)
                          })))
                        }));
                      case 8:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getPointsExchangeLists: function() {
                var n = this;
                return (0, o.default)(a.default.mark((function t() {
                  var e, s;
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, n.$http.get("points/exchange_lists");
                      case 2:
                        e = t.sent, s = e.data, n.exchange_lists = s;
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              signin: function() {
                var n = this;
                return (0, o.default)(a.default.mark((function t() {
                  var e, i, o, r;
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!n.signin_action && !n.today_is_signin) {
                          t.next = 2;
                          break
                        }
                        return t.abrupt("return");
                      case 2:
                        return n.signin_action = !0, t.next = 5, n.$http.post("signin");
                      case 5:
                        e = t.sent, i = e.status_code, o = e.data, r = e.message, 200 === i ? (n.getPointsIndex(), n.getPointsTasks(), n.signin_popup_title = o.title, n.signin_popup_desc = o.desc, n.signin_popup_points = o.points, n.signin_popup_show = !0) : s.showToast({
                          title: r,
                          icon: "none"
                        }), n.signin_action = !1;
                      case 11:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              goFinish: function(t) {
                if (s.getStorageSync("token")) switch (t) {
                  case "cert":
                    this.goCert();
                    break;
                  case "info":
                    this.goMemberDetail();
                    break;
                  case "signin":
                    this.signin();
                    break;
                  case "buy_card_1":
                  case "buy_card_2":
                    n.navigateTo({
                      url: "/pages/card/index"
                    });
                    break;
                  default:
                    n.switchTab({
                      url: "/pages/home/index"
                    })
                } else this.goLogin()
              },
              goLogin: function() {
                s.getStorageSync("token") || n.redirectTo({
                  url: "/pages/auth/index"
                })
              },
              goCert: function() {
                n.redirectTo({
                  url: "/pages/cert/cert1"
                })
              },
              goMemberDetail: function() {
                n.navigateTo({
                  url: "/pages/member/detail"
                })
              },
              exchange: function(n) {
                var t = this;
                return (0, o.default)(a.default.mark((function e() {
                  var i;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        i = t, s.showModal({
                          title: "温馨提示",
                          content: "确认消耗" + n.points + "积分兑换该骑行卡吗？",
                          success: function() {
                            var t = (0, o.default)(a.default.mark((function t(e) {
                              var o, r;
                              return a.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!e.confirm) {
                                      t.next = 7;
                                      break
                                    }
                                    return t.next = 3, i.$http.post("points/exchange", {
                                      id: n.id
                                    });
                                  case 3:
                                    o = t.sent, r = o.message, s.showToast({
                                      title: r,
                                      icon: "none"
                                    }), i.getPointsIndex();
                                  case 7:
                                  case "end":
                                    return t.stop()
                                }
                              }), t)
                            })));
                            return function(n) {
                              return t.apply(this, arguments)
                            }
                          }()
                        });
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              }
            },
            onLoad: function() {
              var t = this;
              return (0, o.default)(a.default.mark((function e() {
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return t.show_loading = !0, t.loading = !0, e.next = 4, t.getPointsIndex();
                    case 4:
                      return e.next = 6, t.getPointsTasks();
                    case 6:
                      return e.next = 8, t.getPointsExchangeLists();
                    case 8:
                      t.show_loading = !1, t.loading = !1, s.createRewardedVideoAd && ((c = s.createRewardedVideoAd({
                        adUnitId: "adunit-cd23db38ec8c1548"
                      })).onLoad((function() {
                        t.haveAd = 1
                      })), c.onError((function(t) {
                        console.log(t, "广告加载失败"), r.default.adError[t.errCode] && n.showToast({
                          title: r.default.adError[t.errCode].title,
                          icon: "none"
                        })
                      })), c.onClose((function(e) {
                        e && e.isEnded ? t.$http.post("adResult", {
                          is_sign: 1,
                          finish: 1
                        }).then((function(t) {
                          var e = t.status_code,
                            s = t.data;
                          200 == e && n.showToast({
                            title: "已获取" + s.get_points + "积分",
                            icon: "none"
                          })
                        })) : (n.showToast({
                          title: "广告未看完",
                          icon: "none"
                        }), t.$http.post("adResult", {
                          is_sign: 0,
                          finish: 0
                        }))
                      })));
                    case 11:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            onShow: function() {
              var n = this;
              return (0, o.default)(a.default.mark((function t() {
                return a.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, n.getPointsIndex();
                    case 2:
                      return t.next = 4, n.getPointsTasks();
                    case 4:
                      return t.next = 6, n.getPointsExchangeLists();
                    case 6:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            onUnload: function() {
              console.log("onUnload"), this.loading = !0
            }
          };
        t.default = u
      }).call(this, e("df3c").default, e("3223").default)
    },
    7966: function(n, t, e) {
      var s = e("79ac");
      e.n(s).a
    },
    "79ac": function(n, t, e) {},
    c70e: function(n, t, e) {
      (function(n, t) {
        var s = e("47a9");
        e("671b"), s(e("3240"));
        var i = s(e("61c8"));
        n.__webpack_require_UNI_MP_PLUGIN__ = e, t(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    ccdd: function(n, t, e) {
      var s = e("1d3a");
      e.n(s).a
    },
    d641: function(n, t, e) {
      e.r(t);
      var s = e("6b2d"),
        i = e.n(s);
      for (var a in s)["default"].indexOf(a) < 0 && function(n) {
        e.d(t, n, (function() {
          return s[n]
        }))
      }(a);
      t.default = i.a
    },
    dca9: function(n, t, e) {
      e.d(t, "b", (function() {
        return s
      })), e.d(t, "c", (function() {
        return i
      })), e.d(t, "a", (function() {}));
      var s = function() {
          var n = this,
            t = (n.$createElement, n._self._c, n.show_loading || n.loading ? null : void 0 !== n.points_tasks.one_time_tasks && n.points_tasks.one_time_tasks.length > 0),
            e = n.show_loading || n.loading ? null : void 0 !== n.points_tasks.daily_tasks && n.points_tasks.daily_tasks.length > 0,
            s = n.show_loading || n.loading ? null : n.__map(n.exchange_lists, (function(t, e) {
              return {
                $orig: n.__get_orig(t),
                g2: n.exchange_lists.length > 0 && 3 == n.user_cert1_status
              }
            })),
            i = n.show_loading || n.loading || 3 != n.user_cert1_status ? null : n.exchange_lists.length;
          n._isMounted || (n.e0 = function(t) {
            n.signin_popup_show = !1
          }, n.e1 = function(t) {
            n.signin_popup_show = !1
          }, n.e2 = function(t) {
            n.signin_popup_show = !1
          }), n.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              g1: e,
              l0: s,
              g3: i
            }
          })
        },
        i = []
    }
  },
  [
    ["c70e", "common/runtime", "common/vendor"]
  ]
]);