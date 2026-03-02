(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/order/other"], {
    "30cc": function(t, e, n) {
      n.r(e);
      var r = n("831a"),
        a = n.n(r);
      for (var o in r)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(o);
      e.default = a.a
    },
    "450a": function(t, e, n) {
      var r = n("9607"),
        a = n.n(r);
      a.a
    },
    "64e6": function(t, e, n) {
      n.d(e, "b", (function() {
        return r
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {}));
      var r = function() {
          this.$createElement;
          var t = (this._self._c, !this.show_loading && "{}" !== JSON.stringify(this.order) && !this.loading);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        a = []
    },
    "831a": function(t, e, n) {
      (function(t) {
        var r = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = r(n("7eb4")),
          o = r(n("ee10")),
          i = {
            name: "order_detail",
            data: function() {
              return {
                title: "",
                order: {},
                show_loading: !0,
                loading: !0
              }
            },
            methods: {
              getOrder: function(t) {
                var e = this;
                return (0, o.default)(a.default.mark((function n() {
                  var r;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return e.show_loading = !0, e.order = {}, n.next = 4, e.$http.get("order/other?type=" + t);
                      case 4:
                        r = n.sent, e.show_loading = !1, r.data && (e.order = r.data);
                      case 7:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              gotoPayment: function() {
                t.navigateTo({
                  url: "/pages/payment/index?order_id=" + this.order.order_id + "&order_type=" + (this.order.type + 4) + "&price=" + this.order.order_amount
                })
              }
            },
            onShow: function() {
              this.hideLoading(), this.check_is_login()
            },
            onLoad: function() {
              var t = this;
              return (0, o.default)(a.default.mark((function e() {
                var n;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return t.loading = !0, n = t.$route.query.type, t.title = 1 == n ? "待支付调度费" : "待支付赔偿费", e.next = 5, t.getOrder(n);
                    case 5:
                      t.loading = !1;
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            }
          };
        e.default = i
      }).call(this, n("df3c").default)
    },
    8897: function(t, e, n) {
      var r = n("8f22");
      n.n(r).a
    },
    "8f22": function(t, e, n) {},
    9607: function(t, e, n) {},
    c418: function(t, e, n) {
      n.r(e);
      var r = n("64e6"),
        a = n("30cc");
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      n("450a"), n("8897");
      var i = n("828b"),
        d = Object(i.a)(a.default, r.b, r.c, !1, null, "1d72f3fa", null, !1, r.a, void 0);
      e.default = d.exports
    },
    ddb4: function(t, e, n) {
      (function(t, e) {
        var r = n("47a9");
        n("671b"), r(n("3240"));
        var a = r(n("c418"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["ddb4", "common/runtime", "common/vendor"]
  ]
]);