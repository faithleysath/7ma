var e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  a = require("../common/component"),
  n = require("../common/utils"),
  u = require("../picker/shared"),
  r = (new Date).getFullYear();

function i(e, t, a) {
  return Math.min(Math.max(e, t), a)
}

function o(e) {
  return "00".concat(e).slice(-2)
}

function s(e) {
  if (e) {
    for (; isNaN(parseInt(e, 10));) e = e.slice(1);
    return parseInt(e, 10)
  }
}

function l(e, t) {
  return 32 - new Date(e, t - 1, 32).getDate()
}
var m = function(e, t) {
  return t
};
(0, a.VantComponent)({
  classes: ["active-class", "toolbar-class", "column-class"],
  props: Object.assign(Object.assign({}, u.pickerProps), {
    value: null,
    filter: null,
    type: {
      type: String,
      value: "datetime"
    },
    showToolbar: {
      type: Boolean,
      value: !0
    },
    formatter: {
      type: null,
      value: m
    },
    minDate: {
      type: Number,
      value: new Date(r - 10, 0, 1).getTime()
    },
    maxDate: {
      type: Number,
      value: new Date(r + 10, 11, 31).getTime()
    },
    minHour: {
      type: Number,
      value: 0
    },
    maxHour: {
      type: Number,
      value: 23
    },
    minMinute: {
      type: Number,
      value: 0
    },
    maxMinute: {
      type: Number,
      value: 59
    }
  }),
  data: {
    innerValue: Date.now(),
    columns: []
  },
  watch: {
    value: "updateValue",
    type: "updateValue",
    minDate: "updateValue",
    maxDate: "updateValue",
    minHour: "updateValue",
    maxHour: "updateValue",
    minMinute: "updateValue",
    maxMinute: "updateValue"
  },
  methods: {
    updateValue: function() {
      var e = this,
        t = this.data,
        a = this.correctValue(this.data.value);
      a === t.innerValue ? this.updateColumns() : this.updateColumnValue(a).then((function() {
        e.$emit("input", a)
      }))
    },
    getPicker: function() {
      if (null == this.picker) {
        this.picker = this.selectComponent(".van-datetime-picker");
        var e = this.picker,
          t = e.setColumnValues;
        e.setColumnValues = function() {
          for (var a = arguments.length, n = new Array(a), u = 0; u < a; u++) n[u] = arguments[u];
          return t.apply(e, [].concat(n, [!1]))
        }
      }
      return this.picker
    },
    updateColumns: function() {
      var e = this.data.formatter,
        t = void 0 === e ? m : e,
        a = this.getOriginColumns().map((function(e) {
          return {
            values: e.values.map((function(a) {
              return t(e.type, a)
            }))
          }
        }));
      return this.set({
        columns: a
      })
    },
    getOriginColumns: function() {
      var e = this.data.filter;
      return this.getRanges().map((function(t) {
        var a = t.type,
          n = t.range,
          u = function(e, t) {
            for (var a = -1, n = Array(e < 0 ? 0 : e); ++a < e;) n[a] = t(a);
            return n
          }(n[1] - n[0] + 1, (function(e) {
            var t = n[0] + e;
            return t = "year" === a ? "".concat(t) : o(t)
          }));
        return e && (u = e(a, u)), {
          type: a,
          values: u
        }
      }))
    },
    getRanges: function() {
      var e = this.data;
      if ("time" === e.type) return [{
        type: "hour",
        range: [e.minHour, e.maxHour]
      }, {
        type: "minute",
        range: [e.minMinute, e.maxMinute]
      }];
      var t = this.getBoundary("max", e.innerValue),
        a = t.maxYear,
        n = t.maxDate,
        u = t.maxMonth,
        r = t.maxHour,
        i = t.maxMinute,
        o = this.getBoundary("min", e.innerValue),
        s = o.minYear,
        l = o.minDate,
        m = [{
          type: "year",
          range: [s, a]
        }, {
          type: "month",
          range: [o.minMonth, u]
        }, {
          type: "day",
          range: [l, n]
        }, {
          type: "hour",
          range: [o.minHour, r]
        }, {
          type: "minute",
          range: [o.minMinute, i]
        }];
      return "date" === e.type && m.splice(3, 2), "year-month" === e.type && m.splice(2, 3), m
    },
    correctValue: function(e) {
      var a, u = this.data,
        r = "time" !== u.type;
      if (r && (a = e, !(0, n.isDef)(a) || isNaN(new Date(a).getTime()))) e = u.minDate;
      else if (!r && !e) {
        var s = u.minHour;
        e = "".concat(o(s), ":00")
      }
      if (!r) {
        var l = e.split(":"),
          m = t(l, 2),
          c = m[0],
          p = m[1];
        return c = o(i(c, u.minHour, u.maxHour)), p = o(i(p, u.minMinute, u.maxMinute)), "".concat(c, ":").concat(p)
      }
      return e = Math.max(e, u.minDate), e = Math.min(e, u.maxDate)
    },
    getBoundary: function(t, a) {
      var n = new Date(a),
        u = new Date(this.data["".concat(t, "Date")]),
        r = u.getFullYear(),
        i = 1,
        o = 1,
        s = 0,
        m = 0;
      return "max" === t && (i = 12, o = l(n.getFullYear(), n.getMonth() + 1), s = 23, m = 59), n.getFullYear() === r && (i = u.getMonth() + 1, n.getMonth() + 1 === i && (o = u.getDate(), n.getDate() === o && (s = u.getHours(), n.getHours() === s && (m = u.getMinutes())))), e(e(e(e(e({}, "".concat(t, "Year"), r), "".concat(t, "Month"), i), "".concat(t, "Date"), o), "".concat(t, "Hour"), s), "".concat(t, "Minute"), m)
    },
    onCancel: function() {
      this.$emit("cancel")
    },
    onConfirm: function() {
      this.$emit("confirm", this.data.innerValue)
    },
    onChange: function() {
      var e, t = this,
        a = this.data,
        n = this.getPicker();
      if ("time" === a.type) {
        var u = n.getIndexes();
        e = "".concat(+a.columns[0].values[u[0]], ":").concat(+a.columns[1].values[u[1]])
      } else {
        var r = n.getValues(),
          i = s(r[0]),
          o = s(r[1]),
          m = l(i, o),
          c = s(r[2]);
        "year-month" === a.type && (c = 1), c = c > m ? m : c;
        var p = 0,
          h = 0;
        "datetime" === a.type && (p = s(r[3]), h = s(r[4])), e = new Date(i, o - 1, c, p, h)
      }
      e = this.correctValue(e), this.updateColumnValue(e).then((function() {
        t.$emit("input", e), t.$emit("change", n)
      }))
    },
    updateColumnValue: function(e) {
      var t = this,
        a = [],
        n = this.data,
        u = n.type,
        r = n.formatter,
        i = void 0 === r ? m : r,
        s = this.getPicker();
      if ("time" === u) {
        var l = e.split(":");
        a = [i("hour", l[0]), i("minute", l[1])]
      } else {
        var c = new Date(e);
        a = [i("year", "".concat(c.getFullYear())), i("month", o(c.getMonth() + 1))], "date" === u && a.push(i("day", o(c.getDate()))), "datetime" === u && a.push(i("day", o(c.getDate())), i("hour", o(c.getHours())), i("minute", o(c.getMinutes())))
      }
      return this.set({
        innerValue: e
      }).then((function() {
        return t.updateColumns()
      })).then((function() {
        return s.setValues(a)
      }))
    }
  },
  created: function() {
    var e = this,
      t = this.correctValue(this.data.value);
    this.updateColumnValue(t).then((function() {
      e.$emit("input", t)
    }))
  }
});