var layout = {
  background: [
    {
      name: "bg",
      namespace: "lib",
      type: "mc_bg",
    },
    {
      name: "patch",
      namespace: "lib",
      type: "mc_patch",
      transform: [767.9, 743.1, 1, 1, 0, 0, 0, -165.3, 0],
    },
  ],
  foreground: [
    {
      name: "molecule1",
      namespace: "lib",
      type: "mc_blue",
      props: {
        x: 100,
        y: 100,
        regX: 13.8,
        regY: 13.8,
        scaleX: 0.7,
        scaleY: 0.7,
      },
      // cache:{x:0, y:0, width:50, height:50}
    },
    {
      name: "barbg",
      namespace: "lib",
      type: "mc_chart",
      transform: [171.9, 567.4, 1, 1, 0, 0, 0, 153.7, 86.9],
    },
    {
      name: "barShape",
      namespace: "createjs",
      type: "Shape",
      props: {
        x: 73,
        y: 635,
      },
    },
    {
      name: "resetButton",
      type: "Button",
      up: "replayIconN",
      over: "replayIconO",
      down: "replayIconC",
      props: {
        x: 940,
        y: 713,
        scaleX: 0.6,
        scaleY: 0.6,
      },
    },
    {
      name: "pauseButton",
      type: "Button",
      up: "pauseIconN",
      over: "pauseIconO",
      down: "pauseIconC",
      props: {
        x: 866,
        y: 713,
        scaleX: 0.6,
        scaleY: 0.6,
      },
    },
    {
      name: "playButton",
      type: "Button",
      up: "playIconN",
      over: "playIconO",
      down: "playIconC",
      props: {
        x: 866,
        y: 713,
        scaleX: 0.6,
        scaleY: 0.6,
        visible: false,
      },
    },
  ],
};
