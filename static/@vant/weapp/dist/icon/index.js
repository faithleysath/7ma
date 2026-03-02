var t = require("../common/component"),
  i = require("../common/utils");
(0, t.VantComponent)({
  props: {
    dot: Boolean,
    info: null,
    size: {
      type: null,
      observer: "setSizeWithUnit"
    },
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: "van-icon"
    },
    name: {
      type: String,
      observer: function(t) {
        this.setData({
          isImageName: -1 !== t.indexOf("/")
        })
      }
    }
  },
  data: {
    sizeWithUnit: null
  },
  methods: {
    onClick: function() {
      this.$emit("click")
    },
    setSizeWithUnit: function(t) {
      this.setData({
        sizeWithUnit: (0, i.addUnit)(t)
      })
    }
  }
});