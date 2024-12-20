(function (lib, img, cjs, ss) {
  var p; // shortcut to reference prototypes

  // library properties:
  lib.properties = {
    width: 1024,
    height: 808,
    fps: 24,
    color: "#FFFFFF",
    manifest: [
      { src: "images/Bitmap4.png?1495449799955", id: "Bitmap4" },
      { src: "images/car.png?1495449799955", id: "car" },
    ],
  };

  // symbols:

  (lib.Bitmap4 = function () {
    this.initialize(img.Bitmap4);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1024, 1024);

  (lib.car = function () {
    this.initialize(img.car);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 176, 90);

  (lib.Watchbg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#48525C")
      .s()
      .p(
        "AgldAIAAlaIBLAAIAAFagAXlAlIAAhLIFaAAIAABLgA8+AlIAAhLIFaAAIAABLgAgl3lIAAlaIBLAAIAAFag",
      );
    this.shape.setTransform(-1.2, 0.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF0000")
      .s()
      .p(
        "AMJWNIBBgmIB1DMIhAAngAvBY2IB4jPIBBAmIh2DNgAVmNJIAmhBIDPB1IgnBEgA5aN9IDPh1IAmBBIjOB4gAVmtKIDOh2IAnBBIjPB4gA5at/IAnhBIDOB2IgmBDgAMH2NIB4jMIBAAnIh1DMgAvB41IBDgkIB2DMIhBAng",
      );
    this.shape_1.setTransform(-1.2, 0.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(255,255,255,0.502)")
      .s()
      .p(
        "AyHHuQlHjKhqkCQBiiJB/h/QFalaGyiFQC5g4DJgSQBegJBiAAQB2AAB1AOQCZARCPAoQHMCAFrFrQCNCOBrCaQhxDvkyC9QnkErqrAAQqrAAnjkrg",
      );
    this.shape_2.setTransform(1.2, -112.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .rf(["#FFFFFF", "#CECECE"], [0.914, 1], -0.4, -0.2, 0, -0.4, -0.2, 187)
      .s()
      .p(
        "Ai9d2QjKgSi6g5QmxiFlalaQoxoxAAsbQAAsZIxozQFalZGyiFQC6g5DJgSQBdgIBgAAQB5AAB0ANQCZARCPAoQHMCBFsFqQIxIzAAMZQAAMboxIxQlrFrnLCAQiRApiaARQh0ANh4AAQhfAAhegIg",
      );

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#A3A4A8")
      .s()
      .p(
        "ArqcMQlSiSkZkaQo6o6AAsmQAAslI6o7QEZkZFSiSICfgfQmyCFlaFZQoxIzAAMZQAAMbIxIxQFaFaGxCFgAVCVMQIxoxAAsbQAAsZoxozQkckblXiMQFwB9EXEWQI6I7AAMlQAAMmo6I6QkYEYk9BnQE6iMEHkHg",
      );
    this.shape_4.setTransform(1.1, 0);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .rf(
        ["#FFFFFF", "#FFFFFF", "#000000"],
        [0.588, 0.82, 1],
        -10.1,
        4.9,
        0,
        -10.1,
        4.9,
        206.5,
      )
      .s()
      .p(
        "AVhWFQJJpJAAs8QAAs7pJpKQkikglaiXQFpCOEoEpQJKJKAAM7QAAM8pKJJQkoEplpCPQFaiWEikigA2FVgQo6o6AAsmQAAslI6o7QEhkhFgiLQlSCTkZEZQo6I7AAMlQAAMmI6I6QEZEZFSCTQlgiLkhkhg",
      );
    this.shape_5.setTransform(3.8, 0);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#636363")
      .s()
      .p(
        "A2FWGQpJpKAAs8QAAs7JJpKQJKpJM7AAQM8AAJKJJQJJJKAAM7QAAM8pJJKQpKJJs8AAQs7AApKpJgAi991QjJASi5A4QmyCFlbFaQoxIyAAMaQAAMbIxIxQFaFaGyCFQC6A5DKASQBdAIBfAAQB4AAB0gNQCagRCRgpQHLiBFrlqQIyoxgBsbQABsaoyoyQlslqnMiBQiPgoiZgRQh0gNh5AAQhgAAhdAIg",
      );

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#040404")
      .s()
      .p(
        "A3fQvQpupvAAtvQAArNGbohQgcChAACtQAALvIRITQIQIQLqABQLrgBIQoQQIRoTAArvQAAg3gCg3QEHHRAAI9QAANvpvJvQpvJvtwAAQtvAApwpvg",
      );
    this.shape_7.setTransform(0, 43.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .rf(["#FFFFFF", "#000000"], [0, 1], 7.3, -151.7, 0, 7.3, -151.7, 208.6)
      .s()
      .p(
        "A3fXfQpupvAAtwQAAtwJupvQJwpuNvAAQNwAAJvJuQJvJvAANwQAANwpvJvQpvJvtwAAQtvAApwpvg",
      );

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-212.6, -212.6, 425.4, 425.4);

  (lib.Symbol2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Eg//ADZIAAmxIc/AAQBkAAAABkIAADpQAABkhkAAgEA8+ACdQAyhFgBhaQAAhfg2hKIDHAAIAAFIgEAzwACdQAxhFABhaQgBhfg3hKICEAAQg4BJABBgQgBBaAyBFgEAq0ACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg4BJAABgQABBaAxBFg",
      );
    this.shape.setTransform(513, 21.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(103.3, 0, 819.4, 43.5);

  (lib.Symbol2_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.Bitmap4();
    this.instance.setTransform(-512, -512);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-512, -512, 1024, 1024);

  (lib.mc_redCar = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AAKAHIgRgBIgPAAIgEAAIgbgDIgHAAIgFgBIgegCIAXgDIAEgBIAJgBQAZgBAbAAIAgABIAHABIAGAAIA4AEIADAAIAAABIgYACQgYADgXAAIgHABIgJAAgAhFAAIAWABIAEAAIAEAAIAUABIAEAAIAKABIANAAIAFAAIAGAAIAjgCIARgBIgBAAIgqgBIgFgBIgFAAIgXAAQgUgBgRABIgIABIgCAAIgRABg",
      );
    this.shape.setTransform(17.4, 16.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgKAHQgrAAgrgHQAmgDAigCIAXgBIAJAAIAIAAIAHAAQAUAAATABIAGABIAaADIADABIgIAAIgTABQgQADgRABIgHABIgHAAIggABIgBAAgAgRgBIg1ABQAgADAfAAIABAAIAXgBIAFAAIAFAAIAZgCIAOAAIAFAAIgCAAIgTgBIgFAAIgcgBIgFAAIgGAAIgGAAIgRABg",
      );
    this.shape_1.setTransform(17.8, 2.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgTA1QgOgbgCgZIAAgCIAAgCIABgHQACgLADgKIAEgLIAGgKIA2gBQgHAhACAhQACAUADAUgAgTgkIgEAJQgCAJgBAJIgBAHIAAABIAAACQACAWAKAWIAqAAQgCgRgBgRQgDgcAGgcIgqAAIgEAJg",
      );
    this.shape_2.setTransform(7.3, 9.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgYAlIAAhKQABgEAFgCIAiABIAFABQAEADgBADIAAAFIABAHIAAAMIAAAHIAAAXIgBADIAAAGIAAAJQgBAFgFACIgjAAQgGAAgBgHgAgRggIAAA/QAAAHAFAAIAZAAQAEgCAAgFIABgHIAAgEIAAgEIAAgUIAAgFIAAgLIAAgFIgBgFQABgDgDgCIgDgCIgZAAQgDACgBADg",
      );
    this.shape_3.setTransform(19.7, 9.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgoA7IAFgVIACgIIAAgBIABgHIABgPIAAgLIAAgGIgBgMIgBgGIAAgCIgCgIIgEgUIAygIIABABQAcATABAtQABAdgLATIgDAEIgGAHQgFAFgGADIAAABgAgfgzIAEASIABAHIAAABIABAGIABAKIAAAGIAAAJIgBANIgBAGIAAABIgCAHIgEATIAqAHIAAgBIAJgHIAFgGIACgEQAKgRgBgZQgBgngXgRIgBgBg",
      );
    this.shape_4.setTransform(27.6, 9.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFEF9")
      .s()
      .p(
        "ACXBHIAAgBIABgEIAFgJIAIgHQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBABIgFAJIgHAHIgEACIgBAAgAibBCQgEgCgDgFIgFgJQgCgEABgBQACAAADACIAHAHIAFAJQAAABABABQAAABAAAAQAAABAAAAQAAABAAAAIgBAAIgEgCgAiogtQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIAFgJIAHgHQADgDACABQABABgCAEIgFAIIgHAIIgEACIgBgBgACkgxIgIgHIgFgJIgBgEIABgBQAAAAABAAQAAAAABAAQAAAAABABQABAAABABIAHAHIAEAIIABABQAAABABABQAAABAAAAQAAABAAAAQAAABgBAAIAAAAIgEgCg",
      );
    this.shape_5.setTransform(19, 9.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#D32C2C").s().p("AAAAAIAAAAIAAAAg");
    this.shape_6.setTransform(3.3, 17.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#203548").s().p("AAAAAIABAAIgBAAg");
    this.shape_7.setTransform(27.2, 16.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#4B76A9")
      .s()
      .p(
        "AAcA/IAHABIgNAMIgHABgAgLBMIgPAAIAPgOIAgABIgOAOIgSgBgABBAGIABgKIA9A3IgGAHgAhIA1IhCg/QABgLAEgKIAEgLIA5A3QABAUAEAUgAhXA1Ig0g0IAAgCIA5A2gABBgKIgBgMIAAgGIgBgCIgBgIIgFgUIATgEIBAA9QABAcgMATgAAhArIglgoIAAgDIAoArgAgEgVIAAgGIAwAxIAAAFgAgEgfIAAgGQABgFADgCIAGAAIAmAoIAAAWgAgJg9IgOgNIAWgBIAKAAIAOANIggABIAAAAgAARhLIAHAAIANAMIgGABg",
      );
    this.shape_8.setTransform(17.7, 9.7);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#38587E")
      .s()
      .p(
        "AAHBNIAOgOIAHAAIgNAOIgIAAgAAjBAIA4AFIACABIAAAAIgXADQgYACgYABgAgeBMIgbgDIgGgBIgFAAIgfgEIAXgEIAEAAIAKgBQAYgBAbAAIgPAOIgEAAgABRA+IgZgDIAGgVIABgIIAAgCIABgGIABgQIA4A0QgFAFgGADIgBABgAhSA1Ig5g2IAAgCIABgHIBCA/gAh8A1QgOgbgBgZIA0A0gABCgEIgBgGIBAA4IgCAFgAgEAkIAAghIAlAoIggAAQgFABAAgIgAAkArIgogrIAAgVIAwAwIgBAJQAAAFgFACgAgEgbIAAgEIAwAxIAAAEgAiBgqIAFgKIA5gBQgHAhACAhgABMg+IAFAAIAdgEIABABQAcATABAtgAAGgsIAeABIAEABQAEADgBADIABAGIAAAGIAAANIAAAHgAhghDQAngFAigCIAOANQgrAAgsgGgAAJhLIAIAAIAOANIgIAAgAAYhLQAUAAASABIAHABIAaACIADABIgIABIgTADQgRACgRABg",
      );
    this.shape_9.setTransform(17.7, 9.7);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FF0000")
      .s()
      .p(
        "ABQBOQAMgEADgCQAOgCALgTQAMgVAAgeQAAgcgMgWQgLgSgOgDQgDgCgNgEQASgCATABIANABQANACAKAGQAKAGAHAKQAIAMADAQIABAPIAAAFIAAADIAAAAIAAAIIgBASQgBALgEAJIgFAJQgHAKgLAHIgJAEIgCABIgKADIgEABIgQAAIgfgBgAiqAyQgIgUgCgbQgCgYAIgWQAGgTASgKQBEASBEgBIAAAAIAggBIAHgBIAGAAIAPgCIAFgBIAUgDIgBABIgFABIgTADIAFAUIABAIIABACIAAAGIABAMIABAGIgBALIgBAPIgBAHIAAABIgBAIIgGAVIAZAEIABABIgPgDIgLgBIgEgBIgEAAIgHgBIgGAAIgIgBIgggBQgfAAgeADIgKABIgEABQgdAEgeAIQgLgEgJgTgAiHg0IgFAKIgEALQgEAKgBALIgBAHIAAACIAAADQABAZAOAbIAlAAIAFAAIAKAAIAFAAQgEgVgBgUQgCghAHgggAgPglIAAAGIAAAEIAAAGIAAAVIAAADIAAAiQAAAHAHAAIAegBIADAAIACAAQAFgBAAgFIABgJIAAgGIAAgEIAAgWIAAgHIAAgNIAAgGIgBgFQABgEgEgDIgEgBIgcAAIgHAAQgEABgBAFg",
      );
    this.shape_10.setTransform(18.8, 9.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#C60000")
      .s()
      .p(
        "AA+BfIAAgDQgCgLAIgHIgMACIgMABIgHAAIgdACIgHAAIgGAAIgJAAQgJAHgKgHIgCgBIghgCIgCABIgDABIgBABQgNADgegBIgGAAQgKAAgJgCIgLgEIgBgBIAAAAIgBAAIgBgBQgMgCgIgVQgJgUgCgbQgBgYAHgWQAHgUATgKIABAAIAAgBIAMgEQAIgCALAAIAGAAQAegCANAEIAGADIAggCIACgBQALgHAIAHIAMAAIAFAAIAHAAIAcABIAHABIAFAAIAHABIALACQgHgHABgLIABgDQAOgEABATIADAAQAVgDAWABIANABQArAJAIAtIABAQIAAAFIAAADIAAAAIAAAIIgBASQgBAMgEAKQgKAWgWAJIgFACIgKADIgBAAQgeABgagDQgCAQgJAAIgFgBgABPhNQANAEADACQAOADAKASQANAWAAAcQAAAegNAVQgKATgPACQgDACgMAEQAXACAYgBIAFgBIAKgDIACgBIAJgEQAKgHAHgKIAFgJQAEgJACgLIABgSIAAgIIgBAAIAAgDIAAgFIgBgPQgDgQgIgMQgHgKgKgGQgKgGgMgCIgNgBIgIAAQgPAAgOABgAhKA/IgJABIgEABIgYADIAfAEIAFABIAHAAIAaADIAFAAIAOAAIAUABIAGAAIAHgBQAYAAAYgDIAXgCIACgBIgCAAIgCAAIg4gGIgGAAIgIgBIgggBIgNAAIgmABgAivgrQgHAWACAYQABAbAJAUQAIATALAEQAegIAegEIAEgBIAJgBQAfgDAfAAIAgABIAHABIAGAAIAIABIADAAIAFABIAKABIAQADIgBgBIAcAEIAAgBQAGgDAFgFIAGgHIADgEQALgTgBgdQgBgtgcgTIgBgBIgcAEIABgBIgUADIgGABIgOACIgHAAIgHABIgfABIgBAAQhDABhFgSQgRAKgHATgAgUg8IAggBIAHgBIAHAAQARgBAQgDIATgCIAIgCIgDAAIgagDIgGgBQgTgBgUAAIgHAAIgGAAIgLAAIgXABQgiACgmAFQArAGArABIABAAIAAAAg",
      );
    this.shape_11.setTransform(18.9, 9.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 37.8, 19.2);

  (lib.mc_outline = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGGAAIAAACIAADNIAAACImGAAIAAgsg");
    this.shape.setTransform(1004.8, 638);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIABAAIgBABIAtAnIAAACg");
    this.shape_1.setTransform(1004.8, 646.3);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_2.setTransform(1022.1, 638);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_3.setTransform(1002.6, 636.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_4.setTransform(1004.8, 628.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAACIAADNIAAACImHAAIAAgsg");
    this.shape_5.setTransform(965.4, 638);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_6.setTransform(982.8, 638);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_7.setTransform(963.3, 636.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFYAAIABAAIgBABIAtAnIAAACg");
    this.shape_8.setTransform(965.4, 646.3);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgqASg");
    this.shape_9.setTransform(965.4, 628.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADDBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAACg");
    this.shape_10.setTransform(926, 638);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFZAAIAAAAIAAABIAsAnIAAACg");
    this.shape_11.setTransform(926, 646.3);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_12.setTransform(943.3, 638);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_13.setTransform(923.8, 636.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgqASg");
    this.shape_14.setTransform(926, 628.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAACIAADNIAAACImHAAIAAgsg");
    this.shape_15.setTransform(886.6, 638);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIAAAAIAAABIAtAnIAAACg");
    this.shape_16.setTransform(886.6, 646.3);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_17.setTransform(904, 638);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_18.setTransform(884.5, 636.8);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgsASg");
    this.shape_19.setTransform(886.6, 628.6);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAACIAADNIAAACImHAAIAAgsg");
    this.shape_20.setTransform(847.1, 638);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIAAAAIAAABIAtAnIAAACg");
    this.shape_21.setTransform(847.1, 646.3);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_22.setTransform(864.5, 638);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_23.setTransform(845, 636.8);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_24.setTransform(847.1, 628.6);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAACIAADNIAAACImHAAIAAgsg");
    this.shape_25.setTransform(807.8, 638);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_26.setTransform(825.1, 638);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_27.setTransform(805.6, 636.8);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIABAAIgBABIAtAnIAAACg");
    this.shape_28.setTransform(807.8, 646.3);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_29.setTransform(807.8, 628.6);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAACg");
    this.shape_30.setTransform(768.3, 638);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFYAAIABAAIgBABIAtAnIAAACg");
    this.shape_31.setTransform(768.3, 646.3);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_32.setTransform(785.7, 638);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_33.setTransform(766.2, 636.8);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgqASg");
    this.shape_34.setTransform(768.3, 628.6);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGGAAIAAACIAADNIAAACImGAAIAAgsg");
    this.shape_35.setTransform(729, 638);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFYAAIABAAIgBABIAtAnIAAACg");
    this.shape_36.setTransform(729, 646.3);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_37.setTransform(746.3, 638);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_38.setTransform(726.8, 636.8);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgrASg");
    this.shape_39.setTransform(729, 628.6);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADDBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAACg");
    this.shape_40.setTransform(689.5, 638);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFYAAIABAAIgBABIAtAnIAAACg");
    this.shape_41.setTransform(689.5, 646.3);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_42.setTransform(706.8, 638);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_43.setTransform(687.3, 636.8);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgqASg");
    this.shape_44.setTransform(689.5, 628.6);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAACg");
    this.shape_45.setTransform(650.1, 638);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFZAAIAAAAIAAABIAtAnIAAACg");
    this.shape_46.setTransform(650.1, 646.3);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_47.setTransform(667.4, 638);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_48.setTransform(647.9, 636.8);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGGAAIAAABIgrASg");
    this.shape_49.setTransform(650.1, 628.6);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEhoIAAACIAADNIAAACImHAAIAAgsIAAiQIAAgVg");
    this.shape_50.setTransform(610.6, 638);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFYAAIABAAIgBABIAtAnIAAACg");
    this.shape_51.setTransform(610.6, 646.3);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_52.setTransform(628, 638);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_53.setTransform(608.5, 636.8);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgrASg");
    this.shape_54.setTransform(610.6, 628.6);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAACIAADNIAAACImHAAIAAgsg");
    this.shape_55.setTransform(571.2, 638);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIAAAAIAAABIAtAnIAAACg");
    this.shape_56.setTransform(571.2, 646.3);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_57.setTransform(588.5, 638);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_58.setTransform(569, 636.8);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgsASg");
    this.shape_59.setTransform(571.2, 628.6);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGGAAIAAACIAADNIAAACImGAAIAAgsg");
    this.shape_60.setTransform(531.8, 638);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIAAAAIAAABIAtAnIAAACg");
    this.shape_61.setTransform(531.8, 646.3);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_62.setTransform(549.2, 638);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_63.setTransform(529.7, 636.8);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_64.setTransform(531.8, 628.6);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGGAAIAAACIAADNIAAACImGAAIAAgsg");
    this.shape_65.setTransform(492.3, 638);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_66.setTransform(509.7, 638);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_67.setTransform(490.2, 636.8);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIAAAAIAAABIAtAnIAAACg");
    this.shape_68.setTransform(492.3, 646.3);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_69.setTransform(492.3, 628.6);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGGAAIAAACIAADNIAAACImGAAIAAgsg");
    this.shape_70.setTransform(453, 638);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFZAAIAAAAIAAABIAtAnIAAACg");
    this.shape_71.setTransform(453, 646.3);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_72.setTransform(470.3, 638);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_73.setTransform(450.8, 636.8);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGGAAIAAABIgrASg");
    this.shape_74.setTransform(453, 628.6);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGGAAIAAACIAADNIAAACImGAAIAAgsg");
    this.shape_75.setTransform(413.8, 638);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIABAAIgBABIAtAnIAAACg");
    this.shape_76.setTransform(413.8, 646.3);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_77.setTransform(431.2, 638);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_78.setTransform(411.7, 636.8);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_79.setTransform(413.8, 628.6);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGGAAIAAACIAADNIAAACImGAAIAAgsg");
    this.shape_80.setTransform(374.5, 638);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFZAAIAAAAIAAABIAsAnIAAACg");
    this.shape_81.setTransform(374.5, 646.3);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_82.setTransform(391.8, 638);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_83.setTransform(372.3, 636.8);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgqASg");
    this.shape_84.setTransform(374.5, 628.6);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEBnIAAACImHAAIAAgsIAAiQIAAgVIGHAAIAAACg");
    this.shape_85.setTransform(335, 638);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_86.setTransform(352.4, 638);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_87.setTransform(332.9, 636.8);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIAAAAIAAABIAtAnIAAACg");
    this.shape_88.setTransform(335, 646.3);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_89.setTransform(335, 628.6);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGGAAIAAACIAADNIAAACImGAAIAAgsg");
    this.shape_90.setTransform(295.7, 638);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIABAAIgBABIAtAnIAAACg");
    this.shape_91.setTransform(295.7, 646.3);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_92.setTransform(313, 638);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_93.setTransform(293.5, 636.8);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_94.setTransform(295.7, 628.6);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGFAAIAAACIAADNIAAACImFAAIAAgsg");
    this.shape_95.setTransform(256.2, 638);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFZAAIAAAAIAAABIAsAnIAAACg");
    this.shape_96.setTransform(256.2, 646.3);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_97.setTransform(273.6, 638);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_98.setTransform(254.1, 636.8);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgqASg");
    this.shape_99.setTransform(256.2, 628.6);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGFAAIAAACIAADNIAAACImFAAIAAgsg");
    this.shape_100.setTransform(216.9, 638);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIAAAAIAAABIAtAnIAAACg");
    this.shape_101.setTransform(216.9, 646.3);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_102.setTransform(234.3, 638);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_103.setTransform(214.8, 636.8);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgsASg");
    this.shape_104.setTransform(216.9, 628.6);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADDBnIAAACImFAAIAAgsIAAiQIAAgVIGFAAIAAACg");
    this.shape_105.setTransform(177.5, 638);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_106.setTransform(194.9, 638);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_107.setTransform(175.4, 636.8);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFZAAIABAAIgBABIAtAnIAAACg");
    this.shape_108.setTransform(177.5, 646.3);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGGAAIAAABIgrASg");
    this.shape_109.setTransform(177.5, 628.6);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGFAAIAAACIAADNIAAACImFAAIAAgsg");
    this.shape_110.setTransform(138.1, 638);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFYAAIABAAIgBABIAtAnIAAACg");
    this.shape_111.setTransform(138.1, 646.3);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_112.setTransform(155.5, 638);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_113.setTransform(136, 636.8);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgrASg");
    this.shape_114.setTransform(138.1, 628.6);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAACg");
    this.shape_115.setTransform(98.6, 638);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFYAAIABAAIgBABIAtAnIAAACg");
    this.shape_116.setTransform(98.6, 646.3);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_117.setTransform(116, 638);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_118.setTransform(96.5, 636.8);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgqASg");
    this.shape_119.setTransform(98.6, 628.6);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADDBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAACg");
    this.shape_120.setTransform(59.2, 638);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAWIAAgqIFaAAIAAAAIAAABIAtAnIAAACg");
    this.shape_121.setTransform(59.2, 646.3);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgBIAAAAIABiPIABAAIApgVIAADOg");
    this.shape_122.setTransform(76.6, 638);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_123.setTransform(57.1, 636.8);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics.f("#CDCDCD").s().p("AjDAJIAAgSIGHAAIAAABIgrASg");
    this.shape_124.setTransform(59.2, 628.6);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEhoIAAACIAADNIAAACImHAAIAAgsIAAiQIAAgVg");
    this.shape_125.setTransform(19.8, 638);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAWIAAgqIFYAAIABAAIgBABIAtAnIAAACg");
    this.shape_126.setTransform(19.8, 646.3);

    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics.f("#CDCDCD").s().p("AjCAJIAAgSIGFAAIAAABIgrASg");
    this.shape_127.setTransform(19.8, 628.6);

    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgBIgBAAIABiPIABAAIApgVIAADOg");
    this.shape_128.setTransform(37.1, 638);

    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_129.setTransform(17.6, 636.8);

    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGGAAIAAABIAADOIAAACImGAAIAAgsg");
    this.shape_130.setTransform(1004.8, 10.5);

    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIABAAIgBACIAtAnIAAABg");
    this.shape_131.setTransform(1004.8, 18.8);

    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_132.setTransform(1022.1, 10.5);

    this.shape_133 = new cjs.Shape();
    this.shape_133.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_133.setTransform(1002.6, 9.3);

    this.shape_134 = new cjs.Shape();
    this.shape_134.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_134.setTransform(1004.8, 1.1);

    this.shape_135 = new cjs.Shape();
    this.shape_135.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAABIAADOIAAACImHAAIAAgsg");
    this.shape_135.setTransform(965.4, 10.5);

    this.shape_136 = new cjs.Shape();
    this.shape_136.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFYAAIABAAIgBACIAtAnIAAABg");
    this.shape_136.setTransform(965.4, 18.8);

    this.shape_137 = new cjs.Shape();
    this.shape_137.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_137.setTransform(982.8, 10.5);

    this.shape_138 = new cjs.Shape();
    this.shape_138.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_138.setTransform(963.3, 9.3);

    this.shape_139 = new cjs.Shape();
    this.shape_139.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgqASg");
    this.shape_139.setTransform(965.4, 1.1);

    this.shape_140 = new cjs.Shape();
    this.shape_140.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADDBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAABg");
    this.shape_140.setTransform(926, 10.5);

    this.shape_141 = new cjs.Shape();
    this.shape_141.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFZAAIAAAAIAAACIAsAnIAAABg");
    this.shape_141.setTransform(926, 18.8);

    this.shape_142 = new cjs.Shape();
    this.shape_142.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_142.setTransform(943.3, 10.5);

    this.shape_143 = new cjs.Shape();
    this.shape_143.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_143.setTransform(923.8, 9.3);

    this.shape_144 = new cjs.Shape();
    this.shape_144.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgqASg");
    this.shape_144.setTransform(926, 1.1);

    this.shape_145 = new cjs.Shape();
    this.shape_145.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAABIAADOIAAACImHAAIAAgsg");
    this.shape_145.setTransform(886.6, 10.5);

    this.shape_146 = new cjs.Shape();
    this.shape_146.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIAAAAIAAACIAtAnIAAABg");
    this.shape_146.setTransform(886.6, 18.8);

    this.shape_147 = new cjs.Shape();
    this.shape_147.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_147.setTransform(904, 10.5);

    this.shape_148 = new cjs.Shape();
    this.shape_148.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_148.setTransform(884.5, 9.3);

    this.shape_149 = new cjs.Shape();
    this.shape_149.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgsASg");
    this.shape_149.setTransform(886.6, 1.1);

    this.shape_150 = new cjs.Shape();
    this.shape_150.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAABIAADOIAAACImHAAIAAgsg");
    this.shape_150.setTransform(847.1, 10.5);

    this.shape_151 = new cjs.Shape();
    this.shape_151.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIAAAAIAAACIAtAnIAAABg");
    this.shape_151.setTransform(847.1, 18.8);

    this.shape_152 = new cjs.Shape();
    this.shape_152.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_152.setTransform(864.5, 10.5);

    this.shape_153 = new cjs.Shape();
    this.shape_153.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_153.setTransform(845, 9.3);

    this.shape_154 = new cjs.Shape();
    this.shape_154.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_154.setTransform(847.1, 1.1);

    this.shape_155 = new cjs.Shape();
    this.shape_155.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAABIAADOIAAACImHAAIAAgsg");
    this.shape_155.setTransform(807.8, 10.5);

    this.shape_156 = new cjs.Shape();
    this.shape_156.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIABAAIgBACIAtAnIAAABg");
    this.shape_156.setTransform(807.8, 18.8);

    this.shape_157 = new cjs.Shape();
    this.shape_157.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_157.setTransform(825.1, 10.5);

    this.shape_158 = new cjs.Shape();
    this.shape_158.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_158.setTransform(805.6, 9.3);

    this.shape_159 = new cjs.Shape();
    this.shape_159.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_159.setTransform(807.8, 1.1);

    this.shape_160 = new cjs.Shape();
    this.shape_160.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAABg");
    this.shape_160.setTransform(768.3, 10.5);

    this.shape_161 = new cjs.Shape();
    this.shape_161.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFYAAIABAAIgBACIAtAnIAAABg");
    this.shape_161.setTransform(768.3, 18.8);

    this.shape_162 = new cjs.Shape();
    this.shape_162.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_162.setTransform(785.7, 10.5);

    this.shape_163 = new cjs.Shape();
    this.shape_163.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_163.setTransform(766.2, 9.3);

    this.shape_164 = new cjs.Shape();
    this.shape_164.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgqASg");
    this.shape_164.setTransform(768.3, 1.1);

    this.shape_165 = new cjs.Shape();
    this.shape_165.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGGAAIAAABIAADOIAAACImGAAIAAgsg");
    this.shape_165.setTransform(729, 10.5);

    this.shape_166 = new cjs.Shape();
    this.shape_166.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFYAAIABAAIgBACIAtAnIAAABg");
    this.shape_166.setTransform(729, 18.8);

    this.shape_167 = new cjs.Shape();
    this.shape_167.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_167.setTransform(746.3, 10.5);

    this.shape_168 = new cjs.Shape();
    this.shape_168.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_168.setTransform(726.8, 9.3);

    this.shape_169 = new cjs.Shape();
    this.shape_169.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgrASg");
    this.shape_169.setTransform(729, 1.1);

    this.shape_170 = new cjs.Shape();
    this.shape_170.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADDBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAABg");
    this.shape_170.setTransform(689.5, 10.5);

    this.shape_171 = new cjs.Shape();
    this.shape_171.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_171.setTransform(687.3, 9.3);

    this.shape_172 = new cjs.Shape();
    this.shape_172.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_172.setTransform(706.8, 10.5);

    this.shape_173 = new cjs.Shape();
    this.shape_173.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgqASg");
    this.shape_173.setTransform(689.5, 1.1);

    this.shape_174 = new cjs.Shape();
    this.shape_174.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFYAAIABAAIgBACIAtAnIAAABg");
    this.shape_174.setTransform(689.5, 18.8);

    this.shape_175 = new cjs.Shape();
    this.shape_175.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAABg");
    this.shape_175.setTransform(650.1, 10.5);

    this.shape_176 = new cjs.Shape();
    this.shape_176.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_176.setTransform(647.9, 9.3);

    this.shape_177 = new cjs.Shape();
    this.shape_177.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_177.setTransform(667.4, 10.5);

    this.shape_178 = new cjs.Shape();
    this.shape_178.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGGAAIAAABIgrASg");
    this.shape_178.setTransform(650.1, 1.1);

    this.shape_179 = new cjs.Shape();
    this.shape_179.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFZAAIAAAAIAAACIAtAnIAAABg");
    this.shape_179.setTransform(650.1, 18.8);

    this.shape_180 = new cjs.Shape();
    this.shape_180.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEhoIAAABIAADOIAAACImHAAIAAgsIAAiQIAAgVg");
    this.shape_180.setTransform(610.6, 10.5);

    this.shape_181 = new cjs.Shape();
    this.shape_181.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_181.setTransform(608.5, 9.3);

    this.shape_182 = new cjs.Shape();
    this.shape_182.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFYAAIABAAIgBACIAtAnIAAABg");
    this.shape_182.setTransform(610.6, 18.8);

    this.shape_183 = new cjs.Shape();
    this.shape_183.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_183.setTransform(628, 10.5);

    this.shape_184 = new cjs.Shape();
    this.shape_184.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgrASg");
    this.shape_184.setTransform(610.6, 1.1);

    this.shape_185 = new cjs.Shape();
    this.shape_185.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGHAAIAAABIAADOIAAACImHAAIAAgsg");
    this.shape_185.setTransform(571.2, 10.5);

    this.shape_186 = new cjs.Shape();
    this.shape_186.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_186.setTransform(569, 9.3);

    this.shape_187 = new cjs.Shape();
    this.shape_187.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIAAAAIAAACIAtAnIAAABg");
    this.shape_187.setTransform(571.2, 18.8);

    this.shape_188 = new cjs.Shape();
    this.shape_188.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_188.setTransform(588.5, 10.5);

    this.shape_189 = new cjs.Shape();
    this.shape_189.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgsASg");
    this.shape_189.setTransform(571.2, 1.1);

    this.shape_190 = new cjs.Shape();
    this.shape_190.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGGAAIAAABIAADOIAAACImGAAIAAgsg");
    this.shape_190.setTransform(531.8, 10.5);

    this.shape_191 = new cjs.Shape();
    this.shape_191.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIAAAAIAAACIAtAnIAAABg");
    this.shape_191.setTransform(531.8, 18.8);

    this.shape_192 = new cjs.Shape();
    this.shape_192.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_192.setTransform(549.2, 10.5);

    this.shape_193 = new cjs.Shape();
    this.shape_193.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_193.setTransform(529.7, 9.3);

    this.shape_194 = new cjs.Shape();
    this.shape_194.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_194.setTransform(531.8, 1.1);

    this.shape_195 = new cjs.Shape();
    this.shape_195.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGGAAIAAABIAADOIAAACImGAAIAAgsg");
    this.shape_195.setTransform(492.3, 10.5);

    this.shape_196 = new cjs.Shape();
    this.shape_196.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIAAAAIAAACIAtAnIAAABg");
    this.shape_196.setTransform(492.3, 18.8);

    this.shape_197 = new cjs.Shape();
    this.shape_197.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_197.setTransform(509.7, 10.5);

    this.shape_198 = new cjs.Shape();
    this.shape_198.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_198.setTransform(490.2, 9.3);

    this.shape_199 = new cjs.Shape();
    this.shape_199.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_199.setTransform(492.3, 1.1);

    this.shape_200 = new cjs.Shape();
    this.shape_200.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGGAAIAAABIAADOIAAACImGAAIAAgsg");
    this.shape_200.setTransform(453, 10.5);

    this.shape_201 = new cjs.Shape();
    this.shape_201.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFZAAIAAAAIAAACIAtAnIAAABg");
    this.shape_201.setTransform(453, 18.8);

    this.shape_202 = new cjs.Shape();
    this.shape_202.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_202.setTransform(470.3, 10.5);

    this.shape_203 = new cjs.Shape();
    this.shape_203.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_203.setTransform(450.8, 9.3);

    this.shape_204 = new cjs.Shape();
    this.shape_204.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGGAAIAAABIgrASg");
    this.shape_204.setTransform(453, 1.1);

    this.shape_205 = new cjs.Shape();
    this.shape_205.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGGAAIAAABIAADOIAAACImGAAIAAgsg");
    this.shape_205.setTransform(413.8, 10.5);

    this.shape_206 = new cjs.Shape();
    this.shape_206.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIABAAIgBACIAtAnIAAABg");
    this.shape_206.setTransform(413.8, 18.8);

    this.shape_207 = new cjs.Shape();
    this.shape_207.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_207.setTransform(431.2, 10.5);

    this.shape_208 = new cjs.Shape();
    this.shape_208.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_208.setTransform(411.7, 9.3);

    this.shape_209 = new cjs.Shape();
    this.shape_209.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_209.setTransform(413.8, 1.1);

    this.shape_210 = new cjs.Shape();
    this.shape_210.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjDhTIAAgVIGGAAIAAABIAADOIAAACImGAAIAAgsg");
    this.shape_210.setTransform(374.5, 10.5);

    this.shape_211 = new cjs.Shape();
    this.shape_211.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFZAAIAAAAIAAACIAsAnIAAABg");
    this.shape_211.setTransform(374.5, 18.8);

    this.shape_212 = new cjs.Shape();
    this.shape_212.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_212.setTransform(391.8, 10.5);

    this.shape_213 = new cjs.Shape();
    this.shape_213.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_213.setTransform(372.3, 9.3);

    this.shape_214 = new cjs.Shape();
    this.shape_214.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgqASg");
    this.shape_214.setTransform(374.5, 1.1);

    this.shape_215 = new cjs.Shape();
    this.shape_215.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEBnIAAACImHAAIAAgsIAAiQIAAgVIGHAAIAAABg");
    this.shape_215.setTransform(335, 10.5);

    this.shape_216 = new cjs.Shape();
    this.shape_216.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIAAAAIAAACIAtAnIAAABg");
    this.shape_216.setTransform(335, 18.8);

    this.shape_217 = new cjs.Shape();
    this.shape_217.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_217.setTransform(352.4, 10.5);

    this.shape_218 = new cjs.Shape();
    this.shape_218.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_218.setTransform(332.9, 9.3);

    this.shape_219 = new cjs.Shape();
    this.shape_219.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_219.setTransform(335, 1.1);

    this.shape_220 = new cjs.Shape();
    this.shape_220.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGGAAIAAABIAADOIAAACImGAAIAAgsg");
    this.shape_220.setTransform(295.7, 10.5);

    this.shape_221 = new cjs.Shape();
    this.shape_221.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIABAAIgBACIAtAnIAAABg");
    this.shape_221.setTransform(295.7, 18.8);

    this.shape_222 = new cjs.Shape();
    this.shape_222.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_222.setTransform(313, 10.5);

    this.shape_223 = new cjs.Shape();
    this.shape_223.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_223.setTransform(293.5, 9.3);

    this.shape_224 = new cjs.Shape();
    this.shape_224.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_224.setTransform(295.7, 1.1);

    this.shape_225 = new cjs.Shape();
    this.shape_225.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGFAAIAAABIAADOIAAACImFAAIAAgsg");
    this.shape_225.setTransform(256.2, 10.5);

    this.shape_226 = new cjs.Shape();
    this.shape_226.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFZAAIAAAAIAAACIAsAnIAAABg");
    this.shape_226.setTransform(256.2, 18.8);

    this.shape_227 = new cjs.Shape();
    this.shape_227.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_227.setTransform(273.6, 10.5);

    this.shape_228 = new cjs.Shape();
    this.shape_228.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_228.setTransform(254.1, 9.3);

    this.shape_229 = new cjs.Shape();
    this.shape_229.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgqASg");
    this.shape_229.setTransform(256.2, 1.1);

    this.shape_230 = new cjs.Shape();
    this.shape_230.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGFAAIAAABIAADOIAAACImFAAIAAgsg");
    this.shape_230.setTransform(216.9, 10.5);

    this.shape_231 = new cjs.Shape();
    this.shape_231.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIAAAAIAAACIAtAnIAAABg");
    this.shape_231.setTransform(216.9, 18.8);

    this.shape_232 = new cjs.Shape();
    this.shape_232.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_232.setTransform(234.3, 10.5);

    this.shape_233 = new cjs.Shape();
    this.shape_233.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_233.setTransform(214.8, 9.3);

    this.shape_234 = new cjs.Shape();
    this.shape_234.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgsASg");
    this.shape_234.setTransform(216.9, 1.1);

    this.shape_235 = new cjs.Shape();
    this.shape_235.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADDBnIAAACImFAAIAAgsIAAiQIAAgVIGFAAIAAABg");
    this.shape_235.setTransform(177.5, 10.5);

    this.shape_236 = new cjs.Shape();
    this.shape_236.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFZAAIABAAIgBACIAtAnIAAABg");
    this.shape_236.setTransform(177.5, 18.8);

    this.shape_237 = new cjs.Shape();
    this.shape_237.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_237.setTransform(194.9, 10.5);

    this.shape_238 = new cjs.Shape();
    this.shape_238.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_238.setTransform(175.4, 9.3);

    this.shape_239 = new cjs.Shape();
    this.shape_239.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGGAAIAAABIgrASg");
    this.shape_239.setTransform(177.5, 1.1);

    this.shape_240 = new cjs.Shape();
    this.shape_240.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AjChTIAAgVIGFAAIAAABIAADOIAAACImFAAIAAgsg");
    this.shape_240.setTransform(138.1, 10.5);

    this.shape_241 = new cjs.Shape();
    this.shape_241.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFYAAIABAAIgBACIAtAnIAAABg");
    this.shape_241.setTransform(138.1, 18.8);

    this.shape_242 = new cjs.Shape();
    this.shape_242.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_242.setTransform(155.5, 10.5);

    this.shape_243 = new cjs.Shape();
    this.shape_243.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_243.setTransform(136, 9.3);

    this.shape_244 = new cjs.Shape();
    this.shape_244.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgrASg");
    this.shape_244.setTransform(138.1, 1.1);

    this.shape_245 = new cjs.Shape();
    this.shape_245.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAABg");
    this.shape_245.setTransform(98.6, 10.5);

    this.shape_246 = new cjs.Shape();
    this.shape_246.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFYAAIABAAIgBACIAtAnIAAABg");
    this.shape_246.setTransform(98.6, 18.8);

    this.shape_247 = new cjs.Shape();
    this.shape_247.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_247.setTransform(116, 10.5);

    this.shape_248 = new cjs.Shape();
    this.shape_248.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_248.setTransform(96.5, 9.3);

    this.shape_249 = new cjs.Shape();
    this.shape_249.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgqASg");
    this.shape_249.setTransform(98.6, 1.1);

    this.shape_250 = new cjs.Shape();
    this.shape_250.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADDBnIAAACImGAAIAAgsIAAiQIAAgVIGGAAIAAABg");
    this.shape_250.setTransform(59.2, 10.5);

    this.shape_251 = new cjs.Shape();
    this.shape_251.graphics
      .f("#5E5E5E")
      .s()
      .p("AjDAVIAAgqIFaAAIAAAAIAAACIAtAnIAAABg");
    this.shape_251.setTransform(59.2, 18.8);

    this.shape_252 = new cjs.Shape();
    this.shape_252.graphics
      .f("#464646")
      .s()
      .p("AgVA+IAAgCIAAAAIABiOIABgBIApgUIAADOg");
    this.shape_252.setTransform(76.6, 10.5);

    this.shape_253 = new cjs.Shape();
    this.shape_253.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_253.setTransform(57.1, 9.3);

    this.shape_254 = new cjs.Shape();
    this.shape_254.graphics.f("#CDCDCD").s().p("AjDAKIAAgTIGHAAIAAABIgrASg");
    this.shape_254.setTransform(59.2, 1.1);

    this.shape_255 = new cjs.Shape();
    this.shape_255.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ADEhoIAAABIAADOIAAACImHAAIAAgsIAAiQIAAgVg");
    this.shape_255.setTransform(19.8, 10.5);

    this.shape_256 = new cjs.Shape();
    this.shape_256.graphics
      .f("#5E5E5E")
      .s()
      .p("AjCAVIAAgqIFYAAIABAAIgBACIAtAnIAAABg");
    this.shape_256.setTransform(19.8, 18.8);

    this.shape_257 = new cjs.Shape();
    this.shape_257.graphics
      .f("#464646")
      .s()
      .p("AgVA+IABgCIgBAAIABiOIABgBIApgUIAADOg");
    this.shape_257.setTransform(37.1, 10.5);

    this.shape_258 = new cjs.Shape();
    this.shape_258.graphics.f("#878787").s().p("AitBIIAAiPIFbAAIgBABIgBCOg");
    this.shape_258.setTransform(17.6, 9.3);

    this.shape_259 = new cjs.Shape();
    this.shape_259.graphics.f("#CDCDCD").s().p("AjCAKIAAgTIGFAAIAAABIgrASg");
    this.shape_259.setTransform(19.8, 1.1);

    this.shape_260 = new cjs.Shape();
    this.shape_260.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhoCMIAAkXIAsAAICQAAIAVAAIAAEX");
    this.shape_260.setTransform(10.5, 625.4);

    this.shape_261 = new cjs.Shape();
    this.shape_261.graphics.f("#CDCDCD").s().p("AgJCMIABkXIASAAIAAEXg");
    this.shape_261.setTransform(20, 625.4);

    this.shape_262 = new cjs.Shape();
    this.shape_262.graphics.f("#878787").s().p("AhHCMIAAkXICPAAIAAEXg");
    this.shape_262.setTransform(11.7, 625.4);

    this.shape_263 = new cjs.Shape();
    this.shape_263.graphics.f("#5E5E5E").s().p("AgVCMIAAkXIArAAIAAEXg");
    this.shape_263.setTransform(2.2, 625.4);

    this.shape_264 = new cjs.Shape();
    this.shape_264.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGFIgCAAIjOAAIgBAAIAAmFIAsAAg");
    this.shape_264.setTransform(10.5, 591.5);

    this.shape_265 = new cjs.Shape();
    this.shape_265.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_265.setTransform(10.5, 608.9);

    this.shape_266 = new cjs.Shape();
    this.shape_266.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_266.setTransform(20, 591.5);

    this.shape_267 = new cjs.Shape();
    this.shape_267.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_267.setTransform(2.2, 591.5);

    this.shape_268 = new cjs.Shape();
    this.shape_268.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_268.setTransform(11.7, 589.4);

    this.shape_269 = new cjs.Shape();
    this.shape_269.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjDIAVAAIAAGGIgCAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_269.setTransform(10.5, 552.2);

    this.shape_270 = new cjs.Shape();
    this.shape_270.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_270.setTransform(10.5, 569.6);

    this.shape_271 = new cjs.Shape();
    this.shape_271.graphics.f("#CDCDCD").s().p("AAJDDIgSgqIABlbIASAAIAAGFg");
    this.shape_271.setTransform(20, 552.2);

    this.shape_272 = new cjs.Shape();
    this.shape_272.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_272.setTransform(2.2, 552.2);

    this.shape_273 = new cjs.Shape();
    this.shape_273.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_273.setTransform(11.7, 550.1);

    this.shape_274 = new cjs.Shape();
    this.shape_274.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGFIgCAAIjOAAIgBAAIAAmFIAsAAg");
    this.shape_274.setTransform(10.5, 512.7);

    this.shape_275 = new cjs.Shape();
    this.shape_275.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABAAIAAAAICOABIAAABIAUApg");
    this.shape_275.setTransform(10.5, 530.1);

    this.shape_276 = new cjs.Shape();
    this.shape_276.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_276.setTransform(20, 512.7);

    this.shape_277 = new cjs.Shape();
    this.shape_277.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_277.setTransform(2.2, 512.7);

    this.shape_278 = new cjs.Shape();
    this.shape_278.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_278.setTransform(11.7, 510.6);

    this.shape_279 = new cjs.Shape();
    this.shape_279.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGGIgCAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_279.setTransform(10.5, 473.4);

    this.shape_280 = new cjs.Shape();
    this.shape_280.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_280.setTransform(20, 473.4);

    this.shape_281 = new cjs.Shape();
    this.shape_281.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABAAIAAAAICOABIAAACIAUAog");
    this.shape_281.setTransform(10.5, 490.8);

    this.shape_282 = new cjs.Shape();
    this.shape_282.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_282.setTransform(11.7, 471.3);

    this.shape_283 = new cjs.Shape();
    this.shape_283.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAAAIgBAAIgpAtg");
    this.shape_283.setTransform(2.2, 473.4);

    this.shape_284 = new cjs.Shape();
    this.shape_284.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjDIAVAAIAAGHIgCAAIjOAAIgBAAIAAmHIAsAAg");
    this.shape_284.setTransform(10.5, 434.3);

    this.shape_285 = new cjs.Shape();
    this.shape_285.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAACIAUAog");
    this.shape_285.setTransform(10.5, 451.6);

    this.shape_286 = new cjs.Shape();
    this.shape_286.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_286.setTransform(20, 434.3);

    this.shape_287 = new cjs.Shape();
    this.shape_287.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAABIgBgBIgpAtg");
    this.shape_287.setTransform(2.2, 434.3);

    this.shape_288 = new cjs.Shape();
    this.shape_288.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_288.setTransform(11.7, 432.1);

    this.shape_289 = new cjs.Shape();
    this.shape_289.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGFIgCAAIjOAAIgBAAIAAmFIAsAAg");
    this.shape_289.setTransform(10.5, 394.9);

    this.shape_290 = new cjs.Shape();
    this.shape_290.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_290.setTransform(10.5, 412.3);

    this.shape_291 = new cjs.Shape();
    this.shape_291.graphics.f("#CDCDCD").s().p("AAJDDIgSgqIABlbIASAAIAAGFg");
    this.shape_291.setTransform(20, 394.9);

    this.shape_292 = new cjs.Shape();
    this.shape_292.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFZIAAAAIgBAAIgpAsg");
    this.shape_292.setTransform(2.2, 394.9);

    this.shape_293 = new cjs.Shape();
    this.shape_293.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_293.setTransform(11.7, 392.8);

    this.shape_294 = new cjs.Shape();
    this.shape_294.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhnDEIgBAAIAAmHIAsAAICQAAIAVAAIAAGHIgCAAg");
    this.shape_294.setTransform(10.5, 355.5);

    this.shape_295 = new cjs.Shape();
    this.shape_295.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_295.setTransform(10.5, 372.9);

    this.shape_296 = new cjs.Shape();
    this.shape_296.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAABIgBgBIgpAtg");
    this.shape_296.setTransform(2.2, 355.5);

    this.shape_297 = new cjs.Shape();
    this.shape_297.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_297.setTransform(11.7, 353.4);

    this.shape_298 = new cjs.Shape();
    this.shape_298.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_298.setTransform(20, 355.5);

    this.shape_299 = new cjs.Shape();
    this.shape_299.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGGIgCAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_299.setTransform(10.5, 316.2);

    this.shape_300 = new cjs.Shape();
    this.shape_300.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_300.setTransform(10.5, 333.5);

    this.shape_301 = new cjs.Shape();
    this.shape_301.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_301.setTransform(20, 316.2);

    this.shape_302 = new cjs.Shape();
    this.shape_302.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAABIgBgBIgpAtg");
    this.shape_302.setTransform(2.2, 316.2);

    this.shape_303 = new cjs.Shape();
    this.shape_303.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_303.setTransform(11.7, 314);

    this.shape_304 = new cjs.Shape();
    this.shape_304.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGFIgCAAIjOAAIgBAAIAAmFIAsAAg");
    this.shape_304.setTransform(10.5, 276.8);

    this.shape_305 = new cjs.Shape();
    this.shape_305.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_305.setTransform(20, 276.8);

    this.shape_306 = new cjs.Shape();
    this.shape_306.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_306.setTransform(10.5, 294.1);

    this.shape_307 = new cjs.Shape();
    this.shape_307.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_307.setTransform(11.7, 274.6);

    this.shape_308 = new cjs.Shape();
    this.shape_308.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFZIAAAAIgBAAIgpAsg");
    this.shape_308.setTransform(2.2, 276.8);

    this.shape_309 = new cjs.Shape();
    this.shape_309.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGGIgCAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_309.setTransform(10.5, 237.5);

    this.shape_310 = new cjs.Shape();
    this.shape_310.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_310.setTransform(10.5, 254.8);

    this.shape_311 = new cjs.Shape();
    this.shape_311.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_311.setTransform(20, 237.5);

    this.shape_312 = new cjs.Shape();
    this.shape_312.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_312.setTransform(2.2, 237.5);

    this.shape_313 = new cjs.Shape();
    this.shape_313.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_313.setTransform(11.7, 235.3);

    this.shape_314 = new cjs.Shape();
    this.shape_314.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhnDDIgBAAIAAmFIAsAAICQAAIAVAAIAAGFIgCAAg");
    this.shape_314.setTransform(10.5, 198.1);

    this.shape_315 = new cjs.Shape();
    this.shape_315.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_315.setTransform(10.5, 215.4);

    this.shape_316 = new cjs.Shape();
    this.shape_316.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_316.setTransform(2.2, 198.1);

    this.shape_317 = new cjs.Shape();
    this.shape_317.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_317.setTransform(11.7, 195.9);

    this.shape_318 = new cjs.Shape();
    this.shape_318.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_318.setTransform(20, 198.1);

    this.shape_319 = new cjs.Shape();
    this.shape_319.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGGIgCAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_319.setTransform(10.5, 158.7);

    this.shape_320 = new cjs.Shape();
    this.shape_320.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_320.setTransform(10.5, 176.1);

    this.shape_321 = new cjs.Shape();
    this.shape_321.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_321.setTransform(20, 158.7);

    this.shape_322 = new cjs.Shape();
    this.shape_322.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_322.setTransform(2.2, 158.7);

    this.shape_323 = new cjs.Shape();
    this.shape_323.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_323.setTransform(11.7, 156.6);

    this.shape_324 = new cjs.Shape();
    this.shape_324.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhnDEIgBAAIAAmHIAsAAICQAAIAVAAIAAGHIgCAAg");
    this.shape_324.setTransform(10.5, 119.2);

    this.shape_325 = new cjs.Shape();
    this.shape_325.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_325.setTransform(20, 119.2);

    this.shape_326 = new cjs.Shape();
    this.shape_326.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_326.setTransform(10.5, 136.6);

    this.shape_327 = new cjs.Shape();
    this.shape_327.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_327.setTransform(11.7, 117.1);

    this.shape_328 = new cjs.Shape();
    this.shape_328.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_328.setTransform(2.2, 119.2);

    this.shape_329 = new cjs.Shape();
    this.shape_329.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhnDDIgBAAIAAmFIAsAAICQAAIAVAAIAAGFIgCAAg");
    this.shape_329.setTransform(10.5, 79.8);

    this.shape_330 = new cjs.Shape();
    this.shape_330.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_330.setTransform(20, 79.8);

    this.shape_331 = new cjs.Shape();
    this.shape_331.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABAAIAAAAICOABIAAABIAUApg");
    this.shape_331.setTransform(10.5, 97.2);

    this.shape_332 = new cjs.Shape();
    this.shape_332.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_332.setTransform(11.7, 77.7);

    this.shape_333 = new cjs.Shape();
    this.shape_333.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_333.setTransform(2.2, 79.8);

    this.shape_334 = new cjs.Shape();
    this.shape_334.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABpDEIgCAAIjOAAIgBAAIAAmGIAsAAICQAAIAVAAg");
    this.shape_334.setTransform(10.5, 40.4);

    this.shape_335 = new cjs.Shape();
    this.shape_335.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABAAIAAAAICOABIAAABIAUApg");
    this.shape_335.setTransform(10.5, 57.8);

    this.shape_336 = new cjs.Shape();
    this.shape_336.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAAAIgBAAIgpAtg");
    this.shape_336.setTransform(2.2, 40.4);

    this.shape_337 = new cjs.Shape();
    this.shape_337.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_337.setTransform(11.7, 38.3);

    this.shape_338 = new cjs.Shape();
    this.shape_338.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_338.setTransform(20, 40.4);

    this.shape_339 = new cjs.Shape();
    this.shape_339.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhnClIAAlJIAsAAICPAAIAVAAIAAFJ");
    this.shape_339.setTransform(1013.1, 627.9);

    this.shape_340 = new cjs.Shape();
    this.shape_340.graphics.f("#878787").s().p("AhHClIAAlJICPAAIAAFJg");
    this.shape_340.setTransform(1014.3, 627.9);

    this.shape_341 = new cjs.Shape();
    this.shape_341.graphics.f("#5E5E5E").s().p("AgVClIAAlJIArAAIAAFJg");
    this.shape_341.setTransform(1004.8, 627.9);

    this.shape_342 = new cjs.Shape();
    this.shape_342.graphics.f("#CDCDCD").s().p("AgJClIABlJIASAAIAAFJg");
    this.shape_342.setTransform(1022.6, 627.9);

    this.shape_343 = new cjs.Shape();
    this.shape_343.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGFIgBAAIjOAAIgBAAIAAmFIAsAAg");
    this.shape_343.setTransform(1013.1, 591.5);

    this.shape_344 = new cjs.Shape();
    this.shape_344.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_344.setTransform(1013.1, 608.9);

    this.shape_345 = new cjs.Shape();
    this.shape_345.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_345.setTransform(1014.3, 589.4);

    this.shape_346 = new cjs.Shape();
    this.shape_346.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_346.setTransform(1022.6, 591.5);

    this.shape_347 = new cjs.Shape();
    this.shape_347.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_347.setTransform(1004.8, 591.5);

    this.shape_348 = new cjs.Shape();
    this.shape_348.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjDIAVAAIAAGGIgBAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_348.setTransform(1013.1, 552.2);

    this.shape_349 = new cjs.Shape();
    this.shape_349.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_349.setTransform(1014.3, 550.1);

    this.shape_350 = new cjs.Shape();
    this.shape_350.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_350.setTransform(1013.1, 569.6);

    this.shape_351 = new cjs.Shape();
    this.shape_351.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_351.setTransform(1004.8, 552.2);

    this.shape_352 = new cjs.Shape();
    this.shape_352.graphics.f("#CDCDCD").s().p("AAJDDIgSgqIABlbIASAAIAAGFg");
    this.shape_352.setTransform(1022.6, 552.2);

    this.shape_353 = new cjs.Shape();
    this.shape_353.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGFIgBAAIjOAAIgBAAIAAmFIAsAAg");
    this.shape_353.setTransform(1013.1, 512.7);

    this.shape_354 = new cjs.Shape();
    this.shape_354.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABAAIAAAAICOABIAAABIAUApg");
    this.shape_354.setTransform(1013.1, 530.1);

    this.shape_355 = new cjs.Shape();
    this.shape_355.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_355.setTransform(1014.3, 510.6);

    this.shape_356 = new cjs.Shape();
    this.shape_356.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_356.setTransform(1022.6, 512.7);

    this.shape_357 = new cjs.Shape();
    this.shape_357.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_357.setTransform(1004.8, 512.7);

    this.shape_358 = new cjs.Shape();
    this.shape_358.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGGIgBAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_358.setTransform(1013.1, 473.4);

    this.shape_359 = new cjs.Shape();
    this.shape_359.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_359.setTransform(1022.6, 473.4);

    this.shape_360 = new cjs.Shape();
    this.shape_360.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_360.setTransform(1014.3, 471.3);

    this.shape_361 = new cjs.Shape();
    this.shape_361.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAAAIgBAAIgpAtg");
    this.shape_361.setTransform(1004.8, 473.4);

    this.shape_362 = new cjs.Shape();
    this.shape_362.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABAAIAAAAICOABIAAACIAUAog");
    this.shape_362.setTransform(1013.1, 490.8);

    this.shape_363 = new cjs.Shape();
    this.shape_363.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjDIAVAAIAAGHIgBAAIjOAAIgBAAIAAmHIAsAAg");
    this.shape_363.setTransform(1013.1, 434.3);

    this.shape_364 = new cjs.Shape();
    this.shape_364.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_364.setTransform(1014.3, 432.1);

    this.shape_365 = new cjs.Shape();
    this.shape_365.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAACIAUAog");
    this.shape_365.setTransform(1013.1, 451.6);

    this.shape_366 = new cjs.Shape();
    this.shape_366.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAABIgBgBIgpAtg");
    this.shape_366.setTransform(1004.8, 434.3);

    this.shape_367 = new cjs.Shape();
    this.shape_367.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_367.setTransform(1022.6, 434.3);

    this.shape_368 = new cjs.Shape();
    this.shape_368.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGFIgBAAIjOAAIgBAAIAAmFIAsAAg");
    this.shape_368.setTransform(1013.1, 394.9);

    this.shape_369 = new cjs.Shape();
    this.shape_369.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_369.setTransform(1013.1, 412.3);

    this.shape_370 = new cjs.Shape();
    this.shape_370.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_370.setTransform(1014.3, 392.8);

    this.shape_371 = new cjs.Shape();
    this.shape_371.graphics.f("#CDCDCD").s().p("AAJDDIgSgqIABlbIASAAIAAGFg");
    this.shape_371.setTransform(1022.6, 394.9);

    this.shape_372 = new cjs.Shape();
    this.shape_372.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFZIAAAAIgBAAIgpAsg");
    this.shape_372.setTransform(1004.8, 394.9);

    this.shape_373 = new cjs.Shape();
    this.shape_373.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhmDEIgBAAIAAmHIAsAAICPAAIAVAAIAAGHIgBAAg");
    this.shape_373.setTransform(1013.1, 355.5);

    this.shape_374 = new cjs.Shape();
    this.shape_374.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_374.setTransform(1014.3, 353.4);

    this.shape_375 = new cjs.Shape();
    this.shape_375.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_375.setTransform(1013.1, 372.9);

    this.shape_376 = new cjs.Shape();
    this.shape_376.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAABIgBgBIgpAtg");
    this.shape_376.setTransform(1004.8, 355.5);

    this.shape_377 = new cjs.Shape();
    this.shape_377.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_377.setTransform(1022.6, 355.5);

    this.shape_378 = new cjs.Shape();
    this.shape_378.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGGIgBAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_378.setTransform(1013.1, 316.2);

    this.shape_379 = new cjs.Shape();
    this.shape_379.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_379.setTransform(1013.1, 333.5);

    this.shape_380 = new cjs.Shape();
    this.shape_380.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_380.setTransform(1014.3, 314);

    this.shape_381 = new cjs.Shape();
    this.shape_381.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_381.setTransform(1022.6, 316.2);

    this.shape_382 = new cjs.Shape();
    this.shape_382.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAABIgBgBIgpAtg");
    this.shape_382.setTransform(1004.8, 316.2);

    this.shape_383 = new cjs.Shape();
    this.shape_383.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGFIgBAAIjOAAIgBAAIAAmFIAsAAg");
    this.shape_383.setTransform(1013.1, 276.8);

    this.shape_384 = new cjs.Shape();
    this.shape_384.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_384.setTransform(1022.6, 276.8);

    this.shape_385 = new cjs.Shape();
    this.shape_385.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_385.setTransform(1014.3, 274.6);

    this.shape_386 = new cjs.Shape();
    this.shape_386.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFZIAAAAIgBAAIgpAsg");
    this.shape_386.setTransform(1004.8, 276.8);

    this.shape_387 = new cjs.Shape();
    this.shape_387.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_387.setTransform(1013.1, 294.1);

    this.shape_388 = new cjs.Shape();
    this.shape_388.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGGIgBAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_388.setTransform(1013.1, 237.5);

    this.shape_389 = new cjs.Shape();
    this.shape_389.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_389.setTransform(1014.3, 235.3);

    this.shape_390 = new cjs.Shape();
    this.shape_390.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_390.setTransform(1013.1, 254.8);

    this.shape_391 = new cjs.Shape();
    this.shape_391.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_391.setTransform(1004.8, 237.5);

    this.shape_392 = new cjs.Shape();
    this.shape_392.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_392.setTransform(1022.6, 237.5);

    this.shape_393 = new cjs.Shape();
    this.shape_393.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhmDDIgBAAIAAmFIAsAAICPAAIAVAAIAAGFIgBAAg");
    this.shape_393.setTransform(1013.1, 198.1);

    this.shape_394 = new cjs.Shape();
    this.shape_394.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_394.setTransform(1013.1, 215.4);

    this.shape_395 = new cjs.Shape();
    this.shape_395.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_395.setTransform(1014.3, 195.9);

    this.shape_396 = new cjs.Shape();
    this.shape_396.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_396.setTransform(1022.6, 198.1);

    this.shape_397 = new cjs.Shape();
    this.shape_397.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_397.setTransform(1004.8, 198.1);

    this.shape_398 = new cjs.Shape();
    this.shape_398.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABUjCIAVAAIAAGGIgBAAIjOAAIgBAAIAAmGIAsAAg");
    this.shape_398.setTransform(1013.1, 158.7);

    this.shape_399 = new cjs.Shape();
    this.shape_399.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_399.setTransform(1014.3, 156.6);

    this.shape_400 = new cjs.Shape();
    this.shape_400.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_400.setTransform(1013.1, 176.1);

    this.shape_401 = new cjs.Shape();
    this.shape_401.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_401.setTransform(1004.8, 158.7);

    this.shape_402 = new cjs.Shape();
    this.shape_402.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_402.setTransform(1022.6, 158.7);

    this.shape_403 = new cjs.Shape();
    this.shape_403.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhmDEIgBAAIAAmHIAsAAICPAAIAVAAIAAGHIgBAAg");
    this.shape_403.setTransform(1013.1, 119.2);

    this.shape_404 = new cjs.Shape();
    this.shape_404.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_404.setTransform(1004.8, 119.2);

    this.shape_405 = new cjs.Shape();
    this.shape_405.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_405.setTransform(1022.6, 119.2);

    this.shape_406 = new cjs.Shape();
    this.shape_406.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABABIAAgBICOABIAAABIAUApg");
    this.shape_406.setTransform(1013.1, 136.6);

    this.shape_407 = new cjs.Shape();
    this.shape_407.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_407.setTransform(1014.3, 117.1);

    this.shape_408 = new cjs.Shape();
    this.shape_408.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("AhmDDIgBAAIAAmFIAsAAICPAAIAVAAIAAGFIgBAAg");
    this.shape_408.setTransform(1013.1, 79.8);

    this.shape_409 = new cjs.Shape();
    this.shape_409.graphics.f("#CDCDCD").s().p("AAJDDIgSgrIABlaIASAAIAAGFg");
    this.shape_409.setTransform(1022.6, 79.8);

    this.shape_410 = new cjs.Shape();
    this.shape_410.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_410.setTransform(1014.3, 77.7);

    this.shape_411 = new cjs.Shape();
    this.shape_411.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDDIAAmFIArAAIAAFYIAAABIgBgBIgpAtg");
    this.shape_411.setTransform(1004.8, 79.8);

    this.shape_412 = new cjs.Shape();
    this.shape_412.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABAAIAAAAICOABIAAABIAUApg");
    this.shape_412.setTransform(1013.1, 97.2);

    this.shape_413 = new cjs.Shape();
    this.shape_413.graphics
      .f()
      .s("#333333")
      .ss(0.5, 1, 1)
      .p("ABpDEIgBAAIjOAAIgBAAIAAmGIAsAAICPAAIAVAAg");
    this.shape_413.setTransform(1013.1, 40.4);

    this.shape_414 = new cjs.Shape();
    this.shape_414.graphics.f("#878787").s().p("ABHCtIiOgBIAAlZICPAAIAAFbg");
    this.shape_414.setTransform(1014.3, 38.3);

    this.shape_415 = new cjs.Shape();
    this.shape_415.graphics
      .f("#464646")
      .s()
      .p("AhnAWIArgrIABAAIAAAAICOABIAAABIAUApg");
    this.shape_415.setTransform(1013.1, 57.8);

    this.shape_416 = new cjs.Shape();
    this.shape_416.graphics
      .f("#5E5E5E")
      .s()
      .p("AgVDEIAAmHIArAAIAAFaIAAAAIgBAAIgpAtg");
    this.shape_416.setTransform(1004.8, 40.4);

    this.shape_417 = new cjs.Shape();
    this.shape_417.graphics.f("#CDCDCD").s().p("AAJDEIgSgrIABlcIASAAIAAGHg");
    this.shape_417.setTransform(1022.6, 40.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_417 },
            { t: this.shape_416 },
            { t: this.shape_415 },
            { t: this.shape_414 },
            { t: this.shape_413 },
            { t: this.shape_412 },
            { t: this.shape_411 },
            { t: this.shape_410 },
            { t: this.shape_409 },
            { t: this.shape_408 },
            { t: this.shape_407 },
            { t: this.shape_406 },
            { t: this.shape_405 },
            { t: this.shape_404 },
            { t: this.shape_403 },
            { t: this.shape_402 },
            { t: this.shape_401 },
            { t: this.shape_400 },
            { t: this.shape_399 },
            { t: this.shape_398 },
            { t: this.shape_397 },
            { t: this.shape_396 },
            { t: this.shape_395 },
            { t: this.shape_394 },
            { t: this.shape_393 },
            { t: this.shape_392 },
            { t: this.shape_391 },
            { t: this.shape_390 },
            { t: this.shape_389 },
            { t: this.shape_388 },
            { t: this.shape_387 },
            { t: this.shape_386 },
            { t: this.shape_385 },
            { t: this.shape_384 },
            { t: this.shape_383 },
            { t: this.shape_382 },
            { t: this.shape_381 },
            { t: this.shape_380 },
            { t: this.shape_379 },
            { t: this.shape_378 },
            { t: this.shape_377 },
            { t: this.shape_376 },
            { t: this.shape_375 },
            { t: this.shape_374 },
            { t: this.shape_373 },
            { t: this.shape_372 },
            { t: this.shape_371 },
            { t: this.shape_370 },
            { t: this.shape_369 },
            { t: this.shape_368 },
            { t: this.shape_367 },
            { t: this.shape_366 },
            { t: this.shape_365 },
            { t: this.shape_364 },
            { t: this.shape_363 },
            { t: this.shape_362 },
            { t: this.shape_361 },
            { t: this.shape_360 },
            { t: this.shape_359 },
            { t: this.shape_358 },
            { t: this.shape_357 },
            { t: this.shape_356 },
            { t: this.shape_355 },
            { t: this.shape_354 },
            { t: this.shape_353 },
            { t: this.shape_352 },
            { t: this.shape_351 },
            { t: this.shape_350 },
            { t: this.shape_349 },
            { t: this.shape_348 },
            { t: this.shape_347 },
            { t: this.shape_346 },
            { t: this.shape_345 },
            { t: this.shape_344 },
            { t: this.shape_343 },
            { t: this.shape_342 },
            { t: this.shape_341 },
            { t: this.shape_340 },
            { t: this.shape_339 },
            { t: this.shape_338 },
            { t: this.shape_337 },
            { t: this.shape_336 },
            { t: this.shape_335 },
            { t: this.shape_334 },
            { t: this.shape_333 },
            { t: this.shape_332 },
            { t: this.shape_331 },
            { t: this.shape_330 },
            { t: this.shape_329 },
            { t: this.shape_328 },
            { t: this.shape_327 },
            { t: this.shape_326 },
            { t: this.shape_325 },
            { t: this.shape_324 },
            { t: this.shape_323 },
            { t: this.shape_322 },
            { t: this.shape_321 },
            { t: this.shape_320 },
            { t: this.shape_319 },
            { t: this.shape_318 },
            { t: this.shape_317 },
            { t: this.shape_316 },
            { t: this.shape_315 },
            { t: this.shape_314 },
            { t: this.shape_313 },
            { t: this.shape_312 },
            { t: this.shape_311 },
            { t: this.shape_310 },
            { t: this.shape_309 },
            { t: this.shape_308 },
            { t: this.shape_307 },
            { t: this.shape_306 },
            { t: this.shape_305 },
            { t: this.shape_304 },
            { t: this.shape_303 },
            { t: this.shape_302 },
            { t: this.shape_301 },
            { t: this.shape_300 },
            { t: this.shape_299 },
            { t: this.shape_298 },
            { t: this.shape_297 },
            { t: this.shape_296 },
            { t: this.shape_295 },
            { t: this.shape_294 },
            { t: this.shape_293 },
            { t: this.shape_292 },
            { t: this.shape_291 },
            { t: this.shape_290 },
            { t: this.shape_289 },
            { t: this.shape_288 },
            { t: this.shape_287 },
            { t: this.shape_286 },
            { t: this.shape_285 },
            { t: this.shape_284 },
            { t: this.shape_283 },
            { t: this.shape_282 },
            { t: this.shape_281 },
            { t: this.shape_280 },
            { t: this.shape_279 },
            { t: this.shape_278 },
            { t: this.shape_277 },
            { t: this.shape_276 },
            { t: this.shape_275 },
            { t: this.shape_274 },
            { t: this.shape_273 },
            { t: this.shape_272 },
            { t: this.shape_271 },
            { t: this.shape_270 },
            { t: this.shape_269 },
            { t: this.shape_268 },
            { t: this.shape_267 },
            { t: this.shape_266 },
            { t: this.shape_265 },
            { t: this.shape_264 },
            { t: this.shape_263 },
            { t: this.shape_262 },
            { t: this.shape_261 },
            { t: this.shape_260 },
            { t: this.shape_259 },
            { t: this.shape_258 },
            { t: this.shape_257 },
            { t: this.shape_256 },
            { t: this.shape_255 },
            { t: this.shape_254 },
            { t: this.shape_253 },
            { t: this.shape_252 },
            { t: this.shape_251 },
            { t: this.shape_250 },
            { t: this.shape_249 },
            { t: this.shape_248 },
            { t: this.shape_247 },
            { t: this.shape_246 },
            { t: this.shape_245 },
            { t: this.shape_244 },
            { t: this.shape_243 },
            { t: this.shape_242 },
            { t: this.shape_241 },
            { t: this.shape_240 },
            { t: this.shape_239 },
            { t: this.shape_238 },
            { t: this.shape_237 },
            { t: this.shape_236 },
            { t: this.shape_235 },
            { t: this.shape_234 },
            { t: this.shape_233 },
            { t: this.shape_232 },
            { t: this.shape_231 },
            { t: this.shape_230 },
            { t: this.shape_229 },
            { t: this.shape_228 },
            { t: this.shape_227 },
            { t: this.shape_226 },
            { t: this.shape_225 },
            { t: this.shape_224 },
            { t: this.shape_223 },
            { t: this.shape_222 },
            { t: this.shape_221 },
            { t: this.shape_220 },
            { t: this.shape_219 },
            { t: this.shape_218 },
            { t: this.shape_217 },
            { t: this.shape_216 },
            { t: this.shape_215 },
            { t: this.shape_214 },
            { t: this.shape_213 },
            { t: this.shape_212 },
            { t: this.shape_211 },
            { t: this.shape_210 },
            { t: this.shape_209 },
            { t: this.shape_208 },
            { t: this.shape_207 },
            { t: this.shape_206 },
            { t: this.shape_205 },
            { t: this.shape_204 },
            { t: this.shape_203 },
            { t: this.shape_202 },
            { t: this.shape_201 },
            { t: this.shape_200 },
            { t: this.shape_199 },
            { t: this.shape_198 },
            { t: this.shape_197 },
            { t: this.shape_196 },
            { t: this.shape_195 },
            { t: this.shape_194 },
            { t: this.shape_193 },
            { t: this.shape_192 },
            { t: this.shape_191 },
            { t: this.shape_190 },
            { t: this.shape_189 },
            { t: this.shape_188 },
            { t: this.shape_187 },
            { t: this.shape_186 },
            { t: this.shape_185 },
            { t: this.shape_184 },
            { t: this.shape_183 },
            { t: this.shape_182 },
            { t: this.shape_181 },
            { t: this.shape_180 },
            { t: this.shape_179 },
            { t: this.shape_178 },
            { t: this.shape_177 },
            { t: this.shape_176 },
            { t: this.shape_175 },
            { t: this.shape_174 },
            { t: this.shape_173 },
            { t: this.shape_172 },
            { t: this.shape_171 },
            { t: this.shape_170 },
            { t: this.shape_169 },
            { t: this.shape_168 },
            { t: this.shape_167 },
            { t: this.shape_166 },
            { t: this.shape_165 },
            { t: this.shape_164 },
            { t: this.shape_163 },
            { t: this.shape_162 },
            { t: this.shape_161 },
            { t: this.shape_160 },
            { t: this.shape_159 },
            { t: this.shape_158 },
            { t: this.shape_157 },
            { t: this.shape_156 },
            { t: this.shape_155 },
            { t: this.shape_154 },
            { t: this.shape_153 },
            { t: this.shape_152 },
            { t: this.shape_151 },
            { t: this.shape_150 },
            { t: this.shape_149 },
            { t: this.shape_148 },
            { t: this.shape_147 },
            { t: this.shape_146 },
            { t: this.shape_145 },
            { t: this.shape_144 },
            { t: this.shape_143 },
            { t: this.shape_142 },
            { t: this.shape_141 },
            { t: this.shape_140 },
            { t: this.shape_139 },
            { t: this.shape_138 },
            { t: this.shape_137 },
            { t: this.shape_136 },
            { t: this.shape_135 },
            { t: this.shape_134 },
            { t: this.shape_133 },
            { t: this.shape_132 },
            { t: this.shape_131 },
            { t: this.shape_130 },
            { t: this.shape_129 },
            { t: this.shape_128 },
            { t: this.shape_127 },
            { t: this.shape_126 },
            { t: this.shape_125 },
            { t: this.shape_124 },
            { t: this.shape_123 },
            { t: this.shape_122 },
            { t: this.shape_121 },
            { t: this.shape_120 },
            { t: this.shape_119 },
            { t: this.shape_118 },
            { t: this.shape_117 },
            { t: this.shape_116 },
            { t: this.shape_115 },
            { t: this.shape_114 },
            { t: this.shape_113 },
            { t: this.shape_112 },
            { t: this.shape_111 },
            { t: this.shape_110 },
            { t: this.shape_109 },
            { t: this.shape_108 },
            { t: this.shape_107 },
            { t: this.shape_106 },
            { t: this.shape_105 },
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 1026.4, 650.5);

  (lib.mc_nidle1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("AgIDtIAInZIAJHZg");
    this.shape.setTransform(1, 23.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2, 47.5);

  (lib.mc_fire01_01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(
        ["#EF7AFC", "#FFEE5E", "#F74900", "rgba(255,128,0,0.8)"],
        [0, 0.337, 0.753, 1],
        -6.6,
        99.5,
        0,
        -6.6,
        99.5,
        40.1,
      )
      .s()
      .p("AhfBCQAbABgKApgAAJgsQAJgVAQACQApAkgThQQATAEAPAiQAWA+hAAGQgwgBAJgqg");
    this.shape.setTransform(24.6, 10.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AgcFkQgOgWABgSQACgSgkgSQgwgxAyg7QAXgcAjAKQgigsAHgqQAJAgAhAWQBRAngGBEQgFAKgMABQhOAZAvBbgAA+AfQAVgDANgOQAKAHgQATIgRABQgUAAAJgKgAhRhNQAEgyACAKQASgYAigPQAggPASglQALBDgqAvQgxAmAIBBQgngmADgwgABGljIAbALIgbARg",
      );
    this.shape_1.setTransform(20.2, 79.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FBAC38")
      .s()
      .p(
        "ABFHUIgNAAQgxhcBQgYQAMgCAFgKQAGhDhSgoQgggWgJgfQgHApAgAsQghgKgXAcQgyA8AwAwQAkASgCASQgBASANAXIgMAAQgKgbgWAAQhtAMgOhnQgRhFAqghQAZhAAKAKQAdAyAVhFQgEhLgigDQgkAQgOgaQgah8B2hNQgMA3A2giQBHg9gYiGQhHhAgDB6QAAAagjgNQg9grAlg+QBLhfBFAyQAZAJgIgiQgDgOgOgIIgrgSQgHgSAQgSQAWgLAPAWQAfBKARg5IAGAyQAmAmgEA6QgIAxgmgVQhCBRBEBcQBCBnhIBWQgihUgeBOQgQBJAfAVQAzALA3A1QA9BZhLA9IgNgQQgSgIgCBFQgGAdgMAAQgFAAgGgEgAg0AgQgDAwAnAoQgIhDAvgmQAsgtgLhDQgSAmgiAOQggAPgSAYIAAgBQgDAAgDAng",
      );
    this.shape_2.setTransform(17.3, 68);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .rf(
        ["#EF7AFC", "#FFEE5E", "#F74900", "rgba(255,128,0,0.8)"],
        [0, 0.337, 0.753, 1],
        -12.5,
        106.3,
        0,
        -12.5,
        106.3,
        40.1,
      )
      .s()
      .p("AgVAKQAggKgDgfQAgAsglAQQgGADgGAAQgRAAAFgWg");
    this.shape_3.setTransform(29.8, 3.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FBAC38")
      .s()
      .p(
        "AhFGXQiwhGB8imQANgSAmgaQAcgSAHgEQAbg8gqgtQgegGgJAdQgbgEgQgbQgfhzCBgjQANgEgNAvQATAcAsgwQARgWgegqQgEgdAaAdQBZBMgKBRQgEAXgoABQgQAHgMAOQglBQA1AUQCYB0g2B6QgvAvAQg3QgNg9g0BhQgRAzAgAoQgDAcgLABIgCAAIgKgQIgeAAQAYg4grhMQABhRAdA5QALhBAIAOQAHAjASgjQANgng4gZIAAgRQglgRgfAUQhUBIA6BSIACAFQBKA9gbBBIgCAAIgSAXQg0AAAOhZgAgGAQQAOAGABgnIAdAAQAfgzgQg1Qg+BbgRgsQgjApA3AxgAhCl2QARhTBIAEQgUAJABAWQAvAxAahHIgGgzQAkAogCA4QgVBqg8g9IgYAYQgQAGgNAAQgmAAABgyg",
      );
    this.shape_4.setTransform(17.4, 67.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AggFyQAdhAhMg9IgCgFQg6hSBUhJQAfgTAlARIAAARQA4AYgNAoQgSAigHgiQgIgPgLBCQgbg5gBBRQApBMgYA3gAgbhUQg3g0AjgpQARAtA+hbQAQA1gfAyIgbAAQgBAlgMAAIgEgBgABKlbIASgWIAOAWg",
      );
    this.shape_5.setTransform(19.5, 77.3);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FBAC38")
      .s()
      .p(
        "ABJH0IgCgCQgRgFgQgCIAAgCQArg2guhKIgBgBIgQAAQgqhOAVgvQAQg1BGA5QAWgEgNgcQgjgsgUgOQAGgUgRgIQgggQAAAjQg6AqgSBXQgLBWBeA6QAVAegSAuIAAACIgOADQhGAYgFhtQhFgmgOgtQgWgwAVhIQAjhuAvAAQBwhOg+gyQgKAJgSABQg/gKAJg0QAThaBEgdIAAAgQAYAOAehkQALAXATASQBwBug0A8QgKAKgUgCQgegFgLAjQgSBLBTA6IAcAWQBOBcg1BjQgNAFgGgLQgBgggXACQg5AFAQA+QA6BWg8AugAgBiBQgvABAlBKQAWgpAOAGQA1gYgjhPQAJA2g1AJgAAEm+QAOgPAOAAQgLAvAgAHQARgBgDgeIgFg+QAxAygGA+QgGAugzgRIgrAdQg8gpA7hLg",
      );
    this.shape_6.setTransform(18.1, 65.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AAAFWIAAgCQAQgugTgeQhgg6ALhWQAShXA6goQAAgjAgAQQARAIgGASQAUAOAjAsQANAcgWAEQhGg5gQA1QgVAvAqBOIAQAAIABABQAuBKgrA2IAAACQgRgCgPACgAgHkWQA1gJgJg2QAjBPg1AYQgOgGgWApQglhKAvgBg",
      );
    this.shape_7.setTransform(18.7, 80.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FBAC38")
      .s()
      .p(
        "ABMIJIABgNQAJhTgvggQg2hhAIhcQAUhGBHAsQAoBGgYhMQgNgfglgHQgBgogFgGQgtgYgyBEQgzBfAdAqIASgcQA2BEADAzQgRAUARAQIAAAhIgBAEQgaAGAQA+QgQAJgXgGQgvgjAdhCIARAXQAVgfghg2IgDAAQhdAFgZhhQgkh+CjhCQASANAZgoIATgFQBEhLgzghQgFgGAFgjQgogSgBAyQgBAzgQgMQhFhMBihZIACABQAQgJAEAiQAPAJAIgTQgMhTAbgGQgHAGAxAvQAcAbAAAOQApBgg+AGIgCAEQghAAgLBsIADAnQADAlAlAGQA4gRAaBIQAaBghMAsQgUASAHgpQgmgUAAA6QAAAFAnAoQAQAZgEAZQAoBLgtAVQgLAHgXgHQgHAVgKAAIgBAAgAAyiTQAPANAHARQAkgegkg4QgBAngxgCIgDAAQgXAZAegGgAA9l7QgggQAOgfQALgUAXgGQAOgdgegnQAYALAYAnQASA6gdAfQgJAHgLAAQgIAAgJgFg",
      );
    this.shape_8.setTransform(19, 64.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AgVFeQgQg+AcgHIABgEIAAggQgTgRATgTQgFg0g2hEIgSAcQgdgqAzhdQAyhEAtAYQAFAGABAoQAlAHANAdQAYBNgohGQhHgrgUBEQgIBcA2BiQAvAggJBSgAAmkrIgYAAQgeAHAXgaIADAAQAxACABgnQAkA4gkAfQgHgSgPgNg",
      );
    this.shape_9.setTransform(20.2, 79.8);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FBAC38")
      .s()
      .p(
        "ABMIbQAThIgigdQg/g9gDhIQgQiyBHghQATAHgCAZQAPANAEgUQAKgbgYgbQgOgkgoAbQgPATgFgKIAHgnQgCgNgVAkQguAVgNAxQgXBQAxgRQAQgKADALQAEB9ALAjQAbBwgLAPQgYAOAHAuQgLgVgqgLQhHg+A7hFQAagbgLg3QgNg3gjACQgLAPALAOQACAOgNgHQgegOgHgPQgqgaANhiQAnhvBTgSIAAARQBjACAEh2QgPhPgrA1QAFAWgMAEIgEgDQgSgKgEggQgIheBbgcQAfArgFg1QgSgqAXgaIAEAAQADAoAaAPQA/AygbBnQgJAbgPAHQASgngSgZQgZgHgDAoQgDAhgRAXQgXA8AfA8QAIAJAugCQBCgEAPBbQAIBCgXA7QgPAUgIgbQgKgCgVAXQgGg6gxAxQgvBTA9AFQAzAEgMAsQBhBYhqBIIgjANgAAcjoQglAYAYAdQALADAKgNQAJAHAbgHQAZgcgKgWQgPAUgTAEQgSgSgFAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAApm4QgEgZAVgGQAVgGgNgSQglgXANgrQALAeAlAZQAiAcgiAsQgRAPgMAAQgOAAgGgVg",
      );
    this.shape_10.setTransform(19.7, 61.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AgRGGIgDgJQgHguAYgOQALgQgbhwQgLgigEh9QgDgLgQAJQgxASAXhOQANgxAugVQAVgkACAMIgHAoQAFAKAPgUQAogbAOAlQAYAbgKAbQgEATgPgNQACgZgTgGQhHAhAQCvQADBIA/A9QAiAegTBIgAANlIQgYgdAlgYQADgHAWAYQATgEAPgVQAKAXgZAbQgbAIgJgIQgJALgJAAIgDAAg",
      );
    this.shape_11.setTransform(19.9, 76.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FBAC38")
      .s()
      .p(
        "ABNJCQAcgLgFgYQgEgQgTgXQgDgjgjgXQgPg/gYgkQgWgfgDilQALg0AqADQAqgcAOAcQAZAigBgwQgEgZgigNQgiAGgEgdQAeg8g9AxQgBgWgPAGQhCAmAGA4QAQgjAMAiQADAbAPgOQgHBNADgEQAFDjAUAvQAIA3gsgkQgFArAuAbIACABQh4gKADhCQgDhfBHgiQAViChJgeQgZgWgCApQgfAmgThAQABhjA7g4QA5g0A6AEQAdgNAEgnQAYA+ASgzQAQBJAqAYQBKA7giBjQg0A3gQgwQgBgkgyAkQgyBFAdAzIAbAQQA6AEgCAjQABAfAWAPQAiACAFBHQAAApgeAOQgWArgcAAQgIAAgJgDgAAJiYQgegZgLAZQgPgKAAghQAEhRA5gbQgMAzAlAHQAsgggkgaQgXgjAmglQgLAoA7A7IABACQAiAzguAkQgZgXgaBRQgRg/gWAogAAQjhQgMAuAigWIAgAAQAhgdgQghQgBAagfAHQgKgDgIAAQgOAAgHAIgABCmnQgGgJALgPQALghgsgcQgKgsAYgVIAAgEQAIgKAGATIgJApQgBAQAPgFIADAAIAKgNQAOgKALATQAIANgIAaQAMAHgGAYQgGAmgSAAQgLAAgOgLg",
      );
    this.shape_12.setTransform(18, 61);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AgSGSQgvgbAFgqQAuAjgJg2QgUgwgGjjQgCAFAHhMQgPAOgDgbQgMgigQAkQgHg4BDgpQAOgGAEAYQA6gzgeA+QAEAdAigGQAiANAEAZQABAwgZghQgOgdgqAdQgpgEgMAyQAEClAXAgQAXAkAPA+QAjAXACAjQAUAXADARgAAAltQALgMAdAHQAegHACgZQAQAggiAdIgfAAQgMAHgGAAQgLAAAGgfg",
      );
    this.shape_13.setTransform(19.6, 75);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .rf(["#FFFFFF", "#FD802D"], [0.086, 1], -8.1, 18.1, 0, -8.1, 18.1, 52.6)
      .s()
      .p("AgDgFQgegTgBgkQAZAjAcAJQAVAggcgMQAIAnAPAJIgJAJQgagcgDgmg");
    this.shape_14.setTransform(29.3, 96.5);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .rf(
        ["#EF7AFC", "#FFEE5E", "#F74900", "rgba(255,128,0,0.8)"],
        [0, 0.337, 0.753, 1],
        -5.7,
        108.4,
        0,
        -5.7,
        108.4,
        40.1,
      )
      .s()
      .p("AgUgPQAjgrAWAVQAqApg0AeQgRhBg2BMQgdgyA1gKg");
    this.shape_15.setTransform(25.6, 1.7);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FBAC38")
      .s()
      .p(
        "ABIHgQgBgeA2ggQAOgbgqgTIgGgDIgKABQgYABAFgTQATgkg/hGIgRgxIgMh1QABhcAKgnQAZgjAQAFQAtATgmgpQgMgWAMgcIglAKQAMgJgeAOQggAOgbBSQAhgjASAMIAIAiQgrAzAfBEIAOCXQAIBUgsgdQgWAPgGAxQAcBaAgACQATAJgBAaIAAAAIgZACQAIgLgTgMQg2gBgEgJQg/gLgRhgQgHh2B+gtQAfgwgwhhQgjgBgHgXQgSgJgEATQgJAogpguIgHgIQgShAAZguQALgXAVgRQAngwB3gPQgLAkAQgGQARgsARAUQgJglATg1QgCBWAvg7IgHBHQAYAhgGAnQAYAgAIhFQBOCrhtAPQAChVhBA3QhAAsArBnQAjg/gEA1QAZAFgIAtQABA2AigHQApgKAHBKQgXAJAVAgQBBBihTAsIgZAAQgdgLgIAdgABfEmQADAoAcAdIAJgJQgPgKgIgnQAcAMgVghQgegKgZgiQABAjAeATgAAjlgQgRgNgDAcQgNAKgHgKQgwghAwg/QgCAnAigFQAZgCAAgkQAAgkAIgcQATApAWAbQAWAagIAkQgZgCgoAtQgDACgDAAQgJAAAAgagABKmxQgCAggeAWQAdAPAYgiQAFgmgQAAQgEAAgGADg",
      );
    this.shape_16.setTransform(19.3, 66.4);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AgmGrQgggCgchbQAGgwAWgPQAuAcgKhUIgOiWQgfhDArg1IgIgiQgSgLghAiQAbhSAggOQAggNgMAIIAjgKQgMAcAMAWQAmApgtgSQgOgGgZAjQgMAngBBdIAOB1IARAwQA9BGgTAkQgFAUAYgCIAKgBIAGADQAqAUgOAaQg2AgABAeIg9AFQABgagVgIgAANmTQAegVACghQAbgNgGAwQgQAYgUAAQgIAAgJgFg",
      );
    this.shape_17.setTransform(22.2, 68.7);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .rf(
        ["#EF7AFC", "#FFEE5E", "#F74900", "rgba(255,128,0,0.8)"],
        [0, 0.337, 0.753, 1],
        -11.4,
        113.1,
        0,
        -11.4,
        113.1,
        40.1,
      )
      .s()
      .p("AgPAKQgIgPAXgSQgIAhAaAAQgKAOgIAAQgHAAgIgOg");
    this.shape_18.setTransform(29.6, -3.4);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FBAC38")
      .s()
      .p(
        "AAxH5QgRhEAkADQA6gXhBhMQAMgVgjgUIgchsQgKhdgMBdIAABQQgPAugmglQgVgbgLA9QAGBOBKBDQAUAVAAAVIgkgCQgPgogbABQhpgfgCgvQggigBuhAQA/BKAMiKQgVgCADguQgKg7glAMIgFgGQgbgagGAqQgnAEgNg1QgKimCfglQAFAuA8gVIATgQQAhALARhHQAMATAFAjQAlAVgMBKQA0gGgGBpQgOA+gjAKQAGhkgcAjQgdAigBgKQg9gegUBSQgGBGAUAPQAOAHAEAYQgIhJAwgUQgXBSAjA4QBHAuACBDQgNAkAYANQAvBYhXASQgsgGgaAtgAAzD5QAGAbAqAjQAUgcgvg1QgSgXgDgwQgOAoAOAygAghhiIAAARIALCCQAOgugBhAIAJgIIAAgmQAvgzAIAzQAZAhgOg/IARghQgCgQgkAVQgMgOgNADQhZAFAIBYQAYgkAGAAQAFAAgHAVgAA3mXQgYAGgcAfIgFgXQgIgzA7AOQAXgBgXgnQgRgoA4AGQAfADgCAqQAyAAggA/QgGAbg2AXQAZg/gtACgABNneIAHAuQADAmAWgHQAXgOgegVIAAgQQgEgbgNAAQgEAAgEABg",
      );
    this.shape_19.setTransform(19, 64.1);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AAAFTQAAgWgUgVQhKhCgGhPQALg9AVAcQAmAlAPgvIAAhQQAMhbAKBbIAcBsQAjAVgMAVQBBBMg6AWQgkgCARBEgAAwBVQgOgyAOglQADAuASAXQAvA1gUAcQgqgkgGgbgAgkj0IAAgRQAPgygrBAQgIhYBZgEQANgEAMAOQAkgVACARIgRAgQAOBAgZghQgIg0gtA0IAAAmIgLAIQABBCgOAtg",
      );
    this.shape_20.setTransform(19.3, 80.4);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .rf(
        ["#EF7AFC", "#FFEE5E", "#F74900", "rgba(255,128,0,0.8)"],
        [0, 0.337, 0.753, 1],
        -5.5,
        63.9,
        0,
        -5.5,
        63.9,
        40.1,
      )
      .s()
      .p(
        "AglCoIATgKQgRARgJAwgAhEjHIAagXQgRAiAaACQgJAFgHAAQgOAAgFgSgAAwjIQAGABAPgEIgIAPg",
      );
    this.shape_21.setTransform(25.7, 46.6);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#FBAC38")
      .s()
      .p(
        "AA1IBQgQgfAPgbQA/glgPhAQgDgRgOgWQglgwADgPQABgTgLAPQgRAqgWAKQhHAGATg+QgzAQAPAtQATBMAsAfQASASAMAfQAPAegIAWIgTAAQgIgcgZgbQgYgWglAWQgsARgDg2QglgPgJhvQAPhuBLgnQAqA0AmglQAag5goAcQAKgYgDghQgQhOgogHQgUg5gWBFQhAgwAchpQA5h1BWADQgHASAKAMQAcAiAWhEQgGAmAegeQgDAVACALQARAUAGhBQgEg6ASgCQARgEgFAVQggAeAeAkQB0BehQBvQgQASAGg3QgKgHgQAYQgfBDgIg4IgCgFQgOgTgSAdQgiANgCBJQAEA6AXAhQALAJAOgRQASg+AUgIQgWBZAgAjQBtBvgaAsQAsBMg5AjQgpALgRAaQgTATgEASgAB/GPQAeghgQgwQgbg5gWgJQAxBTgOBAgAAwDKIAqAoQgFgjgYghIgEguQgQAqAHAggAgdhrQgZA/AaApQgFhCAageQAJgSgHAAQgGAAgSAKgAgxi2QgxAyAgAZIAVgmQAUgOAFAOQAEAdAiglQA0gVACAyQAjglgegsQgDgQgdAnQgdgIgWAAQgYAAgTAIgABJmPQASgdgNgGQgRgngKAXQgHAMgLADQgfgNAWgfIAXgSQgBgjAuAtQAWAAgFAqQAPAsgWAPQgRAGgJAAQgPAAAMgTg",
      );
    this.shape_22.setTransform(19.5, 64);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AgNFqQAIgXgPgeQgOgegSgSQgsgfgThNQgPgtAzgPQgTA9BHgFQAYgLAPgqQALgOgBASQgDAPAlAwQAOAXADARQAPBAg/AlQgPAbAQAfgABBBlQAWAIAbA6QAQAvgeAiQAOhAgxhTgAAVAyQgHggAQgnIAEArQAYAhAFAkgAg4kCQApgZgTAhQgaAdAFBDQgagpAZg/gAhMlOQAlgPA5APQAdgmADAPQAeAsgjAlQgCgygyAVQgkAlgEgdQgFgOgUAOIgVAmQgggZAxgyg",
      );
    this.shape_23.setTransform(22.2, 79.1);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#FBAC38")
      .s()
      .p(
        "ABFIUQAAhSAbASQAWgXgKg9QgJgggHgLQg3g1AHheQgUAQgCAiQgfBIgVhGQhEATAThNQhLA4BUBzQBmBbgCBSIgegBQgQgmgagTQgpgZgMARQgoAUgWhEQgHhYgggJQgSgYAOhGQAYh2BPgeQgFAjAKAOQAyA4AahHQgngxABgXQgeg6AqhEQANgrguATQgfAaAMAvQhggVAliMQAuh+B+AAQgdA8ApgRQBDgWAKhDQAZAlgfAlQgbAvA0gOQBYACgJCFQgQA2glAXQgNhZg4BAQAMhFgvAoQhEBVAHBpQAdBeAgg8QgLh0AxgCQgNBjAjA8QBZBUAHA6IAAADQANBkgwAQQARA7gwABQgLgGgeA4gAB1EhQAYAXAHAkQANgngkgjIgIgCQgJAAAJARgABLDbQAmAbgUgpQgXgegFgjQgSAjAcAsgAAAhyQgsBHANAnQAOg8AagjQAUgegHAAQgFAAgRAPgAgQinQAIBEAIg5QAegvAdAcQA8ApgvhAQgOgNAIgpIgiAfQgmAWANgqQglAAgkA6QgSA2AigbQAKgSAKAAQAHAAAHAHgABOnMQgPgggfA0QgigjAsgsQAPgSANAJQAJAKgEAQQAfALgDAKQAKAogVAEg",
      );
    this.shape_24.setTransform(20.8, 61);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#FB6B0D")
      .s()
      .p(
        "AAMGIQAChShmhbQhUhyBLg5QgTBNBEgSQAVBFAfhIQACghAUgQQgHBdA3A1QAHAMAJAfQAKA9gWAXQgbgSAABSgABjCVQgMgWAUAHQAkAjgNAnQgHgkgYgXgAA5BPQgcgrASgkQAFAjAXAeQAMAZgJAAQgGAAgPgLgAgRj+QApgjgfAyQgcAjgOA9QgNgoAthHgAgikyQgSgTgQAdQgiAbASg1QAkg7AnAAQgPAqAmgVIAiggQgIApAOANQAvBAg8gpQgdgbgcAuQgFAagEAAQgFAAgEgkg",
      );
    this.shape_25.setTransform(22.6, 75);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .to(
          {
            state: [
              { t: this.shape_5 },
              { t: this.shape_4 },
              { t: this.shape_3 },
            ],
          },
          2,
        )
        .to({ state: [{ t: this.shape_7 }, { t: this.shape_6 }] }, 2)
        .to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }] }, 2)
        .to({ state: [{ t: this.shape_11 }, { t: this.shape_10 }] }, 2)
        .to({ state: [{ t: this.shape_13 }, { t: this.shape_12 }] }, 2)
        .to(
          {
            state: [
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
              { t: this.shape_14 },
            ],
          },
          2,
        )
        .to(
          {
            state: [
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
            ],
          },
          2,
        )
        .to(
          {
            state: [
              { t: this.shape_23 },
              { t: this.shape_22 },
              { t: this.shape_21 },
            ],
          },
          2,
        )
        .to({ state: [{ t: this.shape_25 }, { t: this.shape_24 }] }, 2)
        .wait(2),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 34.7, 115.3);

  (lib.car_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.car();
    this.instance.setTransform(18.7, -9.4, 0.21, 0.21, 0, 0, 180);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-18.3, -9.4, 37, 18.9);

  (lib.Symbol3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#0F204B")
      .s()
      .p("ArrE7QhkgBAAhjIAAmtQAAhjBkgBIXXAAQBkABAABjIAAGtQAABjhkABg");
    this.shape.setTransform(201.5, 31.5);

    this.ikNode_1 = new lib.Symbol2();
    this.ikNode_1.setTransform(512.6, 32.3, 1, 1, 0, 0, 0, 512.6, 21.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.ikNode_1 }, { t: this.shape }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(103.3, 0, 819.4, 63);

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 5
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#A47E46")
      .s()
      .p(
        "EgWOAmoQk6i4kTkUQtCtCAAyaQAAoWCsnPQDOovHInHQNBtCSaAAQSbAANCNCQNBNBAASaQAASatBNCIgiAiQkFD9kmCtQp7F2sVAAQsUAAp6l2gA+0+0QmuGvjLILQi4HYAAIiQAASEMxMyQFdFcGaDIQIoENKVAAQKXAAInkNQGajIFdlcIAugvQMDsjAAxkQAAyDsxsxQsxsxyEAAQyDAAsxMxgA4tYsQqOqOAAueQAAo0DznQQCckoD/kAQKPqOOegBQOdABKPKOQD/EACcEoQAZAuAVAwQDFGqAAH8QAAH8jFGrQiiFeknEnQqPKPudAAQueAAqPqPgA3839QjdDdiQD9QkOHaAAJJQAAOBJ7J9QJ7J7OBAAQOCAAJ7p7QGrmsCMohQBEkLAAkmQAAkmhEkKQhEkIiGjrQiQj9jdjdQp7p6uCAAQuBAAp7J6g",
      );
    this.shape.setTransform(-1.8, -81.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#D4B077")
      .s()
      .p(
        "EgS9AnaQmajIldldQsxsxAAyEQAAoiC4nYQDLoMGumuQMxsxSDAAQSEAAMxMxQMxMxAASDQAARjsDMkIguAuQldFdmaDIQonEMqXAAQqVAAookMgA4t4sQj/D/icEpQjzHQAAI0QAAOeKOKOQKPKPOeAAQOdAAKPqPQEnknCileQDFmrAAn8QAAn8jFmrQgVgvgZguQickpj/j/QqPqPudAAQueAAqPKPg",
      );
    this.shape_1.setTransform(-1.8, -81.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );

    // Layer 4 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EhP/A/HMAAAh+NMCf/AAAMAAAB+Ng");
    mask.setTransform(0, 0.1);

    // Layer 2
    this.instance = new lib.Symbol2_1();
    this.instance.setTransform(0, 0.9);
    this.instance.alpha = 0.078;

    this.instance.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer 1
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#BD9555").s().p("EhP/A/IMAAAh+PMCf/AAAMAAAB+Pg");

    this.shape_2.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-512, -403.9, 1024, 808);

  (lib.mc_redCarcras = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.instance = new lib.mc_fire01_01("synched", 0, false);
    this.instance.setTransform(27.8, 6.8, 0.26, 0.158, -105, 0, 0, 17.4, 57.7);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(7).to({ _off: false }, 0).wait(21),
    );

    // Layer 4
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AAZAbIg0ARIg/gUIA/ANIAvgVIBBAdIgHAIgAATAIIARgCIhGgKIB3ACIgjAEIAOAJgAAfgpIg0ARIg/gUIA/ANIAvgVIBBAdIgHAIg",
      );
    this.shape.setTransform(28.7, 9.3);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(6).to({ _off: false }, 0).wait(22),
    );

    // Layer 1
    this.instance_1 = new lib.car_1();
    this.instance_1.setTransform(18.9, 9.6);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).to({ scaleX: 0.83, x: 22 }, 6).wait(22),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0.6, 0.2, 37, 18.9);

  (lib.mc_patch = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.Symbol3();
    this.instance.setTransform(512.6, 31.5, 1, 1, 0, 0, 0, 512.6, 31.5);
    this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 24);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(77.3, -26, 875, 119);

  (lib.Bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
    this.shape.setTransform(221.7, 371.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
    this.shape_1.setTransform(221.7, 352.3);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
    this.shape_2.setTransform(221.7, 333.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
    this.shape_3.setTransform(221.7, 314);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
    this.shape_4.setTransform(221.7, 294.8);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2, 2, 1).p("ADoAAInPAA");
    this.shape_5.setTransform(194.8, 333.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#133412")
      .s()
      .p("AjiALIAOgGIAAgPIAgAAIAAAAIADAAIFuAAIADAAIAAABIAiAAIABAAIAAAUg");
    this.shape_6.setTransform(193.9, 375);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#959595")
      .s()
      .p("AC3AJIltAAIgEAAIAAAAIACAAIAAgRIFzAAIAAARg");
    this.shape_7.setTransform(194.4, 373);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("ADLGYIgBAAIgiAAIAAgBIAAgTIlzAAIAAsIIFzAAIAAgSIAAgBIAiAAIACAAIAAMvg");
    this.shape_8.setTransform(196.3, 333.1);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#8DAC8A")
      .s()
      .p("AgNGuIAAgXIABAAIAAsuIgCAAIAAgVIAAgBIAdAAIAAA2IAAIAIAAElg");
    this.shape_9.setTransform(218.1, 333.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#BAB9BA").s().p("Ai5AIIAAgQIFzAAIAAAQg");
    this.shape_10.setTransform(194.5, 293.3);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#0F2C0C")
      .s()
      .p("AgMGrIAAtVIAYAAIAAARIAAAAIAAMtIAAARIgMAGg");
    this.shape_11.setTransform(171.3, 333.4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#79807D")
      .s()
      .p("AAOGXIgdAAIAAstIAGAAIACAAIAXAAIAAASIAAMIIAAATg");
    this.shape_12.setTransform(174.2, 333.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#163217")
      .s()
      .p("ADGAKIlyAAIgZAAIgCAAIgGAAIAAgPIgaAAIAAgEIHPAAIAAATg");
    this.shape_13.setTransform(193.2, 291.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIALAAIAAAbg");
    this.shape_14.setTransform(75.9, 334.9);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIALAAIAAAbg");
    this.shape_15.setTransform(56.7, 334.9);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIALAAIAAAbg");
    this.shape_16.setTransform(37.6, 334.9);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIALAAIAAAbg");
    this.shape_17.setTransform(18.4, 334.9);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#FFFFFF").s().p("AgFAOIAAgbIALAAIAAAbg");
    this.shape_18.setTransform(-0.8, 334.9);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f().s("#000000").ss(2, 2, 1).p("AAAjFIAAGL");
    this.shape_19.setTransform(37.6, 311.9);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#BAB9BA").s().p("AgHCfIAAk9IAQAAIAAE9g");
    this.shape_20.setTransform(-2.2, 312.2);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#163217")
      .s()
      .p("AgJDGIAAmLIATAAIAAAdIAAE8IAAAVIAAACIAAAFIgPAAIAAAWg");
    this.shape_21.setTransform(-4.2, 313.3);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#0F2C0C")
      .s()
      .p("AmrAKIAAgTIARAAIABAAIMtAAIASAAIAFAKIAAAJg");
    this.shape_22.setTransform(38, 332);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#79807D")
      .s()
      .p("AmWAOIAAgGIAAgBIAAgTIASAAIMJAAIASAAIAAABIAAAZg");
    this.shape_23.setTransform(37.7, 329.5);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#959595")
      .s()
      .p("AAICfIAAgBIgQAAIAAk8IARAAIAAACIAAE5IAAACg");
    this.shape_24.setTransform(77.5, 312.3);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#8DAC8A")
      .s()
      .p("AmtANIAAAAIAAgZIA2AAIH/AAIEmAAIAAAYIgXAAIAAgBIsuAAIAAACg");
    this.shape_25.setTransform(37.7, 292.1);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#133412")
      .s()
      .p("AAFC1IgPAAIAAgbIAAAAIAAgCIAAk5IAAgCIABAAIAAgdIAAgBIAUAAIAAGDg");
    this.shape_26.setTransform(79.6, 312.8);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p("AmECuIAAk8IgSAAIgBAAIAAgdIAAgCIMvAAIAAABIAAABIAAAdIgBAAIgTAAIAAE8g");
    this.shape_27.setTransform(37.7, 310.7);

    this.instance = new lib.Watchbg("synched", 0);
    this.instance.setTransform(-104.9, 337.5, 0.23, 0.23);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#906933")
      .s()
      .p(
        "AkbJGQgjgWgagYIkagBQhQAAAAhQIAAwMQAAhQBQAAITkAFQBQAAAABQIAAQMQAABQhQAAIjUgBQgZAWgiAVQiEBQi7AAQi6AAiFhQg",
      );
    this.shape_28.setTransform(-108.6, 326.2);

    this.instance_1 = new lib.mc_redCar();
    this.instance_1.setTransform(
      -208.8,
      271.5,
      1.201,
      1.204,
      180,
      0,
      0,
      18.8,
      9.6,
    );

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#906933")
      .s()
      .p(
        "AkaJGQgkgWgagYIkagBQhPAAAAhQIAAwMQAAhQBPAAITlAFQBQAAAABQIAAQMQAABQhQAAIjVgBQgZAWghAVQiFBQi8AAQi5AAiEhQg",
      );
    this.shape_29.setTransform(186.9, 326.2);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#906933")
      .s()
      .p(
        "AkbJGQgjgWgagYIkZgBQhRAAAAhQIAAwMQAAhQBRAAITjAFQBQAAAABQIAAQMQAABQhQAAIjUgBQgZAWgiAVQiEBQi7AAQi6AAiFhQg",
      );
    this.shape_30.setTransform(37.9, 326.2);

    this.instance_2 = new lib.mc_outline("synched", 0);
    this.instance_2.setTransform(0, -79.9, 1, 1, 0, 0, 0, 512.1, 324.3);
    this.instance_2.filters = [
      new cjs.ColorFilter(0.95, 0.95, 0.95, 1, 12.75, 12.75, 12.75, 0),
    ];
    this.instance_2.cache(-3, -3, 1030, 655);

    this.instance_3 = new lib.Symbol1();
    this.instance_3.setTransform(-0.2, 0.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.instance_1 },
            { t: this.shape_28 },
            { t: this.instance },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-513.1, -511, 1026.4, 1024);

  // stage content:
  (lib.Controlthecarwithkeys = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 8
    this.instance = new lib.Bg();
    this.instance.setTransform(512.2, 404.9, 1, 1, 0, 0, 0, 0, 1);

    this.instance_1 = new lib.mc_nidle1();
    this.instance_1.setTransform(406.7, 716, 1, 1, 0, 0, 0, 1, 23.8);

    this.instance_2 = new lib.mc_redCar();
    this.instance_2.setTransform(
      502.4,
      571.3,
      1.441,
      1.445,
      0,
      180,
      0,
      18.8,
      9.6,
    );

    this.instance_3 = new lib.mc_redCarcras();
    this.instance_3.setTransform(
      280.5,
      571.3,
      1.441,
      1.445,
      0,
      0,
      0,
      18.8,
      9.6,
    );

    this.instance_4 = new lib.mc_patch();
    this.instance_4.setTransform(
      511.6,
      758.1,
      1.25,
      1.25,
      0,
      0,
      0,
      512.6,
      31.5,
    );

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(511.8, 296.9, 1024.9, 1024);
})(
  (lib = lib || {}),
  (images = images || {}),
  (createjs = createjs || {}),
  (ss = ss || {}),
);
var lib, images, createjs, ss;
