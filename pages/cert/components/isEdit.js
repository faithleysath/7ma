(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/cert/components/isEdit"], {
    "4a1c": function(e, t, n) {
      n.r(t);
      var o = n("89e3"),
        a = n.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      t.default = a.a
    },
    "80c7": function(e, t, n) {
      n.r(t);
      var o = n("cbc6"),
        a = n("4a1c");
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      var c = n("828b"),
        i = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      t.default = i.exports
    },
    "89e3": function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = {
        props: {
          form: {
            type: Object,
            default: function() {}
          },
          localtionImg: {
            type: String,
            default: ""
          },
          type: {
            type: String,
            default: ""
          }
        },
        data: function() {
          return {
            personList: [{
              name: "学生",
              id: 1
            }, {
              name: "教职工",
              id: 2
            }, {
              name: "服务保障人员",
              id: 3
            }, {
              name: "其他人员",
              id: 4
            }],
            studentList: [{
              name: "本科新生",
              id: 1
            }, {
              name: "研究生新生",
              id: 2
            }, {
              name: "其他",
              id: 3
            }]
          }
        }
      };
      t.default = o
    },
    cbc6: function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {}));
      var o = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.personList.filter((function(t) {
              return t.id == e.form.person_type
            }))),
            n = 1 == e.form.person_type && e.form.student_type ? e.studentList.filter((function(t) {
              return t.id == e.form.student_type
            })) : null,
            o = e.form.graduate_time ? e.form.graduate_time.replace(/ 00:00:00/, "") : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              g1: n,
              g2: o
            }
          })
        },
        a = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["pages/cert/components/isEdit-create-component", {
    "pages/cert/components/isEdit-create-component": function(e, t, n) {
      n("df3c").createComponent(n("80c7"))
    }
  },
  [
    ["pages/cert/components/isEdit-create-component"]
  ]
]);