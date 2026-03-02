(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/gjline/index"], {
    "0b80": function(t, e, i) {
      var n = i("176a");
      i.n(n).a
    },
    "176a": function(t, e, i) {},
    "231b": function(t, e, i) {
      i.d(e, "b", (function() {
        return n
      })), i.d(e, "c", (function() {
        return o
      })), i.d(e, "a", (function() {}));
      var n = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.carList.length),
            i = t.zdList.length,
            n = t.zdList.length,
            o = n ? t.zdList.slice(-1) : null;
          t._isMounted || (t.e0 = function(e) {
            t.showMinibusschedule = !0
          }, t.e1 = function(e) {
            t.showMinibusschedule = !1
          }, t.e2 = function(e) {
            t.ccShow = !0
          }, t.e3 = function(e) {
            t.pjShow = !0
          }, t.e4 = function(e) {
            t.ccShow = !1
          }, t.e5 = function(e) {
            t.btnIndex = 0
          }, t.e6 = function(e) {
            t.btnIndex = 1
          }, t.e7 = function(e) {
            t.zdShow = !0
          }, t.e8 = function(e) {
            t.ffShow = !0
          }, t.e9 = function(e) {
            t.pjShow = !1
          }, t.e10 = function(e) {
            t.pjbthIndex = 0
          }, t.e11 = function(e) {
            t.pjbthIndex = 1
          }, t.e12 = function(e) {
            t.clShow = !0
          }, t.e13 = function(e) {
            t.zdShow = !1
          }, t.e14 = function(e) {
            t.zdShow = !1
          }, t.e15 = function(e) {
            t.ffShow = !1
          }, t.e16 = function(e) {
            t.ffShow = !1
          }, t.e17 = function(e) {
            t.clShow = !1
          }, t.e18 = function(e) {
            t.clShow = !1
          }, t.e19 = function(e) {
            t.pjTimeShow = !1
          }, t.e20 = function(e) {
            t.pjTimeShow = !1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: i,
              g2: n,
              g3: o
            }
          })
        },
        o = []
    },
    "9aea": function(t, e, i) {
      (function(t) {
        var n = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = n(i("7eb4")),
          a = n(i("af34")),
          s = n(i("7ca3")),
          c = n(i("ee10"));

        function u(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, n)
          }
          return i
        }

        function r(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? u(Object(i), !0).forEach((function(e) {
              (0, s.default)(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }
        var l = {
          components: {
            ccList: function() {
              i.e("pages/gjline/components/ccList").then(function() {
                return resolve(i("b54b"))
              }.bind(null, i)).catch(i.oe)
            },
            pjList: function() {
              i.e("pages/gjline/components/pjList").then(function() {
                return resolve(i("d98b"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              gjLineList: [],
              lineDetail: {},
              mapLine: [],
              longitude: 0,
              latitude: 0,
              carList: [],
              markers: [],
              zdList: [],
              lookMapLineId: "",
              ccShow: !1,
              btnIndex: 0,
              pjbthIndex: 0,
              minibusschedule: {
                final_vehicle_time: "--:--",
                first_vehicle_time: "--:--",
                pictures_url: []
              },
              showMinibusschedule: !1,
              ccForm: {
                start_site_id: "",
                start_site_text: "",
                end_site_id: "",
                end_site_text: ""
              },
              zdShow: !1,
              ffShow: !1,
              pjShow: !1,
              clShow: !1,
              pjTimeShow: !1,
              clList: [],
              pjForm: {
                minbus_id: "",
                minbus_name: "",
                by_minibus_time: ""
              },
              pjTimeShowDate: (new Date).getTime(),
              imgFlag: (new Date).getTime(),
              maxDate: (new Date).getTime()
            }
          },
          onLoad: function() {
            this.getGjLine(), this.getMinibusschedule(), this.getClShow(), this.map = t.createMapContext("map"), this.imgFlag = (new Date).getTime()
          },
          onUnload: function() {
            clearTimeout(this.timer)
          },
          methods: {
            openPjTimeShow: function() {
              this.pjTimeShow = !0, this.maxDate = (new Date).getTime(), this.pjTimeShowDate = (new Date).getTime()
            },
            goPj: function() {
              var e = this;
              this.pjShow = !1, t.navigateTo({
                url: "/pages/gjpj/index?minbus_id=" + this.pjForm.minbus_id + "&by_minibus_time=" + this.pjForm.by_minibus_time,
                success: function() {
                  e.pjForm.minbus_id = "", e.pjForm.minbus_name = "", e.pjForm.by_minibus_time = ""
                }
              })
            },
            pjTimeShowConfirm: function(t) {
              var e = t.detail;
              this.pjForm.by_minibus_time = this.formatDateTime(new Date(e)).replace(/\d{2}$/, "00"), this.pjTimeShow = !1
            },
            scan: function() {
              var e = this;
              t.showLoading({
                title: "加载中"
              }), t.scanCode({
                onlyFromCamera: !1,
                scanType: "qrCode",
                success: function() {
                  var i = (0, c.default)(o.default.mark((function i(n) {
                    var a, s;
                    return o.default.wrap((function(i) {
                      for (;;) switch (i.prev = i.next) {
                        case 0:
                          t.hideLoading(), (a = e.getQueryVariable(n.result, "minibusrandnum")) ? (s = e.clList.filter((function(t) {
                            return t.number == a
                          }))[0]) ? (e.pjForm.minbus_id = s.id, e.pjForm.minbus_name = s.name) : t.showToast({
                            title: "该车辆不属于账号所属学校",
                            icon: "none"
                          }) : t.showToast({
                            title: "未识别的二维码",
                            icon: "none"
                          });
                        case 3:
                        case "end":
                          return i.stop()
                      }
                    }), i)
                  })));
                  return function(t) {
                    return i.apply(this, arguments)
                  }
                }(),
                fail: function() {
                  t.hideLoading()
                }
              })
            },
            clConfig: function(t) {
              var e = t.detail;
              this.pjForm.minbus_id = e.value.id, this.pjForm.minbus_name = e.value.name, this.clShow = !1
            },
            getClShow: function() {
              var t = this;
              this.$http.get("getminibus").then((function(e) {
                var i = e.data;
                t.clList = i
              }))
            },
            getMinibusschedule: function() {
              var t = this;
              this.$http.get("minibusschedule").then((function(e) {
                var i = e.data;
                t.minibusschedule = i.minibus_schedule
              }))
            },
            cc: function() {
              var e = this;
              this.$http.post("urgeMinibus", r({
                route_id: this.lineDetail.id
              }, this.ccForm)).then((function(i) {
                200 == i.status_code ? (t.showToast({
                  title: "催车成功",
                  icon: "none"
                }), e.ccShow = !1) : t.showToast({
                  title: i.message,
                  icon: "none"
                })
              }))
            },
            ffConfirm: function(t) {
              var e = t.detail;
              this.ccForm.end_site_id = e.value.id, this.ccForm.end_site_text = e.value.site_name, this.ffShow = !1
            },
            zdConfirm: function(t) {
              var e = t.detail;
              this.ccForm.start_site_id = e.value.id, this.ccForm.start_site_text = e.value.site_name, this.zdShow = !1
            },
            reset: function() {
              this.lookMapLine()
            },
            getGjLine: function() {
              var t = this;
              this.$http.get("getRoutes").then((function(e) {
                200 == e.status_code && (t.gjLineList = e.data.routes, t.gjLineList.length && (t.lineDetail = t.gjLineList[0], t.getMapLine()))
              }))
            },
            getLineDetail: function(t) {
              this.lineDetail.id != t.id && (this.lineDetail = t, this.markers = [], this.getMapLine())
            },
            updated: function() {
              this.lookMapLineId != this.lineDetail.id && (this.lookMapLineId = this.lineDetail.id, this.lookMapLine())
            },
            lookMapLine: function() {
              var e = this;
              t.createSelectorQuery().select("#bottomLineWrap").boundingClientRect().exec((function(t) {
                e.map.includePoints({
                  points: e.lineDetail.detail,
                  padding: [60, 20, t[0].height + 20, 20]
                })
              }))
            },
            getMapLine: function() {
              this.longitude = this.lineDetail.longitude, this.latitude = this.lineDetail.latitude, this.mapLine = [{
                points: this.lineDetail.detail,
                color: "#ff0000",
                width: 4
              }], this.zdList = this.lineDetail.detail.filter((function(t) {
                return t.is_site
              })), this.ccForm = {
                start_site_id: "",
                start_site_text: "",
                end_site_id: "",
                end_site_text: ""
              }, this.getCarList()
            },
            getCarList: function() {
              var t = this;
              clearTimeout(this.timer), this.$http.get("getRouteMinibuses?route_id=" + this.lineDetail.id).then((function(e) {
                if (200 == e.status_code) {
                  t.carList = e.data.route_minibuses;
                  var i = t.carList.map((function(e) {
                    return {
                      id: e.id + (new Date).getTime(),
                      latitude: e.last_latitude,
                      longitude: e.last_longitude,
                      iconPath: "https://img2.7mate.cn/gjlx_4_1_1.png?" + t.imgFlag,
                      width: 40,
                      height: 40,
                      zIndex: 2,
                      type: 2,
                      rotate: e.bus_head_angle,
                      anchor: {
                        x: .5,
                        y: .5
                      }
                    }
                  }));
                  t.markers = [].concat((0, a.default)(t.lineDetail.detail.filter((function(t) {
                    return t.is_site
                  })).map((function(t) {
                    return r(r({}, t), {}, {
                      iconPath: "https://img2.7mate.cn/gjlx_2_s.png",
                      width: 30,
                      height: 30,
                      zIndex: 1,
                      type: 1,
                      callout: {
                        content: t.site_name,
                        display: "BYCLICK",
                        padding: 6
                      }
                    })
                  }))), (0, a.default)(i)), t.timer = setTimeout((function() {
                    t.getCarList()
                  }), e.data.rotate_time ? 1e3 * e.data.rotate_time : 5e3)
                }
              }))
            },
            formatDateTime: function(t) {
              var e = t.getFullYear(),
                i = t.getMonth() + 1;
              i = i < 10 ? "0" + i : i;
              var n = t.getDate();
              n = n < 10 ? "0" + n : n;
              var o = t.getHours();
              o = o < 10 ? "0" + o : o;
              var a = t.getMinutes();
              a = a < 10 ? "0" + a : a;
              var s = t.getSeconds();
              return e + "-" + i + "-" + n + " " + o + ":" + a + ":" + (s = s < 10 ? "0" + s : s)
            }
          }
        };
        e.default = l
      }).call(this, i("3223").default)
    },
    a3fc: function(t, e, i) {
      i.r(e);
      var n = i("9aea"),
        o = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(a);
      e.default = o.a
    },
    b41f: function(t, e, i) {
      (function(t, e) {
        var n = i("47a9");
        i("671b"), n(i("3240"));
        var o = n(i("e3af"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(o.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    e3af: function(t, e, i) {
      i.r(e);
      var n = i("231b"),
        o = i("a3fc");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      i("0b80");
      var s = i("828b"),
        c = Object(s.a)(o.default, n.b, n.c, !1, null, "65e93a21", null, !1, n.a, void 0);
      e.default = c.exports
    }
  },
  [
    ["b41f", "common/runtime", "common/vendor"]
  ]
]);