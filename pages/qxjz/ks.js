(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/qxjz/ks"], {
    "23f0": function(t, e, n) {},
    "7b0d": function(t, e, n) {
      (function(t, e) {
        var o = n("47a9");
        n("671b"), o(n("3240"));
        var i = o(n("7f4a"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "7f4a": function(t, e, n) {
      n.r(e);
      var o = n("86cd"),
        i = n("93e1");
      for (var c in i)["default"].indexOf(c) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(c);
      n("f148");
      var a = n("828b"),
        r = Object(a.a)(i.default, o.b, o.c, !1, null, "e018212a", null, !1, o.a, void 0);
      e.default = r.exports
    },
    "86cd": function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          var t = (this._self._c, this.list.length),
            e = this.list.length;
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              g1: e
            }
          })
        },
        i = []
    },
    "93e1": function(t, e, n) {
      n.r(e);
      var o = n("da02"),
        i = n.n(o);
      for (var c in o)["default"].indexOf(c) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(c);
      e.default = i.a
    },
    da02: function(t, e, n) {
      (function(t) {
        var o = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = o(n("7ca3"));

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

        function a(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function(e) {
              (0, i.default)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        var r = {
          components: {
            dtjd: function() {
              n.e("pages/qxjz/components/dtjd").then(function() {
                return resolve(n("c296"))
              }.bind(null, n)).catch(n.oe)
            },
            kt: function() {
              n.e("pages/qxjz/components/kt").then(function() {
                return resolve(n("5464"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              type: {
                1: "判断题",
                2: "单选题",
                3: "多选题"
              },
              list: [],
              exam_config: {
                pass_score: 60,
                total_score: 100,
                second: 600
              },
              index: 0,
              form: {
                correct_question_num: 0,
                exam_second: 0
              },
              startTime: 0
            }
          },
          onLoad: function() {
            this.getList()
          },
          methods: {
            submit: function() {
              var e = this;
              t.showLoading({
                title: "交卷中...",
                icon: "loading",
                mask: !0
              }), this.form.exam_second = Math.round((Date.now() - this.startTime) / 1e3), this.$http.post("exam/submitexamresult", a(a(a({}, this.exam_config), {}, {
                total_question_num: this.list.length
              }, this.form), {}, {
                exam_score: Math.min(this.exam_config.total_score, 10 * this.form.correct_question_num)
              })).then((function(n) {
                if (200 == n.status_code) {
                  var o;
                  o = Math.min(e.exam_config.total_score, 10 * e.form.correct_question_num) < e.exam_config.pass_score ? "抱歉，本次考试成绩为 " + Math.min(e.exam_config.total_score, 10 * e.form.correct_question_num) + "分，及格分为 " + e.exam_config.pass_score + "分，请再接再励！" : "恭喜！本次考试成绩为 " + Math.min(e.exam_config.total_score, 10 * e.form.correct_question_num) + "分，及格分为 " + e.exam_config.pass_score + "分，已通过！", t.showModal({
                    title: "提示",
                    content: o,
                    showCancel: !1,
                    confirmText: "知道了",
                    success: function(e) {
                      e.confirm && t.navigateBack()
                    }
                  })
                } else t.showToast({
                  title: n.message,
                  icon: "error"
                })
              }))
            },
            change: function(t) {
              t.isOk && this.form.correct_question_num++
            },
            next: function() {
              this.index++
            },
            getList: function() {
              var t = this;
              this.startTime = Date.now(), this.$http.get("exam/getexamdata/10").then((function(e) {
                console.log(e), t.list = e.data.question_list, t.exam_config = e.data.exam_config
              }))
            }
          }
        };
        e.default = r
      }).call(this, n("3223").default)
    },
    f148: function(t, e, n) {
      var o = n("23f0");
      n.n(o).a
    }
  },
  [
    ["7b0d", "common/runtime", "common/vendor"]
  ]
]);