(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/qxjz/st"], {
    "0c81": function(t, n, e) {
      (function(t, n) {
        var o = e("47a9");
        e("671b"), o(e("3240"));
        var c = o(e("4c6a"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(c.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "46a4": function(t, n, e) {
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return c
      })), e.d(n, "a", (function() {}));
      var o = function() {
          this.$createElement;
          var t = (this._self._c, this.list.length),
            n = this.list.length;
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              g1: n
            }
          })
        },
        c = []
    },
    "4c6a": function(t, n, e) {
      e.r(n);
      var o = e("46a4"),
        c = e("867f");
      for (var i in c)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return c[t]
        }))
      }(i);
      e("7ad6");
      var a = e("828b"),
        u = Object(a.a)(c.default, o.b, o.c, !1, null, "44d7f2cc", null, !1, o.a, void 0);
      n.default = u.exports
    },
    "7ad6": function(t, n, e) {
      var o = e("9c17");
      e.n(o).a
    },
    "867f": function(t, n, e) {
      e.r(n);
      var o = e("dc2b"),
        c = e.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      n.default = c.a
    },
    "9c17": function(t, n, e) {},
    dc2b: function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = {
        components: {
          dtjd: function() {
            e.e("pages/qxjz/components/dtjd").then(function() {
              return resolve(e("c296"))
            }.bind(null, e)).catch(e.oe)
          },
          kt: function() {
            e.e("pages/qxjz/components/kt").then(function() {
              return resolve(e("5464"))
            }.bind(null, e)).catch(e.oe)
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
          prev: function() {
            this.index > 0 && this.index--
          },
          change: function(t) {
            t.isOk && this.form.correct_question_num++
          },
          next: function() {
            this.index++
          },
          getList: function() {
            var t = this;
            this.startTime = Date.now(), this.$http.get("exam/getexamdata/99999999").then((function(n) {
              console.log(n), t.list = n.data.question_list, t.exam_config = n.data.exam_config
            }))
          }
        }
      };
      n.default = o
    }
  },
  [
    ["0c81", "common/runtime", "common/vendor"]
  ]
]);