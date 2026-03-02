(0, require("../common/component").VantComponent)({
  relation: {
    name: "tabs",
    type: "ancestor",
    linked: function(t) {
      this.parent = t
    },
    unlinked: function() {
      this.parent = null
    }
  },
  props: {
    dot: Boolean,
    info: null,
    title: String,
    disabled: Boolean,
    titleStyle: String,
    name: {
      type: [Number, String],
      value: ""
    }
  },
  data: {
    active: !1
  },
  watch: {
    title: "update",
    disabled: "update",
    dot: "update",
    info: "update",
    titleStyle: "update"
  },
  methods: {
    getComputedName: function() {
      return "" !== this.data.name ? this.data.name : this.index
    },
    updateRender: function(t, e) {
      var n = e.data;
      this.inited = this.inited || t, this.setData({
        active: t,
        shouldRender: this.inited || !n.lazyRender,
        shouldShow: t || n.animated
      })
    },
    update: function() {
      this.parent && this.parent.updateTabs()
    }
  }
});