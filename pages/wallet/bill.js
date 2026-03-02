(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/wallet/bill"], {
    "1b89": function(e, t, n) {
      var a = n("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = a(n("7eb4")),
        o = a(n("ee10")),
        i = {
          name: "wallet_bill",
          data: function() {
            return {
              orders: [],
              show_loading: !0,
              cur_page: 1,
              total_pages: 0,
              order_type: 1,
              loading: !0
            }
          },
          methods: {
            reset: function() {
              this.show_loading = !1, this.cur_page = 1, this.total_pages = 0, this.orders = []
            },
            getOrders: function() {
              var e = this;
              return (0, o.default)(r.default.mark((function t() {
                var n;
                return r.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return e.show_loading = !0, t.next = 3, e.$http.get("orders?order_type=" + e.order_type + "&origin=2&page=" + e.cur_page);
                    case 3:
                      (n = t.sent).data && (e.show_loading = !1, e.cur_page++, e.total_pages = n.meta.pagination.total_pages, e.orders = e.orders.concat(n.data));
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            refresh: function(e) {
              var t = this;
              return (0, o.default)(r.default.mark((function n() {
                return r.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return t.order_type = e, t.reset(), n.next = 4, t.getOrders();
                    case 4:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            }
          },
          onLoad: function() {
            var e = this;
            return (0, o.default)(r.default.mark((function t() {
              return r.default.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.loading = !0, t.next = 3, e.refresh(1);
                  case 3:
                    e.loading = !1;
                  case 4:
                  case "end":
                    return t.stop()
                }
              }), t)
            })))()
          },
          onShow: function() {
            this.hideLoading(), this.check_is_login()
          },
          onReachBottom: function() {
            (0 == this.total_pages || this.cur_page <= this.total_pages) && this.getOrders()
          },
          onUnload: function() {
            Object.assign(this.$data, this.$options.data())
          }
        };
      t.default = i
    },
    "4e43": function(e, t, n) {},
    "54f9": function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {}));
      var a = function() {
          var e = this,
            t = (e.$createElement, e._self._c, !e.show_loading && 0 === e.orders.length),
            n = e.loading ? null : !e.show_loading && 0 === e.orders.length,
            a = e.loading ? null : e.__map(e.orders, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g2: e.orders.length
              }
            }));
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              g1: n,
              l0: a
            }
          })
        },
        r = []
    },
    "6b12": function(e, t, n) {
      n.r(t);
      var a = n("54f9"),
        r = n("72e5");
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(o);
      n("9d58"), n("c530");
      var i = n("828b"),
        u = Object(i.a)(r.default, a.b, a.c, !1, null, "2c91e46c", null, !1, a.a, void 0);
      t.default = u.exports
    },
    "71be": function(e, t, n) {},
    "72e5": function(e, t, n) {
      n.r(t);
      var a = n("1b89"),
        r = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      t.default = r.a
    },
    "7d4c": function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var r = a(n("6b12"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "9d58": function(e, t, n) {
      var a = n("4e43");
      n.n(a).a
    },
    c530: function(e, t, n) {
      var a = n("71be");
      n.n(a).a
    }
  },
  [
    ["7d4c", "common/runtime", "common/vendor"]
  ]
]);