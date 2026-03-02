(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/member/index"], {
    "24a9": function(e, n, t) {
      t.r(n);
      var r = t("6d98"),
        i = t.n(r);
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        t.d(n, e, (function() {
          return r[e]
        }))
      }(o);
      n.default = i.a
    },
    "68d7": function(e, n, t) {
      (function(e, n) {
        var r = t("47a9");
        t("671b"), r(t("3240"));
        var i = r(t("e2f6"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, n(i.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "6d98": function(e, n, t) {
      (function(e, r) {
        var i = t("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = i(t("7eb4")),
          u = i(t("ee10")),
          a = i(t("7ca3"));

        function c(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n && (r = r.filter((function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            }))), t.push.apply(t, r)
          }
          return t
        }

        function l(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2 ? c(Object(t), !0).forEach((function(n) {
              (0, a.default)(e, n, t[n])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }))
          }
          return e
        }
        var s = {
          data: function() {
            return {
              showAd: !0,
              scores: "--",
              menuButtonInfo: l({}, e.getMenuButtonBoundingClientRect()),
              user: {},
              menus: [{
                icon: "memberIndex_20250703_5.png",
                title: "骑行订单",
                url: "/pages/order/index",
                h5: null,
                do: "navigateTo",
                isLogin: !0
              }, {
                icon: "memberIndex_20250703_6.png",
                title: "小巴士订单",
                url: "/pages/order/minibus",
                h5: null,
                do: "navigateTo",
                isLogin: !0
              }, {
                icon: "memberIndex_20250703_7.png",
                title: "排行榜",
                url: "/pages/h5/index?title=",
                h5: {
                  title: "ranks_h5_title",
                  url: "ranks_h5_url"
                },
                do: "navigateTo",
                isLogin: !0
              }, {
                icon: "memberIndex_20250703_8.png",
                title: "全部账单",
                url: "/pages/wallet/bill",
                h5: null,
                do: "navigateTo",
                isLogin: !0
              }, {
                icon: "memberIndex_20250703_9.png",
                title: "兑换中心",
                url: "/pages/card/exchange",
                h5: null,
                do: "navigateTo",
                isLogin: !0
              }, {
                icon: "memberIndex_20250703_10.png",
                title: "开发票",
                url: "/pages/billingMain/billingMain",
                h5: null,
                do: "navigateTo",
                isLogin: !0
              }, {
                icon: "memberIndex_20250703_11.png",
                title: "换绑手机",
                url: "/pages/changephone/index",
                do: "redirectTo",
                isLogin: !0
              }, {
                icon: "memberIndex_20250703_12.png",
                title: "客服中心",
                url: "/pages/service/index",
                h5: null,
                do: "navigateTo",
                isLogin: !0
              }, {
                icon: "memberIndex_20250703_13.png",
                title: "认证中心",
                url: "/pages/cert/cert1",
                do: "redirectTo",
                isLogin: !0
              }]
            }
          },
          mounted: function() {},
          onShow: function() {
            var e = this;
            return (0, u.default)(o.default.mark((function n() {
              return o.default.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    e.getUserInfo();
                  case 1:
                  case "end":
                    return n.stop()
                }
              }), n)
            })))()
          },
          methods: {
            goToLogin: function() {
              r.getStorageSync("token") ? e.navigateTo({
                url: "/pages/member/detail"
              }) : e.navigateTo({
                url: "/pages/auth/index"
              })
            },
            adError: function() {
              this.showAd = !1
            },
            go: function(n, t) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "navigateTo";
              t ? this.check_is_login().then((function() {
                e[r]({
                  url: n
                })
              })) : e[r]({
                url: n
              })
            },
            gotoMenu: function(e) {
              var n = e.h5 ? e.url + this.user[e.h5.title] + "&path=" + encodeURIComponent(this.user[e.h5.url]) + "&token=" + r.getStorageSync("token") : e.url;
              this.go(n, e.isLogin, e.do)
            },
            getUserInfo: function() {
              var e = this;
              return (0, u.default)(o.default.mark((function n() {
                var t;
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if (!r.getStorageSync("token")) {
                        n.next = 8;
                        break
                      }
                      return n.next = 3, e.$http.get("user");
                    case 3:
                      t = n.sent, e.user = t.data, "{}" !== JSON.stringify(e.user) ? (e.$http.get("user/credit_scores").then((function(n) {
                        e.scores = n.data.credit_scores
                      })), e.menus = e.menus.filter((function(e) {
                        return "邀请好友" != e.title
                      })), e.user.invite_h5_title && e.user.invite_h5_url && e.menus.push({
                        icon: "memberIndex_20250703_14.png",
                        title: "邀请好友",
                        url: "/pages/h5/index?title=",
                        h5: {
                          title: "invite_h5_title",
                          url: "invite_h5_url"
                        },
                        do: "navigateTo",
                        isLogin: !0
                      })) : (e.menus = e.menus.filter((function(e) {
                        return "邀请好友" != e.title
                      })), e.scores = "--"), n.next = 11;
                      break;
                    case 8:
                      e.user = {}, e.scores = "--", e.menus = e.menus.filter((function(e) {
                        return "邀请好友" != e.title
                      }));
                    case 11:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            }
          }
        };
        n.default = s
      }).call(this, t("df3c").default, t("3223").default)
    },
    7724: function(e, n, t) {
      var r = t("c446");
      t.n(r).a
    },
    ba71: function(e, n, t) {
      t.d(n, "b", (function() {
        return r
      })), t.d(n, "c", (function() {
        return i
      })), t.d(n, "a", (function() {}));
      var r = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    c446: function(e, n, t) {},
    e2f6: function(e, n, t) {
      t.r(n);
      var r = t("ba71"),
        i = t("24a9");
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        t.d(n, e, (function() {
          return i[e]
        }))
      }(o);
      t("7724");
      var u = t("828b"),
        a = Object(u.a)(i.default, r.b, r.c, !1, null, "014f91e0", null, !1, r.a, void 0);
      n.default = a.exports
    }
  },
  [
    ["68d7", "common/runtime", "common/vendor"]
  ]
]);