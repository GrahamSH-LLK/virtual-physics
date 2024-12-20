/*!
 * @license EaselJS
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
  (function () {
    "use strict";
    function a(b, c, d, e) {
      this.Container_constructor(),
        !a.inited && a.init(),
        (this.mode = b || a.INDEPENDENT),
        (this.startPosition = c || 0),
        (this.loop = d),
        (this.currentFrame = 0),
        (this.timeline = new createjs.Timeline(null, e, {
          paused: !0,
          position: c,
          useTicks: !0,
        })),
        (this.paused = !1),
        (this.actionsEnabled = !0),
        (this.autoReset = !0),
        (this.frameBounds = this.frameBounds || null),
        (this.framerate = null),
        (this._synchOffset = 0),
        (this._prevPos = -1),
        (this._prevPosition = 0),
        (this._t = 0),
        (this._managed = {});
    }
    function b() {
      throw "MovieClipPlugin cannot be instantiated.";
    }
    var c = createjs.extend(a, createjs.Container);
    (a.INDEPENDENT = "independent"),
      (a.SINGLE_FRAME = "single"),
      (a.SYNCHED = "synched"),
      (a.inited = !1),
      (a.init = function () {
        a.inited || (b.install(), (a.inited = !0));
      }),
      (c.getLabels = function () {
        return this.timeline.getLabels();
      }),
      (c.getCurrentLabel = function () {
        return this._updateTimeline(), this.timeline.getCurrentLabel();
      }),
      (c.getDuration = function () {
        return this.timeline.duration;
      });
    try {
      Object.defineProperties(c, {
        labels: {
          get: c.getLabels,
        },
        currentLabel: {
          get: c.getCurrentLabel,
        },
        totalFrames: {
          get: c.getDuration,
        },
        duration: {
          get: c.getDuration,
        },
      });
    } catch (d) {}
    (c.initialize = a),
      (c.isVisible = function () {
        return !!(
          this.visible &&
          this.alpha > 0 &&
          0 != this.scaleX &&
          0 != this.scaleY
        );
      }),
      (c.draw = function (a, b) {
        return this.DisplayObject_draw(a, b)
          ? !0
          : (this._updateTimeline(), this.Container_draw(a, b), !0);
      }),
      (c.play = function () {
        this.paused = !1;
      }),
      (c.stop = function () {
        this.paused = !0;
      }),
      (c.gotoAndPlay = function (a) {
        (this.paused = !1), this._goto(a);
      }),
      (c.gotoAndStop = function (a) {
        (this.paused = !0), this._goto(a);
      }),
      (c.advance = function (b) {
        var c = a.INDEPENDENT;
        if (this.mode == c) {
          for (var d = this, e = d.framerate; (d = d.parent) && null == e; )
            d.mode == c && (e = d._framerate);
          this._framerate = e;
          var f =
              null != e && -1 != e && null != b ? b / (1e3 / e) + this._t : 1,
            g = 0 | f;
          for (this._t = f - g; !this.paused && g--; )
            (this._prevPosition =
              this._prevPos < 0 ? 0 : this._prevPosition + 1),
              this._updateTimeline();
        }
      }),
      (c.clone = function () {
        throw "MovieClip cannot be cloned.";
      }),
      (c.toString = function () {
        return "[MovieClip (name=" + this.name + ")]";
      }),
      (c._tick = function (a) {
        this.advance(a && a.delta), this.Container__tick(a);
      }),
      (c._goto = function (a) {
        var b = this.timeline.resolve(a);
        null != b &&
          (-1 == this._prevPos && (this._prevPos = 0 / 0),
          (this._prevPosition = b),
          (this._t = 0),
          this._updateTimeline());
      }),
      (c._reset = function () {
        (this._prevPos = -1),
          (this._t = this.currentFrame = 0),
          (this.paused = !1);
      }),
      (c._updateTimeline = function () {
        var b = this.timeline,
          c = this.mode != a.INDEPENDENT;
        b.loop = null == this.loop ? !0 : this.loop;
        var d = c
            ? this.startPosition +
              (this.mode == a.SINGLE_FRAME ? 0 : this._synchOffset)
            : this._prevPos < 0
              ? 0
              : this._prevPosition,
          e = c || !this.actionsEnabled ? createjs.Tween.NONE : null;
        if (
          ((this.currentFrame = b._calcPosition(d)),
          b.setPosition(d, e),
          (this._prevPosition = b._prevPosition),
          this._prevPos != b._prevPos)
        ) {
          this.currentFrame = this._prevPos = b._prevPos;
          for (var f in this._managed) this._managed[f] = 1;
          for (var g = b._tweens, h = 0, i = g.length; i > h; h++) {
            var j = g[h],
              k = j._target;
            if (k != this && !j.passive) {
              var l = j._stepPosition;
              k instanceof createjs.DisplayObject
                ? this._addManagedChild(k, l)
                : this._setState(k.state, l);
            }
          }
          var m = this.children;
          for (h = m.length - 1; h >= 0; h--) {
            var n = m[h].id;
            1 == this._managed[n] &&
              (this.removeChildAt(h), delete this._managed[n]);
          }
        }
      }),
      (c._setState = function (a, b) {
        if (a)
          for (var c = a.length - 1; c >= 0; c--) {
            var d = a[c],
              e = d.t,
              f = d.p;
            for (var g in f) e[g] = f[g];
            this._addManagedChild(e, b);
          }
      }),
      (c._addManagedChild = function (b, c) {
        b._off ||
          (this.addChildAt(b, 0),
          b instanceof a &&
            ((b._synchOffset = c),
            b.mode == a.INDEPENDENT &&
              b.autoReset &&
              !this._managed[b.id] &&
              b._reset()),
          (this._managed[b.id] = 2));
      }),
      (c._getBounds = function (a, b) {
        var c = this.DisplayObject_getBounds();
        return (
          c ||
            (this._updateTimeline(),
            this.frameBounds &&
              (c = this._rectangle.copy(this.frameBounds[this.currentFrame]))),
          c ? this._transformBounds(c, a, b) : this.Container__getBounds(a, b)
        );
      }),
      (createjs.MovieClip = createjs.promote(a, "Container")),
      (b.priority = 100),
      (b.install = function () {
        createjs.Tween.installPlugin(b, ["startPosition"]);
      }),
      (b.init = function (a, b, c) {
        return c;
      }),
      (b.step = function () {}),
      (b.tween = function (b, c, d, e, f, g) {
        return b.target instanceof a ? (1 == g ? f[c] : e[c]) : d;
      });
  })(),
  (this.createjs = this.createjs || {}),
  (function () {
    "use strict";
    var a = (createjs.MovieClip = createjs.MovieClip || {});
    (a.version = "0.8.1"), (a.buildDate = "Thu, 21 May 2015 16:17:39 GMT");
  })();
