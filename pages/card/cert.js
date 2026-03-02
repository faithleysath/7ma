(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/card/cert"], {
    "3cf6": function(e, t, n) {
      (function(e, a) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = o(n("7eb4")),
          r = o(n("ee10")),
          c = o(n("2100")),
          u = {
            data: function() {
              return {
                card_id: "",
                card_code: "",
                order_type: "",
                upload_token: "",
                student_id_image: "",
                student_id_image_view: "",
                phone_certificate_image: "",
                phone_certificate_image_view: "",
                user: {
                  school_id: 0
                }
              }
            },
            onLoad: function(e) {
              var t = e.card_id,
                n = e.card_code,
                a = e.order_type;
              this.getUploadToken(), this.getUserInfo(), this.card_id = t, this.card_code = n, this.order_type = a
            },
            methods: {
              getUserInfo: function() {
                var e = this;
                this.$http.get("user").then((function(t) {
                  e.user = t.data
                })).catch((function(t) {
                  e.user = {
                    school_id: -1
                  }
                }))
              },
              chooseImage: function(t) {
                var n = this;
                c.default.inSystemPage = !0, e.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["album", "camera"],
                  success: function(e) {
                    n.qiniuUpload(e.tempFilePaths[0]).then((function(a) {
                      n[t] = a, n[t + "_view"] = e.tempFilePaths[0]
                    }))
                  }
                })
              },
              qiniuUpload: function(e) {
                var t = this;
                return new Promise((function(n, a) {
                  if (!e) return n("");
                  t.$qiniuUploader.upload(e, (function(e) {
                    n(e.image.key)
                  }), (function() {
                    a()
                  }), {
                    region: "ECN",
                    uptoken: t.upload_token
                  })
                }))
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
              order: function(t, n) {
                var o = this;
                return (0, r.default)(i.default.mark((function t() {
                  var n;
                  return i.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e.showLoading({
                          title: "订单创建中",
                          mask: !0
                        }), t.next = 3, o.$http.post("order", {
                          order_type: o.order_type,
                          card_code: o.card_code,
                          card_id: o.card_id,
                          student_id_image: o.student_id_image,
                          phone_certificate_image: o.phone_certificate_image,
                          need_examine: 1
                        });
                      case 3:
                        200 === (n = t.sent).status_code ? e.showToast({
                          title: "提交审核成功",
                          icon: "success",
                          mask: !0,
                          complete: function() {
                            setTimeout((function() {
                              a.switchTab({
                                url: "/pages/wallet/index"
                              })
                            }), 1500)
                          }
                        }) : e.showToast({
                          title: n.message,
                          icon: "none"
                        });
                      case 5:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              }
            }
          };
        t.default = u
      }).call(this, n("3223").default, n("df3c").default)
    },
    "4efd": function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    "5cee": function(e, t, n) {},
    "8a83": function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("671b"), a(n("3240"));
        var o = a(n("9b8f"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "9b8f": function(e, t, n) {
      n.r(t);
      var a = n("4efd"),
        o = n("af4b");
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      n("ad71");
      var r = n("828b"),
        c = Object(r.a)(o.default, a.b, a.c, !1, null, "02918f24", null, !1, a.a, void 0);
      t.default = c.exports
    },
    ad71: function(e, t, n) {
      var a = n("5cee");
      n.n(a).a
    },
    af4b: function(e, t, n) {
      n.r(t);
      var a = n("3cf6"),
        o = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      t.default = o.a
    }
  },
  [
    ["8a83", "common/runtime", "common/vendor"]
  ]
]);