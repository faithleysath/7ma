(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/bxSubmit/index"], {
    "17d5": function(e, t, n) {
      var a = n("29bd");
      n.n(a).a
    },
    "29bd": function(e, t, n) {},
    "3dde": function(e, t, n) {
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = a(n("7eb4")),
          r = a(n("ee10")),
          o = a(n("7ca3"));

        function c(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, a)
          }
          return n
        }

        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach((function(t) {
              (0, o.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var p = {
          data: function() {
            return {
              info: {},
              apply_payment: {
                user_name: "",
                accident_time: "",
                image: [],
                accident_images: [],
                accident_detail: "",
                order_id: "",
                order_created_at: "",
                accident_address: ""
              },
              upload_token: "",
              showTime: !1,
              currentDate: (new Date).getTime()
            }
          },
          onLoad: function(e) {
            var t = e.data;
            this.getUploadToken(), this.info = JSON.parse(decodeURIComponent(t)), this.info.apply_payment ? (this.apply_payment = u(u(u({}, this.apply_payment), this.info.apply_payment), {}, {
              order_created_at: this.info.order_created_at,
              accident_images: this.info.apply_payment.apply_payment_img.map((function(e) {
                return e.image
              }))
            }), this.currentDate = new Date(this.apply_payment.accident_time.replace(/\-/g, "/")).getTime()) : this.getUserInfo()
          },
          methods: {
            submit: function() {
              this.$http.post("cyclingOrderApplyPayment", u(u({}, this.apply_payment), {}, {
                accident_images: JSON.stringify(this.apply_payment.accident_images)
              })).then((function(t) {
                200 === t.status_code ? (e.showToast({
                  title: "提交成功",
                  icon: "none",
                  mask: !0,
                  duration: 3e3
                }), setTimeout((function() {
                  e.navigateBack({
                    delta: 3
                  })
                }), 2e3)) : e.showToast({
                  title: t.message || "提交错误",
                  icon: "none",
                  mask: !0,
                  duration: 3e3
                })
              }))
            },
            prevImage: function(t, n) {
              var a = this;
              e.showActionSheet({
                itemList: ["查看图片", "删除图片"],
                success: function(i) {
                  var r = i.tapIndex;
                  0 === r ? e.previewImage({
                    current: t,
                    urls: a.apply_payment.image
                  }) : 1 === r && (a.apply_payment.image.splice(n, 1), a.apply_payment.accident_images.splice(n, 1))
                },
                fail: function(e) {}
              })
            },
            openUpload: function() {
              var t = this;
              e.chooseMedia({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album", "camera"],
                success: function() {
                  var e = (0, r.default)(i.default.mark((function e(n) {
                    return i.default.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          t.qiniuUpload(n.tempFiles);
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
            },
            qiniuUpload: function(t) {
              var n = this;
              this.$qiniuUploader.upload(t[0].tempFilePath, (function(e) {
                n.apply_payment.accident_images.push(e.image.key), n.apply_payment.image.push(t[0].tempFilePath)
              }), (function() {
                e.showToast({
                  title: "图片上传失败",
                  icon: "none"
                })
              }), {
                region: "ECN",
                uptoken: this.upload_token
              })
            },
            getUploadToken: function() {
              var e = this;
              return (0, r.default)(i.default.mark((function t() {
                var n;
                return i.default.wrap((function(t) {
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
            confirm: function(e) {
              var t = e.detail;
              this.currentDate = t, this.apply_payment.accident_time = function(e) {
                var t = (e = new Date(e)).getFullYear(),
                  n = e.getMonth() + 1,
                  a = e.getHours(),
                  i = e.getMinutes();
                n = n < 10 ? "0" + n : n;
                var r = e.getDate();
                return t + "-" + n + "-" + (r = r < 10 ? "0" + r : r) + " " + (a = a < 10 ? "0" + a : a) + ":" + (i = i < 10 ? "0" + i : i) + ":00"
              }(t), this.showTime = !1
            },
            openTime: function() {
              this.showTime = !0
            },
            getUserInfo: function() {
              var e = this;
              this.$http.get("user").then((function(t) {
                e.apply_payment = u(u({}, e.apply_payment), {}, {
                  order_id: e.info.order_id,
                  order_created_at: e.info.order_created_at,
                  user_name: t.data.name
                })
              }))
            }
          }
        };
        t.default = p
      }).call(this, n("3223").default)
    },
    "55cf": function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {}));
      var a = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.apply_payment.accident_images.length < 5 && e.apply_payment.image.length < 5);
          e._isMounted || (e.e0 = function(t) {
            e.showTime = !1
          }), e.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        i = []
    },
    "64e0": function(e, t, n) {
      var a = n("8c35");
      n.n(a).a
    },
    "695d": function(e, t, n) {
      n.r(t);
      var a = n("55cf"),
        i = n("a1b9");
      for (var r in i)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(r);
      n("64e0"), n("17d5");
      var o = n("828b"),
        c = Object(o.a)(i.default, a.b, a.c, !1, null, "6f5db643", null, !1, a.a, void 0);
      t.default = c.exports
    },
    "8c35": function(e, t, n) {},
    a1b9: function(e, t, n) {
      n.r(t);
      var a = n("3dde"),
        i = n.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      t.default = i.a
    },
    d3ac: function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var i = a(n("695d"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["d3ac", "common/runtime", "common/vendor"]
  ]
]);