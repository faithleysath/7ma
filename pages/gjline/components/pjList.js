(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/gjline/components/pjList"], {
    1418: function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, n.default = {
        data: function() {
          return {
            list: []
          }
        },
        mounted: function() {
          this.getList()
        },
        methods: {
          getList: function() {
            var t = this;
            this.$http.get("getminibuscomments").then((function(n) {
              t.list = n.data
            }))
          }
        }
      }
    },
    "8af4": function(t, n, e) {
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {}));
      var o = function() {
          this.$createElement;
          var t = (this._self._c, this.list.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        i = []
    },
    "8bcb": function(t, n, e) {
      e.r(n);
      var o = e("1418"),
        i = e.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(a);
      n.default = i.a
    },
    d98b: function(t, n, e) {
      e.r(n);
      var o = e("8af4"),
        i = e("8bcb");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(a);
      var c = e("828b"),
        s = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = s.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["pages/gjline/components/pjList-create-component", {
    "pages/gjline/components/pjList-create-component": function(t, n, e) {
      e("df3c").createComponent(e("d98b"))
    }
  },
  [
    ["pages/gjline/components/pjList-create-component"]
  ]
]);