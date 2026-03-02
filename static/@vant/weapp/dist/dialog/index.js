var e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../common/component"),
  n = require("../mixins/button"),
  o = require("../common/color"),
  i = require("../common/utils");
(0, t.VantComponent)({
  mixins: [n.button],
  props: {
    show: {
      type: Boolean,
      observer: function(e) {
        !e && this.stopLoading()
      }
    },
    title: String,
    message: String,
    theme: {
      type: String,
      value: "default"
    },
    useSlot: Boolean,
    className: String,
    customStyle: String,
    asyncClose: Boolean,
    messageAlign: String,
    beforeClose: null,
    overlayStyle: String,
    useTitleSlot: Boolean,
    showCancelButton: Boolean,
    closeOnClickOverlay: Boolean,
    confirmButtonOpenType: String,
    width: null,
    zIndex: {
      type: Number,
      value: 2e3
    },
    confirmButtonText: {
      type: String,
      value: "确认"
    },
    cancelButtonText: {
      type: String,
      value: "取消"
    },
    confirmButtonColor: {
      type: String,
      value: o.RED
    },
    cancelButtonColor: {
      type: String,
      value: o.GRAY
    },
    showConfirmButton: {
      type: Boolean,
      value: !0
    },
    overlay: {
      type: Boolean,
      value: !0
    },
    transition: {
      type: String,
      value: "scale"
    }
  },
  data: {
    loading: {
      confirm: !1,
      cancel: !1
    },
    callback: function() {}
  },
  methods: {
    onConfirm: function() {
      this.handleAction("confirm")
    },
    onCancel: function() {
      this.handleAction("cancel")
    },
    onClickOverlay: function() {
      this.close("overlay")
    },
    close: function(e) {
      var t = this;
      this.setData({
        show: !1
      }), wx.nextTick((function() {
        t.$emit("close", e);
        var n = t.data.callback;
        n && n(e, t)
      }))
    },
    stopLoading: function() {
      this.setData({
        loading: {
          confirm: !1,
          cancel: !1
        }
      })
    },
    handleAction: function(t) {
      var n = this;
      this.$emit(t, {
        dialog: this
      });
      var o = this.data,
        a = o.asyncClose,
        l = o.beforeClose;
      a || l ? (this.setData(e({}, "loading.".concat(t), !0)), l && (0, i.toPromise)(l(t)).then((function(e) {
        e ? n.close(t) : n.stopLoading()
      }))) : this.close(t)
    }
  }
});