(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/billingDetail/billingDetail"], {
    "2d25": function(t, n, e) {
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "33c5": function(t, n, e) {
      (function(t, n) {
        var a = e("47a9");
        e("671b"), a(e("3240"));
        var i = a(e("3e91"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "3e91": function(t, n, e) {
      e.r(n);
      var a = e("2d25"),
        i = e("80aa");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(o);
      e("f093");
      var f = e("828b"),
        u = Object(f.a)(i.default, a.b, a.c, !1, null, "409eb367", null, !1, a.a, void 0);
      n.default = u.exports
    },
    "53fc": function(t, n, e) {},
    "7f40": function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        data: function() {
          return {
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
            info: {}
          }
        },
        onLoad: function() {
          var t = this;
          this.getOpenerEventChannel().on("getData", (function(n) {
            t.info = n.data, console.log(n.data)
          }))
        },
        methods: {}
      };
      n.default = a
    },
    "80aa": function(t, n, e) {
      e.r(n);
      var a = e("7f40"),
        i = e.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(o);
      n.default = i.a
    },
    f093: function(t, n, e) {
      var a = e("53fc");
      e.n(a).a
    }
  },
  [
    ["33c5", "common/runtime", "common/vendor"]
  ]
]);