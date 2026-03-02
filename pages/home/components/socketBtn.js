(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/home/components/socketBtn"], {
    "24c8": function(t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        props: {
          isSuccess: {
            type: Number,
            default: 0
          },
          text: {
            type: String,
            default: "连接服务器"
          },
          text2: {
            type: String,
            default: "正在连接服务器..."
          },
          background: {
            type: String,
            default: "#DE2736"
          },
          background2: {
            type: String,
            default: "#c0c0c0"
          },
          color: {
            type: String,
            default: "#fff"
          },
          color2: {
            type: String,
            default: "#505050"
          },
          width: {
            type: String,
            default: "100rpx"
          },
          height: {
            type: String,
            default: "50rpx"
          },
          fontSize: {
            type: String,
            default: "35rpx"
          },
          br: {
            type: String,
            default: "50rpx"
          }
        },
        data: function() {
          return {
            pass: !0,
            timer: null
          }
        },
        destroyed: function() {},
        mounted: function() {},
        methods: {
          init: function() {
            var t = this;
            clearTimeout(this.timer), setTimeout((function() {
              t.pass = !0
            }), 500)
          },
          reset: function() {
            var t = this;
            this.pass && (this.pass = !1, this.$emit("socketBtnGetOrder"), clearTimeout(this.timer), this.timer = setTimeout((function() {
              t.$http.get("user/car_authority").then((function(e) {
                console.log("====成功通过接口获取到订单信息===="), t.$emit("socketBtnGetOrderInfo", e.data), t.pass = !0
              })).catch((function(e) {
                t.pass = !0
              }))
            }), 5e3))
          }
        }
      };
      e.default = o
    },
    "272e": function(t, e, n) {
      n.r(e);
      var o = n("24c8"),
        c = n.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(r);
      e.default = c.a
    },
    "2f91": function(t, e, n) {
      n.r(e);
      var o = n("dd0f"),
        c = n("272e");
      for (var r in c)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return c[t]
        }))
      }(r);
      var i = n("828b"),
        a = Object(i.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = a.exports
    },
    dd0f: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return c
      })), n.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["pages/home/components/socketBtn-create-component", {
    "pages/home/components/socketBtn-create-component": function(t, e, n) {
      n("df3c").createComponent(n("2f91"))
    }
  },
  [
    ["pages/home/components/socketBtn-create-component"]
  ]
]);