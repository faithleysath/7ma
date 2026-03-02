var t = require("../common/component");
(0, t.VantComponent)({
  props: {
    zIndex: {
      type: Number,
      value: 99
    },
    offsetTop: {
      type: Number,
      value: 0,
      observer: "observeContent"
    },
    disabled: {
      type: Boolean,
      observer: function(t) {
        this.mounted && (t ? this.disconnectObserver() : this.initObserver())
      }
    },
    container: {
      type: null,
      observer: function(t) {
        "function" == typeof t && this.data.height && this.observeContainer()
      }
    }
  },
  data: {
    wrapStyle: "",
    containerStyle: ""
  },
  methods: {
    setStyle: function() {
      var t = this.data,
        e = t.offsetTop,
        n = t.height,
        i = t.fixed,
        o = t.zIndex;
      i ? this.setData({
        wrapStyle: "top: ".concat(e, "px;"),
        containerStyle: "height: ".concat(n, "px; z-index: ").concat(o, ";")
      }) : this.setData({
        wrapStyle: "",
        containerStyle: ""
      })
    },
    getContainerRect: function() {
      var t = this.data.container();
      return new Promise((function(e) {
        return t.boundingClientRect(e).exec()
      }))
    },
    initObserver: function() {
      var t = this;
      this.disconnectObserver(), this.getRect(".van-sticky").then((function(e) {
        t.setData({
          height: e.height
        }), wx.nextTick((function() {
          t.observeContent(), t.observeContainer()
        }))
      }))
    },
    disconnectObserver: function(t) {
      if (t) {
        var e = this[t];
        e && e.disconnect()
      } else this.contentObserver && this.contentObserver.disconnect(), this.containerObserver && this.containerObserver.disconnect()
    },
    observeContent: function() {
      var t = this,
        e = this.data.offsetTop;
      this.disconnectObserver("contentObserver");
      var n = this.createIntersectionObserver({
        thresholds: [0, 1]
      });
      this.contentObserver = n, n.relativeToViewport({
        top: -e
      }), n.observe(".van-sticky", (function(e) {
        t.data.disabled || t.setFixed(e.boundingClientRect.top)
      }))
    },
    observeContainer: function() {
      var t = this;
      if ("function" == typeof this.data.container) {
        var e = this.data.height;
        this.getContainerRect().then((function(n) {
          t.containerHeight = n.height, t.disconnectObserver("containerObserver");
          var i = t.createIntersectionObserver({
            thresholds: [0, 1]
          });
          t.containerObserver = i, i.relativeToViewport({
            top: t.containerHeight - e
          }), i.observe(".van-sticky", (function(e) {
            t.data.disabled || t.setFixed(e.boundingClientRect.top)
          }))
        }))
      }
    },
    setFixed: function(t) {
      var e = this,
        n = this.data,
        i = n.offsetTop,
        o = n.height,
        s = this.containerHeight,
        r = s && o ? t > o - s && t < i : t < i;
      this.$emit("scroll", {
        scrollTop: t,
        isFixed: r
      }), this.setData({
        fixed: r
      }), wx.nextTick((function() {
        e.setStyle()
      }))
    }
  },
  mounted: function() {
    this.mounted = !0, this.data.disabled || this.initObserver()
  },
  destroyed: function() {
    this.disconnectObserver()
  }
});