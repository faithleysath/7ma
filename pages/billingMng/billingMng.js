(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/billingMng/billingMng"], {
    3114: function(t, n, e) {},
    "61bf": function(t, n, e) {
      var i = e("3114");
      e.n(i).a
    },
    "6ec4": function(t, n, e) {
      e.d(n, "b", (function() {
        return i
      })), e.d(n, "c", (function() {
        return a
      })), e.d(n, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    "858d": function(t, n, e) {
      e.r(n);
      var i = e("a804"),
        a = e.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(o);
      n.default = a.a
    },
    "9b79": function(t, n, e) {
      (function(t, n) {
        var i = e("47a9");
        e("671b"), i(e("3240"));
        var a = i(e("f3c7"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(a.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    a804: function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          data: function() {
            return {
              list: [],
              billingType: {
                1: {
                  title: "已申请未审核",
                  type: 0
                },
                2: {
                  title: "已审核未开票",
                  type: 0
                },
                3: {
                  title: "已开票",
                  type: 0
                },
                4: {
                  title: "审核不通过",
                  type: 1
                }
              },
              addrType: {
                0: {
                  title: "企业单位"
                },
                1: {
                  title: "个人/非企业单位"
                }
              },
              query: {
                page: 1,
                per_page: 50
              },
              notMore: !1
            }
          },
          onLoad: function() {
            this.getList()
          },
          onReachBottom: function() {
            this.loadMore()
          },
          methods: {
            loadMore: function() {
              this.notMore || this.getList(this.query)
            },
            getList: function() {
              var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                  page: 1,
                  per_page: 50
                };
              this.$http.get("user/cycling/billing", n).then((function(n) {
                console.log(n), n.data.length ? (t.query.page = n.meta.pagination.current_page + 1, t.list = t.list.concat(n.data), t.notMore = !1) : t.notMore = !0
              }))
            },
            go: function(n, e) {
              t.navigateTo({
                url: n,
                success: function(t) {
                  t.eventChannel.emit("getData", {
                    data: e
                  })
                }
              })
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
    f3c7: function(t, n, e) {
      e.r(n);
      var i = e("6ec4"),
        a = e("858d");
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(o);
      e("61bf");
      var c = e("828b"),
        u = Object(c.a)(a.default, i.b, i.c, !1, null, "70d1a68b", null, !1, i.a, void 0);
      n.default = u.exports
    }
  },
  [
    ["9b79", "common/runtime", "common/vendor"]
  ]
]);