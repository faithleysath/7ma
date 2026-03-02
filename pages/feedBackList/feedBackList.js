(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/feedBackList/feedBackList"], {
    "33e1": function(t, e, n) {
      (function(t, e) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var o = a(n("adfe"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    9569: function(t, e, n) {},
    a31c: function(t, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    adfe: function(t, e, n) {
      n.r(e);
      var a = n("a31c"),
        o = n("b422");
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(i);
      n("e7e2");
      var r = n("828b"),
        u = Object(r.a)(o.default, a.b, a.c, !1, null, "65a04648", null, !1, a.a, void 0);
      e.default = u.exports
    },
    b422: function(t, e, n) {
      n.r(e);
      var a = n("e841"),
        o = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(i);
      e.default = o.a
    },
    e7e2: function(t, e, n) {
      var a = n("9569");
      n.n(a).a
    },
    e841: function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = {
          data: function() {
            return {
              list: [],
              query: {
                page: 1,
                per_page: 10
              },
              notMore: !1,
              car_number: "",
              carmodel_id: ""
            }
          },
          onLoad: function(t) {
            var e = t.car_number,
              n = t.carmodel_id;
            this.car_number = e, this.carmodel_id = n
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
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.query;
              this.$http.get("feedback/list", e).then((function(e) {
                e.data.data.length ? (t.query.page = e.data.current_page + 1, t.list = t.list.concat(e.data.data), t.notMore = !1) : t.notMore = !0
              }))
            },
            loadMore: function() {
              this.notMore || this.getList(this.query)
            },
            go: function(e) {
              t.navigateTo({
                url: e
              })
            }
          }
        };
        e.default = n
      }).call(this, n("df3c").default)
    }
  },
  [
    ["33e1", "common/runtime", "common/vendor"]
  ]
]);