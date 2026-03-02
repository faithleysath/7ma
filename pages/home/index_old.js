(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/home/index_old"], {
    1060: function(t, e, n) {
      var r = n("a10d");
      n.n(r).a
    },
    "10dd": function(t, e, n) {},
    "44d3": function(t, e, n) {
      var r = n("10dd");
      n.n(r).a
    },
    "823a": function(t, e, n) {
      n.r(e);
      var r = n("eb3f"),
        o = n.n(r);
      for (var a in r)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(a);
      e.default = o.a
    },
    a10d: function(t, e, n) {},
    ac97: function(t, e, n) {
      (function(t, e) {
        var r = n("47a9");
        n("671b"), r(n("3240"));
        var o = r(n("c4d3"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    bf99: function(t, e, n) {
      n.d(e, "b", (function() {
        return r
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {}));
      var r = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.screen_height > 0 ? t.show_popup && "{}" !== JSON.stringify(t.popup) : null);
          t._isMounted || (t.e0 = function(e) {
            t.showInput = !1
          }, t.e1 = function(e) {
            e.stopPropagation(), t.showCarModel = !1
          }, t.e2 = function(e) {
            e.stopPropagation(), t.ls_show = !1
          }, t.e3 = function(e) {
            e.stopPropagation(), t.ls_show = !1
          }, t.e4 = function(e) {
            e.stopPropagation(), t.ls_show = !1
          }, t.e5 = function(e) {
            e.stopPropagation(), t.rc_show = !1
          }, t.e6 = function(e) {
            e.stopPropagation(), t.rc_show = !1
          }, t.e7 = function(e) {
            e.stopPropagation(), t.rc_show = !1
          }, t.e8 = function(e) {
            e.stopPropagation(), t.show_service_modal = !1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e
            }
          })
        },
        o = []
    },
    c4d3: function(t, e, n) {
      n.r(e);
      var r = n("bf99"),
        o = n("823a");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("44d3"), n("1060");
      var c = n("828b"),
        i = Object(c.a)(o.default, r.b, r.c, !1, null, "4d344215", null, !1, r.a, void 0);
      e.default = i.exports
    },
    eb3f: function(t, e, n) {
      (function(t, r) {
        var o = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = o(n("7eb4")),
          c = o(n("3b2d")),
          i = o(n("7ca3")),
          s = o(n("ee10")),
          u = n("d833"),
          l = (n("8084"), o(n("865e")));

        function d(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }

        function _(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(Object(n), !0).forEach((function(e) {
              (0, i.default)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        var p = null,
          h = null,
          f = !1,
          g = null,
          k = {
            name: "home_index",
            data: function() {
              return {
                user: {},
                current_tabbar: "home",
                tab: 0,
                longitude: "119.946973",
                latitude: "31.772752",
                scale: 17,
                markers: [],
                myMarkers: [],
                polygons: [],
                banners: [],
                dot_current: 0,
                car: {},
                order: {},
                showCarModel: !1,
                show_popup_top: !1,
                show_loading: !1,
                show_service_modal: !1,
                user_car_authority: void 0,
                nearby_car: void 0,
                popup: {},
                show_popup: !1,
                show_overlay: !1,
                show_overlay2: !1,
                is_iphone_x: !1,
                cycling: void 0,
                parking_ranges: [],
                parking: "",
                polyline: [],
                modal_icon: "",
                modal_icon_class: "",
                modal_content: "",
                modal_btn_title: "",
                modal_show: !1,
                interval: void 0,
                countdown_sec: 6e4,
                loading: !1,
                BLEreceivedData: void 0,
                BLEtradeRecord: void 0,
                is_phone_init: !1,
                showInput: !1,
                car_number: "",
                screen_height: 0,
                action_loading: !1,
                dtz_longitude: 0,
                dtz_latitude: 0,
                show_temp: !1,
                banner_is_init: !1,
                user_car_authority_is_init: !1,
                can_create_order: !0,
                command: "",
                action_car: {
                  number: "",
                  carmodel_id: "",
                  lock_id: "",
                  mac: "",
                  lock_no: "",
                  order_id: "",
                  order_sn: "",
                  vendor_lock_id: "",
                  lock_password: "",
                  lock_secretkey: ""
                },
                is_unLockCallback: !1,
                beacon: "",
                is_in_parking: !1,
                is_unlock: !1,
                is_lock: !1,
                is_back_car: !1,
                check_ebike_is_unlock_count: 0,
                check_ebike_is_lock_count: 0,
                back_longitude: "",
                back_latitude: "",
                unlock_finish: 0,
                networkStatus: void 0,
                bottom_safearea_height: 0,
                notice_modal_show: !1,
                notice_modal_content: "",
                hagongda_show_overlay: !1,
                backCarErrorInfo: {
                  show: !1,
                  image_url: "",
                  type: 0
                },
                toolsInfo: {
                  show: !1,
                  image_url: "",
                  type: 0
                },
                is_mandatory_return: !1,
                stopEvent: !1,
                LOCATIONINFOISREADY: !1,
                ls_show: !1,
                rc_show: !1,
                adBannerShow: !1,
                yjsTime: 0,
                yjsTimeout: null,
                topHeight: 0,
                isTemporaryLockModal: !1
              }
            },
            methods: {
              goMiniWc: function(e, n) {
                t.navigateToMiniProgram({
                  appId: e,
                  path: n,
                  envVersion: "release",
                  success: function(t) {
                    console.log("打开成功", t)
                  },
                  fail: function(t) {
                    console.log(t)
                  }
                })
              },
              goOtherWx: function(e) {
                t.navigateToMiniProgram({
                  appId: e.appid,
                  path: e.action_content,
                  envVersion: "release",
                  success: function(t) {
                    console.log("打开成功", t)
                  },
                  fail: function(t) {
                    console.log(t)
                  }
                })
              },
              carInfoEvent: function(t, e) {
                "buy" == e ? (this.showCarModel = !1, this.go("/pages/card/index?tab=" + (t.carmodel_id - 1))) : this.haveFree ? this.go("/pages/card/detail?id=" + t.user_card_id) : this.haveFree || this.go("/pages/rule/index?number=" + t.number)
              },
              backCarErrorModal: function(e, n) {
                this.backCarErrorInfo = {
                  image_url: ["https://img2.7mate.cn/back_car_a.png", "https://img2.7mate.cn/back_car_b.png", "https://img2.7mate.cn/back_car_c.png"][n],
                  type: n,
                  show: e
                }, t.hideLoading()
              },
              toolsModal: function(e, n) {
                this.toolsInfo = {
                  image_url: ["https://img2.7mate.cn/toolsInfo00.png", "https://img2.7mate.cn/toolsInfo11.png", "https://img2.7mate.cn/toolsInfo00.png"][n],
                  type: n,
                  show: e
                }, t.hideLoading()
              },
              action: function(t) {
                "applet" == t.action_type ? this.goOtherWx(t) : this.gotoRoute(this, t)
              },
              onInput: function(t) {
                console.log("onInput", t), this.car_number = t.detail
              },
              onBlur: function(t) {
                console.log("onBlur", t), this.car_number = t.detail.value
              },
              showPopup: function(t) {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  var r, o;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        e.popup = {}, e.close(), n.t0 = t, n.next = "home" === n.t0 ? 5 : "p" === n.t0 ? 10 : "type5_unlock" === n.t0 ? 12 : "type5_lock" === n.t0 ? 14 : "back_mode_1" === n.t0 ? 16 : "back_mode_2" === n.t0 ? 18 : "hagongdaModal" === n.t0 ? 20 : "zzs" === n.t0 ? 22 : 24;
                        break;
                      case 5:
                        return n.next = 7, e.$http.get("banner/2");
                      case 7:
                        return (r = n.sent).data && void 0 !== r.data.banners && r.data.banners.length > 0 && (e.$set(e.popup, "image_url", r.data.banners[0].image_url), e.$set(e.popup, "h5_title", r.data.banners[0].h5_title), e.$set(e.popup, "action_type", r.data.banners[0].action_type), e.$set(e.popup, "action_content", r.data.banners[0].action_content), e.$set(e.popup, "appid", r.data.banners[0].appid)), n.abrupt("break", 24);
                      case 10:
                        return e.$set(e.popup, "image_url", "https://img2.7mate.cn/p.gif"), n.abrupt("break", 24);
                      case 12:
                        return e.$set(e.popup, "image_url", "https://img2.7mate.cn/type5_unlock_1.png"), n.abrupt("break", 24);
                      case 14:
                        return e.$set(e.popup, "image_url", "https://img2.7mate.cn/type5_lock.png"), n.abrupt("break", 24);
                      case 16:
                        return e.$set(e.popup, "image_url", "https://img2.7mate.cn/back_mode_1.png"), n.abrupt("break", 24);
                      case 18:
                        return e.$set(e.popup, "image_url", "https://img2.7mate.cn/back_mode_2.png"), n.abrupt("break", 24);
                      case 20:
                        return e.$set(e.popup, "image_url", "https://img2.7mate.cn/hagongda2.png"), n.abrupt("break", 24);
                      case 22:
                        return e.$set(e.popup, "image_url", "https://img2.7mate.cn/zzs.png"), n.abrupt("break", 24);
                      case 24:
                        "{}" !== JSON.stringify(e.popup) && (o = e, "home" === t ? setTimeout((function() {
                          void 0 !== o.popup.type && 2 === o.popup.type ? o.show_overlay2 = !0 : o.show_overlay = !0, o.show_popup = !0
                        }), 1e3) : (void 0 !== o.popup.type && 2 === o.popup.type ? o.show_overlay2 = !0 : o.show_overlay = !0, o.show_popup = !0));
                      case 25:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              closePopup: function() {
                this.show_overlay = !1, this.show_overlay2 = !1, this.show_popup = !1, this.popup = {}
              },
              mapTap: function() {
                this.close()
              },
              regionChangeEnd: function(e) {
                if ("drag" === e.causedBy) {
                  this.showLoading({
                    title: "刷新中",
                    mask: !0
                  });
                  var n = this;
                  this.mapCtx = t.createMapContext("map"), this.mapCtx.getCenterLocation({
                    type: "gcj02",
                    success: function() {
                      var t = (0, s.default)(a.default.mark((function t(e) {
                        return a.default.wrap((function(t) {
                          for (;;) switch (t.prev = t.next) {
                            case 0:
                              return n.dtz_longitude = e.longitude, n.dtz_latitude = e.latitude, n.markers.forEach((function(t) {
                                "https://img2.7mate.cn/home_p2.png" === t.iconPath && (t.longitude = e.longitude, t.latitude = e.latitude)
                              })), t.next = 7, n.setParkingRanges(e.longitude, e.latitude);
                            case 7:
                              n.hideLoading();
                            case 8:
                            case "end":
                              return t.stop()
                          }
                        }), t)
                      })));
                      return function(e) {
                        return t.apply(this, arguments)
                      }
                    }(),
                    fail: function() {
                      n.action_loading = !1, n.hideLoading()
                    }
                  })
                }
              },
              close: function() {
                this.show_service_modal = !1, this.parking = "", this.polyline = []
              },
              markerTap: function(t) {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  var r;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!((r = t.markerId) >= 9e8)) {
                          n.next = 3;
                          break
                        }
                        return n.abrupt("return");
                      case 3:
                        if (!(r > 0)) {
                          n.next = 6;
                          break
                        }
                        return n.next = 6, e.getParking(r);
                      case 6:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getParking: function(t) {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.abrupt("return");
                      case 4:
                        e.getPosition().then(function() {
                          var n = (0, s.default)(a.default.mark((function n(r) {
                            var o, c, i, s, u, l, d;
                            return a.default.wrap((function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  return e.parking = "", n.next = 3, e.$http.get("parking/" + t + "/detail?longitude=" + r.longitude + "&latitude=" + r.latitude);
                                case 3:
                                  return (o = n.sent).data && (e.parking = o.data), n.next = 7, e.$http.get("bicycling?origin=" + r.longitude + "," + r.latitude + "&destination=" + e.parking.longitude + "," + e.parking.latitude);
                                case 7:
                                  if (void 0 !== (c = n.sent).data && void 0 !== c.data.paths && c.data.paths.length > 0 && (i = c.data.paths[0].steps).length > 0) {
                                    for (s = [], u = 0; u < i.length; u++)
                                      for (l = i[u].polyline.split(";"), d = 0; d < l.length; d++) s.push({
                                        longitude: parseFloat(l[d].split(",")[0]),
                                        latitude: parseFloat(l[d].split(",")[1])
                                      });
                                    e.polyline = [{
                                      points: s,
                                      color: "#00A8FF",
                                      width: 6
                                    }]
                                  }
                                case 9:
                                case "end":
                                  return n.stop()
                              }
                            }), n)
                          })));
                          return function(t) {
                            return n.apply(this, arguments)
                          }
                        }());
                      case 5:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getCurLocation: function() {
                this.close();
                var t = this;
                this.getPosition().then((function(e) {
                  t.longitude = 0, t.latitude = 0, t.longitude = e.longitude, t.latitude = e.latitude, t.dtz_longitude = e.longitude, t.dtz_latitude = e.latitude
                }))
              },
              delP2: function() {
                var t = this;
                this.markers.forEach((function(e, n) {
                  "https://img2.7mate.cn/home_p2.png" === e.iconPath && t.markers.splice(n, 1)
                }))
              },
              setParkingRanges: function(t, e) {
                var n = this;
                return (0, s.default)(a.default.mark((function r() {
                  var o, c, i, s;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return o = [], c = [], n.markers.forEach((function(t) {
                          "https://img2.7mate.cn/home_p2.png" === t.iconPath && (c = [t])
                        })), r.next = 5, n.$http.get("parking_ranges?longitude=" + t + "&latitude=" + e);
                      case 5:
                        return i = r.sent, r.next = 8, n.$http.get("nearOperationArea?longitude=" + t + "&latitude=" + e);
                      case 8:
                        s = r.sent, void 0 !== i.data && i.data.length > 0 && (n.parking_ranges = i.data, i.data.forEach((function(t) {
                          var e = void 0 === t.parking.state || 1 == t.parking.state;
                          c.push({
                            id: e ? t.parking.id : "stop",
                            iconPath: e ? "https://img2.7mate.cn/home_p3_1.png" : "https://img2.7mate.cn/home_202306191412.png",
                            width: 55,
                            height: 55,
                            longitude: t.parking.longitude,
                            latitude: t.parking.latitude,
                            anchor: {
                              x: .5,
                              y: 1
                            },
                            zIndex: e ? 1 : 2
                          }), t.ranges.length > 0 && o.push({
                            points: t.ranges,
                            strokeColor: e ? "#94a3ff" : "#F57575",
                            fillColor: e ? "#CDE8FF88" : "#FFB4B488"
                          })
                        }))), void 0 !== s.data && s.data.length > 0 && s.data.forEach((function(t) {
                          if (t.ranges.length > 0) {
                            o.push({
                              points: t.ranges,
                              strokeWidth: 4,
                              strokeColor: "#EA535999"
                            });
                            var e = JSON.parse(JSON.stringify(t.ranges));
                            e.sort((function(t, e) {
                              return e.latitude - t.latitude
                            })), c.push({
                              id: (new Date).getTime(),
                              iconPath: "https://img2.7mate.cn/home_yyq.png",
                              width: 180,
                              height: 40,
                              longitude: e[0].longitude,
                              latitude: e[0].latitude,
                              anchor: {
                                x: .5,
                                y: 1
                              }
                            })
                          }
                        })), n.polygons = o, n.markers = n.markers.filter((function(t) {
                          return t.isCarIcon || t.isMyCarIcon
                        })), n.markers = n.markers.concat(c);
                      case 14:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              getBanners: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.$http.get("banner/3");
                      case 2:
                        n = e.sent, t.banner_is_init = !0, n && void 0 !== n.data.banners && (t.banners = n.data.banners);
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              swiperChange: function(t) {
                this.dot_current = t.detail.current
              },
              refresh: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t.showLoading({
                            title: "刷新中",
                            mask: !0
                          }), !t.dtz_longitude || !t.dtz_latitude) {
                          e.next = 6;
                          break
                        }
                        return e.next = 4, t.setParkingRanges(t.dtz_longitude, t.dtz_latitude);
                      case 4:
                        e.next = 8;
                        break;
                      case 6:
                        n = t, t.getPosition().then(function() {
                          var t = (0, s.default)(a.default.mark((function t(e) {
                            return a.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n.longitude = 0, n.latitude = 0, n.longitude = e.longitude, n.latitude = e.latitude, t.next = 6, n.setParkingRanges(n.longitude, n.latitude);
                                case 6:
                                case "end":
                                  return t.stop()
                              }
                            }), t)
                          })));
                          return function(e) {
                            return t.apply(this, arguments)
                          }
                        }());
                      case 8:
                        return e.next = 10, t.getUserCarAuthority();
                      case 10:
                        t.getCarIcon(), t.hideLoading();
                      case 12:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              scan1: function() {
                var t = this;
                this.showLoading({
                  title: "加载中"
                }), this.car_number = "", this.openBluetoothAdapter(this).then((function() {
                  t.refresh_interval(), t.hideLoading(), t.showInput = !0
                }))
              },
              scan1Action: function() {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (e.car_number) {
                          n.next = 3;
                          break
                        }
                        return t.showToast({
                          title: "请输入车编号",
                          icon: "none"
                        }), n.abrupt("return");
                      case 3:
                        e.showLoading({
                          title: "加载中"
                        }), e.close(), e.openBluetoothAdapter().then((function() {
                          return e.check_is_login(!1)
                        })).then((function() {
                          return e.getUserCarAuthority(1)
                        })).then((0, s.default)(a.default.mark((function n() {
                          var r;
                          return a.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, e.getOrderAuthority(e.car_number, 2);
                              case 2:
                                if (n.sent) {
                                  n.next = 6;
                                  break
                                }
                                return e.showInput = !1, n.abrupt("return");
                              case 6:
                                return n.next = 8, e.$http.get("car/" + e.car_number);
                              case 8:
                                if (r = n.sent, "{}" === JSON.stringify(r.data)) {
                                  n.next = 14;
                                  break
                                }
                                e.car = r.data, console.log(e.car, 4234234234), n.next = 17;
                                break;
                              case 14:
                                if (void 0 === r.status_code || 200 === r.status_code) {
                                  n.next = 17;
                                  break
                                }
                                return t.showToast({
                                  title: r.message ? r.message : "请输入正确的车编号",
                                  icon: "none"
                                }), n.abrupt("return");
                              case 17:
                                e.hideLoading(), e.showInput = !1, e.showCarModel = !0, 5 != e.car.lock_id && 6 != e.car.lock_id || e.showPopup("type5_unlock"), e.loading = !1, e.isXha();
                              case 23:
                              case "end":
                                return n.stop()
                            }
                          }), n)
                        }))));
                      case 6:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              goMiniBus: function(e) {
                var n = this;
                console.log(e, "url");
                var o = this.getQueryVariable(e, "minibusrandnum");
                this.check_is_login(!1).then((function(e) {
                  n.$http.get("minibus/" + o).then((function(e) {
                    200 != e.status_code ? t.showToast({
                      title: e.message,
                      icon: "none"
                    }) : r.navigateTo({
                      url: "/pages/minibus/index?number=" + o
                    })
                  }))
                }))
              },
              scan: function(e, n) {
                var r = this;
                return (0, s.default)(a.default.mark((function o() {
                  var c;
                  return a.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        r.showLoading({
                          title: "加载中"
                        }), r.close(), c = null, r.openBluetoothAdapter(r).then((function() {
                          return e && n ? Promise.resolve({
                            result: e
                          }) : r.scanAction()
                        })).then(function() {
                          var t = (0, s.default)(a.default.mark((function t(e) {
                            return a.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  if (!(e.result.indexOf("minibusrandnum") >= 0)) {
                                    t.next = 3;
                                    break
                                  }
                                  return r.goMiniBus(e.result), t.abrupt("return", Promise.reject());
                                case 3:
                                  return c = e, t.abrupt("return", r.check_is_login(!1));
                                case 5:
                                case "end":
                                  return t.stop()
                              }
                            }), t)
                          })));
                          return function(e) {
                            return t.apply(this, arguments)
                          }
                        }()).then((function(t) {
                          return r.getUserCarAuthority(1)
                        })).then((0, s.default)(a.default.mark((function e() {
                          var n, o, i;
                          return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (r.hideLoading(), console.log(c.result, 123123), !(n = r.getQueryVariable(c.result, "code"))) {
                                  e.next = 6;
                                  break
                                }
                                return t.navigateTo({
                                  url: "/pages/seat/index?code=" + n
                                }), e.abrupt("return");
                              case 6:
                                return o = encodeURIComponent(c.result), e.next = 9, r.getOrderAuthority(o);
                              case 9:
                                if (e.sent) {
                                  e.next = 12;
                                  break
                                }
                                return e.abrupt("return");
                              case 12:
                                return e.next = 14, r.$http.get("car/" + o);
                              case 14:
                                if (i = e.sent, "{}" === JSON.stringify(i.data)) {
                                  e.next = 19;
                                  break
                                }
                                r.car = i.data, e.next = 22;
                                break;
                              case 19:
                                if (void 0 === i.status_code || 200 === i.status_code) {
                                  e.next = 22;
                                  break
                                }
                                return t.showToast({
                                  title: i.message,
                                  icon: "none"
                                }), e.abrupt("return");
                              case 22:
                                console.log(r.car, "车辆信息"), r.showCarModel = !0, 5 != r.car.lock_id && 6 != r.car.lock_id || r.showPopup("type5_unlock"), r.loading = !1, r.isXha();
                              case 27:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        }))));
                      case 4:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                })))()
              },
              isXha: function() {
                this.car.haida_xha_school_id.indexOf(String(this.car.school_id)) >= 0 && this.car.haida_laoshan_school_id.indexOf(String(this.user.school_id)) >= 0 ? this.ls_show = !0 : this.user.school_id > 0 && this.user.school_id != this.car.school_id && (this.rc_show = !0)
              },
              getOrderAuthority: function(e, n) {
                var o = this;
                return (0, s.default)(a.default.mark((function c() {
                  var i, s;
                  return a.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, o.getPosition();
                      case 2:
                        return i = a.sent, a.next = 5, o.$http.get("order/authority?car_number=" + e, {
                          longitude: i.longitude,
                          latitude: i.latitude
                        });
                      case 5:
                        if (200 != (s = a.sent).status_code) {
                          a.next = 33;
                          break
                        }
                        if (0 !== s.data.code) {
                          a.next = 11;
                          break
                        }
                        return a.abrupt("return", !0);
                      case 11:
                        if (3 !== s.data.code) {
                          a.next = 19;
                          break
                        }
                        return console.log("response", s), console.log("message", s.message), o.openNoticeModal(s.message), o.hideLoading(), a.abrupt("return", !1);
                      case 19:
                        if (!s.data.code) {
                          a.next = 28;
                          break
                        }
                        return o.show_overlay2 = !0, o.modal_content = s.message, o.modal_icon = "https://img2.7mate.cn/modal_icon_" + s.data.code + ".png", o.modal_show = !0, o.hideLoading(), a.abrupt("return", !1);
                      case 28:
                        return r.showModal({
                          title: "提示",
                          content: "未获取到相关信息",
                          showCancel: !1,
                          success: function(t) {}
                        }), o.hideLoading(), a.abrupt("return", !1);
                      case 31:
                        a.next = 35;
                        break;
                      case 33:
                        return 2 === n ? t.showToast({
                          title: "请输入正确的车编号",
                          icon: "none"
                        }) : t.showToast({
                          title: s.message,
                          icon: "none"
                        }), a.abrupt("return", !1);
                      case 35:
                      case "end":
                        return a.stop()
                    }
                  }), c)
                })))()
              },
              carCanUnlock: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.$http.get("car_can_unlock");
                      case 2:
                        if (void 0 === (n = e.sent).data || void 0 === n.data.unauthorized) {
                          e.next = 5;
                          break
                        }
                        return e.abrupt("return", n.data.unauthorized);
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              scanAction: function() {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  var r;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return r = e, n.abrupt("return", new Promise(function() {
                          var e = (0, s.default)(a.default.mark((function e(n, o) {
                            return a.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  t.scanCode({
                                    onlyFromCamera: !1,
                                    scanType: "qrCode",
                                    success: function() {
                                      var t = (0, s.default)(a.default.mark((function t(e) {
                                        return a.default.wrap((function(t) {
                                          for (;;) switch (t.prev = t.next) {
                                            case 0:
                                              n(e);
                                            case 1:
                                            case "end":
                                              return t.stop()
                                          }
                                        }), t)
                                      })));
                                      return function(e) {
                                        return t.apply(this, arguments)
                                      }
                                    }(),
                                    fail: function() {
                                      r.hideLoading(), o()
                                    }
                                  });
                                case 1:
                                case "end":
                                  return e.stop()
                              }
                            }), e)
                          })));
                          return function(t, n) {
                            return e.apply(this, arguments)
                          }
                        }()));
                      case 2:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getParkingRanges: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n = t, t.getPosition().then(function() {
                          var t = (0, s.default)(a.default.mark((function t(e) {
                            return a.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n.longitude = 0, n.latitude = 0, n.longitude = e.longitude, n.latitude = e.latitude, n.dtz_longitude = e.longitude, n.dtz_latitude = e.latitude, t.next = 8, n.setParkingRanges(e.longitude, e.latitude);
                                case 8:
                                  n.action_loading = !1;
                                case 9:
                                case "end":
                                  return t.stop()
                              }
                            }), t)
                          })));
                          return function(e) {
                            return t.apply(this, arguments)
                          }
                        }());
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              getUserCarAuthority: function(e) {
                var n = this;
                return (0, s.default)(a.default.mark((function r() {
                  var o, c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, n.$http.get("user/car_authority");
                      case 2:
                        if (o = r.sent, c = "", o.data && (n.user_car_authority = o.data, n.user_car_authority.order && n.user_car_authority.order.order_id ? (f = n.user_car_authority.unauthorized_code >= 7, 6 == n.user_car_authority.unauthorized_code && n.$http.get("car/" + n.user_car_authority.order.car_number + "/location").then((function(t) {
                            var e = Math.round(((new Date).getTime() - new Date(n.user_car_authority.order.car_start_time.replace(/-/g, "/")).getTime()) / 1e3);
                            !n.yjsTimeout && e < 8 && e > 0 && 14 == n.user_car_authority.order.lock_id ? (n.yjsTime = 8 - e, n.yjsTimeout = setInterval((function() {
                              n.yjsTime--, n.yjsTime <= 0 && (clearInterval(n.yjsTimeout), n.yjsTimeout = null)
                            }), 1e3)) : (e <= 0 || e >= 8) && (n.yjsTime = 0, clearInterval(n.yjsTimeout), n.yjsTimeout = null), n.markers = n.markers.filter((function(t) {
                              return !t.isMyCarIcon
                            })), n.markers = n.markers.concat({
                              id: "carIcon",
                              latitude: t.data.latitude,
                              longitude: t.data.longitude,
                              width: 160,
                              height: 80,
                              iconPath: "https://img2.7mate.cn/home_my_car_icon.png",
                              isMyCarIcon: !0,
                              zIndex: 1e3
                            })
                          })), 0 !== n.is_mandatory_return && 1 !== n.is_mandatory_return && n.$http.get("school/show/" + n.user_car_authority.order.car_school_id).then((function(e) {
                            200 == e.status_code ? n.is_mandatory_return = e.data.is_mandatory_return : t.showToast({
                              title: e.message,
                              icon: "none"
                            })
                          }))) : (f = !1, n.clearTemporaryLock(), n.markers = n.markers.filter((function(t) {
                            return !t.isMyCarIcon
                          }))), n.refresh_interval(), 0 === n.user_car_authority.notice_code || (1 === n.user_car_authority.notice_code ? c = "您还未登录" : 2 === n.user_car_authority.notice_code ? c = "您还未认证" : 3 === n.user_car_authority.notice_code ? c = "您处于认证中" : 4 === n.user_car_authority.notice_code ? c = "您认证未通过" : 5 === n.user_car_authority.notice_code ? c = "您还未充值或购买套餐卡" : 6 === n.user_car_authority.notice_code ? c = "您有进行中的行程" : 7 === n.user_car_authority.notice_code ? c = "您有待支付的行程" : 8 === n.user_car_authority.notice_code ? c = "您有待支付的调度费" : 9 === n.user_car_authority.notice_code && (c = "您有待支付的赔偿费"))), n.user_car_authority_is_init = !0, void 0 === e || "" === c || 2 != o.data.unauthorized_code) {
                          r.next = 11;
                          break
                        }
                        return t.navigateTo({
                          url: "/pages/cert/cert1"
                        }), r.abrupt("return", Promise.reject());
                      case 11:
                        if (void 0 === e || "" === c || 0 === o.data.unauthorized_code) {
                          r.next = 15;
                          break
                        }
                        return t.showToast({
                          title: c,
                          icon: "none"
                        }), console.log("user_car_authority!!!", n.user_car_authority), r.abrupt("return", new Promise(function() {
                          var t = (0, s.default)(a.default.mark((function t(e, n) {
                            return a.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  o.data && 0 === o.data.unauthorized_code ? e() : n();
                                case 1:
                                case "end":
                                  return t.stop()
                              }
                            }), t)
                          })));
                          return function(e, n) {
                            return t.apply(this, arguments)
                          }
                        }()));
                      case 15:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              gotoBackCarError: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t.check_is_login().then((0, s.default)(a.default.mark((function e() {
                          return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.getCurrentCycling();
                              case 2:
                                e.sent, void 0 !== t.cycling ? r.navigateTo({
                                  url: "/pages/feedBackList/feedBackList?car_number=" + t.cycling.car_number + "&carmodel_id=" + t.cycling.carmodel_id
                                }) : r.navigateTo({
                                  url: "/pages/feedBackList/feedBackList"
                                });
                              case 4:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        }))));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              contact_service: function() {
                var e = this;
                this.show_overlay = !1, this.check_is_login().then((0, s.default)(a.default.mark((function n() {
                  var o;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, e.getCurrentCycling();
                      case 2:
                        if (void 0 === (o = n.sent).status_code || 200 === o.status_code) {
                          n.next = 6;
                          break
                        }
                        return t.showToast({
                          title: o.message,
                          icon: "none"
                        }), n.abrupt("return");
                      case 6:
                        if (void 0 === e.cycling) {
                          n.next = 10;
                          break
                        }
                        r.navigateTo({
                          url: "/pages/service/backCarError?car_number=" + e.cycling.car_number + "&carmodel_id=" + e.cycling.carmodel_id
                        }), n.next = 13;
                        break;
                      case 10:
                        return t.showToast({
                          title: "当前无行程",
                          icon: "none"
                        }), n.next = 13, e.getUserCarAuthority();
                      case 13:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                }))))
              },
              close_show: function() {
                this.closePopup()
              },
              goTsyJy: function() {
                var t = this;
                this.check_is_login().then((function() {
                  t.go("/pages/complaintAndSuggests/complaintAndSuggests")
                }))
              },
              gotoBikeBad: function() {
                this.check_is_login().then((function() {
                  r.navigateTo({
                    url: "/pages/service/bikeBad"
                  })
                }))
              },
              gotoService: function() {
                r.navigateTo({
                  url: "/pages/service/index"
                })
              },
              noticeClick: function() {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (e.close(), void 0 === e.user_car_authority) {
                          n.next = 18;
                          break
                        }
                        n.t0 = e.user_car_authority.notice_code, n.next = 1 === n.t0 ? 5 : 2 === n.t0 ? 7 : 3 === n.t0 ? 9 : 4 === n.t0 ? 14 : 5 === n.t0 ? 16 : 18;
                        break;
                      case 5:
                        return r.redirectTo({
                          url: "/pages/auth/index"
                        }), n.abrupt("break", 18);
                      case 7:
                        return r.redirectTo({
                          url: "/pages/cert/cert1"
                        }), n.abrupt("break", 18);
                      case 9:
                        return e.showLoading({
                          title: "刷新中",
                          mask: !0
                        }), n.next = 12, e.getUserCarAuthority();
                      case 12:
                        return e.hideLoading(), n.abrupt("break", 18);
                      case 14:
                        return r.redirectTo({
                          url: "/pages/cert/cert1"
                        }), n.abrupt("break", 18);
                      case 16:
                        return t.switchTab({
                          url: "/pages/wallet/index"
                        }), n.abrupt("break", 18);
                      case 18:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getCurrentCycling: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.$http.get("order/cycling");
                      case 2:
                        return n = e.sent, "{}" !== JSON.stringify(n.data) ? t.cycling = n.data : t.cycling = void 0, e.abrupt("return", n);
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              gotoPayment: function() {
                var t = this.user_car_authority.order.order_id,
                  e = this.user_car_authority.order.order_amount;
                console.log(this.user_car_authority), 7 == this.user_car_authority.unauthorized_code ? r.navigateTo({
                  url: "/pages/payment/index?order_id=" + t + "&order_type=1&price=" + e + "&created_at=" + this.user_car_authority.order.created_at
                }) : 10 == this.user_car_authority.unauthorized_code ? r.navigateTo({
                  url: "/pages/payment/index?order_id=" + this.user_car_authority.order.id + "&order_type=2&price=" + this.user_car_authority.order.order_amount + "&card_type=" + this.user_car_authority.order.carmodel_id + "&created_at=" + this.user_car_authority.order.created_at + "&has_stock=1&card_code=" + this.user_car_authority.order.card_code
                }) : r.navigateTo({
                  url: "/pages/order/other?type=" + (8 == this.user_car_authority.unauthorized_code ? 1 : 2)
                })
              },
              modalClose: function() {
                this.modal_show = !1, this.show_overlay2 = !1
              },
              modalBtnClick: function() {
                this.modalClose(), this.scan()
              },
              countdown: function() {
                var t = this;
                this.interval = setInterval((function() {
                  t.getUserCarAuthority()
                }), this.countdown_sec)
              },
              temp_cancel: function() {
                this.show_temp = !1, this.show_overlay = !1
              },
              temp_confirm: function() {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  var r, o;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, e.getPosition();
                      case 2:
                        return r = n.sent, n.next = 5, e.logReport("A2");
                      case 5:
                        return e.show_temp = !1, e.show_overlay = !1, e.showLoading({
                          title: "请稍后",
                          mask: !0
                        }), n.next = 10, e.$http.post("order/temp_lock", {
                          longitude: r.longitude,
                          latitude: r.latitude,
                          status: 1
                        });
                      case 10:
                        if (200 !== (o = n.sent).status_code) {
                          n.next = 18;
                          break
                        }
                        return n.next = 14, e.getUserCarAuthority();
                      case 14:
                        e.setTemporaryLock(), e.hideLoading(), n.next = 21;
                        break;
                      case 18:
                        return n.next = 20, e.getUserCarAuthority();
                      case 20:
                        t.showToast({
                          title: o.message,
                          icon: "none"
                        });
                      case 21:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              refresh_interval: function() {
                this.user_car_authority && 6 === this.user_car_authority.unauthorized_code ? 1 === this.user_car_authority.order.temporary_lock ? this.countdown_sec = this.user_car_authority.order.temp_lock_refresh_interval : this.countdown_sec = this.user_car_authority.order.order_refresh_interval : this.user_car_authority && (this.countdown_sec = this.user_car_authority.refresh_interval), void 0 !== this.interval && (clearInterval(this.interval), this.interval = void 0), this.countdown()
              },
              show_service: function() {
                this.close(), this.show_service_modal = !0
              },
              logReport: function(t) {
                var e = arguments,
                  n = this;
                return (0, s.default)(a.default.mark((function r() {
                  var o, c, i;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return o = e.length > 1 && void 0 !== e[1] ? e[1] : "", r.prev = 1, c = p || {}, /===/.test(o) && (o += " " + (new Date).getTime()), r.next = 6, n.$http.post("log", _({
                          event: t,
                          content: o
                        }, c)).catch((function(t) {
                          n.$http.post("log", {
                            event: "BA3",
                            content: "===上报发生错误：" + t.message + "==="
                          })
                        }));
                      case 6:
                        i = r.sent, console.log("logReport: " + t, i, _({
                          event: t
                        }, c)), r.next = 13;
                        break;
                      case 10:
                        r.prev = 10, r.t0 = r.catch(1), n.$http.post("log", {
                          event: "BA3",
                          content: "===上报发生错误：" + r.t0 + "==="
                        });
                      case 13:
                      case "end":
                        return r.stop()
                    }
                  }), r, null, [
                    [1, 10]
                  ])
                })))()
              },
              check_is_in_parking: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new Promise(function() {
                          var e = (0, s.default)(a.default.mark((function e(n) {
                            return a.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  return e.abrupt("return", t.getPosition().then(function() {
                                    var e = (0, s.default)(a.default.mark((function e(r) {
                                      var o, c, i, u, d;
                                      return a.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return t.back_longitude = r.longitude, t.back_latitude = r.latitude, o = "", c = 0, 2 === t.action_car.carmodel_id || 12 === t.action_car.lock_id || 13 === t.action_car.lock_id ? (console.log("开始判断中控位置是否在电子围栏..."), c = 2) : 1 === t.action_car.carmodel_id && (console.log("开始判断手机位置是否在电子围栏..."), c = 1), e.next = 7, t.$http.get("car/" + t.action_car.number + "/location", {
                                              longitude: r.longitude,
                                              latitude: r.latitude
                                            });
                                          case 7:
                                            if (i = e.sent, u = i.data, console.log("location返回值:", u), console.log("location入参:", {
                                                longitude: r.longitude,
                                                latitude: r.latitude
                                              }), u.longitude && u.latitude && (o = u.longitude + "," + u.latitude), console.log("points", o), 14 != t.action_car.lock_id) {
                                              e.next = 17;
                                              break
                                            }
                                            t.getLockState(t, t.action_car).then(function() {
                                              var e = (0, s.default)(a.default.mark((function e(i) {
                                                var s;
                                                return a.default.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                      if (console.log(i, "sdk车锁状态"), "00" !== i.code || 0 !== i.result) {
                                                        e.next = 9;
                                                        break
                                                      }
                                                      return e.next = 4, t.$http.get("in_fences?points=" + o + "|" + r.longitude + "," + r.latitude + "&back_type=" + (0, l.default)(t.action_car.order_sn + ":back_type:2") + "&latitude=" + (t.back_latitude || r.latitude) + "&longitude=" + (t.back_longitude || r.longitude) + "&lock_status=" + (0, l.default)(t.action_car.order_sn + ":lock_status:1") + "&action_type=" + (0, l.default)(t.action_car.order_sn + ":action_type:3") + "&yunjia_in_fence=1");
                                                    case 4:
                                                      s = e.sent, s.data.in_fences > 0 ? 2 === c ? (console.log("锁gps在电子围栏"), n(2)) : (console.log("手机gps在电子围栏"), n(1)) : (console.log("不在电子围栏"), n(0)), e.next = 14;
                                                      break;
                                                    case 9:
                                                      t.backCarErrorModal(!0, 0), t.logReport("BA3", "===锁状态：开==="), t.logReport("BA3", "===开始上报还车失败==="), t.car_notification(3, 5, "", "还车失败"), n(-1);
                                                    case 14:
                                                      t.end(t, t.action_car), t.closeBluetoothAdapter(t, t.action_car);
                                                    case 16:
                                                    case "end":
                                                      return e.stop()
                                                  }
                                                }), e)
                                              })));
                                              return function(t) {
                                                return e.apply(this, arguments)
                                              }
                                            }()).catch(function() {
                                              var e = (0, s.default)(a.default.mark((function e(i) {
                                                var s, u;
                                                return a.default.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                      return t.logReport("BA3", "===网络获取锁状态==="), e.next = 3, t.$http.get("car/" + t.action_car.number + "/lockStatus");
                                                    case 3:
                                                      if (void 0 === (s = e.sent).data || 0 != s.data.lockStatus) {
                                                        e.next = 13;
                                                        break
                                                      }
                                                      return t.logReport("BA3", "===网络获取锁状态结果：关==="), e.next = 8, t.$http.get("in_fences?points=" + o + "|" + r.longitude + "," + r.latitude + "&back_type=" + (0, l.default)(t.action_car.order_sn + ":back_type:2") + "&latitude=" + (t.back_latitude || r.latitude) + "&longitude=" + (t.back_longitude || r.longitude) + "&lock_status=" + (0, l.default)(t.action_car.order_sn + ":lock_status:1") + "&action_type=" + (0, l.default)(t.action_car.order_sn + ":action_type:3") + "&yunjia_in_fence=1");
                                                    case 8:
                                                      u = e.sent, u.data.in_fences > 0 ? 2 === c ? (console.log("锁gps在电子围栏"), n(2)) : (console.log("手机gps在电子围栏"), n(1)) : (console.log("不在电子围栏"), n(0)), e.next = 14;
                                                      break;
                                                    case 13:
                                                      void 0 !== s.data && 1 == s.data.lockStatus && (t.backCarErrorModal(!0, 0), t.logReport("BA3", "===网络获取锁状态结果：开==="), t.logReport("BA3", "===开始上报还车失败==="), t.car_notification(3, 5, "", "还车失败"), n(-1));
                                                    case 14:
                                                      t.closeBluetoothAdapter(t, t.action_car), t.end(t, t.action_car);
                                                    case 16:
                                                    case "end":
                                                      return e.stop()
                                                  }
                                                }), e)
                                              })));
                                              return function(t) {
                                                return e.apply(this, arguments)
                                              }
                                            }()), e.next = 22;
                                            break;
                                          case 17:
                                            return e.next = 19, t.$http.get("in_fences?points=" + o + "|" + r.longitude + "," + r.latitude);
                                          case 19:
                                            d = e.sent, d.data.in_fences > 0 ? 2 === c ? (console.log("锁gps在电子围栏"), n(2)) : (console.log("手机gps在电子围栏"), n(1)) : (console.log("不在电子围栏"), n(0));
                                          case 22:
                                          case "end":
                                            return e.stop()
                                        }
                                      }), e)
                                    })));
                                    return function(t) {
                                      return e.apply(this, arguments)
                                    }
                                  }()));
                                case 1:
                                case "end":
                                  return e.stop()
                              }
                            }), e)
                          })));
                          return function(t) {
                            return e.apply(this, arguments)
                          }
                        }()));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              car_notification: function(t, e, n, r, o) {
                var c = this;
                return this.getPosition().then(function() {
                  var i = (0, s.default)(a.default.mark((function i(s) {
                    var u, d, _, p;
                    return a.default.wrap((function(a) {
                      for (;;) switch (a.prev = a.next) {
                        case 0:
                          return u = {
                            action_type: (0, l.default)(c.action_car.order_sn + ":action_type:" + t),
                            lock_status: (0, l.default)(c.action_car.order_sn + ":lock_status:" + e),
                            longitude: c.back_longitude || s.longitude,
                            latitude: c.back_latitude || s.latitude,
                            back_type: (0, l.default)(c.action_car.order_sn + ":back_type:" + n),
                            remark: r
                          }, console.log(u, "99999999999999999999"), a.next = 4, c.$http.post("order/car_notification", u).catch((function(t) {
                            return {
                              status_code: "err"
                            }
                          }));
                        case 4:
                          if (d = a.sent, _ = d.status_code, p = d.message, 200 === _) {
                            console.log("数据上报成功", u);
                            try {
                              o(!0)
                            } catch (t) {}
                          } else if ("err" == _) try {
                            o(!1)
                          } catch (t) {} else {
                            console.log("数据上报失败", _ + ":" + p);
                            try {
                              o(!1)
                            } catch (t) {}
                          }
                          return a.next = 10, c.getUserCarAuthority();
                        case 10:
                        case "end":
                          return a.stop()
                      }
                    }), i)
                  })));
                  return function(t) {
                    return i.apply(this, arguments)
                  }
                }())
              },
              getUnlockRent: function(t, e) {
                var n = this;
                return (0, s.default)(a.default.mark((function r() {
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, n.$http.get("car/lp/rent?lock_no=" + t + "&keySource=" + e);
                      case 2:
                        return r.abrupt("return", r.sent);
                      case 3:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              check_ebike_is_unlock: function(e, n, r) {
                var o = this;
                return (0, s.default)(a.default.mark((function c() {
                  var i, s, u, l;
                  return a.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, o.getPosition();
                      case 2:
                        if (i = a.sent, !o.is_unlock) {
                          a.next = 5;
                          break
                        }
                        return a.abrupt("return");
                      case 5:
                        if (!(200 !== e && o.unlock_finish >= 2)) {
                          a.next = 8;
                          break
                        }
                        return t.showToast({
                          title: "开锁失败",
                          icon: "none"
                        }), a.abrupt("return");
                      case 8:
                        if (!(o.check_ebike_is_unlock_count >= 10)) {
                          a.next = 12;
                          break
                        }
                        return o.unlock_finish++, o.unlock_finish >= 2 && t.showToast({
                          title: "开锁超时",
                          icon: "none"
                        }), a.abrupt("return");
                      case 12:
                        return o.check_ebike_is_unlock_count++, a.next = 15, o.$http.get("cmd/query/" + n);
                      case 15:
                        if (s = a.sent, u = s.data, console.log("cmd_query", u), 1 !== u.ret && 2 !== u.ret || (o.is_unlock = !0), !o.is_unlock) {
                          a.next = 38;
                          break
                        }
                        if (1 === r && (5 === o.action_car.lock_id ? o.showPopup("type5_lock") : 11 == o.action_car.lock_id && 1 == o.action_car.carmodel_id ? o.showPopup("zzs") : 1 === o.action_car.back_car_mode ? o.showPopup("back_mode_1") : 2 === o.action_car.back_car_mode && o.showPopup("back_mode_2")), o.unlock_finish++, 12 !== o.action_car.lock_id) {
                          a.next = 29;
                          break
                        }
                        return a.next = 25, o.$http.post("order/temp_lock", {
                          longitude: i.longitude,
                          latitude: i.latitude,
                          status: 0
                        });
                      case 25:
                        200 === (l = a.sent).status_code ? (o.clearTemporaryLock(), o.unlockSuccess()) : t.showToast({
                          title: l.message,
                          icon: "none"
                        }), a.next = 32;
                        break;
                      case 29:
                        console.log("this.unlock_finish!", o.unlock_finish), o.clearTemporaryLock(), o.unlockSuccess();
                      case 32:
                        return o.showCarModel = !1, 14 != o.action_car.lock_id && o.closeBluetoothAdapter(o, o.action_car), a.next = 36, o.getUserCarAuthority();
                      case 36:
                        a.next = 40;
                        break;
                      case 38:
                        o.unlock_finish >= 2 && (u.ret < 0 ? t.showToast({
                          title: "开锁异常",
                          icon: "none"
                        }) : 3 === u.ret ? (console.log("离线离线离线"), t.showToast({
                          title: "开锁失败，车辆离线",
                          icon: "none"
                        })) : 4 === u.ret && t.showToast({
                          title: "开锁失败",
                          icon: "none"
                        })), 0 === u.ret && setTimeout((function() {
                          o.check_ebike_is_unlock(e, n, r)
                        }), 1e3);
                      case 40:
                      case "end":
                        return a.stop()
                    }
                  }), c)
                })))()
              },
              check_ebike_is_lock: function(e, n, r) {
                var o = this;
                return (0, s.default)(a.default.mark((function c() {
                  var i, s;
                  return a.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (!o.is_lock) {
                          a.next = 2;
                          break
                        }
                        return a.abrupt("return");
                      case 2:
                        if (200 === e) {
                          a.next = 6;
                          break
                        }
                        return f = !1, t.showToast({
                          title: "上锁失败",
                          icon: "none"
                        }), a.abrupt("return");
                      case 6:
                        if (!(o.check_ebike_is_lock_count >= 10)) {
                          a.next = 10;
                          break
                        }
                        return f = !1, 0 === r ? (t.showToast({
                          title: "上锁超时",
                          icon: "none"
                        }), o.logReport("BA2")) : (t.showToast({
                          title: "还车超时",
                          icon: "none"
                        }), o.logReport("BA1")), a.abrupt("return");
                      case 10:
                        return o.check_ebike_is_lock_count++, a.next = 13, o.$http.get("cmd/query/" + n);
                      case 13:
                        if (i = a.sent, s = i.data, console.log("cmd_query", s), 1 !== s.ret && 2 !== s.ret || (o.is_lock = !0), !o.is_lock) {
                          a.next = 25;
                          break
                        }
                        return t.showToast({
                          title: 0 === r ? "临时上锁成功" : "还车成功",
                          icon: "success"
                        }), 0 == r && o.setTemporaryLock(), o.closeBluetoothAdapter(o, o.action_car), a.next = 23, o.getUserCarAuthority();
                      case 23:
                        a.next = 27;
                        break;
                      case 25:
                        o.unlock_finish >= 2 && (s.ret < 0 ? (t.showToast({
                          title: "上锁异常",
                          icon: "none"
                        }), f = !1) : 3 === s.ret ? (t.showToast({
                          title: "上锁失败，车辆离线",
                          icon: "none"
                        }), f = !1) : 4 === s.ret && (t.showToast({
                          title: "上锁失败",
                          icon: "none"
                        }), f = !1)), 0 === s.ret && setTimeout((function() {
                          o.check_ebike_is_lock(e, n, r)
                        }), 1e3);
                      case 27:
                      case "end":
                        return a.stop()
                    }
                  }), c)
                })))()
              },
              setTemporaryLock: function() {
                var e = this;
                clearTimeout(this.stopEvent), this.isTemporaryLockModal || (this.isTemporaryLockModal = !0, t.setStorageSync("temporary_lock", 3), this.user_car_authority.order.temporary_parking_finish_order_time && (this.stopEvent = setTimeout((function() {
                  r.showModal({
                    title: "提示",
                    confirmText: "知道了",
                    content: e.user_car_authority.order.temporary_content,
                    showCancel: !1,
                    success: function() {
                      e.isTemporaryLockModal = !1
                    }
                  })
                }), 1e3)))
              },
              clearTemporaryLock: function() {
                t.removeStorageSync("temporary_lock")
              },
              closeNoticeModal: function() {
                this.notice_modal_show = !1, this.show_overlay = !1
              },
              openNoticeModal: function(t) {
                this.notice_modal_content = t, this.notice_modal_show = !0, this.show_overlay = !0
              },
              test_carModal: function() {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  var r;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, e.$http.get("car/80001708");
                      case 2:
                        if (r = n.sent, "{}" === JSON.stringify(r.data)) {
                          n.next = 8;
                          break
                        }
                        r.data.card_is_freeze = 1, e.car = r.data, n.next = 11;
                        break;
                      case 8:
                        if (void 0 === r.status_code || 200 === r.status_code) {
                          n.next = 11;
                          break
                        }
                        return t.showToast({
                          title: r.message ? r.message : "请输入正确的车编号",
                          icon: "none"
                        }), n.abrupt("return");
                      case 11:
                        e.showCarModel = !0;
                      case 12:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              notLockVoice: function(t) {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  var r;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return console.log("调用未关锁语音接口", "car/notLockVoice/" + t), n.next = 3, e.$http.post("car/notLockVoice/" + t);
                      case 3:
                        return r = n.sent, console.log("调用未关锁语音接口返回", r), n.abrupt("return", r);
                      case 6:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getPosition: function() {
                return (0, s.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = function() {
                          return new Promise((function(e, n) {
                            t.getLocation({
                              type: "gcj02",
                              isHighAccuracy: !0,
                              success: function(t) {
                                e({
                                  latitude: t.latitude,
                                  longitude: t.longitude
                                })
                              },
                              fail: function() {
                                e(p || {
                                  latitude: 0,
                                  longitude: 0
                                })
                              }
                            })
                          }))
                        }, e.abrupt("return", new Promise(function() {
                          var t = (0, s.default)(a.default.mark((function t(e, r) {
                            var o;
                            return a.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  if (o = {}, p && p.latitude && p.longitude) {
                                    t.next = 7;
                                    break
                                  }
                                  return t.next = 4, n();
                                case 4:
                                  o = t.sent, t.next = 8;
                                  break;
                                case 7:
                                  o = p;
                                case 8:
                                  e(o);
                                case 9:
                                case "end":
                                  return t.stop()
                              }
                            }), t)
                          })));
                          return function(e, n) {
                            return t.apply(this, arguments)
                          }
                        }()));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              lockAction: function(e) {
                var n = this;
                return (0, s.default)(a.default.mark((function r() {
                  var o, i;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, n.check_location_auth();
                      case 2:
                        return r.next = 4, n.getPosition();
                      case 4:
                        if (o = r.sent, t.showLoading({
                            title: 3 === e ? "开锁中" : "上锁中",
                            icon: "loading",
                            mask: !0
                          }), 3 !== e) {
                          r.next = 12;
                          break
                        }
                        return r.next = 9, n.logReport("A3");
                      case 9:
                        n.unlock_finish = 0, r.next = 16;
                        break;
                      case 12:
                        if (4 !== e) {
                          r.next = 16;
                          break
                        }
                        return (0, u.closeBluetoothAdapter)(), r.next = 16, n.logReport("A2");
                      case 16:
                        if (4 !== e || 0 !== n.user_car_authority.order.allow_temporary_lock) {
                          r.next = 22;
                          break
                        }
                        return r.next = 19, n.logReport("B7");
                      case 19:
                        return t.hideLoading(), t.showModal({
                          title: "溫馨提示",
                          content: "临时锁车已禁用，请至蓝色围栏还车，未锁导致车辆丢失责任自负。",
                          confirmText: "知道了",
                          showCancel: !1
                        }), r.abrupt("return");
                      case 22:
                        if (4 !== e || 10 !== n.user_car_authority.order.lock_id && 12 !== n.user_car_authority.order.lock_id) {
                          r.next = 28;
                          break
                        }
                        n.show_overlay = !0, n.show_temp = !0, t.hideLoading(), r.next = 31;
                        break;
                      case 28:
                        if (3 !== e || 10 !== n.user_car_authority.order.lock_id && 12 !== n.user_car_authority.order.lock_id || 1 !== n.user_car_authority.order.temporary_lock) {
                          r.next = 31;
                          break
                        }
                        return t.hideLoading(), r.abrupt("return");
                      case 31:
                        return r.next = 33, n.$http.get("order/can_action");
                      case 33:
                        if (200 === (i = r.sent).status_code) {
                          r.next = 37;
                          break
                        }
                        return t.showToast({
                          title: i.message,
                          icon: "none"
                        }), r.abrupt("return");
                      case 37:
                        n.openBluetoothAdapter().then((0, s.default)(a.default.mark((function r() {
                          var i, u, l, d, p, h, g, k, m, b;
                          return a.default.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                if (3 !== e) {
                                  r.next = 26;
                                  break
                                }
                                return r.next = 3, n.carCanUnlock();
                              case 3:
                                if (1 != (i = r.sent)) {
                                  r.next = 11;
                                  break
                                }
                                return t.showToast({
                                  title: "您已提交问题反馈，暂时无法开锁",
                                  icon: "none"
                                }), r.next = 8, n.logReport("B5");
                              case 8:
                                return r.abrupt("return");
                              case 11:
                                if (2 != i) {
                                  r.next = 18;
                                  break
                                }
                                return t.showToast({
                                  title: "当前行程已结束",
                                  icon: "none"
                                }), r.next = 15, n.logReport("B6");
                              case 15:
                                return r.next = 17, n.getUserCarAuthority();
                              case 17:
                                return r.abrupt("return");
                              case 18:
                                return r.next = 20, n.getCurrentCycling();
                              case 20:
                                if (void 0 === (u = r.sent).status_code || 200 === u.status_code) {
                                  r.next = 24;
                                  break
                                }
                                return t.showToast({
                                  title: u.message,
                                  icon: "none"
                                }), r.abrupt("return");
                              case 24:
                                r.next = 40;
                                break;
                              case 26:
                                if (1 === e) {
                                  r.next = 40;
                                  break
                                }
                                return r.next = 29, n.getCurrentCycling();
                              case 29:
                                if (void 0 === (l = r.sent).status_code || 200 === l.status_code) {
                                  r.next = 33;
                                  break
                                }
                                return t.showToast({
                                  title: l.message,
                                  icon: "none"
                                }), r.abrupt("return");
                              case 33:
                                if (!(void 0 === n.cycling || n.cycling.order_state > 20)) {
                                  r.next = 40;
                                  break
                                }
                                return t.showToast({
                                  title: "当前行程已结束",
                                  icon: "none"
                                }), r.next = 37, n.logReport("B6");
                              case 37:
                                return r.next = 39, n.getUserCarAuthority();
                              case 39:
                                return r.abrupt("return");
                              case 40:
                                if (n.action_car = _(_({}, n.cycling), {}, {
                                    number: n.cycling.car_number,
                                    mac: n.cycling.car_lock_mac,
                                    vendor_lock_id: n.cycling.car_vendor_lock_id,
                                    lock_password: n.cycling.car_lock_password,
                                    lock_secretkey: n.cycling.car_lock_secretkey
                                  }), 3 !== e) {
                                  r.next = 58;
                                  break
                                }
                                if (n.is_unlock = !1, 4 !== n.action_car.lock_id && 8 !== n.action_car.lock_id && n.unlock(n, n.action_car).then(function() {
                                    var e = (0, s.default)(a.default.mark((function e(r) {
                                      var i, s;
                                      return a.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            if (2 == n.action_car.lock_id || 5 == n.action_car.lock_id || 6 == n.action_car.lock_id || 9 == n.action_car.lock_id || 10 == n.action_car.lock_id ? n.unlock_finish = 2 : n.unlock_finish++, console.log("unlock_response", r, (0, c.default)(r.result)), i = "00" === r.code && 1 === r.result ? 1 : 0, console.log("open", i), !i) {
                                              e.next = 18;
                                              break
                                            }
                                            if (n.is_unlock = !0, n.end(n, n.action_car), console.log("再次开锁1"), n.clearTemporaryLock(), n.unlockSuccess(), 10 !== n.action_car.lock_id && 12 !== n.action_car.lock_id) {
                                              e.next = 15;
                                              break
                                            }
                                            return e.next = 13, n.$http.post("order/temp_lock", {
                                              longitude: o.longitude,
                                              latitude: o.latitude,
                                              status: 0
                                            });
                                          case 13:
                                            200 === (s = e.sent).status_code ? (console.log("再次开锁2"), n.clearTemporaryLock(), n.unlockSuccess()) : t.showToast({
                                              title: s.message,
                                              icon: "none"
                                            });
                                          case 15:
                                            n.car_notification(1, 1, "", "蓝牙开锁成功"), e.next = 19;
                                            break;
                                          case 18:
                                            n.unlock_finish >= 2 && (n.end(n, n.action_car), t.showToast({
                                              title: "开锁失败",
                                              icon: "none"
                                            }), n.car_notification(1, 3, "", "蓝牙开锁失败"));
                                          case 19:
                                          case "end":
                                            return e.stop()
                                        }
                                      }), e)
                                    })));
                                    return function(t) {
                                      return e.apply(this, arguments)
                                    }
                                  }()).catch((function(e) {
                                    if (13 === n.action_car.lock_id || 14 === n.action_car.lock_id || 11 === n.action_car.lock_id) console.log("调用助力车开锁api"), n.networkUnlockCar(o, 1);
                                    else {
                                      if (n.is_unlock) return void t.hideLoading();
                                      2 == n.action_car.lock_id || 5 == n.action_car.lock_id || 6 == n.action_car.lock_id || 9 == n.action_car.lock_id || 10 == n.action_car.lock_id ? n.unlock_finish = 2 : n.unlock_finish++, n.unlock_finish >= 2 && (t.showToast({
                                        title: void 0 !== e.msg ? e.msg : "开锁失败",
                                        icon: "none"
                                      }), n.end(n, n.action_car), parseInt(e.code) >= 1e3 && parseInt(e.code) <= 1004 || 1011 === parseInt(e.code) || 1012 === parseInt(e.code) ? n.car_notification(1, 2, "", "蓝牙开锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")) : parseInt(e.code) >= 1005 && parseInt(e.code) <= 1008 && n.car_notification(1, 3, "", "蓝牙开锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")))
                                    }
                                  })), 2 !== n.action_car.carmodel_id && 3 !== n.action_car.lock_id && 12 !== n.action_car.lock_id && 13 !== n.action_car.lock_id && 14 !== n.action_car.lock_id && 11 !== n.action_car.lock_id) {
                                  r.next = 56;
                                  break
                                }
                                if (console.log("调用助力车开锁api"), !f) {
                                  r.next = 48;
                                  break
                                }
                                return r.abrupt("return");
                              case 48:
                                return r.next = 50, n.$http.post("car/unlock", {
                                  longitude: o.longitude,
                                  latitude: o.latitude,
                                  action_type: 2 === n.action_car.carmodel_id ? 1 : 2
                                });
                              case 50:
                                d = r.sent, p = d.status_code, h = d.data, console.log("调用助力车开锁api返回", p, h.cmd), n.check_ebike_is_unlock_count = 0, n.check_ebike_is_unlock(p, h.cmd);
                              case 56:
                                r.next = 79;
                                break;
                              case 58:
                                if (4 !== e) {
                                  r.next = 79;
                                  break
                                }
                                return r.next = 61, n.$http.post("order/bluetooth_temp_lock", {
                                  longitude: o.longitude,
                                  latitude: o.latitude
                                });
                              case 61:
                                if (g = r.sent, console.log(g, "判断是否可以临时上锁"), 200 == g.status_code) {
                                  r.next = 66;
                                  break
                                }
                                return t.showToast({
                                  title: g.message,
                                  icon: "none"
                                }), r.abrupt("return");
                              case 66:
                                if (n.is_lock = !1, 2 !== n.action_car.carmodel_id && (1 != n.action_car.carmodel_id || 11 != n.action_car.lock_id)) {
                                  r.next = 78;
                                  break
                                }
                                return console.log("调用助力车上锁api"), r.next = 71, n.$http.post("car/lock", {
                                  longitude: n.longitude,
                                  latitude: n.latitude,
                                  action_type: 1
                                });
                              case 71:
                                return k = r.sent, m = k.status_code, b = k.data, console.log("调用助力车上锁api返回", m, b.cmd), n.check_ebike_is_lock_count = 0, n.check_ebike_is_lock(m, b.cmd, 0), r.abrupt("return");
                              case 78:
                                4 !== n.action_car.lock_id && 8 !== n.action_car.lock_id && (11 === n.action_car.lock_id ? n.temporary_lock(n, n.action_car).then((function(e) {
                                  ("00" === e.code && 1 === e.result ? 1 : 0) ? (n.is_lock = !0, t.showToast({
                                    title: "临时上锁成功",
                                    icon: "success"
                                  }), n.setTemporaryLock(), n.car_notification(2, 1, "", "临时上锁成功")) : (t.showToast({
                                    title: "临时上锁失败",
                                    icon: "none"
                                  }), n.car_notification(2, 3, "", "蓝牙上锁失败"))
                                })).catch((function(e) {
                                  n.is_lock ? t.hideLoading() : (t.showToast({
                                    title: void 0 !== e.msg ? e.msg : "临时上锁失败",
                                    icon: "none"
                                  }), parseInt(e.code) >= 1e3 && parseInt(e.code) <= 1004 || 1011 === parseInt(e.code) || 1012 === parseInt(e.code) ? n.car_notification(2, 2, "", "蓝牙上锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")) : parseInt(e.code) >= 1005 && parseInt(e.code) <= 1008 && n.car_notification(2, 3, "", "蓝牙上锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")))
                                })) : n.lock(n, n.action_car).then((function(e) {
                                  ("00" === e.code && 1 === e.result ? 1 : 0) ? (n.is_lock = !0, t.showToast({
                                    title: "临时上锁成功",
                                    icon: "success"
                                  }), n.car_notification(2, 1, "", "临时上锁成功")) : (t.showToast({
                                    title: "临时上锁失败",
                                    icon: "none"
                                  }), n.car_notification(2, 3, "", "蓝牙上锁失败"))
                                })).catch((function(e) {
                                  n.is_lock ? t.hideLoading() : (t.showToast({
                                    title: void 0 !== e.msg ? e.msg : "临时上锁失败",
                                    icon: "none"
                                  }), parseInt(e.code) >= 1e3 && parseInt(e.code) <= 1004 || 1011 === parseInt(e.code) || 1012 === parseInt(e.code) ? n.car_notification(2, 2, "", "蓝牙上锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")) : parseInt(e.code) >= 1005 && parseInt(e.code) <= 1008 && n.car_notification(2, 3, "", "蓝牙上锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")))
                                })));
                              case 79:
                              case "end":
                                return r.stop()
                            }
                          }), r)
                        })))).catch((function() {
                          t.hideLoading()
                        }));
                      case 38:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              useCar: function() {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  var r, o, c;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return c = function() {
                          return new Promise((function(e, n) {
                            t.requestSubscribeMessage({
                              tmplIds: ["iF_TlQQVjke0iJuGOEEf94cVBTDo5GzGOy7uCONb07k"],
                              complete: function() {
                                var t = (0, s.default)(a.default.mark((function t(n) {
                                  return a.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        console.log(n, 123), e();
                                      case 2:
                                      case "end":
                                        return t.stop()
                                    }
                                  }), t)
                                })));
                                return function(e) {
                                  return t.apply(this, arguments)
                                }
                              }()
                            })
                          }))
                        }, r = function() {
                          return new Promise((function(e, n) {
                            t.showModal({
                              title: "7MA出行温馨提示",
                              content: "骑行共享电动车之前请佩戴好安全头盔，安全骑行，从“头”做起。",
                              cancelText: "未佩戴",
                              confirmText: "已佩戴",
                              success: function(n) {
                                n.confirm ? e() : n.cancel && t.showToast({
                                  title: "请先佩戴头盔",
                                  icon: "none"
                                })
                              }
                            })
                          }))
                        }, n.next = 4, e.check_location_auth();
                      case 4:
                        if (1 !== e.car.remind_helmet) {
                          n.next = 7;
                          break
                        }
                        return n.next = 7, r();
                      case 7:
                        return n.next = 9, (0, u.closeBluetoothAdapter)();
                      case 9:
                        return n.next = 11, e.getPosition();
                      case 11:
                        return o = n.sent, e.showLoading({
                          title: "开锁中",
                          icon: "loading",
                          mask: !0
                        }), n.next = 15, c();
                      case 15:
                        console.log("开锁中..."), e.unlock_finish = 0, e.openBluetoothAdapter().then((0, s.default)(a.default.mark((function n() {
                          var r;
                          return a.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (console.log(e.can_create_order, "防止重复下单"), e.can_create_order) {
                                  n.next = 4;
                                  break
                                }
                                return t.hideLoading(), n.abrupt("return");
                              case 4:
                                return e.can_create_order = !1, n.next = 7, e.$http.post("order", {
                                  order_type: 1,
                                  car_number: e.car.number,
                                  longitude: o.longitude,
                                  latitude: o.latitude
                                });
                              case 7:
                                r = n.sent, console.log("下单", r, e.car.number), e.order = r.data, 200 === r.status_code ? (e.is_unlock = !1, e.action_car = _(_({}, e.car), {}, {
                                  order_sn: e.order.order_sn,
                                  order_id: e.order.order_id,
                                  mac: e.car.lock_mac
                                }), console.log(e.car, "this.car"), 4 !== e.action_car.lock_id && 8 !== e.action_car.lock_id && e.unlock(e, e.action_car).then(function() {
                                  var n = (0, s.default)(a.default.mark((function n(r) {
                                    return a.default.wrap((function(n) {
                                      for (;;) switch (n.prev = n.next) {
                                        case 0:
                                          console.log("then", r), e.end(e, e.action_car), 2 == e.action_car.lock_id || 5 == e.action_car.lock_id || 6 == e.action_car.lock_id || 9 == e.action_car.lock_id || 10 == e.action_car.lock_id ? e.unlock_finish = 2 : e.unlock_finish++, ("00" === r.code && 1 === r.result ? 1 : 0) ? (e.showCarModel = !1, e.is_unlock = !0, 5 === e.action_car.lock_id ? e.showPopup("type5_lock") : 11 == e.action_car.lock_id && 1 == e.action_car.carmodel_id ? e.showPopup("zzs") : 1 === e.action_car.back_car_mode ? e.showPopup("back_mode_1") : 2 === e.action_car.back_car_mode && e.showPopup("back_mode_2"), e.unlockSuccess(), e.car_notification(1, 1, "", "蓝牙开锁成功")) : 13 === e.action_car.lock_id || 11 === e.action_car.lock_id ? (console.log("调用助力车开锁api"), e.networkUnlockCar(o)) : e.unlock_finish >= 2 && (t.showToast({
                                            title: "开锁失败",
                                            icon: "none"
                                          }), e.car_notification(1, 3, "", "蓝牙开锁失败"));
                                        case 5:
                                        case "end":
                                          return n.stop()
                                      }
                                    }), n)
                                  })));
                                  return function(t) {
                                    return n.apply(this, arguments)
                                  }
                                }()).catch(function() {
                                  var n = (0, s.default)(a.default.mark((function n(r) {
                                    return a.default.wrap((function(n) {
                                      for (;;) switch (n.prev = n.next) {
                                        case 0:
                                          if (13 !== e.action_car.lock_id && 14 !== e.action_car.lock_id && 11 !== e.action_car.lock_id) {
                                            n.next = 5;
                                            break
                                          }
                                          t.hideLoading(), e.logReport("BA3", "===蓝牙超时==="), n.next = 11;
                                          break;
                                        case 5:
                                          if (!e.is_unlock) {
                                            n.next = 8;
                                            break
                                          }
                                          return t.hideLoading(), n.abrupt("return");
                                        case 8:
                                          console.log("this.unlock_finish", e.unlock_finish), 2 == e.action_car.lock_id || 5 == e.action_car.lock_id || 6 == e.action_car.lock_id || 9 == e.action_car.lock_id || 10 == e.action_car.lock_id ? e.unlock_finish = 2 : e.unlock_finish++, e.unlock_finish >= 2 && (t.showToast({
                                            title: void 0 !== r.msg ? r.msg : "开锁失败",
                                            icon: "none"
                                          }), e.end(e, e.action_car), console.log("err", r), parseInt(r.code) >= 1e3 && parseInt(r.code) <= 1004 || 1011 === parseInt(r.code) || 1012 === parseInt(r.code) ? e.car_notification(1, 2, "", "蓝牙开锁失败" + (void 0 !== r.remark ? "[" + r.remark + "]" : "")) : parseInt(r.code) >= 1005 && parseInt(r.code) <= 1008 && e.car_notification(1, 3, "", "蓝牙开锁失败" + (void 0 !== r.remark ? "[" + r.remark + "]" : "")));
                                        case 11:
                                        case "end":
                                          return n.stop()
                                      }
                                    }), n)
                                  })));
                                  return function(t) {
                                    return n.apply(this, arguments)
                                  }
                                }()), 2 !== e.action_car.carmodel_id && 3 !== e.action_car.lock_id && 13 !== e.action_car.lock_id && 14 !== e.action_car.lock_id && 11 !== e.action_car.lock_id || (console.log("调用助力车开锁api"), e.networkUnlockCar(o))) : t.showToast({
                                  title: void 0 !== r.message ? r.message : "下单失败，请稍后重试",
                                  icon: "none"
                                }), e.can_create_order = !0, console.log("this.can_create_order", e.can_create_order);
                              case 13:
                              case "end":
                                return n.stop()
                            }
                          }), n)
                        })))).catch((function() {
                          console.log("蓝牙检测失败"), t.hideLoading()
                        }));
                      case 18:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              networkUnlockCar: function(t) {
                var e = arguments,
                  n = this;
                return (0, s.default)(a.default.mark((function r() {
                  var o, c, i, s, u;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (o = e.length > 1 && void 0 !== e[1] ? e[1] : 2, !f) {
                          r.next = 3;
                          break
                        }
                        return r.abrupt("return");
                      case 3:
                        return r.next = 5, n.$http.post("car/unlock", {
                          longitude: t.longitude,
                          latitude: t.latitude,
                          action_type: o
                        });
                      case 5:
                        c = r.sent, i = c.status_code, s = c.data, u = c.message, n.check_ebike_is_unlock_count = 0, console.log("check_ebike_is_unlock1", i, s, u, 33), n.check_ebike_is_unlock(i, s.cmd, 1);
                      case 12:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              unlockAgain: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("点击了再次开锁"), e.next = 3, t.lockAction(3);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              temporaryLock: function() {
                var t = this;
                return (0, s.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("点击了临时上锁"), e.next = 3, t.lockAction(4);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              orderFinish: function() {
                var e = this;
                this.$http.post("order/order_finish/" + this.user_car_authority.order.order_id, {
                  created_at: this.user_car_authority.order.created_at
                }).then(function() {
                  var n = (0, s.default)(a.default.mark((function n(r) {
                    return a.default.wrap((function(n) {
                      for (;;) switch (n.prev = n.next) {
                        case 0:
                          if (200 != r.status_code) {
                            n.next = 7;
                            break
                          }
                          return n.next = 3, e.getUserCarAuthority();
                        case 3:
                          t.showToast({
                            title: "还车成功",
                            icon: "success"
                          }), e.backCarErrorModal(!1), n.next = 8;
                          break;
                        case 7:
                          t.showToast({
                            title: r.message,
                            icon: "none"
                          });
                        case 8:
                        case "end":
                          return n.stop()
                      }
                    }), n)
                  })));
                  return function(t) {
                    return n.apply(this, arguments)
                  }
                }())
              },
              unlockSuccess: function() {
                t.showToast({
                  title: "锁已打开",
                  icon: "success"
                }), this.action_car.gys_helmet_bth ? this.toolsModal(!0, 1) : this.action_car.show_open_close_helmet_bth && this.toolsModal(!0, 0)
              },
              openTk: function() {
                var e = this,
                  n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this.showLoading({
                  title: "头盔" + (n ? "开启" : "关闭") + "中",
                  icon: "loading",
                  mask: !0
                });
                var r = this.action_car.number || this.user_car_authority.order.car_number;
                this.$http.post("openCloseHelmet/" + r, {
                  type: n
                }).then((function(r) {
                  e.toolsModal(!1), e.logReport("BA3", "===头盔" + (n ? "开启" : "关闭") + "返回结果：" + r.data.result + "==="), 1 == r.data.result ? n && e.toolsModal(!0, 1) : t.showToast({
                    title: "头盔" + (n ? "开启" : "关闭") + "失败",
                    icon: "none"
                  })
                })).catch((function(n) {
                  e.logReport("BA3", "===头盔接口请求失败==="), t.hideLoading()
                }))
              },
              getTkState: function() {
                var e = this,
                  n = this.action_car.number || this.user_car_authority.order.car_number;
                return new Promise((function(r, o) {
                  e.$http.get("checkHelmetStatus/" + n).then((function(n) {
                    e.logReport("BA3", "===头盔锁状态：" + n.data.result + "==="), 1 == n.data.result ? r(1) : (r(0), t.showToast({
                      title: n.data.msg,
                      icon: "none"
                    }))
                  })).catch((function(n) {
                    e.logReport("BA3", "===头盔状态接口请求失败:" + n.message + "==="), t.hideLoading()
                  }))
                }))
              },
              backCar: function() {
                var e = this;
                return (0, s.default)(a.default.mark((function n() {
                  var r, o, c;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return o = function() {
                          return new Promise((function(e, n) {
                            t.showModal({
                              title: "提示",
                              content: "请靠近车辆点击还车，确认还车成功再离开",
                              cancelText: "取消",
                              confirmText: "确认还车",
                              success: function(t) {
                                t.confirm ? (r.logReport("A1"), e()) : t.cancel && r.logReport("BA3", "===用户点击了取消===")
                              }
                            })
                          }))
                        }, (r = e).logReport("BA3", "===用户正在确认是否在车旁==="), n.next = 5, e.getPosition();
                      case 5:
                        return n.sent, n.next = 8, o();
                      case 8:
                        return e.showLoading({
                          title: "还车中",
                          mask: !0
                        }), e.show_overlay = !1, n.next = 12, (0, u.closeBluetoothAdapter)();
                      case 12:
                        return n.next = 14, e.$http.get("order/can_action");
                      case 14:
                        if (200 === (c = n.sent).status_code) {
                          n.next = 18;
                          break
                        }
                        return t.showToast({
                          title: c.message,
                          icon: "none"
                        }), n.abrupt("return");
                      case 18:
                        e.openBluetoothAdapter().then((0, s.default)(a.default.mark((function n() {
                          return a.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                e.check_location_auth().then((0, s.default)(a.default.mark((function n() {
                                  var r, o;
                                  return a.default.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return n.next = 2, e.getCurrentCycling();
                                      case 2:
                                        if (void 0 === (r = n.sent).status_code || 200 === r.status_code) {
                                          n.next = 6;
                                          break
                                        }
                                        return t.showToast({
                                          title: r.message,
                                          icon: "none"
                                        }), n.abrupt("return");
                                      case 6:
                                        if (!(void 0 === e.order || e.cycling.order_state > 20)) {
                                          n.next = 13;
                                          break
                                        }
                                        return t.showToast({
                                          title: "当前行程已结束",
                                          icon: "none"
                                        }), n.next = 10, e.logReport("B6");
                                      case 10:
                                        return n.next = 12, e.getUserCarAuthority();
                                      case 12:
                                        return n.abrupt("return");
                                      case 13:
                                        if (f = !0, e.action_car = _(_({}, e.cycling), {}, {
                                            number: e.cycling.car_number,
                                            mac: e.cycling.car_lock_mac,
                                            vendor_lock_id: e.cycling.car_vendor_lock_id,
                                            lock_password: e.cycling.car_lock_password,
                                            lock_secretkey: e.cycling.car_lock_secretkey
                                          }), console.log(e.action_car, "还车数据"), o = !1, 0, !e.action_car.show_open_close_helmet_bth && !e.action_car.gys_helmet_bth) {
                                          n.next = 24;
                                          break
                                        }
                                        return n.next = 21, e.getTkState();
                                      case 21:
                                        if (n.sent) {
                                          n.next = 24;
                                          break
                                        }
                                        return n.abrupt("return");
                                      case 24:
                                        e.check_is_in_parking().then(function() {
                                          var n = (0, s.default)(a.default.mark((function n(r) {
                                            var c, i, u, l, d, _;
                                            return a.default.wrap((function(n) {
                                              for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                  if (-1 != r) {
                                                    n.next = 2;
                                                    break
                                                  }
                                                  return n.abrupt("return");
                                                case 2:
                                                  if (e.logReport("BA3", "===判断电子围栏完成，结果" + r + "==="), c = !1, r) {
                                                    n.next = 10;
                                                    break
                                                  }
                                                  return o = !0, console.log("开始查找信标"), e.logReport("BA3", "===开始查找道钉==="), n.next = 10, e.findBeacon(e, e.action_car).then((function(n) {
                                                    if (r = n.result, console.log(r ? "找到信标了" : "超时未找到信标"), e.logReport("BA3", "===查找道钉结果：" + (r ? "有" : "无") + "==="), !r) return t.hideLoading(), e.backCarErrorModal(!0, 1), e.logReport("BA3", "===开始上报还车失败==="), f = !1, e.car_notification(3, 4, "", "还车失败-未扫描到信标"), void e.closeBluetoothAdapter(e, e.action_car)
                                                  })).catch(function() {
                                                    var n = (0, s.default)(a.default.mark((function n(o) {
                                                      var i, s;
                                                      return a.default.wrap((function(n) {
                                                        for (;;) switch (n.prev = n.next) {
                                                          case 0:
                                                            return e.logReport("BA3", "===查找道钉失败==="), e.logReport("BA3", "===开始获取锁与道钉信息==="), n.next = 4, e.$http.get("car/" + e.action_car.number + "/beaconAutomaticCarReturn");
                                                          case 4:
                                                            if (i = n.sent, s = i.data, console.log("锁检测信标结果", s), e.logReport("BA3", "===锁与道钉结果" + s.beacon + "==="), c = r = s.beacon, console.log(r ? "找到信标了" : "未找到信标"), r) {
                                                              n.next = 18;
                                                              break
                                                            }
                                                            return t.hideLoading(), e.backCarErrorModal(!0, 1), e.logReport("BA3", "===开始上报还车失败==="), f = !1, e.car_notification(3, 4, "", "还车失败-未扫描到信标"), e.closeBluetoothAdapter(e, e.action_car), n.abrupt("return");
                                                          case 18:
                                                          case "end":
                                                            return n.stop()
                                                        }
                                                      }), n)
                                                    })));
                                                    return function(t) {
                                                      return n.apply(this, arguments)
                                                    }
                                                  }());
                                                case 10:
                                                  if (!r) {
                                                    n.next = 34;
                                                    break
                                                  }
                                                  if (1 !== e.action_car.carmodel_id || 11 == e.action_car.lock_id || 14 == e.action_car.lock_id) {
                                                    n.next = 16;
                                                    break
                                                  }
                                                  e.logReport("BA3", "===单车开始蓝牙获取锁状态==="), e.getLockState(e, e.action_car).then((function(n) {
                                                    if (console.log(n, "sdk车锁状态"), "00" === n.code && 0 === n.result) {
                                                      var o = 1 === r || 2 === r ? r : 3;
                                                      e.logReport("BA3", "===锁状态：关==="), e.logReport("BA3", "===开始上报还车成功==="), e.car_notification(3, 1, o, "还车成功", (function(n) {
                                                        n ? (e.logReport("BA3", "===上报结果：成功==="), t.showToast({
                                                          title: "还车成功",
                                                          icon: "success"
                                                        })) : (e.logReport("BA3", "===上报结果：失败==="), f = !1, t.hideLoading())
                                                      })), e.closeBluetoothAdapter(e, e.action_car)
                                                    } else e.closeBluetoothAdapter(e, e.action_car), e.backCarErrorModal(!0, 0), 13 == e.action_car.lock_id && e.notLockVoice(e.action_car.number), e.logReport("BA3", "===锁状态：开==="), e.logReport("BA3", "===开始上报还车失败==="), f = !1, e.car_notification(3, 5, "", "还车失败");
                                                    e.end(e, e.action_car)
                                                  })).catch(function() {
                                                    var n = (0, s.default)(a.default.mark((function n(o) {
                                                      var i, s;
                                                      return a.default.wrap((function(n) {
                                                        for (;;) switch (n.prev = n.next) {
                                                          case 0:
                                                            if (e.logReport("BA3", "===蓝牙连接失败==="), e.closeBluetoothAdapter(e, e.action_car), e.end(e, e.action_car), 13 != e.action_car.lock_id) {
                                                              n.next = 28;
                                                              break
                                                            }
                                                            return e.logReport("BA3", "===网络获取锁状态==="), n.next = 7, e.$http.get("car/" + e.action_car.number + "/lockStatus");
                                                          case 7:
                                                            if (i = n.sent, console.log("蓝牙获取锁状态失败，网络获取锁状态", i.data), void 0 === i.data || 0 != i.data.lockStatus) {
                                                              n.next = 20;
                                                              break
                                                            }
                                                            return e.logReport("BA3", "===网络获取锁状态结果：关==="), s = 1 === r || 2 === r ? r : 3, s = c ? 4 : s, e.logReport("BA3", "===开始上报还车成功==="), e.car_notification(3, 1, s, "还车成功", (function(n) {
                                                              n ? (e.logReport("BA3", "===上报结果：成功==="), t.showToast({
                                                                title: "还车成功",
                                                                icon: "success"
                                                              })) : (e.logReport("BA3", "===上报结果：失败==="), f = !1, t.hideLoading())
                                                            })), e.closeBluetoothAdapter(e, e.action_car), e.end(e, e.action_car), n.abrupt("return", !1);
                                                          case 20:
                                                            if (void 0 === i.data || 1 != i.data.lockStatus) {
                                                              n.next = 28;
                                                              break
                                                            }
                                                            return e.backCarErrorModal(!0, 0), e.notLockVoice(e.action_car.number), e.logReport("BA3", "===网络获取锁状态结果：开==="), e.logReport("BA3", "===开始上报还车失败==="), f = !1, e.car_notification(3, 5, "", "还车失败"), n.abrupt("return", !1);
                                                          case 28:
                                                            parseInt(o.code) >= 1e3 && parseInt(o.code) <= 1004 || 1011 === parseInt(o.code) || 1012 === parseInt(o.code) ? (e.backCarErrorModal(!0, 2), f = !1, e.logReport("BA3", "===开始上报还车失败==="), e.car_notification(3, 2, "", "还车失败" + (void 0 !== o.remark ? "[" + o.remark + "]" : ""))) : parseInt(o.code) >= 1005 && parseInt(o.code) <= 1008 && (e.logReport("BA3", "===开始上报还车失败==="), t.showToast({
                                                              title: "连接失败",
                                                              icon: "none"
                                                            }), f = !1, e.car_notification(3, 3, "", "还车失败" + (void 0 !== o.remark ? "[" + o.remark + "]" : "")));
                                                          case 29:
                                                          case "end":
                                                            return n.stop()
                                                        }
                                                      }), n)
                                                    })));
                                                    return function(t) {
                                                      return n.apply(this, arguments)
                                                    }
                                                  }()), n.next = 34;
                                                  break;
                                                case 16:
                                                  if (2 !== e.action_car.carmodel_id && (1 !== e.action_car.carmodel_id || 11 != e.action_car.lock_id)) {
                                                    n.next = 33;
                                                    break
                                                  }
                                                  return console.log("走到这里了"), e.is_lock = !1, 4 !== e.action_car.lock_id && 8 !== e.action_car.lock_id && (e.logReport("BA3", "===助力车开始蓝牙关锁==="), e.lock(e, e.action_car).then((function(n) {
                                                    if ("00" === n.code && 1 === n.result) {
                                                      e.is_lock = !0;
                                                      var a = 1 === r || 2 === r ? r : 3;
                                                      e.logReport("BA3", "===开始上报还车成功==="), e.car_notification(3, 1, a, "还车成功", (function(n) {
                                                        n ? (e.logReport("BA3", "===上报结果：成功==="), t.showToast({
                                                          title: "还车成功",
                                                          icon: "success"
                                                        })) : (e.logReport("BA3", "===上报结果：失败==="), f = !1, t.hideLoading())
                                                      })), e.closeBluetoothAdapter(e, e.action_car), e.end(e, e.action_car)
                                                    } else o && e.closeBluetoothAdapter(e, e.action_car), e.logReport("BA3", "===开始上报还车失败==="), f = !1, e.car_notification(3, 3, "", "还车失败")
                                                  })).catch((function(n) {
                                                    e.logReport("BA3", "===蓝牙关锁失败==="), e.is_lock ? t.hideLoading() : (o && e.closeBluetoothAdapter(e, e.action_car), parseInt(n.code) >= 1e3 && parseInt(n.code) <= 1004 || 1011 === parseInt(n.code) || 1012 === parseInt(n.code) ? (e.backCarErrorModal(!0, 2), f = !1, e.logReport("BA3", "===开始上报还车失败==="), e.car_notification(3, 2, "", "还车失败" + (void 0 !== n.remark ? "[" + n.remark + "]" : ""))) : parseInt(n.code) >= 1005 && parseInt(n.code) <= 1008 && (e.backCarErrorModal(!0, 2), f = !1, e.logReport("BA3", "===开始上报还车失败==="), e.car_notification(3, 3, "", "还车失败" + (void 0 !== n.remark ? "[" + n.remark + "]" : ""))))
                                                  }))), console.log("调用助力车上锁api"), e.logReport("BA3", "===开始网络还车==="), i = 1 === r || 2 === r ? r : 3, n.next = 25, e.$http.post("car/lock", {
                                                    action_type: 2,
                                                    longitude: e.back_longitude,
                                                    latitude: e.back_latitude,
                                                    back_type: i
                                                  });
                                                case 25:
                                                  u = n.sent, l = u.status_code, d = u.data, console.log("调用助力车上锁api返回", l, d.cmd), e.check_ebike_is_lock_count = 0, e.check_ebike_is_lock(l, d.cmd, 1), n.next = 34;
                                                  break;
                                                case 33:
                                                  14 == e.action_car.lock_id && (_ = 1 === r || 2 === r ? r : 3, e.car_notification(3, 1, _, "还车成功", (function(n) {
                                                    n ? (e.logReport("BA3", "===上报结果：成功==="), t.showToast({
                                                      title: "还车成功",
                                                      icon: "success"
                                                    })) : (e.logReport("BA3", "===上报结果：失败==="), f = !1, t.hideLoading())
                                                  })));
                                                case 34:
                                                case "end":
                                                  return n.stop()
                                              }
                                            }), n)
                                          })));
                                          return function(t) {
                                            return n.apply(this, arguments)
                                          }
                                        }());
                                      case 25:
                                      case "end":
                                        return n.stop()
                                    }
                                  }), n)
                                })))).catch((function() {
                                  e.logReport("BA3", "===获取定位权限失败==="), t.hideLoading()
                                }));
                              case 1:
                              case "end":
                                return n.stop()
                            }
                          }), n)
                        })))).catch((function() {
                          e.logReport("BA3", "===蓝牙初始化失败==="), t.hideLoading()
                        }));
                      case 19:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              go: function(t) {
                r.navigateTo({
                  url: t
                })
              },
              mySleep: function(t) {
                return new Promise((function(e) {
                  setTimeout((function() {
                    e()
                  }), t)
                }))
              },
              getCarIcon: function() {
                var t = this;
                this.user_car_authority && 0 === this.user_car_authority.notice_code && this.getPosition().then((function(e) {
                  var n = e.latitude,
                    r = e.longitude;
                  t.$http.get("surrounding/car", {
                    latitude: n,
                    longitude: r
                  }).then((function(e) {
                    t.markers = t.markers.filter((function(t) {
                      return !t.isCarIcon
                    })), t.markers = t.markers.concat(e.data.map((function(t) {
                      return {
                        id: "carIcon",
                        latitude: t.latitude,
                        longitude: t.longitude,
                        width: 30,
                        height: 38,
                        iconPath: "https://img2.7mate.cn/car_" + t.carmodel_id + ".png",
                        isCarIcon: !0,
                        alpha: .5
                      }
                    })))
                  }))
                }))
              },
              clearAllTimeout: function() {
                void 0 !== this.interval && (clearInterval(this.interval), this.interval = void 0)
              }
            },
            onLoad: function(e) {
              var n = this,
                o = e.from,
                a = e.q,
                c = _(_(_(_(_({}, t.getSystemSetting()), t.getDeviceInfo()), t.getWindowInfo()), t.getAppBaseInfo()), t.getAppAuthorizeSetting());
              r.onLocationChange((function(t) {
                p = {
                  latitude: t.latitude,
                  longitude: t.longitude
                }, n.LOCATIONINFOISREADY = !0
              })), "cert1" != o && this.showPopup("home"), this.is_iphone_x = this.isIphoneX(this), this.bottom_safearea_height = c.screenHeight - c.safeArea.bottom, this.is_phone_init = !0, a && (a.indexOf("minibusrandnum") >= 0 ? this.goMiniBus(decodeURIComponent(a)) : this.scan(decodeURIComponent(a), !0))
            },
            onUnload: function() {
              this.clearAllTimeout()
            },
            onHide: function() {
              this.clearAllTimeout()
            },
            onShow: function() {
              var e = this;
              return (0, s.default)(a.default.mark((function n() {
                var o, c, i;
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      o = t.getMenuButtonBoundingClientRect(), c = o.height, i = o.top, e.topHeight = c + i, e.check_location_auth(), r.startLocationUpdate({
                        fail: function(e) {
                          console.log(e, "位置错误信息"), t.showModal({
                            title: "溫馨提示",
                            content: "获取位置失败，请检查手机是否已开启GPS",
                            confirmText: "知道了",
                            showCancel: !1
                          })
                        }
                      }), t.getPrivacySetting && setTimeout((function() {
                        t.getPrivacySetting({
                          success: function(e) {
                            var n = e.needAuthorization,
                              r = e.privacyContractName;
                            n && t.showModal({
                              title: "提示",
                              content: "您还未同意" + r + "，根据微信相关规定，请先同意" + r + "，否则将会影响您部分功能的使用",
                              confirmText: "前往查看",
                              success: function(e) {
                                e.confirm && t.navigateTo({
                                  url: "/pages/privacy/privacy"
                                })
                              }
                            })
                          }
                        })
                      }), 1e3), e.hideLoading(), e.loading = !1, e.interval = void 0, e.user_car_authority = void 0, e.logReport("BA3", "===系统缺少相关内核，进入老版本首页==="), e.getBanners(), e.getUserCarAuthority(), t.getStorageSync("token") ? e.$http.get("user").then((function(n) {
                        e.user = n.data, t.setStorageSync("openid", e.user.wechat_openid), console.log(e.user.wechat_openid, "openId"), e.getCurLocation()
                      })) : e.user = {};
                    case 13:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            computed: {
              haveFree: function() {
                return 99 != this.car.sort
              },
              carSort: function() {
                return {
                  1: "活动卡",
                  2: "天数卡",
                  3: "次数卡"
                } [this.car.sort]
              }
            },
            watch: {
              "user_car_authority.notice_code": function(t) {
                var e = this;
                clearInterval(h), 0 == t ? (this.getCarIcon(), h = setInterval((function() {
                  e.getCarIcon()
                }), 6e4)) : this.markers = this.markers.filter((function(t) {
                  return !t.isCarIcon
                }))
              },
              markers: function(t) {
                var e = this;
                clearTimeout(g), this.myMarkers = [], g = setTimeout((function() {
                  e.myMarkers = t
                }), 1e3)
              },
              LOCATIONINFOISREADY: function(t) {
                t && this.getParkingRanges()
              }
            }
          };
        e.default = k
      }).call(this, n("3223").default, n("df3c").default)
    }
  },
  [
    ["ac97", "common/runtime", "common/vendor"]
  ]
]);