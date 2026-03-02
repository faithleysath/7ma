var o = require("../common/component"),
  e = require("../common/relation");
(0, o.VantComponent)({
  relation: (0, e.useChildren)("goods-action-button", (function() {
    this.children.forEach((function(o) {
      o.updateStyle()
    }))
  })),
  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      value: !0
    }
  }
});