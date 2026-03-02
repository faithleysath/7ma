var i = require("../common/component"),
  t = require("../common/relation"),
  n = require("../mixins/button"),
  e = require("../mixins/link");
(0, i.VantComponent)({
  mixins: [e.link, n.button],
  relation: (0, t.useParent)("goods-action"),
  props: {
    text: String,
    color: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    type: {
      type: String,
      value: "danger"
    }
  },
  methods: {
    onClick: function(i) {
      this.$emit("click", i.detail), this.jumpLink()
    },
    updateStyle: function() {
      if (null != this.parent) {
        var i = this.index,
          t = this.parent.children,
          n = void 0 === t ? [] : t;
        this.setData({
          isFirst: 0 === i,
          isLast: i === n.length - 1
        })
      }
    }
  }
});