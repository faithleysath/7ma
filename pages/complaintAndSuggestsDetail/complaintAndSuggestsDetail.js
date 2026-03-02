(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/complaintAndSuggestsDetail/complaintAndSuggestsDetail"], {
    "2ae9": function(n, t, e) {
      (function(n, t) {
        var a = e("47a9");
        e("671b"), a(e("3240"));
        var i = a(e("46b0"));
        n.__webpack_require_UNI_MP_PLUGIN__ = e, t(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "316e": function(n, t, e) {},
    "46b0": function(n, t, e) {
      e.r(t);
      var a = e("cf2d"),
        i = e("d1ed");
      for (var o in i)["default"].indexOf(o) < 0 && function(n) {
        e.d(t, n, (function() {
          return i[n]
        }))
      }(o);
      e("488e");
      var u = e("828b"),
        c = Object(u.a)(i.default, a.b, a.c, !1, null, "0e20ee5f", null, !1, a.a, void 0);
      t.default = c.exports
    },
    "488e": function(n, t, e) {
      var a = e("316e");
      e.n(a).a
    },
    bc79: function(n, t, e) {
      (function(n) {
        var a = e("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0, a(e("5d6c"));
        var i = {
          data: function() {
            return {
              info: {},
              id: ""
            }
          },
          onLoad: function(n) {
            var t = n.id;
            this.id = t, this.getInfo()
          },
          methods: {
            getInfo: function() {
              var t = this;
              this.$http.get("complaintAndSuggests/" + this.id).then((function(e) {
                200 == e.status_code ? t.info = e.data : n.showToast({
                  title: e.message,
                  icon: "none"
                })
              }))
            }
          }
        };
        t.default = i
      }).call(this, e("3223").default)
    },
    cf2d: function(n, t, e) {
      e.d(t, "b", (function() {
        return a
      })), e.d(t, "c", (function() {
        return i
      })), e.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    d1ed: function(n, t, e) {
      e.r(t);
      var a = e("bc79"),
        i = e.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(n) {
        e.d(t, n, (function() {
          return a[n]
        }))
      }(o);
      t.default = i.a
    }
  },
  [
    ["2ae9", "common/runtime", "common/vendor"]
  ]
]);