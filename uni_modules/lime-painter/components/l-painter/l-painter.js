(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uni_modules/lime-painter/components/l-painter/l-painter"], {
    "206b": function(e, t, n) {
      (function(e) {
        var r = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = r(n("7eb4")),
          i = r(n("ee10")),
          s = n("762d2"),
          c = r(n("d6f6b")),
          u = n("d2c3"),
          o = r(n("d242")),
          d = {
            name: "lime-painter",
            mixins: [c.default, (0, s.parent)("painter"), {}],
            data: function() {
              return {
                use2dCanvas: !1,
                canvasHeight: 150,
                canvasWidth: null,
                parentWidth: 0,
                inited: !1,
                progress: 0,
                firstRender: 0,
                done: !1,
                tasks: []
              }
            },
            computed: {
              styles: function() {
                return "".concat(this.size).concat(this.customStyle || "", ";") + (this.hidden && "position: fixed; left: 1500rpx;")
              },
              canvasId: function() {
                return "l-painter".concat(this._ && this._.uid || this._uid)
              },
              size: function() {
                if (this.boardWidth && this.boardHeight) return "width:".concat(this.boardWidth, "px; height: ").concat(this.boardHeight, "px;")
              },
              dpr: function() {
                return this.pixelRatio || e.getSystemInfoSync().pixelRatio
              },
              boardWidth: function() {
                var e = (this.elements && this.elements.css || this.elements || this).width,
                  t = void 0 === e ? 0 : e,
                  n = (0, u.toPx)(t || this.width);
                return n || Math.max(n, (0, u.toPx)(this.canvasWidth))
              },
              boardHeight: function() {
                var e = (this.elements && this.elements.css || this.elements || this).height,
                  t = void 0 === e ? 0 : e,
                  n = (0, u.toPx)(t || this.height);
                return n || Math.max(n, (0, u.toPx)(this.canvasHeight))
              },
              hasBoard: function() {
                return this.board && Object.keys(this.board).length
              },
              elements: function() {
                return this.hasBoard ? this.board : JSON.parse(JSON.stringify(this.el))
              }
            },
            created: function() {
              this.use2dCanvas = "2d" === this.type && (0, u.canIUseCanvas2d)() && !u.isPC
            },
            mounted: function() {
              var e = this;
              return (0, i.default)(a.default.mark((function t() {
                return a.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, (0, u.sleep)(30);
                    case 2:
                      return t.next = 4, e.getParentWeith();
                    case 4:
                      e.$nextTick((function() {
                        setTimeout((function() {
                          e.$watch("elements", e.watchRender, {
                            deep: !0,
                            immediate: !0
                          })
                        }), 30)
                      }));
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            destroyed: function() {
              this.done = !1, this.inited = !1, this.firstRender = 0, this.progress = 0, this.painter = null, clearTimeout(this.rendertimer)
            },
            methods: {
              watchRender: function(e, t) {
                var n = this;
                return (0, i.default)(a.default.mark((function r() {
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (e && e.views && (n.firstRender ? n.firstRender : e.views.length) && Object.keys(e).length && JSON.stringify(e) != JSON.stringify(t)) {
                          r.next = 2;
                          break
                        }
                        return r.abrupt("return");
                      case 2:
                        n.firstRender = 1, n.progress = 0, n.done = !1, clearTimeout(n.rendertimer), n.rendertimer = setTimeout((function() {
                          n.render(e)
                        }), n.beforeDelay);
                      case 7:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              setFilePath: function(e, t) {
                var n = this;
                return (0, i.default)(a.default.mark((function r() {
                  var i, s, c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (i = e, s = (t || n).pathType, "base64" != (c = void 0 === s ? n.pathType : s) || (0, u.isBase64)(e)) {
                          r.next = 8;
                          break
                        }
                        return r.next = 5, (0, u.pathToBase64)(e);
                      case 5:
                        i = r.sent, r.next = 12;
                        break;
                      case 8:
                        if ("url" != c || !(0, u.isBase64)(e)) {
                          r.next = 12;
                          break
                        }
                        return r.next = 11, (0, u.base64ToPath)(e);
                      case 11:
                        i = r.sent;
                      case 12:
                        return t && t.isEmit && n.$emit("success", i), r.abrupt("return", i);
                      case 14:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              getSize: function(e) {
                var t = this;
                return (0, i.default)(a.default.mark((function n() {
                  var r, i, s, c;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (r = e.css || e, i = r.width, s = e.css || e, c = s.height, t.size) {
                          n.next = 12;
                          break
                        }
                        if (!i && !c) {
                          n.next = 10;
                          break
                        }
                        return t.canvasWidth = i || t.canvasWidth, t.canvasHeight = c || t.canvasHeight, n.next = 8, (0, u.sleep)(30);
                      case 8:
                        n.next = 12;
                        break;
                      case 10:
                        return n.next = 12, t.getParentWeith();
                      case 12:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              canvasToTempFilePathSync: function(e) {
                this.tasks.push(e), this.done && this.runTask()
              },
              runTask: function() {
                for (; this.tasks.length;) {
                  var e = this.tasks.shift();
                  this.canvasToTempFilePath(e)
                }
              },
              getParentWeith: function() {
                var t = this;
                return new Promise((function(n) {
                  e.createSelectorQuery().in(t).select(".lime-painter").boundingClientRect().exec((function(e) {
                    var r = e[0] || {},
                      a = r.width,
                      i = r.height;
                    t.parentWidth = Math.ceil(a || 0), t.canvasWidth = t.parentWidth || 300, t.canvasHeight = i || t.canvasHeight || 150, n(e[0])
                  }))
                }))
              },
              render: function() {
                var e = arguments,
                  t = this;
                return (0, i.default)(a.default.mark((function n() {
                  var r, i, s, c, d, f, h, l, p, v, m, x, b;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, Object.keys(r).length) {
                          n.next = 3;
                          break
                        }
                        return n.abrupt("return", console.error("空对象"));
                      case 3:
                        return t.progress = 0, t.done = !1, n.next = 7, t.getSize(r);
                      case 7:
                        return n.next = 9, t.getContext();
                      case 9:
                        if (i = n.sent, s = t.use2dCanvas, c = t.boardWidth, d = t.boardHeight, f = t.canvas, h = t.afterDelay, !s || f) {
                          n.next = 13;
                          break
                        }
                        return n.abrupt("return", Promise.reject(new Error("canvas 没创建")));
                      case 13:
                        return t.boundary = {
                          top: 0,
                          left: 0,
                          width: c,
                          height: d
                        }, t.painter = null, t.painter || (l = r.css || r, p = l.width, (r.css || r).height, !p && t.parentWidth && Object.assign(r, {
                          width: t.parentWidth
                        }), v = {
                          context: i,
                          canvas: f,
                          width: c,
                          height: d,
                          pixelRatio: t.dpr,
                          useCORS: t.useCORS,
                          createImage: u.getImageInfo.bind(t),
                          performance: t.performance,
                          listen: {
                            onProgress: function(e) {
                              t.progress = e, t.$emit("progress", e)
                            },
                            onEffectFail: function(e) {
                              t.$emit("faill", e)
                            }
                          }
                        }, t.painter = new o.default(v)), n.prev = 16, n.next = 19, t.painter.source(JSON.parse(JSON.stringify(r)));
                      case 19:
                        return m = n.sent, x = m.width, b = m.height, t.boundary.height = t.canvasHeight = b, t.boundary.width = t.canvasWidth = x, n.next = 26, (0, u.sleep)(t.sleep);
                      case 26:
                        return n.next = 28, t.painter.render();
                      case 28:
                        return n.next = 30, new Promise((function(e) {
                          return t.$nextTick(e)
                        }));
                      case 30:
                        if (s) {
                          n.next = 33;
                          break
                        }
                        return n.next = 33, t.canvasDraw();
                      case 33:
                        if (!h || !s) {
                          n.next = 36;
                          break
                        }
                        return n.next = 36, (0, u.sleep)(h);
                      case 36:
                        return t.$emit("done"), t.done = !0, t.isCanvasToTempFilePath && t.canvasToTempFilePath().then((function(e) {
                          t.$emit("success", e.tempFilePath)
                        })).catch((function(e) {
                          t.$emit("fail", new Error(JSON.stringify(e)))
                        })), t.runTask(), n.abrupt("return", Promise.resolve({
                          ctx: i,
                          draw: t.painter,
                          node: t.node
                        }));
                      case 43:
                        n.prev = 43, n.t0 = n.catch(16);
                      case 45:
                      case "end":
                        return n.stop()
                    }
                  }), n, null, [
                    [16, 43]
                  ])
                })))()
              },
              canvasDraw: function() {
                var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return new Promise((function(n, r) {
                  return e.ctx.draw(t, (function() {
                    return setTimeout((function() {
                      return n()
                    }), e.afterDelay)
                  }))
                }))
              },
              getContext: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function n() {
                  var r, i, s;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (t.canvasWidth) {
                          n.next = 4;
                          break
                        }
                        return t.$emit("fail", "painter no size"), console.error("[lime-painter]: 给画板或父级设置尺寸"), n.abrupt("return", Promise.reject());
                      case 4:
                        if (!t.ctx || !t.inited) {
                          n.next = 6;
                          break
                        }
                        return n.abrupt("return", Promise.resolve(t.ctx));
                      case 6:
                        if (r = t.type, i = t.use2dCanvas, t.dpr, t.boardWidth, t.boardHeight, s = function() {
                            return new Promise((function(n) {
                              e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).boundingClientRect().exec((function(r) {
                                if (r) {
                                  var a = e.createCanvasContext(t.canvasId, t);
                                  if (t.inited || (t.inited = !0, t.use2dCanvas = !1, t.canvas = r), !a.measureText) {
                                    var i = function(e) {
                                      for (var t = 0, n = 0; n < e.length; n++) e.charCodeAt(n) > 0 && e.charCodeAt(n) < 128 ? t++ : t += 2;
                                      return t
                                    };
                                    a.measureText = function(e) {
                                      var t = a.state && a.state.fontSize || 12,
                                        n = a.__font;
                                      return n && 12 == t && (t = parseInt(n.split(" ")[3], 10)), t /= 2, {
                                        width: i(e) * t
                                      }
                                    }
                                  }
                                  t.ctx = a, n(t.ctx)
                                } else console.error("[lime-painter] no node")
                              }))
                            }))
                          }, i) {
                          n.next = 10;
                          break
                        }
                        return n.abrupt("return", s());
                      case 10:
                        return n.abrupt("return", new Promise((function(n) {
                          e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).node().exec((function(e) {
                            var a = (e && e[0] || {}).node;
                            if (a) {
                              var i = a.getContext(r);
                              t.inited || (t.inited = !0, t.use2dCanvas = !0, t.canvas = a), t.ctx = i, n(t.ctx)
                            } else console.error("[lime-painter]: no size")
                          }))
                        })));
                      case 11:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              canvasToTempFilePath: function() {
                var t = this,
                  n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise(function() {
                  var r = (0, i.default)(a.default.mark((function r(s, c) {
                    var u, o, d, f, h, l, p, v, m;
                    return a.default.wrap((function(r) {
                      for (;;) switch (r.prev = r.next) {
                        case 0:
                          if (u = t.use2dCanvas, o = t.canvasId, t.dpr, d = t.fileType, f = t.quality, h = function() {
                              var e = (0, i.default)(a.default.mark((function e(r) {
                                var i, c;
                                return a.default.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                    case 0:
                                      return e.prev = 0, e.next = 3, t.setFilePath(r.tempFilePath || r, n);
                                    case 3:
                                      i = e.sent, c = Object.assign(r, {
                                        tempFilePath: i
                                      }), n.success && n.success(c), s(c), e.next = 12;
                                      break;
                                    case 9:
                                      e.prev = 9, e.t0 = e.catch(0), t.$emit("fail", e.t0);
                                    case 12:
                                    case "end":
                                      return e.stop()
                                  }
                                }), e, null, [
                                  [0, 9]
                                ])
                              })));
                              return function(t) {
                                return e.apply(this, arguments)
                              }
                            }(), l = t.boundary || t, l.top, l.left, l.width, l.height, p = Object.assign({
                              canvasId: o,
                              id: o,
                              fileType: d,
                              quality: f
                            }, n, {
                              success: h
                            }), !u) {
                            r.next = 25;
                            break
                          }
                          if (p.canvas = t.canvas, r.prev = 6, v = t.canvas.toDataURL("image/".concat(n.fileType || d).replace(/pg/, "peg"), n.quality || f), !/data:,/.test(v)) {
                            r.next = 12;
                            break
                          }
                          e.canvasToTempFilePath(p, t), r.next = 17;
                          break;
                        case 12:
                          return r.next = 14, t.setFilePath(v, n);
                        case 14:
                          m = r.sent, n.success && n.success({
                            tempFilePath: m
                          }), s({
                            tempFilePath: m
                          });
                        case 17:
                          r.next = 23;
                          break;
                        case 19:
                          r.prev = 19, r.t0 = r.catch(6), n.fail && n.fail(r.t0), c(r.t0);
                        case 23:
                          r.next = 26;
                          break;
                        case 25:
                          e.canvasToTempFilePath(p, t);
                        case 26:
                        case "end":
                          return r.stop()
                      }
                    }), r, null, [
                      [6, 19]
                    ])
                  })));
                  return function(e, t) {
                    return r.apply(this, arguments)
                  }
                }())
              }
            }
          };
        t.default = d
      }).call(this, n("df3c").default)
    },
    "5b88": function(e, t, n) {
      n.r(t);
      var r = n("206b"),
        a = n.n(r);
      for (var i in r)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(i);
      t.default = a.a
    },
    "699c": function(e, t, n) {
      n.r(t);
      var r = n("8183"),
        a = n("5b88");
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      n("7559");
      var s = n("828b"),
        c = Object(s.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
      t.default = c.exports
    },
    "71dc": function(e, t, n) {},
    7559: function(e, t, n) {
      var r = n("71dc");
      n.n(r).a
    },
    8183: function(e, t, n) {
      n.d(t, "b", (function() {
        return r
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {}));
      var r = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uni_modules/lime-painter/components/l-painter/l-painter-create-component", {
    "uni_modules/lime-painter/components/l-painter/l-painter-create-component": function(e, t, n) {
      n("df3c").createComponent(n("699c"))
    }
  },
  [
    ["uni_modules/lime-painter/components/l-painter/l-painter-create-component"]
  ]
]);