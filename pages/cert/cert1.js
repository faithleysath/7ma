(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/cert/cert1"], {
    "011a": function(t, e, n) {
      n.r(e);
      var r = n("4405"),
        o = n.n(r);
      for (var a in r)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(a);
      e.default = o.a
    },
    "1c03": function(t, e, n) {
      n.r(e);
      var r = n("9d68"),
        o = n("011a");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("cd29"), n("78cb");
      var i = n("828b"),
        s = Object(i.a)(o.default, r.b, r.c, !1, null, "5256108f", null, !1, r.a, void 0);
      e.default = s.exports
    },
    2173: function(t, e, n) {},
    4405: function(t, e, n) {
      (function(t, r) {
        var o = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = o(n("7eb4")),
          i = o(n("7ca3")),
          s = o(n("ee10")),
          u = o(n("2100"));

        function c(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }

        function f(t) {
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
        var d = {
          name: "cert_cert1",
          components: {
            isEdit: function() {
              n.e("pages/cert/components/isEdit").then(function() {
                return resolve(n("80c7"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              user: {
                face_recognition: {
                  real_name: "",
                  identity_number: ""
                }
              },
              checked: !1,
              form: {
                name: "",
                area_id: "",
                area_type: "",
                cert_type: "",
                type_text: "",
                real_name: "",
                card_no: "",
                other: "",
                cert_photo: "",
                is_upload_cert_photo: 0,
                graduate_time_for_cycling_card: 0,
                cycling_order_face_recognition: 0,
                graduate_time: "",
                status: 0,
                person_type: "",
                student_type: "",
                person_type_name: "",
                student_type_name: ""
              },
              typeList: [{
                type: "card_no",
                text: "身份证号",
                value: 1
              }, {
                type: "other",
                text: "工号/学号/一卡通/其他",
                value: 2
              }],
              byTimeList: [],
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
              }],
              localtionImg: "",
              type: "",
              upload_token: "",
              agreement: {},
              isNot: !1,
              typeListShow: !1,
              isEdit: !1,
              rshyShow: !1,
              rshyInfo: {
                identity_number: "",
                real_name: ""
              },
              isRshy: !1,
              byShow: !1
            }
          },
          onLoad: function() {
            var e = this;
            return (0, s.default)(a.default.mark((function n() {
              var r, o, i, s, u, c;
              return a.default.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, e.$http.get("agreement/use_car");
                  case 2:
                    for (r = n.sent, e.agreement = r.data, e.$http.get("user").then((function(t) {
                        e.user = t.data
                      })), t.$on("getSchoolEvent", (function(t) {
                        var n = t.data;
                        e.setCurrentAreas(n), e.form.graduate_time = ""
                      })), o = [], i = new Date, s = i.getFullYear(), u = 0; u < 10; u++) c = {
                      text: s + "-06-30"
                    }, o.push(c), s++;
                    e.byTimeList = o;
                  case 11:
                  case "end":
                    return n.stop()
                }
              }), n)
            })))()
          },
          mounted: function() {
            var t = this;
            return (0, s.default)(a.default.mark((function e() {
              return a.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, t.getUploadToken();
                  case 2:
                    t.getCert();
                  case 3:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          methods: {
            getStudentType: function() {
              var t = this;
              r.showActionSheet({
                itemList: this.studentList.map((function(t) {
                  return t.name
                })),
                success: function(e) {
                  t.form.student_type = t.studentList[e.tapIndex].id, t.form.student_type_name = t.studentList[e.tapIndex].name
                },
                fail: function(e) {
                  t.form.student_type = "", t.form.student_type_name = ""
                }
              })
            },
            getPersonType: function() {
              var t = this;
              r.showActionSheet({
                itemList: this.personList.map((function(t) {
                  return t.name
                })),
                success: function(e) {
                  t.form.person_type = t.personList[e.tapIndex].id, t.form.person_type_name = t.personList[e.tapIndex].name, 1 != t.form.person_type && (t.form.student_type = "", t.form.student_type_name = "")
                },
                fail: function(e) {
                  t.form.person_type = "", t.form.person_type_name = "", t.form.student_type = "", t.form.student_type_name = ""
                }
              })
            },
            rshyAction: function() {
              this.checked ? this.isRshy || !this.form.cycling_order_face_recognition || this.user.face_recognition.real_name || this.user.face_recognition.identity_number ? this.submit() : this.rshyShow = !0 : t.showToast({
                title: "请先阅读并同意服务协议",
                icon: "none"
              })
            },
            rshy: function() {
              var t = this;
              r.startFacialRecognitionVerify({
                name: this.rshyInfo.real_name,
                idCardNumber: this.rshyInfo.identity_number,
                success: function(e) {
                  t.isRshy = !0, t.rshyShow = !1, t.submit()
                },
                fail: function(e) {
                  var n = e.errCode,
                    o = e.errMsg;
                  n ? r.showToast({
                    title: o.replace(/startFacialRecognitionVerify:fail /, ""),
                    icon: "none"
                  }) : (t.isRshy = !0, t.rshyShow = !1, t.submit())
                }
              })
            },
            submit: function() {
              var e = this;
              return (0, s.default)(a.default.mark((function n() {
                var o;
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return o = function() {
                        return new Promise((function(t, e) {
                          r.requestSubscribeMessage({
                            tmplIds: ["MTHZbeTqz_ryLt3rV2lFWv5ne_3T6s8N-SI45XCqvT8"],
                            complete: function() {
                              var e = (0, s.default)(a.default.mark((function e(n) {
                                return a.default.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                    case 0:
                                      console.log(n, 123), t();
                                    case 2:
                                    case "end":
                                      return e.stop()
                                  }
                                }), e)
                              })));
                              return function(t) {
                                return e.apply(this, arguments)
                              }
                            }()
                          })
                        }))
                      }, t.showLoading({
                        title: "提交中",
                        mask: !0
                      }), n.next = 4, o();
                    case 4:
                      e.qiniuUpload().then((function(n) {
                        e.form.cert_photo = n, e.$http.post("certification", f(f({}, e.form), {}, {
                          face_recog_identity_number: e.user.face_recognition.real_name ? "" : e.rshyInfo.identity_number,
                          face_recog_real_name: e.user.face_recognition.identity_number ? "" : e.rshyInfo.real_name
                        })).then((function(n) {
                          var r = n.status_code,
                            o = n.message;
                          t.hideLoading(), 200 == r ? (t.showToast({
                            title: "提交成功，请耐心等待审核结果",
                            icon: "none"
                          }), setTimeout((function() {
                            e.go("/pages/home/index?from=cert1", "reLaunch")
                          }), 1500)) : t.showToast({
                            title: o,
                            icon: "none"
                          })
                        }))
                      }));
                    case 5:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            getByTime: function(t) {
              var e = t.type,
                n = t.detail;
              "confirm" == e && (this.byShow = !1), this.form.graduate_time = n.value.text
            },
            getValue: function(t, e) {
              var n = t.detail;
              this.form[e] = n.value
            },
            isTrue: function(t) {
              var e = t.detail;
              this.checked = e
            },
            getType: function(t) {
              var e = t.type,
                n = t.detail;
              "confirm" == e && (this.typeListShow = !1), this.type = n.value.type, n.value.value != this.form.cert_type && (this.form.card_no = "", this.form.other = ""), this.form.cert_type = n.value.value, this.form.type_text = n.value.text
            },
            getUploadToken: function() {
              var t = this;
              return (0, s.default)(a.default.mark((function e() {
                var n;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, t.$http.get("qiniu/uploadtoken");
                    case 2:
                      void 0 !== (n = e.sent).data && void 0 !== n.data.token && (t.upload_token = n.data.token);
                    case 4:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            chooseImage: function() {
              var t = this;
              1 != this.form.status && 3 != this.form.status && (u.default.inSystemPage = !0, r.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album", "camera"],
                success: function() {
                  var e = (0, s.default)(a.default.mark((function e(n) {
                    return a.default.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          t.localtionImg = n.tempFilePaths;
                        case 1:
                        case "end":
                          return e.stop()
                      }
                    }), e)
                  })));
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                }()
              }))
            },
            qiniuUpload: function() {
              var t = this;
              return new Promise((function(e, n) {
                if (!t.localtionImg) return e("");
                t.$qiniuUploader.upload(t.localtionImg[0], (function(t) {
                  e(t.image.key)
                }), (function() {
                  n()
                }), {
                  region: "ECN",
                  uptoken: t.upload_token
                })
              }))
            },
            go: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "navigateTo";
              t[n]({
                url: e
              })
            },
            getLocation: function() {
              return new Promise((function(t, e) {
                r.getLocation({
                  type: "gcj02",
                  success: function(e) {
                    t(e)
                  },
                  fail: function() {
                    t({
                      latitude: 0,
                      longitude: 0
                    })
                  }
                })
              }))
            },
            getAtoperationAreas: function() {
              var t = this;
              return (0, s.default)(a.default.mark((function e() {
                var n, r, o;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, t.getLocation();
                    case 2:
                      n = e.sent, r = n.latitude, o = n.longitude, t.$http.get("atoperationAreas", {
                        latitude: r,
                        longitude: o
                      }).then((function(e) {
                        var n = e.status_code,
                          r = e.data;
                        200 == n ? t.setCurrentAreas(r) : t.setCurrentAreas(t.form)
                      }));
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            setCurrentAreas: function(t) {
              112 == t.id || 59 == t.id || 97 == t.id ? this.typeList = [{
                type: "other",
                text: "工号/学号/一卡通/其他",
                value: 2
              }] : this.typeList = [{
                type: "card_no",
                text: "身份证号",
                value: 1
              }, {
                type: "other",
                text: "工号/学号/一卡通/其他",
                value: 2
              }], this.form = f(f(f({}, this.form), t), {
                area_id: t.id,
                type_text: 2 == t.area_type ? this.typeList[0].text : "请选择证件号类型",
                cert_type: 2 == t.area_type ? 1 : "",
                is_upload_cert_photo: t.is_upload_cert_photo
              }), this.type = 2 == t.area_type ? this.typeList[0].type : ""
            },
            getCert: function() {
              var t = this;
              this.$http.get("cert?type=1").then((function(e) {
                var n = e.status_code,
                  r = e.data;
                !n || 1 != r.status && 3 != r.status ? t.getAtoperationAreas() : (t.localtionImg = r.cert_photo_url, t.form = f(f(f({}, t.form), r), {
                  name: r.school_name,
                  area_id: r.school_id,
                  area_type: r.area_type,
                  cert_type: r.cert_type,
                  type_text: t.typeList[r.cert_type - 1].text,
                  real_name: r.user_name,
                  card_no: r.identity_number,
                  other: r.student_id
                }), t.type = t.typeList[r.cert_type - 1].type, t.isEdit = !0)
              }))
            }
          }
        };
        e.default = d
      }).call(this, n("df3c").default, n("3223").default)
    },
    "78cb": function(t, e, n) {
      var r = n("cf7b");
      n.n(r).a
    },
    "9d68": function(t, e, n) {
      n.d(e, "b", (function() {
        return r
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {}));
      var r = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.rshyInfo.real_name.length >= 2 && t.rshyInfo.identity_number.length >= 18);
          t._isMounted || (t.e0 = function(e) {
            t.byShow = !0
          }, t.e1 = function(e) {
            t.typeListShow = !0
          }, t.e2 = function(e) {
            t.typeListShow = !1
          }, t.e3 = function(e) {
            t.typeListShow = !1
          }, t.e4 = function(e) {
            t.byShow = !1
          }, t.e5 = function(e) {
            t.byShow = !1
          }, t.e6 = function(e) {
            e.stopPropagation(), t.rshyShow = !1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e
            }
          })
        },
        o = []
    },
    cd29: function(t, e, n) {
      var r = n("2173");
      n.n(r).a
    },
    cf7b: function(t, e, n) {},
    fd7c: function(t, e, n) {
      (function(t, e) {
        var r = n("47a9");
        n("671b"), r(n("3240"));
        var o = r(n("1c03"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["fd7c", "common/runtime", "common/vendor"]
  ]
]);