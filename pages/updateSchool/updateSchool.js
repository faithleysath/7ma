(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/updateSchool/updateSchool"], {
    "35b3": function(t, e, n) {
      (function(t) {
        var o = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = o(n("7eb4")),
          i = o(n("ee10")),
          c = {
            data: function() {
              return {
                schoolShow: !1,
                list: [],
                form: {
                  school_id: "",
                  school_text: ""
                },
                info: {},
                checked: !1,
                agreement: {}
              }
            },
            onLoad: function() {
              var t = this;
              return (0, i.default)(a.default.mark((function e() {
                var n;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, t.$http.get("agreement/use_car");
                    case 2:
                      n = e.sent, t.agreement = n.data;
                    case 4:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            onShow: function() {
              this.getList(), this.getCert()
            },
            methods: {
              submit: function() {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (e.checked) {
                          n.next = 5;
                          break
                        }
                        return t.showToast({
                          title: "请先阅读并同意服务协议",
                          icon: "none"
                        }), n.abrupt("return");
                      case 5:
                        if (e.form.school_id) {
                          n.next = 8;
                          break
                        }
                        return t.showToast({
                          title: "请选择学校",
                          icon: "none"
                        }), n.abrupt("return");
                      case 8:
                        t.showLoading({
                          title: "提交中",
                          mask: !0
                        }), e.$http.post("schoolRecertification", {
                          school_id: e.form.school_id
                        }).then((function(n) {
                          var o = n.status_code,
                            a = n.message;
                          t.hideLoading(), 200 == o ? (t.showToast({
                            title: "提交成功，请耐心等待审核结果",
                            icon: "none"
                          }), setTimeout((function() {
                            e.go("/pages/home/index?from=cert1", "reLaunch")
                          }), 1500)) : t.showToast({
                            title: a,
                            icon: "none"
                          })
                        }));
                      case 10:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              isTrue: function(t) {
                var e = t.detail;
                this.checked = e
              },
              getList: function() {
                var t = this;
                this.$http.get("haidaWestCoast").then((function(e) {
                  t.list = e.data.map((function(t) {
                    return {
                      text: t.name + "-" + t.area,
                      id: t.id
                    }
                  }))
                }))
              },
              getSchool: function(t) {
                var e = t.type,
                  n = t.detail;
                "confirm" == e && (this.schoolShow = !1), this.form.school_id = n.value.id, this.form.school_text = n.value.text
              },
              getCert: function() {
                var t = this;
                this.$http.get("cert?type=1").then((function(e) {
                  var n = e.status_code,
                    o = e.data;
                  n && (t.info = o)
                }))
              },
              go: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "navigateTo";
                t[n]({
                  url: e
                })
              }
            }
          };
        e.default = c
      }).call(this, n("df3c").default)
    },
    "37c9": function(t, e, n) {
      n.r(e);
      var o = n("35b3"),
        a = n.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(i);
      e.default = a.a
    },
    5339: function(t, e, n) {},
    5731: function(t, e, n) {
      var o = n("f654");
      n.n(o).a
    },
    "953e": function(t, e, n) {
      (function(t, e) {
        var o = n("47a9");
        n("671b"), o(n("3240"));
        var a = o(n("e637"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    b3a0: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this;
          t.$createElement;
          t._self._c, t._isMounted || (t.e0 = function(e) {
            t.schoolShow = !0
          }, t.e1 = function(e) {
            t.schoolShow = !1
          }, t.e2 = function(e) {
            t.schoolShow = !1
          })
        },
        a = []
    },
    d515: function(t, e, n) {
      var o = n("5339");
      n.n(o).a
    },
    e637: function(t, e, n) {
      n.r(e);
      var o = n("b3a0"),
        a = n("37c9");
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(i);
      n("d515"), n("5731");
      var c = n("828b"),
        r = Object(c.a)(a.default, o.b, o.c, !1, null, "f12563b2", null, !1, o.a, void 0);
      e.default = r.exports
    },
    f654: function(t, e, n) {}
  },
  [
    ["953e", "common/runtime", "common/vendor"]
  ]
]);