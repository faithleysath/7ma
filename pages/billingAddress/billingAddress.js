(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/billingAddress/billingAddress"], {
    1635: function(n, t, o) {
      o.r(t);
      var e = o("8189"),
        i = o.n(e);
      for (var d in e)["default"].indexOf(d) < 0 && function(n) {
        o.d(t, n, (function() {
          return e[n]
        }))
      }(d);
      t.default = i.a
    },
    8154: function(n, t, o) {
      o.d(t, "b", (function() {
        return e
      })), o.d(t, "c", (function() {
        return i
      })), o.d(t, "a", (function() {}));
      var e = function() {
          var n = this;
          n.$createElement;
          n._self._c, n._isMounted || (n.e0 = function(t) {
            n.addrShow = !0
          }, n.e1 = function(t) {
            n.addrShow = !1
          }, n.e2 = function(t) {
            n.addrShow = !1
          }, n.e3 = function(t) {
            n.addrShow = !1
          })
        },
        i = []
    },
    8189: function(n, t, o) {
      (function(n, o) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var e = {
          data: function() {
            return {
              form: {
                count: 0,
                order_type: 1,
                billing_address_id: "",
                order_json: [],
                addInfo: {}
              },
              addrList: [],
              addrShow: !1
            }
          },
          onLoad: function(n) {
            var t = this,
              o = n.count,
              e = n.order_type;
            this.form.count = o, this.form.order_type = e, this.getOpenerEventChannel().on("getData", (function(n) {
              t.form.order_json = n.form
            }))
          },
          onShow: function() {
            this.getAddressList()
          },
          methods: {
            submit: function() {
              this.$http.post("user/cycling/billing", this.form).then((function(t) {
                200 == t.status_code ? (n.showToast({
                  title: "提交成功",
                  icon: "none",
                  mask: !0
                }), setTimeout((function() {
                  o.switchTab({
                    url: "/pages/wallet/index"
                  })
                }), 800)) : n.showToast({
                  title: t.message,
                  icon: "none",
                  mask: !0
                })
              }))
            },
            setAddInfo: function(n) {
              this.form.addInfo = n, this.form.billing_address_id = n.id
            },
            getAddressList: function() {
              var n = this;
              this.$http.get("billing/address").then((function(t) {
                n.addrList = t.data;
                for (var o = 0; o < t.data.length; o++) {
                  var e = t.data[o];
                  if (e.is_default) {
                    n.form.addInfo = e, n.form.billing_address_id = e.id;
                    break
                  }
                }
              }))
            },
            go: function(n) {
              o.navigateTo({
                url: n
              })
            }
          }
        };
        t.default = e
      }).call(this, o("3223").default, o("df3c").default)
    },
    b28d: function(n, t, o) {
      o.r(t);
      var e = o("8154"),
        i = o("1635");
      for (var d in i)["default"].indexOf(d) < 0 && function(n) {
        o.d(t, n, (function() {
          return i[n]
        }))
      }(d);
      o("fd92");
      var a = o("828b"),
        r = Object(a.a)(i.default, e.b, e.c, !1, null, "22d31f4d", null, !1, e.a, void 0);
      t.default = r.exports
    },
    bbd1: function(n, t, o) {
      (function(n, t) {
        var e = o("47a9");
        o("671b"), e(o("3240"));
        var i = e(o("b28d"));
        n.__webpack_require_UNI_MP_PLUGIN__ = o, t(i.default)
      }).call(this, o("3223").default, o("df3c").createPage)
    },
    bc95: function(n, t, o) {},
    fd92: function(n, t, o) {
      var e = o("bc95");
      o.n(e).a
    }
  },
  [
    ["bbd1", "common/runtime", "common/vendor"]
  ]
]);