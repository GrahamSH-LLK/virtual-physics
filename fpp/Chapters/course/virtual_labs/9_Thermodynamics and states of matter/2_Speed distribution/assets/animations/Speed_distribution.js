(function (lib, img, cjs, ss) {
  var p; // shortcut to reference prototypes

  // library properties:
  lib.properties = {
    width: 1024,
    height: 808,
    fps: 24,
    color: "#FFFFFF",
    manifest: [],
  };

  // symbols:

  (lib.Symbol4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F6F3C5").s().p("EgpPAbrMAAAg3VMBSfAAAMAAAA3Vg");
    this.shape.setTransform(286, 176.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#171901")
      .s()
      .p("EgsfAjMMAAAhGXIDcAAMAAAA3WMBSfAAAMAAAg3WIDEAAMAAABGXg");
    this.shape_1.setTransform(284.8, 224.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -1.1, 569.6, 450.5);

  (lib.mc_chart = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AMaNAIAyh1IAOAAIgyB1gAFONAIAAhZIAPAAIABAKQAEgGAGgCQAGgEAIAAQAKABAHAFQAGAEAEAIQADAIAAAJQAAAKgDAIQgDAIgIAFQgGAEgKAAQgJAAgGgCQgFgDgDgEIAAAegAFnL1QgDADgDAFQgCAFAAAGQAAAIACAFQADAFADACQAEADAGAAQAIAAAFgGQAFgGAAgLQAAgKgFgGQgEgFgJAAQgFAAgFACgAt1MuQgFgEgCgHQgDgHAAgIQABgJACgIIAEgOIANAFIgCAFIgDAIIgBALQABAHABADQADAEADgBQADAAABgCQACgCACgEIACgJIADgLQADgGADgDQAFgEAIAAQAHAAAGAEQAEAEADAHQACAGAAAIIgBAPIgEANIgNgDIADgJQABgFAAgIQAAgHgCgDQgBgDgDAAQgEAAgBACIgDAFIgDAKIgEALQgCAGgEADQgFAEgHABQgIgBgFgEgAEPMrIgMgDIgKgEIAFgOIAHADIAKADIANABQAIAAADgCQAEAAABgDQACgCAAgEQAAgEgDgCQgCgCgEgCIgLgDIgLgDQgGgCgEgDQgFgDgDgFQgDgFAAgHQABgJAEgGQAEgGAJgEQAHgCAKAAIAMABIALACIAKAFIgFANIgFgCIgKgDQgFgCgHAAQgJAAgEAEQgDADAAAEQAAAEACADQADACAEACIAKADQAJABAHAEQAIADADAFQAFAFAAAJQAAAKgFAGQgFAGgHADQgJADgKAAIgOgBgANrMqQgHgCgFgDIADgMIAGADIAIACIAJABQAIAAACgCQADgCgBgDQABgDgDgCIgGgCIgIgCIgKgDQgFgDgEgDQgDgEAAgHQAAgIAEgFQADgEAGgCQAGgDAJAAIAOACIAMAEIgDALIgIgCIgNgCQgHAAgDADQgDACABACQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAIAGADIAJACIAKAEQAGACADAEQADAEAAAHQAAAHgEAFQgDAFgHACQgGABgIAAQgJAAgHgBgAJDMnQgHgFgDgIQgDgIAAgJQAAgKADgIQAEgHAGgFQAIgFAJgBQAKABAFADQAGADACAEIAAglIARAAIAABfIgPAAIgBgJQgEAFgGADQgGADgIgBQgKAAgHgEgAJML4QgEAHgBAKQABALAEAFQAEAGAKAAQAFAAAEgDQADgDADgEQACgFABgHQgBgIgCgEQgDgFgDgDQgEgCgFAAQgKAAgEAFgAHzMiQgKgJAAgQQABgKAEgJQAEgHAHgFQAJgEAKgBQAQABAIAIQAJAJAAAQIAAAFIgBACIgxAAQAAAJAGADQAGAFAKAAQAGAAAFgCIALgEIADAMQgFAEgIABQgGACgIgBQgTABgJgKgAIcMDQABgFgCgDQgCgEgDgCQgEgCgFAAQgHgBgFAEQgEAEgCAJIAhAAIAAAAgAGmMiQgJgJAAgQQAAgKAEgJQAFgHAHgFQAIgEALgBQAPABAIAIQAJAJAAAQIAAAFIgBACIgwAAQgBAJAHADQAFAFAKAAQAGAAAGgCIALgEIACAMQgFAEgHABQgHACgIgBQgSABgKgKgAHQMDQAAgFgCgDQgBgEgDgCQgEgCgFAAQgIgBgEAEQgEAEgCAJIAhAAIAAAAgAMEMqIAAgqQgBgGgCgEQgDgDgGAAQgFAAgDACQgDADgBAEQgBAEgBAEIAAAmIgRAAIAAgqQABgFgDgFQgDgDgGAAQgFAAgCACQgDACgCAEQgCADAAAFIAAAnIgRAAIAAhDIAPAAIABAIQADgEAFgCQAFgDAHgBQAGAAAFAEQAFADADAHQADgGAFgDQAGgEAJgBQAGAAAGADQAFADADAFQAEAGAAAKIAAAqgAtcLsIgCgBIAAg1QgKABgEAGQgEAGAAALIABANIAFALIgOAEQgDgHgBgHIgDgQQABgUAKgKQAJgKASAAQAMAAAIAFQAIAEAFAIQAFAIAAAMQAAARgJAJQgJAJgRAAIgGAAgAtTLaQAGABADgCQAFgBABgFQADgDAAgGQAAgIgEgEQgDgFgLgCgAt+KYIgBgIQABgJAEgEQAEgEAHAAIBYAAIAAASIhUAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAFIAAADIAAACIgNABIgBgFgAtEJuIACgHIABgKQAAgIgDgFQgDgGgGgCQgFgDgHAAQgGAAgGADQgFACgDAGQgDAFAAAJIABAJIACAHIgNADQgCgFgBgGQgCgGAAgFQAAgMAFgJQAFgKAIgFQAJgEAMgBQAMABAIAEQAJAFADAKQAFAIAAANQAAAHgBAGQgBAGgDAEgAsoIgQgCgCAAgFQAAgEACgDQACgCAFAAQAEAAACACQACADAAAEQAAAFgCACQgCAEgEAAQgFAAgCgEgAt9IkIAAgSIA8AAIAAgJIANAAIAAAbgAt9H5IgCgIQABgHACgEQACgFAFgDQAFgDAJAAIAmAAIAAgKIANAAIAAAKIAVADIAAAQIgVAAIAAATIgNAAIAAgTIgmAAQgFAAgDABQgCADAAAEIAAAGIACAFIgMAAIgCgIgAtGHKQABgIgEgGQgCgFgHgCQgFgCgIgBIgeAAIAAgSIBJAAIAAAPIgQABQAEACAEAEQAEADADAFQABAFAAAIgAt8GPIgBgGQAAgHACgDQADgDAEgCQgFgCgCgGQgDgGgBgKQAAgNAGgGQAGgHALgBQAJABAFAEQAFAFACAHQACAHAAALIgBAIIAAAIIAGAAQAGgBADgEQACgEAAgIIgBgNIgDgNIANgCQADAHABAJIABAPQAAALgCAGQgCAIgFADQgGAEgKAAIgeAAIgEABIgBADIAAACIAAACIgMABIgBgGgAtvFfQgCADAAAGQAAAFABAEQACADAEADQACACAGABIAEAAIABgIIAAgHQAAgJgCgDQgEgEgFgBQgFABgCAEgAtrE7QgJgDgFgIQgFgHgBgLQABgKADgGQADgGAFgCIgiAAIAAgTIBhAAIAAAQIgLACQAGADADAHQADAGAAAJQAAALgFAIQgGAGgIAFQgIADgKAAQgLAAgIgEgAtmEIQgFACgDAFQgCAEAAAFQAAAKAGAFQAGAFAMAAQALAAAGgFQAGgFAAgKQAAgFgDgEQgDgEgFgDQgFgDgHAAQgIAAgGADgAt1C9QgFgEgCgHQgDgHAAgIQABgKACgHIAEgNIANADIgCAGIgDAJIgBAKQABAIABADQADACADAAQADAAABgCQACgDACgEIACgJIADgLQADgFADgEQAFgDAIAAQAHAAAGAEQAEAEADAGQACAHAAAIIgBAQIgEAMIgNgDIADgIQABgHAAgHQAAgIgCgDQgBgCgDAAQgEAAgBACIgDAGIgDAJIgEAMQgCAFgEADQgFAEgHAAQgIAAgFgEgAt8B3IgBgHQAAgGACgDQADgDAEgBQgFgDgCgGQgDgGgBgKQAAgNAGgGQAGgHALgBQAJABAFAEQAFAFACAHQACAHAAALIgBAIIAAAIIAGAAQAGgBADgEQACgFAAgGIgBgOIgDgNIANgCQADAHABAJIABAPQAAALgCAGQgCAIgFADQgGAEgKAAIgeAAIgEABIgBADIAAACIAAACIgMABIgBgGgAtvBHQgCADAAAGQAAAEABAFQACAEAEACQACACAGABIAEAAIABgIIAAgHQAAgJgCgDQgEgFgFAAQgFAAgCAFgAtBAoIAAgKIgFAEQgDACgFAAQgKAAgGgJQgGgJgBgQIAAgGIACgIIgCgBIgDgBQgDABgCAEQgBAFAAAGIAAALQAAAHgCAGQgBAGgEADQgEAEgHgBQgJABgEgGQgGgFgBgIQgCgJAAgJIABgKQAAgHACgEQACgGAEgDQAEgDAFAAQAFAAAEADIAEAFIAFgEQADgCAFgBQAEABADACQADACACADQADgDAFgCQAEgCAGAAQAMAAAHAJQAGAJAAANIAAAHIgBAGIAAAZgAuHgJQgCAFAAAGIABAJQABAFACACQABADADAAQADAAACgDIABgHIAAgIIAAgEIABgJIgDgDIgEgBQgEAAgCAFgAtVgGQgDAEABAEQAAAHACAEQADAEAGAAQAGAAADgEQACgEAAgHQAAgEgCgEQgDgFgGABQgGgBgDAFgAtchPIgCAAIAAg1QgKAAgEAHQgEAGAAALIABAMIAFALIgOAEQgDgGgBgIIgDgQQABgTAKgLQAJgKASAAQAMABAIAEQAIAEAFAJQAFAIAAAMQAAAQgJAKQgJAJgRgBIgGAAgAtThgQAGAAADgBQAFgCABgEQADgDAAgHQAAgHgEgFQgDgFgLgCgAtBieIAAgLIgFAEQgDACgFAAQgKAAgGgIQgGgJgBgQIAAgJIACgHIgCgCIgDAAQgDAAgCAEQgBAGAAAIIAAALQAAAGgCAHQgBAFgEAEQgEADgHAAQgJAAgEgGQgGgFgBgHQgCgJAAgJIABgNQAAgGACgFQACgFAEgEQAEgCAFAAQAFAAAEACIAEAGIAFgFQADgCAFAAQAEAAADACQADACACAEQADgDAFgDQAEgCAGAAQAMABAHAIQAGAKAAAPIAAAGIgBAGIAAAagAuHjSQgCAGAAAIIABAJQABAFACACQABACADABQADgBACgCIABgHIAAgIIAAgHIABgJIgDgDIgEAAQgEAAgCAEgAtVjOQgDAEABAGQAAAHACADQADAEAGABQAGgBADgEQACgDAAgHQAAgGgCgEQgDgFgGAAQgGAAgDAFgAt8j0IgBgHQAAgHACgDQADgEAEgBQgFgCgCgGQgDgGgBgKQAAgNAGgGQAGgHALAAQAJAAAFAEQAFAEACAIQACAHAAALIgBAIIAAAHIAGAAQAGAAADgEQACgEAAgIIgBgNIgDgNIANgCQADAHABAJIABAQQAAAJgCAIQgCAGgFAEQgGAEgKAAIgeAAIgEABIgBADIAAACIAAACIgMABIgBgFgAtvkmQgCAEAAAFQAAAFABAEQACAEAEADQACADAGgBIAEAAIABgHIAAgGQAAgKgCgEQgEgDgFAAQgFAAgCADgAt9lLIgCgJQABgGACgFQACgFAFgDQAFgDAJAAIAmAAIAAgKIANAAIAAAKIAVADIAAAQIgVAAIAAATIgNAAIAAgTIgmAAQgFAAgDACQgCACAAAEIAAAGIACAFIgMABIgCgIgAt9l/IAAgSIAtAAQAIgBAEgDQADgDAAgHQAAgGgDgEQgDgEgFgBQgFgCgFAAIgnAAIAAgTIBJAAIAAAQIgMACQAHADADAGQADAGAAAIQAAAIgCAGQgDAGgFAEQgHADgKAAgAtcnRIgCgBIAAg1QgKABgEAGQgEAGAAALIABANIAFALIgOAEQgDgHgBgHIgDgQQABgUAKgKQAJgKASAAQAMAAAIAFQAIAEAFAIQAFAIAAAMQAAARgJAJQgJAJgRAAIgGAAgAtTnjQAGABADgCQAFgBABgFQADgDAAgGQAAgIgEgEQgDgFgLgCgAtEokIACgHIABgJQAAgJgDgGQgDgFgGgCQgFgDgHAAQgGAAgGADQgFACgDAFQgDAGAAAJIABAJIACAIIgNACQgCgFgBgGQgCgGAAgFQAAgMAFgKQAFgIAIgFQAJgGAMAAQAMAAAIAGQAJAFADAIQAFAKAAAMQAAAHgBAGQgBAGgDAEgAtGpnQABgIgEgFQgCgFgHgDQgFgCgIAAIgeAAIAAgSIBJAAIAAAOIgQACQAEABAEAEQAEAEADAEQABAFAAAIgAtcqfIgCAAIAAg1QgKABgEAFQgEAHAAALIABAMIAFAMIgOADQgDgGgBgIIgDgPQABgVAKgKQAJgJASgBQAMABAIAEQAIAEAFAIQAFAJAAAMQAAARgJAIQgJAKgRgBIgGAAgAtTqwQAGAAADgCQAFgBABgEQADgDAAgHQAAgHgEgFQgDgFgLgCgAtMrxQgHgEgFgIQgEgHgBgKIAAgeIggAAIAAgUIBiAAIAAAxQAAALgFAHQgEAIgIAEQgHADgIAAQgKAAgHgDgAtNsUQABAIAEAFQAFAEAHAAQAFAAAEgBQAEgDADgEQACgEAAgFIAAgYIgjAAg",
      );
    this.shape.setTransform(95.4, 88.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AK9ELQgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgHAJgEQAJgFANAAQAMAAAJAFQAJAEAFAHQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgMAAQgNAAgJgEgAK+DhQgHAEAAAJQAAAIAHAFQAHAEAOAAQAOAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgOAAQgOAAgHAFgAOnEIQgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAOoDeQgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgAHJEIQgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAHKDeQgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgADYEGQgJgEgFgIQgEgHgBgKQABgKAEgIQAFgHAJgEQAJgFAMAAQANAAAJAFQAJAEAEAHQAFAIAAAKQAAAKgFAHQgEAIgJAEQgJAEgMAAQgNAAgJgEgADZDcQgHAEAAAJQAAAIAGAFQAHAEAOAAQAOAAAHgEQAHgFAAgIQAAgJgHgEQgHgFgOAAQgOAAgGAFgAgYEDQgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAKAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgKAAQgNAAgJgEgAgXDZQgHAFAAAIQAAAJAHAEQAHAFAOAAQAMAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgMgBQgOABgHAEgAkCEAQgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgAkBDWQgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgAnsDtQgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgAnrDDQgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgArbDbQgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgHAJgEQAJgFANAAQAMAAAJAFQAJAEAFAHQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgMAAQgNAAgJgEgAraCxQgHAEAAAJQAAAIAHAFQAHAEAOAAQAOAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgOAAQgOAAgHAFgAK4C/QgGgDgEgHQgDgHAAgKQAAgJACgHIAFgLIALAFIgDAFIgCAHIgBAIQAAAFABAEQACADADACQADADAFAAQAHAAADgEQAEgEAAgGIgCgJIgDgGIAGgJIAlADIAAAuIgMAAIAAgjIgSgBIACAGIABAJQAAAIgDAGQgEAGgFADQgFACgHAAQgIAAgGgDgAOnC6QgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAOoCQQgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgAHJC6QgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAHKCQQgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgADSC6QgGgDgDgHQgDgHgBgKQABgJACgHIAEgLIALAFIgCAFIgDAHIgBAIQAAAFACAEQACADADACQADADAFAAQAGAAAEgEQAEgEAAgGIgCgJIgDgGIAFgJIAmADIAAAuIgMAAIAAgjIgTgBIADAGIAAAJQAAAIgDAGQgDAGgGADQgFACgHAAQgHAAgHgDgAgYC1QgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAKAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgKAAQgNAAgJgEgAgXCLQgHAFAAAIQAAAJAHAEQAHAFAOAAQAMAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgMgBQgOABgHAEgAkIC1QgGgEgDgHQgDgGgBgKQABgKACgHIAEgKIALAFIgCAFIgDAGIgBAJQAAAEACAEQACAEADACQADACAFAAQAGAAAEgDQAEgEAAgHIgCgIIgDgGIAFgJIAmACIAAAvIgMAAIAAgkIgTgBIADAHIAAAJQAAAIgDAGQgDAFgGADQgFADgHAAQgHAAgHgDgAvRCuQgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAvQCEQgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgAnsCfQgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgAnrB1QgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgArgCPQgGgDgEgHQgDgHAAgKQAAgJACgHIAFgLIALAFIgDAFIgCAHIgBAIQAAAFABAEQACADADACQADADAFAAQAHAAADgEQAEgEAAgGIgCgJIgDgGIAGgJIAlADIAAAuIgMAAIAAgjIgSgBIACAGIABAJQAAAIgDAGQgEAGgFADQgFACgHAAQgIAAgGgDgAK9CBIAAgJIgRAAIAAgOIARAAIAAgmIALAAIAxAnIAAANIgxAAIAAAJgALmBqIgegYIAAAYIAeAAgADPB2QgFgEgCgHQgDgHAAgIIACgPIAEgKIALAEIgDAIQgBAFAAAGIABAIQABAEADADQACACAFAAQAEAAADgDQADgCABgEIABgJIAAgHIALAAIAAAHIABAIQAAADACADQADACADAAQAEAAADgCQACgCABgEIABgHIgCgJIgCgIIALgEIACAFIACAJIABAKQAAAIgCAGQgDAGgEADQgFAEgGAAQgGAAgFgDQgEgDgDgHQgCAHgFAEQgFAEgHABQgIgBgFgEgAjoBzQgEgCgFgEIgIgJIgOgPIAAAhIgMAAIAAg1IALAAIAYAbQAEAFAEACQAFADAFAAQAFAAAEgDQAEgEAAgHIgBgIIgCgHIgDgFIALgFQADAGACAHQACAHAAAHQAAAIgDAGQgDAHgFADQgGAEgHAAQgGAAgFgDgAHJByIAAgIIgRAAIAAgPIARAAIAAgmIALAAIAxAoIAAANIgxAAIAAAIgAHyBbIgegXIAAAXIAeAAgAOiBvQgGgEgEgHQgDgGAAgKQAAgKACgHIAFgKIALAFIgDAFIgCAGIgBAJQAAAEABAEQACAEADACQADACAFAAQAHAAADgDQAEgEAAgHIgCgIIgDgGIAGgJIAlACIAAAvIgMAAIAAgkIgSgBIACAHIABAJQAAAIgDAGQgEAFgFADQgFADgHAAQgIAAgGgDgAggBoQgFgEgDgHQgCgHAAgJIACgOIAEgLIALAFIgDAHQgCAFAAAHIABAIQABAEADACQADADAEAAQAFAAADgDQACgDABgEIABgJIAAgGIAJAAIAAAHIABAHQABAEACACQACACAEAAQAEAAACgCQACgCABgDIABgHIgBgKIgDgIIALgEIACAFIADAJIABALQAAAIgDAGQgCAGgFADQgEADgHAAQgFAAgFgCQgFgDgBgHQgBAHgFAEQgFAEgIAAQgHAAgFgEgAvRBgQgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAvQA2QgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgAnSBVQgEgCgFgEIgIgJIgOgQIAAAhIgMAAIAAg1IALAAIAYAbQAEAFAEADQAFADAFAAQAFAAAEgEQAEgDAAgIIgBgHIgCgHIgDgGIALgEQADAFACAHQACAHAAAIQAAAIgDAGQgDAGgFAEQgGADgHAAQgGAAgFgCgArsBLIAAgPIA+AAIgHgNIALgGIALAXIAAALgAzDA0QgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgFAJgEQAJgFANAAQAMAAAJAFQAJAEAFAFQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgMAAQgNAAgJgEgAzCAKQgHAEAAAJQAAAIAHAFQAHAEAOAAQAOAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgOAAQgOAAgHAFgASnAjIAAgVIgUAAIAAgLIAUAAIAAgSIALAAIAAASIAVAAIAAALIgVAAIAAAVgALEAcIAAgmIALAAIAAAmgADeAaIAAgnIALAAIAAAngAj8AXIAAgnIALAAIAAAngAviASIAAgOIA+AAIgHgMIALgFIALAUIAAALgAOuAQIAAgmIALAAIAAAmgAHQAOIAAgnIALAAIAAAngAgRALIAAgmIALAAIAAAmgArUAEIAAgmIALAAIAAAmgAnmgGIAAgoIALAAIAAAogAzIgWQgGgDgEgHQgDgHAAgKQAAgJACgHIAFgLIALAFIgDAFIgCAHIgBAIQAAAFABAEQACADADACQADADAFAAQAHAAADgEQAEgEAAgGIgCgJIgDgGIAGgJIAlADIAAAuIgMAAIAAgjIgSgBIACAGIABAJQAAAIgDAGQgEAGgFADQgFACgHAAQgIAAgGgDgAvKgyIAAgpIALAAIAAApgAK9g4QgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgHAJgEQAJgFANAAQAMAAAJAFQAJAEAFAHQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgMAAQgNAAgJgEgAK+hiQgHAEAAAJQAAAIAHAFQAHAEAOAAQAOAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgOAAQgOAAgHAFgASZg7QgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgASahlQgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgADYg7QgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgADZhlQgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgAkCg+QgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgAkBhoQgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgAOnhEQgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgHAJgEQAJgFANAAQAMAAAJAFQAJAEAFAHQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgMAAQgNAAgJgEgAOohuQgHAEAAAJQAAAIAHAFQAHAEAOAAQAOAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgOAAQgOAAgHAFgAHJhHQgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAHKhxQgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgAgYhJQgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgHAJgEQAJgFANAAQAKAAAJAFQAJAEAFAHQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgKAAQgNAAgJgEgAgXhzQgHAEAAAJQAAAIAHAFQAHAEAOAAQAMAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgMAAQgOAAgHAFgArbhQQgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgHAJgEQAJgFANAAQAMAAAJAFQAJAEAFAHQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgMAAQgNAAgJgEgArah6QgHAEAAAJQAAAIAHAFQAHAEAOAAQAOAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgOAAQgOAAgHAFgAnshcQgJgEgFgIQgEgHgBgKQABgKAEgIQAFgHAJgEQAJgFAMAAQANAAAJAFQAJAEAEAHQAFAIAAAKQAAAKgFAHQgEAIgJAEQgJAEgMAAQgNAAgJgEgAnriGQgHAEAAAJQAAAIAGAFQAHAEAOAAQAOAAAHgEQAHgFAAgIQAAgJgHgEQgHgFgOAAQgOAAgGAFgAy8h0IAAgpIALAAIAAApgAK9iGQgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgHAJgEQAJgFANAAQAMAAAJAFQAJAEAFAHQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgMAAQgNAAgJgEgAK+iwQgHAEAAAJQAAAIAHAFQAHAEAOAAQAOAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgOAAQgOAAgHAFgASZiJQgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgASaizQgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgADYiJQgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgADZizQgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgAvRiJQgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAvQizQgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgAkCiMQgJgEgFgHQgEgIgBgKQABgKAEgHQAFgIAJgEQAJgEAMAAQANAAAJAEQAJAEAEAIQAFAHAAAKQAAAKgFAIQgEAHgJAEQgJAEgMAAQgNAAgJgEgAkBi2QgHAFAAAIQAAAJAGAEQAHAFAOAAQAOAAAHgFQAHgEAAgJQAAgIgHgFQgHgEgOgBQgOABgGAEgAOiiQQgGgDgEgHQgDgHAAgKQAAgJACgHIAFgLIALAFIgDAFIgCAHIgBAIQAAAFABAEQACADADACQADADAFAAQAHAAADgEQAEgEAAgGIgCgJIgDgGIAGgJIAlADIAAAuIgMAAIAAgjIgSgBIACAGIABAJQAAAIgDAGQgEAGgFADQgFACgHAAQgIAAgGgDgAHEiSQgGgEgEgHQgDgGAAgKQAAgKACgHIAFgKIALAFIgDAFIgCAGIgBAJQAAAEABAEQACAEADACQADACAFAAQAHAAADgDQAEgEAAgHIgCgIIgDgGIAGgJIAlACIAAAvIgMAAIAAgkIgSgBIACAHIABAJQAAAIgDAGQgEAFgFADQgFADgHAAQgIAAgGgDgAgdiVQgGgDgEgHQgDgHAAgKQAAgJACgHIAFgLIALAFIgDAFIgCAHIgBAIQAAAFABAEQACADADACQADADAFAAQAHAAADgEQAEgEAAgGIgCgJIgDgGIAGgJIAjADIAAAuIgMAAIAAgjIgSgBIACAGIABAJQAAAIgDAGQgEAGgDADQgFACgHAAQgIAAgGgDgArbieQgIgEgFgIQgFgHAAgKQAAgKAFgIQAEgHAJgEQAJgFANAAQAMAAAJAFQAJAEAFAHQAFAIAAAKQAAAKgFAHQgFAIgJAEQgJAEgMAAQgNAAgJgEgArajIQgHAEAAAJQAAAIAHAFQAHAEAOAAQAOAAAGgEQAHgFAAgIQAAgJgHgEQgGgFgOAAQgOAAgHAFgAnyioQgGgDgDgHQgDgHgBgKQABgJACgHIAEgLIALAFIgCAFIgDAHIgBAIQAAAFACAEQACADADACQADADAFAAQAGAAAEgEQAEgEAAgGIgCgJIgDgGIAFgJIAmADIAAAuIgMAAIAAgjIgTgBIADAGIAAAJQAAAIgDAGQgDAGgGADQgFACgHAAQgHAAgHgDgAzDjLQgIgEgFgHQgFgIAAgKQAAgKAFgHQAEgIAJgEQAJgEANAAQAMAAAJAEQAJAEAFAIQAFAHAAAKQAAAKgFAIQgFAHgJAEQgJAEgMAAQgNAAgJgEgAzCj1QgHAFAAAIQAAAJAHAEQAHAFAOAAQAOAAAGgFQAHgEAAgJQAAgIgHgFQgGgEgOgBQgOABgHAEgAOnjOIAAgJIgRAAIAAgOIARAAIAAgmIALAAIAxAnIAAANIgxAAIAAAJgAPQjlIgegYIAAAYIAeAAgAK9jOIAAgJIgRAAIAAgOIARAAIAAgmIALAAIAxAnIAAANIgxAAIAAAJgALmjlIgegYIAAAYIAeAAgASTjUQgGgEgDgHQgDgGgBgKQABgKACgHIAEgKIALAFIgCAFIgDAGIgBAJQAAAEACAEQACAEADACQADACAFAAQAGAAAEgDQAEgEAAgHIgCgIIgDgGIAFgJIAmACIAAAvIgMAAIAAgkIgTgBIADAHIAAAJQAAAIgDAGQgDAFgGADQgFADgHAAQgHAAgHgDgAvWjUQgGgEgEgHQgDgGAAgKQAAgKACgHIAFgKIALAFIgDAFIgCAGIgBAJQAAAEABAEQACAEADACQADACAFAAQAHAAADgDQAEgEAAgHIgCgIIgDgGIAGgJIAlACIAAAvIgMAAIAAgkIgSgBIACAHIABAJQAAAIgDAGQgEAFgFADQgFADgHAAQgIAAgGgDgAHBjWQgFgEgDgHQgCgHAAgJIACgOIAEgLIALAFIgDAHQgCAFAAAHIABAIQABAEADACQADADAEAAQAFAAADgDQACgDABgEIABgJIAAgGIALAAIAAAHIABAHQABAEACACQACACAEAAQAEAAACgCQACgCABgDIABgHIgBgKIgDgIIALgEIACAFIADAJIABALQAAAIgDAGQgCAGgFADQgEADgHAAQgFAAgFgCQgFgDgDgHQgBAHgFAEQgFAEgIAAQgHAAgFgEgADPjWQgFgEgCgHQgDgHAAgJIACgOIAEgLIALAFIgDAHQgBAFAAAHIABAIQABAEADACQACADAFAAQAEAAADgDQADgDABgEIABgJIAAgGIALAAIAAAHIABAHQAAAEACACQADACADAAQAEAAADgCQACgCABgDIABgHIgCgKIgCgIIALgEIACAFIACAJIABALQAAAIgCAGQgDAGgEADQgFADgGAAQgGAAgFgCQgEgDgDgHQgCAHgFAEQgFAEgHAAQgIAAgFgEgAABjWQgDgCgEgEIgJgJIgNgQIAAAhIgNAAIAAg1IAMAAIAXAbQAFAFACADQAEADAFAAQAGAAAEgEQADgDAAgIIgBgHIgCgHIgDgGIALgEQAEAFACAHQACAHAAAIQAAAIgDAGQgDAGgGAEQgFADgIAAQgGAAgEgCgAjojWQgEgCgFgEIgIgJIgOgQIAAAhIgMAAIAAg1IALAAIAYAbQAEAFAEADQAFADAFAAQAFAAAEgEQAEgDAAgIIgBgHIgCgHIgDgGIALgEQADAFACAHQACAHAAAIQAAAIgDAGQgDAGgFAEQgGADgHAAQgGAAgFgCgAn9jsIAAgPIA+AAIgHgNIALgGIALAXIAAALgArsjsIAAgPIA+AAIgHgNIALgGIALAXIAAALg",
      );
    this.shape_1.setTransform(174.4, 46.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgaLJQgHgEgFgJQgEgJAAgNQAAgMAEgJQAFgJAHgFQAIgFAKAAQAIAAAHAFQAIAFAEAJQADAJAAAMQAAANgDAJQgEAIgIAFQgHAFgIAAQgKAAgIgFgAgWKSQgEAGAAAOQAAAOAEAHQAFAHAJAAQAIAAACgHQAFgHAAgOQAAgOgFgGQgCgHgIAAQgJAAgFAHgAAUF/QgIgEgDgJQgFgJAAgNQAAgMAFgJQADgJAIgFQAHgFALAAQAKAAAHAFQAIAFADAJQAFAJAAAMQAAANgFAJQgDAIgIAFQgHAFgKAAQgLAAgHgFgAAZFIQgFAGAAAOQAAAOAFAHQAEAHAJAAQAIAAAEgHQAFgHAAgOQAAgOgFgGQgEgHgIAAQgJAAgEAHgAgYGDIAAg+IgOAHIgFgLIAWgLIAMAAIAABNgAAUArQgIgFgEgJQgEgJgBgMQABgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAHAEAEAJQAEAJAAAKQAAANgEAJQgEAJgHAFQgIAEgKABQgKgBgHgEgAAYgLQgEAHgBAMQABAOAEAGQAEAHAJAAQAJAAAEgGQAEgHABgOQgBgMgEgHQgEgHgJAAQgJAAgEAHgAg5AuIAAgLIAbgYQAFgEACgEQADgDAAgFQAAgFgDgEQgEgEgHAAIgIABIgHACIgFADIgFgLQAGgDAHgCQAHgCAHAAQAIAAAHADQAGADAEAFQADAGAAAHQAAAGgCADQgCAEgFAFIgJAIIgPAOIAhAAIAAAMgAAPkbQgHgEgFgJQgDgJAAgNQAAgMADgJQAFgJAHgFQAIgFAJAAQAKAAAIAFQAHAFAFAJQADAJAAAMQAAANgDAJQgFAIgHAFQgIAFgKAAQgJAAgIgFgAAUlSQgFAGgBAOQABAOAFAHQAEAHAIAAQAJAAAFgHQAEgHAAgOQAAgOgEgGQgFgHgJAAQgIAAgEAHgAg3kYIgLgEIAFgLIAIADQAFACAGAAIAIgBQAEgBADgDQACgDAAgEQAAgFgDgDQgCgCgEgBIgJgBIgHAAIAAgLIAHAAIAIgBQADgBACgCQACgCABgEQgBgEgCgCQgCgCgDgBIgHgBIgJABIgIADIgEgLIAEgCIAJgDIALgBQAIAAAGADQAGACADAFQAEAEgBAHQABAFgDAFQgDAFgHADQAHABAEAFQAEAFABAIQgBAHgEAFQgEAFgHADQgHACgJAAIgOgCgAAPqCQgHgFgFgJQgDgJAAgMQAAgNADgJQAFgIAHgFQAIgFAJAAQAKAAAIAFQAHAEAFAJQADAJAAAMQAAANgDAJQgFAJgHAFQgIAEgKABQgJgBgIgEgAAUq6QgFAHgBAOQABAOAFAGQAEAHAIAAQAJAAAFgGQAEgHAAgOQAAgOgEgHQgFgHgJAAQgIAAgEAHgAggp/IAAgRIglAAIAAgKIAngyIANAAIAAAxIAJAAIAAALIgJAAIAAARgAg3qbIAXAAIAAgdg",
      );
    this.shape_2.setTransform(30, 86);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#999999")
      .ss(2, 2, 1)
      .p(
        "AQYlWIEGAAAz7lGID+AAA0dqsMAo6AAAA0dAAMAo6AAAA0dFWMAo6AAAA0UKtMAosAAA",
      );
    this.shape_3.setTransform(174, 86.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#333333")
      .ss(2, 1, 1)
      .p("A36tkMAv1AAAIAAbJMgv1AAAg");
    this.shape_4.setTransform(153.7, 86.9);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(230,230,230,0.8)")
      .s()
      .p("A36NkIAA7IMAv1AAAIAAbIg");
    this.shape_5.setTransform(153.7, 86.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(1, 1, 1).p("AgBAAIADAA");
    this.shape_6.setTransform(0.3, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-1, -1, 308.9, 175.8);

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
      .rf(["#2621FF", "#000000"], [0, 1], 8.3, -9.8, 0, 8.3, -9.8, 37.8)
      .s()
      .p("AjWDXIAAmtIGtAAIAAGtg");
    this.shape.setTransform(21.6, 21.6);

    this.shape.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 43.2, 43.1);

  (lib.ClipGroup_0 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AAIAgQAkgjAThLIALgGQgCAjgUAnQgpBNhUASQBAgkARgRg");
    this.shape.setTransform(7.2, 8.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.3, 0, 15, 17.2);

  (lib.Symbol3copy4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AIVClQAyhGAAhbQAAheg3hJIDIAAIAAFIgAg3ClQAyhGAAhbQAAheg3hJICBAAQg3BJAABeQAABbAxBGgApzClQhkAAAAhlIAAh/QAAhkBkAAIBsAAQg3BJAABeQAABbAxBGg",
      );
    this.shape.setTransform(849.9, 19.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(777.1, 3.1, 145.7, 33);

  (lib.mc_patch = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.Symbol3copy4();
    this.instance.setTransform(-421.6, 15, 1.25, 1.25, 0, 0, 0, 512.6, 31.5);
    this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 24);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-117, -46.6, 238, 96);

  (lib.mc_blue = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.ClipGroup_0();
    this.instance.setTransform(8.4, 7.8, 0.64, 0.64, 0, 0, 0, 8.1, 9);

    this.instance_1 = new lib.ClipGroup_1();
    this.instance_1.setTransform(0, 0, 0.64, 0.64, 0, 0, 0, 21.6, 21.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-13.8, -13.8, 27.6, 27.6);

  (lib.mc_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        [
          "#696969",
          "#353535",
          "#696969",
          "#353535",
          "#696969",
          "#353535",
          "#696969",
        ],
        [0, 0.176, 0.369, 0.537, 0.706, 0.843, 1],
        522.7,
        -0.1,
        -522.2,
        8.7,
      )
      .s()
      .p("EhKSAEiIAApDMCUlAAAIAAJDg");
    this.shape.setTransform(514.4, 29.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("EBHMAAVIAAgpIDHAAIAAApgEhKSAATIAAgnICpAAIAAAng");
    this.shape_1.setTransform(514.4, 77.3);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#2D300C")
      .s()
      .p("EhKSABRIAAgdMCUlAAAIAAAdgEhKSgA0IAAgcMCUlAAAIAAAcg");
    this.shape_2.setTransform(514.4, 76.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(
        [
          "#696969",
          "#353535",
          "#696969",
          "#353535",
          "#696969",
          "#353535",
          "#696969",
        ],
        [0, 0.176, 0.369, 0.537, 0.706, 0.843, 1],
        63.9,
        -37.6,
        -1349.8,
        -28.8,
      )
      .s()
      .p("AAAAAIAAAAIAAAAIAAAAg");
    this.shape_3.setTransform(990, 66.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#171901")
      .s()
      .p(
        "EhKSABHMCUkAAAIAAAlMiUkAADgEhKSAArIAAgZICoAAIAAgnIioAAIAAgpMCUkAAAIAAApIjHAAIAAApIDHAAIAAAXgEhKSgBaIAAgRMCUSgADIASAAIAAADIACABIgCAQg",
      );
    this.shape_4.setTransform(514.5, 77.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .lf(
        [
          "#4D4D4D",
          "#333333",
          "#434343",
          "#272727",
          "#4D4D4D",
          "#232323",
          "#434343",
        ],
        [0, 0.176, 0.369, 0.537, 0.706, 0.843, 1],
        64.8,
        29.4,
        -1348.9,
        38.2,
      )
      .s()
      .p("AAIAEIAAgDIgQAAIAAgEIAQAAIABAAIAAAHg");
    this.shape_5.setTransform(989.1, 66.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .lf(
        [
          "#4D4D4D",
          "#333333",
          "#434343",
          "#272727",
          "#4D4D4D",
          "#232323",
          "#434343",
        ],
        [0, 0.176, 0.369, 0.537, 0.706, 0.843, 1],
        522.7,
        33.2,
        -522.2,
        42,
      )
      .s()
      .p("EhKSgAoMCUlAAAIAABJIgSAAIAAAGMiUTAACg");
    this.shape_6.setTransform(514.4, 62.3);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#404040").s().p("EhKSAGZIAAsyMCUmAAAIAAMyg");
    this.shape_7.setTransform(514.5, 30.9);

    this.instance = new lib.Symbol4("single", 0);
    this.instance.setTransform(512.3, 339, 1.799, 1.799, 0, 0, 0, 284.8, 187.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance },
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
  p.nominalBounds = new cjs.Rectangle(0, -10.1, 1024.7, 820.6);

  // stage content:
  (lib.Speeddistribution = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.mc_bg("synched", 0);
    this.instance.setTransform(512.1, 265.5, 1, 1, 0, 0, 0, 512.3, 266.3);

    this.instance_1 = new lib.mc_patch();
    this.instance_1.setTransform(767.9, 743.1, 1, 1, 0, 0, 0, -165.3, 0);

    this.instance_2 = new lib.mc_chart("synched", 0);
    this.instance_2.setTransform(171.9, 567.4, 1, 1, 0, 0, 0, 153.7, 86.9);

    this.instance_3 = new lib.mc_blue();
    this.instance_3.setTransform(174.3, 401.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(511.8, 393, 1024.7, 820.6);
})(
  (lib = lib || {}),
  (images = images || {}),
  (createjs = createjs || {}),
  (ss = ss || {}),
);
var lib, images, createjs, ss;
