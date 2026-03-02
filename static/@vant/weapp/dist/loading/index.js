var t = require("../common/component"),
  e = require("../common/utils");
(0, t.VantComponent)({
  props: {
    color: String,
    vertical: Boolean,
    type: {
      type: String,
      value: "circular"
    },
    size: {
      type: String,
      observer: "setSizeWithUnit"
    },
    textSize: {
      type: String,
      observer: "setTextSizeWithUnit"
    }
  },
  methods: {
    setSizeWithUnit: function(t) {
      this.setData({
        sizeWithUnit: (0, e.addUnit)(t)
      })
    },
    setTextSizeWithUnit: function(t) {
      this.set({
        textSizeWithUnit: (0, e.addUnit)(t)
      })
    }
  }
});