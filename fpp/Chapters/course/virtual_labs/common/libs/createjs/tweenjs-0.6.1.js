/*!
 * @license TweenJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
(this.createjs = this.createjs || {}),
  (createjs.extend = function (a, b) {
    "use strict";
    function c() {
      this.constructor = a;
    }
    return (c.prototype = b.prototype), (a.prototype = new c());
  }),
  (this.createjs = this.createjs || {}),
  (createjs.promote = function (a, b) {
    "use strict";
    var c = a.prototype,
      d = (Object.getPrototypeOf && Object.getPrototypeOf(c)) || c.__proto__;
    if (d) {
      c[(b += "_") + "constructor"] = d.constructor;
      for (var e in d)
        c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e]);
    }
    return a;
  }),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function Event(a, b, c) {
      (this.type = a),
        (this.target = null),
        (this.currentTarget = null),
        (this.eventPhase = 0),
        (this.bubbles = !!b),
        (this.cancelable = !!c),
        (this.timeStamp = new Date().getTime()),
        (this.defaultPrevented = !1),
        (this.propagationStopped = !1),
        (this.immediatePropagationStopped = !1),
        (this.removed = !1);
    }
    var a = Event.prototype;
    (a.preventDefault = function () {
      this.defaultPrevented = this.cancelable && !0;
    }),
      (a.stopPropagation = function () {
        this.propagationStopped = !0;
      }),
      (a.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped = !0;
      }),
      (a.remove = function () {
        this.removed = !0;
      }),
      (a.clone = function () {
        return new Event(this.type, this.bubbles, this.cancelable);
      }),
      (a.set = function (a) {
        for (var b in a) this[b] = a[b];
        return this;
      }),
      (a.toString = function () {
        return "[Event (type=" + this.type + ")]";
      }),
      (createjs.Event = Event);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function EventDispatcher() {
      (this._listeners = null), (this._captureListeners = null);
    }
    var a = EventDispatcher.prototype;
    (EventDispatcher.initialize = function (b) {
      (b.addEventListener = a.addEventListener),
        (b.on = a.on),
        (b.removeEventListener = b.off = a.removeEventListener),
        (b.removeAllEventListeners = a.removeAllEventListeners),
        (b.hasEventListener = a.hasEventListener),
        (b.dispatchEvent = a.dispatchEvent),
        (b._dispatchEvent = a._dispatchEvent),
        (b.willTrigger = a.willTrigger);
    }),
      (a.addEventListener = function (a, b, c) {
        var d;
        d = c
          ? (this._captureListeners = this._captureListeners || {})
          : (this._listeners = this._listeners || {});
        var e = d[a];
        return (
          e && this.removeEventListener(a, b, c),
          (e = d[a]),
          e ? e.push(b) : (d[a] = [b]),
          b
        );
      }),
      (a.on = function (a, b, c, d, e, f) {
        return (
          b.handleEvent && ((c = c || b), (b = b.handleEvent)),
          (c = c || this),
          this.addEventListener(
            a,
            function (a) {
              b.call(c, a, e), d && a.remove();
            },
            f,
          )
        );
      }),
      (a.removeEventListener = function (a, b, c) {
        var d = c ? this._captureListeners : this._listeners;
        if (d) {
          var e = d[a];
          if (e)
            for (var f = 0, g = e.length; g > f; f++)
              if (e[f] == b) {
                1 == g ? delete d[a] : e.splice(f, 1);
                break;
              }
        }
      }),
      (a.off = a.removeEventListener),
      (a.removeAllEventListeners = function (a) {
        a
          ? (this._listeners && delete this._listeners[a],
            this._captureListeners && delete this._captureListeners[a])
          : (this._listeners = this._captureListeners = null);
      }),
      (a.dispatchEvent = function (a) {
        if ("string" == typeof a) {
          var b = this._listeners;
          if (!b || !b[a]) return !1;
          a = new createjs.Event(a);
        } else a.target && a.clone && (a = a.clone());
        try {
          a.target = this;
        } catch (c) {}
        if (a.bubbles && this.parent) {
          for (var d = this, e = [d]; d.parent; ) e.push((d = d.parent));
          var f,
            g = e.length;
          for (f = g - 1; f >= 0 && !a.propagationStopped; f--)
            e[f]._dispatchEvent(a, 1 + (0 == f));
          for (f = 1; g > f && !a.propagationStopped; f++)
            e[f]._dispatchEvent(a, 3);
        } else this._dispatchEvent(a, 2);
        return a.defaultPrevented;
      }),
      (a.hasEventListener = function (a) {
        var b = this._listeners,
          c = this._captureListeners;
        return !!((b && b[a]) || (c && c[a]));
      }),
      (a.willTrigger = function (a) {
        for (var b = this; b; ) {
          if (b.hasEventListener(a)) return !0;
          b = b.parent;
        }
        return !1;
      }),
      (a.toString = function () {
        return "[EventDispatcher]";
      }),
      (a._dispatchEvent = function (a, b) {
        var c,
          d = 1 == b ? this._captureListeners : this._listeners;
        if (a && d) {
          var e = d[a.type];
          if (!e || !(c = e.length)) return;
          try {
            a.currentTarget = this;
          } catch (f) {}
          try {
            a.eventPhase = b;
          } catch (f) {}
          (a.removed = !1), (e = e.slice());
          for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
            var h = e[g];
            h.handleEvent ? h.handleEvent(a) : h(a),
              a.removed && (this.off(a.type, h, 1 == b), (a.removed = !1));
          }
        }
      }),
      (createjs.EventDispatcher = EventDispatcher);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function Ticker() {
      throw "Ticker cannot be instantiated.";
    }
    (Ticker.RAF_SYNCHED = "synched"),
      (Ticker.RAF = "raf"),
      (Ticker.TIMEOUT = "timeout"),
      (Ticker.useRAF = !1),
      (Ticker.timingMode = null),
      (Ticker.maxDelta = 0),
      (Ticker.paused = !1),
      (Ticker.removeEventListener = null),
      (Ticker.removeAllEventListeners = null),
      (Ticker.dispatchEvent = null),
      (Ticker.hasEventListener = null),
      (Ticker._listeners = null),
      createjs.EventDispatcher.initialize(Ticker),
      (Ticker._addEventListener = Ticker.addEventListener),
      (Ticker.addEventListener = function () {
        return (
          !Ticker._inited && Ticker.init(),
          Ticker._addEventListener.apply(Ticker, arguments)
        );
      }),
      (Ticker._inited = !1),
      (Ticker._startTime = 0),
      (Ticker._pausedTime = 0),
      (Ticker._ticks = 0),
      (Ticker._pausedTicks = 0),
      (Ticker._interval = 50),
      (Ticker._lastTime = 0),
      (Ticker._times = null),
      (Ticker._tickTimes = null),
      (Ticker._timerId = null),
      (Ticker._raf = !0),
      (Ticker.setInterval = function (a) {
        (Ticker._interval = a), Ticker._inited && Ticker._setupTick();
      }),
      (Ticker.getInterval = function () {
        return Ticker._interval;
      }),
      (Ticker.setFPS = function (a) {
        Ticker.setInterval(1e3 / a);
      }),
      (Ticker.getFPS = function () {
        return 1e3 / Ticker._interval;
      });
    try {
      Object.defineProperties(Ticker, {
        interval: {
          get: Ticker.getInterval,
          set: Ticker.setInterval,
        },
        framerate: {
          get: Ticker.getFPS,
          set: Ticker.setFPS,
        },
      });
    } catch (a) {
      console.log(a);
    }
    (Ticker.init = function () {
      Ticker._inited ||
        ((Ticker._inited = !0),
        (Ticker._times = []),
        (Ticker._tickTimes = []),
        (Ticker._startTime = Ticker._getTime()),
        Ticker._times.push((Ticker._lastTime = 0)),
        (Ticker.interval = Ticker._interval));
    }),
      (Ticker.reset = function () {
        if (Ticker._raf) {
          var a =
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            window.msCancelAnimationFrame;
          a && a(Ticker._timerId);
        } else clearTimeout(Ticker._timerId);
        Ticker.removeAllEventListeners("tick"),
          (Ticker._timerId = Ticker._times = Ticker._tickTimes = null),
          (Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0),
          (Ticker._inited = !1);
      }),
      (Ticker.getMeasuredTickTime = function (a) {
        var b = 0,
          c = Ticker._tickTimes;
        if (!c || c.length < 1) return -1;
        a = Math.min(c.length, a || 0 | Ticker.getFPS());
        for (var d = 0; a > d; d++) b += c[d];
        return b / a;
      }),
      (Ticker.getMeasuredFPS = function (a) {
        var b = Ticker._times;
        return !b || b.length < 2
          ? -1
          : ((a = Math.min(b.length - 1, a || 0 | Ticker.getFPS())),
            1e3 / ((b[0] - b[a]) / a));
      }),
      (Ticker.setPaused = function (a) {
        Ticker.paused = a;
      }),
      (Ticker.getPaused = function () {
        return Ticker.paused;
      }),
      (Ticker.getTime = function (a) {
        return Ticker._startTime
          ? Ticker._getTime() - (a ? Ticker._pausedTime : 0)
          : -1;
      }),
      (Ticker.getEventTime = function (a) {
        return Ticker._startTime
          ? (Ticker._lastTime || Ticker._startTime) -
              (a ? Ticker._pausedTime : 0)
          : -1;
      }),
      (Ticker.getTicks = function (a) {
        return Ticker._ticks - (a ? Ticker._pausedTicks : 0);
      }),
      (Ticker._handleSynch = function () {
        (Ticker._timerId = null),
          Ticker._setupTick(),
          Ticker._getTime() - Ticker._lastTime >=
            0.97 * (Ticker._interval - 1) && Ticker._tick();
      }),
      (Ticker._handleRAF = function () {
        (Ticker._timerId = null), Ticker._setupTick(), Ticker._tick();
      }),
      (Ticker._handleTimeout = function () {
        (Ticker._timerId = null), Ticker._setupTick(), Ticker._tick();
      }),
      (Ticker._setupTick = function () {
        if (null == Ticker._timerId) {
          var a = Ticker.timingMode || (Ticker.useRAF && Ticker.RAF_SYNCHED);
          if (a == Ticker.RAF_SYNCHED || a == Ticker.RAF) {
            var b =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame;
            if (b)
              return (
                (Ticker._timerId = b(
                  a == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch,
                )),
                void (Ticker._raf = !0)
              );
          }
          (Ticker._raf = !1),
            (Ticker._timerId = setTimeout(
              Ticker._handleTimeout,
              Ticker._interval,
            ));
        }
      }),
      (Ticker._tick = function () {
        var a = Ticker.paused,
          b = Ticker._getTime(),
          c = b - Ticker._lastTime;
        if (
          ((Ticker._lastTime = b),
          Ticker._ticks++,
          a && (Ticker._pausedTicks++, (Ticker._pausedTime += c)),
          Ticker.hasEventListener("tick"))
        ) {
          var d = new createjs.Event("tick"),
            e = Ticker.maxDelta;
          (d.delta = e && c > e ? e : c),
            (d.paused = a),
            (d.time = b),
            (d.runTime = b - Ticker._pausedTime),
            Ticker.dispatchEvent(d);
        }
        for (
          Ticker._tickTimes.unshift(Ticker._getTime() - b);
          Ticker._tickTimes.length > 100;

        )
          Ticker._tickTimes.pop();
        for (Ticker._times.unshift(b); Ticker._times.length > 100; )
          Ticker._times.pop();
      });
    var b =
      window.performance &&
      (performance.now ||
        performance.mozNow ||
        performance.msNow ||
        performance.oNow ||
        performance.webkitNow);
    (Ticker._getTime = function () {
      return (
        ((b && b.call(performance)) || new Date().getTime()) - Ticker._startTime
      );
    }),
      (createjs.Ticker = Ticker);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function Tween(a, b, c) {
      (this.ignoreGlobalPause = !1),
        (this.loop = !1),
        (this.duration = 0),
        (this.pluginData = c || {}),
        (this.target = a),
        (this.position = null),
        (this.passive = !1),
        (this._paused = !1),
        (this._curQueueProps = {}),
        (this._initQueueProps = {}),
        (this._steps = []),
        (this._actions = []),
        (this._prevPosition = 0),
        (this._stepPosition = 0),
        (this._prevPos = -1),
        (this._target = a),
        (this._useTicks = !1),
        (this._inited = !1),
        (this._registered = !1),
        b &&
          ((this._useTicks = b.useTicks),
          (this.ignoreGlobalPause = b.ignoreGlobalPause),
          (this.loop = b.loop),
          b.onChange && this.addEventListener("change", b.onChange),
          b.override && Tween.removeTweens(a)),
        b && b.paused
          ? (this._paused = !0)
          : createjs.Tween._register(this, !0),
        b && null != b.position && this.setPosition(b.position, Tween.NONE);
    }
    var a = createjs.extend(Tween, createjs.EventDispatcher);
    (Tween.NONE = 0),
      (Tween.LOOP = 1),
      (Tween.REVERSE = 2),
      (Tween.IGNORE = {}),
      (Tween._tweens = []),
      (Tween._plugins = {}),
      (Tween.get = function (a, b, c, d) {
        return d && Tween.removeTweens(a), new Tween(a, b, c);
      }),
      (Tween.tick = function (a, b) {
        for (var c = Tween._tweens.slice(), d = c.length - 1; d >= 0; d--) {
          var e = c[d];
          (b && !e.ignoreGlobalPause) ||
            e._paused ||
            e.tick(e._useTicks ? 1 : a);
        }
      }),
      (Tween.handleEvent = function (a) {
        "tick" == a.type && this.tick(a.delta, a.paused);
      }),
      (Tween.removeTweens = function (a) {
        if (a.tweenjs_count) {
          for (var b = Tween._tweens, c = b.length - 1; c >= 0; c--) {
            var d = b[c];
            d._target == a && ((d._paused = !0), b.splice(c, 1));
          }
          a.tweenjs_count = 0;
        }
      }),
      (Tween.removeAllTweens = function () {
        for (var a = Tween._tweens, b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          (d._paused = !0), d.target && (d.target.tweenjs_count = 0);
        }
        a.length = 0;
      }),
      (Tween.hasActiveTweens = function (a) {
        return a
          ? null != a.tweenjs_count && !!a.tweenjs_count
          : Tween._tweens && !!Tween._tweens.length;
      }),
      (Tween.installPlugin = function (a, b) {
        var c = a.priority;
        null == c && (a.priority = c = 0);
        for (var d = 0, e = b.length, f = Tween._plugins; e > d; d++) {
          var g = b[d];
          if (f[g]) {
            for (
              var h = f[g], i = 0, j = h.length;
              j > i && !(c < h[i].priority);
              i++
            );
            f[g].splice(i, 0, a);
          } else f[g] = [a];
        }
      }),
      (Tween._register = function (a, b) {
        var c = a._target,
          d = Tween._tweens;
        if (b && !a._registered)
          c && (c.tweenjs_count = c.tweenjs_count ? c.tweenjs_count + 1 : 1),
            d.push(a),
            !Tween._inited &&
              createjs.Ticker &&
              (createjs.Ticker.addEventListener("tick", Tween),
              (Tween._inited = !0));
        else if (!b && a._registered) {
          c && c.tweenjs_count--;
          for (var e = d.length; e--; )
            if (d[e] == a) {
              d.splice(e, 1);
              break;
            }
        }
        a._registered = b;
      }),
      (a.wait = function (a, b) {
        if (null == a || 0 >= a) return this;
        var c = this._cloneProps(this._curQueueProps);
        return this._addStep({
          d: a,
          p0: c,
          e: this._linearEase,
          p1: c,
          v: b,
        });
      }),
      (a.to = function (a, b, c) {
        return (
          (isNaN(b) || 0 > b) && (b = 0),
          this._addStep({
            d: b || 0,
            p0: this._cloneProps(this._curQueueProps),
            e: c,
            p1: this._cloneProps(this._appendQueueProps(a)),
          })
        );
      }),
      (a.call = function (a, b, c) {
        return this._addAction({
          f: a,
          p: b ? b : [this],
          o: c ? c : this._target,
        });
      }),
      (a.set = function (a, b) {
        return this._addAction({
          f: this._set,
          o: this,
          p: [a, b ? b : this._target],
        });
      }),
      (a.play = function (a) {
        return a || (a = this), this.call(a.setPaused, [!1], a);
      }),
      (a.pause = function (a) {
        return a || (a = this), this.call(a.setPaused, [!0], a);
      }),
      (a.setPosition = function (a, b) {
        0 > a && (a = 0), null == b && (b = 1);
        var c = a,
          d = !1;
        if (
          (c >= this.duration &&
            (this.loop
              ? (c %= this.duration)
              : ((c = this.duration), (d = !0))),
          c == this._prevPos)
        )
          return d;
        var e = this._prevPos;
        if (
          ((this.position = this._prevPos = c),
          (this._prevPosition = a),
          this._target)
        )
          if (d) this._updateTargetProps(null, 1);
          else if (this._steps.length > 0) {
            for (
              var f = 0, g = this._steps.length;
              g > f && !(this._steps[f].t > c);
              f++
            );
            var h = this._steps[f - 1];
            this._updateTargetProps(h, (this._stepPosition = c - h.t) / h.d);
          }
        return (
          0 != b &&
            this._actions.length > 0 &&
            (this._useTicks
              ? this._runActions(c, c)
              : 1 == b && e > c
                ? (e != this.duration && this._runActions(e, this.duration),
                  this._runActions(0, c, !0))
                : this._runActions(e, c)),
          d && this.setPaused(!0),
          this.dispatchEvent("change"),
          d
        );
      }),
      (a.tick = function (a) {
        this._paused || this.setPosition(this._prevPosition + a);
      }),
      (a.setPaused = function (a) {
        return this._paused === !!a
          ? this
          : ((this._paused = !!a), Tween._register(this, !a), this);
      }),
      (a.w = a.wait),
      (a.t = a.to),
      (a.c = a.call),
      (a.s = a.set),
      (a.toString = function () {
        return "[Tween]";
      }),
      (a.clone = function () {
        throw "Tween can not be cloned.";
      }),
      (a._updateTargetProps = function (a, b) {
        var c, d, e, f, g, h;
        if (a || 1 != b) {
          if (((this.passive = !!a.v), this.passive)) return;
          a.e && (b = a.e(b, 0, 1, 1)), (c = a.p0), (d = a.p1);
        } else (this.passive = !1), (c = d = this._curQueueProps);
        for (var i in this._initQueueProps) {
          null == (f = c[i]) && (c[i] = f = this._initQueueProps[i]),
            null == (g = d[i]) && (d[i] = g = f),
            (e =
              f == g || 0 == b || 1 == b || "number" != typeof f
                ? 1 == b
                  ? g
                  : f
                : f + (g - f) * b);
          var j = !1;
          if ((h = Tween._plugins[i]))
            for (var k = 0, l = h.length; l > k; k++) {
              var m = h[k].tween(this, i, e, c, d, b, !!a && c == d, !a);
              m == Tween.IGNORE ? (j = !0) : (e = m);
            }
          j || (this._target[i] = e);
        }
      }),
      (a._runActions = function (a, b, c) {
        var d = a,
          e = b,
          f = -1,
          g = this._actions.length,
          h = 1;
        for (
          a > b && ((d = b), (e = a), (f = g), (g = h = -1));
          (f += h) != g;

        ) {
          var i = this._actions[f],
            j = i.t;
          (j == e || (j > d && e > j) || (c && j == a)) && i.f.apply(i.o, i.p);
        }
      }),
      (a._appendQueueProps = function (a) {
        var b, c, d, e, f;
        for (var g in a)
          if (void 0 === this._initQueueProps[g]) {
            if (((c = this._target[g]), (b = Tween._plugins[g])))
              for (d = 0, e = b.length; e > d; d++) c = b[d].init(this, g, c);
            this._initQueueProps[g] = this._curQueueProps[g] =
              void 0 === c ? null : c;
          } else c = this._curQueueProps[g];
        for (var g in a) {
          if (((c = this._curQueueProps[g]), (b = Tween._plugins[g])))
            for (f = f || {}, d = 0, e = b.length; e > d; d++)
              b[d].step && b[d].step(this, g, c, a[g], f);
          this._curQueueProps[g] = a[g];
        }
        return f && this._appendQueueProps(f), this._curQueueProps;
      }),
      (a._cloneProps = function (a) {
        var b = {};
        for (var c in a) b[c] = a[c];
        return b;
      }),
      (a._addStep = function (a) {
        return (
          a.d > 0 &&
            (this._steps.push(a),
            (a.t = this.duration),
            (this.duration += a.d)),
          this
        );
      }),
      (a._addAction = function (a) {
        return (a.t = this.duration), this._actions.push(a), this;
      }),
      (a._set = function (a, b) {
        for (var c in a) b[c] = a[c];
      }),
      (createjs.Tween = createjs.promote(Tween, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function Timeline(a, b, c) {
      this.EventDispatcher_constructor(),
        (this.ignoreGlobalPause = !1),
        (this.duration = 0),
        (this.loop = !1),
        (this.position = null),
        (this._paused = !1),
        (this._tweens = []),
        (this._labels = null),
        (this._labelList = null),
        (this._prevPosition = 0),
        (this._prevPos = -1),
        (this._useTicks = !1),
        (this._registered = !1),
        c &&
          ((this._useTicks = c.useTicks),
          (this.loop = c.loop),
          (this.ignoreGlobalPause = c.ignoreGlobalPause),
          c.onChange && this.addEventListener("change", c.onChange)),
        a && this.addTween.apply(this, a),
        this.setLabels(b),
        c && c.paused
          ? (this._paused = !0)
          : createjs.Tween._register(this, !0),
        c &&
          null != c.position &&
          this.setPosition(c.position, createjs.Tween.NONE);
    }
    var a = createjs.extend(Timeline, createjs.EventDispatcher);
    (a.addTween = function (a) {
      var b = arguments.length;
      if (b > 1) {
        for (var c = 0; b > c; c++) this.addTween(arguments[c]);
        return arguments[0];
      }
      return 0 == b
        ? null
        : (this.removeTween(a),
          this._tweens.push(a),
          a.setPaused(!0),
          (a._paused = !1),
          (a._useTicks = this._useTicks),
          a.duration > this.duration && (this.duration = a.duration),
          this._prevPos >= 0 &&
            a.setPosition(this._prevPos, createjs.Tween.NONE),
          a);
    }),
      (a.removeTween = function (a) {
        var b = arguments.length;
        if (b > 1) {
          for (var c = !0, d = 0; b > d; d++)
            c = c && this.removeTween(arguments[d]);
          return c;
        }
        if (0 == b) return !1;
        for (var e = this._tweens, d = e.length; d--; )
          if (e[d] == a)
            return (
              e.splice(d, 1),
              a.duration >= this.duration && this.updateDuration(),
              !0
            );
        return !1;
      }),
      (a.addLabel = function (a, b) {
        this._labels[a] = b;
        var c = this._labelList;
        if (c) {
          for (var d = 0, e = c.length; e > d && !(b < c[d].position); d++);
          c.splice(d, 0, {
            label: a,
            position: b,
          });
        }
      }),
      (a.setLabels = function (a) {
        this._labels = a ? a : {};
      }),
      (a.getLabels = function () {
        var a = this._labelList;
        if (!a) {
          a = this._labelList = [];
          var b = this._labels;
          for (var c in b)
            a.push({
              label: c,
              position: b[c],
            });
          a.sort(function (a, b) {
            return a.position - b.position;
          });
        }
        return a;
      }),
      (a.getCurrentLabel = function () {
        var a = this.getLabels(),
          b = this.position,
          c = a.length;
        if (c) {
          for (var d = 0; c > d && !(b < a[d].position); d++);
          return 0 == d ? null : a[d - 1].label;
        }
        return null;
      }),
      (a.gotoAndPlay = function (a) {
        this.setPaused(!1), this._goto(a);
      }),
      (a.gotoAndStop = function (a) {
        this.setPaused(!0), this._goto(a);
      }),
      (a.setPosition = function (a, b) {
        var c = this._calcPosition(a),
          d = !this.loop && a >= this.duration;
        if (c == this._prevPos) return d;
        (this._prevPosition = a), (this.position = this._prevPos = c);
        for (var e = 0, f = this._tweens.length; f > e; e++)
          if ((this._tweens[e].setPosition(c, b), c != this._prevPos))
            return !1;
        return d && this.setPaused(!0), this.dispatchEvent("change"), d;
      }),
      (a.setPaused = function (a) {
        (this._paused = !!a), createjs.Tween._register(this, !a);
      }),
      (a.updateDuration = function () {
        this.duration = 0;
        for (var a = 0, b = this._tweens.length; b > a; a++) {
          var c = this._tweens[a];
          c.duration > this.duration && (this.duration = c.duration);
        }
      }),
      (a.tick = function (a) {
        this.setPosition(this._prevPosition + a);
      }),
      (a.resolve = function (a) {
        var b = Number(a);
        return isNaN(b) && (b = this._labels[a]), b;
      }),
      (a.toString = function () {
        return "[Timeline]";
      }),
      (a.clone = function () {
        throw "Timeline can not be cloned.";
      }),
      (a._goto = function (a) {
        var b = this.resolve(a);
        null != b && this.setPosition(b);
      }),
      (a._calcPosition = function (a) {
        return 0 > a
          ? 0
          : a < this.duration
            ? a
            : this.loop
              ? a % this.duration
              : this.duration;
      }),
      (createjs.Timeline = createjs.promote(Timeline, "EventDispatcher"));
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function Ease() {
      throw "Ease cannot be instantiated.";
    }
    (Ease.linear = function (a) {
      return a;
    }),
      (Ease.none = Ease.linear),
      (Ease.get = function (a) {
        return (
          -1 > a && (a = -1),
          a > 1 && (a = 1),
          function (b) {
            return 0 == a
              ? b
              : 0 > a
                ? b * (b * -a + 1 + a)
                : b * ((2 - b) * a + (1 - a));
          }
        );
      }),
      (Ease.getPowIn = function (a) {
        return function (b) {
          return Math.pow(b, a);
        };
      }),
      (Ease.getPowOut = function (a) {
        return function (b) {
          return 1 - Math.pow(1 - b, a);
        };
      }),
      (Ease.getPowInOut = function (a) {
        return function (b) {
          return (b *= 2) < 1
            ? 0.5 * Math.pow(b, a)
            : 1 - 0.5 * Math.abs(Math.pow(2 - b, a));
        };
      }),
      (Ease.quadIn = Ease.getPowIn(2)),
      (Ease.quadOut = Ease.getPowOut(2)),
      (Ease.quadInOut = Ease.getPowInOut(2)),
      (Ease.cubicIn = Ease.getPowIn(3)),
      (Ease.cubicOut = Ease.getPowOut(3)),
      (Ease.cubicInOut = Ease.getPowInOut(3)),
      (Ease.quartIn = Ease.getPowIn(4)),
      (Ease.quartOut = Ease.getPowOut(4)),
      (Ease.quartInOut = Ease.getPowInOut(4)),
      (Ease.quintIn = Ease.getPowIn(5)),
      (Ease.quintOut = Ease.getPowOut(5)),
      (Ease.quintInOut = Ease.getPowInOut(5)),
      (Ease.sineIn = function (a) {
        return 1 - Math.cos((a * Math.PI) / 2);
      }),
      (Ease.sineOut = function (a) {
        return Math.sin((a * Math.PI) / 2);
      }),
      (Ease.sineInOut = function (a) {
        return -0.5 * (Math.cos(Math.PI * a) - 1);
      }),
      (Ease.getBackIn = function (a) {
        return function (b) {
          return b * b * ((a + 1) * b - a);
        };
      }),
      (Ease.backIn = Ease.getBackIn(1.7)),
      (Ease.getBackOut = function (a) {
        return function (b) {
          return --b * b * ((a + 1) * b + a) + 1;
        };
      }),
      (Ease.backOut = Ease.getBackOut(1.7)),
      (Ease.getBackInOut = function (a) {
        return (
          (a *= 1.525),
          function (b) {
            return (b *= 2) < 1
              ? 0.5 * b * b * ((a + 1) * b - a)
              : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2);
          }
        );
      }),
      (Ease.backInOut = Ease.getBackInOut(1.7)),
      (Ease.circIn = function (a) {
        return -(Math.sqrt(1 - a * a) - 1);
      }),
      (Ease.circOut = function (a) {
        return Math.sqrt(1 - --a * a);
      }),
      (Ease.circInOut = function (a) {
        return (a *= 2) < 1
          ? -0.5 * (Math.sqrt(1 - a * a) - 1)
          : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
      }),
      (Ease.bounceIn = function (a) {
        return 1 - Ease.bounceOut(1 - a);
      }),
      (Ease.bounceOut = function (a) {
        return 1 / 2.75 > a
          ? 7.5625 * a * a
          : 2 / 2.75 > a
            ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
            : 2.5 / 2.75 > a
              ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
              : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
      }),
      (Ease.bounceInOut = function (a) {
        return 0.5 > a
          ? 0.5 * Ease.bounceIn(2 * a)
          : 0.5 * Ease.bounceOut(2 * a - 1) + 0.5;
      }),
      (Ease.getElasticIn = function (a, b) {
        var c = 2 * Math.PI;
        return function (d) {
          if (0 == d || 1 == d) return d;
          var e = (b / c) * Math.asin(1 / a);
          return -(
            a *
            Math.pow(2, 10 * (d -= 1)) *
            Math.sin(((d - e) * c) / b)
          );
        };
      }),
      (Ease.elasticIn = Ease.getElasticIn(1, 0.3)),
      (Ease.getElasticOut = function (a, b) {
        var c = 2 * Math.PI;
        return function (d) {
          if (0 == d || 1 == d) return d;
          var e = (b / c) * Math.asin(1 / a);
          return a * Math.pow(2, -10 * d) * Math.sin(((d - e) * c) / b) + 1;
        };
      }),
      (Ease.elasticOut = Ease.getElasticOut(1, 0.3)),
      (Ease.getElasticInOut = function (a, b) {
        var c = 2 * Math.PI;
        return function (d) {
          var e = (b / c) * Math.asin(1 / a);
          return (d *= 2) < 1
            ? -0.5 *
                a *
                Math.pow(2, 10 * (d -= 1)) *
                Math.sin(((d - e) * c) / b)
            : a *
                Math.pow(2, -10 * (d -= 1)) *
                Math.sin(((d - e) * c) / b) *
                0.5 +
                1;
        };
      }),
      (Ease.elasticInOut = Ease.getElasticInOut(1, 0.3 * 1.5)),
      (createjs.Ease = Ease);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    function MotionGuidePlugin() {
      throw "MotionGuidePlugin cannot be instantiated.";
    }
    (MotionGuidePlugin.priority = 0),
      MotionGuidePlugin._rotOffS,
      MotionGuidePlugin._rotOffE,
      MotionGuidePlugin._rotNormS,
      MotionGuidePlugin._rotNormE,
      (MotionGuidePlugin.install = function () {
        return (
          createjs.Tween.installPlugin(MotionGuidePlugin, [
            "guide",
            "x",
            "y",
            "rotation",
          ]),
          createjs.Tween.IGNORE
        );
      }),
      (MotionGuidePlugin.init = function (a, b, c) {
        var d = a.target;
        return (
          d.hasOwnProperty("x") || (d.x = 0),
          d.hasOwnProperty("y") || (d.y = 0),
          d.hasOwnProperty("rotation") || (d.rotation = 0),
          "rotation" == b && (a.__needsRot = !0),
          "guide" == b ? null : c
        );
      }),
      (MotionGuidePlugin.step = function (a, b, c, d, e) {
        if (
          ("rotation" == b &&
            ((a.__rotGlobalS = c),
            (a.__rotGlobalE = d),
            MotionGuidePlugin.testRotData(a, e)),
          "guide" != b)
        )
          return d;
        var f,
          g = d;
        g.hasOwnProperty("path") || (g.path = []);
        var h = g.path;
        if (
          (g.hasOwnProperty("end") || (g.end = 1),
          g.hasOwnProperty("start") ||
            (g.start =
              c && c.hasOwnProperty("end") && c.path === h ? c.end : 0),
          g.hasOwnProperty("_segments") && g._length)
        )
          return d;
        var i = h.length,
          j = 10;
        if (!(i >= 6 && (i - 2) % 4 == 0))
          throw "invalid 'path' data, please see documentation for valid paths";
        (g._segments = []), (g._length = 0);
        for (var k = 2; i > k; k += 4) {
          for (
            var l,
              m,
              n = h[k - 2],
              o = h[k - 1],
              p = h[k + 0],
              q = h[k + 1],
              r = h[k + 2],
              s = h[k + 3],
              t = n,
              u = o,
              v = 0,
              w = [],
              x = 1;
            j >= x;
            x++
          ) {
            var y = x / j,
              z = 1 - y;
            (l = z * z * n + 2 * z * y * p + y * y * r),
              (m = z * z * o + 2 * z * y * q + y * y * s),
              (v +=
                w[w.push(Math.sqrt((f = l - t) * f + (f = m - u) * f)) - 1]),
              (t = l),
              (u = m);
          }
          g._segments.push(v), g._segments.push(w), (g._length += v);
        }
        (f = g.orient), (g.orient = !0);
        var A = {};
        return (
          MotionGuidePlugin.calc(g, g.start, A),
          (a.__rotPathS = Number(A.rotation.toFixed(5))),
          MotionGuidePlugin.calc(g, g.end, A),
          (a.__rotPathE = Number(A.rotation.toFixed(5))),
          (g.orient = !1),
          MotionGuidePlugin.calc(g, g.end, e),
          (g.orient = f),
          g.orient
            ? ((a.__guideData = g), MotionGuidePlugin.testRotData(a, e), d)
            : d
        );
      }),
      (MotionGuidePlugin.testRotData = function (a, b) {
        if (void 0 === a.__rotGlobalS || void 0 === a.__rotGlobalE) {
          if (a.__needsRot) return;
          a.__rotGlobalS = a.__rotGlobalE =
            void 0 !== a._curQueueProps.rotation
              ? a._curQueueProps.rotation
              : (b.rotation = a.target.rotation || 0);
        }
        if (void 0 !== a.__guideData) {
          var c = a.__guideData,
            d = a.__rotGlobalE - a.__rotGlobalS,
            e = a.__rotPathE - a.__rotPathS,
            f = d - e;
          if ("auto" == c.orient) f > 180 ? (f -= 360) : -180 > f && (f += 360);
          else if ("cw" == c.orient) {
            for (; 0 > f; ) f += 360;
            0 == f && d > 0 && 180 != d && (f += 360);
          } else if ("ccw" == c.orient) {
            for (f = d - (e > 180 ? 360 - e : e); f > 0; ) f -= 360;
            0 == f && 0 > d && -180 != d && (f -= 360);
          }
          (c.rotDelta = f),
            (c.rotOffS = a.__rotGlobalS - a.__rotPathS),
            (a.__rotGlobalS =
              a.__rotGlobalE =
              a.__guideData =
              a.__needsRot =
                void 0);
        }
      }),
      (MotionGuidePlugin.tween = function (a, b, c, d, e, f, g) {
        var h = e.guide;
        if (void 0 == h || h === d.guide) return c;
        if (h.lastRatio != f) {
          var i = (h.end - h.start) * (g ? h.end : f) + h.start;
          switch ((MotionGuidePlugin.calc(h, i, a.target), h.orient)) {
            case "cw":
            case "ccw":
            case "auto":
              a.target.rotation += h.rotOffS + h.rotDelta * f;
              break;
            case "fixed":
            default:
              a.target.rotation += h.rotOffS;
          }
          h.lastRatio = f;
        }
        return "rotation" != b || (h.orient && "false" != h.orient)
          ? a.target[b]
          : c;
      }),
      (MotionGuidePlugin.calc = function (a, b, c) {
        void 0 == a._segments && MotionGuidePlugin.validate(a),
          void 0 == c &&
            (c = {
              x: 0,
              y: 0,
              rotation: 0,
            });
        for (
          var d = a._segments,
            e = a.path,
            f = a._length * b,
            g = d.length - 2,
            h = 0;
          f > d[h] && g > h;

        )
          (f -= d[h]), (h += 2);
        var i = d[h + 1],
          j = 0;
        for (g = i.length - 1; f > i[j] && g > j; ) (f -= i[j]), j++;
        var k = j / ++g + f / (g * i[j]);
        h = 2 * h + 2;
        var l = 1 - k;
        return (
          (c.x = l * l * e[h - 2] + 2 * l * k * e[h + 0] + k * k * e[h + 2]),
          (c.y = l * l * e[h - 1] + 2 * l * k * e[h + 1] + k * k * e[h + 3]),
          a.orient &&
            (c.rotation =
              57.2957795 *
              Math.atan2(
                (e[h + 1] - e[h - 1]) * l + (e[h + 3] - e[h + 1]) * k,
                (e[h + 0] - e[h - 2]) * l + (e[h + 2] - e[h + 0]) * k,
              )),
          c
        );
      }),
      (createjs.MotionGuidePlugin = MotionGuidePlugin);
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = (createjs.TweenJS = createjs.TweenJS || {});
    (a.version = "0.6.1"), (a.buildDate = "Thu, 21 May 2015 16:17:37 GMT");
  })();
