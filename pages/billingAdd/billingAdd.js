(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/billingAdd/billingAdd"], {
    "0de6": function(e, t, n) {
      n.r(t);
      var r = n("7822"),
        o = n.n(r);
      for (var i in r)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(i);
      t.default = o.a
    },
    3216: function(e, t, n) {
      n.r(t);
      var r = n("a9e5"),
        o = n("0de6");
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      n("e92c");
      var a = n("828b"),
        u = Object(a.a)(o.default, r.b, r.c, !1, null, "2b4518b0", null, !1, r.a, void 0);
      t.default = u.exports
    },
    7822: function(e, t, n) {
      (function(e, r) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = o(n("7ca3")),
          a = o(n("5d6c"));

        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }

        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(n), !0).forEach((function(t) {
              (0, i.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var f = {
          data: function() {
            return {
              form: {
                title: "",
                type: 0,
                is_default: 0,
                identity_number: "",
                tax_id: "",
                address: "",
                phone: "",
                bank: "",
                bank_account: "",
                email: ""
              }
            }
          },
          methods: {
            submit: function() {
              var t = this;
              (0, a.default)(this.form, {
                type: [{
                  validator: function(e, t) {
                    "" === e ? t(!1, "请选择抬头类型") : t(!0)
                  }
                }],
                title: [{
                  required: !0,
                  message: "请填写发票抬头"
                }],
                tax_id: [{
                  required: 0 == this.form.type,
                  message: "请填写纳税人识别号"
                }],
                identity_number: [{
                  required: 1 == this.form.type,
                  message: "请填写身份证号"
                }],
                address: [{
                  required: !0,
                  message: "请填写地址"
                }],
                phone: [{
                  required: !0,
                  message: "请填写联系电话"
                }],
                bank: [{
                  required: 0 == this.form.type,
                  message: "请填写开户行"
                }],
                bank_account: [{
                  required: 0 == this.form.type,
                  message: "请填写银行账号"
                }],
                email: [{
                  required: !0,
                  type: "email",
                  message: "请填写接收邮箱"
                }]
              }, (function(n, o) {
                n ? t.$http.post("billing/address", c(c({}, t.form), {}, {
                  tax_id: 0 == t.form.type ? t.form.tax_id : "",
                  identity_number: 1 == t.form.type ? t.form.identity_number : "",
                  bank: 0 == t.form.type ? t.form.bank : "",
                  bank_account: 0 == t.form.type ? t.form.bank_account : ""
                })).then((function(t) {
                  200 == t.status_code ? (e.showToast({
                    title: "新增成功",
                    icon: "none"
                  }), setTimeout((function() {
                    r.navigateBack()
                  }), 1500)) : e.showToast({
                    title: t.message,
                    icon: "none"
                  })
                })) : e.showToast({
                  title: o,
                  icon: "none"
                })
              }))
            },
            go: function(e) {
              r.navigateTo({
                url: e
              })
            }
          }
        };
        t.default = f
      }).call(this, n("3223").default, n("df3c").default)
    },
    "880e": function(e, t, n) {},
    a9e5: function(e, t, n) {
      n.d(t, "b", (function() {
        return r
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var r = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.form.type = 0
          }, e.e1 = function(t) {
            e.form.type = 1
          }, e.e2 = function(t) {
            e.form.is_default = 1
          }, e.e3 = function(t) {
            e.form.is_default = 0
          })
        },
        o = []
    },
    ce48: function(e, t, n) {
      (function(e, t) {
        var r = n("47a9");
        n("671b"), r(n("3240"));
        var o = r(n("3216"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    e92c: function(e, t, n) {
      var r = n("880e");
      n.n(r).a
    }
  },
  [
    ["ce48", "common/runtime", "common/vendor"]
  ]
]);