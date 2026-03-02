(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/40301/captcha-popup"], {
    "0276": function(t, e, i) {
      (function(t, e) {
        var n = i("47a9");
        i("671b"), n(i("3240"));
        var r = n(i("430c"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(r.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    "2b03": function(t, e, i) {
      (function(t) {
        var n = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = n(i("7eb4")),
          a = n(i("ee10")),
          s = i("df2d"),
          o = {
            data: function() {
              return {
                show: !0,
                baseUrl: "https://newmapi.7mate.cn",
                loginKey: "",
                sdk: null,
                isLoading: !1,
                isError: !1,
                isSuccess: !1,
                captchaImg: "",
                sliderImg: "",
                sliderY: 0,
                token: "",
                captchaType: "slider",
                tips: "",
                clickDots: [],
                sliderX: 0,
                startX: 0,
                isDragging: !1,
                track: [],
                startTime: 0,
                containerWidth: 0,
                btnWidth: 0,
                maxMove: 0
              }
            },
            onLoad: function(e) {
              var i = e.login_key;
              console.log(i, "loginKey123123123123");
              var n = t.getSystemInfoSync().windowWidth / 750;
              this.containerWidth = 536 * n, this.btnWidth = 80 * n, this.maxMove = 456 * n, this.loginKey = i, this.initCaptcha()
            },
            methods: {
              initCaptcha: function() {
                var e = this;
                return (0, a.default)(r.default.mark((function i() {
                  var n, a, o, c;
                  return r.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        if (e.loginKey) {
                          i.next = 4;
                          break
                        }
                        return console.error("Captcha Component: loginKey is required"), e.isError = !0, i.abrupt("return");
                      case 4:
                        return e.isLoading = !0, e.isError = !1, e.isSuccess = !1, e.sliderX = 0, e.track = [], i.prev = 9, e.sdk ? e.sdk.loginKey = e.loginKey : e.sdk = new s({
                          baseUrl: e.baseUrl,
                          loginKey: e.loginKey
                        }), i.next = 13, e.sdk.generate("login", "slider");
                      case 13:
                        n = i.sent, a = t.getSystemInfoSync(), o = a.windowWidth / 750, c = 536 * o / 300, e.captchaType = n.type || "slider", e.tips = n.tips || "请依次点击图中文本", e.captchaImg = n.background_img, e.sliderImg = n.slider_img, e.sliderY = (n.slider_y || 0) * c, e.token = n.token, e.isLoading = !1, e.imgScale = c, e.clickDots = [], e.track = [], e.startTime = Date.now(), i.next = 37;
                        break;
                      case 31:
                        i.prev = 31, i.t0 = i.catch(9), console.error(i.t0), e.isLoading = !1, e.isError = !0, t.showToast({
                          title: "加载验证码失败",
                          icon: "none"
                        });
                      case 37:
                      case "end":
                        return i.stop()
                    }
                  }), i, null, [
                    [9, 31]
                  ])
                })))()
              },
              onTouchStart: function(t) {
                this.isLoading || this.isSuccess || this.isError || (this.isDragging = !0, this.startX = t.touches[0].clientX, this.startTime = Date.now(), this.track = [{
                  x: 0,
                  y: 0,
                  t: 0
                }])
              },
              onTouchMove: function(t) {
                if (this.isDragging) {
                  var e = t.touches[0].clientX - this.startX,
                    i = Math.max(0, Math.min(e, this.maxMove));
                  this.sliderX = i, this.track.push({
                    x: Math.round(i),
                    y: 0,
                    t: Date.now() - this.startTime
                  })
                }
              },
              onTouchEnd: function(e) {
                var i = this;
                return (0, a.default)(r.default.mark((function e() {
                  var n, a, s, o, c;
                  return r.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (i.isDragging) {
                          e.next = 2;
                          break
                        }
                        return e.abrupt("return");
                      case 2:
                        return i.isDragging = !1, n = Date.now() - i.startTime, a = i.sliderX, s = Math.round(a / i.imgScale), o = i.track.map((function(t) {
                          return {
                            x: Math.round(t.x / i.imgScale),
                            y: 0,
                            t: t.t
                          }
                        })), e.prev = 7, e.next = 10, i.sdk.verify(i.token, {
                          x: s,
                          y: 0,
                          track: o,
                          duration: n
                        });
                      case 10:
                        c = e.sent, console.log(c, "result"), c.success ? (i.isSuccess = !0, t.showToast({
                          title: "验证通过"
                        }), setTimeout((function() {
                          i.show = !1, t.navigateBack()
                        }), 1500)) : i.handleFail(), e.next = 19;
                        break;
                      case 15:
                        e.prev = 15, e.t0 = e.catch(7), console.error(e.t0), i.handleFail();
                      case 19:
                      case "end":
                        return e.stop()
                    }
                  }), e, null, [
                    [7, 15]
                  ])
                })))()
              },
              handleFail: function() {
                var e = this;
                t.showToast({
                  title: "验证失败，请重试",
                  icon: "none"
                }), this.isError = !0, this.sliderX = 0, setTimeout((function() {
                  e.initCaptcha()
                }), 1e3), this.triggerEvent("fail", {
                  error: "verify_failed"
                })
              },
              reset: function() {
                this.isLoading = !1, this.isError = !1, this.isSuccess = !1, this.sliderX = 0, this.track = [], this.clickDots = []
              },
              onClose: function() {
                this.show = !1
              }
            }
          };
        e.default = o
      }).call(this, i("3223").default)
    },
    "2e9c": function(t, e, i) {
      i.r(e);
      var n = i("2b03"),
        r = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(a);
      e.default = r.a
    },
    "2f61": function(t, e, i) {
      i.d(e, "b", (function() {
        return n
      })), i.d(e, "c", (function() {
        return r
      })), i.d(e, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    "430c": function(t, e, i) {
      i.r(e);
      var n = i("2f61"),
        r = i("2e9c");
      for (var a in r)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return r[t]
        }))
      }(a);
      i("597e");
      var s = i("828b"),
        o = Object(s.a)(r.default, n.b, n.c, !1, null, "acc1da16", null, !1, n.a, void 0);
      e.default = o.exports
    },
    "597e": function(t, e, i) {
      var n = i("875d");
      i.n(n).a
    },
    "875d": function(t, e, i) {}
  },
  [
    ["0276", "common/runtime", "common/vendor"]
  ]
]);