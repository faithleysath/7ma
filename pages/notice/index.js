(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/notice/index"], {
    "20a7": function(t, n, e) {
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {}));
      var a = function() {
          this.$createElement;
          var t = (this._self._c, !this.show_loading && 0 === this.notices.length),
            n = this.loading ? null : !this.show_loading && 0 === this.notices.length;
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              g1: n
            }
          })
        },
        i = []
    },
    "4f7e": function(t, n, e) {},
    "7ace": function(t, n, e) {
      var a = e("eca9");
      e.n(a).a
    },
    "7d0b": function(t, n, e) {
      var a = e("4f7e");
      e.n(a).a
    },
    8954: function(t, n, e) {
      (function(t, n) {
        var a = e("47a9");
        e("671b"), a(e("3240"));
        var i = a(e("bd3d"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "8cb8": function(t, n, e) {
      var a = e("47a9");
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = a(e("7eb4")),
        o = a(e("ee10")),
        c = {
          name: "notice_index",
          data: function() {
            return {
              notices: [],
              show_loading: !0,
              cur_page: 1,
              total_pages: 0,
              loading: !0
            }
          },
          methods: {
            reset: function() {
              this.show_loading = !1, this.cur_page = 1, this.total_pages = 0, this.notices = []
            },
            getNotices: function() {
              var t = this;
              return (0, o.default)(i.default.mark((function n() {
                var e;
                return i.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return t.show_loading = !0, n.next = 3, t.$http.get("notices?page=" + t.cur_page);
                    case 3:
                      (e = n.sent).data && (t.show_loading = !1, t.cur_page++, t.total_pages = e.meta.pagination.total_pages, t.notices = t.notices.concat(e.data));
                    case 5:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            noticeNotification: function(t) {
              var n = this;
              return (0, o.default)(i.default.mark((function e() {
                return i.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, n.$http.post("notice/notification", {
                        id: t.id
                      });
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            gotoPath: function(t) {
              this.$set(t, "h5_title", t.title), this.gotoRoute(this, t)
            },
            gotoRouteCallback: function(t) {
              0 === t.is_read && this.noticeNotification(t)
            }
          },
          onLoad: function() {},
          onShow: function() {
            var t = this;
            this.loading = !0, this.hideLoading(), this.check_is_login().then((0, o.default)(i.default.mark((function n() {
              return i.default.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return t.reset(), n.next = 3, t.getNotices();
                  case 3:
                    t.loading = !1;
                  case 4:
                  case "end":
                    return n.stop()
                }
              }), n)
            }))))
          },
          onReachBottom: function() {
            (0 == this.total_pages || this.cur_page <= this.total_pages) && this.getNotices()
          }
        };
      n.default = c
    },
    "91d3": function(t, n, e) {
      e.r(n);
      var a = e("8cb8"),
        i = e.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(o);
      n.default = i.a
    },
    bd3d: function(t, n, e) {
      e.r(n);
      var a = e("20a7"),
        i = e("91d3");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(o);
      e("7ace"), e("7d0b");
      var c = e("828b"),
        s = Object(c.a)(i.default, a.b, a.c, !1, null, "b4496b82", null, !1, a.a, void 0);
      n.default = s.exports
    },
    eca9: function(t, n, e) {}
  },
  [
    ["8954", "common/runtime", "common/vendor"]
  ]
]);