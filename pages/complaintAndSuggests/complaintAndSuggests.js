(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/complaintAndSuggests/complaintAndSuggests"], {
    "0f0e": function(t, n, e) {
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return o
      })), e.d(n, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    "340f": function(t, n, e) {
      e.r(n);
      var a = e("b9bc"),
        o = e.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(i);
      n.default = o.a
    },
    "39b5": function(t, n, e) {
      e.r(n);
      var a = e("0f0e"),
        o = e("340f");
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      e("3ffd");
      var u = e("828b"),
        c = Object(u.a)(o.default, a.b, a.c, !1, null, "1c5dd774", null, !1, a.a, void 0);
      n.default = c.exports
    },
    "3ffd": function(t, n, e) {
      var a = e("5fe3");
      e.n(a).a
    },
    "5fe3": function(t, n, e) {},
    b9bc: function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          data: function() {
            return {
              list: [],
              form: {
                listId: [],
                data: [],
                price: [],
                count: 0
              },
              query: {
                page: 1,
                per_page: 10
              },
              notMore: !1
            }
          },
          onShow: function() {
            this.notMore = !1, this.query.page = 1, this.list = [], this.getList()
          },
          onReachBottom: function() {
            this.loadMore()
          },
          methods: {
            getList: function() {
              var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.query;
              this.$http.get("complaintAndSuggests", n).then((function(n) {
                n.data.data.length ? (t.query.page = n.data.current_page + 1, t.list = t.list.concat(n.data.data), t.notMore = !1) : t.notMore = !0
              }))
            },
            loadMore: function() {
              this.notMore || this.getList(this.query)
            },
            go: function(n) {
              t.navigateTo({
                url: n
              })
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
    c1fa: function(t, n, e) {
      (function(t, n) {
        var a = e("47a9");
        e("671b"), a(e("3240"));
        var o = a(e("39b5"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    }
  },
  [
    ["c1fa", "common/runtime", "common/vendor"]
  ]
]);