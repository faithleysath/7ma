(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/points/exchange_records"], {
    "298f": function(e, n, t) {
      (function(e, n) {
        var o = t("47a9");
        t("671b"), o(t("3240"));
        var a = o(t("ff51"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, n(a.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "6f73": function(e, n, t) {},
    "90bc": function(e, n, t) {
      var o = t("6f73");
      t.n(o).a
    },
    a15b: function(e, n, t) {
      t.d(n, "b", (function() {
        return o
      })), t.d(n, "c", (function() {
        return a
      })), t.d(n, "a", (function() {}));
      var o = function() {
          var e = this,
            n = (e.$createElement, e._self._c, e.show_loading || e.loading2 ? null : e.records.length),
            t = !e.show_loading && !e.loading2 && n > 0 ? e.__map(e.records, (function(n, t) {
              return {
                $orig: e.__get_orig(n),
                g1: e.records.length
              }
            })) : null,
            o = e.show_loading || e.loading2 ? null : e.records.length;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: n,
              l0: t,
              g2: o
            }
          })
        },
        a = []
    },
    dd23: function(e, n, t) {
      var o = t("47a9");
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = o(t("7eb4")),
        r = o(t("ee10")),
        i = {
          name: "points.records",
          data: function() {
            return {
              records: [],
              show_loading: !0,
              cur_page: 1,
              total_pages: 0,
              loading: !1,
              loading2: !0
            }
          },
          methods: {
            reset: function() {
              this.show_loading = !0, this.cur_page = 1, this.total_pages = 0, this.records = []
            },
            getUserPointsRecords: function() {
              var e = this;
              return (0, r.default)(a.default.mark((function n() {
                var t, o, r;
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return n.next = 2, e.$http.get("user/points_exchange_records?page=" + e.cur_page);
                    case 2:
                      t = n.sent, o = t.data, r = t.meta, e.show_loading = !1, e.loading = !1, e.cur_page++, e.total_pages = r.pagination.total_pages, e.records = e.records.concat(o);
                    case 10:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            scrollToLower: function() {
              console.log("scrollToLower"), (0 == this.total_pages || this.cur_page <= this.total_pages) && (this.loading = !0, this.getUserPointsRecords())
            }
          },
          onLoad: function() {
            var e = this;
            return (0, r.default)(a.default.mark((function n() {
              return a.default.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return e.loading2 = !0, console.log("this.loading2", e.loading2), e.reset(), n.next = 5, e.getUserPointsRecords();
                  case 5:
                    e.loading2 = !1, console.log("this.loading2", e.loading2);
                  case 7:
                  case "end":
                    return n.stop()
                }
              }), n)
            })))()
          },
          onShow: function() {}
        };
      n.default = i
    },
    eeef: function(e, n, t) {
      t.r(n);
      var o = t("dd23"),
        a = t.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(r);
      n.default = a.a
    },
    ff51: function(e, n, t) {
      t.r(n);
      var o = t("a15b"),
        a = t("eeef");
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        t.d(n, e, (function() {
          return a[e]
        }))
      }(r);
      t("90bc");
      var i = t("828b"),
        c = Object(i.a)(a.default, o.b, o.c, !1, null, "0d65331e", null, !1, o.a, void 0);
      n.default = c.exports
    }
  },
  [
    ["298f", "common/runtime", "common/vendor"]
  ]
]);