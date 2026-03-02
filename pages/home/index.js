(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/home/index"], {
    1077: function(t, e, n) {
      n.r(e);
      var o = n("decf"),
        r = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      e.default = r.a
    },
    "29ba": function(t, e, n) {
      var o = n("3bbc");
      n.n(o).a
    },
    3781: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return r
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.banners.length && t.swiperIsLoad),
            n = e ? t.banners.length && t.swiperIsLoad && "bounceInDown" : null,
            o = t.rshyInfo.real_name.length >= 2 && t.rshyInfo.identity_number.length >= 18;
          t._isMounted || (t.e0 = function(e) {
            e.stopPropagation(), t.popup.show = !1
          }, t.e1 = function(e) {
            e.stopPropagation(), t.popup.show = !1
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
            e.stopPropagation(), t.imageInfo.show = !1
          }, t.e9 = function(e) {
            e.stopPropagation(), t.imageInfo.show = !1
          }, t.e10 = function(e) {
            e.stopPropagation(), t.rshyShow = !1
          }, t.e11 = function(e) {
            t.isDd = !1
          }, t.e12 = function(e) {
            t.useCarProgress = !1
          }, t.e13 = function(e) {
            t.showInput = !1
          }, t.e14 = function(e) {
            e.stopPropagation(), t.car = {}
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: n,
              g2: o
            }
          })
        },
        r = []
    },
    "3bbc": function(t, e, n) {},
    "762d": function(t, e, n) {
      n.r(e);
      var o = n("3781"),
        r = n("1077");
      for (var a in r)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(a);
      n("29ba");
      var c = n("828b"),
        i = Object(c.a)(r.default, o.b, o.c, !1, null, "b22a8ec0", null, !1, o.a, void 0);
      e.default = i.exports
    },
    decf: function(t, e, n) {
      (function(t, o) {
        var r = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = r(n("7eb4")),
          c = r(n("af34")),
          i = r(n("ee10")),
          s = r(n("7ca3")),
          u = n("d833"),
          l = n("8084"),
          d = r(n("65b7")),
          f = r(n("0429")),
          h = r(n("865e")),
          p = r(n("2100")),
          _ = r(n("b2d0")),
          g = n("8f59");

        function m(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function k(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? m(Object(n), !0).forEach((function(e) {
              (0, s.default)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        var w = !1,
          b = "",
          v = "",
          y = 0,
          I = {
            name: "home_index",
            components: {
              topOrder: function() {
                n.e("pages/home/components/topOrder").then(function() {
                  return resolve(n("a4c5"))
                }.bind(null, n)).catch(n.oe)
              },
              useCarAni: function() {
                n.e("pages/home/components/useCarAni").then(function() {
                  return resolve(n("f459"))
                }.bind(null, n)).catch(n.oe)
              },
              socketBtn: function() {
                n.e("pages/home/components/socketBtn").then(function() {
                  return resolve(n("2f91"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            mixins: [f.default],
            data: function() {
              return {
                mapInfo: {
                  longitude: 0,
                  latitude: 0,
                  polygons: [],
                  markers: [],
                  polyline: [],
                  parking: {}
                },
                locationInit: !1,
                popup: {
                  image_url: "",
                  h5_title: "",
                  action_type: "",
                  action_content: "",
                  appid: "",
                  remind_config: 0,
                  show: !1
                },
                toolsInfo: {
                  show: !1,
                  image_url: "",
                  type: 0
                },
                backCarErrorInfo: {
                  show: !1,
                  image_url: "",
                  type: 0
                },
                isMapDragEnd: !1,
                carCount: 0,
                car: {},
                user_car_authority: {
                  order: {},
                  unauthorized_code: -1
                },
                order: {},
                banners: [],
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
                yjsTime: 0,
                imageInfo: {
                  show: !1,
                  image_url: "",
                  text: ""
                },
                is_mandatory_return: !1,
                cycling: {},
                back_longitude: "",
                back_latitude: "",
                stopEvent: !1,
                swiperIsLoad: !1,
                yjsTimeout: null,
                showServiceModal: !1,
                showInput: 0,
                car_number: "",
                ls_show: !1,
                rc_show: !1,
                map: null,
                isNewHome: !0,
                isBannerNotShowSchoolId: !1,
                rshyShow: !1,
                rshyInfo: {
                  real_name: "",
                  identity_number: ""
                },
                isPass: !1,
                isDd: !1,
                markersId: 1,
                orderStateTimer: null,
                lockInfo: {
                  netStatus: -1,
                  lbStatus: 0
                },
                useCarProgress: !1,
                useCarProgressType: 1,
                carInfo: {
                  number: "--",
                  lock_id: ""
                },
                showRefresh: !0,
                banner2isShow: !1,
                getHealthTimer: null,
                healthMs: "未知",
                orderCreateIng: !1,
                orderCreateIngTimer: null,
                isTemporaryLockModal: !1
              }
            },
            computed: k(k({}, (0, g.mapState)({
              isSuccess: function(t) {
                return t.wss.isSuccess
              },
              isConnectTimeout: function(t) {
                return t.wss.isConnectTimeout
              },
              user: function(t) {
                return t.wss.userInfo
              }
            })), {}, {
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
            }),
            watch: {
              showInput: function(t) {
                var e = this;
                !1 === t && setTimeout((function() {
                  e.showInput = 0
                }), 500)
              },
              locationInit: function(t) {
                t && this.start()
              },
              isSuccess: function(t) {
                t && this.getUserCarAuthority("order_state")
              }
            },
            onReady: function() {
              var e = this;
              t.onLocationChange((function(t) {
                e.mapInfo.latitude = t.latitude, e.mapInfo.longitude = t.longitude, e.mapInfo.latitude && e.mapInfo.longitude && (e.locationInit = !0), e.mapInfo._longitude || e.mapInfo._latitude || (e.mapInfo._longitude = t.longitude, e.mapInfo._latitude = t.latitude)
              })), this.map = o.createMapContext("map")
            },
            onLoad: function(e) {
              var n = this,
                r = e.from,
                a = e.q;
              t.$on("getOrderInfo", (function(t) {
                var e = Date.now();
                console.log("====收到服务器主动推送的订单消息====", e), console.log("====总计耗时====", e - y), console.log(t);
                try {
                  n.$refs.socketBtn1.init(), n.$refs.socketBtn2.init()
                } catch (t) {}
                n.setOrderInfo(t)
              })), t.$on("lockState", (function(t) {
                console.log("====收到服务器主动推送的锁状态消息===="), console.log(t), n.setLockState(t)
              })), t.$on("orderCreate", (function() {
                console.log("====服务器收到下单消息===="), n.setStorageInfo("order_create", {
                  data: {
                    number: n.car.number,
                    time: Date.now()
                  }
                })
              })), t.$on("getBackCar", (function(t) {
                console.log("====收到服务器推送的还车消息====")
              })), t.$on("loginout", (function() {
                console.log("====401退出登录===="), n.$store.dispatch("wss/close"), n.user_car_authority.order = {}, n.user_car_authority.unauthorized_code = -1, n.banner2isShow = !1, n.$store.dispatch("wss/setUserInfo", {}), n.clearAllTimeout()
              })), o.showShareMenu({
                withShareTicket: !0
              }), b = r, v = a, a && (a.indexOf("minibusrandnum") >= 0 ? this.goMiniBus(decodeURIComponent(a)) : this.scan(decodeURIComponent(a), !0))
            },
            onUnload: function() {
              this.clearAllTimeout()
            },
            onHide: function() {
              _.default.orderBeforeLogList("屏幕息屏或者离开了首页：" + (0, l.formatTime)(new Date) + "，当前网速：" + this.healthMs + "ms"), this.showServiceModal = !1, this.clearAllTimeout()
            },
            onShow: function() {
              var t = this;
              return (0, i.default)(a.default.mark((function e() {
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      t.isNewHome || t.rendererror(), o.getStorageSync("token") ? (t.getStorageOrderInfo(), t.$http.get("user").then((function(e) {
                        e ? (t.$store.dispatch("wss/setUserInfo", e.data), t.getStorageOrderInfo(), t.getHealth(), t.getBanner2()) : t.$store.dispatch("wss/setUserInfo", {})
                      })).catch((function(e) {
                        t.$store.dispatch("wss/setUserInfo", {})
                      }))) : (t.user_car_authority.order = {}, t.user_car_authority.unauthorized_code = -1, t.banner2isShow = !1, t.$store.dispatch("wss/setUserInfo", {})), t.$store.dispatch("wss/getWssState").then((function(e) {
                        e.isSuccess && (-1 == t.user_car_authority.unauthorized_code || t.user_car_authority.order.order_id) ? (console.log("[Home] WebSocket已连接，获取用户车辆权限"), t.getUserCarAuthority("order_state")) : console.log("[Home] WebSocket未连接，App.vue应该已处理重连")
                      })).catch((function(t) {
                        console.log("[Home] 检查连接状态失败", t)
                      })), t.authorize(), _.default.orderBeforeLogList("屏幕亮起或者重新进入了首页：" + (0, l.formatTime)(new Date) + "，当前网速：" + t.healthMs + "ms"), o.getPrivacySetting && setTimeout((function() {
                        o.getPrivacySetting({
                          success: function(t) {
                            var e = t.needAuthorization,
                              n = t.privacyContractName;
                            e && o.showModal({
                              title: "提示",
                              content: "您还未同意" + n + "，根据微信相关规定，请先同意" + n + "，否则将会影响您部分功能的使用",
                              confirmText: "前往查看",
                              success: function(t) {
                                t.confirm && o.navigateTo({
                                  url: "/pages/privacy/privacy"
                                })
                              }
                            })
                          }
                        })
                      }), 1e3);
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            methods: {
              showUseCar: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this.useCarProgress = !0, this.useCarProgressType = t, this.car.number ? this.carInfo = this.car : this.carInfo = k(k({}, this.user_car_authority.order.car_number), {}, {
                  number: this.user_car_authority.order.car_number
                })
              },
              closeUseCar: function(t) {
                this.$refs.useCarAni && this.$refs.useCarAni.success(t)
              },
              getStorageOrderInfo: function() {
                if (this.user.id) {
                  var t = o.getStorageSync("user_car_authority") || {
                    order: {},
                    unauthorized_code: 0
                  };
                  0 !== t.unauthorized_code && (console.log("====缓存中取到订单信息===="), console.log(t), this.setOrderInfo({
                    data: t
                  }))
                }
              },
              send: function() {
                this.$sendAck("test", {
                  scene: {
                    type: 1
                  },
                  data: {
                    name: "test",
                    content: "你好"
                  }
                }).then((function(t) {
                  console.log("成功", t)
                })).catch((function(t) {
                  console.log("失败", t)
                }))
              },
              getHealth: function() {
                var t = this;
                clearTimeout(this.getHealthTimer), this.$http.getHealth(this.user.id, 3e3).then((function(e) {
                  var n, o, r, a = null !== (n = null == e || null === (o = e.data) || void 0 === o || null === (r = o.rtt_info) || void 0 === r ? void 0 : r.rtt_ms) && void 0 !== n ? n : "未知";
                  t.healthMs = "未知" != a ? Math.round(a) : a, t.healthMs >= 200 && _.default.healthLogList(t.healthMs), t.getHealthTimer = setTimeout((function() {
                    t.healthMs < 300 && !t.isSuccess && t.user.id && (console.log("====网络延迟小于300，但是socket未连接，尝试重连===="), t.$store.dispatch("wss/connect")), t.getHealth()
                  }), 5e3)
                })).catch((function(e) {
                  t.healthMs = 3e3, t.getHealthTimer = setTimeout((function() {
                    t.getHealth()
                  }), 5e3), t.healthMs >= 200 && _.default.healthLogList(t.healthMs)
                }))
              },
              updateOrder: function() {
                this.clearAllTimeout(), this.getUserCarAuthority("order_state")
              },
              getCarPosition: function() {
                this.setMyCarIcon()
              },
              openServiceModal: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t.showServiceModal = !t.showServiceModal;
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              isPassChange: function(t) {
                this.isPass = t.detail
              },
              gotoUseCarAgreement: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.$http.get("agreement/use_car");
                      case 2:
                        n = e.sent, t.gotoH5(n.data);
                      case 4:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              rendererror: function() {
                this.isNewHome = !1, o.redirectTo({
                  url: "/pages/home/index_old?q=" + v + "&from=" + b
                })
              },
              getUnlockRent: function(t, e) {
                var n = this;
                return (0, i.default)(a.default.mark((function o() {
                  return a.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.next = 2, n.$http.get("car/lp/rent?lock_no=" + t + "&keySource=" + e);
                      case 2:
                        return o.abrupt("return", o.sent);
                      case 3:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                })))()
              },
              swiperLoad: function() {
                this.swiperIsLoad = !0
              },
              emit: function(t) {
                var e = t.fn,
                  n = t.data;
                this[e](n)
              },
              regionchange: function(t) {
                var e = t.type,
                  n = t.target;
                t.causedBy, "begin" == e ? this.isMapDragEnd = !1 : "end" == e && n.centerLocation.latitude && n.centerLocation.longitude && (this.isMapDragEnd = !0, this.getCarCount({
                  latitude: n.centerLocation.latitude,
                  longitude: n.centerLocation.longitude
                }))
              },
              getCarCount: function(t) {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  var o, r;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        o = t.latitude, r = t.longitude, 6 != e.user_car_authority.unauthorized_code && o && r ? e.$http.get("new/surrounding/car", {
                          latitude: o,
                          longitude: r
                        }).then((function(t) {
                          e.carCount = 0;
                          var n = [];
                          if (t.data.danche)
                            for (var o in t.data) {
                              var r;
                              e.carCount += t.data[o].total, (r = n).push.apply(r, (0, c.default)(t.data[o].cars))
                            }
                          n = n.map((function(t) {
                            return k(k({}, t), {}, {
                              id: ~~(1e10 * Math.random()),
                              width: 30,
                              height: 38,
                              iconPath: "https://img2.7mate.cn/car_" + t.carmodel_id + ".png",
                              isCarIcon: 1,
                              zIndex: 3
                            })
                          })), e.mapInfo.markers = e.mapInfo.markers.filter((function(t) {
                            return !t.isCarIcon
                          })).filter((function(t) {
                            return !t.isMyCarIcon
                          })), e.mapInfo.markers = [].concat((0, c.default)(e.mapInfo.markers), (0, c.default)(n))
                        })) : (e.mapInfo.markers = e.mapInfo.markers.filter((function(t) {
                          return !t.isCarIcon
                        })), e.carCount = 0);
                      case 2:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              setMyCarIcon: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t.showLoading({
                          title: "寻车中..."
                        }), e.abrupt("return", new Promise(function() {
                          var e = (0, i.default)(a.default.mark((function e(n) {
                            var r, c;
                            return a.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  if (o.getStorageSync("token")) {
                                    e.next = 2;
                                    break
                                  }
                                  return e.abrupt("return", n());
                                case 2:
                                  return e.next = 5, t.getUserCarAuthority();
                                case 5:
                                  if (t.user_car_authority.order.car_number) {
                                    e.next = 8;
                                    break
                                  }
                                  return t.getCarCount({}), e.abrupt("return", n());
                                case 8:
                                  t.$sendAck("car_location", {
                                    data: {
                                      number: t.action_car.number || (null === (r = t.user_car_authority) || void 0 === r || null === (c = r.order) || void 0 === c ? void 0 : c.car_number)
                                    }
                                  }).then((function(e) {
                                    e.data.latitude && e.data.longitude && "0" != e.data.latitude && "0" != e.data.longitude ? (t.mapInfo.markers = t.mapInfo.markers.filter((function(t) {
                                      return !t.isMyCarIcon
                                    })), t.mapInfo.markers = t.mapInfo.markers.concat({
                                      id: ~~(1e10 * Math.random()),
                                      latitude: e.data.latitude,
                                      longitude: e.data.longitude,
                                      width: 160,
                                      height: 80,
                                      iconPath: "https://img2.7mate.cn/home_my_car_icon.png",
                                      isMyCarIcon: 1,
                                      zIndex: 1e3
                                    }), t.map.moveToLocation({
                                      latitude: e.data.latitude,
                                      longitude: e.data.longitude
                                    }), t.hideLoading(), t.getCarCount({}), n()) : o.showToast({
                                      title: "未获取到车辆定位",
                                      icon: "none"
                                    })
                                  })).catch((function(e) {
                                    t.hideLoading()
                                  }));
                                case 9:
                                case "end":
                                  return e.stop()
                              }
                            }), e)
                          })));
                          return function(t) {
                            return e.apply(this, arguments)
                          }
                        }()));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              authorize: function() {
                var e = this;
                t.authorize({
                  scope: "scope.userLocation",
                  success: function(n) {
                    t.startLocationUpdate(), e.getPosition()
                  },
                  fail: function(t) {
                    o.showModal({
                      title: "提示",
                      content: "获取位置权限失败，请点击右上角菜单，在设置中开启相关权限",
                      cancelText: "取消",
                      cancelColor: "#000000",
                      confirmText: "前往设置",
                      success: function(t) {
                        t.confirm && o.openSetting()
                      }
                    })
                  }
                })
              },
              authorizeBle: function() {
                var e = this;
                return new Promise((function(n, r) {
                  e.showLoading({
                    title: "获取蓝牙权限...",
                    icon: "loading",
                    mask: !0
                  });
                  var a = setTimeout((function() {
                    e.hideLoading(), o.showModal({
                      title: "提示",
                      content: "获取蓝牙权限超时",
                      showCancel: !1
                    }), r()
                  }), 5e3);
                  t.authorize({
                    scope: "scope.bluetooth",
                    success: function(t) {
                      n()
                    },
                    fail: function(t) {
                      o.showModal({
                        title: "提示",
                        content: "获取蓝牙权限失败，请点击右上角菜单，在设置中开启相关权限",
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "前往设置",
                        success: function(t) {
                          t.confirm && o.openSetting()
                        }
                      })
                    },
                    complete: function() {
                      clearTimeout(a)
                    }
                  })
                }))
              },
              goOtherWx: function(t) {
                o.navigateToMiniProgram({
                  appId: t.appid,
                  path: t.action_content,
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
                "buy" == e ? this.go("/pages/card/index?tab=" + (t.carmodel_id - 1)) : this.haveFree ? this.go("/pages/card/detail?id=" + t.user_card_id) : this.haveFree || this.go("/pages/rule/index?number=" + t.number)
              },
              backCarErrorModal: function(t, e) {
                if (3 != e) {
                  var n = ["https://img2.7mate.cn/back_car_a.png", "https://img2.7mate.cn/back_car_b.png", "https://img2.7mate.cn/back_car_c.png"];
                  this.backCarErrorInfo = {
                    image_url: void 0 === e ? n[this.backCarErrorInfo.type] : n[e],
                    type: void 0 === e ? this.backCarErrorInfo.type : e,
                    show: t
                  }, this.hideLoading()
                } else o.showToast({
                  title: "连接中，请稍等",
                  icon: "loading",
                  duration: 3e3
                })
              },
              toolsModal: function(t, e) {
                this.toolsInfo = {
                  image_url: ["https://img2.7mate.cn/toolsInfo00.png", "https://img2.7mate.cn/toolsInfo11.png", "https://img2.7mate.cn/toolsInfo00.png"][e],
                  type: e,
                  show: t
                }, this.hideLoading()
              },
              action: function(t) {
                "applet" == t.action_type ? this.goOtherWx(t) : this.gotoRoute(this, t)
              },
              setBannerNotShowSchoolId: function(t) {
                var e = this,
                  n = t.detail;
                this.isBannerNotShowSchoolId = n;
                var r = o.getStorageSync("storeBannerIdList") || [];
                n ? (r.push(this.popup.id), o.setStorageSync("storeBannerIdList", r)) : (r = r.filter((function(t) {
                  return t != e.popup.id
                })), o.setStorageSync("storeBannerIdList", r))
              },
              setStorageInfo: function(t, e) {
                o.setStorageSync(t, k(k({
                  id: this.user.id
                }, e), {}, {
                  time: Date.now()
                }))
              },
              getStorageInfo: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                  n = 6e4 * e,
                  r = o.getStorageSync(t) || {
                    id: 0,
                    data: {},
                    time: 0
                  },
                  a = Date.now();
                return a - r.time > n ? (o.removeStorageSync(t), !1) : r.data
              },
              showPopup: function(t) {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        n.t0 = t, n.next = "p" === n.t0 ? 3 : "type5_unlock" === n.t0 ? 5 : "type5_lock" === n.t0 ? 7 : "back_mode_1" === n.t0 ? 9 : "back_mode_2" === n.t0 ? 11 : "hagongdaModal" === n.t0 ? 13 : "zzs" === n.t0 ? 15 : "yjs_zd_hc" === n.t0 ? 17 : 19;
                        break;
                      case 3:
                        return e.popup.image_url = "https://img2.7mate.cn/p.gif", n.abrupt("break", 19);
                      case 5:
                        return e.popup.image_url = "https://img2.7mate.cn/type5_unlock_1.png", n.abrupt("break", 19);
                      case 7:
                        return e.popup.image_url = "https://img2.7mate.cn/type5_lock.png", n.abrupt("break", 19);
                      case 9:
                        return e.popup.image_url = "https://img2.7mate.cn/back_mode_1.png", n.abrupt("break", 19);
                      case 11:
                        return e.popup.image_url = "https://img2.7mate.cn/back_mode_2.png", n.abrupt("break", 19);
                      case 13:
                        return e.popup.image_url = "https://img2.7mate.cn/hagongda2.png", n.abrupt("break", 19);
                      case 15:
                        return e.popup.image_url = "https://img2.7mate.cn/zzs.png", n.abrupt("break", 19);
                      case 17:
                        return e.popup.image_url = "https://img2.7mate.cn/yjs_zd_hc.png", n.abrupt("break", 19);
                      case 19:
                        e.popup.show = !0;
                      case 20:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              mapTap: function(t) {
                this.mapInfo.parking = {}, this.mapInfo.polyline = [], this.showServiceModal = !1
              },
              markerTap: function(t) {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  var o;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!((o = t.markerId) >= 9e8)) {
                          n.next = 3;
                          break
                        }
                        return n.abrupt("return");
                      case 3:
                        if (!(o > 0)) {
                          n.next = 6;
                          break
                        }
                        return n.next = 6, e.getParking(o);
                      case 6:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getParking: function(t) {
                return (0, i.default)(a.default.mark((function t() {
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.abrupt("return");
                      case 3:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getCurLocation: function() {
                this.map.moveToLocation()
              },
              refresh: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t.showRefresh = !1, setTimeout((function() {
                          t.showRefresh = !0
                        }), 1e4), t.start(!0), t.$store.dispatch("wss/getWssState").then((function(e) {
                          e.isSuccess && t.getUserCarAuthority("order_state")
                        })).catch((function(t) {
                          console.log("[Home] 检查连接状态失败", t)
                        }));
                      case 4:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              scan1: function() {
                this.car_number = "", this.showInput = !0
              },
              scan1Action: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t.showLoading({
                          title: "加载中"
                        }), t.check_is_login(!1).then((function() {
                          return Promise.resolve()
                        })).then((0, i.default)(a.default.mark((function e() {
                          return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.getOrderAuthority(t.car_number, 2);
                              case 2:
                                if (e.sent) {
                                  e.next = 6;
                                  break
                                }
                                return t.showInput = !1, e.abrupt("return");
                              case 6:
                                t.showCar(t.car_number, (function() {
                                  t.hideLoading(), t.showInput = !1
                                }));
                              case 7:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        }))));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              goMiniBus: function(e) {
                var n = this,
                  r = this.getQueryVariable(e, "minibusrandnum");
                this.check_is_login(!1).then((function(e) {
                  n.$http.get("minibus/" + r).then((function(e) {
                    200 != e.status_code ? o.showToast({
                      title: e.message,
                      icon: "none"
                    }) : t.navigateTo({
                      url: "/pages/minibus/index?number=" + r
                    })
                  }))
                }))
              },
              scan: function(t, e) {
                var n = this;
                return (0, i.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        n.showLoading({
                          title: "加载中"
                        }), c = null, n.check_is_login(!1).then((function(o) {
                          return t && e ? Promise.resolve({
                            result: t
                          }) : (p.default.inSystemPage = !0, n.scanAction())
                        })).then((function(t) {
                          return t.result.indexOf("minibusrandnum") >= 0 ? (n.hideLoading(), n.goMiniBus(t.result), Promise.reject()) : (c = t, Promise.resolve())
                        })).then((0, i.default)(a.default.mark((function t() {
                          var e, r;
                          return a.default.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n.showLoading({
                                  title: "加载中"
                                }), (e = n.getQueryVariable(c.result, "code")) && o.navigateTo({
                                  url: "/pages/seat/index?code=" + e
                                }), r = encodeURIComponent(c.result), t.next = 6, n.getOrderAuthority(r);
                              case 6:
                                if (t.sent) {
                                  t.next = 9;
                                  break
                                }
                                return t.abrupt("return");
                              case 9:
                                n.showCar(r);
                              case 10:
                              case "end":
                                return t.stop()
                            }
                          }), t)
                        }))));
                      case 3:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              showCar: function(t, e) {
                var n = this;
                return (0, i.default)(a.default.mark((function r() {
                  var c, i, s, u, f, h, p, g, m;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return _.default.removeOrderBeforeLogList(), c = decodeURIComponent(t), i = n.getQueryVariable(c, "randnum") || t, _.default.orderBeforeLogList("用户端开始获取车辆" + i + "信息：" + (0, l.formatTime)(new Date) + "，当前网速：" + n.healthMs + "ms"), r.next = 6, n.$http.get("car/" + t).catch((function(t) {
                          return {
                            status_code: 255,
                            data: {},
                            message: "超时请重试"
                          }
                        }));
                      case 6:
                        if (s = r.sent, n.user.created_at) {
                          r.next = 13;
                          break
                        }
                        return r.next = 10, n.$http.get("user");
                      case 10:
                        u = r.sent, f = u.data, n.$store.dispatch("wss/setUserInfo", f);
                      case 13:
                        if (n.isPass = !1, n.hideLoading(), "{}" === JSON.stringify(s.data)) {
                          r.next = 44;
                          break
                        }
                        if (_.default.orderBeforeLogList("用户端获取车辆" + i + "信息完成：" + (0, l.formatTime)(new Date) + "，当前网速：" + n.healthMs + "ms"), h = new Date("2025/08/25 00:00:00").getTime(), p = new Date("2025/08/23 00:00:00").getTime(), g = n.user.created_at || n.user.register_time, m = new Date(g.replace(/\-/g, "/")).getTime(), n.user.school_id || 112 != s.data.school_id && 105 != s.data.school_id && 96 != s.data.school_id && 10 != s.data.school_id && 42 != s.data.school_id) {
                          r.next = 25;
                          break
                        }
                        o.showModal({
                          title: "7MA出行认证提示",
                          content: "您还未进行实名认证，请先完成实名认证",
                          cancelText: "再看看",
                          confirmText: "去认证",
                          success: function(t) {
                            t.confirm && n.go("/pages/cert/cert1")
                          }
                        }), r.next = 42;
                        break;
                      case 25:
                        if (59 != s.data.school_id || n.user.school_id || !(m > h)) {
                          r.next = 29;
                          break
                        }
                        o.showModal({
                          title: "7MA出行认证提示",
                          content: "您还未进行实名认证，请先完成实名认证",
                          cancelText: "再看看",
                          confirmText: "去认证",
                          success: function(t) {
                            t.confirm && n.go("/pages/cert/cert1")
                          }
                        }), r.next = 42;
                        break;
                      case 29:
                        if (97 != s.data.school_id || n.user.school_id || !(m > h)) {
                          r.next = 33;
                          break
                        }
                        o.showModal({
                          title: "7MA出行认证提示",
                          content: "您还未进行实名认证，请先完成实名认证",
                          cancelText: "再看看",
                          confirmText: "去认证",
                          success: function(t) {
                            t.confirm && n.go("/pages/cert/cert1")
                          }
                        }), r.next = 42;
                        break;
                      case 33:
                        if (console.log(n.user.show_exam, n.user.exam_flag, m > p), !(n.user.show_exam && 1 != n.user.exam_flag && m > p)) {
                          r.next = 37;
                          break
                        }
                        return o.showModal({
                          title: "7MA出行温馨提示",
                          content: "您还未完成行骑行考试，请先完成骑行考试",
                          cancelText: "再看看",
                          confirmText: "去考试",
                          success: function(t) {
                            t.confirm && n.go("/pages/qxjz/index?userName=" + n.user.name)
                          }
                        }), r.abrupt("return");
                      case 37:
                        n.car = s.data, n.getQueryVariable(c, "randnum") ? n.car.isScan = 1 : n.car.isScan = 0, n.car.train.has_train && d.default.alert({
                          title: "新生骑行培训通知",
                          message: n.car.train.notice,
                          messageAlign: "left",
                          confirmButtonText: "我了解了"
                        }).then((function() {})), 5 != n.car.lock_id && 6 != n.car.lock_id || n.showPopup("type5_unlock"), n.isXha();
                      case 42:
                        r.next = 48;
                        break;
                      case 44:
                        if (void 0 === s.status_code || 200 === s.status_code) {
                          r.next = 48;
                          break
                        }
                        return _.default.orderBeforeLogList("用户端获取车辆" + t + "信息失败：" + (0, l.formatTime)(new Date) + "，当前网速：" + n.healthMs + "ms，原因：" + s.message), o.showModal({
                          title: "提示",
                          content: s.message,
                          showCancel: !1,
                          success: function(t) {}
                        }), r.abrupt("return");
                      case 48:
                        e && e();
                      case 49:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              isXha: function() {
                54 == this.user.school_id && 102 == this.car.school_id || 113 == this.car.school_id || (this.car.haida_xha_school_id.indexOf(String(this.car.school_id)) >= 0 && this.car.haida_laoshan_school_id.indexOf(String(this.user.school_id)) >= 0 ? this.ls_show = !0 : this.user.school_id > 0 && this.user.school_id != this.car.school_id && (this.rc_show = !0))
              },
              getOrderAuthority: function(e, n) {
                var r = this;
                return (0, i.default)(a.default.mark((function n() {
                  var c;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, r.$http.get("order/authority?car_number=" + e, {
                          longitude: r.mapInfo.longitude,
                          latitude: r.mapInfo.latitude
                        });
                      case 2:
                        if (200 != (c = n.sent).status_code) {
                          n.next = 27;
                          break
                        }
                        if (r.hideLoading(), 0 !== c.data.code) {
                          n.next = 9;
                          break
                        }
                        return n.abrupt("return", !0);
                      case 9:
                        if (3 !== c.data.code) {
                          n.next = 16;
                          break
                        }
                        return r.imageInfo.image_url = "https://img2.7mate.cn/notice_modal.png", r.imageInfo.text = c.message, r.imageInfo.show = !0, n.abrupt("return", !1);
                      case 16:
                        if (!c.data.code) {
                          n.next = 23;
                          break
                        }
                        return r.imageInfo.image_url = "https://img2.7mate.cn/modal_icon_" + c.data.code + ".png", r.imageInfo.text = c.message, r.imageInfo.show = !0, n.abrupt("return", !1);
                      case 23:
                        return t.showModal({
                          title: "提示",
                          content: "未获取到相关信息",
                          showCancel: !1,
                          success: function(t) {}
                        }), n.abrupt("return", !1);
                      case 25:
                        n.next = 29;
                        break;
                      case 27:
                        return o.showToast({
                          title: c.message,
                          icon: "none"
                        }), n.abrupt("return", !1);
                      case 29:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              scanAction: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t, e.abrupt("return", new Promise(function() {
                          var t = (0, i.default)(a.default.mark((function t(e, r) {
                            return a.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  o.scanCode({
                                    onlyFromCamera: !1,
                                    scanType: "qrCode",
                                    success: function() {
                                      var t = (0, i.default)(a.default.mark((function t(n) {
                                        return a.default.wrap((function(t) {
                                          for (;;) switch (t.prev = t.next) {
                                            case 0:
                                              e(n);
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
                                      n.hideLoading(), r()
                                    }
                                  });
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
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              rlsb: function() {
                var t = this,
                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = e.real_name,
                  r = e.identity_number;
                return new Promise((function(e, a) {
                  o.startFacialRecognitionVerify({
                    name: n || t.user.face_recognition.real_name,
                    idCardNumber: r || t.user.face_recognition.identity_number,
                    success: function(t) {
                      e()
                    },
                    fail: function(t) {
                      var n = t.errCode,
                        r = t.errMsg;
                      n ? (o.showToast({
                        title: r.replace(/startFacialRecognitionVerify:fail /, ""),
                        icon: "none"
                      }), a()) : e()
                    }
                  })
                }))
              },
              rshy: function() {
                var t = this;
                this.rlsb({
                  real_name: this.rshyInfo.real_name,
                  identity_number: this.rshyInfo.identity_number
                }).then((function() {
                  t.$http.post("facerecognitions", {
                    real_name: t.rshyInfo.real_name,
                    identity_number: t.rshyInfo.identity_number
                  }).then((function(e) {
                    var n = e.status_code,
                      r = e.message;
                    200 == n ? (t.rshyShow = !1, t.useCar()) : o.showToast({
                      title: r,
                      icon: "none"
                    })
                  }))
                }))
              },
              submitRshy: function() {
                var t = this;
                this.car.cycling_order_face_recognition && !this.isPass ? o.showToast({
                  title: "请先阅读并同意《用户协议》",
                  icon: "none"
                }) : !this.car.cycling_order_face_recognition || this.user.face_recognition.real_name || this.user.face_recognition.identity_number ? this.car.cycling_order_face_recognition ? this.rlsb().then((function() {
                  t.useCar()
                })) : this.useCar() : this.rshyShow = !0
              },
              carDd: function(t) {
                this.isDd = t
              },
              rlsbHd: function() {
                var t = this;
                this.rlsb().then((function() {
                  t.$http.post("facerecognitionspoweron", {
                    number: t.car.number || t.user_car_authority.order.car_number
                  }).then((function(e) {
                    var n = e.status_code,
                      r = e.message;
                    200 == n ? (o.showToast({
                      title: "供电成功",
                      icon: "success",
                      duration: 3e3,
                      mask: !0
                    }), setTimeout((function() {
                      t.carDd(!1)
                    }), 3e3)) : o.showToast({
                      title: r,
                      icon: "error"
                    })
                  }))
                }))
              },
              useCar: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n, r, c, s, u, d;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (s = function() {
                            return new Promise((function(t, e) {
                              o.requestSubscribeMessage({
                                tmplIds: c,
                                complete: function() {
                                  var e = (0, i.default)(a.default.mark((function e(n) {
                                    return a.default.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                        case 0:
                                          t();
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
                              })
                            }))
                          }, r = function() {
                            return new Promise((function(t, e) {
                              o.showModal({
                                title: "7MA出行温馨提示",
                                content: "骑行共享电动车之前请佩戴好安全头盔，安全骑行，从“头”做起。",
                                cancelText: "未佩戴",
                                confirmText: "已佩戴",
                                success: function(e) {
                                  e.confirm ? t() : e.cancel && o.showToast({
                                    title: "请先佩戴头盔",
                                    icon: "none"
                                  })
                                }
                              })
                            }))
                          }, t.isSuccess) {
                          e.next = 5;
                          break
                        }
                        return o.showModal({
                          title: "提示",
                          content: "未连接到服务器，请重新连接",
                          showCancel: !1,
                          confirmText: "重连",
                          success: function(e) {
                            e.confirm && t.$store.dispatch("wss/getWssState").then((function(e) {
                              e.isSuccess ? console.log("[Home] WebSocket已连接，无需重复连接") : (console.log("[Home] 用户确认重连WebSocket"), t.$store.dispatch("wss/connect"))
                            })).catch((function(e) {
                              console.log("[Home] 检查连接状态失败，尝试重连", e), t.$store.dispatch("wss/connect")
                            }))
                          }
                        }), e.abrupt("return");
                      case 5:
                        if (t.showLoading({
                            title: "下单中",
                            icon: "loading",
                            mask: !0
                          }), !(n = t.getStorageInfo("order_create", 1)) || n.number != t.car.number) {
                          e.next = 12;
                          break
                        }
                        return _.default.orderBeforeLogList("用户端下单提示：服务器正在处理订单信息，请稍后重试。当前网速：" + t.healthMs + "ms"), o.showModal({
                          title: "提示",
                          content: "服务器正在处理订单信息，请稍后重试",
                          success: function(e) {
                            t.getUserCarAuthority("order_state")
                          }
                        }), t.hideLoading(), e.abrupt("return");
                      case 12:
                        return e.next = 14, t.authorizeBle();
                      case 14:
                        return e.next = 16, t.check_location_auth();
                      case 16:
                        if (1 !== t.car.remind_helmet) {
                          e.next = 19;
                          break
                        }
                        return e.next = 19, r();
                      case 19:
                        return c = ["iF_TlQQVjke0iJuGOEEf94cVBTDo5GzGOy7uCONb07k"], (t.car.moveless_remind || t.car.forceback_remind) && c.push("tJrtXg_rAUSiRhFjJSK7cjQJlAUUQKDhYflMSOYDzoA"), e.next = 23, s();
                      case 23:
                        if (u = function() {
                            return new Promise((function(e, n) {
                              t.openBluetoothAdapter().then((function() {
                                t.getLockState(t, k(k({}, t.car), {}, {
                                  mac: t.car.lock_mac
                                })).then((function(t) {
                                  "00" === t.code && 0 === t.result ? e(1) : e(2)
                                })).catch((function(t) {
                                  e(0)
                                }))
                              })).catch((function(e) {
                                t.hideLoading()
                              }))
                            }))
                          }, d = "", !t.car.get_yunjia_lock_status) {
                          e.next = 29;
                          break
                        }
                        return e.next = 28, u();
                      case 28:
                        d = e.sent;
                      case 29:
                        t.openBluetoothAdapter().then((0, i.default)(a.default.mark((function e() {
                          var n, r;
                          return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showLoading({
                                  title: "下单中",
                                  icon: "loading",
                                  mask: !0
                                }), t.orderCreateIng || (t.orderCreateIng = !0, clearTimeout(t.orderCreateIngTimer), t.orderCreateIngTimer = setTimeout((function() {
                                  t.getUserCarAuthority("order_state"), t.orderCreateIng = !1
                                }), 23e3)), n = new Date, _.default.orderBeforeLogList("用户端下单时间：" + (0, l.formatTime)(n) + "，车编号：" + t.car.number + "，当前网速：" + t.healthMs + "ms"), e.next = 6, t.$sendAck("order_create", {
                                  scene: {
                                    fn: "order_create",
                                    showMessage: !1
                                  },
                                  data: {
                                    order_type: 1,
                                    car_number: t.car.number,
                                    longitude: t.mapInfo.longitude,
                                    latitude: t.mapInfo.latitude,
                                    isScan: t.car.isScan,
                                    yunjia_lock_status: d
                                  },
                                  timeout: 3e5
                                }).catch((function(e) {
                                  return "timeout" != e && (t.hideLoading(), e)
                                }));
                              case 6:
                                if (r = e.sent) {
                                  e.next = 9;
                                  break
                                }
                                return e.abrupt("return");
                              case 9:
                                o.removeStorageSync("order_create"), _.default.removeLogList(), t.order = r.data, 200 === r.status_code ? (_.default.orderBeforeLogList("用户端下单成功：" + (0, l.formatTime)(new Date) + "，车编号：" + t.car.number + "，当前网速：" + t.healthMs + "ms"), t.hideLoading(), clearTimeout(t.orderStateTimer), t.showUseCar(1), t.orderUnlock()) : (_.default.orderBeforeLogList("用户端下单失败：" + (0, l.formatTime)(n) + "，当前网速：" + t.healthMs + "ms，失败原因：" + r.message !== void 0 ? r.message : "下单失败，请稍后重试"), o.showToast({
                                  title: void 0 !== r.message ? r.message : "下单失败，请稍后重试",
                                  icon: "none"
                                })), t.orderCreateIng = !1;
                              case 14:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        })))).catch((function() {
                          t.hideLoading()
                        }));
                      case 30:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              orderUnlock: function(t) {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (e.lockInfo.netStatus = -1, e.lockInfo.lbStatus = 0, e.action_car = k(k({}, e.car), {}, {
                            order_sn: e.order.order_sn,
                            order_id: e.order.order_id,
                            mac: e.car.lock_mac
                          }), 1 != e.lockInfo.netStatus || t) {
                          n.next = 6;
                          break
                        }
                        return e.logReport("BA3", "===下单后锁已被网络打开，取消蓝牙逻辑===", 1), n.abrupt("return");
                      case 6:
                        e.unlock(e, e.action_car).then(function() {
                          var t = (0, i.default)(a.default.mark((function t(n) {
                            return a.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  e.end(e, e.action_car), ("00" === n.code && 1 === n.result ? 1 : 0) ? (e.lockInfo.lbStatus = 1, setTimeout((function() {
                                    5 === e.action_car.lock_id ? e.showPopup("type5_lock") : 11 == e.action_car.lock_id && 1 == e.action_car.carmodel_id ? e.showPopup("zzs") : e.action_car.yunjia_close_car_autoback ? e.showPopup("yjs_zd_hc") : 1 === e.action_car.back_car_mode ? e.showPopup("back_mode_1") : 2 === e.action_car.back_car_mode && e.showPopup("back_mode_2")
                                  }), 1e3), (2 == e.lockInfo.netStatus || e.lockInfo.netStatus < 0) && e.unlockSuccess(), e.car_notification(1, 1, "", "蓝牙开锁成功")) : (e.lockInfo.lbStatus = 2, 2 === e.action_car.carmodel_id || 13 === e.action_car.lock_id || 14 === e.action_car.lock_id || 11 === e.action_car.lock_id ? (_.default.orderBeforeLogList("蓝牙超时或者锁被网络打开：" + (0, l.formatTime)(new Date) + "，当前网速：" + e.healthMs + "ms"), e.lockInfo.netStatus > 1 && (o.showToast({
                                    title: 2 == e.lockInfo.netStatus ? "开锁失败" : "车辆离线",
                                    icon: "error"
                                  }), e.car_notification(1, 2, "", "蓝牙开锁失败[" + e.lockInfo.netStatus == 2 ? "开锁失败" : "车辆离线]"))) : ((2 == e.lockInfo.netStatus || e.lockInfo.netStatus < 0) && 0 == e.user_car_authority.unauthorized_code && e.closeUseCar({
                                    title: "蓝牙开锁失败",
                                    icon: "none"
                                  }), e.car_notification(1, 3, "", "蓝牙开锁失败"))), e.showUnlock();
                                case 4:
                                case "end":
                                  return t.stop()
                              }
                            }), t)
                          })));
                          return function(e) {
                            return t.apply(this, arguments)
                          }
                        }()).catch(function() {
                          var t = (0, i.default)(a.default.mark((function t(n) {
                            return a.default.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  e.lockInfo.lbStatus = 2, (2 == e.lockInfo.netStatus || e.lockInfo.netStatus < 0) && 0 == e.user_car_authority.unauthorized_code && e.closeUseCar({
                                    title: "蓝牙开锁失败",
                                    icon: "none"
                                  }), 2 === e.action_car.carmodel_id || 13 === e.action_car.lock_id || 14 === e.action_car.lock_id || 11 === e.action_car.lock_id ? (_.default.orderBeforeLogList("蓝牙超时或者锁被网络打开：" + (0, l.formatTime)(new Date) + "，当前网速：" + e.healthMs + "ms"), 2 == e.lockInfo.netStatus && e.car_notification(1, 2, "", "蓝牙开锁失败[离线]")) : (e.closeUseCar(), e.end(e, e.action_car), parseInt(n.code) >= 1e3 && parseInt(n.code) <= 1004 || 1011 === parseInt(n.code) || 1012 === parseInt(n.code) ? e.car_notification(1, 2, "", "蓝牙开锁失败" + (void 0 !== n.remark ? "[" + n.remark + "]" : "")) : parseInt(n.code) >= 1005 && parseInt(n.code) <= 1008 && e.car_notification(1, 3, "", "蓝牙开锁失败" + (void 0 !== n.remark ? "[" + n.remark + "]" : ""))), e.showUnlock();
                                case 4:
                                case "end":
                                  return t.stop()
                              }
                            }), t)
                          })));
                          return function(e) {
                            return t.apply(this, arguments)
                          }
                        }()), 2 !== e.action_car.carmodel_id && 13 !== e.action_car.lock_id && 14 !== e.action_car.lock_id && 11 !== e.action_car.lock_id || 1 == t && (e.lockInfo.netStatus = 0, e.networkUnlockCar(e.mapInfo));
                      case 8:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              socketBtnGetOrder: function(t) {
                this.getUserCarAuthority("order_state")
              },
              socketBtnGetOrderInfo: function(t) {
                this.setOrderInfo({
                  data: t
                })
              },
              getUserCarAuthority: function(t) {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  var o;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (o = Date.now(), y = o, "order_state" != t) {
                          n.next = 6;
                          break
                        }
                        return console.log("====开始发送全局订单信息====", y), e.$sendAck("order_state", {
                          data: {},
                          scene: {
                            type: "order_state"
                          }
                        }), n.abrupt("return");
                      case 6:
                        return console.log("====开始获取订单信息===="), n.abrupt("return", e.$sendAck("order_state", {
                          data: {}
                        }).then((function(n) {
                          return console.log("====成功通过长链接获取到订单信息===="), console.log("总耗时", (Date.now() - o) / 1e3, "秒"), e.setOrderInfo(n, t)
                        })).catch((function(t) {})));
                      case 8:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              submitOrderBeforeLogList: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        (n = o.getStorageSync("orderBeforeLogList") || []).length && t.$http.post("log", {
                          logList: JSON.stringify(n)
                        }).then((function(t) {
                          _.default.removeOrderBeforeLogList()
                        }));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              setOrderInfo: function(t, e) {
                var n = this;
                clearTimeout(this.orderStateTimer);
                var r = t.data,
                  c = t.data.order;
                this.user_car_authority = r, o.setStorageSync("user_car_authority", r), c.is_power_off ? this.carDd(!0) : this.carDd(!1), c.order_id ? (this.car = {}, w = r.unauthorized_code >= 7, 6 == r.unauthorized_code ? (this.submitOrderBeforeLogList(), this.closeUseCar(), c.lock_id, 0 !== this.is_mandatory_return && 1 !== this.is_mandatory_return && 999 != r.unauthorized_code && this.$http.get("school/show/" + c.car_school_id).then((function(t) {
                  200 == t.status_code ? n.is_mandatory_return = t.data.is_mandatory_return : o.showToast({
                    title: t.message,
                    icon: "none"
                  })
                }))) : (this.toolsModal(!1), this.closeUseCar())) : (w = !1, this.mapInfo.markers = this.mapInfo.markers.filter((function(t) {
                  return !t.isMyCarIcon
                })), this.closeUseCar());
                var s = "";
                if (0 === r.notice_code || (1 === r.notice_code ? s = "您还未登录" : 2 === r.notice_code || (3 === r.notice_code ? s = "您处于认证中" : 4 === r.notice_code ? s = "您认证未通过" : 5 === r.notice_code ? s = "您还未充值或购买套餐卡" : 6 === r.notice_code ? s = "您有进行中的行程" : 7 === r.notice_code ? s = "您有待支付的行程" : 8 === r.notice_code ? s = "您有待支付的调度费" : 9 === r.notice_code && (s = "您有待支付的赔偿费"))), void 0 !== e && "" !== s && 0 !== r.unauthorized_code) return o.showToast({
                  title: s,
                  icon: "none"
                }), new Promise(function() {
                  var t = (0, i.default)(a.default.mark((function t(e, n) {
                    return a.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          r && 0 === r.unauthorized_code ? e() : n();
                        case 1:
                        case "end":
                          return t.stop()
                      }
                    }), t)
                  })));
                  return function(e, n) {
                    return t.apply(this, arguments)
                  }
                }())
              },
              gotoBackCarError: function() {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        e.check_is_login().then((0, i.default)(a.default.mark((function n() {
                          return a.default.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, e.getCurrentCycling();
                              case 2:
                                n.sent, e.cycling.order_id ? t.navigateTo({
                                  url: "/pages/feedBackList/feedBackList?car_number=" + e.cycling.car_number + "&carmodel_id=" + e.cycling.carmodel_id
                                }) : t.navigateTo({
                                  url: "/pages/feedBackList/feedBackList"
                                });
                              case 4:
                              case "end":
                                return n.stop()
                            }
                          }), n)
                        }))));
                      case 1:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              contact_service: function() {
                var e = this;
                this.check_is_login().then((0, i.default)(a.default.mark((function n() {
                  var r;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, e.getCurrentCycling();
                      case 2:
                        if (void 0 === (r = n.sent).status_code || 200 === r.status_code) {
                          n.next = 6;
                          break
                        }
                        return o.showToast({
                          title: r.message,
                          icon: "none"
                        }), n.abrupt("return");
                      case 6:
                        if (!e.cycling.order_id) {
                          n.next = 10;
                          break
                        }
                        t.navigateTo({
                          url: "/pages/service/backCarError?car_number=" + e.cycling.car_number + "&carmodel_id=" + e.cycling.carmodel_id
                        }), n.next = 13;
                        break;
                      case 10:
                        return o.showToast({
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
              goTsyJy: function() {
                var t = this;
                this.check_is_login().then((function() {
                  t.go("/pages/complaintAndSuggests/complaintAndSuggests")
                }))
              },
              gotoBikeBad: function() {
                this.check_is_login().then((function() {
                  t.navigateTo({
                    url: "/pages/service/bikeBad"
                  })
                }))
              },
              gotoService: function() {
                t.navigateTo({
                  url: "/pages/service/index"
                })
              },
              getCurrentCycling: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.$http.get("order/cycling");
                      case 2:
                        return n = e.sent, "{}" !== JSON.stringify(n.data) ? t.cycling = n.data : t.cycling = {}, e.abrupt("return", n);
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              gotoPayment: function() {
                var e = this.user_car_authority.order.order_id,
                  n = this.user_car_authority.order.order_amount;
                7 == this.user_car_authority.unauthorized_code ? t.navigateTo({
                  url: "/pages/payment/index?order_id=" + e + "&order_type=1&price=" + n + "&created_at=" + this.user_car_authority.order.created_at
                }) : 10 == this.user_car_authority.unauthorized_code ? t.navigateTo({
                  url: "/pages/payment/index?order_id=" + this.user_car_authority.order.id + "&order_type=2&price=" + this.user_car_authority.order.order_amount + "&card_type=" + this.user_car_authority.order.carmodel_id + "&created_at=" + this.user_car_authority.order.created_at + "&has_stock=1&card_code=" + this.user_car_authority.order.card_code
                }) : t.navigateTo({
                  url: "/pages/order/other?type=" + (8 == this.user_car_authority.unauthorized_code ? 1 : 2)
                })
              },
              logReport: function(t) {
                var e = arguments,
                  n = this;
                return (0, i.default)(a.default.mark((function o() {
                  var r, c, i;
                  return a.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        if (r = e.length > 1 && void 0 !== e[1] ? e[1] : "", c = e.length > 2 ? e[2] : void 0, "BA3" != t || c) {
                          o.next = 4;
                          break
                        }
                        return o.abrupt("return");
                      case 4:
                        i = (new Date).getTime(), r.indexOf("===") > -1 && (r = r + " " + i), n.$send("order_logs", {
                          scene: {
                            notFn: 1
                          },
                          data: {
                            content: r,
                            time: i,
                            event: t,
                            longitude: n.mapInfo.longitude,
                            latitude: n.mapInfo.latitude
                          }
                        });
                      case 7:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                })))()
              },
              check_is_in_parking: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new Promise(function() {
                          var e = (0, i.default)(a.default.mark((function e(n) {
                            return a.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  return e.abrupt("return", t.getPosition().then(function() {
                                    var e = (0, i.default)(a.default.mark((function e(r) {
                                      var c, s, u, l, d, f, p;
                                      return a.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return t.back_longitude = r.longitude, t.back_latitude = r.latitude, u = "", 2 === t.action_car.carmodel_id || 12 === t.action_car.lock_id || 13 === t.action_car.lock_id ? console.log("开始判断中控位置是否在电子围栏...") : 1 === t.action_car.carmodel_id && console.log("开始判断手机位置是否在电子围栏..."), e.next = 7, t.$sendAck("car_location", {
                                              data: {
                                                number: t.action_car.number || (null === (c = t.user_car_authority) || void 0 === c || null === (s = c.order) || void 0 === s ? void 0 : s.car_number),
                                                longitude: r.longitude,
                                                latitude: r.latitude
                                              },
                                              timeout: 2e4
                                            }).catch((function(t) {
                                              return {
                                                data: {
                                                  longitude: 0,
                                                  latitude: 0
                                                }
                                              }
                                            }));
                                          case 7:
                                            if (l = e.sent, (d = l.data).longitude && d.latitude && (u = d.longitude + "," + d.latitude), 14 != t.action_car.lock_id) {
                                              e.next = 14;
                                              break
                                            }
                                            t.getLockState(t, t.action_car).then(function() {
                                              var e = (0, i.default)(a.default.mark((function e(o) {
                                                var c, i;
                                                return a.default.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                      if ("00" !== o.code || 0 !== o.result) {
                                                        e.next = 8;
                                                        break
                                                      }
                                                      return e.next = 3, t.$sendAck("in_fences", {
                                                        data: {
                                                          points: u + "|" + r.longitude + "," + r.latitude,
                                                          back_type: (0, h.default)(t.action_car.order_sn + ":back_type:2"),
                                                          latitude: t.back_latitude || r.latitude,
                                                          longitude: t.back_longitude || r.longitude,
                                                          lock_status: (0, h.default)(t.action_car.order_sn + ":lock_status:1"),
                                                          action_type: (0, h.default)(t.action_car.order_sn + ":action_type:3"),
                                                          yunjia_in_fence: 1
                                                        },
                                                        timeout: 2e4
                                                      }).catch((function(t) {
                                                        n(-2)
                                                      }));
                                                    case 3:
                                                      c = e.sent, (i = c.data).in_fences > 0 ? 1 === i.in_fences ? (console.log("锁gps在电子围栏"), n(2)) : 2 === i.in_fences && (console.log("手机gps在电子围栏"), n(1)) : (console.log("不在电子围栏"), n(0)), e.next = 13;
                                                      break;
                                                    case 8:
                                                      t.backCarErrorModal(!0, 0), t.logReport("BA3", "===锁状态：开==="), t.logReport("BA3", "===开始上报还车失败==="), t.car_notification(3, 5, "", "还车失败"), n(-1);
                                                    case 13:
                                                      t.end(t, t.action_car), t.closeBluetoothAdapter(t, t.action_car);
                                                    case 15:
                                                    case "end":
                                                      return e.stop()
                                                  }
                                                }), e)
                                              })));
                                              return function(t) {
                                                return e.apply(this, arguments)
                                              }
                                            }()).catch(function() {
                                              var e = (0, i.default)(a.default.mark((function e(o) {
                                                var c, i, s;
                                                return a.default.wrap((function(e) {
                                                  for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                      return t.logReport("BA3", "===网络获取锁状态==="), e.next = 3, t.$http.get("car/" + t.action_car.number + "/lockStatus");
                                                    case 3:
                                                      if (void 0 === (c = e.sent).data || 0 != c.data.lockStatus) {
                                                        e.next = 13;
                                                        break
                                                      }
                                                      return t.logReport("BA3", "===网络获取锁状态结果：关==="), e.next = 8, t.$sendAck("in_fences", {
                                                        data: {
                                                          points: u + "|" + r.longitude + "," + r.latitude,
                                                          back_type: (0, h.default)(t.action_car.order_sn + ":back_type:2"),
                                                          latitude: t.back_latitude || r.latitude,
                                                          longitude: t.back_longitude || r.longitude,
                                                          lock_status: (0, h.default)(t.action_car.order_sn + ":lock_status:1"),
                                                          action_type: (0, h.default)(t.action_car.order_sn + ":action_type:3"),
                                                          yunjia_in_fence: 1
                                                        },
                                                        timeout: 2e4
                                                      }).catch((function(t) {
                                                        n(-2)
                                                      }));
                                                    case 8:
                                                      i = e.sent, (s = i.data).in_fences > 0 ? 1 === s.in_fences ? (console.log("锁gps在电子围栏"), n(2)) : 2 === s.in_fences && (console.log("手机gps在电子围栏"), n(1)) : (console.log("不在电子围栏"), n(0)), e.next = 14;
                                                      break;
                                                    case 13:
                                                      void 0 !== c.data && 1 == c.data.lockStatus && (t.backCarErrorModal(!0, 0), t.logReport("BA3", "===网络获取锁状态结果：开==="), t.logReport("BA3", "===开始上报还车失败==="), t.car_notification(3, 5, "", "还车失败"), n(-1));
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
                                            }()), e.next = 19;
                                            break;
                                          case 14:
                                            return e.next = 16, t.$sendAck("in_fences", {
                                              data: {
                                                points: u + "|" + r.longitude + "," + r.latitude
                                              },
                                              timeout: 2e4
                                            }).catch((function(t) {
                                              n(-2)
                                            }));
                                          case 16:
                                            f = e.sent, (p = f.data).in_fences > 0 ? 1 === p.in_fences ? (console.log("锁gps在电子围栏"), n(2)) : 2 === p.in_fences && (console.log("手机gps在电子围栏"), n(1)) : -999 == p.in_fences ? (o.showModal({
                                              title: "提示",
                                              confirmText: "知道了",
                                              content: "车辆不在运营区，请在运营区内还车"
                                            }), t.hideLoading(), n(p.in_fences)) : (console.log("不在电子围栏"), n(0));
                                          case 19:
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
              car_notification: function(t, e, n, o, r) {
                var c = this;
                return this.getPosition().then(function() {
                  var s = (0, i.default)(a.default.mark((function i(s) {
                    return a.default.wrap((function(a) {
                      for (;;) switch (a.prev = a.next) {
                        case 0:
                          c.$sendAck("car_notifation", {
                            data: {
                              action_type: (0, h.default)(c.action_car.order_sn + ":action_type:" + t),
                              lock_status: (0, h.default)(c.action_car.order_sn + ":lock_status:" + e),
                              longitude: c.back_longitude || s.longitude,
                              latitude: c.back_latitude || s.latitude,
                              back_type: (0, h.default)(c.action_car.order_sn + ":back_type:" + n),
                              remark: o
                            },
                            scene: {
                              showMessage: !1
                            }
                          }).then((function(t) {
                            r(1), c.getUserCarAuthority()
                          })).catch((function(e) {
                            412 == e.status_code && 3 == t && r(1), c.getUserCarAuthority()
                          }));
                        case 1:
                        case "end":
                          return a.stop()
                      }
                    }), i)
                  })));
                  return function(t) {
                    return s.apply(this, arguments)
                  }
                }())
              },
              notLockVoice: function(t) {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  var o;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, e.$http.post("car/notLockVoice/" + t);
                      case 2:
                        return o = n.sent, n.abrupt("return", o);
                      case 4:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getPosition: function() {
                var e = this;
                return (0, i.default)(a.default.mark((function n() {
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.abrupt("return", new Promise((function(n, o) {
                          setTimeout((function() {
                            e.mapInfo.latitude || (e.mapInfo.latitude = 1e-4, e.mapInfo.longitude = 1e-4, n(e.mapInfo))
                          }), 3e3), e.mapInfo.latitude ? n(e.mapInfo) : t.getLocation({
                            type: "gcj02",
                            success: function(t) {
                              e.mapInfo.latitude = t.latitude, e.mapInfo.longitude = t.longitude, n(e.mapInfo)
                            },
                            fail: function(t) {
                              e.mapInfo.latitude || (e.mapInfo.latitude = 0, e.mapInfo.longitude = 0), n(e.mapInfo)
                            }
                          })
                        })));
                      case 1:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              temporaryLock: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n, r, c;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.check_location_auth();
                      case 2:
                        if (!t.user_car_authority.order.temporary_parking_remind) {
                          e.next = 7;
                          break
                        }
                        return n = function() {
                          return new Promise((function(t, e) {
                            o.requestSubscribeMessage({
                              tmplIds: r,
                              complete: function() {
                                var e = (0, i.default)(a.default.mark((function e(n) {
                                  return a.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        t();
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
                            })
                          }))
                        }, r = ["tJrtXg_rAUSiRhFjJSK7cjQJlAUUQKDhYflMSOYDzoA"], e.next = 7, n();
                      case 7:
                        return (0, u.closeBluetoothAdapter)(), t.showLoading({
                          title: "正在处理",
                          icon: "loading",
                          mask: !0
                        }), e.next = 11, t.logReport("A2");
                      case 11:
                        if (0 !== t.user_car_authority.order.allow_temporary_lock) {
                          e.next = 17;
                          break
                        }
                        return e.next = 14, t.logReport("B7");
                      case 14:
                        return t.hideLoading(), o.showModal({
                          title: "溫馨提示",
                          content: "临时锁车已禁用，请至蓝色围栏还车，未锁导致车辆丢失责任自负。",
                          confirmText: "知道了",
                          showCancel: !1
                        }), e.abrupt("return");
                      case 17:
                        return e.next = 19, t.$http.getTest2("order/can_action").catch((function(e) {
                          return _.default.logList("用户端超时，但是继续执行下一步，当前网速：" + t.healthMs + "ms"), {
                            status_code: 200,
                            message: "超时请重试"
                          }
                        }));
                      case 19:
                        if (-888 != (c = e.sent).status_code) {
                          e.next = 27;
                          break
                        }
                        return setTimeout((function() {
                          o.showModal({
                            title: "提示",
                            content: c.message,
                            confirmText: "知道了",
                            showCancel: !1
                          })
                        }), 2e3), t.getUserCarAuthority(), t.hideLoading(), t.closeUseCar(), e.abrupt("return");
                      case 27:
                        if (200 === c.status_code) {
                          e.next = 31;
                          break
                        }
                        return t.getUserCarAuthority(), t.closeUseCar({
                          title: c.message,
                          icon: "none"
                        }), e.abrupt("return");
                      case 31:
                        t.openBluetoothAdapter().then((0, i.default)(a.default.mark((function e() {
                          var n;
                          return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.getCurrentCycling();
                              case 2:
                                if (e.sent, void 0 === c.status_code || 200 === c.status_code) {
                                  e.next = 6;
                                  break
                                }
                                return o.showToast({
                                  title: c.message,
                                  icon: "none"
                                }), e.abrupt("return");
                              case 6:
                                if (t.cycling.order_id && !(t.cycling.order_state > 20)) {
                                  e.next = 12;
                                  break
                                }
                                return o.showToast({
                                  title: "当前行程已结束",
                                  icon: "none"
                                }), t.logReport("B6"), e.next = 11, t.getUserCarAuthority();
                              case 11:
                                return e.abrupt("return");
                              case 12:
                                return t.action_car = k(k({}, t.cycling), {}, {
                                  number: t.cycling.car_number || t.action_car.number,
                                  mac: t.cycling.car_lock_mac || t.action_car.mac,
                                  vendor_lock_id: t.cycling.car_vendor_lock_id || t.action_car.vendor_lock_id,
                                  lock_password: t.cycling.car_lock_password || t.action_car.lock_password,
                                  lock_secretkey: t.cycling.car_lock_secretkey || t.action_car.lock_secretkey,
                                  carmodel_id: t.cycling.carmodel_id || t.action_car.carmodel_id,
                                  lock_id: t.cycling.lock_id || t.action_car.lock_id
                                }), e.next = 15, t.$http.post("order/bluetooth_temp_lock", {
                                  longitude: t.mapInfo.longitude,
                                  latitude: t.mapInfo.latitude
                                });
                              case 15:
                                if (200 == (n = e.sent).status_code) {
                                  e.next = 19;
                                  break
                                }
                                return o.showToast({
                                  title: n.message,
                                  icon: "none"
                                }), e.abrupt("return");
                              case 19:
                                t.lockInfo.lbStatus = 0, t.lockInfo.netStatus = -1, t.hideLoading(), t.showUseCar(2), (2 === t.action_car.carmodel_id || 1 == t.action_car.carmodel_id && 11 == t.action_car.lock_id) && t.networkLockCar(t.mapInfo, 1), 11 === t.action_car.lock_id ? t.temporary_lock(t, t.action_car).then((function(e) {
                                  ("00" === e.code && 1 === e.result ? 1 : 0) ? (t.lockInfo.lbStatus = 1, t.closeUseCar({
                                    title: "临时上锁成功",
                                    icon: "success"
                                  }), t.car_notification(2, 1, "", "临时上锁成功"), t.setTemporaryLock()) : (t.lockInfo.lbStatus = 2, (2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.closeUseCar({
                                    title: "临时上锁失败",
                                    icon: "none"
                                  }), t.car_notification(2, 3, "", "蓝牙上锁失败"))
                                })).catch((function(e) {
                                  (2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.closeUseCar({
                                    title: void 0 !== e.msg ? e.msg : "临时上锁失败",
                                    icon: "none"
                                  }), parseInt(e.code) >= 1e3 && parseInt(e.code) <= 1004 || 1011 === parseInt(e.code) || 1012 === parseInt(e.code) ? t.car_notification(2, 2, "", "蓝牙上锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")) : parseInt(e.code) >= 1005 && parseInt(e.code) <= 1008 && t.car_notification(2, 3, "", "蓝牙上锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : ""))
                                })) : t.lock(t, t.action_car).then((function(e) {
                                  ("00" === e.code && 1 === e.result ? 1 : 0) ? (t.lockInfo.lbStatus = 1, t.closeUseCar({
                                    title: "临时上锁成功",
                                    icon: "success"
                                  }), t.car_notification(2, 1, "", "临时上锁成功")) : (t.lockInfo.lbStatus = 2, (2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.closeUseCar({
                                    title: "临时上锁失败",
                                    icon: "none"
                                  }), t.car_notification(2, 3, "", "蓝牙上锁失败"))
                                })).catch((function(e) {
                                  t.lockInfo.lbStatus = 2, (2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.closeUseCar({
                                    title: void 0 !== e.msg ? e.msg : "临时上锁失败",
                                    icon: "none"
                                  }), parseInt(e.code) >= 1e3 && parseInt(e.code) <= 1004 || 1011 === parseInt(e.code) || 1012 === parseInt(e.code) ? t.car_notification(2, 2, "", "蓝牙上锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")) : parseInt(e.code) >= 1005 && parseInt(e.code) <= 1008 && t.car_notification(2, 3, "", "蓝牙上锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : ""))
                                }));
                              case 25:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        })))).catch((function() {
                          t.hideLoading()
                        }));
                      case 32:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              setTemporaryLock: function() {
                var e = this;
                clearTimeout(this.stopEvent), this.isTemporaryLockModal || (this.isTemporaryLockModal = !0, o.setStorageSync("temporary_lock", 3), this.user_car_authority.order.temporary_parking_finish_order_time && (this.stopEvent = setTimeout((function() {
                  t.showModal({
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
              unlockAgain: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t.showLoading({
                          title: "正在处理",
                          icon: "loading",
                          mask: !0
                        }), e.next = 3, t.logReport("A3");
                      case 3:
                        return e.next = 5, t.$http.getTest2("order/can_action").catch((function(e) {
                          return _.default.logList("用户端超时，但是继续执行下一步，当前网速：" + t.healthMs + "ms"), {
                            status_code: 200,
                            message: "超时请重试"
                          }
                        }));
                      case 5:
                        if (-888 != (n = e.sent).status_code) {
                          e.next = 12;
                          break
                        }
                        return o.showModal({
                          title: "提示",
                          content: n.message,
                          confirmText: "知道了",
                          showCancel: !1
                        }), t.hideLoading(), t.getUserCarAuthority(), e.abrupt("return");
                      case 12:
                        if (200 === n.status_code) {
                          e.next = 16;
                          break
                        }
                        return o.showToast({
                          title: n.message,
                          icon: "none"
                        }), t.getUserCarAuthority(), e.abrupt("return");
                      case 16:
                        t.lockInfo.netStatus = -1, t.lockInfo.lbStatus = 0, t.openBluetoothAdapter().then((0, i.default)(a.default.mark((function e() {
                          var n, r;
                          return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.getCurrentCycling();
                              case 2:
                                return n = e.sent, e.next = 5, t.carCanUnlock();
                              case 5:
                                if (1 != (r = e.sent)) {
                                  e.next = 12;
                                  break
                                }
                                return o.showToast({
                                  title: "您已提交问题反馈，暂时无法开锁",
                                  icon: "none"
                                }), t.logReport("B5"), e.abrupt("return");
                              case 12:
                                if (2 != r) {
                                  e.next = 18;
                                  break
                                }
                                return o.showToast({
                                  title: "当前行程已结束",
                                  icon: "none"
                                }), t.logReport("B6"), e.next = 17, t.getUserCarAuthority();
                              case 17:
                                return e.abrupt("return");
                              case 18:
                                if (void 0 === n.status_code || 200 === n.status_code) {
                                  e.next = 21;
                                  break
                                }
                                return o.showToast({
                                  title: n.message,
                                  icon: "none"
                                }), e.abrupt("return");
                              case 21:
                                t.hideLoading(), t.showUseCar(1), t.action_car = k(k({}, t.cycling), {}, {
                                  number: t.cycling.car_number || t.action_car.number,
                                  mac: t.cycling.car_lock_mac || t.action_car.mac,
                                  vendor_lock_id: t.cycling.car_vendor_lock_id || t.action_car.vendor_lock_id,
                                  lock_password: t.cycling.car_lock_password || t.action_car.lock_password,
                                  lock_secretkey: t.cycling.car_lock_secretkey || t.action_car.lock_secretkey,
                                  carmodel_id: t.cycling.carmodel_id || t.action_car.carmodel_id,
                                  lock_id: t.cycling.lock_id || t.action_car.lock_id
                                }), t.unlock(t, t.action_car).then(function() {
                                  var e = (0, i.default)(a.default.mark((function e(n) {
                                    var r;
                                    return a.default.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                        case 0:
                                          if (!("00" === n.code && 1 === n.result ? 1 : 0)) {
                                            e.next = 15;
                                            break
                                          }
                                          if (t.lockInfo.lbStatus = 1, t.end(t, t.action_car), 10 !== t.action_car.lock_id && 12 !== t.action_car.lock_id) {
                                            e.next = 11;
                                            break
                                          }
                                          return e.next = 7, t.$http.post("order/temp_lock", {
                                            longitude: t.mapInfo.longitude,
                                            latitude: t.mapInfo.latitude,
                                            status: 0
                                          });
                                        case 7:
                                          200 === (r = e.sent).status_code ? (2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.unlockSuccess() : o.showToast({
                                            title: r.message,
                                            icon: "none"
                                          }), e.next = 12;
                                          break;
                                        case 11:
                                          (2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.unlockSuccess();
                                        case 12:
                                          t.car_notification(1, 1, "", "蓝牙开锁成功"), e.next = 19;
                                          break;
                                        case 15:
                                          t.lockInfo.lbStatus = 2, t.end(t, t.action_car), (2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.closeUseCar({
                                            title: "蓝牙开锁失败",
                                            icon: "error"
                                          }), t.car_notification(1, 3, "", "蓝牙开锁失败");
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
                                  t.lockInfo.lbStatus = 2, (2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.closeUseCar({
                                    title: void 0 !== e.msg ? e.msg : "开锁失败",
                                    icon: "none"
                                  }), 13 === t.action_car.lock_id || 14 === t.action_car.lock_id || 11 === t.action_car.lock_id ? t.logReport("BA3", "===蓝牙超时或者锁被网络打开===") : (t.end(t, t.action_car), parseInt(e.code) >= 1e3 && parseInt(e.code) <= 1004 || 1011 === parseInt(e.code) || 1012 === parseInt(e.code) ? t.car_notification(1, 2, "", "蓝牙开锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")) : parseInt(e.code) >= 1005 && parseInt(e.code) <= 1008 && t.car_notification(1, 3, "", "蓝牙开锁失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : "")))
                                })), 2 !== t.action_car.carmodel_id && 12 !== t.action_car.lock_id && 13 !== t.action_car.lock_id && 14 !== t.action_car.lock_id && 11 !== t.action_car.lock_id || t.networkUnlockCar(t.mapInfo, 1);
                              case 26:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        })))).catch((function() {
                          t.hideLoading()
                        }));
                      case 19:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              useCarAniLockAgain: function() {
                this.temporaryLock()
              },
              useCarAniUnlockAgain: function() {
                this.user_car_authority.order.order_id ? this.unlockAgain() : this.orderUnlock(1)
              },
              carCanUnlock: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
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
              networkLockCar: function(t) {
                var e = arguments,
                  n = this;
                return (0, i.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        c = e.length > 1 && void 0 !== e[1] ? e[1] : 2, n.lockInfo.netStatus = 0, n.$sendAck("order_close_car", {
                          data: {
                            longitude: t.longitude,
                            latitude: t.latitude,
                            back_type: t.back_type,
                            action_type: c
                          }
                        }).then((function(t) {
                          var e = t.status_code,
                            r = t.data,
                            a = t.message;
                          console.log(e, r, a, "=====");
                          var i = {
                            title: "",
                            icon: "error"
                          };
                          2 == c && n.closeUseCar(), r.ret < 0 ? (n.lockInfo.netStatus = 2, i.title = "网络关锁异常", 2 == n.lockInfo.lbStatus && o.showToast(i)) : 1 == r.ret || 2 == r.ret ? (n.lockInfo.netStatus = 1, 2 == c ? n.closeUseCar({
                            title: "网络还车成功",
                            icon: "success"
                          }) : 1 == c && (n.closeUseCar({
                            title: "临时上锁成功",
                            icon: "success"
                          }), n.setTemporaryLock())) : 3 == r.ret ? (n.lockInfo.netStatus = 3, i.title = "车辆网络离线", 2 == n.lockInfo.lbStatus && n.closeUseCar(i)) : 4 == r.ret && (n.lockInfo.netStatus = 2, i.title = "网络关锁失败", 2 == n.lockInfo.lbStatus && o.closeUseCar(i)), n.showUnlock(), n.getUserCarAuthority()
                        })).catch((function(t) {
                          "timeout" == t && 2 == n.lockInfo.lbStatus && (o.showToast({
                            title: "网络关锁超时",
                            icon: "error"
                          }), n.logReport("BA2")), 2 == c && n.closeUseCar(), n.getUserCarAuthority()
                        }));
                      case 3:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              networkUnlockCar: function(t) {
                var e = arguments,
                  n = this;
                return (0, i.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (c = e.length > 1 && void 0 !== e[1] ? e[1] : 2, !w) {
                          r.next = 3;
                          break
                        }
                        return r.abrupt("return");
                      case 3:
                        n.lockInfo.netStatus = 0, n.$sendAck("order_open_car", {
                          data: {
                            longitude: t.longitude,
                            latitude: t.latitude,
                            action_type: c
                          }
                        }).then((function(t) {
                          t.status_code;
                          var e = t.data,
                            r = (t.message, {
                              title: "",
                              icon: "error"
                            });
                          e.ret < 0 ? (n.lockInfo.netStatus = 2, r.title = "网络开锁异常", 2 == n.lockInfo.lbStatus && o.showToast(r)) : 1 == e.ret || 2 == e.ret ? (n.lockInfo.netStatus = 1, 2 == c ? n.orderLockSuccess() : 1 == c && n.unlockSuccess()) : 3 == e.ret ? (n.lockInfo.netStatus = 3, r.title = "车辆网络离线", 2 == n.lockInfo.lbStatus && o.showToast(r)) : 4 == e.ret && (n.lockInfo.netStatus = 2, r.title = "网络开锁失败", 2 == n.lockInfo.lbStatus && o.showToast(r)), n.showUnlock(), n.getUserCarAuthority()
                        })).catch((function(t) {
                          "timeout" == t && 2 == n.lockInfo.lbStatus && o.showToast({
                            title: "网络开锁超时",
                            icon: "error"
                          }), n.getUserCarAuthority()
                        }));
                      case 5:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              setLockState: function(t) {
                t.status_code;
                var e = t.data,
                  n = (t.message, {
                    title: "",
                    icon: "error"
                  });
                e.ret < 0 ? (this.lockInfo.netStatus = 2, n.title = "网络开锁异常", 2 == this.lockInfo.lbStatus && o.showToast(n)) : 1 == e.ret || 2 == e.ret ? (this.lockInfo.netStatus = 1, this.orderLockSuccess()) : 3 == e.ret ? (this.lockInfo.netStatus = 3, n.title = "车辆网络离线", 2 == this.lockInfo.lbStatus && o.showToast(n)) : 4 == e.ret && (this.lockInfo.netStatus = 2, n.title = "网络开锁失败", 2 == this.lockInfo.lbStatus && o.showToast(n))
              },
              showUnlock: function() {
                2 == this.lockInfo.lbStatus && (2 == this.lockInfo.netStatus || this.lockInfo.netStatus < 0) ? this.$refs.useCarAni.showUnlock() : 1 != this.lockInfo.lbStatus && 1 != this.lockInfo.netStatus || this.closeUseCar()
              },
              orderLockSuccess: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (setTimeout((function() {
                            5 === t.action_car.lock_id ? t.showPopup("type5_lock") : 11 == t.action_car.lock_id && 1 == t.action_car.carmodel_id ? t.showPopup("zzs") : t.action_car.yunjia_close_car_autoback ? t.showPopup("yjs_zd_hc") : 1 === t.action_car.back_car_mode ? t.showPopup("back_mode_1") : 2 === t.action_car.back_car_mode && t.showPopup("back_mode_2")
                          }), 2e3), 10 !== t.action_car.lock_id && 12 !== t.action_car.lock_id) {
                          e.next = 8;
                          break
                        }
                        return e.next = 4, t.$http.post("order/temp_lock", {
                          longitude: t.mapInfo.longitude,
                          latitude: t.mapInfo.latitude,
                          status: 0
                        });
                      case 4:
                        200 === (n = e.sent).status_code ? t.unlockSuccess() : o.showToast({
                          title: n.message,
                          icon: "none"
                        }), e.next = 9;
                        break;
                      case 8:
                        t.unlockSuccess();
                      case 9:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              orderFinish: function() {
                var t = this;
                this.$http.post("order/order_finish/" + this.user_car_authority.order.order_id, {
                  created_at: this.user_car_authority.order.created_at
                }).then(function() {
                  var e = (0, i.default)(a.default.mark((function e(n) {
                    return a.default.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (200 != n.status_code) {
                            e.next = 8;
                            break
                          }
                          return e.next = 3, t.getUserCarAuthority();
                        case 3:
                          setTimeout((function() {
                            o.showToast({
                              title: "还车成功",
                              icon: "success"
                            })
                          }), 2e3), t.closeUseCar(), t.backCarErrorModal(!1), e.next = 9;
                          break;
                        case 8:
                          o.showToast({
                            title: n.message,
                            icon: "none"
                          });
                        case 9:
                        case "end":
                          return e.stop()
                      }
                    }), e)
                  })));
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                }())
              },
              unlockSuccess: function() {
                var t = this;
                this.closeUseCar({
                  title: "锁已打开",
                  icon: "success"
                }), setTimeout((function() {
                  t.action_car.remind_gys_helmet ? o.showModal({
                    title: "7MA出行温馨提示",
                    content: "头盔锁已打开，请取出车篮头盔全程佩戴，否则车辆将无法启动，中途摘盔车将断电，骑行结束后请将头盔放入车篮，感谢您的配合！",
                    showCancel: !1,
                    confirmText: "确定",
                    success: function(t) {}
                  }) : t.action_car.gys_helmet_bth ? t.toolsModal(!0, 1) : t.action_car.show_open_close_helmet_bth && t.toolsModal(!0, 0)
                }), 2e3), this.car = {}
              },
              openTk: function() {
                var t = this,
                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                if (6 != this.user_car_authority.unauthorized_code) return o.showToast({
                  title: "暂无订单",
                  icon: "none"
                }), void this.toolsModal(!1);
                this.showLoading({
                  title: "头盔" + (e ? "开启" : "关闭") + "中",
                  icon: "loading",
                  mask: !0
                });
                var n = this.action_car.number || this.user_car_authority.order.car_number;
                this.$http.post("openCloseHelmet/" + n, {
                  type: e
                }).then((function(n) {
                  t.toolsModal(!1), t.logReport("BA3", "===头盔" + (e ? "开启" : "关闭") + "返回结果：" + n.data.result + "==="), 1 == n.data.result ? e && t.toolsModal(!0, 1) : o.showToast({
                    title: "头盔" + (e ? "开启" : "关闭") + "失败",
                    icon: "none"
                  })
                })).catch((function(e) {
                  t.logReport("BA3", "===头盔接口请求失败==="), t.hideLoading()
                }))
              },
              getTkState: function() {
                var t = this,
                  e = this.action_car.number || this.user_car_authority.order.car_number;
                return new Promise((function(n, r) {
                  t.$http.get("checkHelmetStatus/" + e).then((function(e) {
                    t.logReport("BA3", "===头盔锁状态：" + e.data.result + "==="), 1 == e.data.result ? n(1) : (n(0), o.showToast({
                      title: e.data.msg,
                      icon: "none"
                    }))
                  })).catch((function(e) {
                    t.logReport("BA3", "===头盔状态接口请求失败:" + e.message + "==="), t.hideLoading()
                  }))
                }))
              },
              go: function(e) {
                t.navigateTo({
                  url: e
                })
              },
              mySleep: function(t) {
                return new Promise((function(e) {
                  setTimeout((function() {
                    e()
                  }), t)
                }))
              },
              clearAllTimeout: function() {
                clearTimeout(this.orderStateTimer), clearTimeout(this.getHealthTimer)
              },
              backCar: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function e() {
                  var n, r, c;
                  return a.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = function() {
                            return new Promise((function(t, e) {
                              o.showModal({
                                title: "提示",
                                content: "请靠近车辆点击还车，确认还车成功再离开",
                                cancelText: "取消",
                                confirmText: "确认还车",
                                success: function(e) {
                                  e.confirm ? (_.default.orderBeforeLogList("用户点了确认还车按钮，当前网速：" + n.healthMs + "ms"), n.logReport("A1"), t()) : e.cancel && (_.default.orderBeforeLogList("用户点击了取消按钮，当前网速：" + n.healthMs + "ms"), n.logReport("BA3", "===用户点击了取消==="))
                                }
                              })
                            }))
                          }, t.isSuccess) {
                          e.next = 4;
                          break
                        }
                        return o.showModal({
                          title: "提示",
                          content: "未连接到服务器，请重新连接",
                          showCancel: !1,
                          confirmText: "重连",
                          success: function(e) {
                            e.confirm && t.$store.dispatch("wss/getWssState").then((function(e) {
                              e.isSuccess ? console.log("[Home] WebSocket已连接，无需重复连接") : (console.log("[Home] 还车时用户确认重连WebSocket"), o.restartMiniProgram ? o.restartMiniProgram({
                                path: "/pages/home/index",
                                success: function() {
                                  console.log("热加载成功")
                                }
                              }) : (t.$store.dispatch("wss/close"), t.$store.dispatch("wss/initAppStart"), t.$store.dispatch("wss/connect")))
                            }))
                          }
                        }), e.abrupt("return");
                      case 4:
                        return (n = t).logReport("BA3", "===用户正在确认是否在车旁==="), e.next = 8, r();
                      case 8:
                        return t.showLoading({
                          title: "正在处理",
                          mask: !0
                        }), e.next = 11, t.$http.getTest2("order/can_action").catch((function(e) {
                          return _.default.logList("用户端超时，但是继续执行下一步，当前网速：" + t.healthMs + "ms"), {
                            status_code: 200,
                            message: "超时请重试"
                          }
                        }));
                      case 11:
                        if (-888 != (c = e.sent).status_code) {
                          e.next = 17;
                          break
                        }
                        return t.getUserCarAuthority(), o.showModal({
                          title: "提示",
                          content: c.message,
                          confirmText: "知道了",
                          showCancel: !1
                        }), t.hideLoading(), e.abrupt("return");
                      case 17:
                        if (200 === c.status_code) {
                          e.next = 21;
                          break
                        }
                        return t.getUserCarAuthority(), o.showToast({
                          title: c.message,
                          icon: "none"
                        }), e.abrupt("return");
                      case 21:
                        t.openBluetoothAdapter().then((0, i.default)(a.default.mark((function e() {
                          return a.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t.check_location_auth().then((0, i.default)(a.default.mark((function e() {
                                  var n, r;
                                  return a.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return t.showLoading({
                                          title: "还车中",
                                          mask: !0
                                        }), e.next = 3, t.getCurrentCycling().catch((function(e) {
                                          return _.default.logList("用户端提示超时请重试，当前网速：" + t.healthMs + "ms"), {
                                            status_code: 255,
                                            message: "超时请重试"
                                          }
                                        }));
                                      case 3:
                                        if (void 0 === (n = e.sent).status_code || 200 === n.status_code) {
                                          e.next = 7;
                                          break
                                        }
                                        return o.showToast({
                                          title: n.message,
                                          icon: "none"
                                        }), e.abrupt("return");
                                      case 7:
                                        if (t.cycling.order_id && !(t.cycling.order_state > 20)) {
                                          e.next = 14;
                                          break
                                        }
                                        return o.showToast({
                                          title: "当前行程已结束",
                                          icon: "none"
                                        }), e.next = 11, t.logReport("B6");
                                      case 11:
                                        return e.next = 13, t.getUserCarAuthority();
                                      case 13:
                                        return e.abrupt("return");
                                      case 14:
                                        if (w = !0, t.lockInfo.lbStatus = 0, t.lockInfo.netStatus = -1, t.action_car = k(k({}, t.cycling), {}, {
                                            number: t.cycling.car_number,
                                            mac: t.cycling.car_lock_mac,
                                            vendor_lock_id: t.cycling.car_vendor_lock_id,
                                            lock_password: t.cycling.car_lock_password,
                                            lock_secretkey: t.cycling.car_lock_secretkey
                                          }), r = !1, 0, !t.action_car.show_open_close_helmet_bth && !t.action_car.gys_helmet_bth) {
                                          e.next = 26;
                                          break
                                        }
                                        return e.next = 23, t.getTkState();
                                      case 23:
                                        if (e.sent) {
                                          e.next = 26;
                                          break
                                        }
                                        return e.abrupt("return");
                                      case 26:
                                        t.showLoading({
                                          title: "正在确认停车点",
                                          mask: !0
                                        }), t.check_is_in_parking().then(function() {
                                          var e = (0, i.default)(a.default.mark((function e(n) {
                                            var c, s, u;
                                            return a.default.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                  if (-1 != n && -999 != n) {
                                                    e.next = 3;
                                                    break
                                                  }
                                                  return t.hideLoading(), e.abrupt("return");
                                                case 3:
                                                  if (-2 != n) {
                                                    e.next = 7;
                                                    break
                                                  }
                                                  return t.hideLoading(), o.showModal({
                                                    title: "提示",
                                                    content: "当前连接不稳定，请重连",
                                                    showCancel: !1,
                                                    confirmText: "重连",
                                                    success: function(e) {
                                                      e.confirm && (o.restartMiniProgram ? o.restartMiniProgram({
                                                        path: "/pages/home/index",
                                                        success: function() {
                                                          console.log("热加载成功")
                                                        }
                                                      }) : (t.$store.dispatch("wss/close"), t.$store.dispatch("wss/initAppStart"), t.$store.dispatch("wss/connect")))
                                                    }
                                                  }), e.abrupt("return");
                                                case 7:
                                                  if (t.logReport("BA3", "===判断电子围栏完成，结果" + n + "==="), c = !1, n) {
                                                    e.next = 23;
                                                    break
                                                  }
                                                  if (2 !== t.action_car.carmodel_id && (1 !== t.action_car.carmodel_id || 11 != t.action_car.lock_id)) {
                                                    e.next = 18;
                                                    break
                                                  }
                                                  return t.hideLoading(), t.backCarErrorModal(!0, 1), t.logReport("BA3", "===开始上报还车失败==="), w = !1, t.car_notification(3, 4, "", "还车失败-助力车取消道钉搜索"), t.closeBluetoothAdapter(t, t.action_car), e.abrupt("return");
                                                case 18:
                                                  return r = !0, t.logReport("BA3", "===开始查找道钉==="), t.showLoading({
                                                    title: "重新确认停车点",
                                                    mask: !0
                                                  }), e.next = 23, t.findBeacon(t, t.action_car).then((function(e) {
                                                    if (n = e.result, t.logReport("BA3", "===查找道钉结果：" + (n ? "有" : "无") + "==="), !n) return t.hideLoading(), t.backCarErrorModal(!0, 1), t.logReport("BA3", "===开始上报还车失败==="), w = !1, t.car_notification(3, 4, "", "还车失败-未扫描到信标"), void t.closeBluetoothAdapter(t, t.action_car)
                                                  })).catch(function() {
                                                    var e = (0, i.default)(a.default.mark((function e(o) {
                                                      var r, i;
                                                      return a.default.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                            return t.logReport("BA3", "===查找道钉失败==="), t.logReport("BA3", "===开始获取锁与道钉信息==="), e.next = 4, t.$http.get("car/" + t.action_car.number + "/beaconAutomaticCarReturn");
                                                          case 4:
                                                            if (r = e.sent, i = r.data, t.logReport("BA3", "===锁与道钉结果" + i.beacon + "==="), n = i.beacon ? 4 : "", c = i.beacon, n) {
                                                              e.next = 17;
                                                              break
                                                            }
                                                            return t.hideLoading(), t.backCarErrorModal(!0, 1), t.logReport("BA3", "===开始上报还车失败==="), w = !1, t.car_notification(3, 4, "", "还车失败-未扫描到信标"), t.closeBluetoothAdapter(t, t.action_car), e.abrupt("return");
                                                          case 17:
                                                          case "end":
                                                            return e.stop()
                                                        }
                                                      }), e)
                                                    })));
                                                    return function(t) {
                                                      return e.apply(this, arguments)
                                                    }
                                                  }());
                                                case 23:
                                                  if (!n) {
                                                    e.next = 30;
                                                    break
                                                  }
                                                  if (t.hideLoading(), 6 == t.user_car_authority.unauthorized_code) {
                                                    e.next = 28;
                                                    break
                                                  }
                                                  return t.getUserCarAuthority("order_state"), e.abrupt("return");
                                                case 28:
                                                  t.showUseCar(3), 1 === t.action_car.carmodel_id && 11 != t.action_car.lock_id && 14 != t.action_car.lock_id ? (t.logReport("BA3", "===单车开始蓝牙获取锁状态==="), t.getLockState(t, t.action_car).then((function(e) {
                                                    if (t.closeUseCar(), "00" === e.code && 0 === e.result) {
                                                      t.lockInfo.lbStatus = 1;
                                                      var r = 1 === n || 2 === n || 4 === n ? n : 3;
                                                      t.logReport("BA3", "===锁状态：关==="), t.logReport("BA3", "===开始上报还车成功==="), t.car_notification(3, 1, r, "还车成功", (function(e) {
                                                        e ? (t.logReport("BA3", "===上报结果：成功==="), setTimeout((function() {
                                                          o.showToast({
                                                            title: "还车成功",
                                                            icon: "success"
                                                          })
                                                        }), 2e3)) : (t.logReport("BA3", "===上报结果：失败==="), w = !1, t.hideLoading())
                                                      })), t.closeBluetoothAdapter(t, t.action_car)
                                                    } else t.lockInfo.lbStatus = 2, t.closeBluetoothAdapter(t, t.action_car), t.backCarErrorModal(!0, 0), 13 == t.action_car.lock_id && t.notLockVoice(t.action_car.number), t.logReport("BA3", "===锁状态：开==="), t.logReport("BA3", "===开始上报还车失败==="), w = !1, t.car_notification(3, 5, "", "还车失败");
                                                    t.showUnlock(), t.end(t, t.action_car)
                                                  })).catch(function() {
                                                    var e = (0, i.default)(a.default.mark((function e(r) {
                                                      var i, s;
                                                      return a.default.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                            if (t.closeUseCar(), t.lockInfo.lbStatus = 2, t.logReport("BA3", "===蓝牙连接失败==="), t.closeBluetoothAdapter(t, t.action_car), t.end(t, t.action_car), 13 != t.action_car.lock_id) {
                                                              e.next = 32;
                                                              break
                                                            }
                                                            return t.logReport("BA3", "===网络获取锁状态==="), e.next = 9, t.$http.get("car/" + t.action_car.number + "/lockStatus");
                                                          case 9:
                                                            if (i = e.sent, console.log("蓝牙获取锁状态失败，网络获取锁状态", i.data), void 0 === i.data || 0 != i.data.lockStatus) {
                                                              e.next = 23;
                                                              break
                                                            }
                                                            return t.lockInfo.netStatus = 1, t.logReport("BA3", "===网络获取锁状态结果：关==="), s = 1 === n || 2 === n ? n : 3, s = c ? 4 : s, t.logReport("BA3", "===开始上报还车成功==="), t.car_notification(3, 1, s, "还车成功", (function(e) {
                                                              e ? (t.logReport("BA3", "===上报结果：成功==="), setTimeout((function() {
                                                                o.showToast({
                                                                  title: "还车成功",
                                                                  icon: "success"
                                                                })
                                                              }), 2e3)) : (t.logReport("BA3", "===上报结果：失败==="), w = !1, t.hideLoading())
                                                            })), t.closeBluetoothAdapter(t, t.action_car), t.end(t, t.action_car), e.abrupt("return", !1);
                                                          case 23:
                                                            if (void 0 === i.data || 1 != i.data.lockStatus) {
                                                              e.next = 32;
                                                              break
                                                            }
                                                            return t.lockInfo.netStatus = 2, t.backCarErrorModal(!0, 0), t.notLockVoice(t.action_car.number), t.logReport("BA3", "===网络获取锁状态结果：开==="), t.logReport("BA3", "===开始上报还车失败==="), w = !1, t.car_notification(3, 5, "", "还车失败"), e.abrupt("return", !1);
                                                          case 32:
                                                            parseInt(r.code) >= 1e3 && parseInt(r.code) <= 1004 || 1011 === parseInt(r.code) || 1012 === parseInt(r.code) ? (t.backCarErrorModal(!0, 2), w = !1, t.logReport("BA3", "===开始上报还车失败==="), t.car_notification(3, 2, "", "还车失败" + (void 0 !== r.remark ? "[" + r.remark + "]" : ""))) : parseInt(r.code) >= 1005 && parseInt(r.code) <= 1008 && (t.logReport("BA3", "===开始上报还车失败==="), o.showToast({
                                                              title: "连接失败",
                                                              icon: "none"
                                                            }), w = !1, t.car_notification(3, 3, "", "还车失败" + (void 0 !== r.remark ? "[" + r.remark + "]" : ""))), t.showUnlock();
                                                          case 34:
                                                          case "end":
                                                            return e.stop()
                                                        }
                                                      }), e)
                                                    })));
                                                    return function(t) {
                                                      return e.apply(this, arguments)
                                                    }
                                                  }())) : 2 === t.action_car.carmodel_id || 1 === t.action_car.carmodel_id && 11 == t.action_car.lock_id ? (4 !== t.action_car.lock_id && 8 !== t.action_car.lock_id && (t.logReport("BA3", "===助力车开始蓝牙关锁==="), t.lock(t, t.action_car).then((function(e) {
                                                    if ("00" === e.code && 1 === e.result) {
                                                      t.lockInfo.lbStatus = 1;
                                                      var a = 1 === n || 2 === n ? n : 3;
                                                      t.logReport("BA3", "===开始上报还车成功==="), t.car_notification(3, 1, a, "还车成功", (function(e) {
                                                        e ? (t.logReport("BA3", "===上报结果：成功==="), o.showToast({
                                                          title: "还车成功",
                                                          icon: "success"
                                                        })) : (t.logReport("BA3", "===上报结果：失败==="), w = !1, t.hideLoading())
                                                      })), t.closeBluetoothAdapter(t, t.action_car), t.end(t, t.action_car)
                                                    } else r && t.closeBluetoothAdapter(t, t.action_car), t.logReport("BA3", "===开始上报还车失败==="), w = !1, t.car_notification(3, 3, "", "还车失败");
                                                    t.showUnlock()
                                                  })).catch((function(e) {
                                                    t.lockInfo.lbStatus = 2, t.logReport("BA3", "===蓝牙关锁失败==="), r && t.closeBluetoothAdapter(t, t.action_car), parseInt(e.code) >= 1e3 && parseInt(e.code) <= 1004 || 1011 === parseInt(e.code) || 1012 === parseInt(e.code) ? ((2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.backCarErrorModal(!0, 3), w = !1, t.logReport("BA3", "===开始上报还车失败==="), t.car_notification(3, 2, "", "还车失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : ""))) : parseInt(e.code) >= 1005 && parseInt(e.code) <= 1008 && ((2 == t.lockInfo.netStatus || t.lockInfo.netStatus < 0) && t.backCarErrorModal(!0, 3), w = !1, t.logReport("BA3", "===开始上报还车失败==="), t.car_notification(3, 3, "", "还车失败" + (void 0 !== e.remark ? "[" + e.remark + "]" : ""))), t.showUnlock()
                                                  }))), t.logReport("BA3", "===开始网络还车==="), s = 1 === n || 2 === n ? n : 3, t.back_type = s, t.networkLockCar(k(k({}, t.mapInfo), {}, {
                                                    back_type: s,
                                                    action_type: 2
                                                  }))) : 14 == t.action_car.lock_id && (u = 1 === n || 2 === n ? n : 3, t.car_notification(3, 1, u, "还车成功", (function(e) {
                                                    e ? (t.logReport("BA3", "===上报结果：成功==="), t.closeUseCar({
                                                      title: "还车成功",
                                                      icon: "success"
                                                    })) : (t.logReport("BA3", "===上报结果：失败==="), w = !1, t.hideLoading())
                                                  })));
                                                case 30:
                                                case "end":
                                                  return e.stop()
                                              }
                                            }), e)
                                          })));
                                          return function(t) {
                                            return e.apply(this, arguments)
                                          }
                                        }());
                                      case 28:
                                      case "end":
                                        return e.stop()
                                    }
                                  }), e)
                                })))).catch((function() {
                                  t.logReport("BA3", "===获取定位权限失败==="), t.hideLoading()
                                }));
                              case 1:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        })))).catch((function() {
                          t.logReport("BA3", "===蓝牙初始化失败==="), t.hideLoading()
                        }));
                      case 22:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              }
            }
          };
        e.default = I
      }).call(this, n("df3c").default, n("3223").default)
    },
    ef01: function(t, e, n) {
      (function(t, e) {
        var o = n("47a9");
        n("671b"), o(n("3240"));
        var r = o(n("762d"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["ef01", "common/runtime", "common/vendor"]
  ]
]);