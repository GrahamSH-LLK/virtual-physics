(function (lib, img, cjs, ss) {
  var p; // shortcut to reference prototypes

  // library properties:
  lib.properties = {
    width: 1024,
    height: 808,
    fps: 24,
    color: "#333333",
    manifest: [],
  };

  // symbols:

  (lib.White_Lines = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,255,255,0.227)")
      .s()
      .p("EgAvA/8MAAAh/3IBfAAMAAAB/3g");
    this.shape.setTransform(0, -409.2);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4.8, -818.5, 9.7, 818.5);

  (lib.Tween8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgHD1QgehggBhFQgChFgEgMIAAgDQACifAWhXQAUhYAVgfQgJAggSBVQgSBTAECtQAHCqAWBRQAZBUALAfQgYgegchfg",
      );
    this.shape.setTransform(-11.4, 0.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAlHIQABAAABAAQAGgBAEgBQBDgOAph+QADgHACgHQABgDABgDQABgDAAgDQABgCAAgCQAAgBABgBQAAgCABgCQABgCAAgDQABgCAAgCQAXh8gBiCIAAgEQAAgDgBgCQAAgDAAgDQAAi7g1iGQgxh7hEgKQgCAAgCgBQgEAAgEAAQgkAAgqAaQgrAagnBmQgNAkgIAuQgUBkABCBQABC2A6B3QAAABAAABQAEAJAFAJQAoBTAoAVQArAXAlgCgAgLlsQADAAACgBQADAAADAAQACAAAEABQABAAABAAQAIACAIAGQAgAWAeBRQAAABABABQAAAAAAABQABABAAABQAmBlAHBlQACAbADAaQAACOgcBnQgXBSgeAXQgJAHgJACQgBAAAAAAQgDABgCAAQgFAAgEAAQgCgBgBAAQgFgBgEgCQgIgCgGgGQgGgDgGgFQgNgKgMgXQgEgIgEgJQgCgGgLgVQgwhkgBijQgBhqAPhRQAAgGABgFQACgZAEgUQARhWAZgVQANgMANgGQAEgCAFgBg",
      );

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#9F5000")
      .s()
      .p(
        "AgBEwIgEgKQgwhlgBifQAAhqAPhRIABgMQACgYAEgVQAQhVAXgWQAOgMANgFQAKgFAKAAIABABIgKAEQgNAFgNAMQgXAWgRBVQgEAVgCAYIgBAMQgOBRAABqQABCjAvBjIAMAbIAIARQgZgZgCgLg",
      );
    this.shape_2.setTransform(-6.7, -2.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgoFuIAAgBQAJgBAJgHQAcgXAXhSQAchnAAiPIgGg0QgGhlgmhlIgBgCIgBgCIgBgCQgbhRghgVQgHgGgJgCIABgBIAGAAQANgBAMAKQAhAVAcBRIAAACIABACIABACQAmBlAGBlIAGA0QAACPgcBnQgXBSgcAXQgNAJgMAAIgJAAg",
      );
    this.shape_3.setTransform(8.2, 0.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AAhGzQgmgVgphTIgJgSIAAgCQg5h3gBi2QgBiBAUhkQAHguAOgkQAmhmApgaQArgaAmAAIAAABQgeAFghAUQgpAagnBmQgNAkgIAuQgUBkABCBQABC2A6B3IAAACIAJASQAmBTApAVQAiASAeADIgIAAQgiAAgogVg",
      );
    this.shape_4.setTransform(-7.7, 0);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CC6600")
      .s()
      .p(
        "AAcHIQgcgDgigSQgogUgohUIgKgSIAAgBQg5h3gBi3QgBiBAUhjQAHgvAOgkQAmhmArgaQAhgUAdgFIgBgBIAIAAIAEABQBEAKAxB7QA1CGAAC7IAAAGIABAFIAAAFQABCBgXB9IgBADIgBAFIgBAEIgBADIgBADIgBAGIgCAGIgFAPQgpB9hDAPIgKABIgCAAgAAfFvIAIAAQANgBAMgIQAegXAXhTQAchnAAiOIgFg0QgHhmgmhlIgBgCIAAgBIgBgCQgehRghgWQgMgJgNAAIgFAAIAAABIgBAAIgHgBIgHAAIgFABIAAgBQgLAAgKAFQgNAFgNAMQgZAWgRBVQgEAVgCAYIgBAMQgOBRAABqQABCfAvBlIAEAKQAEALAaAZQAMAXANAKIAMAJQAIAFAGACIAJAEIADAAIAJAAIAFAAIABgBgAC3ALIgBgFIABAAIAAAFIAAAAgAC2AGg",
      );
    this.shape_5.setTransform(0.9, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-20.2, -46.6, 40.5, 93.3);

  (lib.Tween7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgIDzQgbhgAAhFQAAhFgEgMIAAgDQAHifAXhXQAVhWAYgfQgLAfgVBVQgTBTgBCsQAECrATBSQAXBUAKAfQgXgfgZhgg",
      );
    this.shape.setTransform(-10.9, -0.5, 1, 1, 0, 0, 0, 0.9, -0.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAaHIQABAAABABQAGgBAEgBQBCgNAth8QADgHACgIQABgDABgCQABgDABgDQAAgDABgBQAAgCAAAAQABgCABgCQABgCAAgDQABgCAAgCQAbh7ACiCIAAgGQAAgCAAgCQAAgDAAgDQAFi6gyiIQguh8hDgMQgCAAgCgBQgEAAgEAAQgkgBgrAZQgtAYgoBmQgPAjgIAuQgXBjgDCCQgEC2A4B4QgBABAAABQAEAJAFAJQAmBVAnAWQAsAYAkgCgAAAlsQAAAAADgBQADAAADgBQAEABADABQABAAABAAQAHACAIAGQAhAXAbBSQAAABABABQAAAAAAABQAAABABABQAkBnAEBkQABAbACAaQgECOgeBnQgaBRgeAXQgJAGgJABQgBAAAAAAQgEABgCAAQgEAAgFAAQgBgBgBAAQgFgBgEgCQgGgDgIgFQgGgEgGgFQgNgKgLgYQgEgIgEgJQgBgGgKgVQgvhlAEijQAChqARhRQABgGAAgFQADgZAEgUQAUhVAZgUQAOgMANgGQAEgBAGgBg",
      );

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#9F5000")
      .s()
      .p(
        "AgNEvIgEgKQgthmADigQADhqARhQIABgMQADgZAEgUQAThVAYgUQAOgMANgFQAKgEALAAIAAABIgKADQgMAFgOAMQgYAVgTBVQgFAUgCAYIgBAMQgSBRgCBpQgDCjAuBlQAIAVACAGIAHARQgXgagDgKg",
      );
    this.shape_2.setTransform(-6.2, -2.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "Ag2FuIAAgBQAJgBAIgGQAfgXAXhRQAfhnAEiOIgEg0QgEhlgkhnIAAgBIgBgCIgBgCQgZhSgggWQgIgHgIgBIABgBIAGAAQAMAAANAJQAgAXAZBRIABADIABABIABACQAjBmAEBmIAEA0QgECOgfBmQgZBRgdAXQgLAJgNgBIgFABIgEgBg",
      );
    this.shape_3.setTransform(8.7, 0.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AAbGyQglgWgmhVQgFgJgEgJIABgCQg4h4AEi2QADiCAXhjQAIguAPgjQAohmArgYQArgZAmABIAAABQgeAEghATQgrAZgpBmQgOAigJAuQgXBkgCCCQgEC1A3B4IgBACIAJASQAkBVAoAWQAiASAeAEIgEAAQglAAgpgWg",
      );
    this.shape_4.setTransform(-8.3, 0);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CC6600")
      .s()
      .p(
        "AARHIQgcgEgigTQgogVgmhVIgJgTIABgBQg3h4AEi1QACiCAXhkQAJguAOgjQAphmAtgYQAhgTAcgEIAAgCIAIABIAEABQBDAMAuB7QAyCJgFC6IAAAGIAAAAIAAAEIAAgEIAAAEIAAAGQgCCCgbB7IgBAEIgBAFIgCAEIAAABIgBAEIgCAGIgCAGIgFAOQgtB9hCANIgKACIgCgBgAAVFuIAAABIAJAAQANAAAMgIQAfgXAZhSQAehlAEiPIgDg0QgEhlgkhmIgBgDIAAgBIgBgCQgchSgggXQgMgJgNAAIgGAAIAAABIgCgBIgHgBIgEAAIgFABIgBgBQgLAAgKAEQgNAFgOAMQgZAVgTBUQgFAVgCAYIgCAMQgRBQgCBqQgDCgAsBmIAEAKQAEALAZAaQALAYANAJQAGAGAGADQAIAGAIACQAEADADABIACABIAJAAIAGgBIABAAg",
      );
    this.shape_5.setTransform(0.9, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-20.2, -46.7, 40.6, 93.4);

  (lib.Tween6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgFD2QgghfgDhFQgDhGgEgMIAAgCQAAigAThXQAUhYAUggQgJAggQBVQgRBVAHCrQAKCrAYBRQAaBTALAfQgYgfgdhdg",
      );
    this.shape.setTransform(-10.8, 0.1, 1, 1, 0, 0, 0, -0.2, -0.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAuHHQABAAABABQAFgBAFgBQBCgQAnh+QACgIACgHQAAgDACgDQABgDAAgDQABgCAAgCQAAgBAAgBQABgCABgBQABgDAAgDQABgCAAgCQAVh7gEiDIAAgFQAAgCgBgCQAAgDAAgBQgDi9g3iGQg0h5hDgJQgCAAgCgBQgFAAgEAAQgjABgqAaQgrAbglBnQgMAkgIAvQgSBjADCCQAFC2A8B2QgBABAAAAQAFAJAFAJQAqBTAoAUQArAXAmgEgAgRlrQACgBADgBQADAAADAAQAEAAACABQABAAABAAQAHACAJAFQAhAWAeBRQABABAAABQAAAAABABQAAABABABQAoBkAIBlQADAaADAaQACCPgZBoQgWBSgeAXQgIAHgJACQgBAAAAAAQgEABgCAAQgEAAgFAAQgBAAgBAAQgFgBgFgCQgIgDgIgEQgFgEgGgFQgMgJgMgYQgEgHgFgJQgCgGgLgVQgyhjgEijQgDhqAOhRQAAgGABgGQABgYAEgUQAPhWAZgWQANgMANgGQAEgCAFgBg",
      );

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#9F5000")
      .s()
      .p(
        "AAFExIgEgLQgvhjgEigQgChqANhRIABgMQACgZADgTQAPhWAXgWQANgNANgFQAKgFAKAAIABABIgJADQgNAGgNAMQgXAWgPBXQgEATgBAZIgBAMQgOBRADBqQAECjAwBjQALAVACAGIAJAQQgbgZgEgKg",
      );
    this.shape_2.setTransform(-7.1, -2.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgeFtQAJgCAHgHQAdgXAVhSQAahogCiPIgGg0QgJhlgohkIgBgCIAAgBIgBgCQgchRgigWQgIgFgIgCIABgBIAGAAQAMgBANAKQAhAVAdBRIABABIABACIAAACQApBkAIBlIAGA0QACCPgaBnQgVBSgfAYQgJAJgNABIgIAAg",
      );
    this.shape_3.setTransform(7.9, 0);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AAlG0QgngUgqhTIgJgSIAAgBQg8h2gEi2QgEiCAThjQAHgvANgkQAkhnArgbQAogaAmgBIABACQgfAFggAUQgpAaglBoQgNAkgGAuQgTBkAECCQADC2A8B1IAAACIAKASQAoBTAoATQAiASAfACIgKABQgiAAgmgUg",
      );
    this.shape_4.setTransform(-7.3, 0);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CC6600")
      .s()
      .p(
        "AAlHHQgfgCgggSQgpgTgphTIgKgSIAAgCQg8h1gEi2QgDiCAShkQAHguANgkQAkhoArgaQAggUAfgFIgBgCIAHAAIAEABQBDAJA0B5QA3CGADC9IAAAEIABAEIAAAFQAECDgVB7IgBAEIgBAGIgCADIAAACIgBAEIgBAGQgCADAAADIgEAPQgnB+hCAQIgKACIgCgBgAAlFtIAAABIAJAAQAMgBAMgJQAegYAVhSQAbhngDiPIgFg0QgJhlgohkIgBgCIgBgCIgBgBQgfhRghgVQgMgKgMABIgFAAIAAABIgCAAIgIgBIgGAAIgFACIgBgCQgKAAgKAFQgNAGgNAMQgZAWgPBWQgDAUgCAZIgBALQgNBSACBpQAECgAxBkIAEAKQAEAKAbAZQAMAYAMAJQAGAFAHAEQAGAEAIADIAKADIACAAIAJAAIAGgBIABAAgAC3AHIgBgEIABAAIAAAEIAAAAgAC2ADg",
      );
    this.shape_5.setTransform(0.9, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-20.2, -46.6, 40.6, 93.3);

  (lib.Tween5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AABD4QglhcgJhEQgJhFgGgNIAAgEQgOicAMhZQAMhZATghQgGAggLBWQgJBWAWCrQAZCpAeBNQAiBSAOAcQgbgbgohbg",
      );
    this.shape.setTransform(-11.1, 1.7, 1, 1, 0, 0, 0, -1.6, 0.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgylnQACAAADgBQADgBADAAQAEgBADABQABAAABAAQAIABAJAFQAhATAlBNQABABABABQAAABAAABQABABAAAAQAxBhARBjQAFAbAGAbQAOCMgRBpQgOBUgcAbQgHAHgJACQgBABAAAAQgEABgCAAQgEAAgFABQgBgBgBABQgFgBgFgCQgIgBgIgEQgHgDgHgFQgOgHgMgXQgEgHgFgJQgCgFgNgUQg7hegSiiQgMhqAGhSQAAgGgBgGQAAgYACgUQAIhYAXgXQALgNANgHQADgDAGgCgABUHDQABAAABAAQAFgBAEgBQBBgWAciBQACgIABgHQAAgDABgDQABgDAAgDQAAgCABgCQgBgBABgBQAAgCAAgCQABgDAAgCQABgCAAgCQAKh9gPiAIgBgEIAAgBQAAgDgBgBQAAgDgBgDQgTi8hDiAQg9h1hDgDQgBABgDgBQgEAAgEABQgmADgnAeQgpAfgbBqQgKAlgCAvQgKBlAPCAQAUC1BGBwQAAABAAABQAFAJAGAIQAxBPAoAQQAuATAmgHg",
      );

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#9F5000")
      .s()
      .p(
        "AAaEyIgEgJQg4hfgSifQgLhqAGhRIAAgMQgBgZACgUQAHhWAXgZQANgNALgHQAIgGAKgBIABABIgJAFQgKAHgMANQgXAXgHBYQgDAVABAXIABANQgHBRAMBqQASCiA5BeQANAUACAFIAKARQgcgYgGgKg",
      );
    this.shape_2.setTransform(-6.9, -2.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AA6G3QgqgQgvhPIgLgSIAAgBQhGhxgUi0QgPiBAKhlQACgvAKglQAbhqApgeQAngeAkgEIABACQgcAHgeAXQgpAegbBrQgKAkgDAvQgKBlAQCBQATC1BGBwIAAACQAFAIAGAIQAvBPAqARQAkAOAfAAQgKACgLAAQgdAAgigOg",
      );
    this.shape_3.setTransform(-5.8, 0);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#CC6600")
      .s()
      .p(
        "AAJG2QgogQgxhPQgHgIgFgJIAAgCQhGhwgTi0QgPiCAKhkQACgvAKglQAbhqApgeQAegXAegIIAAgBQAEgBAEAAIAEAAQBCADA+B1QBCCAAUC8IABAGIAAAAIABAEIgBgEIABAEIAAABIAAAEQAQCAgLB9IgBAEIAAAFIgBAEIAAACIgBAEIgBAGIAAAGIgEAPQgcCBhAAWIgKACIgCAAIgCAAQgeAAgigOgAA0FtIAJgBIAFgBIACgBIAAABIAIgBQANgCAKgJQAcgbAPhTQAQhqgOiLIgKg2QgShkgwhgIgBgCIgBgCIgCgBQglhOghgSQgNgIgNABIgGABIAAABIgDAAQgDgBgDABIgHABIgFABIgBgBQgKABgKAGQgLAHgNANQgXAYgHBXQgCAUABAZIAAAMQgGBRALBqQASCfA6BfIAEAJQAGAKAcAXQAOAXAMAHQAGAFAHADQAJAEAHABQAFACAGABIABgBIABABg",
      );
    this.shape_4.setTransform(0.9, -0.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AAMFqQAJgCAHgHQAcgbAOhUQARhpgOiMIgLg2QgRhjgvhhIgBgBIAAgCIgCgCQglhNgjgTQgJgFgIgBIAAgBIAGgBQANgBANAIQAjASAkBOIABABIABACIABACQAxBgARBkIALA2QAOCLgRBqQgOBTgcAbQgKAJgNACIgJABg",
      );
    this.shape_5.setTransform(6.4, -0.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-21, -46.3, 42.1, 92.7);

  (lib.Tween4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgZDxQgYhiAEhEQADhFgDgNIAAgDQAOieAbhVQAZhXAZgcQgMAegZBUQgXBSgICsQgECqASBTQAQBVAJAfQgTgfgXhhg",
      );
    this.shape.setTransform(-11.3, -0.5, 1, 1, 0, 0, 0, -0.1, -0.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAGHIQABAAABAAQAFAAAFgBQBDgKAyh6QADgHADgHQABgDABgDQABgDABgDQABgCAAgBQAAgCABAAQAAgCACgCQAAgDABgDQABgBAAgCQAgh6AIiCIAAgEQAAgDAAgCQAAgDAAgDQANi7griJQgph+hCgPQgCAAgCgBQgEAAgEgBQgmgCgrAWQgsAXguBkQgQAigKAuQgbBigJCDQgLC0AxB7QAAABAAAAQADAJAEAKQAjBWAmAXQArAbAkAAgAANltQADgBACAAQADAAAEAAQADAAAEACQABAAABAAQAIACAHAHQAfAYAYBTQAAABABABQAAABAAABQABABAAABQAfBngBBlQABAbAAAaQgKCOgjBkQgcBRggAVQgJAGgJABQgBABgBAAQgDAAgCAAQgEAAgDgBQgBAAgBAAQgFgCgEgCQgIgDgIgGQgGgEgFgGQgNgKgKgYQgDgJgEgJQgBgGgJgVQgphoAKigQAHhsAUhQQABgGABgFQAEgZAFgTQAXhVAagTQAOgLAMgFQAEgCAFAAg",
      );
    this.shape_1.setTransform(0, 0.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#9F5000")
      .s()
      .p(
        "AggEtIgEgMQgohmALihQAHhpAUhQIACgLQAEgZAFgUQAXhUAYgUQAOgLAOgEQAKgEAKABIABABQgFABgFACQgNAEgOALQgbAUgUBUQgGAUgDAYIgCAMQgUBQgHBpQgLCjApBnIALAcIAHARQgYgbgDgKg",
      );
    this.shape_2.setTransform(-5.6, -2.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "Ag7FvIgJgBIAAgBQAJgBAJgGQAggVAahRQAjhkAKiOIgBg1QABhlgfhnIgBgCIAAgCIgBgCQgWhTgfgYQgHgHgIgCIAAgBIAGAAQANABAMAKQAdAYAYBTIABACIAAACIABACQAfBngBBmIABA0QgKCOgjBkQgaBRggAVQgMAIgMAAIgBAAg",
      );
    this.shape_3.setTransform(8.4, 0.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AABGtQgkgXgjhWIgHgTIAAgBQgxh7ALi0QAJiDAbhiQAKguAQgiQAuhkAqgXQAtgWAmACIAAACQgfACgiARQgsAXgsBkQgQAjgLAtQgbBigICDQgMC0AxB7IAAABIAIATQAiBWAlAXQAhAVAeAFQgmAAgrgbg",
      );
    this.shape_4.setTransform(-7.6, 0.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CC6600")
      .s()
      .p(
        "AgBHIQgegFghgVQgngXgihWIgIgTIAAgBQgxh7AMi0QAIiDAbhiQALgtAQgjQAuhkAsgXQAggRAfgCIAAgCIAIABIAEABQBCAPApB+QArCJgNC7IAAAGIAAACIAAADIAAAEQgICCggB6IgBADIgBAGIgCAEIgBACIgBADIgCAGIgCAGIgGAOQgyB6hDAKIgJABIgBAAgAAFFvIAJABQAMAAANgIQAggVAchRQAjhkAKiOIgBg0QABhmgfhnIgBgCIAAgCIgBgCQgYhTgfgYQgMgKgNgBIgGAAIAAABIgCAAIgHgCIgHAAIgFABIAAgCQgJgBgKAEQgNAFgPALQgaAUgWBUQgGAUgDAYIgCALQgUBQgIBsQgKCeAoBnIADALQADAKAYAcQAKAYANAKIALAKQAIAGAIADIAJAEIACAAIAJABIADAAIACgBgAC2AXIAAgDIAAgCIAAAAIAAAFIAAAAgAC2ASg",
      );
    this.shape_5.setTransform(0.9, 0.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-20.4, -46.6, 40.9, 93.4);

  (lib.Tween3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgkDvQgUhiAFhEQAFhFgDgNIABgDQASieAehVQAchVAZgcQgMAegcBSQgZBSgNCuQgKCoAPBUQARBWAGAfQgTgggUhig",
      );
    this.shape.setTransform(-11.2, -1.1, 1, 1, 0, 0, 0, -0.4, -0.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgGHHQABAAABABQAEAAAEgBQBDgIA2h5QADgHADgHQABgDABgCQACgDAAgDQABgCABgCQAAgBAAgBQABgCABgBQABgDABgDQABgBAAgCQAkh5ALiCIABgDIAAgCQAAgDAAgBQAAgDAAgDQATi6gniLQglh/hCgRQgCAAgCgBQgEgBgEAAQgmgEgqAWQguAVgwBiQgRAigNAuQgeBhgMCDQgRCzAuB8QgBABAAABQADAJAEAKQAgBXAmAYQAqAcAmABgAAYltQADAAACgBQADAAAEAAQADABAEABQABAAABABQAHACAIAHQAeAZAVBUQAAABABABQAAAAAAABQAAABABABQAcBpgEBlQAAAaAAAaQgPCOgmBkQgfBPggAUQgJAGgJABQgBAAgBAAQgBAAgCAAQgFgBgEAAQgBgBgBAAQgFgBgFgDQgHgDgIgGQgGgEgFgGQgMgKgJgZQgDgIgEgKQgBgGgIgWQgnhoAQigQAKhsAXhPQABgGABgFQAEgYAGgUQAahUAbgSQAMgLANgEQAFgCAFAAg",
      );

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AhBFuIgJAAIAAgBQAJgBAJgGQAhgUAdhPQAmhkAOiOIABg0QADhlgchpIAAgCIgBgBIgBgCQgUhUgdgZQgHgHgIgCIABgBIAGAAQAMABAMALQAcAZAVBTIABACIABACIAAACQAcBogDBmIgBA0QgOCOgmBjQgdBQghAUQgLAGgLAAIgDAAg",
      );
    this.shape_2.setTransform(7.9, 0.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AgPGqQgmgYgghXIgHgTIAAgCQguh8ASizQAMiDAehhQAMguARgiQAwhiAsgVQAtgWAmAEIAAACQgfABgiARQguAVguBiQgRAigNAtQgeBhgMCEQgRCzAtB8IAAABIAIATQAfBXAkAZQAgAVAeAGQgmgBgngcg",
      );
    this.shape_3.setTransform(-7, 0);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#9F5000")
      .s()
      .p(
        "AgtEqIgDgLQglhoAPifQAKhqAXhPIACgLQAFgZAGgTQAYhUAagSQAPgLANgEQAKgEALABIAAACIgKACQgNAEgOALQgbASgYBUQgGAUgEAYIgCALQgXBPgKBqQgQCiAnBoQAIAWABAGIAHASQgXgcgDgLg",
      );
    this.shape_4.setTransform(-5.1, -3.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CC6600")
      .s()
      .p(
        "AgPHHQgegGgggWQgmgYgfhXIgIgTIAAgCQgth8ARizQAMiDAehhQANgtARgiQAwhjAugVQAggQAfgCIAAgBIAIABIAEABQBCARAlB+QAnCLgTC6IgBAGIABAAIgBAFIAAgFIAAAFIAAABIAAAEQgMCCgjB4IgCAEIgBAFIgCAEIgBACIgBADIgCAGIgCAGIgGAOQg2B5hCAIIgKAAIgCAAgAgEFtIAAABIAHABQANABAMgIQAhgUAfhPQAmhkAOiNIABg1QADhlgchoIAAgDIgBgBIgBgCQgVhUgegZQgMgKgMgBIgGgBIgBABIgCAAIgHgCIgGAAIgFAAIgBgBQgKgBgJADQgNAEgPALQgbATgZBTQgGAUgEAYIgCAMQgXBPgLBrQgPCdAlBpIADALQADAKAXAcQAJAZAMALQAGAGAGAEQAHAFAIAEIAJAEIACAAIAJABIAGAAIABAAg",
      );
    this.shape_5.setTransform(0.9, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-20.7, -46.6, 41.4, 93.2);

  (lib.Tween1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgHD1QgehggBhFQgChFgEgMIAAgDQACifAWhXQAUhYAVgfQgJAggSBVQgSBTAECtQAHCqAWBRQAZBUALAfQgYgegchfg",
      );
    this.shape.setTransform(-11.4, 0.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAlHIQABAAABAAQAGgBAEgBQBDgOAph+QADgHACgHQABgDABgDQABgDAAgDQABgCAAgCQAAgBABgBQAAgCABgCQABgCAAgDQABgCAAgCQAXh8gBiCIAAgEQAAgDgBgCQAAgDAAgDQAAi7g1iGQgxh7hEgKQgCAAgCgBQgEAAgEAAQgkAAgqAaQgrAagnBmQgNAkgIAuQgUBkABCBQABC2A6B3QAAABAAABQAEAJAFAJQAoBTAoAVQArAXAlgCgAgLlsQADAAACgBQADAAADAAQACAAAEABQABAAABAAQAIACAIAGQAgAWAeBRQAAABABABQAAAAAAABQABABAAABQAmBlAHBlQACAbADAaQAACOgcBnQgXBSgeAXQgJAHgJACQgBAAAAAAQgDABgCAAQgFAAgEAAQgCgBgBAAQgFgBgEgCQgIgCgGgGQgGgDgGgFQgNgKgMgXQgEgIgEgJQgCgGgLgVQgwhkgBijQgBhqAPhRQAAgGABgFQACgZAEgUQARhWAZgVQANgMANgGQAEgCAFgBg",
      );

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#9F5000")
      .s()
      .p(
        "AgBEwIgEgKQgwhlgBifQAAhqAPhRIABgMQACgYAEgVQAQhVAXgWQAOgMANgFQAKgFAKAAIABABIgKAEQgNAFgNAMQgXAWgRBVQgEAVgCAYIgBAMQgOBRAABqQABCjAvBjIAMAbIAIARQgZgZgCgLg",
      );
    this.shape_2.setTransform(-6.7, -2.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgoFuIAAgBQAJgBAJgHQAcgXAXhSQAchnAAiPIgGg0QgGhlgmhlIgBgCIgBgCIgBgCQgbhRghgVQgHgGgJgCIABgBIAGAAQANgBAMAKQAhAVAcBRIAAACIABACIABACQAmBlAGBlIAGA0QAACPgcBnQgXBSgcAXQgNAJgMAAIgJAAg",
      );
    this.shape_3.setTransform(8.2, 0.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AAhGzQgmgVgphTIgJgSIAAgCQg5h3gBi2QgBiBAUhkQAHguAOgkQAmhmApgaQArgaAmAAIAAABQgeAFghAUQgpAagnBmQgNAkgIAuQgUBkABCBQABC2A6B3IAAACIAJASQAmBTApAVQAiASAeADIgIAAQgiAAgogVg",
      );
    this.shape_4.setTransform(-7.7, 0);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CC6600")
      .s()
      .p(
        "AAcHIQgcgDgigSQgogUgohUIgKgSIAAgBQg5h3gBi3QgBiBAUhjQAHgvAOgkQAmhmArgaQAhgUAdgFIgBgBIAIAAIAEABQBEAKAxB7QA1CGAAC7IAAAGIABAFIAAAFQABCBgXB9IgBADIgBAFIgBAEIgBADIgBADIgBAGIgCAGIgFAPQgpB9hDAPIgKABIgCAAgAAfFvIAIAAQANgBAMgIQAegXAXhTQAchnAAiOIgFg0QgHhmgmhlIgBgCIAAgBIgBgCQgehRghgWQgMgJgNAAIgFAAIAAABIgBAAIgHgBIgHAAIgFABIAAgBQgLAAgKAFQgNAFgNAMQgZAWgRBVQgEAVgCAYIgBAMQgOBRAABqQABCfAvBlIAEAKQAEALAaAZQAMAXANAKIAMAJQAIAFAGACIAJAEIADAAIAJAAIAFAAIABgBgAC3ALIgBgFIABAAIAAAFIAAAAgAC2AGg",
      );
    this.shape_5.setTransform(0.9, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-20.2, -46.6, 40.5, 93.3);

  (lib.Symbol22 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgHD1QgehggBhFQgChFgEgMIAAgDQACifAWhXQAUhYAVgfQgJAggSBVQgSBTAECtQAHCqAWBRQAZBUALAfQgYgegchfg",
      );
    this.shape.setTransform(7.8, 45.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAlHIQABAAABAAQAGgBAEgBQBDgOAph+QADgHACgHQABgDABgDQABgDAAgDQABgCAAgCQAAgBABgBQAAgCABgCQABgCAAgDQABgCAAgCQAXh8gBiCIAAgEQAAgDgBgCQAAgDAAgDQAAi7g1iGQgxh7hEgKQgCAAgCgBQgEAAgEAAQgkAAgqAaQgrAagnBmQgNAkgIAuQgUBkABCBQABC2A6B3QAAABAAABQAEAJAFAJQAoBTAoAVQArAXAlgCgAgLlsQADAAACgBQADAAADAAQACAAAEABQABAAABAAQAIACAIAGQAgAWAeBRQAAABABABQAAAAAAABQABABAAABQAmBlAHBlQACAbADAaQAACOgcBnQgXBSgeAXQgJAHgJACQgBAAAAAAQgDABgCAAQgFAAgEAAQgCgBgBAAQgFgBgEgCQgIgCgGgGQgGgDgGgFQgNgKgMgXQgEgIgEgJQgCgGgLgVQgwhkgBijQgBhqAPhRQAAgGABgFQACgZAEgUQARhWAZgVQANgMANgGQAEgCAFgBg",
      );
    this.shape_1.setTransform(19.2, 45.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AAhGzQgmgVgphTIgJgSIAAgCQg5h3gBi2QgBiBAUhkQAHguAOgkQAmhmApgaQArgaAmAAIAAABQgeAFghAUQgpAagnBmQgNAkgIAuQgUBkABCBQABC2A6B3IAAACIAJASQAmBTApAVQAiASAeADIgIAAQgiAAgogVg",
      );
    this.shape_2.setTransform(11.5, 45.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#9F5000")
      .s()
      .p(
        "AgBEwIgEgLQgwhjgBihQAAhqAPhRIABgLQACgYAEgVQAQhVAXgWQAOgMANgGQAKgEAKAAIABACIgKACQgNAGgNAMQgXAWgRBVQgEAVgCAYIgBALQgOBRAABqQABCkAvBjIAMAbIAIARQgZgZgCgLg",
      );
    this.shape_3.setTransform(12.5, 43.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgoFvIAAgCQAJgBAIgHQAdgXAWhSQAchoAAiNIgEg1QgHhlgmhlIgBgCIAAgBIgCgDQgbhQgggXQgJgFgHgCIAAgBIAGgBQANAAAMAJQAhAXAbBQIABADIABABIABACQAmBlAGBlIAFA1QAACNgbBoQgXBSgdAXQgLAJgNABIgJAAg",
      );
    this.shape_4.setTransform(27.4, 45.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CC6600")
      .s()
      .p(
        "AAcHIQgcgDgigSQgogUgohUIgKgSIAAgBQg5h3gBi3QgBiBAUhjQAHgvAOgjQAmhnArgaQAhgUAdgEIgBgCIAIABIAEAAQBEAKAxB7QA1CGAAC7IAAAGIABAFIAAAFQABCCgXB7IgBAEIgBAFIgBAFIgBACIgBADIgBAGIgCAGIgFAOQgpB+hDAPIgKABIgCAAgAAfFvIAIAAQANAAAMgKQAegXAXhSQAchnAAiOIgFg0QgHhlgmhlIgBgDIAAgBIgBgCQgehRghgWQgMgJgNAAIgFABIAAABIgBgBIgHgBIgHABIgFABIAAgCQgLAAgKAEQgNAGgNAMQgZAWgRBVQgEAVgCAYIgBALQgOBRAABqQABChAvBjIAEALQAEALAaAZQAMAXANAKIAMAJQAIAFAGADIAJACIADABIAJAAIAFgBIABAAgAC3ALIgBgFIABAAIAAAFIAAAAgAC2AGg",
      );
    this.shape_5.setTransform(20.1, 45.7);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-1, -1, 40.5, 93.3);

  (lib.Symbol21 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AglRwMAABgmAIA4AAMAAAAmDIAAAvQADACACACQAFADAEAFQANAUAAAXQAAAAAAABQAAAWgPAQQgKAMgNAEQgGABgEAAQgEAAgDAAQgKgCgIgJQADgBAHgCQAFgDAFgFQAEgEACgDQAFgLAAgPQAAgTgLgPQgKgLgLABQgMAAgHADQAFgLAFgGIgBgwQAlgaAUAdAgkSgQAEgEADgCQAKgDADAAQADAAAIAAQAFAAAKAFQAFADAFAD",
      );
    this.shape.setTransform(19.9, 129.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#353737")
      .s()
      .p(
        "AgIBWQgKgCgIgJIAKgDQAFgDAFgFIAGgHQAFgLAAgPQAAgTgLgNQgKgLgLABQgMAAgHADQAFgLAFgGIgBgwQAlgaAUAdIAAAvIAFAEQAFADAEAFQANASAAAXIAAABQAAAWgPAQQgKAMgNAEIgKABIgHAAgAgQgiIALAAQAFAAAKAFIAKAGIgKgGQgKgFgFAAIgLAAQgDAAgKADQgDACgEAEQAEgEADgCQAJgDADAAIABAAg",
      );
    this.shape_1.setTransform(19.9, 250.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#191A1A")
      .s()
      .p("AgcS/MAABgmAIA4AAMAAAAmDQgUgdglAag");
    this.shape_2.setTransform(19, 121.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 40.5, 342.3);

  (lib.Symbol10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Mask (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      "EgSQA54QkRh7j/iVQrKmjnqo5IAAjcMAAAgtEIzcABIHeqAInlqtIPuAAID1p3IAAlaIAAjWIAAgDIC/hCQDAhCDJg5ID8hDQQSkOQBABQPIAJOvDfIBOASQFeBYH7CmIA6AUIAADNIAMAEIAAGAICnJaIQaAAIm6KSIAIAMIHCKPIhSgBIx/AAMAAAAv5IgEAFIgIAJIAAA0IgFAGQngIdrcGkQj9CRkMB5g",
    );
    mask.setTransform(1285, 281.3);

    // Layer 3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(48,133,210,0.31)")
      .s()
      .p("AAAk0QYxAATyJoQ0Oms4UAAQxSAAvODXQmNBZl2B9QTzppYvAAg");
    this.shape.setTransform(1285, -19.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(7,7,7,0.31)")
      .s()
      .p("Egx4AAAIgUAJIAAABIgDABIAXgLgEAyJAAIIAAAAIgrgSQAZAKAZAKIgHgCg");
    this.shape_1.setTransform(1285.8, -4.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(
        [
          "rgba(238,137,137,0)",
          "rgba(238,137,137,0.498)",
          "rgba(238,137,137,0)",
        ],
        [0, 0.533, 1],
        -290.4,
        0,
        290.5,
        0,
      )
      .s()
      .p(
        "EgtXAErIAAgDIAAhJIAAgDQAwgSAwgPIBfghQDChDDHg4ID9hBQB8giB6gcQOYjQOFAAQOWAIOTDNIBNATIBPASQFeBWH7CmIA5AVIAABRQn3i3oAh1IAWACIgtgJIAPAEQtzi+viAAQxLAAvFDoIgGACQm+BzmHCVg",
      );
    this.shape_2.setTransform(1285.3, -45.5);

    this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(10),
    );

    // Layer 4
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(46,2,2,0.871)")
      .s()
      .p(
        "EgJtA4CQpGjFn6kpQrKminro5MAAAgvEIu0AAIFzodImOpSIMrAAICkqMIAAgoIAAhsIAAjWIAAgDIDAhCQDAhCDIg5ID9hDQQRkOQEAAQPFAJOwDfIBOASQFdBYH8CmIA6AVIAADRIAAAEIAABiICzK9IMPAAIlkJFIGHIrIk/AAIqmAAMAAAAvjIgFAGQngIercGjQn/Elo4DDg",
      );
    this.shape_3.setTransform(1286.3, 293.2);

    this.shape_3.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10));

    // DARK BAND
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("rgba(39,0,0,0.549)")
      .s()
      .p(
        "EgPsA4QQljiUlEi+QrKminro5MAAAgwkIxfAAIHEpHInJqgIOpAAIC7qkIAAk2QIxjHIKh2QOYjROFAAQOWAJOTDNQIMB1IiDDIAAGAIC1JjIORAAImnKsIGiIyIxBAAMAAAAw+IgEAFQngIfrcGjQlFC6lcCSg",
      );
    this.shape_4.setTransform(1285, 291.7);

    this.shape_4.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(10));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(883.6, -76, 802.7, 727.8);

  (lib.Symbol3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape.setTransform(79.5, 104.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape_1.setTransform(79.5, 168.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape_2.setTransform(79.5, 229.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape_3.setTransform(79.5, 294.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape_4.setTransform(79.5, 357.8);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape_5.setTransform(79.5, 420.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape_6.setTransform(79.5, 483.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape_7.setTransform(79.5, 547.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAqQgJgMAAgeQAAgdAKgNQAJgLAOAAQAPgBAJAMQAKANAAAdQAAAegKAOQgJAKgPABQgOgBgKgMgAgFgiQgDACgCAHQgCAHAAASQAAASACAIQACAGADADQADACACABQADgBADgCQADgDACgFQACgJAAgSQAAgSgCgGQgCgIgDgCQgDgCgDAAQgCAAgDACg",
      );
    this.shape_8.setTransform(64.8, 103.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
    this.shape_9.setTransform(58.7, 107.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgWAvQgMgKAAgPQAAgJAFgHQAEgGAJgEQgIgDgDgGQgEgFAAgHQAAgMAIgJQAJgHAOAAQAPAAAIAHQAIAJAAAMQAAAHgDAFQgEAHgHACQAJAEAEAFQAFAHAAAJQAAAPgKAJQgJAKgQAAQgMgBgKgHgAgKAJQgDAFAAAGQAAAJAEAEQAEAFAFAAQAGAAAEgFQAFgEAAgJQAAgIgFgEQgEgEgGgBQgGAAgEAGgAgIghQgDADAAAGQAAAGADAEQADADAFAAQAFAAAEgDQADgEAAgGQAAgGgDgDQgEgEgFAAQgEAAgEAEg",
      );
    this.shape_10.setTransform(52.3, 103.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAqQgJgMAAgeQAAgdAKgNQAJgMAOAAQAPAAAJAMQAKANAAAdQAAAegKANQgJAMgPAAQgOAAgKgNgAgFgiQgDACgCAGQgCAJAAARQAAATACAGQACAIADACQADADACAAQADAAADgDQADgCACgHQACgHAAgTQAAgSgCgGQgCgIgDgCQgDgCgDAAQgCAAgDACg",
      );
    this.shape_11.setTransform(64.8, 166.9);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
    this.shape_12.setTransform(58.7, 171.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTA0QAAgWAJgXQAIgVANgSIgtAAIAAgTIBFAAIAAAOQgJAJgJAQQgJAOgFATQgDARAAAOg",
      );
    this.shape_13.setTransform(52.4, 166.9);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYArQgJgNAAgeQAAgdAKgOQAJgLAOABQAPAAAJALQAKANAAAdQAAAegKAOQgJALgPAAQgOAAgKgMgAgFgiQgDADgCAGQgCAHAAASQAAASACAIQACAGADADQADADACgBQADABADgDQADgDACgFQACgJAAgSQAAgSgCgHQgCgGgDgDQgDgCgDAAQgCAAgDACg",
      );
    this.shape_14.setTransform(64.8, 228.5);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
    this.shape_15.setTransform(58.7, 232.8);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAqQgKgNAAgdQAAgbALgOQAKgNAQABQAMgBAIAIQAIAGACAOIgUABQAAgFgDgEQgDgCgFAAQgFAAgEAFQgFAGgBATQAIgJAJAAQANAAAJAJQAJAJAAAPQAAARgJAKQgKAKgPAAQgOAAgLgNgAgHACQgEAFAAAKQAAAKAEAFQAFAFAEAAQAGAAADgEQAEgEAAgLQAAgKgEgFQgEgDgGAAQgEAAgEACg",
      );
    this.shape_16.setTransform(52.4, 228.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYArQgJgNAAgeQAAgdAKgOQAJgLAOABQAPAAAJALQAKANAAAdQAAAegKAOQgJALgPgBQgOABgKgMgAgFgiQgDADgCAFQgCAJAAARQAAASACAIQACAGADADQADADACgBQADABADgDQADgDACgFQACgJAAgSQAAgRgCgIQgCgGgDgDQgDgCgDAAQgCAAgDACg",
      );
    this.shape_17.setTransform(64.8, 293.4);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
    this.shape_18.setTransform(58.7, 297.7);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXAtQgKgHgCgOIAVgCQABAHAEAEQAEAEAFAAQAGAAAEgFQAEgGAAgKQAAgKgEgFQgEgDgGAAQgIAAgHAGIgRgDIAKg2IA1AAIAAAUIglAAIgDASQAHgDAFAAQAOgBAJAKQAKAJAAAQQAAAMgIALQgLAOgRAAQgOABgJgJg",
      );
    this.shape_19.setTransform(52.5, 293.5);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYArQgJgNAAgeQAAgdAKgOQAJgLAOAAQAPAAAJAMQAKANAAAdQAAAegKANQgJAMgPgBQgOABgKgMgAgFgiQgDADgCAFQgCAJAAARQAAATACAHQACAGADADQADACACAAQADAAADgCQADgDACgGQACgHAAgTQAAgRgCgIQgCgGgDgDQgDgCgDAAQgCAAgDACg",
      );
    this.shape_20.setTransform(64.8, 356.5);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
    this.shape_21.setTransform(58.7, 360.8);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAEA1IAAgVIgpAAIAAgSIAthCIAQAAIAABCIAOAAIAAASIgOAAIAAAVgAgSAOIAWAAIAAgjg",
      );
    this.shape_22.setTransform(52.4, 356.4);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAqQgJgMAAgeQAAgdAKgOQAJgKAOgBQAPAAAJAMQAKANAAAdQAAAegKANQgJALgPAAQgOAAgKgMgAgFgiQgDADgCAFQgCAJAAARQAAATACAGQACAHADADQADACACAAQADAAADgCQADgDACgGQACgHAAgTQAAgRgCgIQgCgGgDgDQgDgCgDAAQgCAAgDACg",
      );
    this.shape_23.setTransform(64.8, 419.6);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
    this.shape_24.setTransform(58.7, 423.9);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXAuQgKgJgBgNIAUgCQABAHAEAEQAEAFAFgBQAFAAAFgEQAEgGAAgIQAAgHgEgFQgEgFgGABIgIABIADgOQAGAAAEgFQAFgDAAgHQAAgFgDgDQgEgDgDgBQgFAAgEAEQgEAEgBAHIgTgEQACgJAEgGQAEgFAIgEQAHgDAIgBQAOAAAJAKQAHAJAAAJQAAAPgPAIQAJACAGAFQAFAGAAALQAAANgKAKQgKAKgPAAQgNABgKgJg",
      );
    this.shape_25.setTransform(52.3, 419.6);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAqQgJgMAAgeQAAgdAKgOQAJgKAOgBQAPAAAJAMQAKANAAAdQAAAegKANQgJALgPAAQgOAAgKgMgAgFgiQgDADgCAFQgCAJAAARQAAATACAGQACAHADADQADACACAAQADAAADgCQADgDACgGQACgHAAgTQAAgRgCgIQgCgGgDgDQgDgCgDAAQgCAAgDACg",
      );
    this.shape_26.setTransform(64.8, 482.6);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
    this.shape_27.setTransform(58.7, 486.9);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgjA1QACgLAGgJQAFgJASgRQAMgLADgFQAEgFAAgHQAAgHgEgEQgDgDgHAAQgEAAgEADQgEAFgBAJIgUgCQACgSAJgHQAKgHANgBQAPAAAKAJQAJAJAAAMQAAAIgDAGQgDAHgFAFQgEAFgKAJIgLALIgDAHIAnAAIAAASg",
      );
    this.shape_28.setTransform(52.2, 482.5);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAkAnIAAgqQAAgMgCgDQgDgFgGAAQgEAAgEADQgEADgBAFQgCAFAAAJIAAAlIgSAAIAAgoQAAgMgCgDQgBgDgCgCQgCgCgEAAQgFAAgEADQgEADgBAEQgCAFAAAJIAAAmIgVAAIAAhMIATAAIAAALQALgMAOAAQAHAAAFADQAEADAEAGQAFgGAGgDQAGgDAGAAQAJAAAGADQAGAEADAGQACAFAAAMIAAAvg",
      );
    this.shape_29.setTransform(67.5, 611);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAqQgJgMAAgeQAAgdAKgNQAJgMAOAAQAPAAAJAMQAKANAAAdQAAAegKANQgJAMgPAAQgOAAgKgNgAgFgiQgDACgCAGQgCAJAAARQAAATACAGQACAIADACQADADACAAQADAAADgDQADgCACgHQACgHAAgTQAAgSgCgGQgCgIgDgCQgDgCgDAAQgCAAgDACg",
      );
    this.shape_30.setTransform(52.3, 609.7);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYArQgJgNAAgeQAAgdAKgOQAJgLAOABQAPAAAJALQAKANAAAdQAAAegKAOQgJALgPgBQgOABgKgMgAgFgiQgDADgCAFQgCAJAAARQAAASACAIQACAGADADQADADACgBQADABADgDQADgDACgFQACgJAAgSQAAgRgCgIQgCgGgDgDQgDgCgDAAQgCAAgDACg",
      );
    this.shape_31.setTransform(64.8, 546.3);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
    this.shape_32.setTransform(58.7, 550.6);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#FFFFFF")
      .s()
      .p("AACA2IAAhMQgJALgPAEIAAgSQAIgDAJgHQAIgHAEgKIAQAAIAABqg");
    this.shape_33.setTransform(51.8, 546.2);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f()
      .s("#FFFFFF")
      .ss(2, 2, 0, 3)
      .p(
        "AlH4pIHnAAEgCDgijIEzAAAiDuiIEzAAAlHkoIHnAAAiDFPIEzAAAlHPJIHnAAAiDY7IEzAAEgFHAi1IHnAAAifdzIHnAAEgCfgnoIHnAAAif9rIHnAAAifz1IHnAAAifAKIHnAAAifpqIHnAAAifKHIHnAAAifT9IHnAAEgCfAnpIHnAA",
      );
    this.shape_34.setTransform(7, 356.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-26.9, 92.9, 115.4, 527.3);

  (lib.Symbol2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EhAWADZIAAmxMBneAAAQBkAAAABkIAADpQAABkhkAAgEA9VACdQAxhFAAhaQAAhfg3hKIDIAAIAAFIgEA0HACdQAxhFAAhaQAAhfg3hKICEAAQg4BJAABgQAABaAyBFgEArmACdQhkAAAAhkIAAiAQAAhkBkAAIBRAAQg4BJAABgQAABaAyBFg",
      );
    this.shape.setTransform(515.3, 21.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(103.3, 0, 824, 43.5);

  (lib.Symbol2_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AtKDXQgsAAAAgzIAAlHQAAgzAsAAIaWAAQArAAAAAzIAAFHQAAAzgrAAg");
    this.shape.setTransform(103, 21.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(14.3, 0, 177.5, 43);

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AF+ELQgWAAAAgXIAAjOQAAgXAXAAIBPAAQAXAAAAAXIAAA2IgmAAIAAgtIgxAAIAAC7IAxAAIAAhGIgcAAIAAggIBCAAIAABwQAAAXgXAAgAEpELIg9ifQADAMAAAGIAACNIglAAIAAj8IAhAAIA8CbQgCgMAAgGIAAiJIAlAAIAAD8gACFELIAAj8IAmAAIAAD8gAgDELIAAgUIBFjGIhBAAIAAgiIBuAAIAAAVIhHDFIBHAAIAAAigAg1ELIgHgwIgvAAIgIAwIglAAIAAAAIAxj8IAnAAIAxD8gAhmC7IAkAAIgShygAjRELIAAh9IACgbIghCBIgTAAIghiBQADASAAAJIAAB9IglAAIAAj8IAkAAIAoCLIABAMIABgMIAniLIAkAAIAAD8gAmAELIgIgwIgvAAIgIAwIglAAIAAAAIAxj8IAoAAIAwD8gAmyC7IAlAAIgShygABBhLQgNAAAAgOIAAhbQAAgOANAAIAnAAQAOAAAAAOIAAArIgGAFIgtAAIAAArIAjAAIAAgVIAQAAIAAAVQAAAOgOAAgABDiRIAjAAIAAgjIgjAAgAAJhLIAAhoIgiAAIAABoIgQAAIAAi/IAQAAIAABMIAUgDIARgCQANAAAAAOIAABqgAhphLIAAiwIgeAAIAAgPIBMAAIAAAPIgdAAIAACwg",
      );
    this.shape.setTransform(48.5, 26.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 97.1, 53.5);

  (lib.starTOP = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#005D8B")
      .s()
      .p("AAAAmIgsAfIAQg0IgsggIA3gBIARg0IASA0IA3ABIgsAgIAQA0g");
    this.shape.setTransform(-0.4, -0.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#00121B")
      .s()
      .p("AAAAmIgsAfIAQg1IgrgfIA2gBIARg0IASA0IA2ABIgrAfIAQA1g");
    this.shape_1.setTransform(0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-7.7, -7.4, 15.5, 14.9);

  (lib.star = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3979A6")
      .s()
      .p("AAAAmIgsAfIAQg0IgsggIA3gBIARg0IASA0IA3ABIgsAgIAQA0g");
    this.shape.setTransform(-0.4, -0.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#01344E")
      .s()
      .p("AAAAmIgsAfIAQg1IgrgfIA2gBIARg0IASA0IA2ABIgrAfIAQA1g");
    this.shape_1.setTransform(0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-7.7, -7.4, 15.5, 14.9);

  (lib.sky = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // cloud
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#770101", "#540000"], [0, 1], 11.5, -220.3, 11.5, 401.8)
      .s()
      .p("Eg5kAtcMAAAha3MBzJAAAMAAABa3g");
    this.shape.setTransform(398.5, 299.3);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 8.4, 1001.6, 781.6);

  (lib.mc_stick = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AglRwMAABgmAIA4AAMAAAAmDIAAAvAglRwQAlgaAUAdAgkSgQADgEAEgCQAJgDADAAQAEAAAHAAQAGAAAKAFQAFADAFADQADACACACQAFADADAFQAOAUAAAXQAAAAAAABQgBAWgOAQQgKAMgNAEQgGABgEAAQgEAAgEAAQgJgCgJgJQAEgBAGgCQAGgDAFgFQADgEACgDQAGgLAAgPQAAgTgLgPQgLgLgLABQgMAAgGADQAFgLAFgGIgBgw",
      );
    this.shape.setTransform(4.8, 129.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#353737")
      .s()
      .p(
        "AgIBWQgKgCgIgJIAKgDQAFgDAFgFIAGgHQAFgLAAgPQAAgTgLgNQgLgLgKABQgNAAgGADQAFgLAFgGIgBgwQAlgaAUAdIAAAvIgKgGQgKgFgGAAIgKAAQgDAAgKADQgEACgDAEQADgEAEgCQAKgDADAAIAKAAQAGAAAKAFIAKAGIAFAEQAEADAEAFQAOASAAAXIAAABQAAAWgPAQQgKAMgNAEQgGABgEAAIgHAAg",
      );
    this.shape_1.setTransform(4.8, 250.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#191A1A")
      .s()
      .p("AgcS/MAABgmAIA4AAMAAAAmDQgUgdglAag");
    this.shape_2.setTransform(3.8, 121.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 11.5, 261.5);

  (lib.mc_rightside_ring = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AhXlpQAEACAEADQAhAWAeBRQABABAAABQAAAAAAABQABABAAABQAkBmAHBlQACAaADAaQAACOgcBnQgVBSgeAXQgJAHgJACQgBAAAAAAQgDABgCAAQgFAAgEAAQgCgBgBAAQgDAAgDgBAhXHHQALABALAAQABAAABAAQAFgBAFgBQBBgOAph+QADgHACgHQABgEABgCQAAgDABgDQABgCABgCQAAgBAAgBQAAgCABgCQABgCAAgDQABgCAAgCQAXh8gBiCIAAgFQAAgDgBgBQAAgDAAgDQAAi7g1iGQgvh7hEgKQgCgBgCAAQgBAAgBAA",
      );
    this.shape.setTransform(8.9, 45.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF9B37").s().p("AgKAAIAAgBQAKABALABIgGABIgPgCg");
    this.shape_1.setTransform(1.1, 91.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#CC6600")
      .s()
      .p(
        "AhBHIQgLgBgLgDIAAhXIAGABIADABIAJAAIAFgBIABAAIABABIAIAAQANgBAMgJQAdgXAWhSQAchnAAiOIgFg0QgHhlgmhmIAAgCIAAgBIAAgCQgehRghgWQgMgJgMAAIAAhaIACAAIAEABQBEAKAvB7QA1CGAAC7IAAAGIABAEIAAAFQABCCgXB8IgBAEIgBAFIgBAEIAAACIgCAEIgBAGIgCAGIgFAOQgpB+hBAOIgKACIgCAAgABYAKIgBgEIABAAIAAAEIAAAAg",
      );
    this.shape_2.setTransform(8.9, 45.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgrFuIgBgBQAKgBAIgHQAcgXAXhTQAchnAAiOIgFg0QgHhlglhlIgBgCIgBgCIgBgCQgbhRgigWIgIgFIAAgEQAMAAAMAJQAhAWAcBRIABACIAAACIABACQAmBlAHBlIAFA0QAACOgcBnQgWBTgdAXQgMAJgNAAIgEABIgEgBg",
      );
    this.shape_3.setTransform(7, 45.7);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 19.7, 93.3);

  (lib.mc_righthand = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "ACngqQAMgHAOgbQATgjAAgOQAAgOgJgHQgKgHgNgBQgMAAgIAJQgHAIgRAXQgHAKgCAKQgCAOAGAPAA6gwQAWgLAFgBQAFgCAFgCQAFgCAGgJQADgDADgDQAGgHAJgGACngqQgDgDgCgEQgKgKgQgBQgPgBgKALQgLAKgCAbQAAAIAAAFQABAHACAGQACAGgCAMQgCAKAGAPQABACAAADQABAPgIAHIAAAAQAAAAgBgBQgGgHgCgOQgCgPgCgMQAAgCAAgDQgFgdgEgQQgDgSgMgLQgCgCgCgBQAAgBgBAAQgKgIgMgBQgPAAgNAMQgJANgDARQgCAJACAKQACAHACAGQABAFACANQABABABACQAAACACAGQAAABAAABQABABAAAOQABAAAAADQAAADAFAHQAFAHgDAfQgBgCAAgBQgMgegDgGQgGgIgCgCQgSgWgCgDQgFgGgDgGQgLgPgCgFQgCgFgBgDQgDgGgDgGQgIgTgHgTQgHgTgMgKQgMgJgNAAQgNABgKAJQgGAFgCAIQgJgSgJgMQgJgMgGAAQgHgBgLAGQgJAGgBAMQgBANAAAFQABAFADAMQADAMAEAKQAAACAEANQANADALgFAB9ACQAFABAHACQAHACAGgFQAGgFACgHQADgIABgHQgDgFgCgCQgHgGgMgBQgLAAgKAKQgHAHgBAFQAAAEAFAIQAHAGAEABgAAGgMQABAOAHAIQAIAJAMABQALAAAJgIQAIgJACgPQABgEgBgDQgggUgaAYQAAABAAACgABjBrQALAAADgCQAEgBACgBQAIgDAHACQAJADACAAQAKAAAEgDQAIgGAEgDQAMgNABgQQABgWgCgPQgCgPABgHQgBgGAAgIQAAgKgDgFQgEgKgHgIAhwgRQAJgCAGgHQAHgGgBgOQAAgGgBgEQgdgPgYAQQAAABAAAAQABAKALAOQAMAOAJgBgAiwg7QgJANgSgKQABgRgFgQQALgIAQAHQAHAQgDAPgAgxCPQgVgUgEgFQgFgIgBgBQgMgJgCgKQgEgOgBgEQgDgJgCgCQgCgDgBgCQgHgPAAgCQgBgDgBgDQgCgFgBgDQgEgGgEgHQgCgFgCgGQgHgSgGgOQgEgJgBgIQgCgFABgGQAAgEABgDAjEgNQADAIADAJQABACADAJQADAHABAOQACANADALQADAIAOAPQACADAMAJQACACACABQADACAGAGQACACACADQABACADACQABACAEADQACADALAKQAIAHAKACQACABAWgBQAKgBAGACQADAAADABQACAAAIAFQAGAEAIgBQACAAAOgEQAFgBAFgBQACAAACAAQACAAAWAEQACAAACAAQADABACABQATAGANgGQASgIAAgFQABgFABgEQABgFAAgBQACgKAAgHQAEgSgEgGAgwBlQgNAFgLgGAg4BcQgIAFgRgEQARgDAHgIAAPBxQACAGAFAKQAFAKAIALAAlCVQABABABAAAgbA0QAMAhgKAY",
      );
    this.shape.setTransform(21.2, 15.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F4C9B6")
      .s()
      .p(
        "AAlAvQgHgIgBgQIAAgDQAagWAhASIAAAHQgCARgJAJQgJAIgLAAQgLgBgJgJgAChAqIgMgDQgFgBgHgIQgFgIABgEQAAgFAHgHQAKgIALAAQAMABAHAEQADACACAFIgEAPQgCAHgGAHQgEAEgFAAIgDgBgAhtAFQgMgMgBgKIAAgBQAYgQAdAPIABAKQABAMgHAGQgGAHgJACIgBAAQgJAAgKgNgAi0gTQABgRgFgQQAMgIAPAHQAHAQgDAPQgFAHgIAAQgGAAgIgEg",
      );
    this.shape_1.setTransform(18.9, 11.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#C46942")
      .s()
      .p(
        "AA6CBIgFgCIgDgBIgBABQgJgLgEgKIgHgQQADgfgFgHQgFgHgBgDIAAgDIgBgPIgBgCIgCgIIgBgDIgFgQIgEgNQgDgMACgJQADgRAMgNQAMgMAPAAQAMABAKAIIACABIADADQAMALAEASIAIAtIAAAFIAEAbQACAOAHAHIAAABQADAEAAAGIgCAOIgCARIgBAGIgCAJQgBAFgRAIQgHADgJAAQgHAAgJgDgAAUgmIAAADQAAAQAIAIQAIAJALABQAMAAAIgIQAJgJACgRIAAgHQgOgJgOAAQgQAAgOANgAgTB+IgKgFIgGgBQgVgUgEgFIgGgJQgMgJgDgKIgFgSQgCgJgCgCIgEgFIgGgRIgCgGIgEgIIgHgLIgFgLQgGgUgHgOQgEgJgBgIIAAgGIAAgFIAAgHIAAAHIAAAFIAAAGQABAIAEAJQAHAOAGAUIAFALIAHALIAEAIIACAGIAGARIAEAFQACACACAJIAFASQADAKAMAJIAGAJQAEAFAVAUQgHgCgKABIgYAAQgJgCgJgHIgNgNIgFgFIgDgEIgFgFIgIgIIgFgDIgOgMQgOgPgCgIIgFgYQgCgNgDgGIgEgLIgFgTIABABIAHAAIABAAIAAAAQAGAAAGgCIACgBIgCABQgGACgGAAIAAAAIgBAAIgHAAIgBgBIgFgPIgGgWQgEgMAAgFIAAgSQABgMAKgGQAKgGAHABQAHAAAJAMQAIAMAJASQADgIAGgFQAJgJANgBQAOAAAMAJQALAKAHATIAQAmIAFAMIAEAKQACAFAKANIAJAMIASAZIAHAKQAFAGAMAeIACADIAHAQQAEAKAJALIgYgEIgFAAIgLACIgOAEIgCABQgHAAgFgEgAgMBWQAFgLAAgNQAAgPgHgSQAHASAAAPQAAANgFALgAguBRIAJgCIADgBIgDABIgJACIAAAAIgBAAQgFgBgFgCIAAAAIgBAAIgBgBIABABIABAAIAAAAQAFACAFABIABAAIAAAAgAg2BIQAGAAAEgCIABAAIAAgBIABAAIgBAAIAAABIgBAAQgEACgGAAIgBAAIAAAAIgDAAIgBAAIgGgBIgBAAIgBgBQAQgDAHgIQgHAIgQADIABABIABAAIAGABIABAAIADAAIAAAAIABAAgAiDhOIAAABQAAAKAMAOQALAOAJgBQAJgCAGgHQAHgGAAgOIgCgKQgOgHgMAAQgOAAgMAIgAjChwQAFAQgBARQASAKAJgNQADgPgGgQQgIgDgGAAQgHAAgHAEgABzBGQAAgGgDgEIABAAQAHgHgBgPIAAgFQgHgPACgKQACgKgCgGQgCgGAAgIIAAgOQABgbALgKQALgLAPABQAPABALAKIAEAHQAHAIAFAKQADAFAAAKIAAAQQAAAHACANQACAPgBAWQgCAQgLANIgMAJQgFADgJAAIgMgDQgGgCgJADIgFACQgEACgKAAIACgOgACCg0QgHAHAAAFQgBAEAGAIQAGAIAFABIAMADQAGACAGgFQAGgHADgHIADgPQgCgFgDgCQgGgGgMgBQgMAAgKAKg",
      );
    this.shape_2.setTransform(19.9, 17.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#CA7957")
      .s()
      .p(
        "AgjB2QgHgHgCgOIgEgbIAAgGIgJguQgDgSgMgJIgEgEIAbgLIAKgEQAFgDAGgIIAGgGQAGgIAKgFQACgKAEgKQARgXAHgJQAJgIAMAAQAMABAKAGQAJAIAAAOQAAAOgTAjQgNAagNAIIgEgHQgLgLgPAAQgNgBgLAKQgLALgBAYIAAAPQAAAHACAHQACAGgCAMQgCAKAGAOIABAGQABAPgHAHgAgDgeQgEgKAAgKIABgIIgBAIQAAAKAEAKg",
      );
    this.shape_3.setTransform(34.8, 12);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 44.5, 33.1);

  (lib.mc_leftside_ring = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1AE7B")
      .s()
      .p(
        "AgHD1QgehggBhFQgChFgEgMIAAgDQACifAWhXQAUhYAVgfQgJAggSBVQgSBTAECtQAHCqAWBRQAZBUALAfQgYgegchfg",
      );
    this.shape.setTransform(7.8, 45.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "ABnFuQgBgCgCAAQgIgDgIgFQgGgDgGgFQgNgJgMgZQgEgIgDgIQgDgGgKgVQgvhkgBijQAAhqAOhRQABgGAAgGQACgYAEgVQAPhVAZgWQANgMANgFQAFgCAFgCQACAAADAAQADgBADAAQAEAAADABQABAAABAAQAEABADACABnnGQgCgBgDAAQgmAAgrAaQgpAagmBnQgOAjgHAvQgUBjABCCQABC2A6B3QAAABgBABQAFAJAEAIQAnBUAoAVQAfAQAcAE",
      );
    this.shape_1.setTransform(10.4, 45.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FF9B37")
      .s()
      .p(
        "AAsGzQgogUgnhTIgJgSIABgCQg6h3gBi2QgBiBAUhkQAHgvAOgjQAmhnApgZQArgbAmAAIAAABQgeAFghAVQgpAZgnBnQgNAjgIAvQgUBkABCBQABC2A6B3IAAACIAJASQAmBTAoAUQAWAMAUAGIAAACQgcgDgfgRg",
      );
    this.shape_2.setTransform(10.4, 45.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#9F5000")
      .s()
      .p(
        "AgBEwIgEgLQgwhjgBihQAAhqAPhRIABgLQACgYAEgVQAQhVAXgWQAOgMANgGQAKgEAKAAIABABIgKADQgNAGgNAMQgXAWgRBVQgEAVgCAYIgBALQgOBRAABqQABCkAvBjIANAbIAHARQgZgagCgKg",
      );
    this.shape_3.setTransform(12.5, 43.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#CC6600")
      .s()
      .p(
        "AA1G1QgogUgmhUIgKgSIAAgBQg5h3gBi3QgBiBAUhjQAHgvAOgjQAmhnApgaQAhgUAfgFIgBgBIAGABIAABZIgHABIAAAAIgCAAIgHgBIgHABIgFAAIAAgBQgLAAgKAEQgNAGgNAMQgXAWgRBVQgEAVgCAYIgBALQgOBRAABqQABChAtBjIAEALQAEAKAaAaQAMAYANAJIAMAJQAIAFAIADIADABIAABXQgUgFgWgMg",
      );
    this.shape_4.setTransform(11.2, 45.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#E1AE7B").s().p("AgCAAIAAAAIAFAAIAAABIgFgBg");
    this.shape_5.setTransform(20.4, 9.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-1, -1, 22.8, 93.2);

  (lib.mc_lefthand = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "ACWhCQAJgSAJgMQAJgMAGAAQAHgBALAGQAJAGABAMQABANAAAFQgBAFgDAMQgDAMgEAKQAAACgEANQgDAIgDAJQgBACgDAJQgDAHgBAOQgCANgDALQgDAIgOAPQgCADgMAJQgCACgCABQgDACgGAGQgCACgCADQgBACgDACQgBACgEADQgCADgLAKQgIAHgKACQgCABgWgBQgKgBgGACQgDAAgDABQgCAAgIAFQgGAEgIgBQgCAAgOgEQgFgBgFgBQgCAAgCAAQgCAAgWAEQAIgLAFgKQAFgKACgGQABgCAAgBQAMgeADgGQAGgIACgCQASgWACgDQAFgGADgGQALgPACgFQACgFABgDQADgGADgGQAIgTAHgTQAHgTAMgKQAMgJANAAQANABAKAJQAGAFACAIQABADAAAEQABAGgCAFQgBAIgEAJQgGAOgHASQgCAGgCAFQgEAHgEAGQgBADgCAFQgBADgBADQAAACgHAPQgBACgCADQgCACgDAJQgBAEgEAOQgCAKgMAJQgBABgFAIQgEAFgVAUADQhZQgLgIgQAHQgHAQADAPQAJANASgKQgBgRAFgQgABcguQAAgGABgEQAdgPAYAQQAAABAAAAQgBAKgLAOQgMAOgJgBQgJgCgGgHQgHgGABgOgAg/gTQAggUAaAYQAAABAAACQgBAOgHAIQgIAJgMABQgLAAgJgIQgIgJgCgPQgBgEABgDgAg5gwQAAgBABAAQAKgIAMgBQAPAAANAMQAJANADARQACAJgCAKQgCAHgCAGQgCAFgBANQgBABgBACQAAACgCAGQAAABAAABQgBABAAAOQgBAAAAADQAAADgFAHQgFAHADAfAh+heQAJAGAGAHQADADADADQAGAJAFACQAFACAFACQAFABAWALAhiBTQAAAAABgBQAGgHACgOQACgPACgMQAAgCAAgDQAFgdAEgQQADgSAMgLQACgCACgBAimgqQgMgHgOgbQgTgjAAgOQAAgOAJgHQAKgHANgBQAMAAAIAJQAHAIARAXQAHAKACAKQACAOgGAPAimgqQADgDACgEQAKgKAQgBQAPgBAKALQALAKACAbQAAAIAAAFQgBAHgCAGQgCAGACAMQACAKgGAPQgBACAAADQgBAPAIAHIAAAAAidgKQgDgIgBgHQADgFACgCQAHgGAMgBQALAAAKAKQAHAHABAFQAAAEgFAIQgHAGgEABQgFABgHACQgHACgGgFQgGgFgCgHgAhiBrQgLAAgDgCQgEgBgCgBQgIgDgHACQgJADgCAAQgKAAgEgDQgIgGgEgDQgMgNgBgQQgBgWACgPQACgPgBgHQABgGAAgIQAAgKADgFQAEgKAHgIAgmCWQgDABgCABQgTAGgNgGQgSgIAAgFQgBgFgBgEQgBgFAAgBQgCgKAAgHQgEgSAEgGAgiCWQgCAAgCAAAgkCVQgBABgBAAAAxBlQANAFALgGAA5BcQAIAFARgEQgRgDgHgIAAcA0QgMAhAKAYADFgNQgNADgLgF",
      );
    this.shape.setTransform(21.3, 15.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CA7957")
      .s()
      .p(
        "AAdBhIABgGQAGgOgCgKQgCgMACgGQACgHABgHIAAgPQgCgYgLgLQgKgKgOABQgPAAgKALIgFAHQgMgIgPgaQgSgjgBgOQAAgOAKgIQAKgGANgBQALAAAJAIQAHAJAQAXQAFAKACAKQAJAFAHAIIAGAGQAFAIAGADIAJAEIAbALIgDAEQgMAJgDASIgJAuIAAAGIgEAbQgCAOgGAHIgBABQgIgHABgPgAADgeQAFgKAAgKIgBgIIABAIQAAAKgFAKg",
      );
    this.shape_1.setTransform(7.7, 12);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#C46942")
      .s()
      .p(
        "AhZCBQgRgIgBgFIgCgJIgBgGIgCgRIgCgOQAAgGADgEQgDAEAAAGIACAOQgKAAgEgCIgFgCQgJgDgGACIgMADQgJAAgFgDIgMgJQgLgNgCgQQgBgWACgPQACgNAAgHIAAgQQAAgKADgFQAFgKAHgIIAEgHQALgKAPgBQAPgBALALQALAKABAbIAAAOQAAAIgCAGQgCAGACAKQACAKgHAPIAAAFQgBAPAHAHIABAAIAAgBQAHgHACgOIAEgbIAAgFIAIgtQAEgSAMgLIADgDIACgBQAKgIAMgBQAPAAAMAMQAMANADARQACAJgDAMIgEANIgFAQIgBADIgCAIIgBACIgBAPIAAADQgBADgFAHQgFAHADAfIgHAQQgEAKgJALIgBgBIgDABIgFACQgJADgHAAQgJAAgHgDgAhNgqIAAAHQACARAJAJQAIAIAMAAQALgBAIgJQAIgIAAgQIAAgDQgOgNgQAAQgOAAgOAJgAipg3QgDACgCAFIADAPQADAHAGAHQAGAFAGgCIAMgDQAFgBAGgIQAGgIgBgEQAAgFgHgHQgKgKgMAAQgMABgGAGgAAGCBIgOgEIgLgCIgFAAIgYAEQAJgLAEgKIAHgQIACgDQAMgeAFgGIAHgKIASgZIAJgMQAKgNACgFIAEgKIAFgMIAQgmQAHgTALgKQAMgJAOAAQANABAJAJQAGAFADAIQAJgSAIgMQAJgMAHAAQAHgBAKAGQAKAGABAMIAAASQAAAFgEAMIgGAWIgFAPIgBABIgHAAIgBAAIAAAAQgGAAgGgCIgBAAIAAAAIgBgBIABABIAAAAIABAAQAGACAGAAIAAAAIABAAIAHAAIABgBIgFATIgEALQgDAGgCANIgFAYQgCAIgOAPIgOAMIgFADIgIAIIgFAFIgDAEIgFAFIgNANQgJAHgJACIgYAAQgKgBgHACQAVgUAEgFIAGgJQAMgJADgKIAFgSQACgJACgCIAEgFIAGgRIACgGIAEgIIAHgLIAFgLQAGgUAHgOQAEgJABgIIAAgGIAAgFIAAgHIAAAHIAAAFIAAAGQgBAIgEAJQgHAOgGAUIgFALIgHALIgEAIIgCAGIgGARIgEAFQgCACgCAJIgFASQgDAKgMAJIgGAJQgEAFgVAUIgGABIgKAFQgFAEgHAAIgCgBgAANBWQgFgLAAgNQAAgPAHgSQgHASAAAPQAAANAFALgAAwBRQAFgBAFgCIAAAAIABAAIAAAAIABgBIgBABIAAAAIgBAAIAAAAQgFACgFABIgBAAIAAAAIgJgCIgDgBIADABIAJACIAAAAIABAAgAA4BIIADAAIABAAIAGgBIABAAIABgBQgQgDgHgIQAHAIAQADIgBABIgBAAIgGABIgBAAIgDAAIAAAAIgBAAQgGAAgEgCIgCgBIACABQAEACAGAAIABAAIAAAAgABQhPIgCAKQAAAOAHAGQAGAHAJACQAJABALgOQAMgOAAgKIAAgBQgMgIgOAAQgMAAgOAHgACnhxQgGAQADAPQAJANASgKQgBgRAFgQQgHgEgHAAQgGAAgIADg",
      );
    this.shape_2.setTransform(22.6, 17.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F4C9B6")
      .s()
      .p(
        "AhMAxQgIgJgDgRIAAgHQAhgSAaAWIAAADQgBAQgIAIQgIAJgLABQgMAAgIgIgAisAnQgGgHgCgHIgEgPQACgFADgCQAGgEAMgBQAMAAAKAIQAHAHAAAFQABAEgFAIQgHAIgEABIgNADIgDABQgFAAgEgEgABaASQgJgCgGgHQgHgGABgMIABgKQAdgPAYAQIAAABQgBAKgLAMQgLANgJAAIgBAAgACagWQgDgPAHgQQAPgHAMAIQgFAQABARQgIAEgGAAQgIAAgFgHg",
      );
    this.shape_3.setTransform(23.6, 11.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 44.5, 33.1);

  (lib.juggler = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ArEGaQgPgTgNgtIgghuIAmhEIAtCXIA2gQIirpBIA1gQICrJBQASA9gEAVQgFAWghAKIg2AQQgMADgKAAQgSAAgMgKgAJ7GDIgFkkIgPAHIg6EMIg2gMICXqzIBtAYQAfAHAHAYQAGAXgMA7IgwDaIg8AkIAIFXgAKAgJIBDgsIAiibIg3gMgAnsFWQgOgcgJgwIhwpYIA2gKIBwJYIA2gKIhwpZIA2gKIBwJZQAMA/gGAVQgHAVgiAHIg2AKIgNACQgXAAgOgSgAE2FDIBcrGICRATIgNBnIhagLIgcDYIBmhNIgQB1IhmBLIgWCtIBbALIgOBngAkUEwQgMgegFgxIg1n8QgHhAAJgVQAIgVAhgEIA3gGQAfgDAOAVQAOAUAGA9IAIBRIgwA9IgOiJIg3AGIA1H9IA3gGIgVjPIgTAZIgNh0IBEhUIAnF4QACAggCAwQgFAagmAEIg3AGIgIAAQgbAAgNgUgACLEzIA0rPIA3AEIgtJmIBVAFIgIBpgAg8EYQgJgfgBgxIgLoAQgBhBAKgUQAKgVAhAAIA1gBQAfgBAMAWQAMAVABA9IACBSIg1A5IgDiJIg1ABIAMIAIA1gBIgFjOIgVAUIgDh0IBKhOIAJF6QgCAggFAxQgIAZglABIg1ABIgBAAQghAAgNgYg",
      );
    this.shape.setTransform(8.9, -44);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-75.2, -89.1, 168.4, 87.4);

  (lib.ClipGroup_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      "AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g",
    );
    mask.setTransform(21.6, 21.6);

    // Layer 3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(["#FF0000", "#000000"], [0, 1], 8.3, -9.8, 0, 8.3, -9.8, 37.8)
      .s()
      .p("AjWDXIAAmtIGtAAIAAGtg");
    this.shape.setTransform(21.6, 21.6);

    this.shape.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 43.2, 43.1);

  (lib.Symbol4copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AibC1Qh9AAAAh9IAAhvQAAh9B9AAIE3AAQB9AAAAB9IAABvQAAB9h9AAg");
    this.shape.setTransform(363.3, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AibC1Qh9AAAAh9IAAhvQAAh9B9AAIE3AAQB9AAAAB9IAABvQAAB9h9AAg");
    this.shape_1.setTransform(124, 0);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AibC1Qh9AAAAh9IAAhvQAAh9B9AAIE3AAQB9AAAAB9IAABvQAAB9h9AAg");
    this.shape_2.setTransform(-117.1, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-145.2, -18.1, 536.7, 36.3);

  (lib.hand4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "ACYAGQgHgMgLgMQgPgRgRgLQgOgJgPgFQgSgHgVgBQg3gEgsAlQgCABgCACQgBAAAAABQgZAWgMAaQgJgdgLgpQgEgPgDgQQgDgMgDgNQgBgCAAgCQAAgBAAAAIAAgBAhdA/QAEgMAGgLQAHgOALgLQAEgFAFgEQADgDADgCQAkgaAsADQARABAPAFQASAGAOAKQAKAHAJAKQAJALAHAMQAFAJADAJQACgJADgJQAFgQAFgSACnjJQACB1gRBaACJA6QAHAWgCAZQgBAYgKAUQgKAWgUARQgmAhgygEQgwgDghgmQgLgNgHgOQgOgcADghQABgNADgMAifjIQAugRAtAAQACAAADAAQAhABAeALIAAAAAiOh3IAAgBQgBAAAAgBQgNglgLgoQAKAoANAlQAAABABAAQABADABACAiOh3QABACABADQAAADAAACAiOh3QAAACABACAhrARQADAMAEALQADAMAEAL",
      );
    this.shape.setTransform(160.3, 42.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#791121")
      .s()
      .p(
        "AAAABIAAgBIAAAAIAAgDIABADIAAAGIgBgFgAAAgDIAAgCIAAAAIAAACIAAAAIAAADIAAgDgAAAgDIAAAAg",
      );
    this.shape_1.setTransform(146, 31.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgJAtIgIgfIgGgXIAAgFIgCgFIAAgBIAAgBQgOglgKgoIAHgCQAtgRAsAAIgEAQQgUBVAbBPIgEADIgBABQgZAWgMAdIgRhJg",
      );
    this.shape_2.setTransform(148.6, 32.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#C46942")
      .s()
      .p(
        "AgHB4QgygDghgmQgLgNgHgOQgOgcADgfQABgNADgMQAEgMAGgLQAHgOALgLIAJgJIAGgFQAkgcAsADQARABAPAFQASAGAOAMQAKAHAJAKQAJALAHAMQAFAJADAJQAHAWgCAXQgBAYgKAUQgKAWgUARQgjAegsAAIgHgBg",
      );
    this.shape_3.setTransform(162.5, 52.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#2B2B2B")
      .s()
      .p(
        "ABbBWQgPgRgRgLQgOgJgPgGQgSgGgTgCQg5gEgsAlQgbhPAUhUIAEgQIAFAAQAhABAgAKIAAAAQBNgCBYAHQACBzgRBcQgHgOgLgMg",
      );
    this.shape_4.setTransform(164.6, 32.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#EBD196")
      .s()
      .p(
        "Ah6ArIgHgWQAMgbAZgWIABgBIAEgDQAsglA3AEQAVABASAHQAPAGAOAJQARALAPAQQALANAHAMIgKAhIgFATQgDgKgFgJQgHgLgJgLQgJgKgKgIQgOgJgSgGQgPgGgRgBQgsgDgkAaIgGAFIgJAKQgLALgHANQgGALgEAMIgHgXg",
      );
    this.shape_5.setTransform(162.5, 42.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "ACmjBQgCgCgCgDQgEgBgEgCQgTgHgRgDQgLgCgMAAQgWgBgUAGQgSAFgJAFQgGACgBADAiVADIgSi8QABAAAAgFAiVADQAIgMALgMQAOgRASgLQANgJAQgFQASgHAVgBQA5gEAuAoQAaAWAMAbQgCAGgBAGQgGATgFAPQADAMABANQADAhgOAcQgHAOgLANQgiAmgvADQgyAEgmghQgUgRgKgWQgKgUgCgYQgCgZAIgWQgEgOgFgPQgDgLgEgMgAiFA3QAFgPAKgOQAEgGAFgGQAIgKAKgFQAPgMARgGQAPgFASgBQAvgEAnAgQAMAKAIANQALAPAGATACQhsQgBABAAABQAAgBABAAgACoi+QgJAdgLAnQgDAHgBAHACPhqQgSBIgOAw",
      );
    this.shape_6.setTransform(23.1, 43.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#AA182F").s().p("AAAAAIAAAAIAAAAIAAAAg");
    this.shape_7.setTransform(37.4, 32.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#C46942")
      .s()
      .p(
        "AhOBbQgUgRgKgWQgKgUgBgYQgCgXAHgWQAGgPAJgOIAJgMQAJgKAKgHQAOgMASgGQAPgFARgBQAwgEAmAiQAMAKAJANQAKAPAGATQADAMABANQADAfgOAcQgHAOgLANQghAmgyADIgIABQgrAAgjgeg",
      );
    this.shape_8.setTransform(21.1, 52.5);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#EBD196")
      .s()
      .p(
        "ABkAgQgJgMgMgLQgmgfgwADQgRABgPAGQgSAGgOAJQgKAIgJAKIgJALQgJAOgGAQIgIgeIgHgWQAHgMALgNQAPgQARgLQAOgJAPgGQASgHAVgBQA5gEAuAoQAaAXAMAbIgDALIgLAiQgGgSgKgQg",
      );
    this.shape_9.setTransform(21.1, 42.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p("AghhbIABgFIAzAAQgCARAAARIAIAyIAJA3QgSALgOARQgJAMgIAOg");
    this.shape_10.setTransform(9.7, 33.7);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#2B2B2B")
      .s()
      .p(
        "AAvA/Qgugog5AEQgVABgSAHQgPAFgOAJIgJg3IgIgyQAAgRACgRQBTgGA4gCQgDACgCADQACgDADgCQAJgFASgFQAUgGAWABQAMAAALACQARADATAHIAIADIAEAFIACADIgUBEIgEAOIgBACQgRBGgPAyQgMgdgagWg",
      );
    this.shape_11.setTransform(25.6, 33.1);

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
        .to({ state: [] }, 1)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(5.3, 20, 172.9, 45.7);

  (lib.Bow = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAXgjQAAgBABgBQAAgBAAgBQAEgHAAAAQABgBAAgBQACgCABgCQACgCADgCQACgCACgBQACgBABgBQADgBACgCQADgBACgBIAAAAQAEgCADgBQAGgDADgBQABAAACAAQAEgCACgBQABgBABAAQAAAAACAAQABAAABgBIAAABQABgBABgBQAFgBADgCQACgBACAAQABgBADgBQACgCAEgBQADgBACgCQACAAABAAQABAAABAAQACABACAAQABAAABABQACABAAACQAEAJgBABIAAACIABADIAAgBQABADAAACQABAFAAABIAAAAQgBAIABACIAAACQAAABAAAAQAAADABACQAAACAAABQABACgBADQAAABABABQAAAEABACQAAADAAABQAAAAAAABQABABAAACQAAAAAAABQAAACABADQAAAFABAEQAAAEAAACQAAAFgBADQAAABAAAAQgCAGAAADQAAAAAAABQgBACAAABQgBADAAAEQgCAHAAACIAAABQAAAAgBAAQAAAEAAADQAAABAAAAQAAABAAABQgBABAAACQAAAEAAACQgBAGAAAEQAAAFAAABQAAACAAADQgBADgBACQgBACAAACQgBACgBAAQAAABgBgBQgBAAgEgDQgCgBgCgBQgBgBgBgBQgBAAgBgBQgBAAAAAAIAAgBQgBgBgCgBIgBAAQAAAAAAAAQAAgBgBAAQgBgBgBgBQgCAAgCgBQgBgBgCgBIgBAAQAAgBgBAAQAAAAgBgBQgBAAAAgBIAAAAQgBAAAAAAQgEgDgFgCQgHgEgHgEQgCgCgCgBIgBAAIAAAAQgCgCgCgCQgEgCgEgCIAAAAQgFgEgFgDQgBgBAAAAQgEgDgFgDIAAgBQgBAAgBgBQgBgBgBgBQABAAABgCQAAgBAAgCQAAAAABgBQABgCAAgHQAAgBAAgCQAAgCABgBQgBgDAAgCQABgBAAgCAAXgjIAAAAQABAAAAABQABABAAACQACADAAADQABACAAACQAAABABACQAAAAAAABQAAACAAADQABAEAAACQAAACAAACQAAABABABQAAAAAAAAAgcgBIAAgBQAAAAAAgBQAAgBABgBIAAgBQAAAAAAgBQAAgCAAgEQABgIAAgFQAAAAAAgBQABgCABgDQABgBAAgBQABgBAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQABgBACABIAAAAQABAAABAAQABABAAAAIAAAAQACABADAAQAAAAABAAQACABAEgBQAAAAABgBQABAAAAgBQAAAAABAAQACgBACABQACAAADACIABAAQABACADgBQAAAAAEgBIABAAQABAAAAAAQABAAABABAhFhGQACACABABQAEABADABQACABACAAIAGACQACAAABABQAAAAABAAIABABIAIAHQAEADAEAGQABABAAAAQABABAAABQABABABAAQABABAAAAQABACAAAAAgcAAQAAAAAAAAIAAAAAgbABIAAABQAAACAAABQAAABAAAAQAAACAAAAIAAABQAAACAAACQAAACAAACIAAAAIAAABQAAAAABABQAAACAAABQAAABAAABIAAABQAAABAAABQAAABABABQABAAAAAAQAAACABABQAAAAABABQgDAFgDAEIAAABIgBAAQgDAEgCACQgBABgBABQgFADgDADQgBAAAAABQgBAAAAAAIgBAAQgBABgDABQAAABgBAAQAAAAgDABIAAAAQgDACgFACQgDACgDABQgBAAAAABQgEABgDACQgDABgEACQgDABgCABIgBAAIAAAAIgBAAQABABgBAAQgBABgCABQgEABgEAEIgBAAQAAAAgBABIgBAAQAAAAAAAAQgDACgEAAIAAAAQgBABgBAAQgCAAgCgDQgBgCgBgCQAAgBAAgBQAAgBgBgBIgBAAQAAgDgBgCQAAgBAAgBQgBgDAAgGQAAgCAAgCQAAgDAAgHQAAgBAAgCQgBgDAAgDQAAgBAAgBQgBgDgBgEQAAAAAAAAQAAgDgBgFIAAAAQgBgBAAgDQgBgBAAgBQgBgCAAgBQgBgCAAgCIAAgBQAAgBgBgCQAAAAAAgBQgBgCAAgDQgBAAAAgBQgBgDgBgFQAAgCAAgCQAAAAAAgBQAAAAAAgBIAAAAQAAgCAAgCQgBgCAAgBIAAgBQAAgCABgDQABgDAAgBQABgCABgBIAAgBQAAgBAAAAIABgBIAAgDQAAAAABgBQABgCADgDQAAgBgBgBQACgDACgGQgBgBABgCQAAgBAAAAQABgCABgDQAAgCABgDQAAgBAAAAQABgCABgEQAAgCABgDQABAAAAgBQABgCACgCQABgBACAAQACgBAGACQAAAAAAAAQABAAAAAAQAEABAGAEQAAAAABABQAGAEAFACQABAAAAAAQADACADADQABAAACABIABAAQAAABABAAIgCgBAgWAhQAAABACAAQABAAACAAQAAAAAAAAQABAAABAAQAAgBABAAQABAAADgBQACAAABABQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAQAAAAABABQABAAAEgBIABAAQACgBACgBQABAAACABQABAAAAAAQACAAACgBQABAAADAAQABABACgBQABgBABgB",
      );
    this.shape.setTransform(13.9, 9.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#952123")
      .s()
      .p("AAAAAIAAAAIAAgBIACAAIAAAAIgDAEQAAgBAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAg");
    this.shape_1.setTransform(10.6, 13.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#820304")
      .s()
      .p(
        "AgCAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAIABAAIACABIAAAAIgBAAIAAAAIgCAAIgBAAIAAAAIgDACIABgCg",
      );
    this.shape_2.setTransform(10.5, 13.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#F9CBCB").s().p("AAAAAIAAAAIAAAAIAAAAg");
    this.shape_3.setTransform(13.3, 12.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#961B1D")
      .s()
      .p(
        "AgCAAIgCAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABAAIADAAIACAAIAAAAIgBAAIgFABIgBgBg",
      );
    this.shape_4.setTransform(14, 12.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#9B2027")
      .s()
      .p("AAEACIgDgCIgGgCIAAAAIACAAIABAAIAAABQAJAAgBADIgBABIgBgBg");
    this.shape_5.setTransform(19.6, 14.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#7A0C13")
      .s()
      .p("AABADIAAAAIgHgEIAAAAIACAAIABgBIAJADIABABIgBABIgFAAg");
    this.shape_6.setTransform(17.8, 13);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#8D0A12")
      .s()
      .p(
        "AAFAHIgBAAIgJgHIAAAAIAAAAIAEAAIABAAIAAAAIAAAAIAAAAIAHADIABgBIAIADIAAABIgCAAIgHABIgCAAgAgPgGIABAAIAAAAg",
      );
    this.shape_7.setTransform(18.6, 13.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#800202")
      .s()
      .p("AgCAAIAAgBQADAAACABIAAABIgBABIgEgCg");
    this.shape_8.setTransform(19, 13.5);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#AA080B")
      .s()
      .p(
        "AAAACIgFgBIAAgBIgBAAIADAAIACAAQADABABgBIABgBQABAAAAAAQABAAAAAAQAAAAAAABQABAAgBAAIgBAAIgBAAQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAg",
      );
    this.shape_9.setTransform(3.3, 17.3);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#980705")
      .s()
      .p(
        "AgBACIgBgBIgBgBQACAAADgBIABAAIAAABIABAAIAAAAIgBAAQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIgBAAg",
      );
    this.shape_10.setTransform(3.3, 17.1);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#B3070B")
      .s()
      .p(
        "AAAABIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgBIABAAIAAABIACAAIAAAAIAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgBgBg",
      );
    this.shape_11.setTransform(4, 17.1);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#A40B0F")
      .s()
      .p(
        "AADACQAAgBgBAAQAAAAAAgBQgBAAAAABQgBAAAAAAIAAgBIgBAAIgBAAIgCAAQADgCACACIABAAIABAAIABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQgBAAgBABIABAAIAAAAIAAABIgBAAIAAAAg",
      );
    this.shape_12.setTransform(4.3, 16.9);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#BC1B21")
      .s()
      .p(
        "AgLADIgCgDIAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQgBgBAAAAIAAgCIACAAIAAACIAAACQACAAAGADIABAAIACABIAAAAIAAgBIgBgBIACgBIABAAQAAAAABAAQABgBAAAAQABAAAAgBQAAgBAAgBIABAAIABACQAFABgCgDIAAAAQABgBABAAQAAAAABAAQAAAAAAABQABAAAAAAIAAABIgDACQgEABgEACIgBAAIgBABIgBAAIAAAAIgFACIAAAAIgCABQgCAAgCgDg",
      );
    this.shape_13.setTransform(3.2, 17.7);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#BA060E")
      .s()
      .p(
        "AADAHIgCAAIgBgBQgDgFgDABIAAgCIAAAAIABgFIAAgBIAFAGIAAAAIAAAAIAAACIAGAAIABAAIAAABIgFADIADAAIAAABIgCAAg",
      );
    this.shape_14.setTransform(2.7, 17.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#BC0E15")
      .s()
      .p(
        "AAAAHIAAgCQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAgGIAAgCQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAABIAAACIAAAAIAAAAIABAAIABABIgBABIgBAFIAAAAg",
      );
    this.shape_15.setTransform(1.9, 16.3);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#B7080F")
      .s()
      .p(
        "AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgCIABABIAAACIAAACIgBAAIAAABIAAgCg",
      );
    this.shape_16.setTransform(2, 16);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#A90106")
      .s()
      .p("AAAAFIAAgBQAAgEAAAAIAAgEQAAAAAAAAIAAABIAAACQABABAAAEIAAABIgBAAg");
    this.shape_17.setTransform(2, 15.1);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#B2030B")
      .s()
      .p(
        "AAAAIQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAgMIAAgBIAAABIAAAAIAAABIAAACQAAABAAAAIAAADQABAAgBAEIABABIAAACQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIAAgCg",
      );
    this.shape_18.setTransform(1.8, 15);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#B21219")
      .s()
      .p(
        "AAAAPIAAAAIAAgEIAAgDQgBgCAAgGIAAgCIAAgKIAAgEIAAAAIAAACIABAAIAAgCIAAgBIAAABIAAACIAAABIAAANIAAABIAAAIIAAABQABAAAAAAQABAAAAAAQAAABAAAAQAAABgBABIAAABIAAABQABABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBgDg",
      );
    this.shape_19.setTransform(1.6, 15.6);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#AE0208")
      .s()
      .p(
        "AAAAEIAAgBIAAgBIAAgCIgBgCIAAgBIABAAIABAAIAAABQgBAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIAAABg",
      );
    this.shape_20.setTransform(1.7, 13.7);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#9B2729")
      .s()
      .p(
        "AAAAHIAAgGIAAgBIAAgGIAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABIAAACIAAAAIAAAHg",
      );
    this.shape_21.setTransform(1.3, 13.2);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#AC161B")
      .s()
      .p("AAAADIAAgFIAAgCIAAAAIAAACIAAABIAAABIAAACIAAABIAAACIAAAAIAAgCg");
    this.shape_22.setTransform(1.5, 13.5);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#B9070C")
      .s()
      .p(
        "AgFACIgCAAIAAgBIAAgBIAAAAIAAgBQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABgBQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAIAAgBIAAABIABAAIACAAIAEAAIABAAIAAAAIgBAAIgKACIgCAAg",
      );
    this.shape_23.setTransform(2.4, 13);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#9A0103")
      .s()
      .p(
        "AABAVIgBgBIAAAAIgFgHIAAgCIAAgFIAAgBIAAgCQABgDgDgCIABgBIgBgCIAAgCIAAgBIAAgBQAAgBABgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAAgCIAKgCIABAAIACAAIAAABIgCAAQgMgBADAQIACAJIABABQACAHAJACIAAABIgCABQgEAAgCADIABAAIABABIgCAAg",
      );
    this.shape_24.setTransform(2.7, 15.1);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#AB070E")
      .s()
      .p(
        "AgDAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAIAAAAIADAAIACAAIgBAAQgEAAgCABIgBAAIAAgBg",
      );
    this.shape_25.setTransform(3.7, 12.8);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#A40209")
      .s()
      .p(
        "AgFACQAFgDAEAAIACAAIAAABIgBAAIgFACIAAAAQAAgBgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgCAAg",
      );
    this.shape_26.setTransform(5.2, 16.5);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#AD1B26")
      .s()
      .p("AgBABIgCAAIABgBIACgBIABAAIADABIAAAAIgFACg");
    this.shape_27.setTransform(5.6, 16.7);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#B51E29")
      .s()
      .p(
        "AgBACIAAgBIgBAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAgBAAIgBAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAABIACAAIgBAAIACAAIAAAAIgDACg",
      );
    this.shape_28.setTransform(5, 16.9);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#AC191E")
      .s()
      .p("AgCADIgCgCIAAgBIAHgCIAAAAIABAAIAAABIABABIgBAAIgGADg");
    this.shape_29.setTransform(6.4, 16.2);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#A11719")
      .s()
      .p("AgCAAIAAAAQACgCACAAIAAABIgBABIABAAIABAAIgEACIgBgCg");
    this.shape_30.setTransform(7.2, 15.9);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#A52F3B")
      .s()
      .p("AgCABIgBAAIAAgBQADgBADABIABAAIgGABg");
    this.shape_31.setTransform(7.8, 15.7);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#730001")
      .s()
      .p(
        "AgQANIgHgNQgCgKAHgCIABAAIAAABQgEADACAHQAHAUAXgMIAIgDIAFgCIgBABIgEACQgGAEgHACIgBABQgHABgNAAIgBAAg",
      );
    this.shape_32.setTransform(4.8, 14.7);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#BC0D14")
      .s()
      .p("AgJABIgDAAQAJgCAPABIABAAIABAAIgBAAQgNAAgGABIgBAAIgCAAg");
    this.shape_33.setTransform(5.1, 12.5);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f("#A7060B").s().p("AAJAAIABAAIAAAAIgTAAQAIAAAKAAg");
    this.shape_34.setTransform(5.4, 12.6);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#88090F")
      .s()
      .p(
        "AAAACIgBgCIAAAAIABAAIABgBIABAAIAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQABABAAABIgBAAg",
      );
    this.shape_35.setTransform(10.3, 14);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#850408")
      .s()
      .p("AAFgCIABgBIAAACQgFADgHACQAGgFAFgBg");
    this.shape_36.setTransform(9.2, 14.6);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#870101")
      .s()
      .p(
        "AgMATIgCAAIgBAAIAAgBIABgBQgLgDgDgGIAAgCIgCgJQgEgQAPACIABgBIAAACIgEABIgBAAQgHACACAKIAHANIABAAQANAAAHgBIABgBQAHgCAGgEIAEgCIABAAIAMAAIABAAIAAABIgCADIgBABIAAAAQgGAAgCABIAAgBQgEAAgCADIgBAAIAAABIgJADIgCAAQgEAAgFAFIgBABQgEgDgDADIADAAIAAABIgBAAg",
      );
    this.shape_37.setTransform(5.3, 15);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#97262F")
      .s()
      .p(
        "AgHADIAAgBQAHgBAFgEIAAgBIABgBIAAgBIADACIABAAIgCACIgIAEIAAABIAAAAIgBAAIgEADIgBAAIgDABIACgEg",
      );
    this.shape_38.setTransform(9.4, 14.8);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#4E0101")
      .s()
      .p(
        "AgdAKQgBgGgDgEQAJgNAYADIABAAQgEADgEgBQgPgCgGAKIAQAGIABAAIANgGQAJgBAJAAIAAAAIAKgDIADgCIABAAIAAABIgBABQgNAGgSAFQgNAEgSABIAAgCg",
      );
    this.shape_39.setTransform(6.4, 14.2);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#3E0001")
      .s()
      .p(
        "AgTAKIgPgHQAFgJAPADQAEABAGgDQATgHAVADIgBACQgCAEgGABIAAABIgDABIgLACIAAgBQgIABgIACIgOAHIgCgBg",
      );
    this.shape_40.setTransform(7.1, 13.7);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#C20C0F").s().p("AAEAAIgIAAQACAAAGAAIABAAIAAAAg");
    this.shape_41.setTransform(7, 12.3);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#AB060D")
      .s()
      .p(
        "AgEACIgCAAQAAgCAEAAIAHgBIACABIAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCAAQgDAAgDACIgBAAg",
      );
    this.shape_42.setTransform(7.4, 11.4);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#C30D18")
      .s()
      .p("AgGAAIAIAAIABAAIADAAIABAAIAAAAIgNAAIAAAAg");
    this.shape_43.setTransform(6.2, 11.7);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#550000")
      .s()
      .p("AgDAAQADgDADADIABABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgCAAgDgCg");
    this.shape_44.setTransform(9.5, 6.8);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#680000")
      .s()
      .p(
        "AgOAJQgNgDgFgJQANgJATAGIAOACIASADQgSABgOgEQgTgEgGAKQAHACAEAFIABABIgBgBg",
      );
    this.shape_45.setTransform(6.1, 9.9);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f("#340100").s().p("AgCAAQAMAAgMAAg");
    this.shape_46.setTransform(5.4, 10.6);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#DC0D14")
      .s()
      .p("AAAACIAAAAIAAAAIAAgCIAAgBQABABAAACg");
    this.shape_47.setTransform(2.1, 12.1);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#D01217")
      .s()
      .p(
        "AAAAEIgBgBIAAgCIAAgEIAAgBIABAAIAAABIAAABIAAACIABABIABAAIgBABIAAABIAAABIABAAIAAABIgCAAIAAgBg",
      );
    this.shape_48.setTransform(1.9, 12.2);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#D90C1B")
      .s()
      .p(
        "AAAAFIAAgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIAAgFIAAgBIABABIAAAAIAAABIAAAFIABABIABACIgBABIAAAAIgBgBg",
      );
    this.shape_49.setTransform(1.6, 12.2);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#D20F21")
      .s()
      .p(
        "AAAAHQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAIAAgJIAAgCQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIAAACIAAABIAAAFQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAACIAAABIAAABIgBABIAAgCg",
      );
    this.shape_50.setTransform(1.4, 12.1);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#BA090E")
      .s()
      .p(
        "AACAHIgEgCQgBgGACgEIAAgBQABABAAAEIAAAAIAAABIAAABQACABABAEIAAABIgBAAg",
      );
    this.shape_51.setTransform(1.3, 9.4);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#B71D28")
      .s()
      .p(
        "AAEAUIAAAAIgBgIIAAAAIgCgDIgBgDIAAgDIAAgDIAAAAIAAgCIgBgCIABACIgBgBIAAgBIAAgFIgBgCIgCgIIADAEIABAAIgBABIABADQACAEgBAHIAAAAIAEAHIAAABIAAABIAAALIgBAAg",
      );
    this.shape_52.setTransform(0.7, 10.4);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#CC0B12")
      .s()
      .p(
        "AgFAXIgBAAIAAgBIAAgBIABgBIAAAAQAAgFgDgBIgCgBIgBAAIgBgBIgBgBIAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIAAgBIgEgHIAAAAQABgHgEgEIgBgCIABgCIAAgBIAAgBQACgJACACIABABIABAAIACgBIAAABIAAABQgDACABAEIAAACQgDAEACAIIAFACIABAAIAAAAQAHARAagEIABgBQgLAHgMgBIAAAAQAAABgEADIAEABIAAABIgCAAIgDABIAAgCg",
      );
    this.shape_53.setTransform(2.9, 10.3);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#E00C13")
      .s()
      .p("AgBgDIAAgBQAEgGAAAKIgBABIgBgBQgBAAgBAHIAAgKg");
    this.shape_54.setTransform(0.8, 7.7);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics.f("#E22C30").s().p("AAAgBIAAAAIAAABIAAACIAAgDg");
    this.shape_55.setTransform(0.1, 7.4);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#D31118")
      .s()
      .p(
        "AABAJIgBgFIAAgEIAAAAIAAAAIAAAAIAAgDIAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIAAAAIAAACIABABIABAAIAAABIAAAKIAAABIAAACg",
      );
    this.shape_56.setTransform(0.3, 7.8);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#D60E14")
      .s()
      .p(
        "AAAAIIAAgCQAAgJgEAEIgCAAIAAgBIAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBIABAAQACgGABAEIAAABQACAEAFACQgEgBgDAHg",
      );
    this.shape_57.setTransform(1.1, 7);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#B2050B")
      .s()
      .p(
        "AgPADIAAgBIAAgBQgBgCgCgCIAAgBIAAgCQAAgJALgBIABAAIAAABQgKAAABALQACACAAAEIAAABQALAMAVAAIAAABIgBABIgLAAQgRAAgFgOg",
      );
    this.shape_58.setTransform(3.3, 9.9);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#900001")
      .s()
      .p(
        "AgkAAQAAgNANgBIAAgBQAaACAYAHIABAAQAEABAEACIABAAIAAABIgBAAIg6gJIAAABQgJABgCAHIANAMIABABIAOADIACAAIAAABIgCABQgXgCgIgOg",
      );
    this.shape_59.setTransform(5.7, 9.8);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#7D0001")
      .s()
      .p(
        "AgYAKIAAgBIgOgNQACgGAJgBIAAgBIA6AJIABAAQADACAEAAIAAABIgBgBIgGABIgSgEIgOgCQgTgGgNAJQAFAKAMACIACABIAAABIAFAAIAAABIgBABIgPgDg",
      );
    this.shape_60.setTransform(6.1, 9.9);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#A30207")
      .s()
      .p(
        "AAOATIgKAAIgBAAIgBAAIgBgBQgUAAgLgMIAAgBQAAgFgDgBQgBgLALAAIAAgBQAFgDAIgCIABAAQAVAFAWAIIAAABIgBAAQgYgHgagCIAAABQgNABAAALQAIAQAWABIABAAQAJACAIgCIACAAQgFAAAAACIgBAAg",
      );
    this.shape_61.setTransform(5, 9.6);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#BB0910")
      .s()
      .p(
        "AApAKIgCAAQgDgBgEgBIAAAAQgWgIgWgEIgBAAQgHACgGACIgBAAQgKAAgBAJIgBAAQAAgEgCgBQAAgEADAAIAAgBQAIABAGgFQAEgDAIgBQAcAIAaALIAAAAIgBAAg",
      );
    this.shape_62.setTransform(5.3, 8.2);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#C00B12")
      .s()
      .p("AAFAAIgKAAIAAAAQADAAAIAAIAAAAIgBAAg");
    this.shape_63.setTransform(3.8, 6.1);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#A0030F")
      .s()
      .p("AAAAAIAAgBIACABIABAAIgBAAQgCACgCAAIACgCg");
    this.shape_64.setTransform(1.4, 5.7);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#AC060B")
      .s()
      .p(
        "AApAOIgEgBIgBgBQgMgHgQgEIgBgBQgGgDgHgBIAAgBQgKgCgEABIgBAAIgUABIAAgBIAAgCQACgCAAgDIABAAIAAABIABAAIAAABIgDAEQAEAAABgCIABAAQAFACAJgCIAAgBQAiAHAbAPIABABIAAABIgBAAg",
      );
    this.shape_65.setTransform(5.3, 6.8);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#BF070E")
      .s()
      .p(
        "AgOAQIAAgDIAAgBIABgFIABgEIABgDIAAAAIABAAIAAgBIABgDIAAgBIAEgFIAAgCIAAAAIACgDIABAAIAAABQAAALgEAFIACAAIAAACIAAABIASgBIABAAIAAACIgBAAQgIACgJAAIAAAAQgDgFgCAHIgBAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAg",
      );
    this.shape_66.setTransform(1.6, 5.6);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#9C0003")
      .s()
      .p(
        "AgEAEIAAgBIgDgBIAAAAIAAgBIABgGIABAAIAAABQAAABABAAQAAABAAAAQAAABgBABQAAAAgBAAQADAFALgBIAAAAIAAAAIgIABIgEgBg",
      );
    this.shape_67.setTransform(2.3, 5.2);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#B10303")
      .s()
      .p(
        "AgEAWQAEgHAAgLIAAAAIAAAAIgCACIgBAAIADgHIAAgDIAAgBIAAgFIABgFIAAgBIACgFIACABIgBABIgCAHIgBAHIAAABIAAACIABAGIAAAAIAAAGIgBAAIgBAHIAAAAQAAADgCACIgCAAg",
      );
    this.shape_68.setTransform(1.4, 3.6);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f("#B4282E").s().p("AAAAAIAAAAIAAAAg");
    this.shape_69.setTransform(3.4, 0.2);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#540001")
      .s()
      .p("AgJAAIABgBQAIgFAKAJIgBAAIgFABQgGAAgHgEg");
    this.shape_70.setTransform(4.9, 4.7);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#560001")
      .s()
      .p("AgHABIgBgBQAEgGALAGIACABQgDACgFAAQgDAAgFgCg");
    this.shape_71.setTransform(7.3, 5.7);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#680708")
      .s()
      .p("AAAABIAAAAIgBgBIAAAAIAAAAIABAAIACAAIAAABIgBAAIgBAAIAAAAg");
    this.shape_72.setTransform(17.1, 12.5);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#910E13")
      .s()
      .p(
        "AgKACIAEgCIAAAAQAGgCAIAAIACAAIABABIAAABIAAAAIAAABIgCgBIACgBIgCABIgCABIgDAAIgEAAIgCABIgBAAIgDgBIgEACIAAgBg",
      );
    this.shape_73.setTransform(15.6, 12.4);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#830102")
      .s()
      .p("AgHAAIAOAAIABAAIAAAAIgCAAQgHAAgHABIABgBg");
    this.shape_74.setTransform(17.9, 10.7);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#AD0A10")
      .s()
      .p("AADAAIgHAAIAAAAIAJAAIAAAAIgCAAg");
    this.shape_75.setTransform(17.6, 10.4);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#9A0608")
      .s()
      .p("AAHABIgOAAIAAgBIAAAAIAAAAIAHAAIACAAIAEAAIABAAIABAAIAAABIgBAAg");
    this.shape_76.setTransform(17.9, 10.4);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#78060A")
      .s()
      .p(
        "AAAASIAAgBIAAgDIAAgBIAAAEIAAABgAAAAPIAAgBIgBgBIABgMQAAgEAAgGIAAgDIAAAAQAAgFABAAIAAADIABACIAAADIAAABIgBADIABAEIgBACIAAACIgBAKIAAABIAAADIAAgCg",
      );
    this.shape_77.setTransform(16.8, 10.4);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#AA0D15")
      .s()
      .p("AAAACIAAAAIAAgCIAAgCIABAAIgBAFIAAgBg");
    this.shape_78.setTransform(16.9, 6.8);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics.f("#8F0006").s().p("AgFAAIAJAAIACAAIAAAAIgLAAg");
    this.shape_79.setTransform(18.6, 8);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#7D0106")
      .s()
      .p("AAEADQgEgCgDABIgBgCIAAgCQACgBACACIAFACIAAACIgBAAg");
    this.shape_80.setTransform(17.5, 8.9);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#D1131B")
      .s()
      .p("AAAAFIAAgBIgBgBQACgOABALQABAEgDABIAAAAg");
    this.shape_81.setTransform(13.3, 12);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#BD0409")
      .s()
      .p("AAAABIgBAAIABgCIAAAAIAAAAQABABAAAAQABAAAAABQAAAAgBAAQAAABgBAAIAAgBg");
    this.shape_82.setTransform(13.9, 12.3);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#C30C14")
      .s()
      .p(
        "AACANIAAgBIgBAAIgBAAIgBAAIgEABIgBAAIAAAAIgDgBQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABABIABAAIACgBIABgBIAAgFIABgBQABgIAGgJIABAAQAFAJgEAJIAAACIgBAAIgBAEIACAAIAAABIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAIgBAAgAAAAKIABABIAAABIABAAQAEgBgBgFQAAgFgBAAQgCAAgCAJg",
      );
    this.shape_83.setTransform(13, 11.3);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#9F1519")
      .s()
      .p(
        "AgIAHIAFgHIAAAAIABAAIABAAIgBAAIAIgEIABgBIABgBIABgBIAAABIgBAEIgBABIgBABIgCAAQgBAAAAgBQgBAAAAAAQAAAAAAABQAAAAAAAAIACAAIAAAAIgBABIgBgBIgCABIgBgBQgCAEgEAFIgBgCgAgCAAIAAAAg",
      );
    this.shape_84.setTransform(11.8, 12.7);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#670101")
      .s()
      .p(
        "AgpAEQgCgGADgDIABgBIADgBIABgCQAjgFAogCIABAAIAAACIACAAIgBABIgFAIIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIgBADIgBAAIAAAAIAAAAIgBABIgBAAQgFACgIAGIgBAAIgMgBIgDACIgIADQgJAEgGAAQgMAAgEgNgAgnAAQADAFABAGIAAACQASgBAPgEQAQgFANgGIABgBIAAgBQAGgBABgEIABgDQgUgCgTAGIgCAAIgKgBQgRAAgHAKg",
      );
    this.shape_85.setTransform(7, 14.1);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#AE090C")
      .s()
      .p("AgRABQAPgCAQAAIABgBIACAAIABABIAAAAIgBAAIgCAAQgQABgQADIAAgCg");
    this.shape_86.setTransform(9.3, 12.1);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f("#8F0103")
      .s()
      .p(
        "AgtAHQADgCAFAAIABgBIABAAIAUgBIABgBIgBgBIAKAAIABAAQAOgCASgBIACAAIABAAIAAAAIAAABIACABIAAAAIABACIgBgCIAAAAIgCgBIAAgBIAAgCQAJAEAFgGIABgBIgBABIAAAFIgBABIgKACIgBAAIgCAAIAAgBIgBgBQgnACgkAGIAAgBg",
      );
    this.shape_87.setTransform(8, 12.2);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#D10F18")
      .s()
      .p(
        "AgiAIIgEgBIAAgBIgEgBQAGgCgCgCIABAAQANABAMgEIABAAIABAAIAAABIANgBIAAAAQADgCAFAAIABAAQANgCAOgBIACAAIAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgBABIAAABIgBABQgSAAgPACIgBAAQgHgBgBADIgBAAQgQgCgKAEIgCAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgBAAg",
      );
    this.shape_88.setTransform(6.6, 12);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f("#BD131B")
      .s()
      .p(
        "AAAACIAAAAIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgBIABAAIAAAAIABABIAAABIAAABIAAACIgBgBg",
      );
    this.shape_89.setTransform(11, 11.5);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#B5090E")
      .s()
      .p(
        "AgNAAIAAAAIAHAAIABAAIASAAIACAAIAAgBIAAABIAAAAIABAAIgBAAIgCAAIgBAAIgCAAQgMAAgNACQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAg",
      );
    this.shape_90.setTransform(9.5, 11.2);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#9A0409")
      .s()
      .p("AAKAAIAAABIgCAAIgRAAQAIgBAJAAIACAAIAAAAIAAgBIAAACIAAABIAAgCg");
    this.shape_91.setTransform(10, 10.9);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f("#830103")
      .s()
      .p(
        "AgcAFIAAgCQAVgBARgCIABAAIALAAIABAAIADgBIABAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAgBIAAAFIAAAAIAAAAIgCAAQgLAAgJABIgCABIgFABIgBAAIgJACIgBAAIgJABIgIgBg",
      );
    this.shape_92.setTransform(8.2, 10.8);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics.f("#710304").s().p("AAFAAIABAAIgBAAIgKAAQAFAAAFAAg");
    this.shape_93.setTransform(9.9, 10.7);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f("#420000")
      .s()
      .p("AgVAFIgKgGQACgDACAAIALAAQAZgBAXAFIAAAAIg0AFIgBAAgAgWACQAOgBgOAAg");
    this.shape_94.setTransform(7.4, 10.4);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f("#9E090F")
      .s()
      .p("AADACIgCAAIABgBQgCAAgDgBIAAgBIABAAIABAAIAAABQADAAACABIAAABIgBAAg");
    this.shape_95.setTransform(9.9, 9.5);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f("#BC171D")
      .s()
      .p(
        "AAAACIAAgBQgBgBgFAAIAAAAQAIAAADAAIABgBIABABIAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQgBgBgBAAIgBABIgCAAg",
      );
    this.shape_96.setTransform(10.4, 9.5);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#590000")
      .s()
      .p(
        "AgTAIIgFAAIAAgBIgBgBQgFgFgHgBQAGgLATAEQAOAEATgBIAGAAIABAAIABAAIABAAIADAAIABAAIAAABIACAAIACAAIAAACIAAABIAAAAQAAAAgBAAQAAABAAABQAAAAAAAAQgBABAAAAIgBAAIgDABIgBAAQgHgBgEACIgBAAQgTADgTABgAgPgDIgLABQgCAAgCACIAKAHIABAAIA0gHIAAAAQgUgDgUAAIgIAAg",
      );
    this.shape_97.setTransform(7.3, 10.2);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f("#3A0200")
      .s()
      .p("AAAADIgBgBQABgCAAgDIAAAAQAEAHgDAAIgBgBg");
    this.shape_98.setTransform(11.8, 9);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f("#D00E16")
      .s()
      .p(
        "AAjAPIgBAAIAAgBQgagNgbgGQgJABgEAEQgFACgJgBIAAgBIgCAAQADgEAFAAQgGgCgBgGQAKAAAJgCIAAAAIAMAAIACAAQAKABAEAFIAAABQAQAEAMAFIABABIAAABQALAGAIADIABAAIAAABIAAAAIgBABIgFAAIgIAAg",
      );
    this.shape_99.setTransform(6.1, 7.8);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f("#C2070F")
      .s()
      .p("AAIAEQgHgCgKgEIAAgCIAFABIABABIAAABIALADIABAAIAAABIAAABIAAAAIgBAAg");
    this.shape_100.setTransform(10, 8.6);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f("#AC020A")
      .s()
      .p("AAFADIgLgDIAAgBIAAgBQAGACAGABIABAAIgBABIAAABIgBAAg");
    this.shape_101.setTransform(10.3, 8.5);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#9E1214")
      .s()
      .p(
        "AAAAGIAAAAIAAgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAADIgBAAgAAAgDIABgBIgBACIAAgBg",
      );
    this.shape_102.setTransform(10.9, 9.2);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics
      .f("#740E0E")
      .s()
      .p("AAAAJIAAgEIAAgCIAAgHIAAgBIAAgCIAAgBIAAgBIAAAAIAAACIAAALIAAAGIAAgBg");
    this.shape_103.setTransform(11.1, 7.4);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f("#760001")
      .s()
      .p(
        "AArAcIhBgcIgBAAQgMAAgJgCQAFgNAIgIIAKgDQAKgDAFAFIAGAGIAFADQAOAKAQAFIABAAIAHAJIABAAIABABIgBACIgBgBQgQgGgLgJIgKgGQgHgFgTgEQgMAAgDAOIAVAFQAFADAFABIAvASIABAAIAAACIAAAEIgBAAg",
      );
    this.shape_104.setTransform(6.5, 5.5);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f("#600000")
      .s()
      .p(
        "AAnAVIgvgSQgFgBgFgDIgVgFQADgOAMAAQATAEAHAFIAKAGQALAJAQAGIABABIAAABIAAAJIgBAAgAAVAKQAHAGACgDIgBgBQgDgDgCAAIgDABgAgFABIABABQAKAEAGgEIgBgBQgHgCgEAAQgDAAgCACgAgdgKIgBACQAKAGAKgCIACAAQgIgIgHAAIgGACg",
      );
    this.shape_105.setTransform(6.9, 5.6);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#490000")
      .s()
      .p(
        "AgDAVIAAgCIAAgBIgBgPIAAgCIAAgSIAAgCQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAFAMAAASQgBAOgEAAQgBAAgCgCgAAAgCQAAACgCADIAAABQAGAFgEgLg",
      );
    this.shape_106.setTransform(11.9, 8.9);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f("#3C0101")
      .s()
      .p("AAAAWIgGgkIAAgBQgBgJAEADIABAAQANAMgFAaIAAABQAAAFgGAAIAAgBg");
    this.shape_107.setTransform(15.5, 9);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#A20307")
      .s()
      .p(
        "AAGARIgFgBIAAgBQAFABgEgEIgBAAIAAgCQAEgKgFgIIAAAAQgEAIgEAJIgCABIAAABIAAgFIABgBQACgLAHgJIAAgBQAHAMACASIADAAIAAABIgFACIgBAAg",
      );
    this.shape_108.setTransform(13.7, 10.9);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics
      .f("#7C0001")
      .s()
      .p(
        "AAHATQgBgTgHgLIgBABQgGAJgDALIgBABQgFAGgJgEIAAgCIAAgCIAAgCQALALAFgQIABAAQgDgOAHgGIABAAQAFAAACAGIABAAQADAOAAAJIAAACQAIACAKgBIACAAIAAABIAAABIgBAAQgLAAgFADg",
      );
    this.shape_109.setTransform(13.9, 10.3);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f("#900D0F")
      .s()
      .p("AAAgBIACAAIgCACIAAAAIAAABQgBgDABAAg");
    this.shape_110.setTransform(11.2, 6.2);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics.f("#7F292F").s().p("AAAAAIAAAAIAAAAg");
    this.shape_111.setTransform(11.6, 5.5);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f("#910102")
      .s()
      .p(
        "AArAqQgHgCgHgDIgBgBQgbgRgigHIgBAAQgMABgDgGQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAgEIAAgBIgBgHIAAgCIAAgBIABgIIACgGIAAgBIgBgCIACgFIABgBIADgEIACgBQADgBAFACIAAAAIABAAIABAAQADABAGAEIABABQAGAEAGACIABAAIAGAFIABABIAAAAIABABIAEADIAGACIAFABIAFACIAEABIAAAAIABABIAIAHIAJAHIABABIABACIACABIAAABIACACIAAABIAAAAIgBACIgBACIgCAAQgDAAABAGIgCgBIgHgIIAAAAQgQgHgOgIIgFgDIgGgGQgFgFgKACIgKADQgJAJgEAKQAIADANAAIABAAIBBAdIABAAIAAABIAAABIAAABIgBAAgAABgWIAAAAIABABIgBgBg",
      );
    this.shape_112.setTransform(6.6, 4.4);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics.f("#89050A").s().p("AAAAAQAJABgMAAQABgBACAAg");
    this.shape_113.setTransform(19, 3.3);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics.f("#921A1E").s().p("AAAAAIAAAAIAAAAIAAAAg");
    this.shape_114.setTransform(16.3, 5.5);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics.f("#6F0A0B").s().p("AAAAAIAAAAIAAAAIAAAAg");
    this.shape_115.setTransform(16.4, 5.7);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f("#AE252E")
      .s()
      .p("AAAACIAAgBIgBgBIABgBIAAAAIAAABIACAAIAAAAIAAABIgBABIgBAAg");
    this.shape_116.setTransform(24.8, 17.5);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#B01520")
      .s()
      .p(
        "AADAEIAAgBIgBAAIgCgCIgCgBIAAgCIAAgBIADACIABAAIACABIABAAIACABIAAABIgCAAIgBACgAgGgBIAAgBIABABg",
      );
    this.shape_117.setTransform(24.1, 17.1);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f("#AB0310")
      .s()
      .p("AAAACQABgCgCAAIAAAAQAEgDgCADIAAACg");
    this.shape_118.setTransform(22.5, 15.7);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics
      .f("#9D2327")
      .s()
      .p("AACABQgCgBgFAAIAAgBQAFAAAFABIABABIgCAAIgBABIgBgBg");
    this.shape_119.setTransform(21.3, 15.3);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics
      .f("#A81D28")
      .s()
      .p(
        "AAQAKIAAgBIAAABIgBgBIgBgBIgCgBIAAgBIgBAAIgIgEIgNgGQAFAAAEACIABABIAAgBIABAAIACAAIABABIAAABQAEAAgBABIABAAIABAAIACAAIAAACQAHACABADIABAAIAAABIAAADIgEgCgAgKgEIgEgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABIABAAIAAACIAAAAgAgPgHIgEgEIAEACIABABIAAABg",
      );
    this.shape_120.setTransform(21.8, 15.8);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f("#7F0107")
      .s()
      .p(
        "AAAAOIgQgGIAAgCQAQAFAKgHIAAgBQAFgMgPgDIAAgBQAOABADAMIAAAAIAAACIAAAIQgCADgFABIgHAAIgDAAg",
      );
    this.shape_121.setTransform(23.5, 14);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f("#C2222A")
      .s()
      .p(
        "AABADIgDgDIAAAAIAAAAIgBgCIADABIAAAAIABAAIAAgBIACAAIAAAAIAAABIAAABIABAAIgCADIAAAAIgBAAg",
      );
    this.shape_122.setTransform(26.1, 18.2);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f("#B3222D")
      .s()
      .p("AAAABIAAgBIgDAAIABgBIABAAIACgBIABAAIABACIAAACIAAABIAAAAIgDgCg");
    this.shape_123.setTransform(25.4, 17.9);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f("#D20B17")
      .s()
      .p(
        "AgBAEIAAgBQABgDABgFIABAAIAAAHIgBADIgBABIAAAAIAAAAIgBABQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBg",
      );
    this.shape_124.setTransform(26.4, 17.3);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f("#CA0716")
      .s()
      .p(
        "AgBABIgBgCQACABABAAIAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIgDgBgAACABIAAAAIABAAIAAAAIgBAAg",
      );
    this.shape_125.setTransform(25.9, 17.8);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics.f("#F9D7D1").s().p("AAAAAIAAAAIAAAAIAAAAg");
    this.shape_126.setTransform(27.1, 14.3);

    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics
      .f("#920308")
      .s()
      .p(
        "AAEAJIgCAAIgBAAIAAgCQACgFgEADIgBgBIgCAAIgBgBQgFgDgHAAIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIAAAAIAAAAIAAgCQABgFgKABIAAgBIAHgCIACAAIAAACIANAEIACABIAAABIAOAEQAFABAHgBQAFAAACgDQAEAAAAACIAAABIgBABQgGAGgJAAQgFAAgGgBgAgVAAIAAAAIAAAAgAgVAAg",
      );
    this.shape_127.setTransform(22.5, 15);

    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics
      .f("#8D0510")
      .s()
      .p("AABAGQAAgDgCAAIAAgGIAAgCIABAAIAAgBIABAAQABAIgBAFg");
    this.shape_128.setTransform(25.5, 14.7);

    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics
      .f("#C30719")
      .s()
      .p("AAAAEIAAgEIAAgCIAAgBIAAAAIABAAIAAABIgBAGg");
    this.shape_129.setTransform(26.1, 13.7);

    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics
      .f("#B90C14")
      .s()
      .p(
        "AAAAVIAAgBIgCABIgBAAIAAgBIAAAAIgCgBIAAgBIAAgBIgCgBIgBgBIgCgBQAKACADgFIABgBQAGgJgGgMIACgIIAAgCQAHAJgCAOIAAABIAAABIgBAGIgBACQgBAGgCAEIgCAAIgEgBgAADgOIAAgBIABgDIABgBIAAABIgBAGIgBgCg",
      );
    this.shape_130.setTransform(25.5, 15.4);

    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics
      .f("#A50711")
      .s()
      .p(
        "AgBATIgBgBIgEgBIgBAAQgBgDgHgDIAAgBQAPAFAJgKIABgBQABgEgBgIIgBgBIAAAAQgBgFgFgDIAAgBQAHACABAGIABAAIAAABIABACIAAABQAHAMgHAJIgBABQgDADgGAAIgEAAg",
      );
    this.shape_131.setTransform(24.6, 14.9);

    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics
      .f("#95020D")
      .s()
      .p(
        "AAIAHQgEgLgOgBIABgDQAJACAFAFIAAABIAAAAQAEACABAFIABAAIgBABIgCAAIAAgBg",
      );
    this.shape_132.setTransform(24.4, 13.2);

    this.shape_133 = new cjs.Shape();
    this.shape_133.graphics
      .f("#BA2431")
      .s()
      .p("AAAAEIAAgCIAAgHIAAgBQAAABABAFIgBAHIAAgDg");
    this.shape_133.setTransform(27.3, 12.6);

    this.shape_134 = new cjs.Shape();
    this.shape_134.graphics
      .f("#DF0B13")
      .s()
      .p("AgCAHQACgFAAgEIAAgCQAAgFACAFIABAAIgBABQAAAKgEAAIAAAAg");
    this.shape_134.setTransform(26.6, 11.9);

    this.shape_135 = new cjs.Shape();
    this.shape_135.graphics
      .f("#B01C26")
      .s()
      .p("AgBAAQAAgDABgCIABgBIAAACIAAACIABABIgBABIgBAHQAAgFgBgCg");
    this.shape_135.setTransform(27.3, 11.7);

    this.shape_136 = new cjs.Shape();
    this.shape_136.graphics
      .f("#C90913")
      .s()
      .p(
        "AgCAGIgBAAQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAAAAIABAAQAFgCABgEIAAgCIABAAIAAACQgBAFgEADIAAAAQgBgEAAAFIgBAAg",
      );
    this.shape_136.setTransform(26.8, 10.8);

    this.shape_137 = new cjs.Shape();
    this.shape_137.graphics
      .f("#BB0F1C")
      .s()
      .p(
        "AAAAJIAAAAIAAABIAAgBgAABAAIAAgCIgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAgBAAIABgFIAAgBIABACIAAABIABgBIAAAHIgBAAIAAAAg",
      );
    this.shape_137.setTransform(27.6, 10.4);

    this.shape_138 = new cjs.Shape();
    this.shape_138.graphics
      .f("#AF2A35")
      .s()
      .p(
        "AAAAGIAAgCIAAgBIAAgDIAAgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABAAIAAACIAAACIgBAHg",
      );
    this.shape_138.setTransform(27.6, 10.7);

    this.shape_139 = new cjs.Shape();
    this.shape_139.graphics
      .f("#BD4952")
      .s()
      .p("AAAAEIAAgBIAAgBIAAgFIAAAHIAAAAg");
    this.shape_139.setTransform(27.8, 8.3);

    this.shape_140 = new cjs.Shape();
    this.shape_140.graphics
      .f("#B61D2D")
      .s()
      .p("AAAAEIAAgBIAAgFIAAgBIAAgBIAAAAIAAABIAAABIABAAIAAAGIgBABIAAgBg");
    this.shape_140.setTransform(27.7, 9.1);

    this.shape_141 = new cjs.Shape();
    this.shape_141.graphics
      .f("#A61522")
      .s()
      .p("AAAAFIAAgEIAAgBIAAgEIAAAEIAAAFIAAAAg");
    this.shape_141.setTransform(27.7, 7.9);

    this.shape_142 = new cjs.Shape();
    this.shape_142.graphics
      .f("#910009")
      .s()
      .p("AgLgBQAOgBAJACIgDACIAAAAIgUgDg");
    this.shape_142.setTransform(25.2, 8.3);

    this.shape_143 = new cjs.Shape();
    this.shape_143.graphics
      .f("#920006")
      .s()
      .p("AACAGIAAgBQABgFgCAAQgBgDgCABIAAgBIACgCQAEAFgCAGg");
    this.shape_143.setTransform(26.5, 9);

    this.shape_144 = new cjs.Shape();
    this.shape_144.graphics
      .f("#BE2D38")
      .s()
      .p("AAAgEIAAAAIAAABIABADIAAAAIgBAFIAAAAQAAgFAAgEg");
    this.shape_144.setTransform(27.5, 7.4);

    this.shape_145 = new cjs.Shape();
    this.shape_145.graphics
      .f("#890308")
      .s()
      .p("AgCAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIACAAIgBABIgEgBg");
    this.shape_145.setTransform(23.1, 12.4);

    this.shape_146 = new cjs.Shape();
    this.shape_146.graphics
      .f("#870005")
      .s()
      .p("AgdgEIAAgBQAdABAYAHIABABIAFACIg7gKg");
    this.shape_146.setTransform(21.1, 9.8);

    this.shape_147 = new cjs.Shape();
    this.shape_147.graphics
      .f("#840006")
      .s()
      .p(
        "AAfAQIAAgBQAPgCgCgMIgBgBIgkgGQgTgDgTADIAAAAQgLAAgGgEIAAgGQAEADAGACIAAABIAAABIAOgBIgBAAIAuABIAWAFQABAAADADQACABgBAEIAAABIAAACQgDAHgMADIgCgBg",
      );
    this.shape_147.setTransform(21.8, 9.1);

    this.shape_148 = new cjs.Shape();
    this.shape_148.graphics
      .f("#520000")
      .s()
      .p(
        "AgDAAQgBgEAEADQABAAABAAQAAABABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgFgDg",
      );
    this.shape_148.setTransform(24.5, 9.9);

    this.shape_149 = new cjs.Shape();
    this.shape_149.graphics
      .f("#4C0001")
      .s()
      .p(
        "AgdgFIADgFQACgEAQAEIAdALIABABQAGAGACAEIgCABQghgCgYgQgAgVgJIAAAAQAKAJAPAAIABAAQgFgJgSAAIgDAAg",
      );
    this.shape_149.setTransform(20.2, 12.2);

    this.shape_150 = new cjs.Shape();
    this.shape_150.graphics
      .f("#3B0101")
      .s()
      .p("AAMAFQgPgBgKgHIAAgBQATgBAIAKIgCAAg");
    this.shape_150.setTransform(19.4, 11.7);

    this.shape_151 = new cjs.Shape();
    this.shape_151.graphics
      .f("#93040A")
      .s()
      .p("AAKAEIgUgFIAAgCQAIABAEACIABAAIAHADIABABIgBAAg");
    this.shape_151.setTransform(19.9, 11);

    this.shape_152 = new cjs.Shape();
    this.shape_152.graphics
      .f("#D20F18")
      .s()
      .p(
        "AAkApIAAgDIAAgBIAAAAIACgEIgBgJIgBABIABgCIAAgGIAAgBIAAgBQACgPgGgIIgBAAIgBAAIgBABQgFgJgMgCIgBAAIgKgCIgBAAIgQgIIgBAAIgJgCIgBgBQgGgCgHgBIgBgCIgBAAIAAAAIgFgDQAOgFAXAOIAfAKQAHABACgBQACAAACgGIABAAIABAAIAAACQgBAGgDAFQAGABABgNIAAgBQAEgEABgHIAAgCIAAgBQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAABIABABIgBAFIgBABQgDACAAAFIAAABIAAAJIAAACIABAEIAAAAIgBABIAAAFIAAABIAAAAIAAABIgBAEIAAAGIgBAJIAAAGIAAAFIgCAGIgBADIgBAAg",
      );
    this.shape_152.setTransform(22.8, 14.1);

    this.shape_153 = new cjs.Shape();
    this.shape_153.graphics
      .f("#B40B12")
      .s()
      .p("AADACIgBgBIgFgCIAHABIAAAAIgBACIAAAAg");
    this.shape_153.setTransform(20.7, 11.2);

    this.shape_154 = new cjs.Shape();
    this.shape_154.graphics
      .f("#660001")
      .s()
      .p(
        "AAeAtIgCAAIgNgFIAAgBIAAgBIgIgCIAAgBQgCgDgFAAIAAgBIAAAAIgBgBIgLgFIgBgBIgDgCIAAgCIgBgEIABgJQAHgCAJABIAAAAIAWAHIABAAIAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIABABQAGADAHACIABABIAGACIABABQAQADgFAOIAAABQgHAEgJAAQgGAAgGgCgAgLAJIgDAFQAWATAjABIACAAQgCgFgGgGIgBgBIgfgNIgKgBQgFAAgBABgAgnAPIAAgBQAAgKgDgNIgBAAQgCgGgHgBIgBABQgHAGADAOIgBAAQgFAPgLgKIAAgBIAAAAIAAgEIgBgEIAAgBIAAAAIAAgBIAAgDIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgGIABgNIAAgBIACgFIABgCIABgCIAAAAIAAgBIABgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABAAIACAAIAAABIABAAIAEABIABAAQADABADgBIACgBIACgBIACAAIADAAIAGACIAAAAQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAIAFgBIAAAAIACAAIABABIABAAIAAAAIABABIABADIACAGIABAEIABADIAAABIAAAFQAGAEAKAAIAAABQARgEAWAEIAjAHIACABQABAKgOACIgBABIgBAAQgEAAgDgDIgFgDIgBAAQgYgHgdgCIgEgEQgEgCgCABIgBgGIABAGQgDABAAAEIAAABIABADQgBAFAAAEIgBAMIgCAAIgHABQgGAAgFgCgAgugZIAAABQAKASADAUIACAAQAJABABgHIAAgBIAAgaIAAgBQgEgPgQgEIgBAAQgDAGgBAIgAhHgeIAAABIAAAVIAAACIAAANIAAABIAAABQAKAIAAgSQAAgTgFgMQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABgAA1AAQAJADAAgDQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBAAgBAAIgCgBQgBAAgBAAQAAABAAAAQgBABAAABQAAAAAAABg",
      );
    this.shape_154.setTransform(18.7, 10.1);

    this.shape_155 = new cjs.Shape();
    this.shape_155.graphics
      .f("#8D0208")
      .s()
      .p(
        "AADADQgFgCgGgCIAAgBIgBgBQAJACAEABIAGACIgBAAQgBAAgBAAQgBAAAAABQgBAAAAAAQAAAAAAABIgCgBg",
      );
    this.shape_155.setTransform(22.2, 11.9);

    this.shape_156 = new cjs.Shape();
    this.shape_156.graphics
      .f("#B20A13")
      .s()
      .p(
        "AAVAMQgBgGgGgCIAAgBQgGgDgIgBIgCAAIABAAIgGgDQgGgCgJgCIABABQgBgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIABgDIASAIIABAAIAIADIABAAQAMABAFAHIABAAIAAABIgBABIgBADg",
      );
    this.shape_156.setTransform(23.5, 12.5);

    this.shape_157 = new cjs.Shape();
    this.shape_157.graphics
      .f("#C20D15")
      .s()
      .p(
        "AAiAMIgigKQgVgMgOAFIAGADIAAABIgBAAIgFAAIAAgBIgKAAIAAgBIAAgFIAAgDIAAgBIABAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABAAQASABAPAEIAJACIACADQAGABAKABIALACIAAABQAJABAIgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABQgCAFgCABIgCAAIgGgBg",
      );
    this.shape_157.setTransform(21.7, 10.7);

    this.shape_158 = new cjs.Shape();
    this.shape_158.graphics
      .f("#A0040D")
      .s()
      .p(
        "AARAaQgKgCgFgDIgDgCIgJgDQgPgDgSgCIAAAAQgBABAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgBAAIAAgDQAGgBADACIABAAIA7ANQADACAEABIABAAIADAAQALgCADgIIABgBIAAAAQACgIgFgGQgJgBgQABIgtgCIgCAAIgLAAIAAAAQgHgCgDgDIAAgBIgBgCIAAAAIABAAIABACQAMADAOABIAUAAIAUAAQAGABAEgCIAOgBIACAAQAFAEACAFQABAGgBAFIgDAGQgDAFgGAAQgGADgGAAIgMgCgAgzgUIgBgEIAAABIABAAIAAACQAPgHAIABIALACQAEACAQAAIASABQgGADgIABQgKAAgOgDQgLgCgMABIgBABIgFAFIgBAAIgCABIgCgFg",
      );
    this.shape_158.setTransform(21.8, 8.2);

    this.shape_159 = new cjs.Shape();
    this.shape_159.graphics
      .f("#B80913")
      .s()
      .p(
        "AAYAaIAAgBQAGAAAGgDQAGAAADgFIADgGQABgFgBgGQgCgFgFgEIgCAAIgOABQgEACgGgBIgSAAIgWAAQgOgBgMgDIgBgCIABgGIAFgFIABgBQAMgBALACQAOADAKAAQAIgBAGgDIAGAAQgHAFgIAAQgOACgQgEQgQgEgKAMQAMAEAMAAIArgBQATgFAMAIIAEAJIAAAHIAAAAIgDAGIAAABIgBAAIAAACQAAAHgIABIAAAAIAAAAIgLABIgGAAg",
      );
    this.shape_159.setTransform(22.3, 8.5);

    this.shape_160 = new cjs.Shape();
    this.shape_160.graphics
      .f("#3B0100")
      .s()
      .p("AgGACIACgCQAEgEAHACQgBAGgGAAQgCAAgEgCg");
    this.shape_160.setTransform(23.5, 4.5);

    this.shape_161 = new cjs.Shape();
    this.shape_161.graphics
      .f("#4C0000")
      .s()
      .p(
        "AgoAqIgBgBQgDgVgKgTIAAgBQAAgGADgFIABAAQARADAEANIAAACIAAAcIAAABQgBAGgHAAIgDAAgAguAAIAAABIAGAmQAIABAAgFIAAgBQAFgcgPgKIgBAAIgBgBQgCAAAAAFgAAZgWIgCgCIACgEQAGgHAJgFQAIgFAGALQADAGgIAEQgGAFgHAAQgFAAgGgDgAAhgbIgCADQAOAGACgMIgEAAQgGAAgEADg",
      );
    this.shape_161.setTransform(19.5, 7.3);

    this.shape_162 = new cjs.Shape();
    this.shape_162.graphics
      .f("#AA0206")
      .s()
      .p("AgIABIAAgBIAGAAIABAAIABAAIAAAAIAAAAIAJgBIgRADIAAgBg");
    this.shape_162.setTransform(23.9, 1.5);

    this.shape_163 = new cjs.Shape();
    this.shape_163.graphics
      .f("#A20810")
      .s()
      .p("AgIABIADAAIACgBIADAAIACAAIAGgBIABAAIAAABIAAAAIgBAAQgCACgGAAIgIgBg");
    this.shape_163.setTransform(22, 1.7);

    this.shape_164 = new cjs.Shape();
    this.shape_164.graphics
      .f("#A80509")
      .s()
      .p("AgLAIIAIgDIADgDIAHgFIAFgFIgDAGIgCACIgEADIgIAGIgGgBg");
    this.shape_164.setTransform(25.2, 5);

    this.shape_165 = new cjs.Shape();
    this.shape_165.graphics
      .f("#D80F17")
      .s()
      .p(
        "AgEANIgpgCQAIgLARAFQANAEAQgBIAOgGQAPgFAFgJIABAAIAAABIAAABIACABIAAACIAAAHIAAACQAAgBAAAAQgBAAAAABQAAAAABAAQAAAAAAABIgLADIgGACIgJADIgXACg",
      );
    this.shape_165.setTransform(22.6, 5.8);

    this.shape_166 = new cjs.Shape();
    this.shape_166.graphics
      .f("#CA0D16")
      .s()
      .p(
        "AAvAPQgMgIgTAFIgrABQgMAAgLgEQAJgKAQACQAQAEAOgCQAJAAAHgDIAKgFIAEgEQAIgDAAgJIAAgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBAAAAIABAAIAAABIgBAKIAAAAQgFAJgPAFIgPAGQgPABgOgEQgRgDgIAJIAqACIAAAAIAXgCIAJgDIAGgCIALgDQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIACAAIABgBIABAFIAAAEIAAAAQgCAEABAHIABAAIAAABIAAAEIAAABIAAACIgEgMg",
      );
    this.shape_166.setTransform(22.4, 6);

    this.shape_167 = new cjs.Shape();
    this.shape_167.graphics
      .f("#AD080A")
      .s()
      .p("AgBACIACgDIABgEIABAAIAAABQABAHgHADIACgEg");
    this.shape_167.setTransform(26.4, 4.3);

    this.shape_168 = new cjs.Shape();
    this.shape_168.graphics
      .f("#B0060B")
      .s()
      .p(
        "AAAAEQAAgEAAgCIAAgBIABgBIAAACIAAADIgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAAAg",
      );
    this.shape_168.setTransform(26.9, 3.1);

    this.shape_169 = new cjs.Shape();
    this.shape_169.graphics
      .f("#8C0005")
      .s()
      .p(
        "AgwAXIgBgBIgBAAIgBgBIABgBIAAgBIAAgCIAEgHIAAgCIAEgEIAFgEIAEgBIADgCIAEgDIAGgCIAAAAIAHgDIAJgEQAMACAEgDIABAAIATgFIABAAIADgBIACgBQAIAAACAGIADAJIAAABIAAABQABAFgBABIAAABIgBABIgBADIgGAFIgGAHIgGADIgIADIgSAAQgQgBgDgCIgMgBQgIgCgOAHIAAgBgAgJANQAQAQAXgMIADgBQAGgDAEgIIAAgCQABABACgIQABgKgSABIgNACIgRAJIAAgBQgIADAAANgAgdAAQAPAAgKgBIgBgBQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAg",
      );
    this.shape_169.setTransform(21.6, 3.5);

    this.shape_170 = new cjs.Shape();
    this.shape_170.graphics
      .f("#B81F2B")
      .s()
      .p(
        "AAAAQIAAgJIAAgBIAAgOIAAgBIAAgDIAAgCIAAgCIAAAGIAAABQAAAHAAACIAAAAIAAABIAAAFIAAADIAAAFIABACIgBAAIAAAAg",
      );
    this.shape_170.setTransform(27.3, 4.2);

    this.shape_171 = new cjs.Shape();
    this.shape_171.graphics
      .f("#BF1524")
      .s()
      .p("AAAAKIAAgBIAAgCIAAgIIAAgBIAAgGIAAgBIAAAAIAAACIAAACIAAACIAAANIAAAAg");
    this.shape_171.setTransform(27.1, 3.7);

    this.shape_172 = new cjs.Shape();
    this.shape_172.graphics
      .f("#A7111F")
      .s()
      .p(
        "AAAAEIAAgBQAAgBAAgBQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgCIAAgBIAAACIAAAAIABADIAAACIgBAAg",
      );
    this.shape_172.setTransform(27, 2.2);

    this.shape_173 = new cjs.Shape();
    this.shape_173.graphics
      .f("#B90F18")
      .s()
      .p(
        "AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIgBABIAAABIAAgCg",
      );
    this.shape_173.setTransform(26.9, 2.4);

    this.shape_174 = new cjs.Shape();
    this.shape_174.graphics
      .f("#AB040B")
      .s()
      .p(
        "AAKAAQgBgEgJABIAAAAIgCABIgBAAIgJACIgBAAIgCAAIgBAAIAHgCIAIgEQACgCAFAAQADABAHAHIAAACIgBABIABACIAAABQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgEgJg",
      );
    this.shape_174.setTransform(25.3, 1.5);

    this.shape_175 = new cjs.Shape();
    this.shape_175.graphics
      .f("#750001")
      .s()
      .p(
        "AgbAJQAAgMAIgEIAAABIATgJIAKgCQASgBgBAKQgBAIgBAAQAAgFgBgCIgEgCQgSgLgOARIgGAEQgFAEADAGQACACADABQAOAEAQgGIgEABQgJAFgHAAQgLAAgLgJg",
      );
    this.shape_175.setTransform(23.4, 3.9);

    this.shape_176 = new cjs.Shape();
    this.shape_176.graphics
      .f("#610000")
      .s()
      .p(
        "AgQANQgDgBgCgCQgDgGAEgEIAGgEQAOgRATALIAEACQABACAAAGIgBAAQgEAIgGADQgLAEgHAAQgGAAgFgCgAAAgGQgHAEgGAGIgCADIACACQAMAHAKgIQAIgEgDgFQgEgHgFAAIgFACg",
      );
    this.shape_176.setTransform(23.5, 4);

    this.shape_177 = new cjs.Shape();
    this.shape_177.graphics
      .f("#C30409")
      .s()
      .p(
        "AgWAGIACgBIACAAIADgCIgBACIACgCIAIgDIAEAAIACgBIAGgEIAGgCIADgBIABAAIAFABIACABIACAEQADAHAAABQgHgGgEgBQgFgBgEACIgIACIgEACIgCAAIgFABIgBAAIgGACIgFABIgCAAIgCAAIAFgCg",
      );
    this.shape_177.setTransform(24.2, 0.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-1, -1, 29.9, 20.6);

  (lib.ClipGroup_1copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      "AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g",
    );
    mask.setTransform(21.6, 21.6);

    // Layer 3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(["#0000FF", "#000000"], [0, 1], 8.3, -9.8, 0, 8.3, -9.8, 37.8)
      .s()
      .p("AjWDXIAAmtIGtAAIAAGtg");
    this.shape.setTransform(21.6, 21.6);

    this.shape.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 43.2, 43.1);

  (lib.ClipGroup_1_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p(
      "AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g",
    );
    mask_1.setTransform(21.6, 21.6);

    // Layer 3
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .rf(["#00FF00", "#000000"], [0, 1], 8.3, -9.8, 0, 8.3, -9.8, 37.8)
      .s()
      .p("AjWDXIAAmtIGtAAIAAGtg");
    this.shape_1.setTransform(21.6, 21.6);

    this.shape_1.mask = mask_1;

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 43.2, 43.1);

  (lib.darkLines = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(72,3,3,0.341)")
      .s()
      .p("EgAaAtcMAAAha3IB3AAMAAABa3gEgBcAtcMAAAha3IAXAAMAAABa3g");
    this.shape.setTransform(-3.3, -345.9);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-12.7, -636.7, 18.8, 581.7);

  (lib.Symbol9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Mask (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      "EAvKAtbQrSmAnLoUMAAAhPeQJejXM1htQKuhbLfAAQLeAAKvBbQMzBtJfDWMAAABP5IgFAGQnBH7rkF/QrPF1uiDhQu8jgrLl8g",
    );
    mask.setTransform(753.3, 271.1);

    // Layer 3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        [
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.612)",
          "rgba(255,255,255,0.69)",
          "rgba(255,255,255,0.62)",
          "rgba(255,255,255,0)",
        ],
        [0, 0.224, 0.51, 0.835, 1],
        -0.1,
        -0.2,
        1.6,
        -0.2,
      )
      .s()
      .p("AAAAAIABAAIgBAAIAAAAg");
    this.shape.setTransform(998.3, -17.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(
        [
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.612)",
          "rgba(255,255,255,0.69)",
          "rgba(255,255,255,0.62)",
          "rgba(255,255,255,0)",
        ],
        [0, 0.224, 0.51, 0.835, 1],
        -1.4,
        0.1,
        2,
        0.1,
      )
      .s()
      .p("AAOAEIgcgHIAcAHg");
    this.shape_1.setTransform(1444.2, -18.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(
        [
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.188)",
          "rgba(255,255,255,0.349)",
          "rgba(255,255,255,0.212)",
          "rgba(255,255,255,0)",
        ],
        [0, 0.224, 0.51, 0.835, 1],
        -227.1,
        0.9,
        227.9,
        0.9,
      )
      .s()
      .p(
        "EggxABuIBIgSQCQgjCVgdIC9ghQBdgSBcgOQBsgSBugOQJBhOI3AAQI+AEI9BMQBwAOBxASIA5AKIA8AJQEjA0EeBCQCiAmAMAEQghgIgjgGQlPhHlUgxIgkgFIAMACQq0hXsKAAQtdAArzBrIgGABQlOA1knBDQB3ggAcgGg",
      );
    this.shape_2.setTransform(1221.6, -28.7);

    this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(15),
    );

    // Layer 4
    this.instance = new lib.White_Lines("synched", 0);
    this.instance.setTransform(985.1, 652.8, 3.938, 1.004);

    this.instance_1 = new lib.White_Lines("synched", 0);
    this.instance_1.setTransform(1297.6, 652.8, 3.938, 1.004, 0, 0, 180);

    this.instance_2 = new lib.White_Lines("synched", 0);
    this.instance_2.setTransform(1375.7, 652.8, 3.938, 1.004, 0, 0, 180);

    this.instance_3 = new lib.White_Lines("synched", 0);
    this.instance_3.setTransform(1453.9, 652.8, 3.938, 1.004, 0, 0, 180);

    this.instance_4 = new lib.White_Lines("synched", 0);
    this.instance_4.setTransform(1219.4, 652.8, 3.938, 1.004);

    this.instance_5 = new lib.White_Lines("synched", 0);
    this.instance_5.setTransform(1141.3, 652.8, 3.938, 1.004);

    this.instance_6 = new lib.White_Lines("synched", 0);
    this.instance_6.setTransform(1063.2, 652.8, 3.938, 1.004);

    this.instance.mask =
      this.instance_1.mask =
      this.instance_2.mask =
      this.instance_3.mask =
      this.instance_4.mask =
      this.instance_5.mask =
      this.instance_6.mask =
        mask;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(15),
    );

    // Layer 5
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(
        [
          "rgba(153,153,153,0)",
          "rgba(122,122,122,0.612)",
          "rgba(102,102,102,0.851)",
          "rgba(121,121,121,0.702)",
          "rgba(153,153,153,0)",
        ],
        [0, 0.224, 0.51, 0.835, 1],
        -378.8,
        0,
        378.9,
        0,
      )
      .s()
      .p(
        "EgyOAAeQKrjWOfhsQMIhbM8AAQM+AAMHBbQOdBsKtDVIAAFiQqtjWudhtQsHhZs+AAQs8AAsIBZQufBtqrDXg",
      );
    this.shape_3.setTransform(1221.8, -67.8);

    this.shape_3.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(15));

    // Layer 6
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .lf(
        [
          "rgba(153,153,153,0)",
          "rgba(153,153,153,0.082)",
          "rgba(153,153,153,0.71)",
          "#999999",
          "rgba(153,153,153,0.725)",
          "rgba(153,153,153,0.082)",
          "rgba(153,153,153,0)",
        ],
        [0, 0.11, 0.31, 0.51, 0.741, 0.902, 1],
        -335.4,
        0,
        335.5,
        0,
      )
      .s()
      .p(
        "EgseAAeQJejWM1hsQKuhbLdAAQLeAAKvBbQMzBsJfDVIAAFiQpfjWszhtQqvhZreAAQrdAAquBZQs1BtpeDXg",
      );
    this.shape_4.setTransform(1221.8, -49.4);

    this.shape_4.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(15));

    // Layer 7
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .lf(
        [
          "rgba(153,153,153,0)",
          "rgba(153,153,153,0.502)",
          "rgba(153,153,153,0.71)",
          "rgba(153,153,153,0.349)",
          "rgba(153,153,153,0)",
        ],
        [0, 0.31, 0.51, 0.741, 1],
        -335.4,
        -12.4,
        335.5,
        -12.4,
      )
      .s()
      .p(
        "EgseACaQJejVM1htQKuhbLdAAQLeAAKvBbQMzBtJfDUIAABqQpfjXszhqQqvhbreAAQrdAAquBbQs1BqpeDYg",
      );
    this.shape_5.setTransform(1221.8, -26.5);

    this.shape_5.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(15));

    // ground
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .rf(["#FFFFFF", "#999999"], [0, 1], 16, -580.3, 0, 16, -580.3, 544.3)
      .s()
      .p(
        "EgaBAtbQrSl/nLoUMAAAhPfQJejYM1htQKuhbLdABQLegBKvBbQMzBtJfDXMAAABP5IgFAGQnBH7rkGAQrPF1uiDgQu6jfrLl9g",
      );
    this.shape_6.setTransform(1221.8, 271.2);

    this.shape_6.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(15));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(937, -80, 569.6, 702.3);

  (lib.Symbol4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.Symbol3();
    this.instance.setTransform(42.5, 399.9, 1, 1, 0, 0, 0, 41.6, 334.8);

    this.instance_1 = new lib.darkLines("synched", 0);
    this.instance_1.setTransform(1017.9, 884.6, 1.389, 1.389);

    this.instance_2 = new lib.darkLines("synched", 0);
    this.instance_2.setTransform(976.2, 884.6, 1.389, 1.389);

    this.instance_3 = new lib.darkLines("synched", 0);
    this.instance_3.setTransform(934.5, 884.6, 1.389, 1.389);

    this.instance_4 = new lib.darkLines("synched", 0);
    this.instance_4.setTransform(892.9, 884.6, 1.389, 1.389);

    this.instance_5 = new lib.darkLines("synched", 0);
    this.instance_5.setTransform(851.2, 884.6, 1.389, 1.389);

    this.instance_6 = new lib.darkLines("synched", 0);
    this.instance_6.setTransform(809.5, 884.6, 1.389, 1.389);

    this.instance_7 = new lib.darkLines("synched", 0);
    this.instance_7.setTransform(767.8, 884.6, 1.389, 1.389);

    this.instance_8 = new lib.darkLines("synched", 0);
    this.instance_8.setTransform(726.1, 884.6, 1.389, 1.389);

    this.instance_9 = new lib.darkLines("synched", 0);
    this.instance_9.setTransform(684.5, 884.6, 1.389, 1.389);

    this.instance_10 = new lib.darkLines("synched", 0);
    this.instance_10.setTransform(642.8, 884.6, 1.389, 1.389);

    this.instance_11 = new lib.darkLines("synched", 0);
    this.instance_11.setTransform(601.1, 884.6, 1.389, 1.389);

    this.instance_12 = new lib.darkLines("synched", 0);
    this.instance_12.setTransform(559.4, 884.6, 1.389, 1.389);

    this.instance_13 = new lib.darkLines("synched", 0);
    this.instance_13.setTransform(517.8, 884.6, 1.389, 1.389);

    this.instance_14 = new lib.darkLines("synched", 0);
    this.instance_14.setTransform(476.1, 884.6, 1.389, 1.389);

    this.instance_15 = new lib.darkLines("synched", 0);
    this.instance_15.setTransform(434.4, 884.6, 1.389, 1.389);

    this.instance_16 = new lib.darkLines("synched", 0);
    this.instance_16.setTransform(392.8, 884.6, 1.389, 1.389);

    this.instance_17 = new lib.darkLines("synched", 0);
    this.instance_17.setTransform(351.1, 884.6, 1.389, 1.389);

    this.instance_18 = new lib.darkLines("synched", 0);
    this.instance_18.setTransform(309.4, 884.6, 1.389, 1.389);

    this.instance_19 = new lib.darkLines("synched", 0);
    this.instance_19.setTransform(267.8, 884.6, 1.389, 1.389);

    this.instance_20 = new lib.darkLines("synched", 0);
    this.instance_20.setTransform(226.1, 884.6, 1.389, 1.389);

    this.instance_21 = new lib.darkLines("synched", 0);
    this.instance_21.setTransform(184.4, 884.6, 1.389, 1.389);

    this.instance_22 = new lib.darkLines("synched", 0);
    this.instance_22.setTransform(142.7, 884.6, 1.389, 1.389);

    this.instance_23 = new lib.darkLines("synched", 0);
    this.instance_23.setTransform(101.1, 884.6, 1.389, 1.389);

    this.instance_24 = new lib.darkLines("synched", 0);
    this.instance_24.setTransform(59.4, 884.6, 1.389, 1.389);

    this.instance_25 = new lib.darkLines("synched", 0);
    this.instance_25.setTransform(17.7, 884.6, 1.389, 1.389);

    this.instance_26 = new lib.sky();
    this.instance_26.setTransform(-40.6, -11.6, 1.389, 1.389);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_26 },
            { t: this.instance_25 },
            { t: this.instance_24 },
            { t: this.instance_23 },
            { t: this.instance_22 },
            { t: this.instance_21 },
            { t: this.instance_20 },
            { t: this.instance_19 },
            { t: this.instance_18 },
            { t: this.instance_17 },
            { t: this.instance_16 },
            { t: this.instance_15 },
            { t: this.instance_14 },
            { t: this.instance_13 },
            { t: this.instance_12 },
            { t: this.instance_11 },
            { t: this.instance_10 },
            { t: this.instance_9 },
            { t: this.instance_8 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-26.3, 0, 1052.6, 808.1);

  (lib.mc_whitePatch = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(2, 1, 1).p("AhKA/IBKh+IBLB+g");
    this.shape.setTransform(41.8, 26);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2, 2, 0, 3).p("AAAhAIAACB");
    this.shape_1.setTransform(52.2, 12.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2, 2, 0, 3).p("AFaAAIqzAA");
    this.shape_2.setTransform(88.8, 12.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2, 2, 0, 3).p("AAAhAIAAA/IAABC");
    this.shape_3.setTransform(125.3, 12.5);

    this.instance = new lib.Symbol2_1();
    this.instance.setTransform(88.8, 21.5, 1, 1, 0, 0, 0, 103, 21.5);
    this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5, -5, 191, 57);

  (lib.mc_red_ball = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.ClipGroup_1();
    this.instance.setTransform(16.1, 16.1, 0.746, 0.746, 0, 0, 0, 21.5, 21.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 32.2, 32.2);

  (lib.mc_green_ball = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.ClipGroup_1_1();
    this.instance.setTransform(16.1, 16.1, 0.746, 0.746, 0, 0, 0, 21.6, 21.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 32.2, 32.2);

  (lib.mc_blue_ball = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.ClipGroup_1copy();
    this.instance.setTransform(16.1, 16.1, 0.746, 0.746, 0, 0, 0, 21.6, 21.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 32.2, 32.2);

  (lib.mc_animation = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.Symbol21();
    this.instance.setTransform(19.2, 0, 1, 1, 0, 0, 0, 19.2, 0);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ rotation: -2.2 }, 2, cjs.Ease.get(1))
        .to(
          { regX: 19.3, regY: -0.1, rotation: -3.9, x: 19.3 },
          2,
          cjs.Ease.get(1),
        )
        .to({ regX: 19.2, regY: 0, rotation: 1.1, x: 19.2 }, 2, cjs.Ease.get(1))
        .to({ rotation: -0.9 }, 2, cjs.Ease.get(1))
        .to({ rotation: -2.4 }, 3, cjs.Ease.get(1))
        .to({ rotation: 0 }, 3, cjs.Ease.get(1))
        .wait(1),
    );

    // Layer 3
    this.instance_1 = new lib.Tween1("synched", 0);
    this.instance_1.setTransform(18.2, 294.6);

    this.instance_2 = new lib.Tween3("synched", 0);
    this.instance_2.setTransform(23.2, 294.4);
    this.instance_2._off = true;

    this.instance_3 = new lib.Tween4("synched", 0);
    this.instance_3.setTransform(32.1, 294);
    this.instance_3._off = true;

    this.instance_4 = new lib.Tween5("synched", 0);
    this.instance_4.setTransform(18.6, 294.3);
    this.instance_4._off = true;

    this.instance_5 = new lib.Tween6("synched", 0);
    this.instance_5.setTransform(23, 294.6);
    this.instance_5._off = true;

    this.instance_6 = new lib.Tween7("synched", 0);
    this.instance_6.setTransform(27.8, 294.5);
    this.instance_6._off = true;

    this.instance_7 = new lib.Tween8("synched", 0);
    this.instance_7.setTransform(18.2, 294.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 2)
        .to({ state: [{ t: this.instance_3 }] }, 2)
        .to({ state: [{ t: this.instance_4 }] }, 2)
        .to({ state: [{ t: this.instance_5 }] }, 2)
        .to({ state: [{ t: this.instance_6 }] }, 3)
        .to({ state: [{ t: this.instance_7 }] }, 3)
        .wait(1),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ _off: true, x: 23.2, y: 294.4 }, 2, cjs.Ease.get(1))
        .wait(13),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({ _off: false }, 2, cjs.Ease.get(1))
        .to({ _off: true, x: 32.1, y: 294 }, 2, cjs.Ease.get(1))
        .wait(11),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(2)
        .to({ _off: false }, 2, cjs.Ease.get(1))
        .to({ _off: true, x: 18.6, y: 294.3 }, 2, cjs.Ease.get(1))
        .wait(9),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(4)
        .to({ _off: false }, 2, cjs.Ease.get(1))
        .to({ _off: true, x: 23, y: 294.6 }, 2, cjs.Ease.get(1))
        .wait(7),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(6)
        .to({ _off: false }, 2, cjs.Ease.get(1))
        .to({ _off: true, x: 27.8, y: 294.5 }, 3, cjs.Ease.get(1))
        .wait(4),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(8)
        .to({ _off: false }, 3, cjs.Ease.get(1))
        .to({ _off: true, x: 18.2, y: 294.6 }, 3, cjs.Ease.get(1))
        .wait(1),
    );

    // Layer 2
    this.instance_8 = new lib.Symbol22();
    this.instance_8.setTransform(3.7, 246.3, 1, 1, 3);
    this.instance_8._off = true;
    this.instance_8.filters = [
      new cjs.ColorFilter(0.02, 0.02, 0.02, 1, 99.96, 99.96, 99.96, 0),
    ];
    this.instance_8.cache(-3, -3, 45, 97);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ rotation: 5.8 }, 1)
        .to({ rotation: 11.2, x: 12.8, y: 244.6 }, 2)
        .to({ rotation: -1.2, x: -8.2, y: 248.3 }, 2)
        .to({ rotation: 1.5, x: -1.5, y: 249.4 }, 2)
        .to({ rotation: -1.7, x: 4.9, y: 250.7 }, 3)
        .to({ rotation: -1.7, x: -0.1 }, 2)
        .to({ _off: true }, 1)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, -0.5, 40.5, 341.8);

  (lib.LeftsideRibbon = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.star("synched", 0);
    this.instance.setTransform(-47.5, -21.7);

    this.instance_1 = new lib.star("synched", 0);
    this.instance_1.setTransform(-83.2, -21.7);

    this.instance_2 = new lib.star("synched", 0);
    this.instance_2.setTransform(-119, -21.7);

    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        ["#003A58", "#005C8A", "#006699", "#005F8E", "#003A58"],
        [0, 0.192, 0.51, 0.804, 1],
        -52.6,
        56.7,
        -58.8,
        18.9,
      )
      .s()
      .p("AhoB9IAel8ICyB6IABGFg");
    this.shape.setTransform(-10.6, -10.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(
        ["#003A58", "#005C8A", "#006699", "#003A58"],
        [0, 0.192, 0.51, 1],
        -135.3,
        -123.6,
        89.1,
        -67.4,
      )
      .s()
      .p("AsXFnIDJrOIVnAAIAALOg");
    this.shape_1.setTransform(-79.3, -21.3);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(
        ["#003A58", "#005C8A", "#006699", "#005F8E", "#003A58"],
        [0, 0.192, 0.51, 0.804, 1],
        -117.5,
        81.9,
        -120.6,
        -8,
      )
      .s()
      .p("AhxgqIDBlAIAiBPIAAKGIAAAAQgMAAjXmVg");
    this.shape_2.setTransform(-147.1, 19);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(
        ["#003A58", "#005C8A", "#006699", "#003A58"],
        [0, 0.192, 0.51, 1],
        -135.7,
        -197.4,
        59.1,
        -148.6,
      )
      .s()
      .p("AliGPIEPmHIkPmXILEAAIAAMeg");
    this.shape_3.setTransform(-169.6, 17.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-205.1, -57.3, 205.1, 114.7);

  (lib.JugglerBand = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.instance = new lib.juggler("synched", 0);
    this.instance.setTransform(-8.6, -7.8, 1, 0.918, 0, 0, 0, 0, -36.8);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        ["#003A58", "#005C8A", "#006699", "#005F8E", "#003A58"],
        [0, 0.192, 0.51, 0.804, 1],
        -160.4,
        0,
        160.5,
        0,
      )
      .s()
      .p("Aq2H5QhzAYh0AfIjWrSIg0iwQS4m6SXG6IkTOCQrujqtdCzg");
    this.shape.setTransform(0.8, -11);

    this.instance_1 = new lib.LeftsideRibbon("synched", 0);
    this.instance_1.setTransform(71.1, 43.5, 1, 1, 0, 0, 180);

    this.instance_2 = new lib.LeftsideRibbon("synched", 0);
    this.instance_2.setTransform(-71, 43.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );

    // Layer 2
    this.instance_3 = new lib.Symbol1();
    this.instance_3.setTransform(-2.9, -98.9, 1, 1, 0, 0, 0, 48.5, 26.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#0079B7")
      .ss(1, 2, 0, 3)
      .p("AHxAAIk/AAAipAAIlHAA");
    this.shape_1.setTransform(-3.3, -107.1);

    this.instance_4 = new lib.starTOP("synched", 0);
    this.instance_4.setTransform(64.5, -83.7);

    this.instance_5 = new lib.starTOP("synched", 0);
    this.instance_5.setTransform(-69.5, -83.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .rf(
        ["#006293", "#002030"],
        [0.008, 1],
        -0.8,
        -68.2,
        0,
        -0.8,
        -68.2,
        140.2,
      )
      .s()
      .p(
        "AqPLuIAAAAIgBgBImUz+IGvAAIABAAIAJgGIAdgTIBWg4QBEgsA3gZQCShBDYgGQDIAGCXBBQBMAhC1B1IADAAIHWAAImVT/g",
      );
    this.shape_2.setTransform(-1.9, -58.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_2 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.shape_1 },
            { t: this.instance_3 },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-276.1, -133.2, 552.3, 234.1);

  (lib.Symbol3copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#0F204B")
      .s()
      .p(
        "EA8cAGJI/CgBIAAsPIfCgBIBTAAIAAABQBqAJAABzIAAIXQAABzhqAKIAAAAgAcJGJIn+AAI89AAIAAsRIc9AAIH+AAIAzAAIAAMRgEgrPAGJIiVAAIAAsRICVAAMAh6AAAIAAMRgEg8bAGJIg/AAQh9AAgBh9IAAoXQABh9B9AAIA/AAIOUAAIAAMRg",
      );
    this.shape.setTransform(-89.7, 0);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer 1
    this.ikNode_1 = new lib.Symbol2();
    this.ikNode_1.setTransform(-0.5, 1, 1.25, 1.25, 0, 0, 0, 512.6, 21.8);

    this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-512.1, -39.3, 1029.9, 78.8);

  (lib.mc_juggler = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.hand4("single", 0);
    this.instance.setTransform(0, 203.6, 1.228, 1.228);

    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ak3A9IgKgDIAIgFIAAgKIAHAIIALgDIgHAJIAHAIIgKgCIgGAIgAB4A2IgOgBIAMgKIgDgNIALAKIANgHIgFAOIAJAJIgOgBIgHAOgAilA9IgJACIAFgIIgGgIIAKACIAFgIIACAKIAJADIgJAEIAAALgAgmAnIgbgJIAbgKIAAgaIARAVIAZgJIgOAXIAOAWIgZgGIgQAVgAhSA3IgNAEIAIgMIgKgLIAOAEIAJgMIAAAOIAOAFIgNAEIAAAPgABKA3IgOAEIAIgMIgJgLIAOADIAJgMIABAPIAOAEIgOAFIAAAPgAjcArIgUgHIAUgHIAAgVIANARIAVgFIgNAQIALARIgUgGIgMAQgAAPA1IgKgGIALgCIACgJIAFAJIAMgCIgJAIIAFAKIgKgFIgJAHgAkCA1IgKgDIAJgEIAAgKIAGAHIAKgDIgFAJIAGAJIgKgDIgFAIgAh6AfIgVALIAJgWIgQgQIAWADIALgTIAFAUIAYAEIgWAMIAEAYgAknAfIgKgDIAKgFIgCgKIAHAIIAKgDIgFAIIAHAIIgJgDIgHAKgAAdAZIgOgFIAOgFIAAgNIAJALIANgDIgIAMIAHAMIgNgGIgJAMgAikAdIgJgFIAKgBIABgLIAFAJIAKgCIgGAHIAEAKIgJgFIgHAIgAkCAYIgPAEIAKgNIgLgLIAPADIAJgJIACAMIANAFIgNAFIAAAPgACRAYIgLAEIAGgJIgHgJIAKACIAFgIIACALIALADIgLAEIAAAKgADwAXIgLAGIAFgLIgJgIIAMAAIAGgKIADALIAMACIgLAGIADAMgAlHATIgJgFIALgCIADgKIAEAKIAKgBIgGAHIADAKIgKgFIgIAHgACxAEIgWgHIAWgFIABgXIANASIAWgGIgNATIAMAQIgWgGIgOASgABjAPIgOAGIAHgOIgKgHIANAAIAHgLIAEAMIAOADIgNAGIACAPgAEvALIgKAEIAGgKIgIgHIALACIAHgIIABAJIAKADIgKAEIABAMgAi+AFIgSAHIAKgOIgMgQIASAFIALgQIADATIASAGIgSAFIABATgAAvgHIgdALIAPgbIgVgaIAhAHIARgbIAEAgIAgAIIgfAOIADAegAEGgKIgWAEIAPgPIgKgTIASAIIAQgPIgCAVIATAJIgWAEIgCAUgAgRgEIgLgDIAKgDIgCgLIAHAHIALgEIgFAKIAGAHIgJgCIgGAIgAhQgKIgSAAIANgKIgFgRIAPAKIAOgLIgFARIAOALIgRAAIgGAOgAj8gLIgUAKIAJgUIgPgQIAVADIAKgUIAFAVIAWAEIgTALIADAUgAkxgJIgNAGIAHgNIgKgLIAOACIAHgNIADAPIAPACIgNAHIABAOgAiPgVIgZAFIAQgTIgNgWIAYAJIASgSIgCAYIAVALIgXAGIgDAZgADkgNIgKADIAGgIIgGgJIAKACIAGgIIACAKIAIAEIgIAEIgBALgAB6gZIgUAMIAJgVIgQgRIAXADIALgVIAFAXIAWADIgVAMIAEAXgAE7gcIgKgGIAMgCIADgLIAFAKIAMgBIgJAJIAFALIgKgHIgLAKgAjIgfIgOAFIAIgNIgKgMIAPAEIAIgNIABAPIAPAEIgPAHIACAOgAgfgnIgQgKIASgDIAEgSIAIAQIARgCIgMAOIAIAQIgRgIIgMANgADRgsIgLgDIAKgDIAAgMIAHAIIAJgCIgGAIIAHAJIgKgDIgGAIgACpgtIgLAEIAHgJIgHgIIALACIAFgIIAAAKIALADIgLAEIACAKgAhPgxIgJAEIAEgJIgHgIIALACIAFgJIABAKIAKADIgJAFIACAKg",
      );
    this.shape.setTransform(106.3, 49.1, 1, 1, 0, 0, 0, -5, -1.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(0,0,0,0.498)")
      .ss(1, 1, 1)
      .p(
        "Al7BzQgFjxgHgZQgJghgBgbQgBgbALgMQABgCAAgBQAYgYBkgeQBkgfBrgBQAJgBAIAAQAJAAAKABIAXAAQAEAAAFAAIARAAQAGAAAHABQBbAFBXAaQAgAJAYAJQA0ATAOARQACABAAACQALAMgBAbQgBAbgJAhQgGAZgHDxQAAAQAAAQQAAAMAAANQAsgIAhgIQABAAACAAAgYBYQAQAAAOAAIAOAAQCMAFCoAWAl7BzQC6gbCXAAIASAAQAJAAAKAAQAFAAAGAAABtDmQgDAAgCABQgJgBgIAAQgYgBgXgBQgCAAgBAAQgJAAgIAAQgXgBgXABQAKAAALAAQALAAAOAAAgaDkQgIgBgIABQiTAAizAYQgDAAgFABQAAgHAAgEQAAgLAAgFQAAgBAAgCQgBgLAAgLQAAgNgBgMQAAgBAAAAQAAgggBgcAFICsQg2AOgIACQg8AQg3APQgSAFgRAEAHQFBQgcAFiEAPQAAgNgBgMAEvE8QgIg3g6gRQgUgHgSgEQgugJglAEABtDmQgCAAgDABIAAAAQlDBwhygHQhQgFgygFABtDlIAAABABtDlQACAAACgBQABAAACAAQgEABgDAAg",
      );
    this.shape_1.setTransform(115.4, 34.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AGehJQAbgGAvgKQApgIAbAFQAeAFAUAUQANALAGAPQACAEABAGQADAOgDAOQgBAFgDAIQgKAcgYARQgTAOgkAIQgqAIgWAGAnJBfQgygGgNgDQgTgEgigRQgQgHgRgVQgQgTgEgOQAAgBAAAAQAAgBAAgBQgCgGAAgHIACgGIAAgBQAEgLAKgIQASgPAagHQAjgIAcgBQAlgBAkAOQAKAEAYAMQAUALAIAB",
      );
    this.shape_2.setTransform(114.7, 57.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(["#EDD192", "#B68D30"], [0, 1], -19.3, 0.2, 21.9, 0.2)
      .s()
      .p(
        "AlfBHIAAgQIAAgDIAAgWIgBgZIAAgBIgBg6QC6gaCWgBIARAAIAgABIAOAAQCMAECoAWIAAAgIAAAXIg+AQIhzAfIgkAJIgCAAIgEABIgBABIgEABIgRgBIgvgCIgEAAIgQAAQgZgBgVABQgIgBgJABQiTAAiyAYIgJABIAAgLgACLA5IACAAIgGABIAEgBg",
      );
    this.shape_3.setTransform(112.8, 51.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AE1EjQCCgPAbgFQAVgGArgIQAkgIATgOQAYgRAKgcIACgIQAEAIADAJIAAAAQgBAIgEAHQgJAcgYARQgTAOgkAIQgqAIgXAHQgbAEiFAPQABgNgCgLgAlGE2QhRgFgygFIg/gJQgTgEgjgRQgPgIgSgUQgPgUgEgNIgBgCIAAgCIABAAQACgFADgEIAOAVQASAVAPAHQAjARATAEIA/AJQAyAFBRAGQBlAGEMhZIADgBIAvACIARABIAAAAIAAAAQkvBqh3AAIgOgBgAAaA/IgOAAIgMgBIgRAAIgTAAQiXABi6AaQAggtCEgMQBMgICrgMQCSgTA8g+QBOhQgrilQA0ASAOASQABAAAAAAQABAAAAABQAAAAAAAAQAAABABAAQAKANgBAbQgBAbgIAgQgHAagHDwQiogWiMgEg",
      );
    this.shape_4.setTransform(114.8, 36.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#2B2B2B")
      .s()
      .p(
        "AE2FIQgIg3g7gRQgTgHgTgEIBDgSIA+gQQAtgIAggIIADAAIBKgRQApgIAbAFQAeAGAUATQAKAKAGAKIgDAIQgKAcgYARQgTAOgkAIQgqAIgWAGQgbAFiBAPgAlGFEQhQgGgzgFIg/gJQgTgEgigRQgQgHgRgVIgPgVQAEgFAFgFQASgOAagHQAjgJAcAAQAlgBAkANQAKAEAYANQAUAKAIACIAAADIAAAQIAAALIAJgBQCygYCTAAQAJgBAIABIATAAIAbAAIAQAAIAAABQj6BThqAAIgNAAgAmBiLQgIgggBgbQgCgbALgNIACgCQAXgZBlgdQBkgfBrgCIAQgBIAUABIAWAAIAKAAIARABIAMAAQBcAGBWAaQAgAIAZAKQAqClhNBQQg9A8iSAVQirAMhMAIQiDAMggAtQgGjwgHgag",
      );
    this.shape_5.setTransform(114.7, 32.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#666666")
      .s()
      .p(
        "AB6AsIAjgKIBzgeIA+gOQAtgIAggIIADgBIBKgQQApgIAbAFQAeAFAUAUQANALAGANIADAKQADAOgDAOIAAgBQgCgJgEgIQgGgKgKgJQgUgSgegFQgbgFgpAIIhKAQIgDAAQggAHgtAIIg+AQIhDASQgtgKgmAFgApyAvQgCgIAAgHIACgGIAAgBQAEgLAKgIQASgNAagHQAjgIAcgBQAlgBAkAOQAKAEAYAKQAUALAIABIAAAWQgIgBgUgKQgYgNgKgEQgkgMglABQgcABgjAGQgaAHgSAPQgFAEgEAGQgDAEgCAFg",
      );
    this.shape_6.setTransform(114.7, 52.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("rgba(0,0,0,0.498)")
      .ss(1, 1, 1)
      .p(
        "AEWgqQAAgBgBgBQgVgcgbgBQgMgSgGgHQgFgJgLgLQgKgLg2gZQgugXgtgHQgtgIg0AHQg5AHggAMQggANglAsQgVAeghAoQgkAngLAdQgMAdgEAeQgDARACAgAEZgnIgBgBIgBAAIAAgBQAAAAAAgBIgBAAIgBgBAEZgnIAAAAIgCgBIAAgCAFFC9QAiiQhNhTQgBgBAAAAAj6BjICIhTQBJgmBfAXQBfAZAlAUQAkAVAMAX",
      );
    this.shape_7.setTransform(113.1, 52.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#6F3802").s().p("AgCAAIAFAAIgDAAg");
    this.shape_8.setTransform(114.7, 39.8);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#2C212B")
      .s()
      .p("ACBAqIABAAIAAABIAAABgAB/AnIAAAAIABABgAiBgqIAAgBIABABg");
    this.shape_9.setTransform(128.1, 44.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#181818")
      .s()
      .p(
        "AlNCHQgCggADgRQAEgeAMgdQALgbAkgpQAhgoAVgeQAlgsAggNQAggMA5gHQA0gHAtAIQAtAHAuAXQA2AZAKALQALALAFAJIASAZQAbABAVAcIAAABIABABIABAAIAAABIAAABIACABIAAAAIABABQBNBTgiCQIgwgwIgQAHQgOglgNgVQgMgXgkgVQglgUhfgYQhfgYhJAmIiIBTIgLAGIgOATIgNARIgBABIgoAzQgDgggBgYgAATiBIABAAIgBAAIgHAAIACAAIAFAAg",
      );
    this.shape_10.setTransform(113.1, 52.9);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AhDAIQBEgaBDAS");
    this.shape_11.setTransform(110.9, 109, 0.608, 0.667, 0, 1.2, 1.7, 0, -0.4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AAEg2QgRA0ASA5");
    this.shape_12.setTransform(115.4, 76.9, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AgPg1QAhApgDBC");
    this.shape_13.setTransform(107.5, 76.8, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AAWg2QglAtgGBA");
    this.shape_14.setTransform(103.2, 92.1, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AglguQAtAdAeBA");
    this.shape_15.setTransform(120, 92.3, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AAPgxQgDAEgFAKQguA/AyAW");
    this.shape_16.setTransform(105.2, 89.9, 0.664, 0.667, 0, 5.5, 6.1);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("Agfg5QAFAQAmAgQAoAegnAl");
    this.shape_17.setTransform(116.5, 89.4, 0.664, 0.667, 0, 5.5, 6.1);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AguAMQgWADgJgPQgKgPAUAHQASAGAiAPQABABAAAAQAeAQAZgXQADgDADgDQAagcAHAJQAGAIgYAK",
      );
    this.shape_18.setTransform(111.3, 93.2, 0.633, 0.667, 0, 5.5, 6.1);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#87462C")
      .s()
      .p(
        "AgkAPIgKABQgWACgJgPQgKgOAUAHQASAEAiARIgCABIgTgDgAAvAFQAagcAHAIQAGAIgYAKQgSAFgDACIAGgFg",
      );
    this.shape_19.setTransform(111.3, 93, 0.633, 0.667, 0, 5.5, 6.1);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AgSAAQAYAKANgM");
    this.shape_20.setTransform(111.6, 91.1, 1.4, 1.4);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f()
      .s("rgba(0,0,0,0.498)")
      .ss(1, 1, 1)
      .p("AgGgVQAEABACAAQAAABAAgBQAEAAADgBAAAAWQAAgCAAAAIAAAC");
    this.shape_21.setTransform(111.6, 96.2);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAAgDQglAyg6ADQgGABgFAAQg8ACgeguQgUgbAAgeQALA0AmAFQALAAAOgDQATgDASgJQAcgTAFgCQAfgUAjABAAHgwQAjgBAgAUQAEACAcATQASAJATADQAOADALAAQAmgFALg0QAAAegUAbQgeAug8gCQgFAAgGgBQg6gDgmgy",
      );
    this.shape_22.setTransform(111.6, 98.9);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#3E3E3E")
      .s()
      .p(
        "AB+AnIgLgEQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIABgBIATACQAMgBALgEIAPgHIADgDIgGAHQgQALgWAAIgEAAgAinAcIgHgHIAFADIAOAHQALAEAMABIATgCIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgLAEIgEAAQgWAAgQgLgABgAlQgOAAgMgFIgNgGIgVgQIgVgRQAJAAAIAIIAJAJQAIAFASAJQATAJAKAEIAFABIgFgBgAhfAlQAKgEATgJQASgJAIgFIAJgJQAIgIAJAAIgVARIgVAQIgNAGQgMAFgOAAIgFABIAFgBgAAzAKQARAAARAEQAOAEANAHgAhUAOQARgEARAAIg9APQANgHAOgEgAB4APQAkAFATgMQAUgJAHgGQgEAGgFACIgLAJQgSAMgRAAQgOAAgNgHgAi1AKIgLgJQgFgCgEgGQAHAGAUAJQATAMAkgFQgNAHgOAAQgRAAgSgMgABgABQgdgHgfgRIBnAkIABABIgsgNgAiLANIBogkQgfARgdAHIgsANgABJAFIgdgJQgNgGgMgHQALACAQAIQARAHAPAEIAAABgAhNAFIAAgBQAPgEARgHQAQgIALgCQgLAHgOAGIgdAJgAA3gbQgLgFgkgEQAdgHAdAPIALAGIAJAHIgfgMgAhMgWIAMgGQAcgPAdAHQgkAEgLAFIgfAMIAJgHg",
      );
    this.shape_23.setTransform(111.6, 99.1);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#181818")
      .s()
      .p(
        "ABrAzQgFAAgGgBQg6gDgmgyIAAgCIAAACQglAyg6ADQgGABgFAAQg8ACgeguQgUgbAAgeQALA0AmAFQALAAAOgDQATgDASgJIAhgVQAfgUAjABIAGACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAHgCQAjgBAgAUIAgAVQASAJATADQAOADALAAQAmgFALg0QAAAegUAbQgdAsg5AAIgEAAgAB+ApQAZABARgMIAGgHIgDADIgPAHQgLAEgMABIgTgCIgBABQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIALAEgAinAeQARAMAZgBIALgEQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBgBIgTACQgMgBgLgEIgOgHIgFgDIAHAHgAAkAMIAVAQIANAGQAMAFAOAAQALADgLgDQgKgEgTgJQgSgJgIgFIgJgJQgIgIgJAAIAVARgAgfADIgJAJQgIAFgSAJQgTAJgKAEQgLADALgDQAOAAAMgFIANgGIAVgQIAVgRQgJAAgIAIgABwAbQgNgHgOgEQgRgEgRAAgAhUAQQgOAEgNAHIA9gPQgRAAgRAEgAC2AMIALgJQAFgDAEgFQgHAFgUAKQgTAMgkgFQAeAQAggVgAjAADIALAJQAgAVAegQQgkAFgTgMQgUgKgHgFQAEAFAFADgABgADIAsANIgBgBIhngkQAfARAdAHgAiLAPIAAABIAsgNQAdgHAfgRgAAsgCIAdAJIAFAAIAAgBQgPgEgRgHQgQgIgLgCQAMAHANAGgAgtgFQgRAHgPAEIAAABIAFAAIAdgJQAOgGALgHQgLACgQAIgAAIgiQAkAEALAFIAfAMIgJgHIgLgGQgUgKgUAAQgJAAgJACgAhAgaIgMAGIgJAHIAfgMQALgFAkgEQgJgCgJAAQgUAAgTAKg",
      );
    this.shape_24.setTransform(111.6, 98.9);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("rgba(241,234,226,0.8)")
      .s()
      .p(
        "AgGAGQgCgCAAgEQAAgCACgEQADgDADAAQADAAAEADQADAEAAACQAAAEgDACQgEADgDAAQgDAAgDgDg",
      );
    this.shape_25.setTransform(122.4, 75.5, 0.634, 0.667, 0, 2.6, 1.1);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AhFAgQALggASgOQApgdBGAV");
    this.shape_26.setTransform(122, 74.9, 0.634, 0.667, 0, 2.6, 1.1);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("Ag5gQQAyAoBBgI");
    this.shape_27.setTransform(121, 80, 0.634, 0.667, 0, 2.6, 1.1);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAVAAQAAAIgHAHQgGAGgIAAQgIAAgGgHQgGgHAAgHQAAgJAIgHQACgDADgBQAIAAAKABQADACACACQAFAHAAAIg",
      );
    this.shape_28.setTransform(122.5, 76.4);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#271E14")
      .s()
      .p(
        "AgGAHQgDgDAAgEQAAgDADgDQAEgEACAAQAFAAADAEQADADgBADQAAAEgDADQgDAEgEAAQgDAAgDgEg",
      );
    this.shape_29.setTransform(122.5, 76.3);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#553622")
      .s()
      .p(
        "AgOAOQgGgHAAgHQAAgJAIgHQACgDADgBIASABIAFAEQAFAHAAAIQAAAIgHAHQgGAGgIAAQgIAAgGgHgAgGgIQgDADAAAFQAAADADADQADADADAAQAEAAADgDQADgDAAgDQABgFgDgDQgDgDgFAAQgCAAgEADg",
      );
    this.shape_30.setTransform(122.5, 76.4);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgtARQgEgBgCgBIgFABQgHgEAKgDQAHgRAQgKQAbgHAcAJQAVAOANAQIgJgEQghAUg+gNg",
      );
    this.shape_31.setTransform(123.1, 76.6);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#F9D6D2")
      .s()
      .p(
        "AgzARIgFACQgHgFAKgDQAHgRAQgKQAbgGAcAJQAVANANARIgJgEQgJgQgXgGQgqgPgVAaQgHALAHAHIgGgDg",
      );
    this.shape_32.setTransform(123.1, 76.3);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#FDF2F0")
      .s()
      .p("AgtAPQgHgHAHgIQAVgcAqAOQAXAHAJAPQgUAMgeAAQgUAAgZgFg");
    this.shape_33.setTransform(123.1, 76.8);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AhogHQAIgBAggNQAfgNA+AGQA2AOAfAkQAEALgTgLQgTgKg7gHQg4gFg+AeQgUgIAEgWQAAgHAJAAg",
      );
    this.shape_34.setTransform(125, 69.8, 0.695, 0.666, 0, 8.8, 6.1);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#4B3323")
      .s()
      .p(
        "AhxAAQAAgHAJAAQAIgBAggNQAfgNA+AGQA2AOAfAkQAEALgTgLQgTgKg7gHQg4gFg+AeQgUgIAEgWg",
      );
    this.shape_35.setTransform(125, 69.8, 0.695, 0.666, 0, 8.8, 6.1);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AACB7QABgBAEgJQAEgIAAgIQACglAGgRQACgMAEgFQAKgLAJgFIgEgrQgDhig1AKQgMACgOAIQAnA1gFAWQALAkABAZQACAbgGAiQAAABAAAA",
      );
    this.shape_36.setTransform(140, 74.3, 1.4, 1.4);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#181818")
      .s()
      .p(
        "AABB6QgBgCgEADQAGgVgCgPIAAgBQAGgigCgbQgBgZgLgkQAFgWgng1QAOgIAMgCQA1gKACBiIAFArQgJAFgKALQgEAFgCAMQgGARgCAlQAAAIgFAIIgEAKIgBgBg",
      );
    this.shape_37.setTransform(140, 74.3, 1.4, 1.4);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgJg0QAFgGABgBQABgDADACQAHAAAEAMQADALgCAMQAAALgJAOQgDAIgIASQgCAJgEASQgDAOgPAAQgLgCgBgLQAFgFAFgDQAMgNAGgTQAHgSgIgHQgJgKABgLQAGgCAHgLQACgEAAgDQACgFADgDQAQgfATAFQAGADAMACQgCgKgGgIQgogZgWAuQgEAKAAAYAgwBIQAAgBAAgBIAAgCQADgHACgHAAxhRQAIAXgGAfQgOApgkAmQgDAEgBASQAAATgPAMQgCABgDABQgMAHgSgRAAJAWQAvg0gZg4AgegdQADgBADgC",
      );
    this.shape_38.setTransform(144.8, 86.5);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#AE5A37")
      .s()
      .p(
        "AgcAzIAKgIQAMgMAGgTQAFgSgGgIQgJgKABgKQAGgDAFgLQACgDAAgEIAGgHQABgCAFABQAHAAAEANQADALgCAMQAAALgJAPIgNAYIgGAbQgBAPgPAAQgLgDgBgLg",
      );
    this.shape_39.setTransform(143.3, 86.8);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#A85735")
      .s()
      .p(
        "Ag0BhQgBgEABgDQABgMAEgGIAAgCIAAgCQAGg0AMgtIAFgPQAAgYADgKQAWguAoAZQAGAIACAKQgMgCgGgDQAGADAMACQAJAXgHAfQgOApgkAmQgDAEgBASQAAATgOAMIgFACQgEACgEAAQgKAAgMgMgAgvBEIAFgOIgFAOgAgQgLQAJAHgIASQgGATgLANIgKAIQABALAKACQAPAAAEgOIAGgbIALgaQAIgOAAgLQADgMgEgLQgDgMgIAAQgDgCgBADIgGAHIAFgIIAAgBIABAAIABgDQAMgWAPAAIABAAIAAAAIAEAAIABAAIAAAAQAJAUAAATQAAAkgeAhQAeghAAgkQAAgTgJgUIAAAAIgBAAIgEAAIAAAAIgBAAQgPAAgMAWIgBADIgBAAIAAABIgFAIQAAADgCAEQgGALgGACIgGADIAGgDQgBALAIAKgAgXggIAAAAg",
      );
    this.shape_40.setTransform(144.7, 86.5);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAZggQgGgCgGgLQgDgEAAgDQgFgGAAgBQgCgDgDACQgHAAgEAMQgDALACAMQAAALAJAOQADAIAIASQACAJAEASQADAOAPAAQALgCABgLQgFgFgFgDQgMgNgGgTQgHgSAIgHQAJgKgBgLgAgvhRQABgKAHgIQAngZAWAuQAEAKAAAYAAfgdQgCgBgEgCAAsA2QACAHADAHIAAACQAAABAAABAA2BhQgRARgNgHQgDgBgCgBQgOgMAAgTQgCgSgDgEQgkgmgOgpQgGgfAJgXAAKg0QgCgFgDgDQgQgfgTAFQgGADgLACAgIAWQgvg0AZg4",
      );
    this.shape_41.setTransform(79.7, 86.5);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#AE5A37")
      .s()
      .p(
        "AAAAyIgFgbIgNgYQgJgPAAgLQgCgMADgLQAEgNAHAAQAFgBACACIAFAHQAAAEADADQAEALAGADQABAKgJAKQgGAIAFASQAGATAMAMIAKAIQgBALgLADQgPAAgCgPg",
      );
    this.shape_42.setTransform(81.2, 86.8);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#A85735")
      .s()
      .p(
        "AAXBrIgFgCQgOgMAAgTQgBgSgDgEQgkgmgOgpQgHgfAJgXQAMgCAGgDIAAAAIABAAIAEAAIAAAAIABAAQAPAAAMAXIABABIABACIAFAIIgGgHQgBgDgDACQgHAAgEAMQgEALADAMQAAALAIAOIALAaIAGAbQAEAOAPAAQAKgCABgLIAFAOIAAACIAAACQAEAGABAMQABADgBAEQgMAMgKAAQgEAAgEgCgAgJAWQgeghAAgkQAAgTAJgUQgJAUAAATQAAAkAeAhgAAwBEIAAAAgAArA2IgJgIQgMgNgGgTQgIgSAJgHQAJgKgCgLIAHADQALAtAGA0IgFgOgAAYggQgGgCgGgLQgCgEAAgDIgFgIIgBgCIgBgBQgMgXgPAAIgBAAIAAAAIgEAAIgBAAIAAAAQgGADgMACQACgKAGgIQAogZAWAuQAEAKAAAYIAFAPIgHgDg",
      );
    this.shape_43.setTransform(79.8, 86.5);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("rgba(241,234,226,0.8)")
      .s()
      .p(
        "AgGAGQgCgCAAgEQAAgCACgEQADgDADAAQADAAAEADQADAEAAACQAAAEgDACQgEADgDAAQgDAAgDgDg",
      );
    this.shape_44.setTransform(99.6, 75.5, 0.634, 0.667, 0, -2.6, 178.9);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("AhFAgQALggASgOQApgdBGAV");
    this.shape_45.setTransform(100, 74.9, 0.634, 0.667, 0, -2.6, 178.9);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p("Ag5gQQAyAoBBgI");
    this.shape_46.setTransform(101.7, 80.4, 0.634, 0.667, 0, -2.6, 178.9);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgUAAQAAAIAHAHQAGAGAIAAQAIAAAGgHQAGgHAAgHQAAgJgIgHQgCgDgDgBQgIAAgKABQgDACgCACQgFAHAAAIg",
      );
    this.shape_47.setTransform(99.5, 76.4);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#271E14")
      .s()
      .p(
        "AgGAHQgDgDAAgEQgBgDADgDQADgEAEAAQADAAAEAEQADADAAADQAAAEgDADQgDAEgEAAQgDAAgDgEg",
      );
    this.shape_48.setTransform(99.5, 76.3);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#553622")
      .s()
      .p(
        "AgNAPQgHgHAAgIQAAgIAFgHIAFgEIASgBQADABACADQAIAHAAAJQAAAHgGAHQgGAHgIAAQgIAAgGgGgAgHgIQgDADABAFQAAADADADQADADADAAQAEAAADgDQADgDAAgDQAAgFgDgDQgEgDgDAAQgEAAgDADg",
      );
    this.shape_49.setTransform(99.5, 76.4);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAuARQADgBADAAIAFAAQAGgEgJgCQgGgSgSgJQgagIgcAJQgVAOgOAQIAKgEQAgAUA/gNg",
      );
    this.shape_50.setTransform(98.8, 76.6);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#FDF2F0")
      .s()
      .p("AgxAIQAJgQAXgGQApgOAWAcQAHAIgHAHQgZAFgVAAQgdAAgUgMg");
    this.shape_51.setTransform(98.8, 76.9);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#F9D6D2")
      .s()
      .p(
        "AAuADQgWgagpAOQgXAGgJAQIgKAEQAOgRAVgNQAcgKAaAIQASAJAGASQAJACgGAFIgFgBIgGACQAHgHgHgKg",
      );
    this.shape_52.setTransform(98.8, 76.4);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgBB7QgBgBgDgJQgEgIAAgIQgCglgHgRQgCgMgEgFQgKgLgIgFIADgrQADhiA1AKQAMACAPAIQgnA1AFAWQgMAkgBAZQgBAbAEAiQAAABAAAA",
      );
    this.shape_53.setTransform(84.8, 74.3, 1.4, 1.4);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#181818")
      .s()
      .p(
        "AgGBxQgDgIAAgIQgDglgGgRQgCgMgEgFQgJgLgJgFIADgrQADhiA1AKQAMACAPAIQgnA1AEAWQgLAkgBAZQgBAbAEAiIAAABQgBAPAFAVQgEgDAAACIgBABIgFgKg",
      );
    this.shape_54.setTransform(84.8, 74.3, 1.4, 1.4);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "ABcgGQgFAAgHAAQgcgEgUAGQgKAEgKAAQgEAAgDAAQgBAAgBAAQgOAAgOgGQgVgHgeADQgGAAgEAAQgNAAgCgFQADgGAJAEQAIACAUgJQARgIAWgCQADAAADAAQACAAACgBQAIAFAJABIAAAAQAEAAADAAQAGgCAFgDQAYADATAKQAEADAFACQALAFAFgBQAIgEADAHQgBADgJAAQgJAEgIALQgIAMgNAJQgVAHgVAAQgVAAgbgHQgTgHgOgQQgMgNgFgE",
      );
    this.shape_55.setTransform(111, 103.1);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#944138")
      .s()
      .p(
        "AAFARIgCAAQgOAAgOgIQgVgGgeACIgKABQgNAAgCgGQADgDAIADQAJABAUgHQARgIAWgCIgKADQgKAFAAAFQAAADAIACIAJABQASAGAFABQAFABAKgBIAEgBIASgFIARAAQAHABAHgBQAFgBAEgDQALAEAFAAQAIgEAEAHQgCADgJAAIgNgBQgbgEgUAHQgKAFgJAAIgIAAg",
      );
    this.shape_56.setTransform(111, 101.3);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#AE4A40")
      .s()
      .p(
        "AgRAOQgGgBgRgGIgJgBQgJgDAAgDQABgEAJgFIAKgDIAHAAIADgCQAJAGAKABIAAAAIAIAAIAIgFQAZACASAKIAJAEQgDAEgGAAQgHACgGgCIgRAAIgSAFIgDABIgJAAIgHAAg",
      );
    this.shape_57.setTransform(112.6, 100.9);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#CF847C")
      .s()
      .p(
        "AgLAKIgIgBQgIgBgFgGIgDgGQAKADAOAAIAJgBQAQgDAJgDQAKgEADACIABAFQgJAPgQABIgIABIgPgCg",
      );
    this.shape_58.setTransform(113.6, 104.5);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#C76C63")
      .s()
      .p(
        "AgmARQgTgHgOgNQgMgPgGgEIAKgBQAfgCAVAGQAOAIAOAAIABAAIAIAAQAKAAAKgFQATgHAcAEIANABQgJAEgIANQgIAJgOAJQgUAHgVAAQgWAAgagHgAgJAEQAGAFAFABIAIACQAOACALgBQARgBAIgQIgBgEQgDgDgKAFQgJADgRADIgKAAQgLAAgLgDg",
      );
    this.shape_59.setTransform(111.2, 104.3);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AhogHQAIgBAggNQAfgNA+AGQA2AOAfAkQAEALgTgLQgTgKg7gHQg4gFg+AeQgUgIAEgWQAAgHAJAAg",
      );
    this.shape_60.setTransform(97, 69.8, 0.695, 0.666, 0, -8.8, 173.9);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#4B3323")
      .s()
      .p(
        "AhxAAQAAgHAJAAQAIgBAggNQAfgNA+AGQA2AOAfAkQAEALgTgLQgTgKg7gHQg4gFg+AeQgUgIAEgWg",
      );
    this.shape_61.setTransform(97, 69.8, 0.695, 0.666, 0, -8.8, 173.9);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#CD805F")
      .s()
      .p(
        "AACA8QgPgZgZgYQgOgLAEgMQA6gGAigxIgBgBQAGgDABAKQgCAHABAGIgBAiQgCAZgaA5IgGABQgJAAgDgJg",
      );
    this.shape_62.setTransform(127.8, 86.2, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#E2997A")
      .s()
      .p("AAEADQgMgNgKgIQAIgDAOAOQAPAMAAAIIAAAGIgBAAQABgBgPgPg");
    this.shape_63.setTransform(116.1, 89.3, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#CD805F")
      .s()
      .p(
        "AgGBfQAGgtgHgtQgJgrgIhCQALAkAIAjQAGAhAMAsQAMAcAAAYQgOAJgIAAQgGAAgDgKg",
      );
    this.shape_64.setTransform(113.9, 83.9, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#C46942")
      .s()
      .p("AgUAjQAEACANgRQALgSANgyQADAXgGAaQgGAcgPATIgIABQgOAAAFgOg");
    this.shape_65.setTransform(131.9, 93.7, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics.f("#A85735").s().p("AghAeQArgUAXgoQgEA2g2AHIgIgBg");
    this.shape_66.setTransform(127.7, 80.4, 0.635, 0.667, 0, 5.5, 6.1);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgMl3QiFgEhzBIQg+BMARBnQADB9AdBoQAAAKABAKQAAA8AsAwQAEAGAkAfQA9BAA2AXQAqAUAYADQAGAAADAAQACAAACAAQAXgDAlgRQAEgCADgBQAVgJAVgOQAjgYAmgoQAkgfAEgGQArgwAAg8QACgKAAgKQAchoAEh9QAAgFABgFQABgGABgFQAAgDABgBQAAgEAAgDQAAgOAAgOQgFg7gigvQgFgGgFgHQhzhIiGAE",
      );
    this.shape_67.setTransform(111.8, 84.8);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#C46942")
      .s()
      .p(
        "AgTE6IgSADIgJgBIAAgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIgHgBQgPgHgPgOQgWgTAOgeQAJgaAdgGQAFgCAHAAIAPAAQAUgBAPABQAIAAAHACQAHADAHAAQgYgaAEgZQADgNAIgFQgfAHAAgzQAAgzAOgCQAOgEAHAEQAGAEATAcQACgVgMgUQgLgVghgeQgggggBADQAnAqgNAOQgPANgTAAIgSgBIgQgGQgLgEACgVIAQhDQgCghADgWQAFgbgGgHQgFgLgRgIQgPgIgdgEQgRgEgSABIgIABIgPAGQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAqAaADAGQAGABAFAEQAWAWAAAQQAAAJgGAJQgDAGgFADQgQANgRAEQAegBAQgJQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAQgKADgEQAIAOAAAVQgBAUghAYQgXARgDAaQgDAbgJAMIgBgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgCgHIgBgEQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIgCgDQgBgCgEgCQgHAHgIAAQgGAAgHgEQgLgDgMgNQgjggABgmQAAgaALgHQAGgEAKADIAdADIAogBIAFgBIgCAAQgXgKgOgUQgNgTAogUQgYAAgFgJQgdgCABgRIACgPQAAADAHgTQAGgTAkgmQAjgmA2gLQA2gOAjAHQBwAUA7AUQA6AUAgAbIAAAcIAAAHIgBAEIgBALIgCAKQgDB9gdBoIgBAUQAAA8grAwQgEAGgkAfQgmAogkAYQgVAOgUAJIgHADIgLAAQgNAAgOgDgAAOhUQASAQAUAAQATABAPgOQgXAFgOgCQgNgDgSgVQAFgZAVgMQANgHALgCQANgCALAEIATAHQgEgLgFgEQgKgSgOgLIgPgIQgRgGgPADQgOABgaAVQgZASANA8QABALAFALQAAgHADgHQABgDADgCQACgDAEAAQAFAAALAKgADWhiIAAgBIAAAAg",
      );
    this.shape_68.setTransform(116.5, 88.7);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#A85735")
      .s()
      .p(
        "AgGF4QgYgDgrgUQg2gXg9hAQgkgfgDgGQgsgwAAg8IgBgUQgdhogDh9QgRhnA+hMQByhICGAEIAFAAIASAAQCGgEBzBIIAJANQAiAvAFA7Qgggbg6gUQg7gUhxgUQgkgHg0AOQg2ALgjAmQgkAmgGATQgHATAAgDIgCAPQgBARAdACQAFAJAYAAQgoAUANATQAOAUAXAKIABAAIgEABIgoABIgdgDQgKgDgGAEQgLAHAAAaQgBAkAjAiQAMANALADQAHAEAGAAQAIAAAHgHQAEACABACIACADQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIABAEIACAHQAAAAABAAQAAAAAAABQABAAAAABQAAABABAAIABAGQAJgMADgbQADgaAXgTQAhgYABgSQAAgVgIgOQgDAEgQAKQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgQAJgeABQARgEAQgNQAFgDADgGQAGgJAAgJQAAgQgWgWQgFgEgGgBQgDgGgqgaQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAPgGIAIgBQASgBARAEQAdAEAPAIQARAIAFALQAGAHgFAbQgDAWACAhIgQBBQgCAXALAEIAQAGIAQABQATAAAPgNQAPgOgpgqQABgDAiAeQAhAgALAVQAMAUgCAVQgTgcgGgEQgHgEgOAEQgQACAAAzQAAAzAhgHQgIAFgDANQgEAZAYAaQgHAAgHgDQgHgCgIAAQgRgBgUABIgPAAQgFAAgFACQgdAGgJAaQgOAeAWATQAPAOAPAHIAGABIAAAAIAJABIASgDQASAEAWgBQgmARgWADIgFAAIgDAAIgFAAgABkgdQgUAAgSgQQgSgPgGAIQgDACgBADQgDAHAAAHQgFgLgBgLQgNg8AZgSQAcgVAOgBQAPgDARAGIAPAIQAOALAKASQAFAEAEALIgTgHQgLgEgNACQgLACgNAHQgVAMgFAZQASAVANADQAOACAXgFQgOANgTAAIgBAAgAEGg8IAAAAIAAABg",
      );
    this.shape_69.setTransform(111.7, 84.8);

    this.instance_1 = new lib.Bow("synched", 0);
    this.instance_1.setTransform(
      111.6,
      139.5,
      1.228,
      1.228,
      0,
      0,
      0,
      13.9,
      9.3,
    );
    this.instance_1.filters = [
      new cjs.ColorFilter(0.26, 0.26, 0.26, 1, 3.7, 21.46, 32.56, 0),
    ];
    this.instance_1.cache(-3, -3, 34, 25);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f()
      .s("rgba(0,0,0,0.498)")
      .ss(1, 1, 1)
      .p(
        "AAYgRQACAGAAAGQAAALgJAIQgJAJgKAAQgDAAgCAAQgJgCgIgHQgBgBgBgCQgDgFAAgGIAAAAQAAgLAJgJQAJgJALAAQAMAAAIAJQACABACACQAGAIAAAJQAAALgKAKQgIAJgMAAQgDAAgEgCQgHgCgGgFQgCgDgCgD",
      );
    this.shape_70.setTransform(118.2, 301.8);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#AB8769")
      .s()
      .p(
        "AgKAWQgGgBgGgHIgFgGIABAAQAIAHAIACIAGAAQAKABAIgKQAKgIgBgLQAAgGgCgFQAGAHABALQAAAJgKAJQgJAKgKgBIgJgBg",
      );
    this.shape_71.setTransform(118.4, 302.4);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#D1BDAD")
      .s()
      .p(
        "AgFAaQgJgCgIgHIgCgDQgDgFAAgGIAAAAQAAgLAJgJQAJgJALAAQAMAAAIAJIAEAEQACAFAAAGQAAAKgJAJQgJAKgKgBIgFAAg",
      );
    this.shape_72.setTransform(118, 301.5);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f()
      .s("rgba(0,0,0,0.498)")
      .ss(1, 1, 1)
      .p(
        "AAYgQQACAFAAAGQAAALgJAIQgJAJgKAAQgDAAgCAAQgJgBgIgIQgBgBgBgBQgDgGAAgGIAAAAQAAgLAJgJQAJgJALAAQAMAAAIAJQACACACACgAgYAPQACADACACQAGAHAHABQAEACADAAQAMAAAIgKQAKgIAAgMQAAgIgGgI",
      );
    this.shape_73.setTransform(118.2, 267.5);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#AB8769")
      .s()
      .p(
        "AgKAWQgGgCgGgGIgFgFIABgBQAIAIAIABIAGAAQAKAAAIgJQAKgIgBgLQAAgGgCgGQAGAIABAKQAAAKgKAJQgJAKgKAAIgJgCg",
      );
    this.shape_74.setTransform(118.4, 268.1);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#D1BDAD")
      .s()
      .p(
        "AgFAaQgJgBgIgIIgCgCQgDgGAAgFIAAgBQAAgLAJgJQAJgIALgBQAMABAIAIIAEAEQACAGAAAGQAAAKgJAIQgJAJgKAAIgFAAg",
      );
    this.shape_75.setTransform(118, 267.2);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f()
      .s("rgba(0,0,0,0.498)")
      .ss(1, 1, 1)
      .p(
        "AgYAPQACADACACQAGAHAHABQAEACADAAQAMAAAIgKQAKgIAAgMQAAgJgGgHQACAFAAAGQAAAKgJAJQgJAKgKAAQgDAAgCAAQgJgCgIgIQgBgBgBgBQgDgGAAgGIAAAAQAAgLAJgJQAJgJALAAQAMAAAIAJQACABACAD",
      );
    this.shape_76.setTransform(118.2, 226.6);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#D1BDAD")
      .s()
      .p(
        "AgFAaQgJgCgIgHIgCgDQgDgFAAgGIAAAAQAAgLAJgJQAJgJALAAQAMAAAIAJIAEAEQACAFAAAGQAAAKgJAJQgJAKgKgBIgFAAg",
      );
    this.shape_77.setTransform(118, 226.3);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#AB8769")
      .s()
      .p(
        "AgKAWQgGgCgGgGIgFgGIABAAQAIAHAIACIAGAAQAKABAIgKQAKgIgBgLQAAgGgCgFQAGAHABALQAAAKgKAIQgJAJgKAAIgJgBg",
      );
    this.shape_78.setTransform(118.4, 227.2);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgTgCQABgGAFgFQAGgGAHAAQAIAAAGAGQAFAFABAGQAAACAAAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAAAAAgCg",
      );
    this.shape_79.setTransform(113.6, 199.9);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#C4CDE6")
      .s()
      .p(
        "AgNAKQgGgFAAgFQAAgEAGgFQAGgGAHAAQAIAAAGAGQAFAFABAEQgBAFgFAFQgGAGgIAAQgHAAgGgGg",
      );
    this.shape_80.setTransform(113.6, 199.5);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#ADBADC")
      .s()
      .p(
        "AgNAGQgGgGAAgHIAAgEQABAGAFAFQAGAEAHAAQAIAAAGgEQAFgFABgGIAAAEQAAAHgGAGQgGAGgIAAQgHAAgGgGg",
      );
    this.shape_81.setTransform(113.6, 200.7);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAUgCQAAACAAAAQAAAIgGAHQgGAFgIAAQgHAAgGgFQgGgHAAgIQAAAAAAgCQABgGAFgFQAGgGAHAAQAIAAAGAGQAFAFABAGg",
      );
    this.shape_82.setTransform(113.6, 178.5);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#C4CDE6")
      .s()
      .p(
        "AgNAKQgGgEAAgGQAAgEAGgFQAGgGAHgBQAIABAGAGQAFAFABAEQgBAGgFAEQgGAHgIAAQgHAAgGgHg",
      );
    this.shape_83.setTransform(113.6, 178.1);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#ADBADC")
      .s()
      .p(
        "AgNAGQgGgGAAgHIAAgEQABAGAFAFQAGAEAHAAQAIAAAGgEQAFgFABgGIAAAEQAAAHgGAGQgGAGgIAAQgHAAgGgGg",
      );
    this.shape_84.setTransform(113.6, 179.4);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AgTgCQABgGAFgFQAGgGAHAAQAIAAAGAGQAFAFABAGQAAACAAAAQAAAIgGAHQgGAFgIAAQgHAAgGgFQgGgHAAgIQAAAAAAgCg",
      );
    this.shape_85.setTransform(113.6, 157.5);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#C4CDE6")
      .s()
      .p(
        "AgNALQgGgFAAgGQAAgEAGgFQAGgHAHABQAIgBAGAHQAFAFABAEQgBAGgFAFQgGAFgIAAQgHAAgGgFg",
      );
    this.shape_86.setTransform(113.6, 157.1);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f("#ADBADC")
      .s()
      .p(
        "AgNAGQgGgGAAgHIAAgEQABAGAFAFQAGAEAHAAQAIAAAGgEQAFgFABgGIAAAEQAAAHgGAGQgGAGgIAAQgHAAgGgGg",
      );
    this.shape_87.setTransform(113.6, 158.4);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AAWl5QABgBACgBQAJgEAHgHQABgCACgBQADgIACgKQABgOAAgCQgBgOgEgKQgCgMgGgHQgDgHgDgEQgBgBgBgBQgDgFgBgBQgCgBAAAAQgLgNgMgDQgPgEgJAIQgJAIABANQAAAJAFAHQACAEADACQADAEADABQAFABAEABQAAgBABAAQAGAAAGgGQADgEABgFQABgDgBgCQABgFgCgCQAAgBgCgBQgBgCgBgCQgFgGgIAAQgDAAgCABQgDAEAAAGQAAABAAABIAAAAQAAAEAEACQAAABABABIAAAAQAGAFgCgKQgBgBAAgBQAAgBgBgBQABgBABgBQABgBADAAQABAAAAACQABAAABACQAAABAAAAQABAHgCACQgEACgCACQgCADgEgFQgBgBgBAAQAAAAgBgBQgFgFAAgHQAAgEACgDQABgEAHgDQAGgEAHAFQAJAFABABQAAAAAEAFQABABABACQAEAEAIAOQADAFACAGQAGASgDAcQAAABgBABQgBADgBAAQgBACgHAGQgIAHgHgCQgHgCgDgDQgCgDAAgDQAAgIACgHQABgBABgBQADgFADABQAEgBADADQAEADgBAFQAAAEgCACQAAADgBAAQgCAAgBgBQgDgBAAgCQAAgBABgDQAAgJgFAGIAAAAQgBACAAAAQgDAEABAGQACAGAEADQACAAADgBQAIgCAFgHQABgBABgEQACgEgBgFQgBgDgBgCQgCgFgFgDQgHgFgIACQAAAAgBAAQgGACgEAIQgDADgBADQgEAJACAJQADAJAGAGQgJABgTgBQABgBACgCQAKgKgHgUQgIgVgRgSQgSgRgUgFQgUgEgMALQgKAKAGAUQAGAVATARQAOANAOAGQAEABADABQAAAAABABIAAABQACAAABABQAFACAFACQgDAFgDAEQgHgKgNgGQgVgKgdADQgdAEgUAOQgVAOgCAZQAAAZAWAMQAXAMAggNQAbgLATgMQADgDADgCQAOgKACgLQABgBAAAAQABgFgBgEQgBgGgDgFAhrnJQgGAFAFAPQAHAPAPAMQAOAMAOAIQAQAHAFgKQAFgKgGgMQgIgMgNgPQgNgPgOgCQgNgDgIAFgAhCleQgEgHgSgGQgTgHgRABQgSABgOAIQgPAKgBAOQgBAPAOAHQAOAIAYgIQAYgJARgJQASgKgDgHQgBgBAAAAgAgplIQAJgIAGABQAHACADAQQABAQgEARQgFASgKAJQgJAJgKgEQgKgDgBgNQgBgMAHgTQAIgUAJgJgAhJk8QgCACgFAQQgFARAGAbQAGAaAPACQAQAAAQgPQAPgQAIgZQAHgagEgUQgFgQgLgFQAJgGALgFQgBAEAAAFQgBAKAHAHQABADAEADQADADADACQADABAFAAQABAAABAAQAHAAAGgGQAEgEAAgFQACgDgBgDQAAgEgCgDQAAgBgBgBQgBgCgCgCQgGgGgJAAQgCAAgCABQgEAEAAAFQAAACAAAAIAAABQABAEADADQAAABABAAIABABQAFAFgBgKQgCgCAAgBQAAgBgBgBQABAAABgCQACgCACABQABAAABACQAAABABABQABAAABAFQABADgCAEQgDADgDABQgEACgEgFQAAgBgBgBQgBAAgBAAQgFgGABgHQgBgEACgDQABgEAHgDQAGgEAJAFQAKAGAAAAQABAAADAFQACABAAACQAEAEACAMQADALAAAYQAAAWgQAWQgBAAAAgBQgMgIgQABQgPAAgHAHQgJAHAAAKQABAKAIAHQAHAGAOgDQAQgEAFgCQADgDALgNQAXATAFAOQAHAVABAEQABADAAADQAFAPgDAZQAAABgBACQgBACgBAAQgBABgGAIQgIAGgIgBQgGgCgDgDQgCgCAAgDQgDgIAFgIQABAAAAgBQADgFAEAAQADgBAEADQAEACgBAGQgBAEgBACQAAACgBAAQgDACgBgBQgCgCAAgCQAAgBABgCQgBgKgEAGIgBABQAAABAAAAQgDAFABAGQABAEAFAEQACAAACgBQAIgDAFgHQACgCAAgCQABgEgBgGQAAgCgBgDQgCgFgEgCQgHgFgIADQgBAAAAAAQgJACgDAHQgEAEAAADQgEAKACAIQABAGADADQACAEADACQADACADABQADACADAAQgDACgDACQgGAEABAFQgBACAAADQAAACAAABQAAAIAFAHQABADAEADQADABADACQADABAFAAQAAAAABAAQAIgBAFgFQADgDABgFQABgCAAgCQAAgEgCgDQAAgBgBAAQgBgCgBgCQgGgEgIAAQgDAAgCAAQgEAEABAFQAAAAAAABIAAABQAAADADADQAAAAABABIAAAAQAGAFgBgJQgCgCAAAAQAAgBAAgBQAAgBABgBQABgBADABQABAAABAAQABABAAABQABABABAEQABADgCACQgDAEgEABQgDAAgEgDIgBgBQgBgBAAAAQgFgEAAgHQAAgDACgDQABgDAGgEQAHgDAIADQAIAEAEAJQAFAKACAFQACAFAAABQADAJgBANIgBgEQAAAKgCANQgDAOgDAEQgDAEAAgBQgKgGgNAAQgOAAgHAGQgIAEAAAJQABAJAIAFQAHAGAMgDQANgDAEgCQAEgDAFgGQABgBABgBQgBgCgBgBABKhrQAAgCABAAIABAAQACAAACgBQAIgFAHgHQABgCACgCQADgIABgKQACgNgBgDQAAgJgCgIQgBgDgBgIQgCgIgKgUQgIgRgTgPQAMgRACgbQADgcgDgNQgDgNgDgEQgCgCAAgBQgDgFgCgBQgBgBAAAAQgKgNgPgDQgHgCgGABIgBAAIgBAAQgBABgCAAQgMACgGgHAAEloQgDgKAQgGAAVl5IgBABAgwl0QAGADAIABQAJADAKAAQgPAIgIAIQgHACgGAFAgmldQAHgDAIACQAEAAADABAgylXQAOgNACgMAg6l4QANAGAQgLAAZj8QgNgDgIAFQgEAFAAAGQAAAFACADQAEADAKAAQAJgBAJgHQAKgGAAgDQgEgEgPgDgAAmh1QAGgJgDgQQgFgWgOgTQgPgVgRgGQgRgIgNAJQgLAJADAVQACAVAQATQADAFAEAEQgQgGgVAAQgfgBgWALQgXALgBAYQgBAZAYAPQAYAQAigKQAcgGATgIQACgBACgBQADgCACgBQAOgJADgKQAAAAAAgBQABgCAAgCIAAAAQACAAABAAAgLjDQgMgFgIAEQgHAFADAPQAEAPANAOQAMAOAKAKQAOAJAGgJQAHgIgGgNQgFgOgKgQQgKgRgLgEgAABheQgCgHgUgIQgVgJgTgCQgTgBgOAGQgQAGgCAPQgBAOAPAKQAPAJAZgFQAagFATgGQARgHgCgIQgBgBAAgBgAAMhpQAEAAAEgBQAFgBAEgCQADgCACgBQACgCACgDAAMhoQABAAAAAAQADAFABAGQABADAAACAAMhoQAAgBgBAAQABAAAAAAgAgXiCQAJAEAIAEQAGAEAGAGQAAAAAAABQAEACABAEAAchZQADAAADAAQACABADAAQADACADADQAEgDADgCAAchZQgDAAgEABQAGgIACgIQgEAAgFgCAgKg6QgBACgFAPQgFAOAFAZQAGAWAMABQANAAAPgNQAOgMAIgYQAHgXgFgSQgDgJgGgFAAng7QACAOgFAQQgFAQgJAJQgHAGgJgCQgHgDgBgLQAAgLAEgRQAHgSAHgIQAJgJAFACQAGABADAPgABqAFQAAgBAAAAQACgEAGgQQAGgSgBgNQgCgWgJgQQgJgQgEgCQgEgCgHgCQgFgBgFABABGhrQACAAACAAAAdhoQAKACAKAAQgNAHgIAGAAvh1QgEAAgFAAABqAFQgCgBgBAAACBB/QAFgDADgEQACgCAAgBQACgHABgIQACgLAAgBQgCgIgBgHQAAgDgBgFQgBgGgJgYQgIgUgQgMAA8ASQAEACAHAAQAIAAAIgGQAIgGAAgDQgDgDgMgCQgMgBgFADQgGAEAAAEQAAAFADADgABXBZQgFgKgIgOQgIgNgLgEQgKgDgGADQgGADADANQADAMAKALQAJALALAIQALAHAFgGQAFgIgDgKgABmAMQAOAOAHATQAJAWgBAAQAAgBAAAGQACAFABAQIgBATQAAAAgFAGQgGAGgFgCQgFgBgBgCIgBgBQAAAAgBgBQAAgCAAgBQgCgHAEgGQAAAAAAgBQACgEACAAQADAAACACQADACAAAEQgBAEAAABQgBACgBAAQgBABgBAAQgCgCAAgBQgBgCACgBQAAgIgEAFIAAABQABAAAAABQgDADABAFQAAAEAEADQABAAACAAQAGgDADgFQABgCABgCQAAgEAAgEQAAgCgCgCQgBgEgEgCQgEgDgGABQgGACgDAGQgCADAAADQgDAHACAHIAAABQABAGAFAFQACABABABQABAAABABQgBAAAAAAQgGADACAFQgDABgEAEQgBgCgBAAQgCgBgDAAQgEAAgEAAQAAAAgBAAQgBAAgBABQgCAAAAABQAAABgBABQABAAgBAAQgCAIgKAEQgBABgBAAQgDABgDACQgQAFgYADQgaADgUgOQgTgOAAgTQABgTATgHQASgHAXAEQAYADAQALQADABACACQACABACABQABAAAAABQACABACABQAJAEAMgFQAAAAAAAAQACgBAAgBQAKgGgEgSQgDgRgLgQQgMgQgPgGQgPgGgJAHQgJAIACAQQACARAMAQQAHAKAIAGACSDxIABgBQACgEAEgUQAFgVgBgMQgBgMgEgQQgDgSgHgEQgFgFgHgBQAAAAgBAAABvB1QgBAAgBAAABwCDQADgCAFgBQAEgCAFABABtCdIAAAAQACABADADQACACADABQABABAEAAIABAAQAGAAAFgEQADgDAAgEQABgCAAgCQAAgCgCgDQAAgBgBAAQAAgCgBgBQgFgEgDAAQgCAAgEAAQgFAAABAIIAAABQABADABABQABABAAABIABAAQAEADgBgGIgCgCQAAAAAAgCQAAAAACgBQAAgBACABQABAAABAAQABAAAAABQAAABABADQACADgDACQgBADgDAAQgDABgEgDIAAAAQAAgBAAgBQgFgDABgFQAAgDgBgDQgCgDAHgCQAGgCAIADQAHACAEAIQADAHACAHQABAGAAALQACATgGATIAAABQAAAHgEAJQgCACgBACQAEADADADABrCLQgCADABADQgBACABACQgDgEgDgBABtCdQgCgEgBgEAA5CmQgCABgEAMQgEANAFATQAFATALAAQALABAMgLQAKgLAGgSQAHgUgFgNQAAgBAAAAABMB7QgDAAgCgBQAAAAAAgBQgCgBgBAAQABAAAAABQADADACADABQCNQgBgCAAAAQAAgGgDgDQgBgCgBgBQABgCABgCABXB/QgFgBgGgDAA8BxQAFADADAEIAAAAAgOCQQAMAIATAAQAUgCAQgDQAQgDgDgHQAAgBAAAAQgEgFgPgJQgRgKgPgCQgPgEgLAEQgNAEgBALQgBALAMAIgABQCNQAAABAAABABiClQABALgEAOQgDANgIAGQgGAHgHgDQgHgDgBgJQAAgJAFgNQAFgQAHgFQAGgHAFABQAFABACAMgABXB/QgBAGgGAIABUCNQAHgGAMgGQgIAAgIgCABlB1QgFAAgGAAACOD2QAOAPABAKQACAKABACQABACADANQACANgEANQAAABgFAFQgEAEgEgBQgEgBgBgCQgBgCgBgDQgBgFADgEIAAgBQACgDACAAQACgBACACQADACgBAEQAAADgBAAQgBACAAAAQgCAAAAABQgBgCAAgBQAAgBAAgBQAAgGgDADIAAACQgCADAAADQABAEADACQABAAABAAQAFgDADgEQAAgBABgCQABgCAAgEQgBgBgBgCQgBgDgDgCQgDgCgFABQgFACgCAEQgBACAAADQgDAFACAGIAAAAQABAFADADQABABABABQABABABABQADgCAEgBQACgBAEAAQAEgBADgEQABgBABgCQABgFABgGQABgIAAgIQABgGgGgWQgEgSgPgOACQFqQACAAAAABQACACACAAQACACADAAIAAgBQAGAAAEgDQABgDAAgCQABgCAAgBQABgCgDgCQAAgBAAgBQAAAAgBgBQgEgEgCAAQgCABgDgBQgEAAABAHIAAAAQAAADACABIAAABIABABQAEACgBgFIgCgCQAAAAAAgBIABgBQABgBABABQABAAABAAIAAABQAAABABACQACACgCABQgCADgCAAQgCABgDgCIgBgCQgDgCAAgEQAAgCgBgDQAAgDAFAAQAEgCAHACQAFACADAGIABAAQgCAJACAFQABAFABAOQAAAMgHAMQgOgFgHAFQgHAFgBAEQABAGAEAEQAFAEAHgCQAIAAABgCQADgCADgDIAAAAQAMALADAIQADALABAHQABAHAAARIAAABQgCAIgFAFQgFAFgFgBQgGABAAgFQABgDgBgEQgBgGACgEIABgBIAAgBQABgDAEABQACgBACACQACACgBACQAAAEAAABIAAABQgBACgBAAQgBAAgBAAIgBgBQAAgCAAAAIABgCQgBgIgDAEIAAACQgCAEABADIAAABQABAJAEgCQACgCADAAQACAAADgFQAAgCAAgBQAAgBAAgCQABgDgBgDQAAgBgBgCQgBgDgDgEQgDgDgGACIgBAAQgDAAgBACQgCABgBADQgBAEgBACQgDAGADAHQAAADACAEQgBAIANABQAEABAEgCQAFgDAEgHQAFgHABgZQABgZgZgbQACgFACgJQAEgTgEgRQgDgRgFgFQgEgDgFgBQgBAAgBgBACJDxQgBABgGAFQgFAFgGgBQgFAAgDgDQgDgCgBgDQABgEAEgDQAFgDAJACQAIADACADgACLDrIAAAAQgIgHgJAAQgLgBgFAEQgGAFgBAGQABAHAGAFQAGAFAKgCQAJgBADgCQADgCAEgDQABgCAAgBQgBgCgEgDABXEfQADAJAHAJQAHAIAJAGQAIAGAFgFQAEgGgEgIQgDgIgGgKQgHgLgIgDQgIgDgEADQgGADADAKgACAFIQACgBABgBQAHgFgCgNQgDgNgIgOQgLgMgLgEQgMgFgHAGQgHAFACAOQABANAKALQACADADAEQgJgFgKgBQgTgEgPAFQgOAFgDAOQgDAQAOALQAOAMAVgCQAUgBANgEQACAAADgBQACgBABAAQAHgDACgFIAAgBQABgCAAgBQABAAAAAAQAEgCADABQACAAABAAQACABABABQADgDACAAQgBgDACgCAApFMQgCAIAIAHQAIAHARAAQAQAAANgDQAMgCgBgFQAAgBAAAAQgCgFgMgIQgMgHgMgCQgLgEgLADQgJACgCAKgAB6FYQAAgDgCgDQAAgCgCgBQgBgCAAgBQgBgBgCgBQgCgDgEgDQgGgFgHgDAB6FcQABgBgBgCQAAgBAAAAAB+FQQgBAFgDADAB+FQQAFACAHAAQgKAFgFAEACJFIQgEAAgFAAAByFKQAHACAHgEAB2FPQAEABAEAAACBFkQAEAAACAJQADAJgCAKQgCAKgFAGQgEAGgGgBQgGgCgBgHQgBgHACgLQADgLAEgGQAFgGAEABgACMFgQABAFACADQABABAAABACMFgQABgBAAAAQgBgDABgCABoFyQgBAAgCALQgCAJAFAPQAFAOAJAAQAJgBAHgKQAIgJAEgPQADgNgFgJACiGeQAAAAgBgBQgCAAgCgBQgHgDgEAEQgCACgBADQABADACABQACACAEAAQAFAAAEgCQACgDACAAQABgCAAAAQgBgBgDgCgACpGmIAAAAACIFdQADABABAC",
      );
    this.shape_88.setTransform(76.4, 200.1);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f("#E6CD68")
      .s()
      .p(
        "ACuH8QgNgBABgIQgCgEAAgDQgDgHADgGIACgGQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAABgBQABgCADAAIABAAQAGgCADADQADAEABADIABADQABADgBADIAAADIAAADQgDAFgCAAQgDAAgCACQgEACgBgJIAAgBQgBgDACgEIAAgCQADgEABAIIgBACIAAACIABABIACAAIACgCIAAgBIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgEgBgBADIAAABIgBABQgCAEABAGQABAEgBADQAAAFAGgBQAFABAFgFQAFgFACgIIAAgBIgBgYQgBgHgDgLQgDgIgMgLIAAAAIAAAAIgGAFQgBACgIAAQgHACgFgEQgEgEgBgGQABgEAHgFQAHgFAOAFQAHgMAAgMIgCgTQgCgFACgJIgBAAQgDgGgFgCQgHgCgEACQgFAAAAADIABAFQAAAEADACIABACQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQACAAACgDQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgBgDIAAgBIgCAAIgCAAIgBABIAAABIACACQABAFgEgCIgBgBIAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAAAQgBgHAEAAQADABACgBQACAAAEAEIABABIAAACQABABAAAAQABABAAAAQAAABAAAAQAAAAAAABIgBADIgBAFQgEADgGAAIAAABQgDAAgCgCQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIgCgBIgBgCQgCgDgBgFIABgBIAAgFIAAgCIABgDIgBADIAAACIgFADQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABAFACADIABACQAFAJgDANQgEAPgIAJQgHAKgJABQgJAAgFgOQgFgPACgJQACgLABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAGgHQAHgDACgFIAAgBIABgDIgBADIAAABQgCAFgHADIgDABIgFABQgNAEgUABQgVACgOgMQgOgLADgQQADgOAOgFQAPgFATAEQAKABAJAFIgFgHQgKgLgBgNQgCgOAHgFQAHgGAMAFQALAEALAMQAIAOADANQACANgHAFIgDACQgHAEgHgCIgGgGQgGgFgHgDQAHADAGAFIAGAGIADACQAFAAAGgEIAJAAIAAAAQgCgGADgFIABgFQACgEAFgCQAFgBADACQADACABADIACADIgBAGIgBADQgDAEgFADIgCAAQgDgCgBgEQAAgDACgDIAAgCQADgDAAAGIAAACIABADIACgBIABgCQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABgEgDgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQgCAAgCADIAAABQgDAEABAFIACAFQABACAEABQAEABAEgEIAFgGQAEgNgCgNIgEgPIgDgMQgBgKgOgPIgFgFIAFAFIgBADIgHAFIgMADQgKACgGgFQgGgFgBgHQABgGAGgFQAFgEALABQAJAAAIAHIAAAAIAHAGIgHgGIADgEQAEgJAAgHIAAgBQAGgTgCgTIgBgRQgCgHgDgHQgEgIgHgCQgIgDgGACQgHACACADIABAGQgBAFAFADIAAACIAAAAQAEADADgBQADAAABgDQADgCgCgDIgBgEIgBgBIgCAAIgCAAIgCABIAAACIACACQABAGgEgDIgBAAIgBgCIgCgEIAAgBQgBgIAFAAIAGAAQADAAAFAEIABADIABABQACADAAACIgBAEQAAAEgDADQgFAEgGAAIgBAAQgEAAgBgBQgDgBgCgCIgFgEIAAAAIgDgIIAAgEQgBgDACgDIgBgCQAAgDAFgDIABAAIgCgBIABABQgFADAAADIABACQgDABgEAEQADABADAEIADAIIAAABQAFANgHAUQgGASgKALQgMALgLgBQgLAAgFgTQgFgTAEgNQAEgMACgBQABgDADAAQAEgDACgDQAKgEACgIIAAAAIAAAAIABgCIgBACIAAAAIAAAAQgCAIgKAEIgCABIgGADQgQAFgYADQgaADgUgOQgTgOAAgTQABgTATgHQASgHAXAEQAYADAQALQgIgGgHgKQgMgQgCgRQgCgQAJgIQAJgHAPAGQAPAGAMAQQALAQADARQAEASgKAGIgCACIALAAIAAgBQgCgHADgHQAAgDACgDQADgGAGgCQAGgBAEADQAEACABAEIACAEIAAAIIgCAEQgDAFgGADIgDAAQgEgDAAgEQgBgFADgDIgBgBIAAgBQAEgFAAAIQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIACADIACgBIACgCIABgFQAAgEgDgCQgCgCgDAAQgCAAgCAEIAAABQgEAGACAHIAAADIACAAIgBABIgBgBIABABIABABIAGADQAFACAGgGIAFgGIABgTQgBgQgCgFIAAgFQABAAgJgWQgHgTgOgOIgCgDIACADIgCACQgFAGgEADQgEACgNADQgMADgHgGQgIgFgBgJQAAgJAIgEQAHgGAOAAQANAAAKAGIADgDQADgEADgOQACgNAAgKIABAEQABgNgDgJIgCgGIgHgPQgEgJgIgEQgIgDgHADQgGAEgBADQgCADAAADQAAAHAFAEIABABIABABQAEADADAAQAEgBADgEQACgCgBgDIgCgFIgBgCIgCAAQgBAAAAAAQgBgBAAAAQgBABAAAAQgBAAAAAAIgBACIAAACIACACQABAJgGgFIAAAAIgBgBQgDgDAAgDIAAgBIAAgBQgBgFAEgEIAFAAQAIAAAGAEIACAEIABABQACADAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAFgDADQgFAFgIABIgBAAIgIgBIgGgDQgEgDgBgDQgFgHAAgIIAAgDIgHAFQAGAFADAJQAFASgHAXQgIAYgOAMQgPANgNAAQgMgBgGgWQgFgZAFgOIAGgRIABgBIAEgCIAFgDQAOgJADgKIAAAAIAAgBIABgEIgBgFQgBgGgDgFIgBAAIAAgBIAIgBIgIABIgBAAIABABIABAAQADAFABAGIABAFIgBAEIAAABIAAAAQgDAKgOAJIgFADIgEACQgTAIgcAGQgiAKgYgQQgYgPABgZQABgYAXgLQAWgLAfABQAVAAAQAGIgHgJQgQgTgCgVQgDgVALgJQANgJARAIQARAGAPAVQAOATAFAWQADAQgGAJIAJAAQgDgDgBgGQgCgIAEgKQAAgDAEgEQADgHAJgCIABAAQAIgDAHAFQAEACACAFIABAFQABAGgBAEIgCAEQgFAHgIADIgEABQgFgEgBgEQgBgGADgFIAAgBIABgBQAEgGABAKIgBADQAAABAAAAQAAABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGQABgGgEgCQgEgDgDABQgEAAgDAFIgBABQgFAIADAIQAAADACACQADADAGACQAIABAIgGIAHgJIACgCIABgDQADgZgFgPIgBgGIgIgZQgFgOgXgTQgLANgDADQgFACgQAEQgOADgHgGQgIgHgBgKQAAgKAJgHQAHgHAPAAQAQgBAMAIIABABQAQgWAAgWQAAgYgDgLQgCgMgEgEQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgEgFIgKgGQgJgFgGAEQgHADgBAEQgCADABAEQgBAHAFAGIACAAIABACQAEAFAEgCQADgBADgDQACgEgBgDIgCgFIgBgCQAAgBgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIgCACIABACIACADQABAKgFgFIgBgBIgBgBQgDgDgBgEIAAgBIAAgCQAAgFAEgEIAEgBQAJAAAGAGIADAEQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQACADAAAEQABADgCADQAAAFgEAEQgGAGgHAAIgCAAIgIgBIgGgFQgEgDgBgDQgHgHABgKIABgJIAAgDQAAgIANgFQgNAFAAAIIAAADQgLAFgJAGQALAFAFAQQAEAUgHAaQgIAZgPAQQgQAPgQAAQgPgCgGgaQgGgbAFgRIAHgSIAGgFQAOgKACgLQgCALgOAKIgGAFQgTAMgbALQggANgXgMQgWgMAAgZQACgZAVgOQAUgOAdgEQAdgDAVAKQANAGAHAKQADAFABAGIAAAEIAAAFIAAgFIAAgEQgBgGgDgFIAGgJIgKgEIABAAQAEACAFAAIAAAAIAAAAQAIAAAJgGIAAAAIABAAIABgBIgBABIgBAAIAAAAQgJAGgIAAIAAAAIAAAAQgFAAgEgCIgBAAIgDgBIAAgBIgBgBIgHgCQgOgGgOgNQgTgRgGgVQgGgUAKgKQAMgLAUAEQAUAFASARQARASAIAVQAHAUgKAKIgDADQATABAJgBIAAAAQAEAFAIAAIABAAIAAAAIAEAAIABAAIgBAAIgEAAIAAAAIgBAAQgIAAgEgFIAAAAQgGgGgDgJQgCgJAEgJQABgDADgDQAEgIAGgCIABAAQAIgCAHAFQAFADACAFIACAFQABAFgCAEIgCAFQgFAHgIACIgFABQgEgDgCgGQgBgGADgEIABgCIAAAAQAFgGAAAJIgBAEQAAABAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgCAAgEQABgFgEgDQgDgDgEABQgDgBgDAFIgCACQgCAHAAAIQAAADACADQADADAHACQAHACAIgHIAIgIIACgDQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQADgcgGgSIgFgLQgIgOgEgEIgCgDIgEgFIgKgGQgHgFgGAEQgHADgBAEQgCADAAAEQAAAHAFAFIABABIACABQAEAFACgDIAGgEQACgCgBgHIAAgBIgCgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAIgCACIABACQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQACAKgGgFIAAAAIgBgCQgEgCAAgEIAAAAIAAgCQAAgGADgEIAFgBQAIAAAFAGIACAEIACACQACACgBAFQABACgBADQgBAFgDAEQgGAGgGAAIgBABIgJgCQgDgBgDgEIgFgGQgFgHAAgJQgBgNAJgIQAJgIAPAEQAMADALANIACABIAEAGIACACIAGALQAGAHACAMQAEAKABAOIgBAQIgFASIgDADQgHAHgJAEIgDACQAGgBAHACQAPADAKANIABABIAFAGIACADQADAEADANQADANgDAcQgCAbgMARQATAPAIARQAKAUACAIIACALQACAIAAAJIgBAQQgBAKgDAIIgDAEQgHAHgIAFIgEABIgBAAIgBACIgEAAIAEAAIAKAAIALAEQAEACAJAQQAJAQACAWQABANgGASIgIAUIAAABIgDgBIADABQAQAMAIAUQAJAYABAGIABAIIADAPIgCAMIgDAPIgCADIgIAHIABAAQAHABAFAFQAHAEADASQAEAQABAMQABAMgFAVQgEAUgCAEIgBABQAPAOAEASQAGAWgBAGIgBAQIgCALIgCADQgDAEgEABQgEAAgCABIgHADIAHgDQACgBAEAAIACABQAFABAEADQAFAFADARQAEARgEATIgEAOQAZAbgBAZQgBAZgFAHQgEAHgFADQgDABgDAAIgCAAgACSGdQgCACgBADQAAABABABQAAAAAAABQAAAAABABQAAAAABAAQACACAEAAQAFAAAEgCIAEgDIABgCIgEgDIgBgBIgEgBIgFgBQgEAAgCACgAB4FpQgEAGgDALQgCALABAHQABAHAGACQAGABAEgGQAFgGACgKQACgKgDgJQgCgJgEAAIgCAAQgDAAgEAFgAA0FAQgJACgCAKQgCAIAIAHQAIAHARAAQAQAAANgDQAMgCgBgFIAAgBQgCgFgMgIQgMgHgMgCQgHgCgHAAIgIABgACCFbIADAAIADACIgDgCIgDAAIAAAAIAAAAIgBAAIAAAAIgCAAIgCABIgCAAIAAgBQAFgEAKgFQgHAAgFgCIgIgBIgBgDIABADIACADQACADAAADIAAABIAAADIABAAIACAAIACgBIACAAIAAAAIABAAIAAAAIAAAAgACOFVIADgBIgCgCgACNFQIACACIgCgCQgDgDgBgFQABAFADADgABaESQgGADADAKQADAJAHAJQAHAIAJAGQAIAGAFgFQAEgGgEgIQgDgIgGgKQgHgLgIgDIgHgBQgDAAgCABgABwDsQgEADgBAEQABADADACQADADAFAAQAGABAFgFIAHgGIgBAAQgCgDgIgDIgHgBQgEAAgDACgABQCeQgHAFgFAQQgFANAAAJQABAJAHADQAHADAGgHQAIgGADgNQAEgOgBgLQgCgMgFgBIgCAAQgEAAgFAGgAgLBuQgNAEgBALQgBALAMAIQAMAIATAAQAUgCAQgDQAQgDgDgHIAAgBQgEgFgPgJQgRgKgPgCQgHgCgHAAQgFAAgHACgABdCNIAFABIACACIgCgCIgFgBIgIAAIgBAAQAHgGAMgGIgQgCIgLgEIALAEQgBAGgGAIIgBgCQAAgGgDgDIgCgDIACgEIgFgBIAAgBQgBgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgEgCIgBgBIgEgCIgFgDIAFADQAFADADAEIAAAAIABABIAFAGIACADQADADAAAGIABACIAAACIACgBIACgBIABAAIAEAAIAEAAgAB4CAQgFABgDACQADgCAFgBIABAAIAEgBIAAAAIABAAIABAAIABAAIABAAIgBAAIgBAAIgBAAIgBAAIAAAAIgEABIgBAAgABrCAIADACIgDgCQgFgFgBgGQABAGAFAFgABOB4QAEAAAFgCIABAAIACgBIAAAAIAAAAIgCABIgBAAQgFACgEAAIAAAAIgBAAIgGgBIgCgBIACABIAGABIABAAIAAAAgAAnAwQgGADADANQADAMAKALQAJALALAIQALAHAFgGQAFgIgDgKIgNgYQgIgNgLgEIgJgBIgHABgAA/ACQgGAEAAAEQAAAFADADQAEACAHAAQAIAAAIgGQAIgGAAgDQgDgDgMgCIgIAAQgGAAgDACgAAQhEQgHAIgHASQgEARAAALQABALAHADQAJACAHgGQAJgJAFgQQAFgQgCgOQgDgPgGgBIgCAAQgFAAgHAHgAhehzQgQAGgCAPQgBAOAPAKQAPAJAZgFQAagFATgGQARgHgCgIIgBgCQgCgHgUgIQgVgJgTgCIgFAAQgQAAgMAFgAAihZIAFABIAGAFIgGgFIgFgBIgGAAQAIgGANgHQgKAAgKgCIgJgCIAJACQgCAIgGAIIAHgBIAGAAgAAShYIADAAIgDAAIAAAAgAA0hYIABgFIAAgCQAAgEAFgDIAGgEIgGgCIgGgDIgFgGIAFAGIAGADIAAAGQgFADAAAEIAAACIgBAFgAgGh6QAGAEAGAGIAAABQAEACABAEQgBgEgEgCIAAgBQgGgGgGgEIgRgIIARAIgAAihwIgFADQgEACgFABQAFgBAEgCIAFgDIAEgFIgEAFgAgfjEQgHAFADAPQAEAPANAOQAMAOAKAKQAOAJAGgJQAHgIgGgNQgFgOgKgQQgKgRgLgEQgGgDgGAAQgEAAgEACgAAEj6QgEAFAAAGQAAAFACADQAEADAKAAQAJgBAJgHQAKgGAAgDQgEgEgPgDIgIgBQgIAAgFADgAgplIQgJAJgIAUQgHATABAMQABANAKADQAKAEAJgJQAKgJAFgSQAEgRgBgQQgDgQgHgCIgBAAQgGAAgIAHgAh8lxQgSABgOAIQgPAKgBAOQgBAPAOAHQAOAIAYgIQAYgJARgJQASgKgDgHIgBgBQgEgHgSgGQgRgGgOAAIgFAAgAgzlWQAGgFAHgCQAIgIAPgIQgKAAgJgDQgIgBgGgDQAGADAIABQgCAMgOANIgBABIAAAAgAgmldQAFgCAFAAIAAAAIAAAAIAEABIABAAIAHABIgHgBIgBAAIgEgBIAAAAIAAAAQgFAAgFACgAAUl4IABgBIgBAAIgDABIADgBgAAWl5IgBAAgAhrnJQgGAFAFAPQAHAPAPAMQAOAMAOAIQAQAHAFgKQAFgKgGgMQgIgMgNgPQgNgPgOgCIgJgBQgHAAgFADgACMFgIAAAAgAB4FSIgCgDIAIABQgBAFgDADQAAgDgCgDgAB2FPIAAAAgABQCNIAAAAgABrCLIAAAAgAAShYIAAAAgAAEloIAAAAgAAUl5g",
      );
    this.shape_89.setTransform(76.4, 200.1);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "ABDleQAEgHASgGQATgHARABQASABAOAIQAPAKABAOQABAPgOAHQgOAIgYgIQgXgJgSgJQgRgKACgHQABgBAAAAgAA4lrQAGgKANgGQAVgKAdADQAdAEAUAOQAWAOABAZQAAAZgWAMQgXAMgggNQgbgLgSgMQABACAFAQQAFARgGAbQgGAagPACQgQAAgQgPQgOgQgJgZQgHgaAEgUQAFgQAMgFABtm1QgHAPgOAMQgPAMgOAIQgQAHgFgKQgFgKAHgMQAHgMANgPQANgPAOgCQANgDAIAFQAHAFgGAPgAAel9QgBgBgCgCQgKgKAHgUQAIgVARgSQASgRAVgFQATgEAMALQAKAKgGAUQgGAVgSARQgOANgPAGQgEABgCABQgBAAgBABIAAABQgBAAgBABIgBABIgBAAIAAAAQgBABgBAAQgDABgDABQgHADgIABQgJADgKAAQAPAIAJAIQgIgDgIACQgDAAgDABQgKgGgLgFQADgKgQgGAgUl5QgCgBgCgBQgJgEgGgHQgCgCgCgBQgCgIgCgKQgCgOAAgCQACgOADgKQACgMAGgHQADgHADgEQACgBAAgBQADgFACgBQABgBAAAAQALgNANgDQAOgEAJAIQAJAIAAANQAAAJgGAHQgCAEgDACQgDAEgDABQgEABgFABQAAgBgBAAQgHAAgEgGQgEgEgBgFQgBgDABgCQgBgFADgCQAAgBABgBQABgCABgCQAEgGAKAAQACAAACABQAEAEAAAGQAAABAAABIAAAAQgBAEgEACQAAABAAABIgBAAQgFAFABgKQACgBAAgBQAAgBAAgBQAAgBgCgBQgBgBgCAAQgCAAAAACQgBAAAAACQgBABgBAAQAAAHACACQAEACACACQACADAFgFQAAgBABAAQAAAAACgBQAFgFgBgHQABgEgCgDQgCgEgGgDQgGgEgIAFQgJAFAAABQgBAAgEAFQgBABgBACQgDAEgJAOQgDAFgCAGQgFASACAcQAAABABABQACADAAAAQABACAHAGQAIAHAIgCQAGgCADgDQABgDAAgDQACgIgDgHQgBgBgBgBQgDgFgDABQgDgBgEADQgEADABAFQABAEABACQAAADABAAQACAAACgBQACgBAAgCQAAgBgBgDQABgJAEAGIAAAAQABACAAAAQADAEgBAGQgBAGgFADQgCAAgDgBQgIgCgEgHQgCgBAAgEQgDgEABgFQABgDABgCQACgFAFgDQAHgFAIACQAAAAABAAQAHACADAIQADADABADQAEAJgCAJQgDAJgGAGQgGAHgMgCQgCAAgBgBgAgTl4IgBgBAgDloQABAEAAAFQABAKgGAHQgCADgDADQgDADgDACQgEABgFAAQgBAAAAAAQgIAAgGgGQgDgEgBgFQgBgDAAgDQAAgEACgDQAAgBABgBQACgCABgCQAHgGAIAAQADAAABABQAEAEAAAFQAAACAAAAIAAABQAAAEgEADQAAABgBAAIAAABQgGAFABgKQACgCAAgBQAAgBABgBQgBAAgBgCQgBgCgDABQgBAAgBACQAAABgBABQAAAAgCAFQgBADADAEQACADADABQAEACAEgFQABgBAAgBQACAAAAAAQAFgGgBgHQABgEgCgDQgBgEgHgDQgGgEgJAFQgJAGgBAAQgBAAgDAFQgBABgBACQgEAEgCAMQgDALAAAYQAAAWAQAWQABAAABgBQALgIAQABQAPAAAHAHQAJAHAAAKQAAAKgJAHQgHAGgOgDQgQgEgFgCQgDgDgLgNQgXATgFAOQgHAVgBAEQAAADgBADQgEAPACAZQABABAAACQACACAAAAQABABAHAIQAHAGAIgBQAHgCACgDQACgCABgDQACgIgFgIQgBAAAAgBQgDgFgDAAQgEgBgEADQgDACAAAGQABAEABACQAAACABAAQADACABgBQACgCAAgCQAAgBgBgCQABgKAEAGIABABQAAABAAAAQADAFgBAGQgBAEgFAEQgCAAgCgBQgIgDgFgHQgBgCgBgCQgBgEABgGQAAgCABgDQACgFAEgCQAHgFAIADQABAAAAAAQAJACAEAHQADAEAAADQAEAKgCAIQgBAGgCADQADAAAFAAQgFgJADgQQAEgWAOgTQAPgVARgGQASgIAMAJQALAJgCAVQgDAVgQATQgDAFgEAEQAQgGAVAAQAfgBAWALQAXALABAYQABAZgYAPQgYAQgigKQgcgGgTgIQgCgBgBgBQgEgCgDgBQgMgJgDgKQgBAAABgBQgCgCAAgCQAAgCABgDQABgGADgFQAAAAABAAQABgBAAAAQABgEAEgCQAAgBABAAQAEgGAHgEQAIgEAJgEAg7j4QgMgRgCgbQgDgcADgNQAEgNADgEQABgCAAgBQAEgFABgBQABgBABAAQAJgNAPgDQAIgCAGABIAAAAAASk9QgCAQAEARQAGASAJAJQAJAJAKgEQAKgDABgNQABgMgHgTQgIgUgJgJQgJgIgGABQgGACgDAQgAA0lWQgBgBAAAAQgBgFABgEQACgGADgFAAoldQAGACAGAFAAel9QANAKANgDAAzlXQgOgNgCgMAAyl0QACAFAEAEABLk8QgEgDgDgCQgOgKgCgLAACl9QAJABATgBAiAB/QgFgDgDgEQgCgCAAgBQgCgHgBgIQgCgLAAgBQACgIABgHQABgDAAgFQABgGAKgYQAHgUARgMQAAgBgBAAQgCgEgFgQQgHgSACgNQABgWAJgQQAJgQAEgCQAEgCAHgCQAGgBAEABQAAgCgBAAIAAAAQgDAAgCgBQgIgFgGgHQgCgCgBgCQgEgIgBgKQgCgNABgDQABgJABgIQABgDABgIQACgIAKgUQAIgRATgPQADgCADgCAgyhYQAAACAAABQAAAIgGAHQgBADgEADQgCABgEACQgDABgEAAQgBAAgBAAQgIgBgFgFQgDgDgBgFQgBgCABgCQgBgEACgDQAAgBABAAQABgCABgCQAGgEAJAAQACAAACAAQAEAEAAAFQAAAAAAABIgBABQAAADgDADQAAAAgBABIAAAAQgGAFABgJQACgCAAAAQAAgBAAgBQAAgBgBgBQgBgBgDABQgBAAAAAAQgCABAAABQAAABgCAEQgBADADACQACAEAEABQADAAAEgDIABgBQABgBABAAQAFgEgBgHQAAgDgBgDQgCgDgGgEQgGgDgIADQgJAEgEAJQgFAKgCAFQgCAFAAABQgCAJAAANIABgEQAAAKACANQADAOADAEQADAEABgBQAJgGANAAQAOAAAHAGQAIAEAAAJQgBAJgHAFQgIAGgMgDQgNgDgEgCQgEgDgFgGQgBgBgBgBQgOAOgHATQgJAWABAAQAAgBAAAGQgBAFgCAQIABATQAAAAAFAGQAHAGAFgCQAEgBACgCIAAgBQAAAAABgBQAAgCAAgBQACgHgDgGQAAAAgBgBQgCgEgCAAQgDAAgCACQgDACAAAEQABAEABABQAAACABAAQACABAAAAQACgCAAgBQABgCgCgBQABgIADAFIAAABQAAAAAAABQADADgCAFQAAAEgEADQAAAAgDAAQgFgDgEgFQgBgCAAgCQgBgEABgEQAAgCABgCQABgEAEgCQAEgDAGABQAGACADAGQACADAAADQADAHgCAHIAAABQgBAGgFAFQgCABgBABQgBAAgBABQABAAABAAQAFADgCAFAAMjDQAMgFAIAEQAIAFgEAPQgEAPgNAOQgMAOgKAKQgOAJgGgJQgHgIAGgNQAFgOAKgQQAJgRAMgEgAABjvQAAAFgCADQgEADgKAAQgJgBgJgHQgJgGAAgDQADgEAPgDQAOgDAHAFQAEAFAAAGgAgLhpQgEAAgEgBQgEgBgFgCQgDgCgCgBQgCgCgCgDAgLhoIAAgBAgKhpQAAAAgBAAAgUhYQACAAABAAIAAAAAA7hCQgagFgTgGQgRgHACgIQABgBAAgBQACgHAUgIQAVgJATgCQATgBAPAGQAQAGABAPQABAOgPAKQgOAJgagFgAgth1QgDAEgCACQgDACgEABQgDACgDAAQADACADACQAHAEgCAFQABACABADAgbhZQgDAAgDAAQgCABgDAAQgDACgDADQgEgDgCgCAgchoQgKACgJAAQAMAHAIAGQAEAAADABAADgOQAAgLgEgRQgGgSgIgIQgIgJgGACQgGABgDAPQgBAOAFAQQAEAQAJAJQAHAGAKgCQAGgDABgLgAALg6QACACAFAPQAFAOgGAZQgGAWgMABQgNAAgOgNQgOgMgIgYQgIgXAFgSQADgJAGgFAgchoQACAIAGAIAgThqQgEACgFAAAheAFQADgDAMgCQAMgBAGADQAFAEAAAEQAAAFgDADQgEACgHAAQgIAAgHgGQgIgGgBgDgAhZB1QgBgBgBgBQgKgGAEgSQADgRAMgQQALgQAQgGQAOgGAKAHQAIAIgCAQQgBARgNAQQgHAKgIAGQAQgLAYgDQAXgEASAHQATAHABATQAAATgTAOQgUAOgagDQgYgDgQgFQgDgCgCgBQgCAAgBgBQgKgEgCgIQgBAAABAAQgBgBAAgBAgmAwQAGADgDANQgDAMgKALQgJALgLAIQgLAHgFgGQgFgIAEgKQAFgKAHgOQAIgNALgEQAKgDAGADgAgQCYQgUgCgQgDQgQgDADgHQAAgBAAAAQAEgFAQgJQARgKAOgCQAOgEAMAEQANAEABALQABALgMAIQgMAIgTAAgAg2BuQgDABgBACQgFADgDAEIgBAAIAAAAIgBABQgDADgCADQgBABAAACQgDADgBAGQAAAAgBACQAAABAAABAhKB7QACAAADgBQAAgBACgBAg6BxQgDABgCABQAAAAgBABQgKAHgOgGIgBAAAhhClQgBALAEAOQAEANAHAGQAGAHAIgDQAGgDABgJQABgJgFgNQgGgQgHgFQgGgHgFABQgFABgCAMgAg3CmQABABAEAMQAEANgFATQgEATgLAAQgLABgNgLQgKgLgGgSQgHgUAFgNQAAgBAAAAIAAAAQgCABgCADQgDACgCABQgCABgEAAIAAAAQgHAAgFgEQgDgDAAgEQgBgCAAgCQAAgCACgDQAAgBABAAQAAgCABgBQAFgEADAAQACAAAFAAQAEAAgBAIIAAABQAAADgCABQgBABAAABIAAAAQgFADABgGIACgCQAAAAAAgCQAAAAgBgBQgBgBgCABQgBAAgBAAQAAAAgBABQAAABgBADQgBADACACQABADADAAQADABAEgDIAAAAQAAgBABgBQAEgDgBgFQAAgDACgDQABgDgGgCQgHgCgHADQgIACgEAIQgDAHgBAHQgCAGAAALQgBATAGATIAAABQAAAHADAJQACACABACIAAAAQAIgHAKAAQAKgBAGAEQAFAFABAGQgBAHgGAFQgGAFgJgCQgKgBgDgCQgDgCgDgDQgCgCAAgBAhWB/QAGgBAGgDQAAACABACAhvCDQgDgCgFgBQgEgCgFABAhtB1QAAAAABAAAhjCQQABgCACAAQABgBADAAQAEAAAEAAQAAAAABAAQABAAACABQABAAAAABAhoCVQAAgCAAgCQAAgDgCgDQADABAEAEQgDABgCAEQgCAEgCAEAhTCNQgHgGgMgGQAIAAAIgCAhkB1QAFAAAGAAAhPCNQgGgIgBgGAiRDxIgBgBQgBgEgFgUQgFgVACgMQAAgMAEgQQAEgSAGgEQAFgFAHgBQABAAAAAAAiIDxIABAAQACgDAIgDQAKgCAEADQAEADABAEQgBADgCACQgDADgGAAQgGABgFgFQgGgFgBgBQgDADgCACQgOAPgBAKQgCAKAAACQgCACgDANQgCANAEANQAAABAFAFQAEAEAEgBQAEgBABgCQABgCABgDQACgFgEgEIAAgBQgCgDgCAAQgCgBgBACQgEACACAEQAAADAAAAQABACABAAQABAAAAABQACgCAAgBQAAgBgBgBQABgGACADIAAACQACADAAADQgBAEgDACQAAAAgCAAQgFgDgDgEQAAgBgBgCQAAgCAAgEQAAgBABgCQACgDACgCQADgCAFABQAFACACAEQACACAAADQACAFgCAGIAAAAQAAAFgEADQgBABgBABQgBABgBABQgDgCgDgBQgDgBgEAAQgEgBgDgEQgBgBgBgCQgBgFgBgGQgBgIAAgIQgBgGAGgWQAEgSAPgOQADgDAEgDAhWEfQgCAJgIAJQgHAIgJAGQgIAGgFgFQgDgGADgIQADgIAHgKQAGgLAIgDQAIgDAFADQAFADgDAKgAh/FIQgCgBgBgBQgHgFACgNQADgNAJgOQAKgMAMgEQALgFAHAGQAHAFgBAOQgCANgJALQgDADgCAEQAIgFAKgBQATgEAPAFQAPAFACAOQADAQgOALQgOAMgVgCQgUgBgNgEQgCAAgDgBQgBgBgCAAQgGgDgDgFIAAgBQAAgCgBgBQgBgBABgCQAAgBABAAQAAgDABgDQAAgCACgBQABgCABgBQAAgBACgBQACgDACgCQABgBABAAQAGgFAIgDAiPFqQgBAAgBABQgCACgCAAQgBACgEAAIAAgBQgGAAgDgDQgCgDAAgCQgBgCAAgBQAAgCACgCQAAgBAAgBQAAAAABgBQAEgEACAAQACABADgBQAEAAgBAHIAAAAQAAADgCABIAAABIgBABQgDACAAgFIACgCQAAAAAAgBIgBgBQgBgBgBABQgBAAgBAAIAAABQAAABgBACQgBACABABQACADACAAQADABACgCIABgCQADgCAAgEQAAgCABgDQABgDgGAAQgEgCgGACQgGACgDAGIgBAAQACAJgCAFQgBAFAAAOQAAAMAGAMQAPgFAGAFQAIAFAAAEQAAAGgFAEQgFAEgHgCQgHAAgCgCQgDgCgDgDIAAAAQgMALgCAIQgEALgBAHQAAAHAAARIgBABQACAIAFAFQAFAFAFgBQAGABAAgFQgBgDABgEQACgGgDgEIAAgBIAAgBQgCgDgDABQgDgBgCACQgCACABACQAAAEAAABIAAABQABACABAAQABAAABAAIABgBQAAgCAAAAIgBgCQABgIADAEIAAACQACAEgBADIAAABQgBAJgEgCQgCgCgDAAQgBAAgDgFQgBgCAAgBQAAgBAAgCQgBgDABgDQAAgBABgCQABgDADgEQAEgDAFACIABAAQADAAACACQABABABADQABAEACACQACAGgCAHQAAADgCAEQAAAIgNABQgEABgEgCQgEgDgFgHQgFgHAAgZQgCgZAZgbQgCgFgCgJQgEgTAEgRQADgRAFgFQAFgDAFgBQAAAAABgBAiMFaQACAAADADQABgBACgBQABAAACAAQADgBAEACQAAAAABAAAiQFUQABAAACABQACACgBADAh9FQQgFACgGAAQAJAFAFAEAiIFIQAEAAAFAAAgnFMQABAIgIAHQgIAHgRAAQgQAAgNgDQgMgCABgFQAAgBAAAAQACgFAMgIQAMgHAMgCQAMgEAKADQAJACADAKgAhxFKQgHACgHgEAh9FQQAEAAAEgBAh4FYQgEgDgBgFAhnFyQACAAABALQACAJgFAPQgFAOgJAAQgJgBgHgKQgIgJgDgPQgDgNAEgJAiAFkQgEAAgCAJQgCAJABAKQACAKAFAGQAFAGAGgBQAFgCABgHQACgHgDgLQgDgLgEgGQgEgGgFABgAiLFgQAAAFgDADQgBABAAABAiLFgQAAgBAAAAQAAgDgBgCAiRGdQACACABADQgBADgBABQgDACgDAAQgFAAgFgCQgCgDgBAAQgCgCAAAAQACgBACgCQABAAAAgBQACAAACgBQAHgDAEAEgAioGmIAAAAAiHFdQgDABgBAC",
      );
    this.shape_90.setTransform(149, 200.1);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#E6CD68")
      .s()
      .p(
        "Ai1H7QgEgDgFgHQgFgHAAgZQgCgZAZgbIgEgOQgEgTAEgRQADgRAFgFQAFgDAFgBIABgBQgEgBgDgEIgCgDIgCgLIgBgQQgBgGAGgWQAEgSAPgOIgBgBIgGgYQgFgVACgMQAAgMAEgQQAEgSAGgEQAFgFAHgBIABAAIgIgHIgCgDIgDgPIgCgMIADgPIABgIQABgGAKgYQAHgUARgMIgBgBIgHgUQgHgSACgNQABgWAJgQQAJgQAEgCIALgEIAKAAIgBgCIAAAAIgFgBQgIgFgGgHIgDgEQgEgIgBgKQgCgNABgDIACgRIACgLQACgIAKgUQAIgRATgPQgMgRgCgbQgDgcADgNQAEgNADgEIABgDIAFgGIACgBQAJgNAPgDQAIgCAGABIAAAAIgEgCQgJgEgGgHIgEgDIgEgSIgCgQQACgOADgKQACgMAGgHIAGgLIACgCQADgFACgBIABgBQALgNANgDQAOgEAJAIQAJAIAAANQAAAJgGAHIgFAGQgDAEgDABIgJACIgBgBQgHAAgEgGQgEgEgBgFIAAgFQgBgFADgCIABgCIACgEQAEgGAKAAIAEABQAEAEAAAGIAAACIAAAAQgBAEgEACIAAACIgBAAQgFAFABgKQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIAAgCIgCgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIgBACIgCABQAAAHACACIAGAEQACADAFgFIABgBIACgBQAFgFgBgHQABgEgCgDQgCgEgGgDQgGgEgIAFIgJAGIgFAFIgCADIgMASIgFALQgFASACAcIABACIACADIAIAIQAIAHAIgCQAGgCADgDQABgDAAgDQACgIgDgHIgCgCQgDgFgDABQgDgBgEADQgEADABAFIACAGQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAAAgBIgBgEQABgJAEAGIAAAAIABACQADAEgBAGQgBAGgFADIgFgBQgIgCgEgHQgCgBAAgEQgDgEABgFIACgFQACgFAFgDQAHgFAIACIABAAQAHACADAIQADADABADQAEAJgCAJQgDAJgGAGIAAAAIgBABQgEAEgHAAIgBAAIAAAAIgEAAIgBAAIgDgBIADABQANAFAAAIIAAADQABAEAAAFQABAKgGAHIgFAGIgGAFIgJABIgBAAQgIAAgGgGQgDgEgBgFIgBgGQAAgEACgDIABgCIADgEQAHgGAIAAIAEABQAEAEAAAFIAAACIAAABQAAAEgEADIgBABIAAABQgGAFABgKIACgDIABgCIgCgCQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCACIgBACIgCAFQgBADADAEQACADADABQAEACAEgFIABgCIACAAQAFgGgBgHQABgEgCgDQgBgEgHgDQgGgEgJAFIgKAGQgBAAgDAFIgCADQgEAEgCAMQgDALAAAYQAAAWAQAWIACgBQALgIAQABQAPAAAHAHQAJAHAAAKQAAAKgJAHQgHAGgOgDQgQgEgFgCQgDgDgLgNQgXATgFAOIgIAZIgBAGQgEAPACAZIABADIACACIAIAJQAHAGAIgBQAHgCACgDIADgFQACgIgFgIIgBgBQgDgFgDAAQgEgBgEADQgDACAAAGQABAEABACQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIACgEIgBgDQABgKAEAGIABABIAAABQADAFgBAGQgBAEgFAEIgEgBQgIgDgFgHIgCgEQgBgEABgGIABgFQACgFAEgCQAHgFAIADIABAAQAJACAEAHQADAEAAADQAEAKgCAIIgDAJIAIAAQgFgJADgQQAEgWAOgTQAPgVARgGQASgIAMAJQALAJgCAVQgDAVgQATQgDAFgEAEIgRAIQgHAEgEAGIgBABQgEACgBAEQABgEAEgCIABgBQAEgGAHgEIARgIQAQgGAVAAQAfgBAWALQAXALABAYQABAZgYAPQgYAQgigKQgcgGgTgIIgDgCIgHgDQgMgJgDgKIgBAAIABgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgFQABgGADgFIABAAIgBAAQgDAFgBAGIgBAFIAAAAIgDAAIADAAIAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIgBABIABAAQADAKAMAJIAHADIADACIABABIAHARQAFAOgGAZQgGAWgMABQgNAAgOgNQgOgMgIgYQgIgXAFgSQADgJAGgFIAGgFIAFgBIAGAAIAHABQgGgIgCgIQgKACgJAAQAMAHAIAGIgGAAIgFABIgGAFIgGgFIgCgFIAAgCQAAgEgFgDIgGgEIAGgCIAHgDIAFgGIgFAGIgHADIgGACIAGAEQAFADAAAEIAAACIACAFIAAADQAAAIgGAHQgBADgEADIgGADIgHABIgCAAQgIgBgFgFQgDgDgBgFIAAgEQgBgEACgDIABgBIACgEQAGgEAJAAIAEAAQAEAEAAAFIAAABIgBABQAAADgDADIgBABIAAAAQgGAFABgJIACgCIAAgCIgBgCQAAAAgBAAQAAAAgBgBQAAAAgBABQAAAAgBAAIgBAAIgCACIgCAFQgBADADACQACAEAEABQADAAAEgDIABgBIACgBQAFgEgBgHIgBgGQgCgDgGgEQgGgDgIADQgJAEgEAJIgHAPIgCAGQgCAJAAANIABgEQAAAKACANQADAOADAEQADAEABgBQAJgGANAAQAOAAAHAGQAIAEAAAJQgBAJgHAFQgIAGgMgDQgNgDgEgCIgJgJIgCgCQgOAOgHATIgIAWIAAAFIgDAVIABATIAFAGQAHAGAFgCIAGgDIAAgBIABgBIAAgDQACgHgDgGIgBgBQgCgEgCAAQgDAAgCACQgDACAAAEIACAFIABACIACABIACgDQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQABgIADAFIAAABIAAABQADADgCAFQAAAEgEADIgDAAQgFgDgEgFIgBgEIAAgIIABgEQABgEAEgCQAEgDAGABQAGACADAGQACADAAADQADAHgCAHIAAABQgBAGgFAFIgDACIADgCQAFgFABgGIALAAIABAAQAJAGAKgBIgFABIABAEIgBADQgDADgBAGIgBACQgGgIgBgGIAMgEIgMAEQgIACgIAAQAMAGAHAGIADABIABABIAAgCIABgCQABgGADgDIABgDIAFgGIABgBIAAAAIABAAQADgEAFgDIAEgDIgEADIgFACIgBABQgKAHgOgGIgBAAIgCgCQgKgGAEgSQADgRAMgQQALgQAQgGQAOgGAKAHQAIAIgCAQQgBARgNAQQgHAKgIAGQAQgLAYgDQAXgEASAHQATAHABATQAAATgTAOQgUAOgagDQgYgDgQgFIgFgDIgDgBQgKgEgCgIIgBAAIABAAIgBgCIABACIgBAAIABAAQACAIAKAEIAGAGQADAAACADIAFANQAEANgFATQgEATgLAAQgLABgNgLQgKgLgGgSQgHgUAFgNIAAgBIAEgIQACgEADgBIADgCIAEgBIAIAAIABAAIgBAAIgIAAIgEABIgDACQgEgEgDgBIABgCQAAgDgEgDIAAgBIgCABIACAAQAEADAAADIgBACQACADAAADIAAAEIgEAIIAAAAIgEAEQgDACgCABQgCABgEAAIAAAAQgHAAgFgEQgDgDAAgEIgBgEQAAgCACgDIABgBIABgDQAFgEADAAIAHAAQAEAAgBAIIAAABQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAIgBACIAAAAQgFADABgGIACgCIAAgCIgBgBIgDAAIgCAAIgBABIgBAEQgBADACACQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQADABAEgDIAAAAIABgCQAEgDgBgFIACgGQABgDgGgCQgHgCgHADQgIACgEAIQgDAHgBAHQgCAGAAALQgBATAGATIAAABQAAAHADAJIADAEIAAAAQAIgHAKAAQAKgBAGAEQAFAFABAGQgBAHgGAFQgGAFgJgCQgKgBgDgCIgGgFIgCgDIAFgFIgFAFQgOAPgBAKIgCAMQgCACgDANQgCANAEANIAFAGQAEAEAEgBQAEgBABgCIACgFQACgFgEgEIAAgBQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgEACACAEIAAADQAAABAAAAQABABAAAAQAAAAAAAAQAAAAABAAIABABIACgDIgBgCQABgGACADIAAACQACADAAADQgBAEgDACIgCAAQgFgDgDgEIgBgDIAAgGIABgDIAEgFQADgCAFABQAFACACAEIACAFQACAFgCAGIAAAAQAAAFgEADIgCACIgCACQgDgCgDgBQgDgBgEAAQAEAAADABQADABADACIADABIgBgDIACgCQAEgDAAgFIAJAAIgDgCQgHgFACgNQADgNAJgOQAKgMAMgEQALgFAHAGQAHAFgBAOQgCANgJALIgFAHQgIADgGAFIgCABIgEAFIgEABIgBAAIAAAAIAAAAQgEAAgFgCIAAgBIAAABQAFACAEAAIAAAAIAAAAIABAAIAEgBIgCACIgCADIACgDIACgCIAEgFIACgBQAGgFAIgDQAIgFAKgBQATgEAPAFQAPAFACAOQADAQgOALQgOAMgVgCQgUgBgNgEIgFgBIgDgBIAGAHQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAABQACAAABALQACAJgFAPQgFAOgJAAQgJgBgHgKQgIgJgDgPQgDgNAEgJIgCABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBACgEAAIAAgBQgGAAgDgDQgCgDAAgCIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIAAgCIABgBQAEgEACAAQACABADgBQAEAAgBAHIAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAIAAABIgBABQgDACAAgFIACgCIAAgBIgBgBIgCAAIgCAAIAAABIgBADQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABAAQACADACAAQADABACgCIABgCQADgCAAgEIABgFQABgDgGAAQgEgCgGACQgGACgDAGIgBAAQACAJgCAFIgBATQAAAMAGAMQAPgFAGAFQAIAFAAAEQAAAGgFAEQgFAEgHgCQgHAAgCgCIgGgFIAAAAIAAAAQgMALgCAIQgEALgBAHIAAAYIgBABQACAIAFAFQAFAFAFgBQAGABAAgFIAAgHQACgGgDgEIAAgBIAAgBQgCgDgDABQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAFIAAABIACACIACAAIABgBIAAgCIgBgCQABgIADAEIAAACQACAEgBADIAAABQgBAJgEgCQgCgCgDAAQgBAAgDgFIgBgDIAAgDQgBgDABgDIABgDQABgDADgEQAEgDAFACIABAAQADAAACACIACAEIADAGQACAGgCAHQAAADgCAEQAAAIgNABIgCAAIgGgBgAicGcQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIgBABIgEADIACACIADADQAFACAFAAQADAAADgCIACgEIgDgFQgCgCgEAAIgFABgAiAFkQgEAAgCAJQgCAJABAKQACAKAFAGQAFAGAGgBQAFgCABgHQACgHgDgLQgDgLgEgGQgEgFgEAAIgBAAgAiMFaQABACAAADIAAABQAAAFgDADIgBACIABgCQADgDAAgFQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIADgCIADAAIABAAIACAAIACABIABAAIABAAIgBAAIgBAAIgCgBIgCAAIgBAAIgDAAIgDACIgFgDIAAgCIgBgDIABADIAAACIAAAAgAh4FgQADAFAGADQgGgDgDgFIAAgBIgBgDIABADIAAABgAhJFBQgMACgMAHQgMAIgCAFIAAABQgBAFAMACQANADAQAAQARAAAIgHQAIgHgBgIQgDgKgJgCIgIgBQgHAAgHACgAiIFSQAJAFAFAEIAAABIABAAIAAgDIABgBIABgGIACgDIgIABQgFACgGAAgAhlESQgIADgGALQgHAKgDAIQgDAIADAGQAFAFAIgGQAJgGAHgIQAIgJACgJQADgKgFgDQgDgBgDAAIgHABgAh9DrQgIADgCADIgBAAIAHAGQAFAFAGgBQAGAAADgDQACgCABgDQgBgEgEgDQgDgCgEAAIgHABgAiRDxIAHgGIgHAGgAhaCYQgFABgCAMQgBALAEAOQAEANAHAGQAGAHAIgDQAGgDABgJQABgJgFgNQgGgQgHgFQgFgGgFAAIgBAAgAgOBuQgOACgRAKQgQAJgEAFIAAABQgDAHAQADQAQADAUACQATAAAMgIQAMgIgBgLQgBgLgNgEQgGgCgGAAQgHAAgHACgAh3CAQAFABADACQgDgCgFgBIgBAAIgDgBIgBAAIAAAAIgCAAIgCAAIAAAAIAAAAIACAAIACAAIAAAAIABAAIADABIABAAgAg2AwQgLAEgIANIgMAYQgEAKAFAIQAFAGALgHQALgIAJgLQAKgLADgMQADgNgGgDIgHgBIgJABgAhPAAQgMACgDADQABADAIAGQAHAGAIAAQAHAAAEgCQADgDAAgFQAAgEgFgEQgEgCgGAAIgIAAgAgdhLQgGABgDAPQgBAOAFAQQAEAQAJAJQAHAGAKgCQAGgDABgLQAAgLgEgRQgGgSgIgIQgHgHgFAAIgCAAgAA+h4QgTACgVAJQgUAIgCAHIgBACQgCAIARAHQATAGAaAFQAaAFAOgJQAPgKgBgOQgBgPgQgGQgNgFgQAAIgFAAgAgchoQAFAAAEgCIgJgDIgFgDIgEgFIAEAFIAFADIAJADQgEACgFAAgAgLhpIAAABIABgBIgBAAIgIgBIAIABgAAMjDQgMAEgJARQgKAQgFAOQgGANAHAIQAGAJAOgJQAKgKAMgOQANgOAEgPQAEgPgIgFQgEgCgEAAQgGAAgGADgAgYj8QgPADgDAEQAAADAJAGQAJAHAJABQAKAAAEgDQACgDAAgFQAAgGgEgFQgFgDgIAAIgIABgAg7j4IAGgEIgGAEgAgTl4IAAgBIgBAAgAh9FQIAIgBIgCADIgBAGQgEgDgBgFgAhqCLIAAAAgAhtB1IABAAIgBABgAhsB1IAAAAgAgRhYIAAAAgAgyhYIAAAAgAgbhZIAAAAgAAbjxQgOgQgJgZQgHgaAEgUQAFgQAMgFQgKgGgLgFIAAgDQAAgIgNgFIABAAIAEAAIAAAAIABAAQAHAAAEgEIABgBIAAAAQAJABATgBIABABIAAAAQAJAGAJAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAQgJAAgJgGIAAAAIgBgBIgDgDQgKgKAHgUQAIgVARgSQASgRAVgFQATgEAMALQAKAKgGAUQgGAVgSARQgOANgPAGIgGACIgCABIAAABIgCABIgBABIgBAAIAAAAIgCABIgGACQgHADgIABQgJADgKAAQAPAIAJAIQAGACAGAFQACALAOAKIAHAFIAGASQAFARgGAbQgGAagPACIgBAAQgQAAgPgPgAAblPQgGACgDAQQgCAQAEARQAGASAJAJQAJAJAKgEQAKgDABgNQABgMgHgTQgIgUgJgJQgIgHgGAAIgBAAgAAoldIgBAAIAAAAIgJgCIgBAAIAAAAIgFABIAAAAIgGABIAGgBIAAAAIAFgBIAAAAIABAAIAJACIAAAAIABAAgABXnLQgOACgNAPQgNAPgHAMQgHAMAFAKQAFAKAQgHQAOgIAPgMQAOgMAHgPQAGgPgHgFQgFgDgIAAIgIABgAB4klQgbgLgSgMIgHgFQgOgKgCgLIgBgBIAAgFIAAgEQACgGADgFQAGgKANgGQAVgKAdADQAdAEAUAOQAWAOABAZQAAAZgWAMQgLAGgNAAQgOAAgRgHgABZlrQgSAGgEAHIgBABQgCAHARAKQASAJAXAJQAYAIAOgIQAOgHgBgPQgBgOgPgKQgOgIgSgBIgFAAQgOAAgRAGgAAjlwQAIgBAHgDQACAFAEAEQgDAFgCAGIAAAEIAAAFQgOgNgCgMgAgQl4IAAAAg",
      );
    this.shape_91.setTransform(149, 200.1);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "AN3tJQgDADgEACQgNAFgmgfQgHgGgIgHQgCgBhDgpQgJgGgKgGQgCgBhSgpQgQgIgUgJQAAgBgkgMIAJBWQAVAWAYAYQgUANgXAKIAGAyQgqgIgFAAQgqgDgSgIQgCgBgBgBQgWgLgGgDQg0gegmgXQABAEgBADAGdxMQAyAJBLAcQAIADAQAJQAMAGA6ARQAPAEAxAQQAiAMAbARQAEACAEADQAEADANAIQAGADAHAEQAEACAhAcQADACAdAYQANALAGAJQAAABABABQACAFAFAPQADALgHAGQAHAWAAAkQABANgBAOQAAAHgLCkQCMEjAYE2AHiwGQALAOASAWQAZAiArAtAK2qgQAfAcAgAVQA9AqBAAPQAAgKABgJAEiuGQArAfBcA1QADABAIAEQAIAEALAGQAQAIAbAGQAbAGAuAGQAHABAIABQAuAJgIA9QgCALgDALQgBADgEAhQgDARgDAYQgBALgMBbQgNBagVAwQgUAtgVAoQgBADAAACQgOAdgWAtQgDAHgEAIQgGALgcBCQgGANgGAPQgDAFgXAuQgIAQgKASQgCADgCAEQgFAIgFALQgBADgwBWQgDAGgDAFQgDAFg1BLQgFAGgDAHQgCACgOAUQgEAGgFAIQgFAFgFAOQgFALgGAOQgFAJgEALQgCAFgNAdQAAACgBACQgCAGgFALQgFAKgEANQgEAIgEAUQgDAIgCAMQgKAjAAAIQgCAvACAOQACAJAAAHQACAKAAAHQABAGAMAbQAEAIAEAKQABAEAVAjQAFAJAHAMQACADABAEQACAEACADQACACADAFQAFAHALAQQAJAJAJANQACAEAvA1QAHAKAKAIQADAFAFAGQADAEADAGQAHAIAKAKQAPARAQASQAFAGAFAHQADADAqA2QADAFAEAGAKJrNQAAgBAAAAIAAgBQAJhAgygJQgLgCgKgCAJnUdQgUhsgagzQgdg3gEgGQgvhGgEgDQgDgFgDgFQgDgEgDgEQgug6gCgEQgGgGgFgHQgQgSgRgSQgbgdgQgTQgIgJgIgKQgyg4gDgEQgJgOgIgKQgJgMgFgHQgHgJgBgDQgBgBAAgBQgEgHgEgGQgXgpgJgPQgDgFgBgCQgFgLgCgIQgNgdgBgGQAAgCAAgDQgBgKgCgJQgGhDAMgfQAPgrACgGQABgBAAAAQAOghACgFQAEgNAFgJQAPgkAHgLQAGgIAEgGQAOgVACgCQAFgHAFgGQA3hQADgFQAEgGADgGQAyhbACgDQAHgOAHgNQAEgJAEgHQAjhDADgGQAGgQAHgOQAdhFAGgMQAEgIAEgIQAcg7APggQAihFANgsQAMgsAOhSQAPhTABgMQAKhLABgGQAEgLABgKQAXAYAWAVAKuojQAAADAAADQAFhVADguADHzYQgWhTAchRIk+AAIhUAAQAPBDgPBhAmbxMQgPALgOAPQgKAJgKALQgFAEgPAUQgLAOgRAWQgaAigrAtQgUAWgZAYQAUANAXAKQAuAUA3AJQACAAABAAQAWgLAHgDQAzgeAmgXQAAAEAAADAkPyLQhCAHg/AvQgFAEgGAFQgyAJhLAcQgIADgQAJQgMAGg6ARQgPAEgxAQQgiAMgbARQgEACgEADQgDADgOAIQgFADgIAEQgEACghAcQgDACgcAYQgNALgHAJQgDAEgFAQQAAABAAABQgDALAHAGQADADAFACQAMAFAmgfQAHgGAIgHQACgBBEgpQAIgGAKgGQACgBBSgpQAQgIAUgJQAAgBAlgMIgKBWApJscQAqgIAFAAQAqgDASgIQACgBABgBAkguGQgqAfhcA1QgEABgIAEQgIAEgLAGQgQAIgbAGQgbAGguAGQgGABgIABQgvAJAIA9QACALADALQABADAEAhQADARADAYQABALAMBbQANBaAVAwQAUAtAVAoQABADABACQANAdAWAtQADAHAEAIQAHALAbBCQAGANAHAPQACAFAXAuQAIAQAKASQACADACAEQAFAIAFALQACADAvBWQADAGADAFQADAFA1BLQAFAGADAHQACACAOAUQAEAGAGAIQAEAFAFAOQAFALAGAOQAFAJAEALQADAFAMAdQAAACACACQACAGAEALQAFAKAFANQADAIAFAUQACAIADAMQAJAjAAAIQACAvgCAOQgBAJgBAHQgBAKgBAHQgBAGgMAbQgEAIgEAKQgBAEgUAjQgGAJgHAMQgBADgCAEQgCAEgCADQgCACgDAFQgFAHgLAQQgIAJgKANQgBAEgwA1QgHAKgJAIQgEAFgEAGQgDAEgDAGQgIAIgKAKQgPARgQASQgFAGgFAHQgDADgqA2QgDAFgEAGIEQCYIAlg5IB/jHICmEAIBBgkIDPh0QADADADAEQABAAAFAHQAKAQAg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",
      );
    this.shape_92.setTransform(112.6, 229.1);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics.f("#791121").s().p("AAAAEIAAgHIABAHg");
    this.shape_93.setTransform(176.1, 231.3);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f("#DEB554")
      .s()
      .p(
        "ABJNTIABgCQARnAgRm+IAAgEIAbg5IAJgUIABgBQAEBqAOiPQCclYAWizIAgkDQAMhggOg/IADgBQATA9AEBLIAAANIAAASQAAAqgHBCIgEAhIgdEcQgCAOACAeQAAAcgKBYIgEAbQgXBJguBiIhFCTQgfBIABAiQAICigLCJQgNCmAAA3QAACEAEAiQALBGAuBLQAJAQBVBgQANAPALAPIhAAkgAlqO6IAGgKIAtg5IAKgNIAggjIARgTIAGgJIAIgLQAJgIAHgLQAwg0ACgEQAJgOAJgJIAPgWIAFgHIAEgIIAEgGIAMgVIAWgnIAHgSIAOghIABgRIACgQQACgOgCgvQAAgIgJgjIgFgUQAbhMgSh4QgTiHgEgRIgGggIgHglIgMg7IgEgZQgNhUgHgmIgTh6QgKhYABgcQAAgegBgOIgekcIgDghQgHhCgBgqIABgSQgBgHABgGQAEhLATg9IADABQgPA/ANBgIAfEDQAJBCAaBYIAMAnIA6FuQA5F3gBAeQAAA7gYCaQgYCPgIAYQgoBogZAiQgZAhhCBHQhCBIDeBPIAAAAIgkA4g",
      );
    this.shape_94.setTransform(105.3, 232.9);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f("#C4CDE6")
      .s()
      .p(
        "AA0IEIASglQgIBTgFAAQgDAAgCgugAirCWIgMgoQgbhXgIhAIgfkDQgNhhAOg+QAFgUAIgSQAGgJAGgHIABgGQAEgXAIgTQgBDRDNgIIABAAIANgCIAEARIACAJIgUgDIhIgMIgWgCQg9gLgfgjQgfgigDg6IAAgBIADgVIgDAVIAAABQADA6AfAiQAYD8A4DTQAvCzA7BwIAADEQhvjsg2ilgAAzlWIA5gJIAWgCQAPgCAOgFQgNAygZDqQgZDogUD1IgGBOIgSAlIgBACgABGHfIAAAAgAAQlYIAEgSIAfACIAJAAQBAgCApgZQA4giAOhOQAFgcAAgiQAIATAFAXIAAAGIACAJIABAMIAAABQgFBmhcAdQgOAFgPACIgWACIg5AJIglAGg",
      );
    this.shape_95.setTransform(111.2, 168.3);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f("#D9DFEF")
      .s()
      .p(
        "AgVJTIgBgCIgTgpIgCgDIAAjEIAAq2IAAK2Qg8hwguizQg4jTgZj8QAfAjA9ALIAXACIBIAMIAVADIABAAIAjgGIAANcIgJAUIgZA5IAAAEIgBgCgAAnGPQAUj1AZjoQAZjqAMgyQBcgdAFhmIABgBIgBgMIgCgJIAGAIIAGAIQAIASAEAUQAOA+gMBhIggEDQgWCxicFXIAHhOgAj3ozQAKgTAPgOQgYCRCqAPIAhACIAQBGIgQACIAAAAIgQAAQi9AAABjJgAAOlqIgegCIAQhGQA8gBAogPQAmgOAVgaQAegngLhDQAOAOAKATQAAAigFAcQgOBOg3AiQgpAZhAACIgJAAg",
      );
    this.shape_96.setTransform(115, 168.5);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#C46942")
      .s()
      .p(
        "AguDgIgDgRIgQhGIghgCIgEgOQgtilgEhGIgIhuIE/AAQgdBRAXBSIACAmQALBBgeAnQgVAbgmAOQgoAOg8ABIgQBGIgDASIgFgBg",
      );
    this.shape_97.setTransform(117.2, 111.2);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f("#A85735")
      .s()
      .p(
        "ABkDlIgCgJIAEACIgCAHgAhjgaIACgmQAPhhgPhDIBUAAIAHBvQAFBFAqClIAEAOQingPAXiOg",
      );
    this.shape_98.setTransform(102.6, 111.5);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f("#000000")
      .s()
      .p(
        "AnuOlQAFghARjBQAQjCAEgkIAGgtIABgHIAEgaIAOhpIANirQAGhKgTiPQgRiSgVgtQgLgXgFgQQgHgQgBgKQgShrgNiPQgRixgMjWQAWgVAWgYIAGAVIALBRIAPBfIALA4QALFoA2CpQAdBZAJA3QARBnAAC6QAABUgcCQQgbCQgBDCIACAgIgdA2QgaAzg1CbQAGhIAEgggALHM/Ighg9QgvhGgEgDIgGgKIgGgIIgwg+IgLgNIgggkQgbgdgQgTIgRgTIg1g8QgJgOgIgKIgNgTIgIgMIgCgCIgHgNIghg4IgDgHIgIgTQgNgdgBgGIAAgFIgDgTQgFhDALgfIARgxIABgBIARgmQADgNAFgJQAQgiAGgLIAKgOIAQgXIAKgNIA6hVIAHgMIA0heIAOgbIAIgQIAmhLIANgeIAkhRIAIgQIAqhbQAjhFANgsQAMgsAOhSQAOhTABgMIALhRQAEgLABgKIAtAtIgICDIAAgGQgiDDgoCFQgmB7hKChQgkBNhoCxQhHCFgMBhQBDA/B3DZQCGD4AMAJIAFCPQACA3AAAZQgVhsgagzgAuIkXIACgWQAXk4CMkjIACATQAugLAtgZQhMEBhJDCQgiBYgKBRIAAAMIgBAKgAMGktIgFgXQAGgQACgKQAQhrANiPQAMh5AKiLIAIiDQAfAcAgAVIgTCKQgLBTAGBrQAGBhAZDKIgIAAQg2AAg5AVIgJACIgEgJgANEvfIAAAAg",
      );
    this.shape_99.setTransform(98.4, 261);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f("#E3C06F")
      .s()
      .p(
        "AqGRgQA0ibAbgzIAdg2IAEgHQAvhGADgDIAHgKIAGgIIAwg+IALgNIAhgkQAbgdAQgTIAQgTIA0g8IASgYIAOgTIAIgMIABgCIAHgNIAhg4IADgHIAIgTQANgdAAgGIAAgFIADgTQAHhDgMgfIgRgxIgBgBIgQgmQgEgNgFgJQgPgkgHgLIgLgOIgPgXIgKgNIg7hTIgGgMIg0heIgOgbIgIgQIgmhLQgGgQgHgOIgkhRIgIgQIgqhbQgihFgNgsQgIgbgIgrIgLg4IgPhfIgLhRIgGgVIAAgCQgIhAAxgJIAWgEQAqgIAFAAQAqgDASgIIADgCIAcgOQA0geAmgXIgBAEIABADIgBgDIABgEQAugeAXgSQgBAGABAGIgBASQgqAfhcA1QgEABgIAEIgSAKQgRAIgbAGQgbAGgtAGIgPACQgvAJAIA9IAFAWQACADAEAhIAFApIAOBmQANBaAVAwQAUAtAUAoIACAFIAkBKIAGAPQAHALAcBCIAMAcIAZAzIATAkIADAHIAKATIAyBZIAFALIA5BQQAEAGAEAHIAPAUIAKAOQAEAFAGAOIALAZIAJAUIAOAiIACAEIAHARIAJAXQAEAIAEAUIAFAUQAJAjABAIQACAvgCAOIgDAQIgBARIgNAhIgIASIgWAnIgMAVIgEAHIgDAHIgFAHIgQAXQgJAJgJANQgCAEgvA1QgIAKgJAIIgIALIgGAKIgRASIgfAjIgKANIgtA5IgHALIgHAHIgFAHIgqA+IgvBHIgdA0QgXAqgwCsQgOgfAFgSgAJWQxQgMhhgqg/Ig1hRIgqg+IgFgHIgGgHIgIgLIgsg5IgKgNIgggjIgRgSIgGgKIgIgLQgJgIgIgKQgvg1gCgEQgJgNgIgJIgQgXIgFgHIgEgHIgEgHIgMgVQgUgjgBgEIgIgSQgMgbgBgGIgCgRIgDgQQgBgOABgvQABgIAJgjIAFgUQAEgUAEgIQAEgNAFgKIAHgRIACgEIAPgiIAIgUIALgZQAGgOAEgFIAKgOIAPgUQAEgHAEgGIA5hQIAFgLIAyhZIAKgTIAEgHIASgkIAZgzIAMgcQAchCAHgLIAHgPIAjhKIACgFQAUgoAUgtQAVgwANhaIAOhmIAFgpIAGgkIAFgWQAIg9gvgJIgPgCQgtgGgbgGQgbgGgRgIIgSgKIgMgFQhcg1gqgfIgBgSIAAgMQAXASAuAeIBaA1IAcAOIADACQASAIArADQAFAAApAIIAWAEQAyAJgJBAIAAABIAAABQgCAKgEALIgLBRQgBAMgOBTQgOBSgMAsQgNAsgjBFIgqBbIgIAQIgkBRIgNAeIgmBLIgIAQIgOAbIg0BeIgGAMIg7BTIgKANIgPAXIgLAOQgGALgQAkQgFAJgDANIgRAmIgBABIgRAxQgLAfAGBDIADATIAAAFQAAAGANAdIAIATIADAHIAhA4IAHANIACACIAIAMIANATQAIAKAKAOIA0A8IARATQAQATAbAdIAgAkIALANIAwA+IAGAIIAHAKQADADAvBGIAhA9QAbAzAUBsIAAABQABAJgKAgIgIgqgAFmxZIABgDIgBgEIABAEIgBADg",
      );
    this.shape_100.setTransform(112.7, 252.7);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f("#020202")
      .s()
      .p(
        "ACUJ/QATiHAEgRIAGggIAHgnIAMg7IAEgZQANhUAHgmIAPhfIAEgbQAKhYAAgaQgBgeABgOIAekcIADghQAHhCABgqQAqAfBcA0IAMAGIASAKQARAHAbAHQAbAGAtAGIAPACQAvAJgIA9IgFAVIgGAlIgFApIgOBmQgNBagVAuQgUAsgUApIgCAFIgjBKIgHAOQgHAMgcBCIgMAcIgZAzIgSAjIgEAHIgKATIgyBaIgFAKIg5BRQgEAFgEAIIgPAVIgKAPQgEAFgGAOIgLAZIgIAUIgPAiIgCAEIgHARQgFAKgEANQgEAIgEAUQgahMARh4gAikMnIgJgXIgHgRIgCgEIgOgiIgJgUIgLgZQgGgOgEgFIgKgPIgPgVQgEgIgEgFIg5hRIgFgKIgyhaIgKgTIgDgHIgTgjIgZgzIgMgcQgchCgHgMIgGgOIgkhKIgCgFQgUgpgUgsQgVgugNhaIgOhmIgFgpQgEgigCgDIgFgVQgIg9AvgJIAPgCQAtgGAbgGQAbgHARgHIASgKQAIgEAEgCQBcg0AqgfQABAqAHBCIAEAhIAdEcQABAOAAAeQAAAaAJBYIATB6QAHAmANBUIAEAZIAMA7IAHAnIAHAgQADARATCHQASB4gbBMQgEgUgEgIgAHcmbIgcgNIhag1IABgTQgBh9g+hlIgXgiQBCAHA+AvIAMAJQAUAQAVAVIAIAJQAFAEAPATIAcAkQAZAjArAtIAuAuQgVANgWAKQguAUg4AIIgDAAgAnembQg4gIgugUQgWgKgVgNQAZgYAVgWQArgtAZgjIAcgkQAQgTAFgEIATgUQAPgPAPgLIALgJQA+gvBDgHQhXBzAACSIABASQgmAXg0AeIgcANIgDAAgAEhoOQgEhLgTg9IgBgCQgHgVgHgOIgGgIIgGgIIgBgFQgEgYgJgTQgKgTgOgOIgCgmIAHAGQAmAhAdAnIAXAiQA+BlABB9IgBATQgugegXgTgAllndIgBgSQAAiSBXhzQAcgnAmghIAHgGIgBAmQgPAOgKATQgJATgEAYIgBAFQgGAHgGAJQgHAOgHAVIgBACQgTA9gEBLQgXATguAeIAAAAgAERr0IAAAAgAkPr0IAAAAg",
      );
    this.shape_101.setTransform(112.7, 188.5);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#2B2B2B")
      .s()
      .p(
        "Ao8QHQAAjCAciQQAciQAAhUQAAi8gRhnQgJg2gdhZQg3iogLlnQAIAqAIAcQANAsAiBFIAqBbIAJAPIAjBSQAHANAGAQIAmBLIAIAQIAOAaIA1BeIAFALIA7BVIAKAOIAQAXIAKANQAHAMAPAkQAFAJAEAMIAQAmIABACIARAwQAMAfgGBDIgEAUIAAAFQAAAFgNAdIgIATIgDAIIghA4IgHAMIgBADIgIAMIgNATIgSAYIg1A8IgQASQgQATgbAdIggAlIgLANIgxA9IgGAJIgGAKQgDACgwBGIgEAIIgCghgAGuMdQh2jZhEhAQAMhgBIiGQBoiyAjhNQBLifAmh8QAoiFAijDIAAAHQgLCKgLB6QgNCOgRBrQgCAKgGAQIgRAmIgBABQgUAvgRCOQgSCSAGBJQAEBKAIBiIAPBoIADAbIABAGIACASQAEAvAJCyIADBdQgLgKiHj3gAv3AFIABgIIABgMQAKhQAhhZQBKjCBMkBQAwgbAxgrQAMDWARCyQAMCOASBrQABAKAHAQIgFAXIgFAPIgCAFgALPgKIAFgTIAHAAQgZjJgGhiQgFhqALhUIATiJQA9ApBAAPIABgTQCMEjAYE4IAAAAIAAAFgAH8tEQgrgDgSgJIAAgCQA4gIAugVIAGAzQgqgIgFAAgApktvQAvAVA3AIIAAACQgSAJgqADQgFAAgqAIgAHewDIgcgkIBXAeIAKBWQgrgtgagjgApYwJIBXgeIgcAkQgZAjgrAtg",
      );
    this.shape_102.setTransform(115.9, 232.4);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics
      .f("#A47C20")
      .s()
      .p(
        "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",
      );
    this.shape_103.setTransform(112.3, 143.9);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f("#EBD196")
      .s()
      .p(
        "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",
      );
    this.shape_104.setTransform(112.7, 230.8);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f()
      .s("rgba(0,0,0,0.4)")
      .ss(1, 1, 1)
      .p(
        "ApvEXQAGibAIh+QABgHAAgGQAAgNACgOQAAgHABgHQABgKABgJQACgcABgaQACgEAAgEQAAgEAAgEQABgEAAgDQAAgCAAgCQAAgCAAgDQAAgBABgBQAAgDAAgCQABgBAAgBQABgOAHg+QABgKACgMAhCkWQgBAMAAALQABADAAACQAAAHABAHQAAAKAAAJQgBAEABAEQAAAaAAAZQABBdADBSQAAAbABAaQABAeACAdQABAYACAYQAAAOABAOQABASABATIAAABQABALABALQAAAEABAEQAAADAAADAJvEXQABiLgEh1QAAgHAAgGQAAgMgBgNQAAgIgBgGQgBgmgBgkQgBgEAAgEQAAgEAAgFQAAgDAAgDQAAgCAAgCQAAgDgBgDQAAAAAAgBQAAgDAAgCQgBgBAAgBQAAgOgFg+QgCgagDgg",
      );
    this.shape_105.setTransform(110.9, 349);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#020203")
      .s()
      .p(
        "AgzCEIAAgGIAQgCQATgDARgFIADAAQAXgGAYgLQARgIATgLQAVgNA1gkQAtgfAdgNQgVAvh8BBIgrAXIgBABIgHACIgUAHgAhdBdQh6hGgTgvQAdAPArAgQA0AmAUANQASAMASAJIAAABIACAWIgpgZgAg2BfIgCgmIAagMIALgHQAMgHAHgIQAMgLAJgMQAQgSALgiQAHgWAOgzIgBgGIACAHQAOA1gQAsQgDAJgEAIQgOAYgbAZIgFAFIgPANQgVARgfAVIgCABgAg2BfIAAAAgAhDggQgNgsAQg0IABA0IADA8IgHgQg",
      );
    this.shape_106.setTransform(111.2, 363.7);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f("#070404")
      .s()
      .p("AJhAdIgDggIAIgBQgBAQgDATIgBgCgAplgeIAIAAIgEAhIgBACQgDgRAAgSg");
    this.shape_107.setTransform(111.4, 351.9);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#151317")
      .s()
      .p(
        "AAWGRIAUgHIAHgCIABgBIArgXQB8hBAVgxQgdAPgtAfQg1AkgUANQgTALgSAIQgYALgXAGIgDAAQgQAFgUADIgQACIgBgIIABAIIAAAGIo/AAQAGibAJiAIAAgNIACgbIABgOIACgTIAEg1IABgHIAAgJIABgHIAAgDIAAgGIABgCIAAgFIABgBIAIhNIADgVQETm6E1FKQDdkRF/F2IAEA6IAGBMIAAACIAAAFIAAACIABAFIAAAEIAAAFIAAAIIABAIIACBKIACAOIABAbIAAANQADB1gBCMgAgxGDIgBgWIABgBQAfgVAVgRIAPgNIAFgFQAbgZAOgaQAEgIAEgJQAPgsgNg1IgCgHIAAAGQgOAzgHAWQgKAigRAUQgIAMgNALQgHAIgLAHIgMAHIgaAMIADAmQgSgJgSgMQgVgNgzgmQgsgigcgPQASAxB7BGIAoAZIAAAAgAhADrIAHAQIADAvIABAcIgBgcIgDgvIgCg8IgCg0QgQA0ANAsgAJkCRIACAiIABADQADgUACgSgApdCcIABgDIAFgiIgJgBQAAASADAUgAhBgkQABBaADBVQgDhVgBhaIAAgzIAAgEIAAgEIAAgUIgBgNIgBgFIABgYIgBAYIABAFIABANIAAAUIAAAEIAAAEIAAAzIAAAAg",
      );
    this.shape_108.setTransform(110.9, 336.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
            { t: this.instance_1 },
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
            { t: this.instance },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(6.7, -1, 211.8, 379);

  (lib.mc_btn_patch = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EAlTAEQIAAgNIAAoSIAfAAIAAISIAAANgAg+EQIAAgNIAAoSIAfAAIAAISIABANgEglxAEQIAAgNIAAoSIAfAAIAAISIAAANg",
      );
    this.shape.setTransform(368, 27.4);

    this.instance = new lib.Symbol4copy();
    this.instance.setTransform(406.8, 26.6);

    this.instance_1 = new lib.Symbol3copy();
    this.instance_1.setTransform(511.1, 26.5);
    this.instance_1.shadow = new cjs.Shadow("#000000", 0, 0, 24);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_1 },
            { t: this.instance },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-27, -38.8, 1085, 133);

  (lib.mc_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.JugglerBand("synched", 0);
    this.instance.setTransform(499, 186.7, 1.389, 1.389);

    this.instance_1 = new lib.Symbol9();
    this.instance_1.setTransform(-633.6, 218.1, 1, 1, 0, 0, 0, 88.8, 36.1);

    this.instance_2 = new lib.Symbol10();
    this.instance_2.setTransform(-759.7, 182, 1, 1, 0, 0, 0, 26.3, 26.3);

    this.instance_3 = new lib.Symbol4();
    this.instance_3.setTransform(492.8, 436.4, 1, 1, 0, 0, 0, 492.8, 436.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-26.3, 0, 1052.6, 834.8);

  // stage content:
  (lib.Jugglingtoaspecificheight = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.instance = new lib.mc_bg();
    this.instance.setTransform(132.5, 436.4, 1, 1, 0, 0, 0, 133.3, 436.4);

    this.instance_1 = new lib.mc_stick();
    this.instance_1.setTransform(496.8, 129, 1, 1, 0, 0, 0, 4.8, 129.8);

    this.instance_2 = new lib.mc_leftside_ring();
    this.instance_2.setTransform(487.2, 293.8, 1, 1, 0, 0, 0, 10.4, 45.6);

    this.instance_3 = new lib.mc_rightside_ring();
    this.instance_3.setTransform(506.3, 293.8, 1, 1, 0, 0, 0, 8.8, 45.6);

    this.instance_4 = new lib.mc_animation();
    this.instance_4.setTransform(541.9, 169.3, 1, 1, 0, 0, 0, 19.2, 170.1);

    this.instance_5 = new lib.mc_red_ball();
    this.instance_5.setTransform(
      471.9,
      667.4,
      0.365,
      0.365,
      0,
      0,
      0,
      16.1,
      16.2,
    );

    this.instance_6 = new lib.mc_green_ball();
    this.instance_6.setTransform(
      321.6,
      418.5,
      0.365,
      0.365,
      0,
      0,
      0,
      16.1,
      16.1,
    );

    this.instance_7 = new lib.mc_blue_ball();
    this.instance_7.setTransform(314.2, 433, 0.365, 0.365, 0, 0, 0, 16.1, 16.2);

    this.instance_8 = new lib.mc_juggler();
    this.instance_8.setTransform(
      500.2,
      647.9,
      0.393,
      0.393,
      0,
      0,
      0,
      112.9,
      203.5,
    );

    this.instance_9 = new lib.mc_righthand();
    this.instance_9.setTransform(
      533.9,
      672.1,
      0.393,
      0.393,
      0,
      0,
      0,
      21.5,
      15.6,
    );

    this.instance_10 = new lib.mc_lefthand();
    this.instance_10.setTransform(
      465.6,
      672.5,
      0.393,
      0.393,
      0,
      0,
      0,
      21.4,
      15.6,
    );

    this.instance_11 = new lib.mc_whitePatch();
    this.instance_11.setTransform(500, 700.7, 1, 1, 0, 0, 0, 88.8, 21.5);

    this.instance_12 = new lib.mc_btn_patch();
    this.instance_12.setTransform(511.6, 766.6, 1, 1, 0, 0, 0, 512.6, 31.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to(
          {
            state: [
              { t: this.instance_3 },
              { t: this.instance_2 },
              { t: this.instance_1 },
            ],
          },
          1,
        )
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to(
          {
            state: [
              { t: this.instance_7 },
              { t: this.instance_6 },
              { t: this.instance_5 },
            ],
          },
          1,
        )
        .to({ state: [{ t: this.instance_8 }] }, 1)
        .to({ state: [{ t: this.instance_10 }, { t: this.instance_9 }] }, 1)
        .to({ state: [{ t: this.instance_11 }] }, 1)
        .to({ state: [{ t: this.instance_12 }] }, 1)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(484.8, 404, 1052.6, 834.8);
})(
  (lib = lib || {}),
  (images = images || {}),
  (createjs = createjs || {}),
  (ss = ss || {}),
);
var lib, images, createjs, ss;
