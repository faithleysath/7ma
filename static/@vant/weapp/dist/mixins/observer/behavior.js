Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.behavior = void 0;
exports.behavior = Behavior({
  methods: {
    set: function(e, t) {
      var o = this;
      return new Promise((function(r) {
        o.setData(e, (function() {
          t && "function" == typeof t && t.call(o), r()
        }))
      }))
    }
  }
});