require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/zhouWei-navBar/index"], {
    "254e": function(t, e, n) {
      n.r(e);
      var o = n("c01d"),
        r = n("57b6");
      for (var a in r)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(a);
      n("985a");
      var i = n("828b"),
        s = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = s.exports
    },
    "57b6": function(t, e, n) {
      n.r(e);
      var o = n("8bc5"),
        r = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      e.default = r.a
    },
    "8bc5": function(t, e, n) {
      (function(t, o) {
        var r = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = r(n("3b2d")),
          i = r(n("7ca3"));

        function s(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach((function(e) {
              (0, i.default)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        var u = ["pages/home/home", "pages/my/my", "pages/demo/common", "pages/template/common", "pages/apiDemo/common"],
          c = ["#FFF", "#fff", "#FFFFFF", "#ffffff", "white", "rgb(255,255,255)", "rgba(255,255,255,1)"],
          f = {
            props: {
              backState: {
                type: [String, Number],
                default: function() {
                  return 1e3
                }
              },
              homeState: {
                type: [String, Number],
                default: function() {
                  return 2e3
                }
              },
              bgColor: {
                type: [String, Array],
                default: function() {
                  return "#FFFFFF"
                }
              },
              bgColorAngle: {
                type: [String, Number],
                default: function() {
                  return 90
                }
              },
              fontColor: {
                type: String,
                default: function() {
                  return "#000000"
                }
              },
              titleCenter: {
                type: Boolean,
                default: function() {
                  return !0
                }
              },
              title: {
                type: String,
                default: function() {
                  return ""
                }
              },
              type: {
                type: String,
                default: function() {
                  return "fixed"
                }
              },
              transparentFixedFontColor: {
                type: String,
                default: function() {
                  return "#000000"
                }
              },
              scrollTop: {
                type: Number,
                default: function() {
                  return 0
                }
              },
              shadow: {
                type: Boolean,
                default: function() {
                  return !1
                }
              }
            },
            data: function() {
              return {
                firstPage: !1,
                transparentValue: 1,
                navTitle: "",
                navFontColor: "#000000",
                navBgColor: "",
                navTransparentFixedFontColor: "#000000",
                statusBarHeight: 0,
                lastFrontColor: "",
                themeBgColorName: ""
              }
            },
            computed: {
              back: function() {
                return 1e3 == this.backState || 3e3 == this.backState
              },
              home: function() {
                return 1e3 == this.homeState
              },
              navFixed: function() {
                return "transparentFixed" == this.type || "fixed" == this.type
              },
              navShadow: function() {
                return !(!this.bgColor || "string" != typeof this.bgColor) && this.shadow && "transparent" !== this.type && c.includes(this.bgColor)
              },
              isWhite: function() {
                return c.includes(this.navFontColor)
              },
              isTwoBtn: function() {
                return (1e3 == this.backState || 3e3 == this.backState) && 1e3 == this.homeState && !this.firstPage
              }
            },
            watch: {
              title: function(t) {
                this.navTitle = t
              },
              fontColor: function(t) {
                this.navFontColor = t, this.settingColor()
              },
              bgColor: function(t) {
                this.getNavBgColor(t)
              },
              transparentFixedFontColor: function(t) {
                this.navTransparentFixedFontColor = t
              },
              scrollTop: function(t) {
                this.pageScroll({
                  scrollTop: t
                })
              }
            },
            created: function() {
              var e = l(l(l(l(l({}, t.getSystemSetting()), t.getDeviceInfo()), t.getWindowInfo()), t.getAppBaseInfo()), t.getAppAuthorizeSetting());
              this.navTitle = this.title, this.navFontColor = this.fontColor, this.getNavBgColor(this.bgColor), this.navTransparentFixedFontColor = this.transparentFixedFontColor, this.statusBarHeight = e.statusBarHeight, this.pageScroll({
                scrollTop: this.scrollTop
              });
              var n = getCurrentPages();
              1 != n.length || u.includes(n[0].route) || (this.firstPage = !0)
            },
            methods: {
              onBackPage: function() {
                this.$emit("back")
              },
              onBackHome: function() {
                o.reLaunch({
                  url: "/pages/home/index"
                })
              },
              pageScroll: function(t) {
                "transparentFixed" == this.type && (t.scrollTop && t.scrollTop > 0 ? t.scrollTop > 180 ? this.transparentValue = 1 : this.transparentValue = t.scrollTop / 180 : this.transparentValue = 0, this.settingColor())
              },
              getNavBgColor: function(t) {
                if ("string" == typeof t) "transparent" == this.type ? this.navBgColor = "" : -1 === t.indexOf("#") ? (this.themeBgColorName = t, this.navBgColor = "") : this.navBgColor = "linear-gradient(90deg," + t + "," + t + ")";
                else if (Array.isArray(t) && t.length >= 2) {
                  var e = "linear-gradient(" + this.bgColorAngle + "deg";
                  t.forEach((function(t) {
                    "string" == typeof t ? e += "," + t : "object" == (0, a.default)(t) && (e += "," + t.color + " " + t.scale)
                  })), e += ")", this.navBgColor = e
                }
              },
              settingColor: function() {
                var t = this,
                  e = this.navFontColor;
                "transparentFixed" == this.type && this.transparentValue <= .5 && (e = this.navTransparentFixedFontColor);
                var n = "#000000";
                c.includes(e) && (n = "#ffffff"), this.lastFrontColor != n && setTimeout((function() {
                  t.lastFrontColor = n, o.setNavigationBarColor({
                    frontColor: n,
                    backgroundColor: "#FFFFFF"
                  })
                }), 150)
              }
            }
          };
        e.default = f
      }).call(this, n("3223").default, n("df3c").default)
    },
    "985a": function(t, e, n) {
      var o = n("f700");
      n.n(o).a
    },
    c01d: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return r
      })), n.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          var t = (this._self._c, this.__get_style([this.navBgColor ? {
            backgroundImage: this.navBgColor
          } : {}, {
            paddingTop: this.statusBarHeight + "px",
            color: this.navFontColor,
            opacity: this.transparentValue
          }]));
          this.$mp.data = Object.assign({}, {
            $root: {
              s0: t
            }
          })
        },
        r = []
    },
    f700: function(t, e, n) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/zhouWei-navBar/index-create-component", {
    "components/zhouWei-navBar/index-create-component": function(t, e, n) {
      n("df3c").createComponent(n("254e"))
    }
  },
  [
    ["components/zhouWei-navBar/index-create-component"]
  ]
]);