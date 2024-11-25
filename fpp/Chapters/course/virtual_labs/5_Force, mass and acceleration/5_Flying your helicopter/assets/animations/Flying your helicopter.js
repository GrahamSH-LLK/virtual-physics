(function (lib, img, cjs, ss) {
  var p; // shortcut to reference prototypes

  // library properties:
  lib.properties = {
    width: 1024,
    height: 808,
    fps: 24,
    color: "#666666",
    manifest: [
      { src: "images/Untitled2.png?1497423835944", id: "Untitled2" },
      { src: "images/Untitled5.png?1497423835944", id: "Untitled5" },
    ],
  };

  // symbols:

  (lib.Untitled2 = function () {
    this.initialize(img.Untitled2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 821, 336);

  (lib.Untitled5 = function () {
    this.initialize(img.Untitled5);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 821, 336);

  (lib.tree = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#7AA43C")
      .ss(1, 1, 1)
      .p(
        "AhBgHQAIgKABgDIAAAAQAAgDAAgDQAAgCAAgDQAFhdASh0QABgLACgKQABgFABgFQARhTAchJQABgEACgEQABgDACgDQABgDABgDQAAADAAAEQgBADAAAEQAAACgBACQgCAgAHAMQAGgYAJgXQArh0BdhVQAjghArgcQACgCADgBQgCADgBADQgMAZgCAdQAQgYASgWQBahvCEg4QgiAmgJAfIAAgBQCQhgCbgGQAugCAvAGQDCAlCdB0Qh/gyhnAyQAgADAZAcQhqAPhZA4QAtAPACAPQiEAGh0BAQAtgCAfAjQhbAJhQAhQgEACgFACQg9Aag2AoQAxgLAyAdQiQAch0BNQgDACgDACQhAArg2A6QgHAHgHAIQAJgDAIgDQACgBACAAQAogNAngJQAagFAagEQBdgOBaAKQCiARB3BZQAoAdAgAkQBDBIAgBlQA0CgguDIQgPi4gygrQANA2gNAVQhJimh0hAQAiAeABAyQh7hrh6gPQAqAgAOAiQhlgphJAGQArAXAOAeQgygjhOANQgFgGgGgGQgHgIgJgFQgWgOgcAAQgcAAgVAOQgIAFgGAGQgJgPgNgNQgVgWgcgJQAKgPADgQQABgGABgGQAAgBAAAAQAAgBAAAAQAAgVgKgQQgFgIgHgFQgFgFgGgEQgSgMgWAAQgIAAgHABQgPADgUAPQgBABgBABQgFAEgDADAiSihQgHgXgNgYQgBgCgBgBQgBgCAAgCQgBAAAAgBQgjg7hLhAQATgKATAKQhIiWiNg9QAagMAeAHQh1h0iWgkQAHgVAqgNQh4gshVAjQACgqApgPQhRgMgzA/QA1hgBIg3QAugjA1gSQCFguCJBEQCOBHB3CzQBOB1AcCcQAMBEADBMQAAAFAAAFQAAAKAAAKAkxgOQAFgIAIgIQAagaAkgIQgsgDgnADQhvAKhPA4QgBgHACgJQAFghAiglQiXAAhZBWQgBgnAkgqQijBNhcDHQgNgYAXg4QiSDABAD4QgrAGgPhWQgUBRBBCBQjBh9ACkKQABh2Arh4QATg3Apg8QAthFBHhPQADgDADgEQCMiZDrACQA2AABFAKQBjAYBJAlQBJAkAwAxAiphBQgOgDgPAAQgRAAgPAEAkxgOQAJgFAKgCQAYgHAVAEIAdgVIgHAUQAnACAfAPIAOgOQAAAAABABIAGAaIAQAHIABABIAHADIAKgMIAEAWIAYAjIABABQAAACAAABQAAACAAACQgBAOgEAOQgBACAAADQABgBADgBQgBgBgBgBQgBgBAAAAAnBjhIAHACQAfAGAeALQBoAkBXBUQALAKAKALQAPADAOAHQAUAJAQAQAiMg4QAOgegfhGQgKgVgNgZQAAgBgBgBQgBgCAAgBQABABABABQAAABACABQASAUAOAWQAlA5AFBKAhNAFQgJgSgRgRIgBAAAiGgVIAAgCIgBABAhNAFQABgCABgBQAGgCAFAAQAOgEALACIARgMIgFAMQAXABAPAGIAHgGIABAAIAAABIAEAOIAJAEIAEACIAFgHIADANIANATIABABACHhxQAUgGAYAAQAxAAAjAcQADADACACQADACACADQADACACADQABABACACQAFAGAFAIQAEAFADAGQANAbAAAeQAAABAAABQAAABAAACQgBAagKAYQgJAWgSATQgUAWgaALACHhxIBPg1ABlhgQgJAHgIAIQgHAHgGAIQAKgEAJgDQAZgHAVAEIAdgVIgIAUQAoADAeAPIAOgPQABABABABAASgBQABABAAAAABHhCQgYAhABApAByiJQg7A1geBGABlhgIAigwACHhxQgSAGgQALADxhKIABgBIABADIAGAcIAQAHIAAAAAEJglIAAAAIAHADIAKgLIAEAWIAZAgIAAACAiDDMQgsBWgMBsQgBAKgBAKQgdgKABg5QgtAlAZCtQgoACgghZQgaC3BLC3QgrgTgjg9QAIBzBLBpQhWhKg+h4Qg+h3gTh/QgTiHAlhpQAph2Btg+QgMgcgBggQgBgrAZgfADeCdQgBgBAAAAIABgBgADtC1IgLgEIgEgUADtC2IAAgBIABABIAEACIAHgIIADAPIARAYIABABAD+CjQAQAXAAAdQAAAAAAABQAAABAAABQgBALgCAKQDVDrhAG9QgTjQgagbIAABpQg6jagWgbIAAA1IhfjSIAABDIgSgrIgvhvQgLgHgJgKQgHAMgJALAA+CCIgBgDIgBABQABABABABIAGAcIAQAHAA4A7QAJAYAQAVQASAXAdALACCDXIAAgCIgZgiIgEgWIgKALIgHgDIAAAAIAAAAAByCVQABADACADQAAABABAAADdCcIgKAKQgVgKgcgCIAGgOIgVAPQgNgDgQAEQADAGACAHQAHAUAAAYQAAABAAABQAAABAAACQAAAIgBAJQgCAJgDAKQgFAPgIAOAhsCIQAKgEAJgDQADgBAEAAQAUgFATADIAdgVIgIAUQAmADAeAPIAOgPACDEsQAOAHASADQAFAAAGAAQAdABAWgOQAGgEAGgFQADgDADgDQASgUAGgXAAAFeQAJAAALgBQAPgDANgFQAMgFAKgHQAMgIAKgMQACgBABgCQAFAFABADQgPAIgQAHAhNAFQACADABAEQACAFABAFQAFAOABARQAAADAAAEQAAABAAABAhDBkQAPgJASgEQAQgEASAAQAAAAABAAQAWAAAUAHAhwAMIAAABAhsCIQgOATgFAXQgEAMAAANQAAAAAAABQAAgBAAAAIAAABIAAAJQAAgFAAgEAhHBmQgNAIgLALQgHAHgGAIAh/CyQggAUgrAAQgkgBgZgOQgNgHgGgMQgJgDgFgGQgNgRgHgSAAAFeQgCAAgDAAQg9gBgggpQgcgkgFhEAghFjQAOgBAPgDIAAAAQACAAACgBAn2gOQBwhuDIAm",
      );
    this.shape.setTransform(120.1, 98);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#94531B")
      .ss(1, 1, 1)
      .p(
        "AgYsRQAFALADAGQAFAKAFAKQAOAkAQAkQADAHADAHQAKAXAJAYAhnEqQADgPADgPQAGglAFglQAEgdADgcQADgYACgXQAEgxACgvQABgUAAgTQABgcAAgdQAAg7gEg7QAAgCAAgCQgBgMgBgMQgBgXgCgXQgCgQgBgQQgCgPgCgQQgIg9gKg9QgDgRgDgSQgDgLgCgMQgDgRgEgSQgDgPgEgPQgBgGgBgGQgPhBgThAABIopQAMAkAMAmQAHAXAHAYQAFASAGATQARBBAPBEQAEATAEATQAAADABADQALA5AJA7QADARADASQAFAmAFAmQAFAoAEApQAFA3ADA5QABATACAUQACA1ACA2AAxpnQAFANAEAMQAHASAHATADfGAQABA9AAA+QgBAogBAqQgBAvgIAvQgGAigJAiQg0ATgwAJQhaAQhPgTQhUgThEg3QAhhSAbhTQAFgQAEgPQAchdAThd",
      );
    this.shape_1.setTransform(132.8, 208.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#719737")
      .ss(1, 1, 1)
      .p("AgKgeIAAABAALAeIAAAB");
    this.shape_2.setTransform(138.9, 149.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p("AilgUQACgLADgLAClAGQAAASAAAT");
    this.shape_3.setTransform(138.6, 242.3);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#9B6D3C")
      .s()
      .p("AgwgNQAPABAQAEQA6AiAQhIQgGAhgJAgQgxATgxAJg");
    this.shape_4.setTransform(148.4, 281.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#C7995D")
      .s()
      .p("AhYAaIAMgpQAaABAhgKIAHgCQAugMA1AGIgIA8QgqAHgnAAQgsAAgsgJg");
    this.shape_5.setTransform(134.5, 283.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#C28944")
      .s()
      .p("AhNAXIAJguQBHAJBLgSIgFAsIgBASQgbADgaAAQgyAAgugKg");
    this.shape_6.setTransform(137.8, 265.5);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#A06C3A")
      .s()
      .p("AhQAsQAhhPAahTQAYATAdAOIgDAJQg0BmA6AjQATAOAbABIgLArQhTgThDg4g");
    this.shape_7.setTransform(118.6, 273.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#783F12")
      .s()
      .p("AgeAAIAJgfQAZAOAcAKIgCAHIgIAgQgbgOgZgSg");
    this.shape_8.setTransform(119.6, 261.9);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#633911")
      .s()
      .p("AgmgJQAlgDApgHIAAAjQgpAEgmAAIABgdg");
    this.shape_9.setTransform(151.1, 244.9);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#94531B")
      .s()
      .p("AgjgMQAggIAkgLIADAlQgkAQgjAKIAAgsg");
    this.shape_10.setTransform(151, 231.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#C28942")
      .s()
      .p("Ag7gXQA6AGBBgOIAAAsQhAATg/AAIAEg3g");
    this.shape_11.setTransform(140.9, 233.5);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#96551D")
      .s()
      .p(
        "ABBCwIAGgtQAvgMAxgWIgCBSQg1AMgwAEgAilChIgBgBIAIgiIACgGQAoAOAoAFIgJAwQgrgJglgRgAhsiAIAIhCQAfALAiAEIgEA5QgjAAgigGg",
      );
    this.shape_12.setTransform(138.5, 249.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#643D14")
      .s()
      .p("AgjAAIAEgWQAfAPAkAHIgDAXQgigKgigNg");
    this.shape_13.setTransform(130.2, 242.7);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#533012")
      .s()
      .p("AgXAAIAEgVQAUANAXAJIgDAWQgWgMgWgLg");
    this.shape_14.setTransform(124.4, 240.3);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#522E0E").s().p("AgUAMIABglIAoAHIgBAsQgUgGgUgIg");
    this.shape_15.setTransform(128, 206.1);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#A87A3F")
      .s()
      .p(
        "AhCDHIACgYQA/APBEgEIgBAgQhGgBg+gSgAgviWIgBg2QA0AAAxgNIAHBFIgZACIgKAAIgGABQggAAgigFg",
      );
    this.shape_16.setTransform(140.4, 225.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#95541E")
      .s()
      .p("AgfgDQAcgIAagQIAIAkIABAGQgdAIgbAFIgHgfg");
    this.shape_17.setTransform(145.8, 184.6);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#985A21")
      .s()
      .p("AAAAMIgUgDIgDgXIAXAEIAVACIADAXIgYgDg");
    this.shape_18.setTransform(132, 186);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#7B4016")
      .s()
      .p("AgSAIIAAgEIgCgVQAUAHATAFIACAXQgVgEgSgGg");
    this.shape_19.setTransform(127.6, 185);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#A37140").s().p("AgTgQIAgAAIAHAeIggADIgHghg");
    this.shape_20.setTransform(122.9, 152.5);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#A6783D")
      .s()
      .p(
        "AgUBEQAegKAggSIAMAtQghAYghAOIgIg3gAg1hsQAWgGAVgIIAKAdQgXAIgZAEIgFgbg",
      );
    this.shape_21.setTransform(134.4, 164.3);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#DEB271")
      .s()
      .p(
        "AhmKVQARhEAOhEQBFAPBQgHIgPBvQg0gGguAMIgIACQgeAJgYAAIgFAAgAg9HdIACgNQAPhTALhTQA8ARBIABQgFBKgIBKIgBAFQgxALgvAAQgZAAgZgDgAgUCdQAEhGAChFIAAhGQAjAGAlgBIAKAAIAZgCIAGBDQADBBABBCQgvAKgpAAQgRAAgSgCgAgPhqIgDhEIgIhmQAqAEAtgGQAKA0AIA0IAHA4QgtAMgxAAIgHAAgAgcktIgKhUQAjgPAfgXQAPA4AMA4QgkAKgjAAIgMAAgAhKpPQAYgFAYgHQAYBDASBEQgeASggAJQgMhLgQhLgAhQprIgIgeQAVgEAUgHIALAcQgVAIgXAFg",
      );
    this.shape_22.setTransform(137.1, 215.3);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#663C12")
      .s()
      .p(
        "ABWDtQAegIAdgNIAKBOQgfAIgfAEIgHhFgAg0EoIgRgFIABguIAQACQASACASAAIABA2IglgHgAh6gpIgDgfIAGgBQAQAAAQgCQAUgDAUgGIAIA4IgNAFIgcAIQgRAEgVACIgEgggAAPhvQAagQAagUIALAlQgZAZgaATIgMgtgAiVjlIgFgXIAigDIAGAZIgbABIgIAAgAglkTQAdgMAXgSIAOAlQgdANgaAJIgLgdg",
      );
    this.shape_23.setTransform(137.1, 179.6);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#CB9559")
      .s()
      .p("Agug3QAcgJAbgNIAAAAIAYBKIAOAtQgaAVgYAPQgThEgYhBg");
    this.shape_24.setTransform(139.1, 160.5);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#794013")
      .s()
      .p("AgMARIgHgcIAGgBIAYgEIAJAhIgRAAIgPAAg");
    this.shape_25.setTransform(122.2, 148.9);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#C2E56F")
      .s()
      .p("AATAqIAABDIhijxQgch+B+DgQgXhFgMhGQA2AHAvFYQgchbgmgtg");
    this.shape_26.setTransform(152.9, 150.1);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#7A4114")
      .s()
      .p(
        "AhJHMIAMhKQAUAMAXAIIgJBBQgXgEgXgHgAACm3QAcgNAZgSIATAuQgbARgdAKIgQgqg",
      );
    this.shape_27.setTransform(130.4, 188.9);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#C79153")
      .s()
      .p(
        "AihIzIAAAAQAXheAPhbQAiAPAkAKQgKBUgPBTIgDANQgogGgogOgABDI6QAIhLAEhJQAnAAArgEIABB6QgxAXgvALIABgEgAgyF8QgkgJghgPIAGgrQAiAGAjABQA9AABDgTIgDBaIgbAAQg2AAgygLgAhoD4IAIhOIADguIAFhUIARAEIAmAIIAABIQgCBFgEBFQgjgDgegLgABPB8IgFhGQAfgDAfgIIAJBRQAFA3AEA4QgnAMgfAHQgBhCgEhAgAhHgCIgQgCIAAhAQgBg3gDg2IAUAEIAaADIAHBmIADBEQgSgBgSgBgAA7hEQgHg1gKgzQAdgEAdgIQALA5AKA7IAFAiQgcAOgfAIIgIg4gAgtiqIgDgZQArACAogMIAHAhQgcADgZAAIgigBgAhHjGIgWgEQgUgFgVgHIgDguQAVgDARgEIAcgIIAOgFIAJBVIgXgDgAAIk+QAagTAZgYQARBBAPBEQgbAPgdAIQgLg5gQg4gAiFnhQAUgCAUgDQAPBLANBMQgUAGgVADQgLhPgQhMgAiSobQATgBAUgEIAHAeIABABQgUAEgTADIgIghgAhCorQAcgKAbgRIAAABIAJAZQgZARgdAMIgKgcg",
      );
    this.shape_28.setTransform(139, 204.7);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#C69052")
      .s()
      .p(
        "ABfLaQgQgEgPgBIAPhwQAwgEA1gLQgBAugIAwQgLAygfAAQgPAAgTgMgAiULXQg8gjA3hoIADgIQAlARArAJQgOBEgRBEQgbgBgUgOgABnEUQAkgKAlgQIAEBqQgrAHgkADIAChagAitrjIAEgBQALAAAKgBQAbA1AXBPQgSAGgTAEIgmiMg",
      );
    this.shape_29.setTransform(137, 207.2);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#97561C")
      .s()
      .p("AgWgMQASgDARgGIALAmQgUAEgRABIgJgig");
    this.shape_30.setTransform(125.8, 148.5);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#C08742")
      .s()
      .p("AgYgMQASgGAPgHIAQAoQgUAHgSAEIgLgmg");
    this.shape_31.setTransform(129.7, 147.5);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#DAB16F")
      .s()
      .p("Agpg9QAPgCAOgGQAcBBAaA8QgRAIgSAGQgVhOgbg1g");
    this.shape_32.setTransform(126.3, 139.2);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#A16D3B")
      .s()
      .p(
        "AhYJ6QAchdAShdQAXANAVALQgNBcgWBeQgcgKgbgOgAglGqIAFgeQAXAHAVAFIgGAqQgVgKgWgOgAgUFCIAHg5IAFgvQAEgxACgxQASAIAWAGIgFBUIgEAvIgIBNQgVgIgUgMgAgBBRIABg5QAAg5gEg7QASAGAVAEQACA2ABA0IAABAIgngHgAgilfIgHgjQASABASgCIgGgZQASgCAUgFIAFAcQgUADgRABQAOBNALBOQgQACgPAAIgFABQgIg9gKg9gAg9nmQgPhBgThAIAdgEIAAAAIAnCLIgaAEIgGACIgCgMgAgMp2QAMgFAJgHQAPgGAPgJIAIARIAKAUIAhBIIAGAOQgZASgcANQgag+gdhBg",
      );
    this.shape_33.setTransform(126.3, 195.3);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f("#527928").s().p("AgWg2QAOAHAQADQARA1gCAug");
    this.shape_34.setTransform(135.6, 133.6);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#F8FEB4")
      .s()
      .p(
        "AAHCbQgPAAgOgJIgJgHQgQgQAAgWQAAgWAQgQQARgPAVAAQAYAAARAPIAHAIQAJANABARIgBANQgFAOgLALQgOAOgUACIgHAAgADKCTQgJAAgHgDIABgRIAAgDIAAgCIAAACIAAgBIAAgBQAAgXgGgVQAIgFANgBQAQAAALALIAGAFQAGAJAAAMIgBAJQgCAKgJAIQgKAJgMACIgFAAgAi8ACQgSABgNgHIgKgHQgPgQgBgXQABgVAPgRQARgPAYAAQAYAAAQAPIAHAIQAKANAAARIgBAOQgEAOgMALQgOALgTACIgHAAgAAOgaQgKAAgFgFIgFgDIgCgCQgBgRgEgOQACgGAFgEQAHgJANAAQAOAAAJAJIADAEQAGAHAAAKIAAAHQgDAIgGAHQgJAHgKABIgEAAgAC9gvQgTAAgNgIIgJgIQgQgPAAgXQAAgWAQgQQARgPAYAAQAXAAARAPIAHAHQAKAOAAARIgBANQgFAOgLALQgOANgUADIgGAAg",
      );
    this.shape_35.setTransform(114.4, 107.1);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#E9F997")
      .s()
      .p(
        "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",
      );
    this.shape_36.setTransform(117.9, 107.3);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#517829")
      .s()
      .p("AikAfQBvhrDHAmIAUAVQgNgDgPAAQgRAAgPADQgsgDgoAEQhsAJhPA4QgBgJACgJg");
    this.shape_37.setTransform(86.3, 93.3);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#BBD770")
      .s()
      .p(
        "AADDrQg8gBgggpQgbgjgFhFIAAgBIgBABIAAgBQABgNADgMQAGgXAOgTQAJgEAKgDQgKADgJAEQAFgIAIgHQALgJAMgIIAEgCIgCgCIAAgBIgCAFQgMAIgLAJQgIAHgFAIQgOATgGAXQggAUgrAAQgjgBgagOQgMgHgHgMQgJgDgEgGQgNgRgIgSQgMgaAAggQgBgrAYghQAKgFAJgCQgJACgKAFQAGgIAHgIQAbgaAkgIQAPgEARAAQAPAAANADQAQADAOAHQATAJARAQIAAAAQARARAKAUIACgDIALgEIgLAEIAHgJIADgCQAUgPAOgDQAIgBAIAAQAWAAARAMIAMAJQAHAHAEAIQAAgrAYghQAFgIAIgHQAIgIAJgHQAPgLASgGQAVgGAXAAQAxAAAjAcIAGAFIAFAFIAFAFIACADIALAOIAGALQAOAbAAAgIgBAAIgYgiIgEgWIgKALIgHgDIgBAAQgHgTgPgQIAAgDIgBABIgDgDQgegbgqAAQgrAAgeAbIgDAEQgKADgJAEQAJgEAKgDQgaAbAAAmQAAAoAdAcQAeAcArAAQAqAAAegcQAbgZADgiIAAgCIAAgHIgBgPIgDgOIABAAIAHADIAKgLIAEAWIAYAiIABACIAAADQgBAagKAYQgKAWgRATQgUAUgbALQAJAFAIAIIAKAMQAQAXAAAdIAAAAIgRgYIgDgPIgHAIIgFgCIAFACIAHgIIADAPIARAYIAAABIAAACQAAALgDAKQgGAXgRAUIgGAGIgMAJQgWAOgdgBIgMAAQgSgDgNgHQgMgHgIgKQAIgOAFgPQATAPAZAAQAeAAAUgUQATgSADgXIAAgBIAAgFIgBgLIgCgJIAAAAIAAgBQgFgNgLgLIAAgCIgBABIgCgCQgGgGgHgEQgQgJgVAAQgRAAgOAGQgKAFgJAIIgBABIAAABIAGANQAHAUAAAYIgBAAIgYgiIgEgWIgKALIgHgDIgBAAIABAAIAHADIAKgLIAEAWIAYAiIABACIAAADIgCARIgEATQgFAPgIAOQgHAMgJALIgDADQgKAMgMAIQgLAHgLAFQgOAFgPADQgKABgLAAIgFAAgAgygFQgKAEgJAFIgHAGIgDAEQgPAQgGATQgFAOAAAQIAAAIQADAjAaAZQAeAcArAAQAoAAAegcQAXgWAGgbIABgKIAAgCIAAgFIAAgCIgBgPIgDgOIAAAAQgHgTgPgQIAAgDIgBABIgDgDQgOgKgPgHQgUgIgVAAQgaAAgVAKgABCg2QgDAQgKAPQAbAJAWAUQANANAIAPIAEAGIgEgGQAHgGAHgFQAWgOAcAAQAcAAAVAOQgVgOgcAAQgcAAgWAOQgcgLgTgVQgQgVgIgYIABgMIAAgBIAAgBQAAgVgKgQQAKAQAAAVIAAABIAAABIgBAMIAAAAgAkRiMIgEAEQgaAbAAAlQAAAoAeAcQAeAbAqAAQArAAAdgbQAbgZAEgiIAAgBIAAgIIgBgPIgDgNIAAAAIAAgBQgHgTgPgQIgBgCIgBABIgDgDQgdgcgrAAQgqAAgeAcgAg1gpQANALAQAEQgSAEgQAJQAQgJASgEQAPgEAQAAIADAAQAJgEAHgHQAPgOACgTIAAgBIAAgEIAAgIIgCgIIAEACIAGgHIACANIAOATIAAABIAAgBIgOgTIgCgNIgGAHIgEgCQgEgLgIgJIgBgBIAAAAIgCgBQgHgHgIgDQgLgGgMAAIgIABQgOABgMAIIgHAGIgBACQgHAGgDAIIgDgHIADAHIADAKQAEAOABARIAAAHIAAABIgZgjIgEgWIgKAMIgHgDIAHADIAKgMIAEAWIAZAjIAAABIAAADIAAAEQgBAOgDAOQADgOABgOIADADgAA1gXQgUgHgXAAQAXAAAUAHgAhiAVIAAAAgABki8IAAAAg",
      );
    this.shape_38.setTransform(119.1, 109.5);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#50781F")
      .s()
      .p(
        "ABuCiIgMgKQAehGA8g1IAQgFIAEgCIgiAxQgIAGgJAIQgHAIgFAIQgYAgAAArQgFgIgGgGgAgeCJIgBgBQgFhKgkg5QAkA5AFBKQgQgQgUgJIAAAAQAPgegghGQgJgUgNgYIABgBQASATAPAUQgIgVgNgYIgCgDIgBgDIAAgBQgkg8hLg/QATgLAUALQAeABAgAqQARAYAfA2QAOAVALAKQANBOAGBYIABAIIALAOIgCAEQgJgUgRgRgAgCCqgAgCCgIAJAAIgDACIgGAIg",
      );
    this.shape_39.setTransform(112.8, 81.2);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#517827")
      .s()
      .p(
        "AgoiXQAHAMAMAHQAYAOAjABQArAAAggUQgDAMgBANIAAABQgsBXgMBpQgWgRAThZQgPg6gjBTQgEh4hNAnQhXBagRB8QgZCzB4D2QkAnfEyjmgACllQQgDhSgKhMIAAAAIADAAQAZAAAahAIABABQgSB0gEBdIgBAGIAAAFIAAABQAAACgIAKIgKABIgBgNg",
      );
    this.shape_40.setTransform(95.8, 129.7);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#2D4E1F")
      .s()
      .p(
        "AkLFRIAAgIQgHhYgMhQQgJg5gMg2QgzjohqioQCbDQAoE4IAAABQAKBLADBSIABANIAAAKgAjtFIIAAgBQAEgCABgDIABgFQApifBSiHQAWghAYgiQAUgbAVgaIAKgNQBDhSBYhHIACACQhUBMhEBjQgqA5gkBAQgaAugYAzQgqBZgjBmQgOACgUAQQAIgKAAgDgABvEgIgLgOQDZgcCUBRQisg4i2ARgACRkIQAVgSAWgQIAbgUIgaAVIgqAjIAAABg",
      );
    this.shape_41.setTransform(138.1, 63.1);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#C5E870")
      .s()
      .p(
        "AlNKoQgGhpAthTQCIjCgxClQgwB4gFBhQgDA3ALAwQgcghgFhGQgcBKALBOQgbhRgEhHgAlmGnQAlhOALAQIABABQhHCkgCCgQgTihArhmgAw/GoIgBgIIAAAAQgNimBYizQAthFBHhNIAIgFQCxiBDRgCQDYgCCFCFQjhiKkmCPQAvgHAqgDQCEgLBbARQAgAGAaAJQBNAaAjA1Qg8gYg8gOQkrhCkgD7QAYhUA8g9QikBGhOFHQgQAlgIAAQgGAAgBgbgAMiDcQA6BGAPBLQiDiQhdgWIAfAnQhyg6iCgHIA9A3Ih0giQAKgYABgaIAAgDIAAgCQAAgggOgbQDAgdCkA9IAFACIACAAQgwghg9gUQh0gliiANIgLAAQgjgcgxAAQgXAAgVAGIBQgzIA0gJQBcgOBbAKQCiARB3BXQAnAdAgAkQB0DugZBVQhmjXhHgIgADZgOQAogNAogJIhQAzQgSAGgPALgACXhKQAbg5BSiHQBYiEB3hkIAagVQA0gqA7gkIARgKIAagMQDZhhDVAyIAOADQkXAUiOCNQAcgOAqABQjrCOiOCWIAVg6IhSBXQiLCjgVAAQgLAAAUgrgAAZiLQhUjwhChvQgfg0gignQgMgOgMgMQgzgxg5gWQC3ChBVFgQilmkjkhTQAlgMAOAMQiaiRiXA6QBghNBvABQBtACBnBKQBpBLBPCHQBUCQAnC8QAFAogBAXQgBAOgBAAIgCgDgACXjwQBFi0BDg7IAAAoIAUgXIAAAAIAfgkIAmgpQBXhaAzgUIgPAiIAagPIAVgLIAAgBIgGgJQCQhhCbgGIAAAUIgRAEIgBgFIAAAFQhQAThvA2IguAXIgBABQgmATgpAXQg5Ang3AyIgBABQhOBGhKBcIgLAMIgpA3IgcAlIgUAeIgBABIANgkg",
      );
    this.shape_42.setTransform(111.8, 85);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#86B241")
      .s()
      .p(
        "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",
      );
    this.shape_43.setTransform(120.1, 98);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-1, -1, 242.2, 288.8);

  (lib.Symbol4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACC1IgCAAIgBAAIk5AAQh9AAAAh9IAAhvQAAh9B9AAIE5AAIABAAIACAAIE5AAQB9AAAAB9IAABvQAAB9h9AAg",
      );
    this.shape.setTransform(-3.5, -7.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACC1IgCAAIgBAAIk5AAQh9AAAAh9IAAhvQAAh9B9AAIE5AAIABAAIACAAIE5AAQB9AAAAB9IAABvQAAB9h9AAg",
      );
    this.shape_1.setTransform(278.5, -7.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-47.5, -25.5, 370.1, 36.3);

  (lib.SandElements = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgEABQABgBADAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIgDAAIgGAAg",
      );
    this.shape.setTransform(-428.3, -356.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFF1CC").s().p("EgA/AoGMAAAhQLQA/AEBAATMAAABP0g");
    this.shape_1.setTransform(496.7, 99.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#C5A87E")
      .s()
      .p(
        "AiRdoQgcgXAAgjQABgwARgQQAMgJBDgbIBeAAQAMANAZAMQASALABALQAAA3g4AnQgyAihFABQgWAAgWgSgEBAMAZyQgUgMABgXQAAgdALgKQAJgGAsgSIBBAAQAHAJASAJIACACQAKAFAAAFQAAATgKAOQgKANgRALQgKAHgJADQgcANgiAAQgQAAgNgMgA09QKQgbgVAAglQAAgvASgQQAMgJBDgcIBgAAQALANAZANQATALAAALQAAA2g3AnQg1AkhFAAQgWAAgWgTgAEjN+QgQgMgKgaQgOgfAMgbQARgkATgBQAMgBA5APIBKA1QACARAPAWQAKAUgDAIQgRAog4ACQgxgDg1gogEA2gAL7QgTgOAAgWQAAgdAMgKQAIgGAsgSIBBAAQAJAJAQAJQANAGAAAFQAAAkgmAWQgiAWgvAAQgOAAgPgKgEhDXAJSQgZgNAAgYQAAgdAQgLQALgIA5gRIBVAAQAKAIAXAJQAQAIAAAFQgBAlgwAZQgvAXg7AAQgTAAgTgNgAOLtWQglgDgngdQgMgIgKgSQgIgZAGgSQAPgdANABQAJgCAsAOIA1AmQADAOAMANQAHARgCAFQgOAegiAAIgGAAgEg2LgN2QgSgPAAgXQAAgcANgKQAGgGAvgRIBBAAQAFAFAIAEQAFAEAHADQAOAHAAAHQAAAbgaAWIgNAJQgkAVgvAAQgPAAgPgKgA9bulQgWgUAAgfQAAgqAPgMQAJgKA8gXIBTAAQAIALAWALQARAMAAAHQAAAxgvAgQgtAfg9AAQgTAAgUgPgEBAVgQZQgcgWABgjQgBgxATgOQAKgKBDgbIBhAAQALANAZANQATAKAAALQAAA2g3AnQg1AjhEAAQgWABgWgTgAaexGQgPgLABgSQgBgXAKgGQAFgGAlgLIAxAAQAFAGAOAFQAJAFAAAGQABANgHALQgIALgOAJQgcAQgkAAQgKAAgMgHgEAoFgYtIgNgJQgbgTAAggQAAgqASgPQAFgDARgHQATgKAigMIBeAAQALALAZANQASAJAAAIQAAAyg2AhQgzAhhCAAQgQAAgOgIgEglXgbtQgXgVAAgeQAAgWAEgOQAEgNAIgGQAIgJA8gZIBUAAQAIAMAWAMQAQAKABAJIAAAKQgFAqgqAdQguAfg8AAQgTAAgUgPg",
      );
    this.shape_2.setTransform(-26.7, 88.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EBBE7D")
      .s()
      .p(
        "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",
      );
    this.shape_3.setTransform(-14.9, 82.2);

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
  p.nominalBounds = new cjs.Rectangle(-503.2, -356.5, 1006.4, 713.1);

  (lib.HeliPad = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(2.5, 1, 1)
      .p("ACli1IBQAAAH0C2IhsAAIsOAAIhtAAACli1IDjFrAj0i1IBQAAIFJAAAmGC2IDilr");
    this.shape.setTransform(3.5, -2.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#FFFFFF")
      .ss(2.5, 1, 1)
      .p(
        "AP7hVIB4AAAVcBWIh4AAMglPAAAQg8AAg8AAIDpirIf1AAIDpCrAxxhVIB3AAAzjBWIh4AA",
      );
    this.shape_1.setTransform(0.9, -3.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AwxCwQm9hJgBhnQABhmG9hKQG9hIJ0gBQJ1ABG9BIQG+BKAABmQAABnm+BJQm9BKp1AAQp0AAm9hKg",
      );

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#A18D63")
      .s()
      .p(
        "A16DSQpDhXAAh7IABgJQAYh1IqhTQJGhXM0AAQM1AAJFBXQIrBTAYB1IABAJQAAB7pEBXQpFBXs1AAQs0AApGhXgAwxjFQm9BKgBBnQABBmG9BJQG9BKJ0AAQJ1AAG9hKQG+hJAAhmQAAhnm+hKQm9hIp1gBQp0ABm9BIg",
      );
    this.shape_3.setTransform(0, 2.1);

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
  p.nominalBounds = new cjs.Rectangle(-198.3, -27.6, 396.6, 59.5);

  (lib.Symbol6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#666666")
      .s()
      .p(
        "AiGB7QgEgBAAgCIACgJQAAgKADgXIAEgPQgMgEgMgDIgWgGQAAgEAGAAQAVAAAWAHIAAgCIATgiQAOgVAKAAQAJAAAEAFQgIAJgQAaQgJAOgFALQALAGAMAHQAXAQASATQgDACgGAAQgJAAgHgJQgLgOgYgNIgHgEQgDAFAAAEIgBAPIgCALQADATgLAAQgFAAgEgCgAgXByQgIgFAAgDQAAgCgEgGQgEgHAAgCIACgJQAAgMATgYIAGgHIgCAAQgKAAgSgQIgRgSIgMgHIgOgIIgWgFQgPgEgEAGQAHgNACAAQAgAAApAcIAkAfQAIgNAAgDQAAgHABgHIABgIIACgOQAAgHgDgOIgBgIQAAgEAGAAQALAAAEALQADAIAAASQAAASgHASQAKgGANgPQAUgaAJAAQAIAAACACIADAEQgDACgXAcQgRAXgRAAIgJgBQgFAIgHAIQgUAcAAARQAAADAKALIAJAMQgCADgEAAQgIAAgJgGgABhAIIABgIIACgJIgPgSQgRgTABgLIgDgJIgDgMIgBgJIACgBQgdgHgJgJQACgCAFAAQAIAAAPAFIAXAHQAqAJAJAHQgGgLAAgGIACgMQAAgDAOgHQANgHAIAAIAIACQAHACAAABIAAACIgcAMQgEADAAAKQAFAKAAADQgBACAFAGQAEAGAAACIABATQgEABgDAAQgIAAgEgEQgEgDAAgCIACgLQAAgCgFgJQAAADgIAAQgHAAgGgEIgHgGIgTgEIgFAAIACADIABAIQAAAGAEAJIAHARQAEANALALIALAJQgCAYgGAAQgQAAABgHgAAjgzQgagUgMAAQgMAAgLgEQgIgEgCgDIAHgCQAKAAA1ASIAWAPQAUAOAAADIAAACIgBgBIgGACQgHAAgbgUg",
      );
    this.shape.setTransform(17.7, 12.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 35.3, 25.1);

  (lib.Symbol2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Eg//ADZIAAmxMBk9AAAQBkAAAABkIAADpQAABkhkAAgEA9hACdQAyhFgBhaQAAhfg3hKICkAAIAAFIgEA0TACdQAxhFABhaQAAhfg4hKICEAAQg4BJABBgQgBBaAyBFgEArXACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg4BJAABgQABBaAxBFg",
      );
    this.shape.setTransform(409.6, 21.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 819.2, 43.5);

  (lib.mc_Helicopter1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 5
    this.instance = new lib.Untitled2();
    this.instance.setTransform(211, -84.3, 0.26, 0.26, 0, 0, 180);

    this.instance_1 = new lib.Untitled5();
    this.instance_1.setTransform(211, -84.3, 0.26, 0.26, 0, 0, 180);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2.6, -84.3, 213.6, 87.4);

  (lib.mc_fan01d = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#02102D")
      .s()
      .p(
        "AgQARQgGgHgBgKQABgJAGgGQAIgIAIAAQAJAAAIAIQAGAGABAJQgBAKgGAHQgIAGgJAAQgIAAgIgGg",
      );
    this.shape.setTransform(15.8, 16);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000066")
      .ss(0.5, 1, 1)
      .p("ABKhDQAVBNgrA6IiEhag");
    this.shape_1.setTransform(23.4, 17.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#03205C").s().p("AhQgWICagtQAVBNgrA6g");
    this.shape_2.setTransform(23.4, 17.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000066")
      .ss(0.5, 1, 1)
      .p("AhChJQBNgVA4AuIhZCAg");
    this.shape_3.setTransform(18.3, 8.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#03205C").s().p("AhChJQBNgVA4AuIhZCAg");
    this.shape_4.setTransform(18.3, 8.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000066")
      .ss(0.5, 1, 1)
      .p("AhGBFQgahMAog9ICJBOg");
    this.shape_5.setTransform(8.2, 14.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#03205C").s().p("Ag4hEICJBOIiXA7QgahLAog+g");
    this.shape_6.setTransform(8.2, 14.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000066")
      .ss(0.5, 1, 1)
      .p("ABEBHQhKAag9goIBTiJg");
    this.shape_7.setTransform(14.4, 23.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#03205C")
      .s()
      .p("AhDA5IBTiJIA0CXQgeAKgcAAQgoAAglgYg");
    this.shape_8.setTransform(14.4, 23.4);

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
  p.nominalBounds = new cjs.Rectangle(-1, -1, 33.5, 33.6);

  (lib.mc_fan01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#02102D")
      .s()
      .p(
        "AgQARQgGgHgBgKQABgJAGgGQAIgIAIAAQAJAAAIAIQAGAGABAJQgBAKgGAHQgIAGgJAAQgIAAgIgGg",
      );
    this.shape.setTransform(15.8, 16);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000066")
      .ss(0.5, 1, 1)
      .p("ABKhDQAVBNgrA6IiEhag");
    this.shape_1.setTransform(23.4, 17.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#03205C").s().p("AhQgWICagtQAVBNgrA6g");
    this.shape_2.setTransform(23.4, 17.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000066")
      .ss(0.5, 1, 1)
      .p("AhChJQBNgVA4AuIhZCAg");
    this.shape_3.setTransform(18.3, 8.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#03205C").s().p("AhChJQBNgVA4AuIhZCAg");
    this.shape_4.setTransform(18.3, 8.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000066")
      .ss(0.5, 1, 1)
      .p("AhGBFQgahMAog9ICJBOg");
    this.shape_5.setTransform(8.2, 14.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#03205C").s().p("Ag4hEICJBOIiXA7QgahLAog+g");
    this.shape_6.setTransform(8.2, 14.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000066")
      .ss(0.5, 1, 1)
      .p("ABEBHQhKAag9goIBTiJg");
    this.shape_7.setTransform(14.4, 23.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#03205C")
      .s()
      .p("AhDA5IBTiJIA0CXQgeAKgcAAQgoAAglgYg");
    this.shape_8.setTransform(14.4, 23.4);

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
  p.nominalBounds = new cjs.Rectangle(-1, -1, 33.5, 33.6);

  (lib.mc_02 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#3DE4F7")
      .ss(0.5, 1, 1)
      .p("Ag/AuIByg9ABUguIinBd");
    this.shape.setTransform(18.6, 19.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#22EEFF")
      .ss(1, 1, 1)
      .p(
        "ACMhtQgBALgCAMQgEAPgIAPQgFALgGAKQgKANgLAPQgJAKgLAMQgPAPgRAQQgJAIgJAJQgMAIgLAHQgoAZgiAGQgKABgJAAQgJAAgIAAQgQgCgMgB",
      );
    this.shape_1.setTransform(19.7, 13);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#0ACDE2")
      .ss(0.5, 1, 1)
      .p(
        "AChh9QANACgDAVQgBAHgDAJQgGARgIAOIAAABQgFALgGAJQgJAQgKAOQgBAAAAAAQgHALgKALQAAABAAAAQgLANgLALIAAAAQgPAOgPAMQgBgBAAABQgLAJgLAIQhBAqg/gDQgNgBgNgCQgvgKAAgoQABgcAZglQABgBABgC",
      );
    this.shape_2.setTransform(17.2, 13.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#9CEDF3").s().p("Ah9BGIAAgCID7iMIgUAcIjLB1IgcgDg");
    this.shape_3.setTransform(18.4, 16.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#82E7EF")
      .s()
      .p(
        "AhlA7IDLh1IgUAYIimBdIgRAAgABSgiIggAfIhzA9IgTABgAAygDIgSAPIgYAPQgnAZgiAGgABSgiIAAAAg",
      );
    this.shape_4.setTransform(18.8, 18.1);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .lf(["#076D77", "#CCF5F7"], [0, 1], -84.1, 24.4, -73.6, 43.6)
      .s()
      .p(
        "Ah4BwQgZgFgKgOIgCgIQgHgXAYgmQAIgNAMgNQAvgxBIgdQAWgKAagIIAZgGIACAAQA8gPARAKIABAAIABABQADACABAEIABACIABABQAAAKgDAMQgDAPgIAQIgMAUIj8CMIgBgCg",
      );
    this.shape_5.setTransform(17.7, 12.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#22EEFF")
      .s()
      .p(
        "Ah4B3QgcgGgJgPIgFgKQgHgZAagpQAIgNALgOIABAAQAagcAigUQAcgSAigOQAVgJAbgIIAZgGIABAAQAigJAVgBQATgBAJAGIABABIABAAQAFAEABAHIAAACIgCABIgBAAIgCgBIgBgBQgBgEgDgDIgBAAIAAAAQgRgLg9APIgBAAIgZAHQgbAHgWAKQhIAdgvAxQgLANgIANQgYAnAGAWIADAIQAJAOAZAGIACABIAAACIgBACIgCAAg",
      );
    this.shape_6.setTransform(17.5, 11.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#3DE4F7")
      .s()
      .p(
        "AhiB9QgNgBgNgCQgvgKAAgoQABgcAZglIACgDIAUgXIABgBQAcgaAigTQgiAUgaAcIgBAAQgLAQgIALQgaApAHAZIAFAKQAJAPAcAGIACAAIABgCIAcADIARAAIATAAQAigGAngZIAYgQIASgQIAgggIAUgVIAVgcIAEACIgTAeIgBAAQgHALgKALIAAABIgWAYIAAAAQgPAOgPAMIgBAAIgWARQg9Aog6AAIgJgBgACVg5QAIgPAEgPQACgMABgLIABAAIACgBIAAgCQgBgHgFgEIAAgBQANACgDAVIgEAQQgGARgIAOg",
      );
    this.shape_7.setTransform(17.2, 13.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-1, -0.5, 36.5, 27.2);

  (lib.mc_01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#001C55")
      .ss(0.5, 1, 1)
      .p("Al1g7ILiCFAl/hJIL/CF");
    this.shape.setTransform(42.2, 52.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#031F4B").ss(1, 1, 1).p("AAAAAQAAAAAAAA");
    this.shape_1.setTransform(7.6, 42.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#002671")
      .ss(1, 1, 1)
      .p(
        "Ah8CDQgmgGgNgUQgDgEgBgFQgDgMADgPQAHgcAdgoIAAAAQADgCAEgFQAHgIAIgHQABAAABgBQAbgZAigUQAdgRAfgOQAYgKAbgIQANgDAMgCQAAgBAAAAQAigIAWgBQAPgCAMACQAAAAABAAIABAAQABAAABAAIABABQANADADALQgBAGAAAIIAAAAQgFAhgYAmIAAABQgJAOgLAOQgBABAAAAQgJAJgKAMQgBAAAAABIAAAAQgLALgMAMIAAAAQgNAOgPANQgFAFgFAEQgHAFgHAFIAAAAQg0AkgsAGQgTABgRAAIAAAAQgOAAgNgC",
      );
    this.shape_2.setTransform(20.1, 28.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#6B756A")
      .ss(0.6, 1, 1)
      .p("AAMgFQgFAHgHACQgDACgIgB");
    this.shape_3.setTransform(63.7, 33);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#2897A4")
      .ss(0.5, 1, 1)
      .p("AAPgJIgBALQgBAJgIgBQgSgBgBgGIAAgK");
    this.shape_4.setTransform(63.1, 31.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#4ABDCA")
      .ss(0.5, 1, 1)
      .p(
        "AAZgIIgCgQQAAgCgBgBQAAgBAAgCQgBgBgBgBIgpgHQgGgBgBAHIgCA2IgBAGQACAHAIABIArAFQAJABABgJIgFggg",
      );
    this.shape_5.setTransform(72.5, 29.3);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#0CE0DB")
      .ss(0.5, 1, 1)
      .p(
        "AAfgCIgBgNIgDgMQAAgCAAgBQgCgGgCAAIgygKQgGAAgBAHIgDBHQADAHAIABIA1AHQAKABAAgKIgGgm",
      );
    this.shape_6.setTransform(72.4, 29.3);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#031F4B")
      .ss(0.5, 1, 1)
      .p("AgPAGIAfgEIAAgIIgeAEg");
    this.shape_7.setTransform(56.6, 37);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#8AFAFF")
      .ss(0.5, 1, 1)
      .p(
        "AgfA+IgsgBQgqgCAUgOIA7hpQAEgGAJACIB0AVQANAEABAKIgBANIgCANIgEA6QgBAMgSgBIhigDg",
      );
    this.shape_8.setTransform(47, 25.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#022146")
      .ss(1, 1, 1)
      .p("AhiBRIDJAGQAXACABgQIAKhxQgCgOgPgEIiYgbQgMgDgGAHIhOCOQgaASA4ACg");
    this.shape_9.setTransform(46.9, 25.1);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#74E3E7")
      .ss(1, 1, 1)
      .p("AhyA2IBGh9QAFgHAKACICHAZQAOADABANIgJBlQAAANgUgBIi0gGQgwgCAWgQg");
    this.shape_10.setTransform(47.1, 25.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#AE7600")
      .ss(0.5, 1, 1)
      .p(
        "AAtiYQAIACAEAIQACADAAAEQABADABADQADAMADAOQAJAlACAtIAAAAQABAHABAHQAAANABARQAAAEAAAEQAAAUgBAVQgCAygHAXQgDANgDAEQgJAIhdgUQgOgDgRgEQgQgCAGgVQAAgBABgBQADgOAFgOQAXhYAGhZIAFg9IAAgEQAAgFADgDQADgFALACIA9ALQABAAABAAgAhLB3ICAAVQAJADAFggQADgUABgUQACgUAAgTQABgVgBgSQAAgHAAgGQgEg2gNg1QgDgUgIgF",
      );
    this.shape_11.setTransform(71, 38.6);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("#74E3E7")
      .ss(0.5, 1, 1)
      .p(
        "AgPAvIAFhcQgBgGAFABQASgBAFAdQABAJAAANIgEAsIAAABQgBAIgIgCQgPAAgFgEQgBgBgBgB",
      );
    this.shape_12.setTransform(63.2, 26.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f()
      .s("#6B756A")
      .ss(0.5, 1, 1)
      .p(
        "ABAg6QAFAHgEANIgMB6QgEAIgGABIj2gHQgagBACgNIBdicQAGgLAIACICyAgQAEABACACQAmgBgBAnQABADAAAEQACAJAAALAB7gOIgBgOQABgBAAAAQgBgNAQADIBBALQAPACACAPQACAEAFAgIACAJADRAkIAGAxQAAAMgLgCIg9gHQgKgBgDgJIAEhRQAAgJAIABIA5AKQAEAAABAJIADAOgABoAIIgDAuIgDASABKBUQgLgCgBgFIABgXIADhZ",
      );
    this.shape_13.setTransform(55, 25.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f()
      .s("#1A3555")
      .ss(0.5, 1, 1)
      .p("AgQgIQABgGAGABQAUAAAGAb");
    this.shape_14.setTransform(63.5, 21.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("#B6B9B5")
      .ss(0.5, 1, 1)
      .p(
        "AAVAAIAcAFIgBAEIgFAeAAVAAIgNgBIgXgFIABgJQAWgBAIgSIALACgAAQgiIgGgBQgMgCgJAMIACgNIATADAgsACQALgEASAAQALgBAMACAgvAPIADgNAgLgZIgDAKAgPgGIgbgFIgCANAAtAIQguASgugLAgwAWIABgH",
      );
    this.shape_15.setTransform(66.1, 4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f()
      .s("#D7B306")
      .ss(0.5, 1, 1)
      .p(
        "AATAKIAQgPIgWgEIgDgIIgGgSIgIAOIgFAGIgZAEIAPAOAARALIACAZIgTgOIgXAGIAEgZ",
      );
    this.shape_16.setTransform(111, 35.3);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f()
      .s("#000000")
      .ss(0.5, 1, 1)
      .p(
        "ABugWQABAAABAAABugWIAAAAABhgZIABADQAGAAAGAAAD+BOIABgBQAAAAgBAAADYBHIAAAAAj/hFIABgIAjZgYIAAAA",
      );
    this.shape_17.setTransform(87.3, 28.5);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("#5B605A")
      .ss(1, 1, 1)
      .p(
        "AITg2IhXgTIghgHIgBAAIgNgCIg3gMQhIgGgLg2QgRhCgegTQgJgGgKgCIgRgDABOEaQAFABAFABQACAAABAAQAGABAFABQAGAAAFABQAoAFAJgFIAhgQIASgNIATgPIBJgyIAfgXIATgNIAkgZIA7grQAcgdA8APIAjAEAggkfQACgBADABIAGABIA5ALIBdARIAcAEIAQADAglkgQg7gEhABPAiijTQhIAEhCARQgOAEgMADQhfAdhCAyQhBAygQA2QgKAjAPAdQAGAOANANQAEAJAFAJQAFAHAFAGQAJALAMAKQAuAlBYAaQAJADAKADQABAAAAAAAlaDUQAIADAIACQAGABAGACQABAAABAAQAEABAEABQBKAQBgAKQADABAFAAAiAD5IADAAQAFABAGAAQBwAUBCAKQAGABAFAB",
      );
    this.shape_18.setTransform(57.4, 34.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#333333")
      .s()
      .p(
        "ADRA7IgBgBIAAAAIAIgPIAGgPQgDATgIALIAAABIgBAAIgBAAgAACAZIgBgBIAGgQQADgKABgJQAAARgHASIgBABIgBAAgAjXgJIgBAAIAAgCQgEgLAAgMIgBgFQABgJADgJIABgBIgCAMIAAARQABAHAEALIAAABIAAAAIgBABIgBAAIAAAAg",
      );
    this.shape_19.setTransform(44, 56.7);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#002671").s().p("Al1g7IgKgOIL/CEIgTAPg");
    this.shape_20.setTransform(42.2, 52.6);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#C3A200")
      .s()
      .p("AA4A1IiAgUIgDgBIAIgdQBlgKAqguIgCAnIgFAnQgEAdgIAAIgBgBg");
    this.shape_21.setTransform(70.8, 47.2);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#BF8300")
      .s()
      .p(
        "AglA4IgfgHQgQgCAGgVIABgCIACABICAAVQAJADAFggIAEgmIACgnIAIgJIAAAIQAAAUgBAVQgCAwgHAXQgDANgDAEQgDACgJAAQgYAAhCgOg",
      );
    this.shape_22.setTransform(71, 48);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#C2CDE1")
      .s()
      .p("AgEAGIAAgCQAFgDAEgGIAAAFQgBAGgGAAIgCAAg");
    this.shape_23.setTransform(64.4, 33.1);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#001B4A")
      .s()
      .p(
        "AgGAOQgLgCgBgEIABgVIACACIAAALQABAFASABQAIABABgHIABgNIAAgBIAFAAIgDAQQgEAJgHACIgGACIgFgBg",
      );
    this.shape_24.setTransform(63.2, 32.1);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#3BF5F2")
      .s()
      .p(
        "AAcAvIg2gHQgIgBgDgHIADhHQABgHAGAAIAyAKQADAAABAGIABADIACAMIABANIAAACIAHAmQgBAJgHAAIgCAAgAgbghIgCA2IgBAHQACAGAIABIArAFQAJACAAgJIgEghIgCgHIgCgQIgBgDIAAgDIgCgCIgqgIIAAAAQgFAAgBAGg",
      );
    this.shape_25.setTransform(72.4, 29.3);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#FCF7F1")
      .s()
      .p("ABiAkIA6geIABAIIg7AdgAicAlICJhPIgBAOIh8BBg");
    this.shape_26.setTransform(59.5, 27.8);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#72CCD5")
      .s()
      .p(
        "ACQAqIgtgFQgIgBgCgGIA7gdIAFAiQAAAHgGAAIgDAAgAg0AbIhkgDIB7hBIgEA6QgBAKgPAAIgDAAg",
      );
    this.shape_27.setTransform(60.3, 29.1);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#042A6B").s().p("AgOgCIAegDIAAAHIgfAEg");
    this.shape_28.setTransform(56.6, 37);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#32BACA")
      .s()
      .p(
        "ABOBGQgUAAgBgHIAAgLQAFAEAQAAQAJABABgIIgBANQgBAIgHAAIgBAAgAijA5QgqgCAUgOIA7hpQAEgGAJABIB0AWQANADABALIgBAMIiHBPgACJABQABgEAFAAIArAGIADACIAAADIABADIACAQIg5Aeg",
      );
    this.shape_29.setTransform(55.8, 25.7);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#AFEFF1")
      .s()
      .p(
        "ABcBOIi0gGQgwgCAWgQIBGh9QAFgHAKACICHAZQAOADABANIgJBlQAAAMgRAAIgDAAgAgmg7Ig8BpQgTAOAqACIArABIAMAAIBjADQARABABgLIAFg6IABgOIABgMQgBgLgNgDIhzgWIgDAAQgHAAgDAFg",
      );
    this.shape_30.setTransform(47.1, 25.2);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#033067")
      .s()
      .p(
        "AjrCDIgBAAQgmgGgNgUQgDgEgBgFQgDgMADgPQAHgcAdgoIAAAAIAHgHQAHgIAIgHIgTAYIgCADQgZAlgBAcQgBAoAvAJQANADAOABQA+ADBDgrIAXgRIAAAAQAPgMAPgOIABABIAVgYIABgBQAHgMAIgKIABgBIATgdIALgVIAAAAQAIgPAGgRIAEgPQACgVgMgCIgBABIgBAAIgBgBQgJgGgSABQAPgCAMACIABAAIABAAIACAAIABABQANADADALIgBAOIAAAAQgFAhgYAmIAAABQgJAOgLAOIgBABIgTAVIAAABIAAAAIgWAXIAAAAQgNAOgPANIgKAJIgOAKIAAAAQg2AkgsAGIgkABIAAAAIgbgCgAEDAxIjLgGQg3gCAZgTIBPiNQAGgHALACICaAcQAQAEACANIgKBxQgCAPgTAAIgEAAgABwhtIhGB+QgWAQAwACIC2AFQAUABAAgNIAJhlQgBgMgOgEIiJgZIgEAAQgHAAgEAFg",
      );
    this.shape_31.setTransform(31.3, 28.9);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#CACCC7")
      .s()
      .p(
        "AAzAhIgGgaIgCgGQAAgDgCgDQgEgIgIgBIgCAAIg9gMQgLgCgDAFIgEgCIABgBQgBgNAQADIA/AMQAPABACAQIAHAjIACAJg",
      );
    this.shape_32.setTransform(72.6, 24.8);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#CBCBC3")
      .s()
      .p(
        "AAeA1Ig6gHQgKgBgDgIIAEhSQAAgIAIAAIA3AKQAEABABALIADANIgEACIgCgMIAAgDQgCgGgCAAIgygJQgGgBgCAHIgCBIQACAHAJABIA1AGQAJACABgKIgGgnIAAgBIAEgBIAGAvQAAAKgIAAIgEgBg",
      );
    this.shape_33.setTransform(72.4, 29.3);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#FBD800")
      .s()
      .p(
        "AgtgxIAEg9IABgEQAAgGADgDQADgFAKACIA9AMIACAAQAJABAEAIQACADAAAFIACAGIAGAaQAIAlADAqIAAABIABANIABAgIgHAJIAAgOIAAgbIAAgGIAAgHQgFg0gMg1QgDgTgJgFQAJAFADATQAMA1AFA0IAAAHIAAAGIAAAbIAAAOQgqAuhkAMQAXhXAGhZgAgdhkIgEBUQADAIAKABIA6AHQALAAABgJIgGgxIgCgPIgDgNQgBgLgEgBIg3gKIgBAAQgHAAAAAIg",
      );
    this.shape_34.setTransform(71.6, 34.8);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#D5FDFF")
      .s()
      .p("AADAzQgOAAgFgEIAFhcQgBgGAFABQASgBAFAdIABAWIgEAsIAAABQgBAGgGAAIgDAAg");
    this.shape_35.setTransform(63.3, 26.1);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#C5C7C4")
      .s()
      .p(
        "Ah6BXQgagBACgNIBdicQAGgLAIACICyAgQAEABACACQAFAHgEANIgMB6QgEAIgGABgAgyhRIhOCOQgaASA4ACIDJAGQAXACABgQIAKhxQgCgOgPgEIiYgbIgGgBQgIAAgEAFg",
      );
    this.shape_36.setTransform(46.9, 25.1);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#0D3B76")
      .s()
      .p(
        "AAKA0IAEgvIgBgUQgEgcgSAAQgFgBAAAHIgDAAIAAgJQABgGAGABQAUAAAGAdIABAHQACAJgBALIAAABIgDAug",
      );
    this.shape_37.setTransform(63.6, 25.4);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#707270")
      .s()
      .p(
        "AEVDzIgLgBQAFgXAPgFIBJANIghARQgEACgLAAQgNAAgVgDgAAwDPQAOgcAsADIBXAPQAoAQgFAYQhEgKhwgUgAiQCyIgIgCIgCAAIgMgCQgCgeAlgCQA1ABBNAXQAdARgEAWQhegLhKgQgAlUBjIB3AWQAXABAAARIgBAGQgCAIgFAKQhYgagugmgAhEBXQh/gKhSgQQhUgRgmgXQgPgcAKgkQAQg2BBgzQBCgyBfgcIAagIQARADAVgEIACAAQCAgXCSAfQB9AFBTBHQAsA4gpBpIgGAJIgCAEIgBgeIgBgOIAAAAQgDgtgIglIABAFIgBgJIgHgmQgDgPgOgCIhBgLQgQgDAAANIAAABIAAAOIgFA9QgFBZgYBYIgoAEgAmEgaQgDAQADAKQABAEADAFQANAUAmAFIABABIAbACIAAgBIAkAAQAsgHA2ghIAAgBIAOgJIAKgJQAPgOANgNIAAAAIAXgYIAAAAIABAAIATgXIABgBQALgOAJgPIAAAAQAYgmAFghIAAgBIABgOQgDgKgNgEIgBAAIgCgBIgBAAIgBAAQgMgBgPABQgWABgiAJIAAAAIgZAGQgbAIgYAJQghAOgdASQgiATgbAaIgCABQgIAGgHAJIgHAJIAAgBQgdApgHAbgACNgSIgCAKIAhgEIAAgKgAAEjaIhbCeQgCANAaABID3AHQAGgBADgIIAMh8QAFgNgGgHIADAAIAAAAIAAAAQAjAAAAAkIAAACIAAgCQAAgkgjAAIAAAAIAAAAIgDAAQgCgCgDgBIi1ggIgCgBQgHAAgFAKgADPiyIAAAJIgEBbIAAAXQABAFALACIANABQAKABABgJIAAgFIACgSIADguIAAgBQABgNgCgJIgBgHQgGgdgWAAIgCAAQgEAAgBAFg",
      );
    this.shape_38.setTransform(41, 38.6);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#A9B2AD")
      .s()
      .p("AgYAGIAZAFIAYAFQgNgCgLABQgQAAgMAFgAAHgTIAVADQgOgCgKAMg");
    this.shape_39.setTransform(64.3, 2.1);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#000000")
      .s()
      .p(
        "AgwAWIABgEIABgHQAuALAtgSIAEABIgFAeIgBAEgAAIgFIgWgFIACgJQAVgBAIgSIAKACIgFAhg",
      );
    this.shape_40.setTransform(66, 4.4);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#6B756A")
      .s()
      .p(
        "ACRA4IhUgNQg9gLgwgCIg9gFIgsgCIgegBQCtgCC6AogACtA3IAAgCQAHgSgCg3IAAAAIAAgBIACAAIABAAIAAABQAFAtgFAPIgGAPIgBABIgBgBgAicASIgBAAIAAgBIAAgCIABAAIABAAIBbgCQALABAIgKIAPgyIAAAAQACgEAAgDQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgBgBIAAgBIAAgBIACAAIADACIACADIgBAJQgGAagLAYIAAABQgIALgNACQgUABgWAAQgYAAgagCg",
      );
    this.shape_41.setTransform(56.9, 11.2);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#383838")
      .s()
      .p(
        "AgvAXIACgNQAMgFARgBQALAAAMABIANACIAcAGIgBAEIgDgBQgeALgbAAQgRAAgRgEgAgMgQQAKgMALACIAHABQgIARgWACg",
      );
    this.shape_42.setTransform(66.2, 3.1);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#3E433E")
      .s()
      .p(
        "ADFEeIgEAAIgKgCQAIgKADgTIgGAOIgIAPIgKgCQAFgYgogPIhXgQQgsgDgNAcIgLgBIgCAAQAHgTAAgTQgBAJgDAMIgGARIgIgBQAEgWgfgRQhMgWg2gBQglABADAeIgRgFIAAAAQgEgMgBgHIAAgQIACgNIgBABQgDAJgBAJIABAGQAAALAEAMIgCAAIgTgGQAFgKACgIIABgGQAAgQgWgCIh3gVQgMgKgJgLILhCIIgSANIhIgNQgPAEgFAYIgLgCgAmuBvIgIgSIBlAVQCpAjDJAbQBNANA+AEIAfACQBfAVAJgIQADgFADgNQAdgEAUgIQAngZAmgcIgcBGIhJAygACIjKQhJgLAOg6IABgCIAFgLIA7ALIBdARIAbAEQgMA2hHAAQgTAAgYgEgABCkeIAAABIACAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABACgCAFIAAAAIgQA0QgHAKgLgBIhZACQA+hPA6AEg",
      );
    this.shape_43.setTransform(46.8, 34);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#093F87")
      .s()
      .p(
        "AAnAtIARgQIgWgEIgEgJIApAIIgGAZIgagEgAgmAeQgdgfgDgvIBWATIAHAIIhNgRQgCAVANARIA6AMIgFAHIgXADIANAQIAAABQgWgFgQgEg",
      );
    this.shape_44.setTransform(108.9, 31.7);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#1270C7")
      .s()
      .p("AAXAXIgGgRIgKAOIg6gMQgNgRACgVIBNAQIAIAKQASASAWAQIAAABIgogIg");
    this.shape_45.setTransform(109.7, 31);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#F8D00E")
      .s()
      .p(
        "AAAAVIgWAIIADgaIAAAAIgPgPIAZgCIAFgHIAIgNIAFARIAEAJIAWADIgRAPIgBAAIAAABIABAZg",
      );
    this.shape_46.setTransform(111, 35.3);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics.f("#7A8B81").s().p("AADgYIAYgUIgiBMIgTAMg");
    this.shape_47.setTransform(93.8, 46.8);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#BF2300")
      .s()
      .p("AgeAAIAfgWIgcBEIggAXgAAagqIAigbIgjBNIghAag");
    this.shape_48.setTransform(94, 46.6);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#A0A398")
      .s()
      .p("AAHAOIgbhnIAZABIATBnIgYA4IgXATg");
    this.shape_49.setTransform(96.6, 35.1);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#F06200")
      .s()
      .p("AANgGIgehgIAUABIAdBnIggBNIgfAYg");
    this.shape_50.setTransform(94.1, 36.3);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#EE5D02")
      .s()
      .p("AACAYIgRhnIAMAAIAZBoIgLAcIggAbg");
    this.shape_51.setTransform(98.8, 34.2);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#03205C")
      .s()
      .p(
        "Ag7AbIALgbIgbhpIACAAIAgAHQADAvAdAgQAOAFAYAEIgDAXIAWgHIAUAOIgBgXIABAAIAaADIgCAOIgGAnIgigEQg6gPgcAdIg8Arg",
      );
    this.shape_52.setTransform(106, 36.8);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#899388")
      .s()
      .p(
        "ABBBOIgWgBQgbgDgagFQgpgOgHgWIgJgwQgOg3gKgJQAeATARBAQALA3BGAGIA3ALIAAAEIgbgCg",
      );
    this.shape_53.setTransform(87.9, 18.2);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#5B605A")
      .s()
      .p(
        "ACeDvQg+gFhNgMQjJgcipgiIhlgWQgNgMgGgOQAmAXBUARQBSAQB/AKIEBAHIAogEIgIAcIAAACQgHAVARACIAeAHIgfgCgAE0CjQACgVgBgUIAAgIIACgEIAGgJQAphpgsg4QhThHh9gFQiQgfiCAXIgCAAQgVAEgRgDQBCgRBIgEIAAABIABAAQAwAEAqgDQANgBAIgMIAAAAQALgaAGgaIABgKIgCgDIAFAAIAGACIgFAKIgBACQgNA7BJAKQBuATAQhEIAQADIAAAAQACA5gHASIAAACIABABIABgBIAGgPQAFgPgFguIARADQAKACAJAFQAKAJAOA3IAJAyQAHAWApAOQAcAFAbADIAgBdIguBwQgmAbgnAZQgUAIgdAFQAGgXACgygAhgifIAeACIAsACIA7AEQAyADA9AKIBUANIAfAFQi4gnimAAIgJAAg",
      );
    this.shape_54.setTransform(48.2, 29.5);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#217DE0")
      .s()
      .p(
        "AD3BNIoIhcQgMgDgJgDQgPgHgJgJIgGgGIgCgEIAEADQALAHATAHIAgALIADABIH8BaIBMAFgAD4AoIgSgCIABgFIASACQAfADAogBIABAEIgIACIgJAAQgeAAgagDgAi0giIAAgEIGPBGIgBAEgAj3gtIgTgGQgPgHgIgIIgFgHIgCgDIAEACQAKAHARAIQANAFASAFIACABIApAHIAAAGg",
      );
    this.shape_55.setTransform(41.7, 67.3);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#46AFE8")
      .s()
      .p(
        "AC+BPIADgTIABgGIABgEIAMg/IAMAAIgKA9IgBADIgBAFIgCAHIgDASgAjaAFIACgQIABgFIABgCIAAgCIACgGIAAgCIAGgUIAFgLQAFgLAIgKIADABIAIACIAAAAQgLANgHASIgGAVIgBABIgBAEIAAAEIgCAGIgDARg",
      );
    this.shape_56.setTransform(44.1, 65.5);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#19479F")
      .s()
      .p(
        "AD8BeIgFAAIoIheQgKgBgHgEQgRgGgKgMIgBAAIAAgBQgFgEgDgGIAAAAIgCgEIgBgBQgLgTAIADIATATQAdASAfAHIA/ALIAKAAIGOBIIANADIAWAFIBSACQADACgFAFQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgaACgnAAIgRAAgAk/ggIAGAGQAIAKAQAGQAIAEAMACIIIBdIBQAAIhLgGIn9hZIgCgBIghgLQgSgHgLgHIgEgDIACADgADqA4IABgHIASACQAeAEAjgBQgVAFgvAAgAixgQIACgHIGOBGIgCAHgAD+AvIgSgCIABgEIARADIBJAEIgCAAIgaABQgYAAgVgCgAivgbIABgEIAVAFIAAgBIABgEIAAgDIADgPIABgMIAAgHIgBgPIAAgBIgIgCIgDgBIAEgGIAJABQBKAQBdAMIAIABIABABIABAAIABgBIACABIALABIC1AfIAKACIABABIABAAIABgBIAAAAIAKABIAEABIAKACIgPAEIgMAAIgMA/gADdAmIALg6QhEgLhtgUIgPgCIgKAAQhEgKg6gKIgHgBIgWgFIgNgDIAAAQIAAAHIgBAMIgDAOIAAAEIgBAEIAuAJIgFAAgAj2gcIgRgGQgPgHgKgLIAAAAIgBgBQgEgFgDgFIAAgBIgCgDIgBgBQgKgTAHADIASATQAZARAfAGIArAIIgBAFIgpgIIgCAAQgSgFgNgGQgRgHgLgHIgDgDIACAEIAFAGQAIAJAOAGIAUAHIA3AKIgBAGg",
      );
    this.shape_57.setTransform(41.2, 66.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  p.nominalBounds = new cjs.Rectangle(-1, -1, 117.1, 76.6);

  (lib.fan = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#8A0000")
      .s()
      .p("AAAAFQgFgBABgEQABgFADABIABAAQAFABgBADQgBAFgEAAIAAAAg");
    this.shape.setTransform(15.4, 3.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#840701")
      .s()
      .p("AjDgbIADgNICYAbQgGAAgBAFQgBAGAGABQAFABABgGQACgFgGgCIDsApIgCANg");
    this.shape_1.setTransform(19.7, 4.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#A9B2AD").s().p("AgMAAIABgHIAaAFQgSACgLAIg");
    this.shape_2.setTransform(81.3, 14.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#808080").s().p("AjLgdIADgNIGUBIIgBAJIgBAEg");
    this.shape_3.setTransform(59.5, 11.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#383838")
      .s()
      .p("AgRAIIAAgCIABgEQALgGASgEIAFABIgDAOQgIACgJAAIgPgBg");
    this.shape_4.setTransform(81.5, 15);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AgQAAIABgEQASACAOgDIgCALg");
    this.shape_5.setTransform(81.4, 16.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#A9B2AD").s().p("AgLAAIABgHIAYAGQgRABgKAIg");
    this.shape_6.setTransform(81.8, 14.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#808080").s().p("AjBgiIACgNIGBBSIgCAJIgBAEg");
    this.shape_7.setTransform(61, 10.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#000000").s().p("AgPAAIABgFQAQACAOgCIgCALg");
    this.shape_8.setTransform(81.8, 16.5);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#383838")
      .s()
      .p("AgQAHIAAgCIABgEQAKgGARgDIAFABIgDAOIgOACIgQgCg");
    this.shape_9.setTransform(82, 15.1);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#840701")
      .s()
      .p("Ai5ggIACgNICRAfQgGAAAAAEQgCAGAGACQAGABABgGQABgFgGgCIDgAvIgCANg");
    this.shape_10.setTransform(23.1, 2.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape, p: { x: 15.4, y: 3.3 } },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape, p: { x: 19.1, y: 1.7 } },
            ],
          },
          1,
        )
        .wait(1),
    );

    // Layer 1
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#383838").s().p("AgJgGIAVADQgJAHgOAEg");
    this.shape_11.setTransform(84.4, 15);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p("AgSAJIACgLQAQgDAIgJIAKACIgBAJIgCAMIgBAGg");
    this.shape_12.setTransform(84.8, 16.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#808080").s().p("AjMgcIADgOIGWBHIgDAPg");
    this.shape_13.setTransform(106.8, 20.1);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#961004").s().p("AjBgaIADgOIGABDIgDAPg");
    this.shape_14.setTransform(146.5, 27.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#383838").s().p("AgJgHIAVAFQgJAHgOACg");
    this.shape_15.setTransform(84.7, 15.1);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p("AgRAIIACgLQAPgCAIgJIAKACIgCAIIgCANIgCAGg");
    this.shape_16.setTransform(85.1, 16.3);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#808080").s().p("AjGggIADgPIGKBQIgDAPg");
    this.shape_17.setTransform(106.4, 20.6);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#961004").s().p("Ai7geIACgPIF1BMIgCAPg");
    this.shape_18.setTransform(145, 28.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
            ],
          },
          1,
        )
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 166, 31.4);

  (lib.CoconutTree2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#AA8E78")
      .s()
      .p(
        "AhpKnQBUjjAlkPIABgNQAKhAAGhDIABgQQAPibABirIAAhEQAKAKAKAHIgVgmIgBgZIAAABQAChkAHjgIARAAQgEAoARAnQgEggAXgWIgEA3IgICqIgBBKQgBAiABAcIAAAPIAAAIIAAAbIAAABQABCrgKCdIgCASQgDA5gGA3IgBANQgBAEAAAEQgcEbhAD0IgTgFQgWgJgQAOQgPAMgIAeQAHgqgLgWg",
      );
    this.shape.setTransform(43.4, -85.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#86B241")
      .s()
      .p(
        "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",
      );
    this.shape_1.setTransform(49.6, -178.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#017D3F").s().p("AAAAAIABAAIgBAAIAAAAg");
    this.shape_2.setTransform(32.9, -29);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#708A33")
      .s()
      .p(
        "AgkCIQgbANgkgNQhPAGg1gUQgxAEgVgTQgUgSAjgOQgCgKAJgFQAGAZAnADQAmAYAqgYQA+AhAqggQA4AjAkgiQAmAYAqgTQA2AMAKgaQBKgTgygjQgLgVghgGQghgHgoAJQgGgFgRABQAFgOgVgKQAPgMgEgMQgEgOgYgFQAMgagjgMQARgOgNgWIACAAQAaAMADAdQAWgHANAPQANAPgOAPQA7AFgeAjQgMAIAHACQAGACAMgDQAfggAlAdQBxgOgWA7QAsARghAbQAUAVgLALQgMAOg3AAQgPANgbAFQgeAGgigIQgcAUg3gSQgNAJgXAAQgTAAgdgIg",
      );
    this.shape_3.setTransform(31, -14.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#9DAE50")
      .s()
      .p(
        "AgZB0QgqAhg+ghQgqAYgmgYQgngDgGgaQAGgDAKgBQgIgiA8ABQgigZAXgYQgTgNAGgOQAFgNAagEQgGgNAKgKQALgKAZgCQgLgkAZgNQAYgNAgARIAHgEQAPgIAPACQATACAGAPQAagLAXAKIABACQANAWgRAOQAjAMgMAaQAYAFAEANQAEANgPAKQAVAJgFAOQARAAAGAHQAogLAhAHQAhAIALAVQAyAihKAUQgKAZg2gLQgqATgmgYQgRAQgXAAQgYAAgcgSg",
      );
    this.shape_4.setTransform(28.5, -17.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#AA8E78")
      .s()
      .p(
        "ApGGMQDbhYDbiVIAMgIQA2gjA1goIANgLQB8hcCAhyIAygtQAAAOACAMIAOgpQAHgGAJgLIABABQBLhDCsiQIALANQghAXgSAnQAWgZAfADIgrAiQhJA6g6AyQgfAZgZAYQgaAVgVAUIgLAKQgCAEgDABIgUATIgBABQh/Bxh9BjQgHAFgHAGIhWBEIgLAIQgDABgEAEQi1CGizBjg",
      );
    this.shape_5.setTransform(89.3, -45.7);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#86B241")
      .s()
      .p(
        "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",
      );
    this.shape_6.setTransform(158.1, -96.3);

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
  p.nominalBounds = new cjs.Rectangle(-8.6, -236.3, 227.2, 236.4);

  (lib.coconutTree1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#017D3F").s().p("AAAAAIABAAIgBAAg");
    this.shape.setTransform(-5.6, -31.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#708A33")
      .s()
      .p(
        "AguCSQg3AUgbgVQgiAIgdgGQgagGgQgOQg1AAgNgPQgKgMATgXQgggdAsgSQgWhBBvAPQAlggAeAjQALAEAGgCQAHgDgLgIQgegmA6gFQgOgQANgRQANgQAWAHQADggAZgNIACABQgNAYARAPQgiANALAcQgXAGgEAOQgEAOAPAMQgVALAFAPQgQAAgGAFQgogKghAIQggAHgKAWQgyAmBJAVQAKAcA1gNQAqAVAlgaQAjAlA3gnQApAjA+gjQApAaAlgaQAngDAGgcQAJAFgCAMQAiAOgUAUQgUAUgxgEQgzAWhPgHQgjAOgagOQgdAKgTAAQgWAAgNgLg",
      );
    this.shape_1.setTransform(-3.7, -15.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#9DAE50")
      .s()
      .p(
        "AhBCAQglAagpgVQg2ANgJgcQhJgVAxgmQAKgWAhgIQAggJAoAMQAGgHAQAAQgFgPAWgKQgQgLAEgOQAFgOAXgGQgLgcAhgNQgQgPANgYIAAgCQAYgLAZANQAFgRATgDQAQgBAPAJIAGAEQAfgTAXAPQAaAOgLAmQAYACALAMQAKAKgGAOQAaAFAFAOQAGAPgTAOQAXAbgiAbQA7gBgHAkQAKABAFAEQgFAcgnADQgmAagpgaQg9AjgqgjQgbAUgXAAQgXAAgRgSg",
      );
    this.shape_2.setTransform(-1.2, -18.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#AA8E78")
      .s()
      .p(
        "ACVGCQgLgFgLAIIgKAGQhKiAg4ibIgCgEIgDgIIgWg9IgDgKQgehWgZhhIgBAAIgEgQIgBgEIgCgIIgJgjIAZgFIADALIgGAZQAFgFAEgHIAKAmQAaBgAgBUIADAJQANAlAOAiIADAIQA+CSBSB0QgDANALAXQgKgQgKgEgAh/kDIgeheIgLgfQAQAJADATQAEgZgJgVIAKgDQAmB9APA4IgYAHIgMgqg",
      );
    this.shape_3.setTransform(-25.5, -52.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#708A33").s().p("AALgCIABACIgXADg");
    this.shape_4.setTransform(-35.9, -74.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#86B241")
      .s()
      .p(
        "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",
      );
    this.shape_5.setTransform(-43.2, -105.1);

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
  p.nominalBounds = new cjs.Rectangle(-75.7, -139.4, 102.6, 139.5);

  (lib.CoconutTree = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#86B241")
      .s()
      .p(
        "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",
      );
    this.shape.setTransform(-59.4, -159.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#AA8E78")
      .s()
      .p(
        "AEAKWQgTgJgTAOIgRAKQh/jahikKIgDgIIgFgNQgTgzgSg1IgHgRQgziWgrimIAAgBIgHgaIgCgHIgEgOQgGgcgKghIgUhHQgXhJgdhZIgSg0QAcAPAFAgQAGgqgPglIAQgFQBCDXAbBgIAAgBIAFAYIgKAqQAIgJAHgMIASBBQAtClA3CSIAFAQQAXA+AYA7IAFANQBrD8CMDGQgEAWASAoQgQgbgSgIg",
      );
    this.shape_1.setTransform(-29, -69.7);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-115.2, -218.8, 115.2, 218.8);

  (lib.beachhouse = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#887F3C")
      .s()
      .p(
        "ACkBrIgJglIkwAAIgQAnQgiATAFgbIBkjeQARgHAEARIgMAfIDGAAIgIgdQAFgNAVANIABABIA+DXQAGARgPAAQgQAAgFgRgAiPA2IElAAIgPg2Ij/AAgAhugXICXABIAUAAIAEAAIADAAIALAAIAAABIAyAAIgKglIjOAAIgHgDg",
      );
    this.shape.setTransform(63.8, 131);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer 1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#8C782F")
      .s()
      .p("AgOBmIgBgBIAAhKIAAgcIAAheIAggKIAADPQgJAEgIAAQgHAAgHgEg");
    this.shape_1.setTransform(105.5, 128.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#625119")
      .s()
      .p("AgGBZIgIhXIAWAWIAHAAIAABLQgVgDAAgHgAAKgEIgYgdIAAg3IAdgKIAABeg");
    this.shape_2.setTransform(102.2, 128.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#908545")
      .s()
      .p("AgRBtIAAjQIAjgLIgSDSQgFALgGAAQgDAAgDgCg");
    this.shape_3.setTransform(109, 127.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#66561B").s().p("AhHgSICXgSIgKAzIgMADIiKATg");
    this.shape_4.setTransform(108.7, 96.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#8B752C")
      .s()
      .p(
        "AhtgSIgNADIgCgEQgGgIAEgJICOghIALgEIAigHIBWgVQANAHgFARIgZAGIgqBgIgdAiIgaglIgHAUIguAoIgng6Ig5BKIgUACIBHhVIgagkIguB5IgTACgAgzAOIAiAyIArgzIgjg0gABkhAIgwAKIgeAGIgRAFIANAVIASAZIAVAhIAxhmgAhQgYIAXAdIAlgrg",
      );
    this.shape_5.setTransform(112.9, 105.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#86480B").s().p("AAyCIIimAAIACkPIDmAAIAAEPg");
    this.shape_6.setTransform(66.4, 101.3);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#937E2D")
      .s()
      .p(
        "AAfARIAngsIBQgBIAHAKIg1AlIgBgCQggAYgEgYQgQAMgJAAQgJAAgCgMgAicAPIABgBIAfgoIBCAAIAcgBIAAAFIgPAlIgBgCQghAZgGgZIAAABQgdAWgFgTIgBgEQgPAMgIABIgCAAQgJAAgCgLgAgtARIAAgCIAOgDIgEAOQgHgBgDgIg",
      );
    this.shape_7.setTransform(77.3, 118.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#6C6129")
      .s()
      .p(
        "Ag4BbIAAi1IAgAHIAAAoIAeghIgNgDIAAgGQAIABAQgLQADAZAggZIABADQABAFADACIhRBRIAABYQgLAMgKAAQgGAAgFgFg",
      );
    this.shape_8.setTransform(38.9, 129.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#9F9244")
      .s()
      .p(
        "AmSC/QgZgBAAgMIgNjBIiWgyIAAgdIAZAAIAUAbIAVgwIAiAqIAUgFIAWADIAWgiIAmAtIAfAFIANAuIAPgOIgKgdIAsAIIAQACIAlgBIBXAAIClAAIAAAJIhAAAIgfApIgBgBQggAYgDgYQgPAKgIABIAGgNQgEgQgRAHIgJASQgQAGgEgPIAAAAIgDABQgcAUgFgVIAAAAQgXAQgIgJQgDgCgBgEIgBgBQggAXgDgXQgQAJgKgCIAAAGIgRgDIgggHIAAC3QgJAJgKAAQgGAAgHgEgAEJAJQgSgCgHgDQgEgDgBgCQgBgFACgEICqgsICdgoIgBgFIAZgGQAIAJgIANIi2A1IglALIgiAKIgeAJIgkAJIgDAAgAllg7gAmdiBIAZgmIAfBsgAnWhOIgKgpIgKgoIgIgjIA9BIIghAsgAnIi4IA2ANIgVAdg",
      );
    this.shape_9.setTransform(70.3, 119.8);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#978730")
      .s()
      .p(
        "ACSCIIgkAAIABgkIByAAIgEAkgABvBYIABgXIB0AAIgCAXgAj0A3IgEgaIBNgBIgBAbgABzgfIAAgdIB+ABIgDAcgAB0hLIACg8ICDACIgHA7g",
      );
    this.shape_10.setTransform(69.7, 101.3);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#9E8D3B")
      .s()
      .p(
        "AgTB9IgGguIBFAAIgBAugAgiAAIgCgQIBRAAIAAAQgAgmglIAAgNIBUAAIAAANgAgshaIBbAAIAAAUIhZABgAgthpIgCgTIBgAAIgBATg",
      );
    this.shape_11.setTransform(47.8, 100.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#B09E48")
      .s()
      .p("AAECdIgNiIIATgBIARCJgAgaidIAVAEIATCaIgZACg");
    this.shape_12.setTransform(41.5, 97.4);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#907F37")
      .s()
      .p(
        "ABbDQIgPguIAgAEIACABIAAgBIgCAAIgIg7IgtgDIgCgGIAUgLIiRgkIg+j3IANgTIAAAcIAKgJIAHAZIAMAmIAtAEIACASIgrgEIAEARIApADIACAUIglgDIAGAXIAjAEIADAaIgfgDIAEAUICVAOIgBgQIAeABIASDhgAguAsICNAXIgHgcIiNgUgABWghIgBgSIAcAAIABAUgABRhxIAagBIACAdIgaABg",
      );
    this.shape_13.setTransform(27.1, 93.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#789871")
      .s()
      .p("AFdgnIB1gMIgNBfIhtANgAnDAyIgBgEIgDgaIgEgWIgCgUIgCgQIgCgSIB0AJIAABhg");
    this.shape_14.setTransform(68.9, 86);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#8A8545")
      .s()
      .p(
        "Ah8DMIAuh7IAaAmIhHBVgAgmB2IAog4IAlA3IgrAzgAAxBrIBAhFIAGgCIgxBngAAxBrIgSgbIAEgaIAegGIgQA7gAAzgWIAkifIAAgJIACgIIATAPIAAgUIAQAHIABAAIgzDaIgiAHg",
      );
    this.shape_15.setTransform(111.6, 95);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#AC9C51")
      .s()
      .p("AgbCkIAPiPIASgBIgKCTIgXADgAALipIARAAIgUCrIgVACg");
    this.shape_16.setTransform(95.7, 97.8);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#796C28")
      .s()
      .p(
        "AAHEXIgWgXIhThVQgoAXgHgVIA1gmIgGgKIhRAAIAAgIIBLAAIALAAIAXgEIAMgBIAAgCIAjlsIAPAHIAAgPIAVAJIAJgUIASAQIAAgQIAWAQIAAgVIAXATIAAgTIATAOIAAgLIAaAUIAAgXIAIAFIADgFIAnAOIgkCgIiYASIgIA5ICJgTIiNAiQgEAIAGAHIACADIANgCIgvB5IATgCIgBACIACgCIAUgCIA3hJIAnA5IACAHIioAsQgCAEAAAFQABADAEADQAIAEASABIAmAuIAYAdIAFAAIAAAegAAPjTIgGBiIBugNIANhhgAAXgDIA9gNIgmArgABugWIASgEIgEAZg",
      );
    this.shape_17.setTransform(102.3, 103.2);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#705E1C")
      .s()
      .p(
        "AgjCaIABgMIACgXIAKhhIAAgBIADgaIABgPIAHg7IADggIADgeIAAgMIAEghIAXAUIAAgXIASAIIgjFsIAAACIgLABIALiTIgTABIgOCPIAAAHIgLAAgAgPAXIAWgCIATirIgRAAg",
      );
    this.shape_18.setTransform(95.9, 95.9);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#827431")
      .s()
      .p(
        "ABoDvIgFgDIAAgBQgNgNgMANIgOACIAPgmIAAgGIgcABIAAgJIBDAAIAAkPIjmAAIgCEPIhXAAIgCgVIBAAAIABgvIhGAAIgBgNIBHAAIABgbIhMABIgEgpIBRAAIAAgRIhTAAIgDgUIBXAAIAAgMIhXABIgDgUIBaAAIAAgUIhcAAIgCgPIBfAAIABgUIhiAAIgFgnIBXAAIAAAFIAAAVIE0AAIAAgRIB/AAIgDAgIiCgCIgCA8IB+ACIgBAOIh+gBIAAAcIB7AAIAAAAIgKBhIh0AAIgBAYIBzAAIgCALIhxAAIgBAkIAkAAIAAAIIgnAuQgQAMgJAAQgIAAgBgMgAG5CsIAwgoIAHgUIAaAlIAdgiIAwAAIAAASIABAFIidAogAlfCoIgmgtIgWAiIgWgDIAhgtIg9hHIAIAiIgRAdIARAjIAKgXIAKApIgUAFIgigqIgVAwIgUgbIguh8IgZgFIAAgRICFAcICSAkIgUALIgLgDIAAABIgZAmIA4BGgAn5B/IAKgYIghgmgAmCBaIAVgdIg2gNgAngBWIATgwIhMgQgAmxCagAk9CCIgUg6IAtADIAIA8gAm5AMIgHgWICPARIAHAcgAnHgnIgFgVIAgAEIAAAEIBmAAIAAhkIh0gIIgtgFIgMglIBxAQIAhAEIgMgmIgGgIIAPgOIAAANIASgOIAAAUIATgRIAMANQAPgKAKgNIALAVIAJgLIAAANIACAIIgSAwIAAgfIgaASIAAgZIgdAYIgBAGIAuAHIACAaIgZACIABAcIAaAAIAEAiIgcgBIABASIAcACIADAXIgegBIABASgAnThWIgGgYIAmAEIADAYgAnfiCIgDgQIAqAEIADAQgACYieIAAgKIAAgRIAZANIAAgUIATAPIAAgSIAYARIAAgVIAXAWIAAgPIARASIAAgXIANATIAIgTIAIAGIgDAhgAj0igIAAgMIAXguIAAAgIALgNIAAARIAPgRIAKANIALgTIAAAeIAAAPg",
      );
    this.shape_19.setTransform(66.6, 96.4);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#6B571C")
      .s()
      .p("ACGAQIAAgEIk0AAIAAgFIhXAAIgDgWIDFABIATAAIAHAAIAdABIACAAIETABIgEAcg");
    this.shape_20.setTransform(68.7, 83);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#7D5B1C")
      .s()
      .p(
        "AAXC+IgQgzIAcgjIAAAfIAfg4IAAA9IAXhAQAHAoAKANQAGgoAOgOIAAAuIASguIAAAXIAIgUIAPAUIAAgPIALAQIAIgMIAHAUIARgQIAAALIAJgKIANASIAHgsIAKAZIAEgIIAZAXIAAgmIASAiIAAgUIARAQIALgZIAAAZIATgWIAAAmIAWgkIAAAOIAIgYIAMAZIAAgUIALAPIAAgZIAPAVIAAgZIAVAZIAAgVIASASIAAgXIAVAhIAAgcIAYAUIAAgJIATASIAAgYIAXAXIAAgVIAVARIAAgbIAtAbIAAgOIAWAQIAAgVIAYAfIAAAXIgZgLIAAAUIgYgTIAAATIgJgDIgBAAIgQgHIAAAUIgTgPIgCAHIAAAJIgngOIgDAFIgIgFIAAAXIgagUIAAALIgTgOIAAATIgWgTIAAAVIgXgQIAAAPIgSgPIgJAUIgXgJIAAAPIgOgHIgTgIIAAAXIgZgUIgIgGIgIATIgNgTIAAAWIgRgSIAAAPIgXgVIAAAVIgYgSIAAASIgTgPIAAAVIgZgOIAAARIgdgcIAAAaIgPgWIAAAjIgTgcIgUAOIgRgMIAAASIgQgNIAAALIgRgSIgKAmgAgLC9IgTgiIAAAiIgpg3IAAA3IgUg6IgPAyIgOgyIgRAwIAAgyIgWAiIAAgeIgLATIgJgNIgPAQIAAgQIgMAMIAAgfIgWAuIAAgZIgQAPIAAglIgCgJIAXgRIAAAOIAigZIAAAfIAXgTIAAARIAMgOIAKAOIATgcIAAAWIAQgTIAAAdIATgSIAKAOIAMgUIAIAVIAPgTIAAATIATgOIANAlIAUg5IAAA9IgLAygAnjCHIgHgZIAYgXIgJAaIAagQIAAAPIAbgUIAAASIAUgXIAAAUIAcgQIAAATIATgRIAAARIAFAIIgUAbIAAAGgAAHCLgApRBBIgPAaIAAghIgZAvIAAgjIgQANQANgrAdgeIBbhIIAEAFQgQAQgQASIABAIIgBAAQgKACgHgBIg7A8IAZAAIAAAJIAZAAIgIARIALgEIACAGIgOAWIAAgQIgOAdgAoEg/QAvgxA2glQAegTAagVIAGAGIhAA3QgwAdguAqg",
      );
    this.shape_21.setTransform(65, 62.4);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#674610")
      .s()
      .p(
        "AJABwIgZgfIAAgTIAQAKIAAAEIAQAZIAIAbgAE2A1IAIgCIgIAXgAFwgIIANAMIgGAFgApJgrIgFgGIAAgBIAGAHgAB/h/IAUAAIAAAMg",
      );
    this.shape_22.setTransform(72.4, 61.1);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#7D5821")
      .s()
      .p(
        "AJkBzIAAAhIgSgZIgQgZIAAgFQgEgLgFgLQgPgggWgVIgTgRIAJApIgrgnIAHAVIgfgdIAOArIgTgOIAIAiIgUgiIAAAgIgLgNIgKARIATAqIAAgPIAbANIAAgRIASANIAAgVQARAEAYAVIAAgVQAPAWAIgJIARAKIAAAWIgVgRIAAAPIgtgbIAAAbIgVgRIAAAVIgXgYIAAAZIgTgSIAAAJIgZgUIAAAbIgUghIADgHIgbgOIAAAVIgjgUIgIACIgnhQIAAgKIAQAAIAAgPIAYAPIAQAAQAWAfAaAPIAGgEIAOAOIgIgWIAQAIIgMgaIARAAQgHgLAHgOIgOAAQgbgKgYgOIgCgBQgTgLgRgMIhpAAIAAAJIgugCIAAgGIgNgPQgIgJgGgKIAUAMIAAgMIAaASIgJgUIATAOIgIgjQAGAFAIADIAAgZIARAWIAAgWIAuAwIgJgYIASAAIAJAGIgMgbIATAWQASAUARAJIgJghQAPAhAeAgIAAgWQAUAbAUADIgQgbIA3AqIgLgVQAWANAWAaIAKALIgNgiIAcAHIBSBGQgBAFABAFQAAAHAGAKIAEAIIAIAPQAMAVAFABQAIABgBgeIAKBMgAozB+IAEgEQAMgGAHgGQAGgFACgEQAIgQARgLQAMgTARgNQARgHAJgHQAJgGAEgHQAKgPAVgIQADgUAKgMQAGgLAPgCQgMgjAiglQAMgOATgOIgRAlIAigbIAAAhIAigjIgRApIApgWIgoA8Qg/AOANAJQAEACALACQgGAdgTAKIADgcQgGAJgJAKQgOAMgSAMQgWAOgcAKQAcADAcgSIgKAVIAcgcIgOAkIAfgpIAAAaIAJgdIAAAhIAMgJIAAAdIASgLQACApgVAeQgKANgPAKIgMgNIgTASIAAgVIgSAOIAAgMIgPANIAAgQIgTAQIAAgTIgbARIAAgUIgUAXIAAgSIgbATIAAgOIgaAPIAJgZIgZAXIgKAIgACcB/IgJAKIAAgLIgRAQIgHgUQADghgDgVQgCgUgGgKIgohGQALAHANAOIgPgeIAdAWIAAgSQAOABARAXIAAgRQAIgJAOAJQgFgRgMgEQAOgGALAGQAIAFAEAGQALALABASQAAAVAWAFQAMAJACASIAGAVQAGAegMAYIAAAUIgSgjIAAAnIgZgYIgFAIIgKgYIgGArgACHBCIABAIQASgggcgTQAEARAFAagAprBzIgIAJIAAgPIgCgHIAYgKIgBAVIgNAOgAoQAeQgPgGgOAGIAAgMIgMAAIAAgPIAagJIAAAMIAPgNIAAAKQAOgBAOgKIALgPIAJgOQAQgOAYgDIAOgCIAAABQgjANgTAZQgGAHgFAKQgLAVgVAPg",
      );
    this.shape_23.setTransform(71.3, 59);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#9C8B3A")
      .s()
      .p(
        "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",
      );
    this.shape_24.setTransform(68.1, 59.1);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#927525")
      .s()
      .p(
        "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",
      );
    this.shape_25.setTransform(61.4, 36);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 134.3, 143.4);

  (lib.Symbol3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AgOEOIAAoaIAAgBIAdAAIAAABIAAIag");
    this.shape.setTransform(8.4, -2.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgOEOIAAoaIAAgBIAdAAIAAABIAAIag");
    this.shape_1.setTransform(-238, -2.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#0F204B")
      .s()
      .p(
        "ASFGtIAAioIAAoaIAAiXMAptAAAQB8AAAAB9IAAJfQAAB9h8AAgAwBGtIkYAAIAAioIAAAAIAAoaIAAgBIAAiWIEYAAMAhnAAAIAACXIAAIaIAACogA4qGtMgjHAAAQh9AAAAh9IAApfQAAh9B9AAMAjHAAAIDyAAIAACWIAAABIAAIaIAAAAIAACog",
      );
    this.shape_2.setTransform(-105.8, -1.5);

    this.ikNode_1 = new lib.Symbol2();
    this.ikNode_1.setTransform(128.8, -2.3, 1.25, 1.25, 0, 0, 0, 512.6, 21.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("ATAENIAAoaIAfAAIAAIagAzeENIAAoaIAfAAIAAIag");
    this.shape_3.setTransform(-114.8, -2.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.ikNode_1 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-512, -44.5, 1024, 85.9);

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.HeliPad();
    this.instance.setTransform(420.6, -115.3, 0.768, 0.768);

    this.instance_1 = new lib.HeliPad();
    this.instance_1.setTransform(-458.7, -115.3, 0.768, 0.768);

    this.instance_2 = new lib.CoconutTree();
    this.instance_2.setTransform(-87.7, 186.8, 0.81, 0.81);

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#017D3F").s().p("AAAAAIABAAIgBABg");
    this.shape.setTransform(-84.8, 156.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#9DAE50")
      .s()
      .p(
        "AhbEhQgzA7g6guQhKAcgNg/QhmgvBFhVQAOgzAtgSQAugTA3AbQAIgRAXABQgHgiAdgYQgVgbAFgeQAHghAggNQgQg/AwgeQgYghASg3IABgEQAggZAkAcQAIgmAagFQAVgDAVATIAJAKQArgqAhAgQAiAggPBXQAiAFAPAZQAPAYgJAfQAkALAHAhQAIAigaAhQAfA8guA+QBSgDgLBSQAOACAIAJQgIA/g2AHQg0A7g5g7QhVBQg6hPQgmAsghAAQgfAAgYgpg",
      );
    this.shape_1.setTransform(-78.7, 185.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#708A33")
      .s()
      .p(
        "AhBFLQhMAsglgvQgvASgqgOQgkgMgVghQhKABgSgiQgOgcAbgyQgthCA9gqQgeiVCZAiQA0hHApBPQARAHAIgFQAJgFgPgSQgqhWBQgMQgTglATgkQASglAdAQQAFhIAjgeIADACQgSA3AYAhQgwAeAQA/QggANgHAhQgFAeAVAdQgdAYAHAiQgXgBgIAPQg3gZguATQgtAQgOAzQhFBVBmAvQANA/BKgcQA6AuAzg7QAxBTBNhWQA6BPBVhQQA5A7A0g7QA2gHAIg/QANAMgDAaQAvAigbAtQgdAthDgKQhIAxhtgOQgwAfglgfQgoAVgbAAQgeAAgTgYg",
      );
    this.shape_2.setTransform(-82.1, 192.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#5F6B25")
      .s()
      .p(
        "AgUDtQhOgDgXgZQgnABACgjQg8gkAogmQgmhABEgHQAHg0AvAmQAwgaAIAnQAkgcAVAiIAWgFQgWgRAHgjQg1gbAfg2QgqgMAgglQgognAxgRQghhTBbAkQATglAdAsQg5AJANAuQgXATALAsQgIAtAlAGQAJAtAmAAQgHA2BDgCIAGAVQgugJgMAfQhGgJgLAyQhLABAWBEQgZAjAoBDQgWgOgQgWg",
      );
    this.shape_3.setTransform(-61.6, 188.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#91A439")
      .s()
      .p(
        "AgXFsQhhAkgogtQhaAmgqgvQg3APgwgPQgNgEgLgGQgrhDAcgjQgZhEBNgBQAMgyBGAJQALgfAuAJIgGgVQhDACAIg4QgmAAgKgrQglgGAIgtQgLgsAYgTQgNguA5gJQACAGAEAGQAagbAXAuQATASAKgMQAJgMgGgZQgagMATgkQAEgNgJgHQgPgVALgSQAKgSAcgDQgIgfARgLQASgLAYAUQAigxAfApQAUgjAVALQAVAMgEAwQAXgPAOAOQANAPgIAcQAggGAFATQAFATgTAWQAAAYgTACQAVAtg8AYQALALgFANQAQgPAQAUQAxg6AYA9QAzgUABA7QAogIgCAzQAVADAEASQAEAQgOAVQAVAPgKAZQANgSASAJQAQgxAkARQAWgkAUACQASADAFAqQAdgLAPANQAPALgIAcQATAEADAPQAEAPgOANQBQAXg6A5QAQAtgrgPQAgAegcAiQgkAphNgNQhVAqh/gSQgaAMgXAAQgZAAgXgRg",
      );
    this.shape_4.setTransform(-17.7, 182.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#708A33").s().p("AARgDIAAACIghAFg");
    this.shape_5.setTransform(-125.7, 99.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#AA8E78")
      .s()
      .p("AACBJIgoiCIgOgqQAWAMAEAaQAFgigMgeIANgEQA0CsAVBOIgjAJIgQg5g");
    this.shape_6.setTransform(-129.4, 86.8);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#DBBA91")
      .s()
      .p("AFBA5IqKgoQhDgKAEgaIBDgMQFEg6FpArIAgBCQAGAtgkAAQgQAAgZgIg");
    this.shape_7.setTransform(-126.9, 205.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#845744")
      .s()
      .p("AkhAbQA3hEAagFIFkhgQBcgTAeAvQAHANADAQIBgDPQlrgslBA6IhEANQAyhLAlgvg");
    this.shape_8.setTransform(-128.6, 188.4);

    this.instance_3 = new lib.tree("synched", 0);
    this.instance_3.setTransform(
      -742.3,
      228.6,
      1.605,
      1.605,
      47.7,
      0,
      0,
      119.9,
      143.2,
    );

    this.instance_4 = new lib.CoconutTree2();
    this.instance_4.setTransform(394.1, 290.7, 0.81, 0.81, 0, 0, 180);

    this.instance_5 = new lib.beachhouse("synched", 0);
    this.instance_5.setTransform(119.2, 109.3, 1.546, 1.546, 0, 0, 0, 76.8, 82);

    this.instance_6 = new lib.coconutTree1();
    this.instance_6.setTransform(225.4, 161.6, 0.998, 0.998, 0, 0, 180);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#DBBA91")
      .s()
      .p("AhnAFIAIgRQBfgNBWARIASAEQABAGgSACIirAMQgHADgEAAQgKAAACgOg");
    this.shape_9.setTransform(231, 129.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#845744")
      .s()
      .p("ABSAnQhUgRhhANIAag7IACgIQAIgOAZAGIBdAcQAIABAOASQAKAOANAWIgSgEg");
    this.shape_10.setTransform(231.4, 124.7);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#9EE6F2")
      .s()
      .p(
        "AaaD6QlzjAoDB7Qj4A9kTiuQjrjYijDZQiuAHiJhhQkKiAhFAHQgeADAKAiQAIASAUAeIgLAMQgVAUgdANIgBAAQhoAujHg2QkthyoXA6QjmADAAhJQgLgKgNgGQhchAgkAdQg+BPoGiIQgHAihfghQgzBXlMgnIBOhNQDFAqBEgqQAbgQANgXQBfAfAHgiQIGCHA+hPQAnghBxBUQACASANAOQAHAGALAGQA0AbCRgBQEFgdDgAOQBgAGBQASIBxAZQDzAlAwhOQAXgkASgLQAbgRAwAGIACgCQB5ALDgBrQCJBhCugEQCjjcDrDYQESCsHlh/QMJgKh/CPICLAXIAAAsIHtAwQL6iQFAgEIAABkQkfgEoFBQQhbALhsAAQklAAmihLg",
      );
    this.shape_11.setTransform(732.9, -188.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EAiRAFHQi/gUjjgoQl9jCoRB5QhdAVhjgJQhrgMhxgxQg7gcg+gmQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQjxjZinDZQiFADhxg2QglgTgkgXQjjhshWgMIALgNQgUgdgIgTQgLgiAfgCQBFgIEKCAQCJBjCugGQCjjbDqDZQETCsD5g8QIDh6FzC+QI7BmFTglQIFhQEfAEIAABlQjIgCk1AmQilA8kNAAQiTAAixgSgAxQgRQk1h0ojA4QiTABg3gcQgfgRgBgbQhzhVgpAhQg/BOoQiKQgHAihjggQgnBClNACQhphHCxgiQFMAnAzhXQBfAhAHgiQIGCHA+hPQAjgcBdA/QANAHALAKQgBBIDmgCQIYg6EtByQDHA3BogvIABACQAIATAVAdIgNANQg7AzhrAAQhTAAhvgdg",
      );
    this.shape_12.setTransform(727.3, -179.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("rgba(255,246,222,0.659)")
      .s()
      .p(
        "AyVRWQlhgSkpg/Qp0hOFahOIM2AAQAfACAbgGQAYgHASgOQAhgXAAgmQgBglgggeQgQgPgYgLQgYgJgfgEQiQg7img1Qh6gniIgjQjsg+kRgyIgBAAQjfgpj5ghIi7gYQj0gTjWgHIAAmaIBjASQFAA6FXAsIACAAIABAAIAMABIABAAIADABIABAAIAFABIAJACIAHAAIAHAAIAqAGQELAeEYAYQA1gBAYgXQAWgVgYgvQgagvjNg+QkHiJEHgbQIyALG0AuQCtASCaAYIADAAICDAWQBpATBgAVQCrBWiHAjQgXAGghAFQg6AHhYAEIhFABIgDABIgvAJIgBAAIgwAIQmjBMirBSQi1BWBaBcQAWAVAlAWQCOBKCuBEIApAPIAIADQDjBVEWBKIABAAQC6AxDQAsIAAAAQENA5E2AwIBoAQQCjAeglAqQgXAahTAOQg6AIhXAFQp/BZoSAAQibAAiSgIgA8VGeQgUADgBAFQAAACAHACQAEACAKACQAXADAgAAQAfAAAVgDQAXgEAAgEQAAgFgXgDQgVgCgfAAQggAAgXACgEgr/ADCQgWAFAAAFQAAAGAWACQAXAEAhAAQAgAAAWgEQAYgCAAgGQAAgFgYgFIgHgBIgEAAIgEAAQgTgCgUAAQghAAgXADgA51AFQgPABAAAGQAAAFAPADQARAFAYAAQAZAAAQgFQAIgBAFgCQADgCAAgDQAAgGgQgBQgQgDgZAAQgYAAgRADgAvrh1QgPAEAAAFQAAAFAPACQASAFAYAAQAXAAARgFQAJAAADgCQAEgCAAgDQAAgFgQgEQgRgCgXAAQgYAAgSACgAkBD9IgDgBIjAgWQiWg0A5glQAFgEAGgDQASgJAdgIQBHgSCKgOIAFAAIAfgEIcviqIArgMQAEgCAFAAIAFgBQCIgsgqgrQgYgahSgYQgVgHgYgFMgo1gEiIgggEQqRhLLMAQQJvg1jYhvIi5gdQhkgOhggLQnZg7mkgEIhlgBQh+AYBuAmIEQBMQBJAthJARI6ChWQg9AAgtAFIAAi/IP7AtIAoADQB3AHhVhJIgpgZQiAhbCpgVQD2gFEYANIALABQGeAUHrBBQBgAMBkAPIAFAAQBbANBfAPQFIA1FnBDIYQDkQGMA3hHh9QhWhkBWgFIAdAAIACAAQAiADA1AMQPbCmidicIgQgOQimhpCSAEIANABIANABQAqADA+AJQDRARDSACIAAH3IldAAIn1A+QjvBFFEBfIH3C6QBRCRnKAUQm7AymxAYQkSAPkPAFIAAAAQiCACiCAAQrPAAq0hJgAcvj6QgfAEAAAIQAAAGAfAEQAgAFAwAAQAtAAAggFQAggEgBgGQABgIgggEQgggDgtAAQgwAAggADgEg2RgGTIAAjIIAhANIADAAIAEACQB0ArCkAsQA2AOA9AOQBpAOAAAcQACAchrAAg",
      );
    this.shape_13.setTransform(729.5, 241.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFEABD")
      .s()
      .p(
        "EAsJAJXQhHglhnhWQh6hjglgYQhUg4hCAAQgaAAhAARIiIAmQjQA3ifAAQiNAAjOg3QjOg3hZAAQhxAAhWAVQgyAMhXAkQhVAhg8APQhhAVh/AAQhhAAjEgwQjAgwgYgBQiOAAjcBhQh3A0gnAOQhVAeg/AAQhoAAhYgeQgkgMhvg2QheguhRgUQh3gfibAAQiGAAj8B2Qh6A7gxAVQhSAlgfAAQhaAAkNhTQj9hTgDAAQhBAAi4BFQi3BFijgTIgegDIAAyZMBsjAAAIAARgQgsASgqAUQiOBMg7AcQhgAvhCABQhhgBhng4g",
      );
    this.shape_14.setTransform(729.5, -30.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FEF1CB")
      .s()
      .p(
        "Eg2oA6uMACLh0fQhVh/H4AhQH4AiCRAOQFIAhDjAIIApACQDEAHBbAIQEJAWBdAVQBdAVAtgNQAngMAhgNQCuhHBwAZQBwAYAyAqQCyCXAPgHQD4h8B/AXQAYAEAUAKQCDA9B3AuQB3AvDmAaIAMABQEEAdDyhiQCwErfChtMAAABumg",
      );
    this.shape_15.setTransform(727.2, 170.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#F9FDFE")
      .s()
      .p(
        "APEINQiCAegchCQjRBAh1h9Qg1AXgugBQgogCgPgQQgPgRATgTQAWgVA4gLQACg2BYgVQBYgVA3AkIA3AAQAWgzBpAGQAxhhCBgBQA5gBAqAYQArAaAMAtQBggTA1AfQCcirCECIQB5gTA+BXQBCAVAKAoQAKAngsAmQgtAmhPANQhcAPhqgYQgGA2hIgBQhIgBgbg0QgtBbhzAOQgRACgQAAQhdAAhEg+gAz3lGQh1AVgZgvQi9AuhphZQgwAQgogBQgkgBgPgMQgOgLASgOQAUgQAzgHQABgnBPgPQBPgOAyAaIAyAAQAUgmBeAFQAthFBzgBQA1gBAkARQAoASAKAhQBXgNAwAWQCMh7B2BjQBugPA3A/QA9AOAIAdQAJAcgnAaQgpAchIAKQhSAKhggRQgFAmhBAAQhAgBgZglQgpBBhnAKIgeACQhUAAg9gtg",
      );
    this.shape_16.setTransform(1094.8, -562.5, 1, 1, 0, 0, 0, 227.7, -142.1);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .lf(["#16B6DB", "#49D9FA"], [0, 1], 10479, -225.5, 10479, -110.8)
      .s()
      .p("Eg0SAkwMAAAhJfMBolAACMAAABJdg");
    this.shape_17.setTransform(738.6, -79.8);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .lf(["#28CEF5", "#94FBFD"], [0, 1], 295.5, -102, 292.3, 136.4)
      .s()
      .p("EgzbASWQjc3eDctPMBolAAAMAAAAkvMholgACg");
    this.shape_18.setTransform(733.1, -432.5);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#F9FDFE")
      .s()
      .p(
        "Eg0zAHmQiDgMgyhYQgdAyhQABQhSABgGg0Qh3AXhngPQhXgLgzgmQgxgjAKglQANgnBLgUQBDhUCIAUQCRiDCwCkQA9geBrATQAMgtAwgYQAugWBBAAQCQABA2BdQB2gGAYAyIA+AAQA9gjBiATQAiAIAWAKQAqAUABAkQA/AJAZAUQAWASgRAQQgSARgsABQgiAAgogJIglgMQiCB3jqg+QgfBAiRgdQhKA7hlAAQgTAAgUgCgEA1KADwQhmgLgqhAQgYAlhBAAQhBABgFgmQhgAQhSgKQhHgJgpgcQgogaAJgcQAJgdA8gOQA3g+BuAPQB2hiCMB4QAxgTBWALQAKgfAogSQAlgRA0ABQB0AAAsBEQBfgFAUAlIAxAAQAygaBPAPQBPAOACAoQAzAHAUAQQARANgOAMQgOAMgkAAQgpACgwgRQhpBai9guQgZAvh1gWQg9AthTAAIgfgBgAlPg/QhzgPgthbQgbA1hIABQhIAAgGg2QhqAZhcgPQhPgNgtgnQgsglAKgnQAKgpBCgUQA+hYB5AUQCEiJCcCsQA1gfBgATQAMguArgaQAqgXA5ABQCBAAAxBiQBngGAWAzIA3AAQA3gkBYAUQBYAVACA3QA4AKAWAWQATASgPARQgPARgoABQguABg1gWQh1B8jRhAQgaBCiCgeQhEA/hdAAQgQAAgRgCgEgjdgCBQg8gGgXgoQgNAYglAAQglAAgDgYQg2ALgvgHQgogFgYgRQgWgQAFgRQAFgSAjgJQAfgmA+AIQBCg7BRBKQAbgNAxAIQAGgUAVgLQAVgKAeAAQBCAAAYArQA2gDALAXIAdAAQAcgQAtAJQAQADAJAFQAUAJAAAQQAcAFAMAJQAKAIgIAIQgIAHgUABQgQAAgSgFIgQgFQg8A3hrgdQgOAdhCgNQgiAbgvAAIgRgBg",
      );
    this.shape_19.setTransform(-169.6, -381.4);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .lf(["#28CEF5", "#94FBFD"], [0, 1], 1031.4, -128.3, 1030.7, 124.1)
      .s()
      .p("EhVJARkMAAAgjIMCqTAAAMAAAAjIg");
    this.shape_20.setTransform(-136, -427.6);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#9EE6F2")
      .s()
      .p(
        "EAoTAFUQiOgsh2AsQtiDKh+joQh/AfgLgvQqlBxhRhxQgtgqh4BHQgQAIgPALQACBgkigiQqYiQlvBsQjtAuh8hKIgBAAQgjgUgZgdIgNgRQAZgiAIgXQAOgpglgIQhQgRk4CAQieBsjIgeQi7kkkIDwQkwC1kRhpQopjRmFC5QuBBTlEjzIAAhdQFEDyOBhSQiEi3MzBjQIQDUEwi0QEIjuC7EiQDIAeCehsQEGhsCNAAIADACQA5gBAgAYQAWASAaAwQA6BqEjgTQAWgBBzgQQBjgOB1AEQEUALFHBGQC0AVBEgdQANgGAKgIQARgQAAgYQCShfAyAvQBRBxKlhwQALAuB/geQASAhAiAZQDHCQLlisQB2gtCOAtQGiDEJziPQD9hFD0BFQIKBCEIjOQDMghDQAqQBBAMBBgEIACBLQhDAfhBgPQjQgwjMAiQkIDNoKhCQhpgdhqgEQiOgGiQAnQkIA9jkAAQk4AAjxhygAlAAOQgMgcCcAFIBKACIBnADQAXAAAjAdIgugVQgjAAhTAVQhUAUggAAQgzAAgwgfgEA0ugCWQgfgKhNAAQgTAAhzAKQhzALgSAAQgdAAgpgJQgggGgZgJQA7gICXgKIChgKQB0AAAaAEQBAAJAABGQgzgigYgIgAANknQgiAAhKAQQhLAPgsAAQAXgcAtgQIAYgIQArAABcgFIBsgFQEeAAIZAaQHQAXC7ACQhDAMhpAIQibAMijAAQuQg0i0AAgA86kfQi0gPgfAAIgDgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIACgCIADgBIDRAFIAnABQDPAECtgSIARgCQBNgJBTAIQJJAil7gKQl8gLAAABIgBADQgvAgirAAQgVAAi0gQgEAj8gGbIgEAAQiSgJi5gDQi7gDhHgLIgCgCQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIADgCQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQBHAMC5ADQC5ACCZgRQCYgRDEAPQDEAOAigGQAigGACABQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAAADIgCACQhGAWjKAHQhTAChKAAQhoAAhUgFg",
      );
    this.shape_21.setTransform(-135.9, -232.5);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .lf(["#16B6DB", "#49D9FA"], [0, 1], 0.7, -49.6, 0.7, 77.8)
      .s()
      .p(
        "EAoUAHgQiOgth2AtQrlCsjHiQQgigZgSghQh/AegLguQqlBwhRhxQgygviSBfQAAAYgRAQQgKAIgNAGQhEAdi0gVQlHhGkUgLQh1gEhjAOQhzAQgWABQkjATg6hqQgagwgWgSQgggYg5ABIgDgCQiNAAkGBsQieBsjIgeQi7kkkIDwQkwC0oQjUQszhjCEC3QuBBSlEjyIAAuhMCqTAAAIAAPqQhBAEhBgMQjQgqjMAhQkIDOoKhCQj0hFj9BFQkIA8jjAAQk4AAjyhxgAk/D3QAwAfAzAAQAgAABUgUQBTgVAjAAIAuAVQgjgfgXAAIhngDIhKgCIgpgBQhxAAAKAagEA16AB7QAAhGhAgJQgagEh0AAIihAKQiXAKg7AIQAZAJAgAGQApAJAdAAQASAABzgLQBzgKATAAQBNAAAfAKQAYAIAzAiIAAAAgEgqAABPQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABABQBbAWDpgBIGagBIAEAAIABgDIgBgCIgEgBImaABQjnABhagWIgCgBIgCABgEA8iABQQgBAAAAAAQAAABAAAAQgBAAAAABQABAAAAABIACACIAEAAICPghQArgLAlgGQjDACghArgEhISAA5QAzATAiAFQAVAEBtAAQBOAACGgRQCEgRBEAHQBDAIAUgLQAUgLA6AeIAEAAIADgBIABgCQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQg8gegqgMQglgKgoAAQhVAAh7AfQh4AfkegbQiBgNgOAAQgSAACcATgEBDZAAqIAAAAQCjgFCKgMQCKgNigADIihACIgDgBIgEAAQgdAQhSAEQgRABgsgBQAoAHAVgBgARSgKQCjAACbgMQBpgIBDgMQi7gCnQgXQoZgakeAAIhsAFQhcAFgrAAIgYAIQgtAQgXAcQAsAABLgPQBKgQAiAAQC0AAOQA0gEggPgBLIgCACQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAIADABQAfAAC0APQC0AQAVAAQCrAAAvggIABgDQAAgBF8ALQF7AKpJgiQhTgIhNAJIgRACQitASjPgEIgngBIjRgFIgDABgAarjSIgDACQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABAAIACACQBHALC7ADQC5ADCSAJIAEAAQCQAJDJgGQDKgHBGgWIACgCIAAgDQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgCgBgiAGQgiAGjEgOQjEgPiYARQiZARi5gCQi5gDhHgMIgBAAIgCABgEg6PgFOQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIADABIikABQi9ACEPAZQEPAZDhgmQDhgmALgEIAKgFIABgCIgBgCIgEgCQgRABiAAWQh1ATitAAQgSAAhZgFQhagGgYAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABgEhEugF4IgDACIgBACQAAABiHAEQiIAED8AHQD7AGAhAAQAoAAAqgPQAngQBdAAIAEgBIABgCIgBgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQhhAAgoARQgnAPgmAAQghAAhXgHQhggHgqgHIgBAAIgCABgEhCHgHVQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQADACjPACQjPACCCAJQCAAICvgTIgGgDIgJgFQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABgEg8YgHLIgEABQALABAAgBIgDgBIgCgBIgCABgEAhHgH1QgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAIABACQABACA7ALQA7ALGfAGQGfAGEkgQIElgTIABgDIgBgBIgEgCQnlANm6AAQm7ABibgOIgEABg",
      );
    this.shape_22.setTransform(-136, -255.8);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EAqaAIfQiSgsh5AsQt4DKiBjoQiDAfgKgvQq3BxhThxQgzgwiVBgQABAkgqASQhGAdi7gVQqmiQl5BsQkzA6h7iFIgPgTQAZghAJgYIACgBQB8BJDtguQFvhsKXCQQEjAigChgQAPgKAPgIQB5hIAsAqQBRBxKmhwQALAvB+ggQB+DoNijJQB3gtCNAtQGiDEJ0iPQCPgoCOAGQBrAEBoAeQILBCEIjOQDMghDQAwQBBAOBDgfIANBCQhQAyhBgCQhrgEhqAQQg+AvhLAiQjcBflRgYIgBAAQg2gEg5gHQhrgehtgEQhPgDhPAKIgJACQg/AIg+ARQiKAeh/APQh8APhzAAQlBAAj3hygEgzkAJJQo3jSmPC5QtKBMlcjEIAAikQFEDyOAhSQGGi6IoDSQERBoExi0QEIjwC6EkQDIAdCfhrQE4iBBQARQAkAJgNAoQgJAYgYAiIANARQhlAFkKBrQgpAcgrASQiCA2iagWQi/kkkPDwIgCACQhGAohCAaQh8Avh3AAQhrAAhngmgEgqGgBEQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEAAQBZAWDogBIGZgBIAFACIABACIgBACIgFABImZAAIgdABQjSAAhVgWgEA8cgBEIgCgCQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAggrDDgBQgkAFgsALIiOAhIgCABIgCgBgEhHEgBHQgigFgzgTQkbgiEgAbQEeAcB4gfQB7ggBVAAQAnAAAmALQApALA9AfQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgBACIgCABIgEAAQg7gegTAMQgVALhCgIQhEgIiEARQiGARhPAAQhsAAgVgDgEBCVgB1QAsABARgBQBRgDAegQIAEgBIADACIChgCQCggDiLANQiKALiiAGIAAAAIgGAAQgUAAgjgHgEg7mgHHQkPgaC9gBICkgBIgDgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAYAABbAFQBZAFASAAQCsAAB2gTQCAgWARAAIAEABIABACIgBADIgKAEQgLAEjiAmQiIAYiaAAQhjAAhrgKgEhFMgH/Qj8gHCHgEQCIgDAAgCIABgCIADgCQAAAAABAAQAAAAAAAAQAAgBABABQAAAAABAAQAqAHBgAHQBXAGAhAAQAlAAAngOQApgRBhAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABIABABIgBADIgEABQhdAAgnAPQgqAQgoAAQghAAj7gHgEhGngJdQiDgJDPgBQDQgCgDgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAJAGIAGACQh7AOhkAAQgqAAgmgDgEApVgJtQmfgGg8gLQg6gMgBgBIgBgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIADgBQCcANG7AAQG6gBHlgMIAEABIABACIgBADIklASQjWANkZAAQhlAAhvgCg",
      );
    this.shape_23.setTransform(-135.2, -240.3);

    this.instance_7 = new lib.SandElements();
    this.instance_7.setTransform(-104.1, -76.1);
    this.instance_7.alpha = 0.172;

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#FAE5B7")
      .s()
      .p(
        "AvFCqQkAhfA3hrQAHgRASgSQBjhrFdhBQE2g6F/AAQGAAAE2A6QFdBBBkBrQAQASAJARQA2BrkBBfQleCApnAAQpmAAlfiAg",
      );
    this.shape_24.setTransform(-196.8, 198);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#FAE5B7")
      .s()
      .p(
        "AwUEkQkWiiA7i6QAJgeASgeQBsi4F6hwQFPhkGfAAQGfAAFRBkQF5BwBsC4QASAeAJAeQA6C6kVCiQl8DdqZAAQqZAAl7jdg",
      );
    this.shape_25.setTransform(26.6, 156);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("rgba(255,246,222,0.659)")
      .s()
      .p(
        "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",
      );
    this.shape_26.setTransform(-136.3, 4.1);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#FFEABD")
      .s()
      .p(
        "EBD6AJYQhFgnhohVQh6hkglgYQhUg4hBAAQgaAAhAASIiJAmQjPA3ifAAQiOAAjOg3QjNg3hagBQhwAAhYAWQgwANhZAjQhUAig8ANQhhAWh/AAQhiAAjCgwQjEgxgXABQiOAAjcBgQh3A0gnAOQhVAehAAAQhnAAhXgeQglgNhvg1QhfguhRgVQh1gdiaAAQiGAAj7B1Qh7A7gwAWQhTAkggAAQhYAAkPhTQj8hTgCAAQhCAAi4BFQi4BFiigSQiigTiwhXQi+h2hXgHQhWgGguAIIgtAIIANgCQk8BkiEgcQhUgTi8hBQi9hChHgNQhIgNhmACIAFgCIgJABIgCgBIAAABQiCACh0A1Qg5AbgxAEQgxAEh4gHIgigEQhOgLhcgkQiagehkAjIgNAEIgCABQgcAMgcAOQhIAlgfALQg8AVg+ABQjTgBh/hVIAAuMMCrDAAAIAAP1Qk0AWkAB8QiOBMg6AcQhhAwhCgBQhhAAhog3g",
      );
    this.shape_27.setTransform(-138.3, -268.1);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#9EE6F2")
      .s()
      .p(
        "AaaD6QlzjAoDB7Qj5A9kTiuQjqjYijDZQiuAHiJhhQkKiAhFAHQgfADALAiQAIASAVAeIgMAMQgVAUgdANIAAAAQhpAujHg2QkthyoYA6QjlADABhJQgMgKgNgGQhchAgkAdQg+BPoGiIQgGAihgghQgyBXlNgnIBNhNQDHAqBEgqQAagQANgXQBgAfAGgiQIGCHA+hPQAmghBzBUQABASAMAOQAJAGAJAGQA2AbCPgBQEGgdDfAOQBgAGBRASIBxAZQD0AlAvhOQAXgkASgLQAbgRAwAGIADgCQB4ALDgBrQCJBhCugEQCjjcDqDYQETCsHkh/QMKgKh/CPICKAXIAAAsIHvAwQL5iQFAgEIAABkQkfgEoFBQQhbALhsAAQklAAmihLg",
      );
    this.shape_28.setTransform(698.2, -188.3);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EAiRAFHQi/gUjjgoQl9jCoRB5QhdAVhjgJQhrgMhxgxQg7gcg+gmQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQjxjZinDZQiFADhxg2QglgTgkgXQjjhshWgMIALgNQgUgdgIgTQgLgiAfgCQBFgIEKCAQCJBjCugGQCjjbDqDZQETCsD5g8QIDh6FzC+QI7BmFTglQIFhQEfAEIAABlQjIgCk1AmQilA8kNAAQiTAAixgSgAxQgRQk1h0ojA4QiTABg3gcQgfgRgBgbQhzhVgpAhQg/BOoQiKQgHAihjggQgnBClNACQhphHCxgiQFMAnAzhXQBfAhAHgiQIGCHA+hPQAjgcBdA/QANAHALAKQgBBIDmgCQIYg6EtByQDHA3BogvIABACQAIATAVAdIgNANQg7AzhrAAQhTAAhvgdg",
      );
    this.shape_29.setTransform(692.6, -179.2);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("rgba(255,246,222,0.659)")
      .s()
      .p(
        "AyVRWQlhgSkpg/Qp0hOFahOIM2AAQAgACAZgGQAZgHATgOQAggXAAgmQgBglgfgeQgRgPgZgLQgXgJgfgEQiQg7ilg1Qh7gniIgjQjtg+kPgyIgBAAQjhgpj4ghIi7gYQjzgTjYgHIAAmaIBjASQFBA6FWAsIACAAIABAAIANABIABAAIADABIAAAAIAHABIAIACIAHAAIAHAAIApAGQEMAeEZAYQA1gBAXgXQAXgVgagvQgZgvjNg+QkHiJEHgbQIzALGyAuQCvASCZAYIADAAICDAWQBpATBgAVQCrBWiHAjQgWAGgiAFQg6AHhYAEIhEABIgFABIguAJIgBAAIgwAIQmjBMisBSQi0BWBaBcQAWAVAlAWQCOBKCuBEIAoAPIAIADQDlBVEUBKIACAAQC6AxDPAsIABAAQEOA5E2AwIBnAQQCiAeglAqQgVAahTAOQg7AIhWAFQqABZoSAAQibAAiSgIgA8UGeQgWADABAFQAAACAFACQAFACALACQAVADAhAAQAgAAAVgDQAVgEAAgEQAAgFgVgDQgVgCggAAQghAAgVACgEgr/ADCQgWAFAAAFQAAAGAWACQAXAEAhAAQAgAAAXgEQAWgCAAgGQAAgFgWgFIgIgBIgEAAIgEAAQgTgCgUAAQghAAgXADgA51AFQgPABAAAGQAAAFAPADQARAFAYAAQAYAAARgFQAJgBADgCQAEgCABgDQgBgGgQgBQgRgDgYAAQgYAAgRADgAvrh1QgQAEAAAFQAAAFAQACQASAFAYAAQAYAAAQgFQAJAAADgCQAEgCAAgDQAAgFgQgEQgQgCgYAAQgYAAgSACgAkBD9IgDgBIjBgWQiUg0A4glQAEgEAHgDQATgJAcgIQBHgSCKgOIAFAAIAfgEIcviqIAsgMQADgCAFAAIAEgBQCJgsgqgrQgYgahSgYQgVgHgYgFMgo2gEiIgfgEQqQhLLLAQQJvg1jXhvIi7gdQhigOhhgLQnZg7mkgEIhkgBQiAAYBvAmIEPBMQBLAthLARI6BhWQg9AAguAFIAAi/IP9AtIAmADQB4AHhUhJIgrgZQh/hbCqgVQD1gFEXANIAMABQGeAUHrBBQBgAMBlAPIAEAAQBbANBfAPQFIA1FnBDIYPDkQGNA3hHh9QhXhkBXgFIAcAAIADAAQAiADA0AMQPbCmibicIgQgOQinhpCRAEIAOABIANABQAqADA+AJQDSARDSACIAAH3IleAAIn1A+QjuBFFEBfIH1C6QBSCRnKAUQm7AymxAYQkSAPkOAFIgBAAQiCACiCAAQrPAAq0hJgAcwj6QggAEAAAIQAAAGAgAEQAfAFAwAAQAtAAAggFQAfgEABgGQgBgIgfgEQgggDgtAAQgwAAgfADgEg2SgGTIAAjIIAhANIADAAIAFACQB0ArCkAsQA2AOA9AOQBpAOAAAcQABAchqAAg",
      );
    this.shape_30.setTransform(694.8, 241.7);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#FFEABD")
      .s()
      .p(
        "EAsIAJYQhFgnhphVQh5hkglgYQhUg4hBAAQgbAAg/ASIiJAmQjPA3ifAAQiOAAjOg3QjNg3hagBQhwAAhYAWQgwANhZAjQhUAig9ANQhgAWh/AAQhiAAjCgwQjCgxgXABQiOAAjcBgQh3A0gnAOQhVAehAAAQhnAAhXgeQglgNhvg1QhfguhRgVQh1gdicAAQiGAAj7B1Qh7A7gwAWQhTAkggAAQhYAAkPhTQj8hTgCAAQhCAAi4BFQi4BFiigSIgfgFIAAyZMBslAAAIAARhQgsASgrAUQiOBMg6AcQhhAwhCgBQhhAAhog3g",
      );
    this.shape_31.setTransform(694.8, -30.5);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#FEF1CB")
      .s()
      .p(
        "Eg2oA6uMACLh0fQhVh/H4AhQH4AiCRAOQFIAhDjAIIApACQDEAIBbAHQEJAWBdAVQBdAVAtgNQAngMAhgNQCuhHBwAZQBwAYAyAqQCyCXAPgHQD4h8B/AXQAYAEAUAJQCDA+B3AuQB3AvDmAaIAMABQEEAdDyhiQCwErfChtMAAABumg",
      );
    this.shape_32.setTransform(692.5, 170.3);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#F9FDFE")
      .s()
      .p(
        "APEINQiCAegchCQjRBAh1h9Qg1AXgugBQgogCgPgQQgPgRATgTQAWgVA4gLQACg2BYgVQBYgVA3AkIA3AAQAWgzBpAGQAxhhCBgBQA5gBAqAYQArAaAMAtQBggTA1AfQCcirCECIQB5gTA+BXQBCAVAKAoQAKAngsAmQgtAmhPANQhcAPhqgYQgGA2hIgBQhIgBgbg0QgtBbhzAOQgRACgQAAQhdAAhEg+gAz3lGQh1AVgZgvQi9AuhphZQgwAQgogBQgkgBgPgMQgOgLASgOQAUgQAzgHQABgnBPgPQBPgOAyAaIAyAAQAUgmBeAFQAthFBzgBQA1gBAkARQAoASAKAhQBXgNAwAWQCMh7B2BjQBugPA3A/QA9AOAIAdQAJAcgnAaQgpAchIAKQhSAKhggRQgFAmhBAAQhAgBgZglQgpBBhnAKIgeACQhUAAg9gtg",
      );
    this.shape_33.setTransform(1060.1, -562.5, 1, 1, 0, 0, 0, 227.7, -142.1);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .lf(["#16B6DB", "#49D9FA"], [0, 1], 10479, -225.5, 10479, -110.8)
      .s()
      .p("Eg0SAkwMAAAhJfMBolAACMAAABJdg");
    this.shape_34.setTransform(703.9, -79.8);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .lf(["#28CEF5", "#94FBFD"], [0, 1], 295.5, -102, 292.3, 136.4)
      .s()
      .p("EgzbASWQjc3fDctOMBolAAAMAAAAkvMholgACg");
    this.shape_35.setTransform(698.4, -432.5);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#AA8E78")
      .s()
      .p(
        "AhVImQBEi4AejbIABgLQAIg0AFg2IAAgNQAMh9ABiLIAAg2IAQANIgQgfIgBgTQABhRAGi2IAOABQgEAgAOAfQgDgaATgRIgDAsIgHCKIgBA8QgBAbABAXIAAAMIAAAGIAAAXQABCLgIB/IgBAPQgDAtgFAtIgBAKIAAAHQgXDmg0DFIgPgEQgSgIgNALQgMAKgHAZQAGgjgJgRg",
      );
    this.shape_36.setTransform(863.4, 283.6);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#86B241")
      .s()
      .p(
        "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",
      );
    this.shape_37.setTransform(868.4, 208.7);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#708A33")
      .s()
      .p(
        "AgdBuQgWAKgdgKQhAAFgqgQQgoADgRgPQgRgPAdgLQgCgJAHgEQAFAVAgACQAfAUAhgUQAzAbAigaQAtAdAdgcQAfAUAigQQArAJAJgUQA7gQgogcQgJgRgagFQgbgFghAHQgFgEgNABQAEgMgRgIQAMgJgDgKQgEgLgTgEQAKgVgdgKQAOgLgKgSIABgBQAVAKADAYQARgGALAMQALANgMAMQAwAEgYAcQgKAGAGACQAFABAJgCQAZgaAfAYQBbgMgSAwQAkAOgbAWQAQARgJAJQgKALgsAAQgMALgWAEQgYAEgcgGQgWAQgtgPQgLAIgSAAQgPAAgYgHg",
      );
    this.shape_38.setTransform(853.3, 341.2);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#9DAE50")
      .s()
      .p(
        "AgTBeQgiAagzgbQgiAUgegUQgggCgFgVQAFgCAIgBQgGgbAwAAQgcgUATgUQgPgJAEgMQAFgKAVgEQgFgKAIgIQAJgJAUgBQgJgdAVgLQATgKAaAOIAFgEQAMgGANABQAPACAFAMQAUgJAUAJIAAABQALASgOALQAcAKgJAVQATAEADALQAEAKgNAIQARAHgEAMQAOgBAFAGQAggJAbAGQAbAGAIARQApAcg8AQQgIAUgsgJQgiAQgegUQgPAOgSAAQgTAAgWgPg",
      );
    this.shape_39.setTransform(851.2, 339);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#017D3F").s().p("AAAAAIAAAAIAAAAIAAAAg");
    this.shape_40.setTransform(854.9, 329.5);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#AA8E78")
      .s()
      .p(
        "AnXFBQCxhICyh4IAJgHQAsgcArghIAKgIQBlhLBnhcIApgkQgBALACAKIAMgiIANgNIABAAQA8g2CMh0IAJAKQgbASgOAgQARgUAZADQgSANgRAOQg7AvgvApIgtAnQgVARgRARIgJAIIgEAEIgQAPIgBAAQhnBchlBQQgGAEgGAFIhFA3IgJAHQgDABgCADQiTBsiRBQg",
      );
    this.shape_41.setTransform(900.5, 316);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#86B241")
      .s()
      .p(
        "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",
      );
    this.shape_42.setTransform(956.2, 275);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#FEF1CB").s().p("EhVhAyvMAAAhldMCrDAAAMAAABldg");
    this.shape_43.setTransform(-138.3, -8.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
            { t: this.instance_7 },
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
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
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
  p.nominalBounds = new cjs.Rectangle(-913.9, -550.2, 1990.9, 1100.5);

  (lib.mc_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EiB0A/IMAAAh+PMEDpAAAMAAAB+Pg");
    mask.setTransform(1233, 614.6);

    // Layer 3
    this.instance = new lib.Symbol1();
    this.instance.setTransform(1050.6, 724.4, 1, 1, 0, 0, 0, 8.3, -6.2);

    this.instance.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(402, 210.6, 1662, 808);

  (lib.mc_Helicoptercopy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.instance = new lib.mc_Helicopter1();
    this.instance.setTransform(94.5, 38.9, 0.638, 0.638, 0, 0, 180);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-40.1, -14.8, 136.2, 55.8);

  (lib.mc_backFand = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(168,168,168,0.447)")
      .s()
      .p(
        "AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg",
      );
    this.shape.setTransform(16, 16);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer 1
    this.instance = new lib.mc_fan01d("synched", 0);
    this.instance.setTransform(16, 16, 1, 1, 0, 0, 0, 15.8, 15.8);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.8, -0.8, 33.5, 33.6);

  (lib.mc_backFan = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(168,168,168,0.447)")
      .s()
      .p(
        "AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg",
      );
    this.shape.setTransform(16, 16);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

    // Layer 1
    this.instance = new lib.mc_fan01("synched", 0);
    this.instance.setTransform(16, 16, 1, 1, 0, 0, 0, 15.8, 15.8);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ regY: 15.7, rotation: -12, y: 15.9 }, 0)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.8, -0.8, 33.5, 33.6);

  (lib.Symbol8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.instance = new lib.Symbol4();
    this.instance.setTransform(-65.9, 7.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer 1
    this.instance_1 = new lib.Symbol3();
    this.instance_1.shadow = new cjs.Shadow("#000000", 0, 0, 24);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-538, -70.5, 1080, 141);

  (lib.mc_Helicopter1_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.instance_2 = new lib.fan();
    this.instance_2.setTransform(84.5, -76.2, 1, 1, -10.2, 0, 0, 83, 15.7);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22));

    // Layer 1
    this.instance_3 = new lib.mc_backFan("synched", 0);
    this.instance_3.setTransform(188.5, -63.9, 1, 1, 0, 0, 0, 16, 16);

    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#EF3216").ss(0.5, 1, 1).p("AA3gHQgygLg7Ad");
    this.shape.setTransform(185.3, -35);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#010F2C").ss(0.5, 1, 1).p("Ag8AWIB5gr");
    this.shape_1.setTransform(185.3, -38);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#990202").ss(0.5, 1, 1).p("Ag5AIQBAgYAzAN");
    this.shape_2.setTransform(185.2, -36);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#E9A00A").ss(0.5, 1, 1).p("AAqAPQgcgrg3AV");
    this.shape_3.setTransform(170.9, -44.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#C68809")
      .ss(0.5, 1, 1)
      .p("AAoATIAPAAIAAgJIgNgcIhgAAIAAAEIALALIAMAJ");
    this.shape_4.setTransform(171.1, -45);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#001C55")
      .ss(0.5, 1, 1)
      .p("Al5AGILuACAmFgDIMLgE");
    this.shape_5.setTransform(69.2, -19.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#6B756A")
      .ss(0.6, 1, 1)
      .p("AAKgHQgCAHgHAEQgDADgHAB");
    this.shape_6.setTransform(87, -42.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#2897A4")
      .ss(0.5, 1, 1)
      .p("AANgKIACALQAAAJgIAAQgSADgCgGIgBgJ");
    this.shape_7.setTransform(86.1, -43.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#0CE0DB")
      .ss(0.5, 1, 1)
      .p(
        "AAdgJIgEgNIgEgLQgBgCAAgBQgDgGgCAAIgzAAQgGABAAAHIALBHQADAGAJAAIA1gEQAKAAgBgKIgNgk",
      );
    this.shape_8.setTransform(95, -47.7);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#4ABDCA")
      .ss(0.5, 1, 1)
      .p(
        "AAWgOIgFgPQgBgCAAgBQgBgBAAgBQgCgCgBAAIgqAAQgFABAAAGIAIA2IAAAGQADAGAIAAIAsgDQAIAAgBgJIgLgfg",
      );
    this.shape_9.setTransform(95.1, -47.7);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#AE7600")
      .ss(0.5, 1, 1)
      .p(
        "AAAicQAJAAAFAHQACADABAEQACADABADQAGALAFANQAPAjALAsIAAAAQABAGACAHQADAPAEAOQABAEAAAFQAEATADAVQAGAygCAXQgBANgCAFQgHAKhggDQgOgBgRgBQgRABADgWQAAAAAAgBQACgPABgPQAIhagLhZIgGg9IAAgEQgBgFACgDQACgGALAAIBAAAQAAAAAAAAgAhFCEICCgDQAJACgBggQgBgVgCgUQgCgTgDgUQgDgTgEgTQgCgGgBgGQgNg1gWgyQgHgSgJgE",
      );
    this.shape_10.setTransform(96.8, -38.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#74E3E7")
      .ss(0.5, 1, 1)
      .p(
        "AgHAxIgNhcQgBgGAFAAQASgEAJAbQADAJACANIAFAsIAAABQAAAIgIAAQgPADgFgDQgBgCgCAA",
      );
    this.shape_11.setTransform(85.4, -49.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("#000000")
      .ss(0.5, 1, 1)
      .p(
        "AofhQIgBgIAnygrIAAAAAiuhkIAAAAAiuhkQABAAAAAAAi7hkIABADQAGgCAGgBAgOgZIABAAQgBAAAAAAAg1gZIAAAAAHRhWQAdAAAUAUQAVAVAAAdQAAAbgVAUQgUAVgdAAQgdAAgVgVQgUgUAAgbQAAgdAUgVQATgSAYgCQAEAAADAAgAIWBfIgFACAIhBcQgFgBgFgCAGiBmIAAAA",
      );
    this.shape_12.setTransform(137.4, -45.4);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f()
      .s("#1A3555")
      .ss(0.5, 1, 1)
      .p("AgSgDQgBgHAHAAQATgEAMAZ");
    this.shape_13.setTransform(84.8, -53.9);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f()
      .s("#D7B306")
      .ss(0.5, 1, 1)
      .p(
        "AAWAIIANgRIgWAAIgFgIIgIgQIgGAPIgEAHIgYAIIASALAAVAJIAFAYIgWgKIgTALIgBgZ",
      );
    this.shape_14.setTransform(133.7, -49);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("#3DE4F7")
      .ss(0.5, 1, 1)
      .p("Ag2A5IBlhQABKg8IiTB5");
    this.shape_15.setTransform(46, -33.3);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f()
      .s("#031F4B")
      .ss(0.5, 1, 1)
      .p("AgOAJIAdgJIgBgIIgcAIg");
    this.shape_16.setTransform(80.7, -37.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f().s("#031F4B").ss(1, 1, 1).p("AAAAAQAAAAAAAA");
    this.shape_17.setTransform(33.4, -23.7);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("#6B756A")
      .ss(0.5, 1, 1)
      .p(
        "AAqhdQAHAFgCAOIAKB6QgCAJgGABIjzAmQgaAEAAgNIA/irQAEgMAIABIC1AAQAEAAACACQAmgJAGAnQABADABADQAEAKACAMABsg9IgDgOQAAAAAAgBQgCgNAQAAIBCAAQAOgBAGAPQACAEALAgIADAIADKgZIAPAtQACAMgMAAIg9AEQgJAAgFgHIgKhRQgCgJAIgBIA6AAQAEAAADALIAEANgABegiIAFAsIABASABOAsQgLAAgCgEIgDgXIgNhZ",
      );
    this.shape_18.setTransform(78, -46.3);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f()
      .s("#8AFAFF")
      .ss(0.5, 1, 1)
      .p(
        "AgaA7IgrAHQgpAGAQgSIAohyQADgGAJAAIB2AAQANABADAKIABANIABANIAGA6QABAMgRACIhiAPg",
      );
    this.shape_19.setTransform(69.8, -46.5);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("#022146")
      .ss(1, 1, 1)
      .p("AhaBYIDHgfQAXgCgCgQIgKhxQgEgNgRgBIiaAAQgMgBgEAJIg0CZQgWAWA3gHg");
    this.shape_20.setTransform(69.8, -46.4);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f()
      .s("#74E3E7")
      .ss(1, 1, 1)
      .p("AhtBAIAtiHQAFgIAKAAICJAAQAOABAEAMIAJBlQACANgUADIixAbQgwAGATgUg");
    this.shape_21.setTransform(69.9, -46.4);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f()
      .s("#B6B9B5")
      .ss(0.5, 1, 1)
      .p(
        "AguAaIAAgNQALgIARgDQALgCAMAAIgXAAIgcAAIAAANAguAhIAAgHAAHghIgGAAQgMABgHANIAAgOIATAAAAHghIALAAIAAAhIAdAAIAAADIAAAeAgSAAIAAgJQAVgFAEgTAgSgTIAAAKAASAAIgNAAAArADQgrAagugD",
      );
    this.shape_22.setTransform(84.4, -71.9);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f()
      .s("#22EEFF")
      .ss(1, 1, 1)
      .p(
        "AB1iCQACALgBAMQgBAPgFARQgDAKgEAMQgHAPgJAQQgHANgIALQgMASgOAUQgHAJgIAKQgKAKgKAJQgiAgghAMQgKACgJACQgIABgIACQgQACgMAA",
      );
    this.shape_23.setTransform(45.9, -39.8);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f()
      .s("#0ACDE2")
      .ss(0.5, 1, 1)
      .p(
        "ACLiSQANgBABAVQAAAHgBAJQgDASgFAQIAAAAQgEAMgDALQgHAQgHAQQAAAAAAABQgGANgHALQgBABAAAAQgIAOgIANIgBAAQgMARgNAOQAAAAAAAAQgKALgKAKQg4A2g+AIQgNABgNAAQgwgBgHgnQgEgcASgpQAAgBABgC",
      );
    this.shape_24.setTransform(43.2, -39.6);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f()
      .s("#002671")
      .ss(1, 1, 1)
      .p(
        "AhgCbQgnABgQgRQgDgEgDgFQgFgLABgPQABgdAWgsIAAAAQACgFADgFQAGgKAHgIQAAAAABgBQAXgcAegZQAYgXAfgTQATgOAagMQAMgGALgFQAAAAABAAQAggOAUgFQAQgEALgBQAAAAABAAIABAAQABAAABAAIABAAQAOABAEAKQABAHABAHIAAAAQABAigRAqIAAAAQgGAQgJAQQAAAAAAABQgHAMgIAMQgBAAAAABIAAAAQgIANgKAOIAAAAQgLAPgMARQgEAFgEAFQgGAGgGAGIAAAAQgvAtgoAOQgTAEgQADIgBAAQgOACgMAB",
      );
    this.shape_25.setTransform(43.1, -39.3);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f()
      .s("#5B605A")
      .ss(1, 1, 1)
      .p(
        "AnuiYQhGARg+AdQgNAGgLAGQhZAtg3A7Qg4A9gGA4QgDAmATAaQAKAMAOAKQAFAJAHAIQAGAGAHAFQAKAJAOAIQAzAcBcAKQAJABAKABQABAAABAAAl8j6QADAAACAAIAHAAIA8AAIBeAAIAcAAIARAAAmBj6Qg6AIgxBYApYEqQAJABAJABQAFAAAGAAQABAAABAAQAFAAAEABQBLACBhgHQADAAAEAAAl6EnIACAAQAGAAAGgBQBxAABFgCQAGAAAFAAAMdBJIAQgFIAIgCIgNgnIgBgCIAbgOQAAgxgYhGQgXgXAKgYIAPgjIAOgiIAGgOIAFgLIAGgPIAOgkIhnAAIgVAkIgIAPIgGAKIgJAPIhDByIoEgNIgigBIgBAAIgNAAIg4gCQhGAHgVgzQgcg+ghgOQgKgEgKAAIgRAAAioEjQAFAAAFAAQACAAACAAQAFgBAGAAQAFAAAGAAQAogDAIgGIAdgWIAQgQIAQgRIA9hAIAagbIARgRIAegfIAzg1QAXghA9AEIFGgRIAOAMIA7AAIAYBNIAPgGIAAACIACAFIAEANIADALIBtgf",
      );
    this.shape_26.setTransform(110.6, -43);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f("#F25039").s().p("Ag3AFQA9gcAyAKIhsAdg");
    this.shape_27.setTransform(185.3, -34.4);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#EDA40A")
      .s()
      .p("AAoATQgcgrg3AVIgLgKIAAgFIBgAAIANAcIAAAJg");
    this.shape_28.setTransform(171.1, -45);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#580000")
      .s()
      .p("AhDAUIB5gsIAOAlIgIACIgKgDQgygMhBAZg");
    this.shape_29.setTransform(186, -37.7);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#BA0204")
      .s()
      .p("Ag5ABIAAAAQBBgXAyANIgBAGQgygLg8Adg");
    this.shape_30.setTransform(185.1, -35.4);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#0A4386")
      .s()
      .p("AAOAEIAFgIIAgAAIgFAJgAgyAEIAGgIIAHAAIgFAIg");
    this.shape_31.setTransform(187.7, -67.5);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#BA0300")
      .s()
      .p(
        "AANAUIAIgPIAgAAIgFAMIgCADgAg0AUIAJgPIAIAAIgJAPgAglgEIAIgPIAHAAIgIAPg",
      );
    this.shape_32.setTransform(187, -67.6);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#167CD1")
      .s()
      .p(
        "AhBBMIAuhSIA2AAIghBEIgNAHQgTAHgaAAIgJAAgAgKgVIAGgLIA0AAIgFALgAACgvIAPgcIAsAAQAEABACADIgMAYg",
      );
    this.shape_33.setTransform(184.8, -64.8);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#E74994")
      .s()
      .p("AgkAUIAIgPIA1AAIgHAPgAgWgEIAIgPIAzAAIgHAPg");
    this.shape_34.setTransform(186.6, -67.6);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f("#9A0A02").s().p("AgKAHIADgDIAEgKIAOAAIgHANg");
    this.shape_35.setTransform(192.8, -66.3);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#0B2D75")
      .s()
      .p("AABASIAMgXQgCgDgEAAIgqAAIgDAAIgQAaIgHAAIAWgiIBkAAIgOAig");
    this.shape_36.setTransform(190.2, -71.4);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f("#8F0100").s().p("AAEAHIgdAAIAHgNIAsAAIgGANg");
    this.shape_37.setTransform(192.3, -68.8);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#003267").s().p("AgJAFIAFgJIANAAIgEAJg");
    this.shape_38.setTransform(193.4, -67.5);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#02276E")
      .s()
      .p(
        "AgFA8QAngkAbg7IAQAAIgOAhQgiAzgrAbIgGABgAhMAuIAvhRIAJgPIAFgLIAIgPIAEAAIgIAPIgGALIgJAPIguBSIgEgBg",
      );
    this.shape_39.setTransform(185.5, -61.9);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#A2A8A8")
      .s()
      .p(
        "AgwAxQgVgVAAgcQAAgcAVgUQASgSAZgCIAFAAQAcgBAVAVQAUAUABAcQgBAcgUAVQgVAUgcAAQgcAAgUgUgAgogsIgCADIgBABQgRARAAAXIAAAAIAAAFQACAVAQAQIAHAHIAFADQAOAJAQgBQAFAAAHgBIAFgCQANgDALgMQAGgFAEgHIADgEQAFgMAAgOQAAgJgDgJIgBgBIgBgDQgEgLgJgIQgMgMgOgEIgGgBIgJgBQgWAAgSAPg",
      );
    this.shape_40.setTransform(184, -47.2);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#C2CDE1").s().p("AgEAFQAFgEACgHIABAFQABAIgIAAg");
    this.shape_41.setTransform(87.7, -42.7);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#001B4A")
      .s()
      .p(
        "AgOAMIgEgUIADACIACAIQACAHASgEQAIAAAAgHIgCgMIAAgBIAEAAIABAPQgCAJgHAEQgEADgGABQgLAAgCgFg",
      );
    this.shape_42.setTransform(86.2, -43.5);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#7A8B81").s().p("AAAgZIASgXIgTBQIgRAQg");
    this.shape_43.setTransform(119, -34.4);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#BF2300")
      .s()
      .p("AgdAGIAcgcIgSBJIgaAcgAARgtIAdghIgUBSIgcAfg");
    this.shape_44.setTransform(119.1, -34.7);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#BF8300")
      .s()
      .p(
        "AgeBIIgfgBQgRABADgWIAAgCIADABICCgDQAJABgBggQgBgSgCgUIgFgnIAGgKIABAIQAEATADAVQAGAwgCAYQgBANgCAFQgFAHg6AAIgogBg",
      );
    this.shape_45.setTransform(97.1, -30.2);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#C3A200")
      .s()
      .p("AhGA3IADgdQBigdAgg0IAFAnQACASABAVQABAggJgCIiCADg");
    this.shape_46.setTransform(96.6, -30.9);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#A0A398")
      .s()
      .p("AAOAKIgthgIAcgEIAjBiIgQA8IgSAXg");
    this.shape_47.setTransform(119.2, -46.2);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#03205C")
      .s()
      .p(
        "AlLA3IAHgeIgthhIABAAIAhABQALAuAiAZQARABAYAAIABAaIAVgMIAXAKIgGgYIABAAIAbgBIFOgNQAVgBAMgNQAigzA8AEIgQAQQgZACgSASQgVAVAAAbQAAAdAVAUQAUAVAdAAQAdAAAVgVQAUgUAAgdQAAgbgUgVQgVgUgdAAQAtgcAjg0IgPAjQgLAYAXAXQAYBEAAAzIgaAOIAAACIh7AuIgBgCIgPAGIgYhOIAQAAIAAgKIgOgdIhiAAIAAAEIAMALIALALIlDATQg+gEgWAhIgzA1gADuA+IgGgDIgHgGQgQgQgBgWIgBgFIAAgBQABgWAQgRIABgBIADgDQARgPAXAAIALABIAGACQAOADAMAMQAJAJAEAKIABADIABACQADAHAAAKQAAAOgGAMIgCAEQgEAHgGAGQgLALgOAEIgEABQgHACgHAAQgRAAgNgJg",
      );
    this.shape_48.setTransform(157, -48.2);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#EE5D02")
      .s()
      .p("AAIAVIgjhiIAMgDIArBhIgHAeIgaAig");
    this.shape_49.setTransform(121.6, -47.4);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#F06200")
      .s()
      .p("AAOgMIgvhYIAWgDIAtBiIgSBPIgaAeg");
    this.shape_50.setTransform(117.2, -44.5);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#3BF5F2")
      .s()
      .p(
        "AgfAlIgLhHQAAgHAGgBIAzAAQACAAADAGIABADIAEALIAEANIABACIANAkQABAKgKAAIg1AEIgCAAQgHAAgDgGgAghgdIAHA2IABAGQADAGAIAAIArgDQAJAAgBgJIgLgfIgDgIIgFgPIgBgDIgBgCIgDgCIgqAAQgFABABAGg",
      );
    this.shape_51.setTransform(95, -47.7);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#CBCBC3")
      .s()
      .p(
        "AgkAqIgKhRQgCgIAIgBIA4AAQAEgBADALIAEANIgDADIgEgMIgBgDQgCgGgDABIgyAAQgHAAABAIIAKBGQAEAHAIgBIA2gDQAKAAgCgKIgNglIAAgBIADgCIAPAtQACALgMAAIg7AEIgBAAQgIAAgFgHg",
      );
    this.shape_52.setTransform(95, -47.6);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#FBD800")
      .s()
      .p(
        "AhCgyIgFg8IgBgFQgBgEACgEQADgGALABIA+AAIACAAQAIAAAFAGIAEAHIADAGIALAZQAOAjALArIAAAAIAEALIAGAfIgFAKQgDgUgFgTIgDgLQgNg1gWgyQgHgSgIgDQAIADAHASQAWAyANA1IADALQAFATADAUQghA1hhAfQAHhbgLhZgAg6hmIALBTQAEAIAKgBIA7gEQALAAgBgLIgQgvIgEgOIgFgNQgDgLgEABIg4AAQgHAAABAJgABEAuIAAAAg",
      );
    this.shape_53.setTransform(96.2, -41.3);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#CACCC7")
      .s()
      .p(
        "AA4AZIgLgZIgDgDIgEgHQgFgHgIAAIgCAAIg+AAQgLAAgDAFIgDgBIAAgBQgDgNARAAIBAAAQAOgBAFAPIAOAhIADAJg",
      );
    this.shape_54.setTransform(94.4, -52.4);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#D5FDFF")
      .s()
      .p(
        "AgHAxIgNhcQgBgGAFAAQASgEAJAbQADAJACANIAFAsIAAABQAAAIgIAAIgNABQgEAAgDgBg",
      );
    this.shape_55.setTransform(85.4, -49.2);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#0D3B76")
      .s()
      .p(
        "AAQADQgCgLgDgJQgJgbgSAEQgFAAABAGIgDABIgBgIQgBgHAHAAQATgEAMAbIACAHQADAJACALIAAAAIAFAvIgEAAg",
      );
    this.shape_56.setTransform(85.4, -50.1);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#899388")
      .s()
      .p(
        "AgzAnIgSgtQgXg0gMgHQAhAOAcA8QAVAzBGgHIA4ACIABADIgbAEIgWACQgbACgcAAQgqgHgKgUg",
      );
    this.shape_57.setTransform(108.1, -61.1);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#F8D00E")
      .s()
      .p(
        "ACmAuIgPgMIgLgLQA5gVAbAsgAjOgBIAAgBIgSgNIAZgIIADgHIAIgPIAJAQIAFAIIAWAAIgNATIgCAAIAAABIAGAWIgWgKIgWALg",
      );
    this.shape_58.setTransform(152.7, -47.8);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#1270C7")
      .s()
      .p("AiWATIgIgQIgIAPIg9gBQgQgRgCgSIHrAMQgNAZkkAAIhbAAg");
    this.shape_59.setTransform(149.7, -52.8);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#093F87")
      .s()
      .p(
        "AknB4QgigbgLguIICANIBDhwIAIAAIgvBSIAEAAQAfACAXgIIAPgIIAhhEIAhAAQgbA8gpAkQg8gEghAzQgMANgWABIlNAPIgbABIAOgUIgXAAIgFgIQF9AFAPgfInrgNQACAVAQARIA9ABIgEAHIgYAHIASAOIAAAAQgZAAgQgBgAEPhcIAQgcIADAAIgPAcg",
      );
    this.shape_60.setTransform(157.5, -60.2);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#333333")
      .s()
      .p(
        "AjVAYIAAgBIgBgBQgGgLgCgLIgBgDQgBgJABgKIABgBIAAANIADAOQACAHAGALIAAAAIAAABIAAABIgBAAIgBAAgAAHAUIgBAAIADgSQABgKAAgJQACARgDATIgBABIgBAAgADZARIgBgBIAAAAIAFgQIADgOQABARgGAMIAAABIgBABIgBAAg",
      );
    this.shape_61.setTransform(71.7, -15.4);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#72CCD5")
      .s()
      .p(
        "AgpgrIAGA6QABAMgRACIhkAPgABYAGIA1glIALAfQABAIgJAAIgtADIgCAAQgHAAgCgFg",
      );
    this.shape_62.setTransform(83.5, -45.1);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f("#042A6B").s().p("AgOAAIAcgIIABAIIgdAJg");
    this.shape_63.setTransform(80.7, -37.5);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics.f("#002671").s().p("Al5AGIgMgJIMLgEIgQAPg");
    this.shape_64.setTransform(69.2, -19.5);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#82E7EF")
      .s()
      .p(
        "ABZhLIgPAaIiSB6IgRADgABKgxIgaAmIhlBQIgTAEgAAwgLIgOARIgVATQgiAgggAMgABKgxIAAAAg",
      );
    this.shape_65.setTransform(45.9, -34.5);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#9CEDF3")
      .s()
      .p("AhvBaIDfi2QgHAPgJARIiyCWQgQADgMAAIgBgDg");
    this.shape_66.setTransform(45.2, -35.9);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#FCF7F1")
      .s()
      .p("AgfgyIABANIhtBXIgMABgABjAFIAzgmIACAIIg1Alg");
    this.shape_67.setTransform(82.3, -45.7);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#32BACA")
      .s()
      .p(
        "Ai2A2IAohyQADgGAJAAIB4AAQALABADAKIABANIh3BlIgrAHIgRABQgUAAAMgNgAA9AhIgCgLQAFADARgDQAIAAAAgIIABANQABAIgIABIgLABQgKAAgBgEgACBgoQgBgHAFAAIAsAAIADABIABADIABADIAFAPIgzAmg",
      );
    this.shape_68.setTransform(78.6, -46.5);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#C5C7C4")
      .s()
      .p(
        "AiKBXIA/irQAEgMAIABIC1AAIAGACQAHAFgCAOIAKB6QgCAJgGABIjzAmIgLAAQgPAAAAgJgAhHhSIg0CZQgWAXA3gIIDHgeQAXgDgCgQIgKhxQgEgNgRgBIiaAAIgCAAQgKAAgEAIg",
      );
    this.shape_69.setTransform(69.8, -46.3);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#AFEFF1")
      .s()
      .p(
        "AhtBAIAtiHQAFgIAKAAICJAAQAOABAEAMIAJBlQACANgUADIixAbIgUACQgXAAAOgQgAg4g9IgnByQgRASAqgGIArgHIAMgBIBhgPQARgCgBgMIgGg6IgBgNIgBgNQgDgKgNgBIh1AAQgJAAgEAGg",
      );
    this.shape_70.setTransform(69.9, -46.4);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#3E433E")
      .s()
      .p(
        "AjaESIAAgBQgHgKgCgHIgCgQIgBgNIAAABQgCAJABAJIABAGQACALAGALIgBAAIgUgCQADgLABgIIAAgGQgDgQgWADIh5AAQgOgIgLgJILuACIgQAQIhJAAQgOAHgBAYIgLABIgDAAIgKAAQAFgMAAgTIgEAQIgEAQIgLAAQAAgZgqgIIhYAAQgsAFgJAeIgLABIgDAAQAEgTgDgTQABAJgCAMIgBARIgHABQAAgXghgLQhQgIg0AIQglAIAIAeIgRgCgAmyC9IBnADQCtAEDKgIQBOgCA+gGIAfgEQBiADAGgJQADgGABgMQAbgKATgMQAigfAggiIgQBJIg+A/IsLAFQgHgJgFgIgAgDkSIAAABIABAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAABIAAAHIAAABIgFA1QgFALgLABIhaASQAyhZA6gHgAAIkEIAAgDIADgMIA8AAIBfAAIAcAAQgEBGhvABIgHABQhDAAADg5g",
      );
    this.shape_71.setTransform(72.5, -40.6);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#6B756A")
      .s()
      .p(
        "AC0AcIggABIhVACQg+ABgvAGIg9AHIgrAGIgeADQCpggC/AGgAicAuIAAgBIAAgCIABAAIABAAIBZgSQALgBAGgLIAGg0IAAAAIAAgIQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCAAIAAgBIABgBIABgBIADACIADADIABAJQgCAbgFAZIAAABQgHANgMADQgrALgwAFIgBAAgACwAXIgBgBQAEgUgMg1IAAgBIAAAAIABgBIACAAIAAABQANAtgCAOIgDAQIgBABIgBgBg",
      );
    this.shape_72.setTransform(76.8, -62.9);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#383838")
      .s()
      .p(
        "AguAeIAAgOQALgHARgEQALgCAMgBIANAAIAdAAIAAAEIgEAAQgoAYgpAAIgIAAgAgSgQQAHgNAMAAIAGAAQgEASgVAGg",
      );
    this.shape_73.setTransform(84.4, -72.3);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#A9B2AD")
      .s()
      .p("AgZAJIAaAAIAZAAQgOABgLACQgPAEgLAHgAABgWIAVAAQgOAAgHANg");
    this.shape_74.setTransform(82.3, -73);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#000000")
      .s()
      .p(
        "AguAjIAAgDIAAgHQAuACArgaIAEAAIAAAfIAAADgAAFgBIgXAAIAAgJQAVgGAEgSIALAAIAAAhg",
      );
    this.shape_75.setTransform(84.4, -71.8);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#3DE4F7")
      .s()
      .p(
        "AiYBrQgEgcASgpIABgDIAPgdIABgBQAXgcAegZQgdAagVAeIgBAAQgIARgGAPQgSAtALAXIAGAJQAMANAdACIACgBIABgCQAMAAAQgCIAQgDIATgEQAfgMAkggIAUgTIAPgTIAagmIAPgYQAJgQAHgPIAFACIgOAgIAAABIgNAYIgBABIgQAbIgBAAQgMARgNAOIAAAAIgUAVQg4A2g+AIQgNABgNAAQgwgBgHgngACLhNQAFgRABgPQABgMgCgLIABAAIACgCIAAgCQgDgGgFgDIAAgBQANgBABAVIgBAQQgDASgFAQg",
      );
    this.shape_76.setTransform(43.2, -39.6);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#033067")
      .s()
      .p(
        "AkNCOIgGgJQgFgLABgPQABgdAWgsIAAAAIAFgKIANgSIgPAdIgCADQgRApAEAcQAGAnAwABQANAAANgBQA/gIA6g2IATgVIABAAQAMgOANgRIAAAAIARgbIAAgBIALgYIABgBIANggIAHgXIAAAAQAFgQAEgSIABgQQgBgVgNABIgBABIgBAAIgBgBQgJgEgRAEQAOgEALgBIABAAIABAAIACAAIABAAQAOABAEAKIACAOIAAAAQABAigRAqIAAAAQgGAQgJAQIAAABIgNAYIgBABIAAAAIgSAbIAAAAIgXAgIgIAKIgMAMIAAAAQgvAtgqAOIgjAHIgBAAIgaADIgBAAIgGAAQgiAAgPgQgAAYAEIA0iZQAFgIALAAICdAAQAQABAEANIALBzQABAQgWADIjKAcIgWACQgbAAAQgRgABViMIguCKQgTASAwgHICzgZQAUgCgBgOIgKhmQgDgMgPgBIiLAAQgKAAgEAHg",
      );
    this.shape_77.setTransform(54.9, -39.6);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#5B605A")
      .s()
      .p(
        "AlMDpIhngDQgPgKgJgNQAqARBVABQBUACB/gNID9goQAVgFATgGIgDAeIgBABQgCAWARgBIAfACIgfADQg+AHhOABQiPAHiBAAIhngCgAE9B3QgCgVgEgTIgCgJIACgDIAEgKQAVhvg1gvQheg4h9ASQiSgFh8AuIgCAAQgUAIgSAAQA+gcBGgRIABABIABAAQAwgFAqgLQANgDAGgNIAAgBQAEgbABgbIgBgJIgBgDIAEgBIAGAAIgDAMIAAACQgDA8BKgDQBvgBAEhGIARAAIAAABQALA3gDAUIAAABIABABIABgBIADgQQADgQgNgtIARAAQAKABAJADQAMAIAXAzIATAvQAKAVArAHQAdAAAagCIAxBYIgaB0QggAhgiAgQgTAMgbAJQACgXgHgygAiKh+IAegDIAsgGIA8gHQAvgGA/gBIBVgCIAfgBIg8AAQifAAiNAag",
      );
    this.shape_78.setTransform(72.6, -44.7);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f("#707270")
      .s()
      .p(
        "AhnDnIgIgBIgCAAIgMAAQgIgdAlgIQA0gJBOAJQAhALAAAWQhFAFg8AAIgpAAgAk1C8IB5AAQAWgDADAQIAAAGQgBAIgDALQhbgKgzgcgACQC9IBYAAQAqAIAAAZQhFAChyAAQAJgeAsgFgAFHC9IBJAAIgdAWQgIAGgoADIgLAAQABgYAOgHgAj/CLQhVgCgqgQQgUgaAEgmQAGg4A3g7QA4g9BYgtIAYgMQASAAAUgIIACgBQB8gtCSAEQB9gRBeA3QA1AvgVBxIgEAKIgCAEIgGggIgEgMIAAgBQgLgrgOgjIACAEIgDgJIgOgjQgFgPgOABIhCAAQgRAAADANIAAABIADAOIAFA9QALBagHBZQgTAGgVAFIj9AnQhyAMhPAAIgSAAgAl7BHQgBAQAFALIAGAIQAQASAngCIABAAIAagCIABgBIAjgHQAqgOAvgsIAAgBIAMgMIAIgKIAXgfIAAAAIASgaIAAAAIABAAIAPgbIAAgBQAJgQAGgPIAAgBQARgqgBghIAAgBIgCgNQgEgKgOgBIgBAAIgCAAIgBAAIgBAAQgLAAgQAFQgUAEggAOIgBABIgXAKQgaANgVAOQgfATgYAWQgeAagXAeIgBABIgNARIgFAKIAAAAQgWArgBAcgACOgOIAAALIAggKIgCgKgAgai6Ig/CsQAAANAagEIDzglQAHgCACgIIgLh9QACgOgGgFIABAAIAAAAIALgCIAAAAIAAAAQAaABAGAfQgGgfgagBIAAAAIAAAAIgLACIAAAAIgBAAIgGgCIi2AAIgBAAQgHAAgEAMgAC5i9QgHAAABAHIABAIIANBbIAEAWQACAFALAAIANgBQAKgBgBgKIgBgFIgBgRIgFgvIAAAAQgCgNgDgJIgCgHQgKgYgSAAIgFABg",
      );
    this.shape_79.setTransform(64.9, -36);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .lf(["#076D77", "#CCF5F7"], [0, 1], -78.2, 39.1, -64.4, 56.2)
      .s()
      .p(
        "AhgCGQgZgBgMgMIgEgHQgKgWARgqQAFgOAJgRQAlg2BCgqQAUgOAZgMIAXgLIABAAQA5gZATAHIAAAAIABAAQAEACABAEIACABIABABQACALgBAMQgBAPgFARIgHAWIjfC2IgCgBg",
      );
    this.shape_80.setTransform(43.5, -40.4);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#22EEFF")
      .s()
      .p(
        "AiHB9IgGgIQgLgXASgtQAGgPAIgRIABgBQAVgdAdgbQAZgWAegTQAUgOAZgNIAYgKIAAgBQAggOAVgEQASgFAKAFIABAAIABAAQAFADADAGIAAACIgCACIgBAAIgBAAIgCgCQgBgDgEgCIgBgBIAAAAQgTgHg5AZIgBABIgXALQgZAMgUAOQhCApglA3QgJAQgFAPQgRAqAKAVIAEAHQAMAMAZABIACABIABADIgBACIgCAAQgdgBgMgOg",
      );
    this.shape_81.setTransform(43.3, -40.4);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#46AFE8")
      .s()
      .p(
        "ADKAwIAAgSIAAgHIAAgEIAAhAIAMgDIAAA+IAAAEIAAAEIAAAIIAAASgAjUAwIgBgRIAAgGIAAgCIAAgCIAAgGIAAgCIADgSIACgMQAEgMAFgLIAEAAIAHAAIAAABQgHAPgEATIgDATIAAABIAAAEIAAAEIAAAHIAAASg",
      );
    this.shape_82.setTransform(73.3, -7.6);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#217DE0")
      .s()
      .p(
        "AkTAbQgLAAgKgCQgQgDgLgIIgGgFIgDgDIAFACQAMAFATAEQAPACATACIADABIIFgBIBKgHIhOANgAj9gFIgVgDQgPgDgKgHIgGgGIgCgCIADABQAMAFASAEQAOAEASACIADAAIApAAIAAAFgAi6gGIAAgEIGUAAIAAAEgADngLIATgBQAegDAogIIABAEIgIADQgiAGgdACIgTABg",
      );
    this.shape_83.setTransform(71.7, -4.5);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#19479F")
      .s()
      .p(
        "AkhA5QgSgEgMgKIgBAAIAAAAQgFgEgEgFIgBAAIgCgDIgBgBQgPgRAJACIAWAPQAfAMAgACIBBAAIAKAAIGUAAIANAAIAXABIBRgMQAEABgFAFQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgdAIgyAJIgFABIoRAAQgKgBgIgCgAlCAjIAGAFQALAIAQADQAJACAMABIIRAAIBOgOIhLAIIoEAAIgDAAQgTgCgPgDQgTgEgNgFIgEgCIADADgAj6AaQgJgBgIgCQgRgFgLgJIgBAAIAAAAIgJgJIAAAAIgDgBIgBgBQgNgRAIACIAUAPQAcALAgAAIArAAIAAAFIgpAAIgDAAQgSgCgOgDQgSgEgMgFIgEAAIADABIAGAFQAKAHAPAEIAUADIA4AAIAAAGgADuAZIAAgHIASgBQAegCAigHQgUAIgtAJgAizAZIAAgHIGUAAIAAAHgAizAOIAAgEIAVABIAAgBIAAgEIAAgDIAAgNIgCgMIgBgHIgDgPIAAAAIgIgBIgDAAIADgHIAIAAQBMACBegFIAIgBIABABIABAAIAAgBIADAAIALgBQByAABFgBIALAAIABABIABAAIABgBIAAgBIAKAAIADAAIALAAIgOAHIgMACIAABAgAiWgdIABAHIABAMIAAANIAAADIAAAFIAvAAIgFABIFIgCIAAg8QhFAChvAAIgPAAIgJABQhFADg7ABIgHAAIgXgBIgNAAIADAPgADuAKIASAAIBIgJIgCAAQgnAJgfACIgSABg",
      );
    this.shape_84.setTransform(71, -7.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
            { t: this.instance_3 },
          ],
        })
        .wait(22),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -92.3, 205.2, 91.3);

  (lib.Symbol1_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance_8 = new lib.mc_backFand("synched", 0);
    this.instance_8.setTransform(68.9, 21.9, 1, 1, 0, 0, 0, 16, 16);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f().s("#E9A00A").ss(0.5, 1, 1).p("AArAJQgmgigvAh");
    this.shape_44.setTransform(40.2, 33.6);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics.f().s("#EF3216").ss(0.5, 1, 1).p("AAzgWQgzACgyAr");
    this.shape_45.setTransform(56.5, 39.9);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f().s("#990202").ss(0.5, 1, 1).p("Ag1AVQA4goAzgB");
    this.shape_46.setTransform(56.1, 39);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics.f().s("#010F2C").ss(0.5, 1, 1).p("Ag0AmIBphK");
    this.shape_47.setTransform(55.7, 36.9);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f()
      .s("#B6B9B5")
      .ss(1, 1, 1)
      .p("AgDgMIgFgGIAAgCIAHgGAgGAbIAMgJIADgB");
    this.shape_48.setTransform(62, 35);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f()
      .s("#000000")
      .ss(0.5, 1, 1)
      .p("Ag7AVIABAAAA8gUQgFAAgGAAAAxgOIgEAD");
    this.shape_49.setTransform(56.6, 39);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f()
      .s("#C68809")
      .ss(0.5, 1, 1)
      .p("AArAPIAPgEIgCgJIgVgXIhdAXIABAFIAPAHIANAI");
    this.shape_50.setTransform(40.2, 33);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f()
      .s("#5B605A")
      .ss(1, 1, 1)
      .p(
        "AE3A9QgPgngfgtQgcgQAEgaIAFglIAFgkIACgQIACgMIACgQIAEgmIhjAaIgLApIgFAQIgCAMIgFARIgjB9ImeBkAjWDdIEShbIASAIIA4gPIAsBGIAMgKIABABIADAFIAIAMIAFAKIBhg6",
      );
    this.shape_51.setTransform(31.2, 22.2);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#F8D00E").s().p("AgdAIIgNgIQAvghAmAiIg2APg");
    this.shape_52.setTransform(40.2, 34.4);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#1270C7")
      .s()
      .p("AiHA6QgcgGgYgKIgLgGIGNheQgEAYjDA4IhqAcIgdAJIAAgBg");
    this.shape_53.setTransform(21.1, 30.7);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#BA0204")
      .s()
      .p("Ag2APIABAAQA4goAzgBIAAAHQgyACgyArg");
    this.shape_54.setTransform(56.1, 39.6);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#580000")
      .s()
      .p("Ag9AjIBphKIAEAHIgEAcIATADIgDABIgLAAQgxAAg6Aog");
    this.shape_55.setTransform(56.6, 37.1);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics.f("#F25039").s().p("AgyASQAygrAzgCIhfA3g");
    this.shape_56.setTransform(56.5, 40.4);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#EDA40A")
      .s()
      .p("AgqASIgPgIIgBgFIBegWIAUAWIACAJIgOAFQgmgigwAhg");
    this.shape_57.setTransform(40.2, 32.7);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#03205C")
      .s()
      .p(
        "AkKB9IgEgPIE/hmQAUgGAJgNQASg7A7gMIgLAUIAGgCQAkgmAUg7IgFAlQgEAaAcAQQAfAvAPAlIgGAnIgHAHIABABIhsBMIgBgBIgMAKIgshGIAPgEIgCgJIgVgZIhdAZIABAFIANAHIANAIIkSBbIgMglg",
      );
    this.shape_58.setTransform(35.1, 28.1);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics.f("#003267").s().p("AgFgDIANgDIgCAKIgNADg");
    this.shape_59.setTransform(55.8, 6.3);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#02276E")
      .s()
      .p(
        "AAIA4QAegtAKhAIAQgEIgFAkQgUA5gkAmIgEACgAgngdIAEgRIADgLIAEgRIAEgBIgFARIgCALIgEARIgYBbIgEAAg",
      );
    this.shape_60.setTransform(49.9, 14.1);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics.f("#9A0A02").s().p("AgGAGIABgKIANgEIgBANIgOAEg");
    this.shape_61.setTransform(55.6, 7.6);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#E74994")
      .s()
      .p("AgaAMIAzgMIgDAOIg0APgAgTgOIAygOIgEARIgyAMg");
    this.shape_62.setTransform(49.3, 8);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#BA0300")
      .s()
      .p(
        "AgrAGIAHgCIgEARIgIACgAASgJIAfgIIgBANIgBADIggAGgAgkgUIAHgCIgFARIgHACg",
      );
    this.shape_63.setTransform(50, 8.9);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#093F87")
      .s()
      .p(
        "AjHCaIAegJIBqgcQDDg6AEgYImOBgIgKgEIGehkIAih9IAIgCIgYBcIAEAAQAfgHATgNQAIgGAFgGIAPhMIAfgIQgKBCgeAtQg7AMgTA5QgJAPgUAGIk/BmIgGgZgADLixIADgBIgHAgIgEABg",
      );
    this.shape_64.setTransform(27.4, 21.2);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#0A4386")
      .s()
      .p("AgsAGIAHgBIgCALIgIACgAARgIIAfgJIgCAMIgfAGg");
    this.shape_65.setTransform(50.4, 7.7);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#167CD1")
      .s()
      .p(
        "AgUgBIA0gPIgPBKQgFAGgHAGQgSANgfAHgAgNgdIAygOIgCALIgzAOgAgBhOIAogLQAEAAACACIgEAbIgyAOg",
      );
    this.shape_66.setTransform(48.4, 11.2);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#0B2D75")
      .s()
      .p("AgrgGIBigaIgFAlIgsALIAFgZQgDgCgEABIgoAKIgDAAIgIAfIgHACg");
    this.shape_67.setTransform(51.8, 3.4);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics.f("#8F0100").s().p("AgTgBIAqgMIgCAOIgPAEIgcAJg");
    this.shape_68.setTransform(54.5, 5.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
            { t: this.instance_8 },
          ],
        })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 86.6, 46.4);

  (lib.mc_Helicopter = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.instance = new lib.mc_Helicopter1_1();
    this.instance.setTransform(94.5, 36.3, 0.638, 0.638, 0, 0, 180);

    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#8A0000")
      .s()
      .p("AgDAAQABgCACAAIAAAAQADAAABACQgBADgDABQgCgBgBgDg");
    this.shape.setTransform(-1.4, -10.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgJAEIAAgEQAKAAAJgDIAAAHg");
    this.shape_1.setTransform(42.3, -9.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#A9B2AD").s().p("AgHAAIAAgEIAQAAQgLAEgFAFg");
    this.shape_2.setTransform(42.1, -10.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#383838")
      .s()
      .p("AgJAGIAAgDQAFgFALgEIADAAIAAAIQgJAEgKABg");
    this.shape_3.setTransform(42.3, -10.3);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#840701")
      .s()
      .p("Ah/AEIAAgHIBkAAQgEABAAACQAAADAEAAQAEAAAAgDQAAgCgEgBICbAAIAAAHg");
    this.shape_4.setTransform(1.5, -10.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#808080").s().p("AiFAEIAAgHIELAAIAAAEIAAADg");
    this.shape_5.setTransform(27.8, -10.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#961004").s().p("Ah+AEIAAgHID9AAIAAAHg");
    this.shape_6.setTransform(85.3, -10.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#808080").s().p("AiFAEIAAgHIELAAIAAAHg");
    this.shape_7.setTransform(59, -10.1);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#383838").s().p("AgGgEIANAAQgFAFgIAEg");
    this.shape_8.setTransform(44.1, -10.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p("AgKAAQAKgCADgGIAHAAIAAAFIABAIIAAAEIgUAAg");
    this.shape_9.setTransform(44.5, -10.1);

    this.instance_1 = new lib.Symbol1_1("synched", 0);
    this.instance_1.setTransform(
      -18.9,
      30.6,
      0.596,
      0.646,
      0,
      -16.9,
      160.5,
      42.1,
      22.1,
    );

    this.instance_2 = new lib.Symbol6("synched", 0);
    this.instance_2.setTransform(
      67.8,
      14.6,
      0.594,
      0.648,
      0,
      9.8,
      -168.7,
      17.8,
      12.5,
    );
    this.instance_2.alpha = 0;

    this.instance_3 = new lib.mc_02("synched", 0);
    this.instance_3.setTransform(
      67.6,
      14.6,
      0.594,
      0.648,
      0,
      9.8,
      -168.7,
      17.3,
      13,
    );

    this.instance_4 = new lib.mc_01("synched", 0);
    this.instance_4.setTransform(
      44.9,
      15.8,
      0.594,
      0.648,
      0,
      9.8,
      -168.7,
      57.6,
      37.8,
    );

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance, p: { y: 36.3 } }] })
        .to({ state: [{ t: this.instance, p: { y: 38.9 } }] }, 2)
        .to(
          {
            state: [
              { t: this.instance_4 },
              { t: this.instance_3 },
              { t: this.instance_2 },
              { t: this.instance_1 },
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
          },
          2,
        )
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-35.9, -22.6, 130.4, 58.3);

  // stage content:
  (lib.Flyingyourhelicopter = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.mc_bg("synched", 0);
    this.instance.setTransform(569.3, 417.8, 1, 1, 0, 0, 0, 971.3, 628.4);

    this.instance_1 = new lib.mc_Helicoptercopy();
    this.instance_1.setTransform(
      310.8,
      370.5,
      1.736,
      1.736,
      0,
      0,
      0,
      53.5,
      49.6,
    );

    this.instance_2 = new lib.mc_Helicopter();
    this.instance_2.setTransform(
      589.5,
      373.2,
      1.736,
      1.736,
      0,
      0,
      0,
      53.5,
      49.6,
    );

    this.instance_3 = new lib.Symbol8();
    this.instance_3.setTransform(512, 758.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(512, 404, 1662, 808);
})(
  (lib = lib || {}),
  (images = images || {}),
  (createjs = createjs || {}),
  (ss = ss || {}),
);
var lib, images, createjs, ss;
