(global.webpackJsonp = global.webpackJsonp || []).push([
  ["common/main"], {
    2272: function(e, t, n) {
      n.r(t);
      var o = n("eb82");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      n("f15d"), n("574f");
      var i = n("828b"),
        s = Object(i.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
      t.default = s.exports
    },
    "574f": function(e, t, n) {
      var o = n("9024");
      n.n(o).a
    },
    9024: function(e, t, n) {},
    da54: function(e, t, n) {
      (function(e, o, a) {
        var i = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.http = void 0;
        var s = i(n("3b2d")),
          r = i(n("7ca3"));
        n("671b");
        var c = i(n("3240")),
          u = i(n("9b45")),
          d = i(n("2272")),
          l = i(n("bd5f"));
        n("4d71"), n("496b");
        var f = i(n("1020")),
          g = i(n("c29f")),
          p = i(n("865e")),
          h = (i(n("519e")), i(n("b2d0")));

        function m(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function v(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? m(Object(n), !0).forEach((function(t) {
              (0, r.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        e.__webpack_require_UNI_MP_PLUGIN__ = n;
        var S = new(n("4fd5"));
        c.default.component("my-header", (function() {
          n.e("components/zhouWei-navBar/index").then(function() {
            return resolve(n("254e"))
          }.bind(null, n)).catch(n.oe)
        }));
        var T = v(v(v(v(v({}, e.getSystemSetting()), e.getDeviceInfo()), e.getWindowInfo()), e.getAppBaseInfo()), e.getAppAuthorizeSetting());
        c.default.prototype.autoUpdate(), c.default.use(u.default);
        var y = T;
        S.config.timeout = 1e4, S.interceptors.request.use((function(t) {
          return t.headers.Accept = "application/vnd.ws.v1+json", t.headers.Client = "Wechat_MiniAPP", t.headers["Phone-Model"] = y.model, t.headers["Phone-Brand"] = y.brand, t.headers["Phone-System"] = "ios" === y.platform.toLowerCase() ? "iOS" : "Android", t.headers["Phone-System-Version"] = y.system.replace("iOS ", ""), t.headers["App-Version"] = f.default.version, e.getStorageSync("token") && (t.headers.Authorization = "Bearer " + e.getStorageSync("token")), t.baseURL = f.default.baseURL, t
        })), S.interceptors.response.use((function(t) {
          return void 0 !== t.data && void 0 !== t.data.status_code && 401 === t.data.status_code && (e.removeStorageSync("token"), h.default.clearStorage(), !e.getStorageSync("_401") && getCurrentPages()[getCurrentPages().length - 1] && "pages/auth/index" != getCurrentPages()[getCurrentPages().length - 1].route && e.showToast({
            title: t.data.message,
            icon: "none",
            complete: function(t) {
              setTimeout((function() {
                e.navigateTo({
                  url: "/pages/auth/index",
                  complete: function(e) {}
                })
              }), 500)
            }
          }), e.setStorageSync("_401", !0)), t.data
        }), (function(t) {
          o.hideLoading(), t.message && t.message.indexOf("ERR_TIME_OUT") ? o.showToast({
            title: "当前网络不稳定",
            icon: "none"
          }) : e.showModal({
            title: "溫馨提示",
            content: "服务器繁忙",
            confirmText: "知道了",
            showCancel: !1
          })
        }));
        var L = {
          Accept: "application/vnd.ws.v1+json",
          Client: "Wechat_MiniAPP"
        };
        L["Phone-Model"] = y.model, L["Phone-Brand"] = y.brand, L["Phone-System"] = "ios" === y.platform.toLowerCase() ? "iOS" : "Android", L["Phone-System-Version"] = y.system.replace("iOS ", ""), L["App-Version"] = f.default.version, L["X-App-ID"] = "default", e.setStorageSync("device_id", y.model), a(new c.default(v({
          mpType: "app",
          store: l.default
        }, d.default))).$mount();
        var w = {
          isTokenExpireTime: function() {
            return e.getStorageSync("token_expire_time") && !((new Date).getTime() >= e.getStorageSync("token_expire_time")) || (this.success({
              data: {
                status_code: 401
              }
            }), !1)
          },
          authGet: function(t, n, a) {
            var i = this,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (e.getStorageSync("token")) {
              if (!this.isTokenExpireTime()) return;
              L.Authorization = "Bearer " + e.getStorageSync("token")
            }
            h.default.getXTraceId() && (L["X-Trace-Id"] = h.default.getXTraceId());
            var r = h.default.getStorageKey();
            r && r.id && (L["U-User-Id"] = r.id);
            var c = this.getGenieLampHsession();
            return c && (L["GenieLamp-H-session"] = c), this.timeout(t), new Promise((function(e, r) {
              o.request({
                url: f.default.authBaseURL + "/" + t,
                method: "get",
                data: n,
                dataType: "json",
                header: L,
                timeout: 15e3,
                success: function(t) {
                  i.success(t), a ? a(t.data) : e(t.data)
                },
                fail: function(o) {
                  i.error(o, r, e, t, n, s, "authGet")
                },
                complete: function(e) {
                  i.genielamp(e)
                }
              })
            }))
          },
          authPost: function(t, n, a) {
            var i = this,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (e.getStorageSync("token")) {
              if (!this.isTokenExpireTime()) return;
              L.Authorization = "Bearer " + e.getStorageSync("token")
            }
            h.default.getXTraceId() && (L["X-Trace-Id"] = h.default.getXTraceId());
            var r = h.default.getStorageKey();
            r && r.id && (L["U-User-Id"] = r.id);
            var c = this.getGenieLampHsession();
            return c && (L["GenieLamp-H-session"] = c), this.timeout(t), new Promise((function(e, r) {
              o.request({
                url: f.default.authBaseURL + "/" + t,
                method: "POST",
                data: n,
                dataType: "json",
                header: L,
                timeout: 15e3,
                success: function(t) {
                  i.success(t), a ? a(t.data) : e(t.data)
                },
                fail: function(o) {
                  i.error(o, r, e, t, n, s, "authPost")
                },
                complete: function(e) {
                  i.genielamp(e)
                }
              })
            }))
          },
          getHealth: function(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
            if (e) return new Promise((function(a, i) {
              o.request({
                url: "https://ws1.7mate.cn/health?sid=" + e,
                method: "GET",
                timeout: n,
                success: function(e) {
                  a(e)
                },
                fail: function(e) {
                  i(e)
                },
                complete: function(e) {
                  t.genielamp(e)
                }
              })
            }))
          },
          getTest: function(t, n, a) {
            var i = this,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (e.getStorageSync("token")) {
              if (!this.isTokenExpireTime()) return;
              L.Authorization = "Bearer " + e.getStorageSync("token")
            }
            h.default.getXTraceId() && (L["X-Trace-Id"] = h.default.getXTraceId());
            var r = h.default.getStorageKey();
            r && r.id && (L["U-User-Id"] = r.id);
            var c = this.getGenieLampHsession();
            return c && (L["GenieLamp-H-session"] = c), this.timeout(t), new Promise((function(e, r) {
              o.request({
                url: f.default.baseURL + "/" + t,
                method: "GET",
                data: n,
                dataType: "json",
                header: L,
                timeout: 5e3,
                success: function(t) {
                  i.success(t), a ? a(t.data) : e(t.data)
                },
                fail: function(o) {
                  i.error(o, r, e, t, n, s, "getTest")
                },
                complete: function(e) {
                  i.genielamp(e)
                }
              })
            }))
          },
          getTest2: function(t, n, a) {
            var i = this,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (e.getStorageSync("token")) {
              if (!this.isTokenExpireTime()) return;
              L.Authorization = "Bearer " + e.getStorageSync("token")
            }
            h.default.getXTraceId() && (L["X-Trace-Id"] = h.default.getXTraceId());
            var r = h.default.getStorageKey();
            r && r.id && (L["U-User-Id"] = r.id);
            var c = this.getGenieLampHsession();
            return c && (L["GenieLamp-H-session"] = c), this.timeout(t), new Promise((function(e, r) {
              o.request({
                url: f.default.baseURL + "/" + t,
                method: "GET",
                data: n,
                dataType: "json",
                header: L,
                timeout: 5e3,
                success: function(t) {
                  i.success(t), a ? a(t.data) : e(t.data)
                },
                fail: function(o) {
                  i.error(o, r, e, t, n, s, "getTest2")
                },
                complete: function(e) {
                  i.genielamp(e)
                }
              })
            }))
          },
          get: function(t, n, a) {
            var i = this,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (e.getStorageSync("token")) {
              if (!this.isTokenExpireTime()) return;
              L.Authorization = "Bearer " + e.getStorageSync("token")
            }
            h.default.getXTraceId() && (L["X-Trace-Id"] = h.default.getXTraceId());
            var r = h.default.getStorageKey();
            r && r.id && (L["U-User-Id"] = r.id);
            var c = this.getGenieLampHsession();
            return c && (L["GenieLamp-H-session"] = c), this.timeout(t), new Promise((function(e, r) {
              o.request({
                url: f.default.baseURL + "/" + t,
                method: "GET",
                data: n,
                dataType: "json",
                header: L,
                timeout: 8e3,
                success: function(t) {
                  i.success(t), a ? a(t.data) : e(t.data)
                },
                fail: function(o) {
                  i.error(o, r, e, t, n, s, "get")
                },
                complete: function(e) {
                  i.genielamp(e)
                }
              })
            }))
          },
          post: function(t, n, a) {
            var i = this,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (e.getStorageSync("token")) {
              if (!this.isTokenExpireTime()) return;
              L.Authorization = "Bearer " + e.getStorageSync("token")
            }
            h.default.getXTraceId() && (L["X-Trace-Id"] = h.default.getXTraceId());
            var r = h.default.getStorageKey();
            r && r.id && (L["U-User-Id"] = r.id);
            var c = this.getGenieLampHsession();
            return c && (L["GenieLamp-H-session"] = c), this.timeout(t), new Promise((function(e, r) {
              o.request({
                url: f.default.baseURL + "/" + t,
                method: "POST",
                data: n,
                dataType: "json",
                header: L,
                timeout: 15e3,
                success: function(t) {
                  i.success(t), a ? a(t.data) : e(t.data)
                },
                fail: function(o) {
                  i.error(o, r, e, t, n, s, "post")
                },
                complete: function(e) {
                  i.genielamp(e)
                }
              })
            }))
          },
          delete: function(t, n, a) {
            var i = this,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (e.getStorageSync("token")) {
              if (!this.isTokenExpireTime()) return;
              L.Authorization = "Bearer " + e.getStorageSync("token")
            }
            h.default.getXTraceId() && (L["X-Trace-Id"] = h.default.getXTraceId());
            var r = h.default.getStorageKey();
            r && r.id && (L["U-User-Id"] = r.id);
            var c = this.getGenieLampHsession();
            return c && (L["GenieLamp-H-session"] = c), this.timeout(t), new Promise((function(e, r) {
              o.request({
                url: f.default.baseURL + "/" + t,
                method: "DELETE",
                data: n,
                dataType: "json",
                header: L,
                timeout: 15e3,
                success: function(t) {
                  i.success(t), a ? a(t.data) : e(t.data)
                },
                fail: function(o) {
                  i.error(o, r, e, t, n, s, "delete")
                },
                complete: function(e) {
                  i.genielamp(e)
                }
              })
            }))
          },
          put: function(t, n, a) {
            var i = this,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (e.getStorageSync("token")) {
              if (!this.isTokenExpireTime()) return;
              L.Authorization = "Bearer " + e.getStorageSync("token")
            }
            h.default.getXTraceId() && (L["X-Trace-Id"] = h.default.getXTraceId());
            var r = h.default.getStorageKey();
            r && r.id && (L["U-User-Id"] = r.id);
            var c = this.getGenieLampHsession();
            return c && (L["GenieLamp-H-session"] = c), this.timeout(t), new Promise((function(e, r) {
              o.request({
                url: f.default.baseURL + "/" + t,
                method: "PUT",
                data: n,
                dataType: "json",
                header: L,
                timeout: 15e3,
                success: function(t) {
                  i.success(t), a ? a(t.data) : e(t.data)
                },
                fail: function(o) {
                  i.error(o, r, e, t, n, s, "put")
                },
                complete: function(e) {
                  i.genielamp(e)
                }
              })
            }))
          },
          getGenieLampHsession: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "value",
              n = e.getStorageSync("GenieLamp-H-session"),
              o = n ? n[t] : null;
            return o
          },
          setGenieLampHsession: function(t) {
            e.setStorageSync("GenieLamp-H-session", {
              value: t,
              expire: Date.now()
            })
          },
          delGenieLampHsessioValue: null,
          timeout: function() {
            arguments.length > 0 && void 0 !== arguments[0] || f.default.baseURL;
            var t = Date.now(),
              n = this.getGenieLampHsession("expire");
            this.delGenieLampHsessioValue = this.getGenieLampHsession() || this.delGenieLampHsessioValue, n && t - n > 6e6 && (e.removeStorageSync("GenieLamp-H-session"), delete L["GenieLamp-H-session"])
          },
          genielamp: function(t) {
            var n = t.header,
              a = t.statusCode,
              i = "object" == (0, s.default)(n) ? n["X-Trace-Id"] : "";
            i && h.default.setXTraceId(i), Date.now(), this.getGenieLampHsession("expire"), this.getGenieLampHsession();
            var r = "object" == (0, s.default)(n) ? n["GenieLamp-H-session"] : "";
            this.timeout(), r && !this.getGenieLampHsession() && this.delGenieLampHsessioValue != r && this.setGenieLampHsession(r);
            var c = a,
              u = getCurrentPages().slice(-1)[0] ? getCurrentPages().slice(-1)[0].route : "";
            600 != c && 429 != c || "pages/http600/index" == u ? 200 == c && "pages/http600/index" == u && o.$emit("httpCodeNot600") : e.reLaunch({
              url: "/pages/http600/index?code=" + c
            })
          },
          showLogin: !1,
          success: function(e) {
            void 0 !== e.data && void 0 !== e.data.status_code && e.data.status_code >= 400 && this.infoError(e)
          },
          error: function(e, t, n, o, a, i, s) {
            e.message = e.message || e.errMsg, t(e)
          },
          infoError: function(t) {
            var n = this;
            if (!this.showLogin) {
              this.showLogin = !0;
              var a = t.data.message || "未知错误";
              401 == t.data.status_code ? (e.showModal({
                title: "提示",
                content: "您还未登录，是否前往登录？",
                confirmText: "登录",
                success: function(t) {
                  t.confirm && e.navigateTo({
                    url: "/pages/auth/index"
                  }), n.showLogin = !1
                }
              }), e.removeStorageSync("token"), h.default.clearStorage(), o.$emit("loginout")) : 40301 == t.data.status_code ? e.showModal({
                title: "提示",
                content: a,
                confirmText: "前往验证",
                success: function(o) {
                  var a = o.confirm;
                  n.showLogin = !1, a && e.navigateTo({
                    url: "/pages/40301/captcha-popup?login_key=" + t.data.data.login_key
                  })
                }
              }) : 429 != t.data.status_code && 200 != t.statusCode && 403001 != t.data.status_code ? (a.indexOf("锁定") > -1 && (e.removeStorageSync("token"), h.default.clearStorage(), o.$emit("loginout")), e.showModal({
                title: "提示",
                content: a,
                confirmText: "知道了",
                showCancel: !1,
                success: function(e) {
                  e.confirm, n.showLogin = !1
                }
              })) : this.showLogin = !1
            }
          }
        };
        t.http = w, c.default.prototype.$http = w, c.default.prototype.$md5 = p.default, c.default.prototype.$qiniuUploader = g.default, c.default.config.productionTip = !1, c.default.component("ws-loading", (function() {
          n.e("components/loading").then(function() {
            return resolve(n("f7af"))
          }.bind(null, n)).catch(n.oe)
        })), c.default.component("ws-header", (function() {
          n.e("components/header").then(function() {
            return resolve(n("86d3"))
          }.bind(null, n)).catch(n.oe)
        })), c.default.component("ws-tabbar", (function() {
          n.e("components/tabbar").then(function() {
            return resolve(n("c6a8"))
          }.bind(null, n)).catch(n.oe)
        })), c.default.component("ws-modal", (function() {
          n.e("components/modal").then(function() {
            return resolve(n("ea95"))
          }.bind(null, n)).catch(n.oe)
        })), e.getStorageSync("user") && e.removeStorageSync("user")
      }).call(this, n("3223").default, n("df3c").default, n("df3c").createApp)
    },
    e160: function(e, t, n) {},
    e31c: function(e, t, n) {
      (function(e) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = o(n("2100")),
          i = {
            data: function() {
              return {
                isConnectLoading: !1
              }
            },
            created: function() {
              var t = this;
              e.$on("checkAndReconnect", (function() {
                t.checkAndReconnect()
              })), this.$store.dispatch("wss/initAppStart"), this.initNetworkListener()
            },
            onShow: function() {
              a.default.inSystemPage = !1, clearTimeout(null), this.$store.commit("wss/SET_APP_BACKGROUND", !1), console.log("[App] 应用恢复前台，立即检查WebSocket连接状态"), this.checkAndReconnect()
            },
            onHide: function() {
              console.log("[App] 应用进入后台，保持连接状态"), this.$store.commit("wss/SET_APP_BACKGROUND", !0), e.$emit("appHide"), clearTimeout(null)
            },
            methods: {
              initNetworkListener: function() {
                var t = this;
                e.onNetworkStatusChange((function(e) {
                  console.log("[App] 网络状态变化", {
                    isConnected: e.isConnected,
                    networkType: e.networkType,
                    timestamp: (new Date).toISOString()
                  }), e.isConnected ? (console.log("[App] 网络恢复，准备检查WebSocket连接"), t.$store.commit("wss/SET_NETWORK_AVAILABLE", !0), setTimeout((function() {
                    t.checkAndReconnect()
                  }), 2e3)) : (console.log("[App] 网络断开，标记WebSocket连接无效"), t.$store.commit("wss/SET_NETWORK_AVAILABLE", !1))
                }))
              },
              checkAndReconnect: function() {
                var t = this;
                if (!this.isConnectLoading) {
                  if (this.isConnectLoading = !0, !e.getStorageSync("token")) return console.log("[App] 无token，跳过连接检查"), void(this.isConnectLoading = !1);
                  this.$store.dispatch("wss/getWssState").then((function(e) {
                    e.isSuccess ? console.log("[App] WebSocket已连接，连接状态良好") : (console.log("[App] WebSocket未连接，立即重连"), t.$store.dispatch("wss/connect")), t.isConnectLoading = !1
                  })).catch((function(e) {
                    console.log("[App] 检查连接状态失败，尝试重连", e), t.$store.dispatch("wss/connect"), t.isConnectLoading = !1
                  }))
                }
              }
            }
          };
        t.default = i
      }).call(this, n("df3c").default)
    },
    eb82: function(e, t, n) {
      n.r(t);
      var o = n("e31c"),
        a = n.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      t.default = a.a
    },
    f15d: function(e, t, n) {
      var o = n("e160");
      n.n(o).a
    }
  },
  [
    ["da54", "common/runtime", "common/vendor"]
  ]
]);