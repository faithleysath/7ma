(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/points/records"], {
    "0b0e": function(e, t, n) {
      n.r(t);
      var o = n("b77e"),
        r = n("77f9");
      for (var a in r)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(a);
      n("a904");
      var s = n("828b"),
        i = Object(s.a)(r.default, o.b, o.c, !1, null, "5c48ce40", null, !1, o.a, void 0);
      t.default = i.exports
    },
    "3b99": function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("671b"), o(n("3240"));
        var r = o(n("0b0e"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    4682: function(e, t, n) {},
    "5d20": function(e, t, n) {
      var o = n("47a9");
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = o(n("7eb4")),
        a = o(n("ee10")),
        s = {
          name: "points.records",
          data: function() {
            return {
              records: [],
              show_loading: !0,
              cur_page: 1,
              total_pages: 0,
              user_points: 0,
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
              return (0, a.default)(r.default.mark((function t() {
                var n, o, a;
                return r.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.$http.get("user/points_records?page=" + e.cur_page);
                    case 2:
                      n = t.sent, o = n.data, a = n.meta, e.show_loading = !1, e.loading = !1, e.cur_page++, e.total_pages = a.pagination.total_pages, e.records = e.records.concat(o);
                    case 10:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            scrollToLower: function() {
              console.log("scrollToLower"), (0 == this.total_pages || this.cur_page <= this.total_pages) && (this.loading = !0, this.getUserPointsRecords())
            }
          },
          onLoad: function() {
            var e = this;
            return (0, a.default)(r.default.mark((function t() {
              return r.default.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.loading2 = !0, e.reset(), t.next = 4, e.getUserPointsRecords();
                  case 4:
                    e.loading2 = !1;
                  case 5:
                  case "end":
                    return t.stop()
                }
              }), t)
            })))()
          },
          onShow: function() {
            this.user_points = this.$route.query.user_points
          }
        };
      t.default = s
    },
    "77f9": function(e, t, n) {
      n.r(t);
      var o = n("5d20"),
        r = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = r.a
    },
    a904: function(e, t, n) {
      var o = n("4682");
      n.n(o).a
    },
    b77e: function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {}));
      var o = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.show_loading || e.loading2 ? null : e.records.length),
            n = !e.show_loading && !e.loading2 && t > 0 ? e.__map(e.records, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g1: e.records.length
              }
            })) : null,
            o = e.show_loading || e.loading2 ? null : e.records.length;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              l0: n,
              g2: o
            }
          })
        },
        r = []
    }
  },
  [
    ["3b99", "common/runtime", "common/vendor"]
  ]
]);