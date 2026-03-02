(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/member/detail"], {
    "15ca": function(e, t, n) {},
    "2c77": function(e, t, n) {
      var a = n("3c32");
      n.n(a).a
    },
    "3c32": function(e, t, n) {},
    "7fb8": function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var r = a(n("e395"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "87b4": function(e, t, n) {
      n.r(t);
      var a = n("da1c"),
        r = n.n(a);
      for (var u in a)["default"].indexOf(u) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(u);
      t.default = r.a
    },
    a5a8: function(e, t, n) {
      var a = n("15ca");
      n.n(a).a
    },
    da1c: function(e, t, n) {
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = a(n("7eb4")),
          u = a(n("ee10")),
          o = a(n("2100")),
          c = {
            name: "member_detail",
            data: function() {
              return {
                user: {},
                tempImg: "",
                tempImgPath: "",
                upload_token: "",
                popup: 0,
                columns: [],
                colleges: [],
                minDate: void 0,
                maxDate: void 0,
                formatter: function(e, t) {
                  return "year" === e ? "".concat(t, "年") : "month" === e ? "".concat(t, "月") : t
                },
                loading: !1,
                tip: "",
                nickname: "",
                show_modal: !1
              }
            },
            methods: {
              updateUser: function(t, n) {
                var a = this;
                return (0, u.default)(r.default.mark((function u() {
                  var o, c, s;
                  return r.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, a.$http.put("user", t);
                      case 2:
                        return o = r.sent, c = o.status_code, s = o.message, e.showToast({
                          title: void 0 !== n ? n : s,
                          icon: "none"
                        }), r.abrupt("return", c);
                      case 7:
                      case "end":
                        return r.stop()
                    }
                  }), u)
                })))()
              },
              onChange: function(e, t) {
                var n = this;
                return (0, u.default)(r.default.mark((function a() {
                  return r.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        a.t0 = t, a.next = 1 === a.t0 ? 3 : 2 === a.t0 ? 9 : 3 === a.t0 ? 12 : 16;
                        break;
                      case 3:
                        if (e.detail.value === n.user.nickname) {
                          a.next = 8;
                          break
                        }
                        return a.next = 6, n.updateUser({
                          nickname: e.detail.value
                        });
                      case 6:
                        return a.next = 8, n.getUser();
                      case 8:
                        return a.abrupt("break", 17);
                      case 9:
                        return n.popup = t, n.columns = ["男", "女"], a.abrupt("break", 17);
                      case 12:
                        return n.popup = t, n.columns = [], n.colleges.forEach((function(e) {
                          n.columns.push({
                            text: e.name,
                            college_id: e.id
                          })
                        })), a.abrupt("break", 17);
                      case 16:
                        n.popup = t;
                      case 17:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              chooseImage: function(t) {
                this.show_modal = !1;
                var n = this;
                o.default.inSystemPage = !0, e.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: 1 == t ? ["camera"] : ["album"],
                  success: function() {
                    var e = (0, u.default)(r.default.mark((function e(t) {
                      return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n.tempImg = t.tempFilePaths, n.tempImgPath = t.tempFilePaths[0], e.next = 4, n.getUploadToken();
                          case 4:
                            return e.next = 6, n.qiniuUpload();
                          case 6:
                          case "end":
                            return e.stop()
                        }
                      }), e)
                    })));
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  }(),
                  fail: function(e) {
                    console.log(e)
                  }
                })
              },
              getUploadToken: function() {
                var e = this;
                return (0, u.default)(r.default.mark((function t() {
                  var n;
                  return r.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.$http.get("qiniu/uploadtoken");
                      case 2:
                        void 0 !== (n = t.sent).data && void 0 !== n.data.token && (e.upload_token = n.data.token);
                      case 4:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              qiniuUpload: function() {
                var e = this;
                return (0, u.default)(r.default.mark((function t() {
                  var n;
                  return r.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n = e, t.next = 3, e.$qiniuUploader.upload(e.tempImgPath, function() {
                          var e = (0, u.default)(r.default.mark((function e(t) {
                            return r.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  return e.next = 2, n.updateUser({
                                    avatar: t.image.key
                                  }, "上传成功");
                                case 2:
                                  return e.next = 4, n.getUser();
                                case 4:
                                case "end":
                                  return e.stop()
                              }
                            }), e)
                          })));
                          return function(t) {
                            return e.apply(this, arguments)
                          }
                        }(), (function() {}), {
                          region: "ECN",
                          uptoken: n.upload_token
                        });
                      case 3:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              onConfirm: function(e) {
                var t = this;
                return (0, u.default)(r.default.mark((function n() {
                  var a, u;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        n.t0 = t.popup, n.next = 2 === n.t0 ? 3 : 3 === n.t0 ? 8 : 4 === n.t0 ? 13 : 20;
                        break;
                      case 3:
                        return t.popup = 0, n.next = 6, t.updateUser({
                          sex: e.detail.index + 1
                        });
                      case 6:
                        return t.getUser(), n.abrupt("break", 20);
                      case 8:
                        return t.popup = 0, n.next = 11, t.updateUser({
                          college_id: e.detail.value.college_id
                        });
                      case 11:
                        return t.getUser(), n.abrupt("break", 20);
                      case 13:
                        return t.popup = 0, a = new Date(e.detail), u = a.getFullYear() + "年 " + (a.getMonth() + 1) + "月", n.next = 18, t.updateUser({
                          admission_time: u
                        });
                      case 18:
                        return t.getUser(), n.abrupt("break", 20);
                      case 20:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              onCancel: function() {
                this.popup = 0
              },
              getUser: function() {
                var e = this;
                return (0, u.default)(r.default.mark((function t() {
                  var n, a;
                  return r.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.$http.get("user");
                      case 2:
                        n = t.sent, a = n.data, e.user = a, e.nickname = e.user.nickname, e.tip = e.user.is_full ? "" : "完善个人信息即可获得积分哟~";
                      case 7:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getColleges: function() {
                var e = this;
                return (0, u.default)(r.default.mark((function t() {
                  var n, a;
                  return r.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.$http.get("user/school/colleges");
                      case 2:
                        n = t.sent, a = n.data, e.colleges = a;
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getAdmissionTime: function() {
                var e = this;
                return (0, u.default)(r.default.mark((function t() {
                  var n, a;
                  return r.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.$http.get("admission_time");
                      case 2:
                        n = t.sent, a = n.data, e.maxDate = parseInt(a.unix + "000"), e.minDate = parseInt(a.unix - 3600 * a.count * 24 * 365 + "000");
                      case 6:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              }
            },
            onShow: function() {
              var t = this;
              return (0, u.default)(r.default.mark((function n() {
                return r.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if (t.loading = !0, !e.getStorageSync("token")) {
                        n.next = 9;
                        break
                      }
                      return n.next = 4, t.getUser();
                    case 4:
                      return t.loading = !1, n.next = 7, t.getColleges();
                    case 7:
                      return n.next = 9, t.getAdmissionTime();
                    case 9:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            }
          };
        t.default = c
      }).call(this, n("3223").default)
    },
    e395: function(e, t, n) {
      n.r(t);
      var a = n("f45a"),
        r = n("87b4");
      for (var u in r)["default"].indexOf(u) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(u);
      n("a5a8"), n("2c77");
      var o = n("828b"),
        c = Object(o.a)(r.default, a.b, a.c, !1, null, "3666b94c", null, !1, a.a, void 0);
      t.default = c.exports
    },
    f45a: function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {}));
      var a = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.show_modal = !0
          }, e.e1 = function(t) {
            e.show_modal = !1
          })
        },
        r = []
    }
  },
  [
    ["7fb8", "common/runtime", "common/vendor"]
  ]
]);