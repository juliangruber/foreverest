
/**
 * Expose `Timeout`.
 */

module.exports = function (fn, dur) {
  return new Timeout(fn, dur);
};

/**
 * Maximum timeout. See
 * https://github.com/joyent/node/blob/master/lib/timers.js#L27
 */

var max = 2147483647; // 2^31-1

/**
 * Long timeout.
 *
 * @param {Function} fn
 * @param {Number} duration
 */

function Timeout (fn, dur) {
  dur *= 1;
  this.dest = +new Date + dur;
  this.fn = fn;
  this._schedule(dur);
}

/**
 * Create internal timeout.
 *
 * @param {Number} duration
 */

Timeout.prototype._schedule = function (dur) {
  var self = this;
  if (dur > max) dur = max;
  self.to = setTimeout(function () {
    self._tick();
  }, dur);
};

/**
 * Handle end of internal timeout.
 */

Timeout.prototype._tick = function () {
  var now = +new Date;
  var fn = this.fn;

  if (now >= this.dest) {
    fn();
  } else {
    this._schedule(this.dest - now);
  }
};

/**
 * Clear timeout.
 */

Timeout.prototype.clear = function () {
  clearTimeout(self.to);
};

