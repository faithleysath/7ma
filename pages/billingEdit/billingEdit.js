(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/billingEdit/billingEdit"], {
    "2b33": function(t, e, n) {
      (function(t, o) {
        var i = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = i(n("7ca3")),
          r = i(n("5d6c"));

        function c(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function u(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function(e) {
              (0, a.default)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        var f = {
          data: function() {
            return {
              id: "",
              form: {
                title: "",
                type: "",
                is_default: 0,
                tax_id: "",
                address: "",
                phone: "",
                bank: "",
                bank_account: "",
                email: ""
              }
            }
          },
          onLoad: function(t) {
            var e = t.id;
            this.id = e, this.getInfo()
          },
          methods: {
            getInfo: function() {
              var t = this;
              this.$http.get("billing/address/" + this.id).then((function(e) {
                t.form = e.data
              }))
            },
            del: function() {
              var e = this;
              t.showModal({
                title: "提示",
                content: "是否确定删除此抬头？",
                success: function(n) {
                  n.confirm ? e.$http.delete("billing/address/" + e.id).then((function(e) {
                    200 == e.status_code ? (o.showToast({
                      title: "删除成功",
                      icon: "none"
                    }), setTimeout((function() {
                      t.navigateBack()
                    }), 1500)) : o.showToast({
                      title: e.message,
                      icon: "none"
                    })
                  })) : n.cancel
                }
              })
            },
            submit: function() {
              var e = this;
              (0, r.default)(this.form, {
                type: [{
                  validator: function(t, e) {
                    "" === t ? e(!1, "请选择抬头类型") : e(!0)
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
                address: [{
                  required: !0,
                  message: "请填写地址"
                }],
                phone: [{
                  required: !0,
                  message: "请填写联系电话"
                }],
                email: [{
                  required: !0,
                  type: "email",
                  message: "请填写接收邮箱"
                }]
              }, (function(n, i) {
                n ? e.$http.put("billing/address/" + e.id, u(u({}, e.form), {}, {
                  tax_id: 0 == e.form.type ? e.form.tax_id : "",
                  bank: 0 == e.form.type ? e.form.bank : "",
                  bank_account: 0 == e.form.type ? e.form.bank_account : ""
                })).then((function(e) {
                  200 == e.status_code ? (o.showToast({
                    title: "编辑成功",
                    icon: "none"
                  }), setTimeout((function() {
                    t.navigateBack()
                  }), 1500)) : o.showToast({
                    title: e.message,
                    icon: "none"
                  })
                })) : o.showToast({
                  title: i,
                  icon: "none"
                })
              }))
            },
            go: function(e) {
              t.navigateTo({
                url: e
              })
            }
          }
        };
        e.default = f
      }).call(this, n("df3c").default, n("3223").default)
    },
    "2ba7": function(t, e, n) {
      n.r(e);
      var o = n("5879"),
        i = n("b4ad");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      n("e587");
      var r = n("828b"),
        c = Object(r.a)(i.default, o.b, o.c, !1, null, "7d5a3905", null, !1, o.a, void 0);
      e.default = c.exports
    },
    "3a5d": function(t, e, n) {},
    5879: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this;
          t.$createElement;
          t._self._c, t._isMounted || (t.e0 = function(e) {
            t.form.is_default = 1
          }, t.e1 = function(e) {
            t.form.is_default = 0
          })
        },
        i = []
    },
    b4ad: function(t, e, n) {
      n.r(e);
      var o = n("2b33"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      e.default = i.a
    },
    c666: function(t, e, n) {
      (function(t, e) {
        var o = n("47a9");
        n("671b"), o(n("3240"));
        var i = o(n("2ba7"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    e587: function(t, e, n) {
      var o = n("3a5d");
      n.n(o).a
    }
  },
  [
    ["c666", "common/runtime", "common/vendor"]
  ]
]);