(function (e) {
  e.fn.downCount = function (t, n) {
    function o() {
      var e = new Date(r.date),
        t = s();
      var o = e - t;
      if (o < 0) {
        clearInterval(u);
        if (n && typeof n === "function") n();
        return;
      }
      var a = 1e3,
        f = a * 60,
        l = f * 60,
        c = l * 24;
      var h = Math.floor(o / c),
        p = Math.floor((o % c) / l),
        d = Math.floor((o % l) / f),
        v = Math.floor((o % f) / a);
      h = String(h).length >= 2 ? h : "0" + h;
      p = String(p).length >= 2 ? p : "0" + p;
      d = String(d).length >= 2 ? d : "0" + d;
      v = String(v).length >= 2 ? v : "0" + v;
      var m = h === 1 ? "day" : "days",
        g = p === 1 ? "hour" : "hours",
        y = d === 1 ? "minute" : "minutes",
        b = v === 1 ? "second" : "seconds";
      i.find(".days").text(h);
      i.find(".hours").text(p);
      i.find(".minutes").text(d);
      i.find(".seconds").text(v);
      i.find(".days_ref").text(m);
      i.find(".hours_ref").text(g);
      i.find(".minutes_ref").text(y);
      i.find(".seconds_ref").text(b);
    }
    var r = e.extend({ date: null, offset: null }, t);
    if (!r.date) {
      e.error("Date is not defined.");
    }
    if (!Date.parse(r.date)) {
      e.error(
        "Incorrect date format, it should look like this, 12/24/2012 12:00:00."
      );
    }
    var i = this;
    var s = function () {
      var e = new Date();
      var t = e.getTime() + e.getTimezoneOffset() * 6e4;
      var n = new Date(t + 36e5 * r.offset);
      return n;
    };
    var u = setInterval(o, 1e3);
  };
})(jQuery);
