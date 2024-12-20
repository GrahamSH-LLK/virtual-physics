var layout = {
  background: [
    {
      name: "bg",
      namespace: "lib",
      type: "Bg",
      transform: [512, 404, 1, 1, 0, 0, 0, 512, 404],
    },
    {
      name: "hole1",
      namespace: "lib",
      type: "khadda",
      props: {
        x: 102,
        y: 580,
        scaleX: -0.7,
        scaleY: 0.72,
      },
    },
    {
      name: "patch",
      namespace: "lib",
      type: "Symbol4copy3",
      transform: [640.1, 758.7, 1.25, 1.25, 0, 0, 0, 512.1, 31.5],
    },
  ],
  foreground: [
    {
      name: "insText1",
      namespace: "createjs",
      type: "Text",
      props: {
        x: 400,
        y: 759,
        font: "bold 18px Arial",
        text: "Vertical firing velocity",
        color: "white",
        textBaseline: "middle",
      },
    },
    {
      name: "insText2",
      namespace: "createjs",
      type: "Text",
      props: {
        x: 400,
        y: 679,
        font: "bold 18px Arial",
        text: "Horizontal firing velocity",
        textBaseline: "middle",
        color: "white",
      },
    },
    {
      name: "vSpeedUnit",
      namespace: "createjs",
      type: "Text",
      props: {
        x: 751,
        y: 759,
        font: "bold 18px Arial",
        text: "m/s",
        textBaseline: "middle",
        textAlign: "center",
        color: "white",
      },
    },
    {
      name: "vSpeedText",
      namespace: "createjs",
      type: "Text",
      props: {
        x: 700,
        y: 759,
        font: "bold 18px Arial",
        text: "5.0",
        textBaseline: "middle",
        textAlign: "center",
      },
    },
    {
      name: "hSpeedUnit",
      namespace: "createjs",
      type: "Text",
      props: {
        x: 751,
        y: 679,
        font: "bold 18px Arial",
        text: "m/s",
        textBaseline: "middle",
        textAlign: "center",
        color: "white",
      },
    },
    {
      name: "hSpeedText",
      namespace: "createjs",
      type: "Text",
      props: {
        x: 700,
        y: 680,
        font: "bold 18px Arial",
        text: "5.0",
        textBaseline: "middle",
        textAlign: "center",
      },
    } /* ,{
			name:"fireButton",
			type:"Button",
			up:"fireIconN",
			over:"fireIconO",
			down:"fireIconC",
			props:{
				x:713,
				y:688,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		} */,
    {
      name: "resetButton",
      type: "Button",
      up: "replayIconN",
      over: "replayIconO",
      down: "replayIconC",
      props: {
        x: 938,
        y: 688,
        scaleX: 0.5 * 1.25,
        scaleY: 0.5 * 1.25,
      },
    },
    {
      name: "pauseButton",
      type: "Button",
      up: "pauseIconN",
      over: "pauseIconO",
      down: "pauseIconC",
      props: {
        x: 865,
        y: 688,
        scaleX: 0.5 * 1.25,
        scaleY: 0.5 * 1.25,
      },
    },
    {
      name: "playButton",
      type: "Button",
      up: "playIconN",
      over: "playIconO",
      down: "playIconC",
      props: {
        x: 865,
        y: 688,
        scaleX: 0.5 * 1.25,
        scaleY: 0.5 * 1.25,
        visible: false,
      },
    },
    {
      name: "hSpeedStepper",
      type: "NumericStepper",
      min: 0,
      max: 86.6,
      step: 0.1,
      value: 1,
      inc: {
        up: "incN",
        over: "incO",
        down: "incD",
      },
      dec: {
        up: "decN",
        over: "decO",
        down: "decD",
      },
      gap: 1,
      props: {
        x: 619,
        y: 643,
        scaleX: 0.5 * 1.25,
        scaleY: 0.5 * 1.25,
      },
    },
    {
      name: "vSpeedStepper",
      type: "NumericStepper",
      min: 15,
      max: 50,
      step: 0.1,
      value: 15,
      inc: {
        up: "incN",
        over: "incO",
        down: "incD",
      },
      dec: {
        up: "decN",
        over: "decO",
        down: "decD",
      },
      gap: 1,
      props: {
        x: 619,
        y: 723,
        scaleX: 0.5 * 1.25,
        scaleY: 0.5 * 1.25,
      },
    },
    {
      name: "arrow1",
      type: "Bitmap",
      namespace: "createjs",
      img: "arrow1",
      props: {
        x: 100,
        y: 185,
        regX: 14,
        regY: 14,
        scaleX: 0.5 * 1.34,
        scaleY: 0.5 * 1.34,
      },
    },
    {
      name: "arrow1Line",
      type: "Shape",
      namespace: "createjs",
    },
    {
      name: "canonBall1",
      type: "Bitmap",
      namespace: "createjs",
      img: "canonBall",
      props: {
        x: 270,
        y: 187,
        regY: 11.5,
        regX: 11.5,
        scaleX: 0.5,
        scaleY: 0.5,
      },
    },
    {
      name: "cannon1",
      type: "Cannon_Iron",
      namespace: "lib",
      props: {
        x: 90,
        y: 575,
        scaleX: -1.4,
        scaleY: 1.4,
        regX: -4,
        regY: -13,
        _defAngle: 0,
      },
    },
    {
      name: "line1",
      type: "Line1",
      namespace: "lib",
      transform: [490, 580.7, 1, 1, 0, 0, 0, 445.7, 29.9],
    },
    {
      name: "textcont",
      type: "Container",
      namespace: "createjs",
      props: {
        x: -475,
        y: -31,
      },
      children: [
        {
          name: "text1",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 588,
            y: 724,
            font: "bold 18px Arial",
            text: "Vertical",
            color: "white",
            textBaseline: "middle",
            textAlign: "center",
          },
        },
        {
          name: "text4",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 608,
            y: 750,
            font: "bold 18px Arial",
            text: "m/s",
            color: "white",
            textBaseline: "middle",
            textAlign: "center",
          },
        },
        {
          name: "text5",
          type: "SSText",
          props: {
            x: 593,
            y: 768,
            color: "white",
            text: "m/s^2",
          },
          fonts: ["bold 18px Arial", "bold 12px Arial"],
          hgap: 1,
        },
        {
          name: "text6",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 715,
            y: 750,
            font: "bold 18px Arial",
            text: "m/s",
            color: "white",
            textBaseline: "middle",
            textAlign: "center",
          },
        },
        {
          name: "text7",
          type: "SSText",
          props: {
            x: 700,
            y: 768,
            color: "white",
            text: "m/s^2",
          },
          fonts: ["bold 18px Arial", "bold 12px Arial"],
          hgap: 1,
        },
        {
          name: "text3",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 522,
            y: 751,
            font: "italic bold 18px Arial",
            text: "v a",
            lineWidth: 10,
            lineHeight: 27,
            color: "white",
            textBaseline: "middle",
            textAlign: "center",
          },
        },
        {
          name: "text2",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 697,
            y: 724,
            font: "bold 18px Arial",
            text: "Horizontal",
            color: "white",
            textBaseline: "middle",
            textAlign: "center",
          },
        },
        {
          name: "txtVy",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 568,
            y: 751,
            font: "bold 18px Arial",
            text: "15.2",
            textBaseline: "middle",
            color: "#fff",
            textAlign: "center",
          },
        },
        {
          name: "txtAy",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 568,
            y: 778,
            font: "bold 18px Arial",
            text: "9.2",
            textBaseline: "middle",
            color: "#fff",
            textAlign: "center",
          },
        },
        {
          name: "txtVx",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 676,
            y: 751,
            font: "bold 18px Arial",
            text: "---",
            textBaseline: "middle",
            color: "white",
            textAlign: "center",
          },
        },
        {
          name: "txtAx",
          namespace: "createjs",
          type: "Text",
          props: {
            x: 676,
            y: 778,
            font: "bold 18px Arial",
            text: "---",
            textBaseline: "middle",
            color: "white",
            textAlign: "center",
          },
        },
      ],
    },
    {
      name: "timeText",
      namespace: "createjs",
      type: "Text",
      props: {
        x: 334,
        y: 719,
        font: "bold 18px Arial",
        text: "5.0",
        color: "#fff",
        textBaseline: "middle",
        textAlign: "center",
      },
    } /* */,
  ],
};
