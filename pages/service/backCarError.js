(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/service/backCarError"], {
    "2df4": function(e, t, n) {
      var a = n("9fc6");
      n.n(a).a
    },
    "656a": function(e, t, n) {
      n.r(t);
      var a = n("c3f1"),
        r = n("681f");
      for (var i in r)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(i);
      n("2df4");
      var o = n("828b"),
        s = Object(o.a)(r.default, a.b, a.c, !1, null, "26f7f181", null, !1, a.a, void 0);
      t.default = s.exports
    },
    "681f": function(e, t, n) {
      n.r(t);
      var a = n("70e1"),
        r = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      t.default = r.a
    },
    "70e1": function(e, t, n) {
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = a(n("7eb4")),
          i = a(n("ee10")),
          o = a(n("2100")),
          s = a(n("b2d0")),
          u = {
            name: "service_back_car_error",
            data: function() {
              return {
                show_loading: !0,
                question_types: ["不在车旁", "车辆故障", "蓝牙连接失败", "校外不想骑回", "定位错误", "其他"],
                question_type: "请选择问题类型",
                show_question_types_modal: !1,
                car_number: "",
                carmodel_id: "",
                errors_1: [{
                  title: "车锁"
                }, {
                  title: "刹车"
                }, {
                  title: "链条"
                }],
                errors_2: [{
                  title: "无助力"
                }, {
                  title: "脚踏"
                }, {
                  title: "其他"
                }],
                damaged_part_desc: "",
                remark: "",
                position: "",
                images: [],
                tempImgs: [],
                tempImgPaths: [],
                loading: !1,
                upload_token: "",
                is_iphone_x: !1
              }
            },
            methods: {
              submitLogList: function() {
                var t = this;
                return (0, i.default)(r.default.mark((function n() {
                  var a;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!(a = e.getStorageSync("logList") || []).length) {
                          n.next = 7;
                          break
                        }
                        return e.showLoading({
                          title: "正在提交日志"
                        }), n.next = 5, t.$http.post("log", {
                          logList: JSON.stringify(a)
                        });
                      case 5:
                        e.hideLoading(), s.default.removeLogList();
                      case 7:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              onInput: function(e, t) {
                switch (console.log("onInput", e), t) {
                  case 1:
                    this.remark = e.detail;
                    break;
                  case 2:
                    this.position = e.detail
                }
              },
              onBlur: function(e, t) {
                switch (console.log("onBlur", e), t) {
                  case 1:
                    this.remark = e.detail.value;
                    break;
                  case 2:
                    this.position = e.detail.value
                }
              },
              onCancel: function() {
                this.show_question_types_modal = !1
              },
              onConfirm: function(e) {
                this.show_question_types_modal = !1, this.question_type = e.detail.value
              },
              check: function(e, t, n) {
                var a = this;
                1 === n ? (this.$set(e[t], "checked", !e[t].checked), void 0 !== e[t].btns && e[t].btns.length > 0 && (e[t].btns.forEach((function(e) {
                  a.$set(e, "checked", !1)
                })), this.$set(e[t].btns[0], "checked", !0))) : (e.forEach((function(e) {
                  a.$set(e, "checked", !1)
                })), this.$set(e[t], "checked", !0))
              },
              chooseImage: function() {
                var t = this;
                o.default.inSystemPage = !0, e.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["camera"],
                  success: function() {
                    var e = (0, i.default)(r.default.mark((function e(n) {
                      return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t.tempImgs.push(n.tempFilePaths), t.tempImgPaths.push(n.tempFilePaths[0]);
                          case 2:
                          case "end":
                            return e.stop()
                        }
                      }), e)
                    })));
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  }(),
                  fail: function(e) {}
                })
              },
              getUploadToken: function() {
                var e = this;
                return (0, i.default)(r.default.mark((function t() {
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
                return (0, i.default)(r.default.mark((function t() {
                  return r.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.abrupt("return", new Promise(function() {
                          var t = (0, i.default)(r.default.mark((function t(n) {
                            return r.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  if (!(e.tempImgPaths.length > 0)) {
                                    t.next = 9;
                                    break
                                  }
                                  if (e.tempImgPaths.length !== e.images.length) {
                                    t.next = 4;
                                    break
                                  }
                                  return n(), t.abrupt("return");
                                case 4:
                                  return t.next = 6, e.getUploadToken();
                                case 6:
                                  e.tempImgPaths.forEach((function(t) {
                                    var a = e;
                                    a.$qiniuUploader.upload(t, (function(e) {
                                      a.images.push(e.image.key), a.images.length === a.tempImgPaths.length && n()
                                    }), (function() {}), {
                                      region: "ECN",
                                      uptoken: a.upload_token
                                    })
                                  })), t.next = 10;
                                  break;
                                case 9:
                                  n();
                                case 10:
                                case "end":
                                  return t.stop()
                              }
                            }), t)
                          })));
                          return function(e) {
                            return t.apply(this, arguments)
                          }
                        }()));
                      case 1:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getLocation: function() {
                var t = this;
                return new Promise((function(n) {
                  var a = t;
                  e.getLocation({
                    type: "gcj02",
                    success: function(e) {
                      a.longitude = e.longitude, a.latitude = e.latitude, n()
                    },
                    fail: function() {
                      n()
                    }
                  })
                }))
              },
              submit: function() {
                var e = this;
                return (0, i.default)(r.default.mark((function t() {
                  return r.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e.loading) {
                          t.next = 2;
                          break
                        }
                        return t.abrupt("return");
                      case 2:
                        e.showLoading({
                          title: "提交中",
                          mask: !0
                        }), e.loading = !0, e.getLocation().then((0, i.default)(r.default.mark((function t() {
                          return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt("return", e.qiniuUpload());
                              case 1:
                              case "end":
                                return t.stop()
                            }
                          }), t)
                        })))).then((0, i.default)(r.default.mark((function t() {
                          return r.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.abrupt("return", e.doSubmit());
                              case 1:
                              case "end":
                                return t.stop()
                            }
                          }), t)
                        }))));
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              doSubmit: function() {
                var t = this;
                return (0, i.default)(r.default.mark((function n() {
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!(t.question_types.indexOf(t.question_type) <= -1)) {
                          n.next = 4;
                          break
                        }
                        return e.showToast({
                          title: "请选择问题类型",
                          icon: "none"
                        }), t.loading = !1, n.abrupt("return");
                      case 4:
                        return n.abrupt("return", new Promise((0, i.default)(r.default.mark((function n() {
                          var a, i, o;
                          return r.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return "车辆故障" == t.question_type && (t.damaged_part_desc = "", t.errors_1.forEach((function(e, n) {
                                  void 0 !== e.checked && e.checked && (t.damaged_part_desc += e.title, 0 === n && e.btns.forEach((function(e) {
                                    void 0 !== e.checked && e.checked && (t.damaged_part_desc += ":" + e.title)
                                  })), t.damaged_part_desc += ";")
                                })), console.log("this.errors_2", t.errors_2), t.errors_2.forEach((function(e) {
                                  void 0 !== e.checked && e.checked && (t.damaged_part_desc += e.title + ";")
                                }))), a = e.getStorageSync("healthLogList") || [], n.next = 4, t.$http.post("feedback", {
                                  type: 1,
                                  car_number: t.car_number,
                                  question_type: t.question_type,
                                  damaged_part_desc: t.damaged_part_desc,
                                  position: t.position,
                                  longitude: t.longitude,
                                  latitude: t.latitude,
                                  images: t.images.length > 0 ? JSON.stringify(t.images) : "",
                                  logList: JSON.stringify(a),
                                  remark: t.remark
                                });
                              case 4:
                                i = n.sent, o = t, void 0 !== i.status_code && 200 === i.status_code ? e.showToast({
                                  title: void 0 !== i.message && i.message ? i.message : "提交成功",
                                  icon: "success",
                                  complete: function() {
                                    o.loading = !1, o.hideLoading(), o.reset(), o.goHome()
                                  }
                                }) : e.showToast({
                                  title: void 0 !== i.message && i.message ? i.message : "提交失败",
                                  icon: "none",
                                  complete: function() {
                                    o.loading = !1
                                  }
                                }), s.default.removeHealthLogList();
                              case 8:
                              case "end":
                                return n.stop()
                            }
                          }), n)
                        })))));
                      case 5:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              reset: function() {
                this.question_type = "请选择问题类型", this.damaged_part_desc = "", this.position = "", this.longitude = "", this.latitude = "", this.images = [], this.remark = "", this.tempImgs = [], this.tempImgPaths = []
              }
            },
            onLoad: function() {
              var e;
              this.car_number = void 0 !== this.$route.query.car_number ? this.$route.query.car_number : "", this.carmodel_id = void 0 !== this.$route.query.carmodel_id ? this.$route.query.carmodel_id : "", 1 == this.carmodel_id ? (e = [{
                title: "锁未弹开",
                checked: !0
              }, {
                title: "无法关锁"
              }, {
                title: "外形破损"
              }], this.errors_2[0].title = "车座") : (e = [{
                title: "开锁失败",
                checked: !0
              }, {
                title: "关锁失败"
              }], this.errors_2[0].title = "无助力"), this.$set(this.errors_1[0], "btns", e)
            },
            onShow: function() {
              var e = this;
              this.submitLogList(), this.hideLoading(), this.check_is_login().then((function() {
                console.log("this.screen_height", e.screen_height), e.is_iphone_x = e.isIphoneX()
              }))
            },
            onUnload: function() {
              Object.assign(this.$data, this.$options.data())
            }
          };
        t.default = u
      }).call(this, n("3223").default)
    },
    "9fc6": function(e, t, n) {},
    a8b4: function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var r = a(n("656a"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    c3f1: function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {}));
      var a = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.tempImgs.length);
          e._isMounted || (e.e0 = function(t) {
            e.show_question_types_modal = !0
          }), e.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        r = []
    }
  },
  [
    ["a8b4", "common/runtime", "common/vendor"]
  ]
]);