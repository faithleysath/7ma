(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/service/components/serviceList"], {
    "34e6": function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {}));
      var o = function() {
          this.$createElement;
          var e = (this._self._c, this.list.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: e
            }
          })
        },
        i = []
    },
    "480b": function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = {
        props: {
          type: {
            type: Number,
            default: 1
          }
        },
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
            var e = this;
            this.$http.get("services?tab=" + this.type).then((function(t) {
              var n = t.data;
              e.list = n
            }))
          }
        }
      };
      t.default = o
    },
    "4d1a": function(e, t, n) {
      n.r(t);
      var o = n("34e6"),
        i = n("e5d0");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      var c = n("828b"),
        s = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      t.default = s.exports
    },
    e5d0: function(e, t, n) {
      n.r(t);
      var o = n("480b"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = i.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["pages/service/components/serviceList-create-component", {
    "pages/service/components/serviceList-create-component": function(e, t, n) {
      n("df3c").createComponent(n("4d1a"))
    }
  },
  [
    ["pages/service/components/serviceList-create-component"]
  ]
]);