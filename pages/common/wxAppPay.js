(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/common/wxAppPay"], {
    "1f71": function(a, n, t) {
      t.d(n, "b", (function() {
        return e
      })), t.d(n, "c", (function() {
        return o
      })), t.d(n, "a", (function() {}));
      var e = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    "2cbc": function(a, n, t) {
      var e = t("b479");
      t.n(e).a
    },
    "59cc": function(a, n, t) {
      t.r(n);
      var e = t("1f71"),
        o = t("ab7f");
      for (var i in o)["default"].indexOf(i) < 0 && function(a) {
        t.d(n, a, (function() {
          return o[a]
        }))
      }(i);
      t("2cbc");
      var c = t("828b"),
        s = Object(c.a)(o.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
      n.default = s.exports
    },
    ab7f: function(a, n, t) {
      t.r(n);
      var e = t("ec99"),
        o = t.n(e);
      for (var i in e)["default"].indexOf(i) < 0 && function(a) {
        t.d(n, a, (function() {
          return e[a]
        }))
      }(i);
      n.default = o.a
    },
    b479: function(a, n, t) {},
    d6f6: function(a, n, t) {
      (function(a, n) {
        var e = t("47a9");
        t("671b"), e(t("3240"));
        var o = e(t("59cc"));
        a.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    ec99: function(a, n, t) {
      (function(a) {
        var e = t("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = e(t("1020")),
          i = {
            data: function() {
              return {
                tranNo: null,
                payText: "正在支付中...",
                payImg: "",
                showImg: !1,
                openidKey: "openid",
                successImg: "https://imgfile.xiaofubao.com/group1/M00/05/AA/wKhQNF2j0FyAB2EZAAAJLV3vt1o295.png",
                failImg: "https://imgfile.xiaofubao.com/group1/M00/05/AB/wKhQM12j0HGAROX_AAAHnZG9Em4819.png"
              }
            },
            onLoad: function(n) {
              if (n.is_my_self) this.callPayment(JSON.stringify({
                timeStamp: n.timeStamp,
                nonceStr: decodeURIComponent(n.nonceStr),
                package: n._package,
                signType: decodeURIComponent(n.signType),
                paySign: decodeURIComponent(n.paySign)
              }));
              else {
                if (!n.tranNo) return this.payText = "支付失败, 请重试", this.payImg = this.failImg, void(this.showImg = !0);
                if (n.tranNo == a.getStorageSync("lastPayTranNo")) return this.payText = "该订单已支付", this.payImg = this.successImg, void(this.showImg = !0);
                this.tranNo = n.tranNo, a.getStorageSync(this.openidKey) && this.callOrder()
              }
            },
            methods: {
              back: function() {
                setTimeout((function() {
                  a.reLaunch({
                    url: "/pages/home/index"
                  })
                }), 2e3)
              },
              callOrder: function() {
                var n = this;
                a.request({
                  url: o.default.zyPayURL,
                  data: {
                    openid: a.getStorageSync(n.openidKey),
                    tranNo: n.tranNo,
                    appid: "wx9a6a1a8407b04c5d"
                  },
                  method: "POST",
                  header: {
                    "content-type": "application/x-www-form-urlencoded"
                  },
                  success: function(a) {
                    0 != a.data.statusCode ? (n.payText = a.data.message, n.payImg = n.failImg, n.showImg = !0, n.back()) : n.callPayment(a.data.data)
                  },
                  fail: function(a) {
                    n.payText = "支付失败, 请重试", n.payImg = n.failImg, n.showImg = !0, n.back()
                  },
                  complete: function(a) {
                    console.log("网络访问完成")
                  }
                })
              },
              callPayment: function(n) {
                var t = JSON.parse(n);
                console.log(t, 123);
                var e = this;
                if (!(t && t.timeStamp && t.nonceStr && t.package && t.signType && t.paySign)) return e.payText = "支付失败, 请重试", e.payImg = e.failImg, void(e.showImg = !0);
                a.requestPayment({
                  timeStamp: t.timeStamp,
                  nonceStr: t.nonceStr,
                  package: decodeURIComponent(t.package),
                  signType: t.signType,
                  paySign: t.paySign,
                  success: function(n) {
                    console.log("success: " + JSON.stringify(n)), e.payText = "支付成功", e.payImg = e.successImg, e.showImg = !0, e.tranNo && a.setStorageSync("lastPayTranNo", e.tranNo + "")
                  },
                  fail: function(a) {
                    console.log("fail: " + JSON.stringify(a)), e.payText = "支付失败, 请重试", e.payImg = e.failImg, e.showImg = !0
                  },
                  complete: function(a) {
                    e.back()
                  }
                })
              }
            }
          };
        n.default = i
      }).call(this, t("3223").default)
    }
  },
  [
    ["d6f6", "common/runtime", "common/vendor"]
  ]
]);