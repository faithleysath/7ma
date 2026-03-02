(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uni_modules/qiun-data-charts/components/qiun-loading/qiun-loading"], {
    "1a7a": function(n, o, e) {
      e.d(o, "b", (function() {
        return t
      })), e.d(o, "c", (function() {
        return a
      })), e.d(o, "a", (function() {}));
      var t = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    6156: function(n, o, e) {
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0;
      var t = {
        components: {
          Loading1: function() {
            e.e("uni_modules/qiun-data-charts/components/qiun-loading/loading1").then(function() {
              return resolve(e("8c60"))
            }.bind(null, e)).catch(e.oe)
          },
          Loading2: function() {
            e.e("uni_modules/qiun-data-charts/components/qiun-loading/loading2").then(function() {
              return resolve(e("ed47"))
            }.bind(null, e)).catch(e.oe)
          },
          Loading3: function() {
            e.e("uni_modules/qiun-data-charts/components/qiun-loading/loading3").then(function() {
              return resolve(e("8b56"))
            }.bind(null, e)).catch(e.oe)
          },
          Loading4: function() {
            e.e("uni_modules/qiun-data-charts/components/qiun-loading/loading4").then(function() {
              return resolve(e("1e43"))
            }.bind(null, e)).catch(e.oe)
          },
          Loading5: function() {
            e.e("uni_modules/qiun-data-charts/components/qiun-loading/loading5").then(function() {
              return resolve(e("2d20"))
            }.bind(null, e)).catch(e.oe)
          }
        },
        name: "qiun-loading",
        props: {
          loadingType: {
            type: Number,
            default: 2
          }
        },
        data: function() {
          return {}
        }
      };
      o.default = t
    },
    b7c7: function(n, o, e) {
      e.r(o);
      var t = e("6156"),
        a = e.n(t);
      for (var u in t)["default"].indexOf(u) < 0 && function(n) {
        e.d(o, n, (function() {
          return t[n]
        }))
      }(u);
      o.default = a.a
    },
    dfbb: function(n, o, e) {
      e.r(o);
      var t = e("1a7a"),
        a = e("b7c7");
      for (var u in a)["default"].indexOf(u) < 0 && function(n) {
        e.d(o, n, (function() {
          return a[n]
        }))
      }(u);
      var i = e("828b"),
        c = Object(i.a)(a.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
      o.default = c.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uni_modules/qiun-data-charts/components/qiun-loading/qiun-loading-create-component", {
    "uni_modules/qiun-data-charts/components/qiun-loading/qiun-loading-create-component": function(n, o, e) {
      e("df3c").createComponent(e("dfbb"))
    }
  },
  [
    ["uni_modules/qiun-data-charts/components/qiun-loading/qiun-loading-create-component"]
  ]
]);