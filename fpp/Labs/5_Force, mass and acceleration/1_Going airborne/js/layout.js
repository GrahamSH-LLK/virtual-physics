var layout = {
	background:[{
		name:"bg",
		namespace:"lib",
		type:"mc_bg",
		transform:[569.3,417.8,1,1,0,0,0,971.3,628.4]
	}
	],
	foreground:[
		{
			name:"helicopter",
			namespace:"lib",
			type:"mc_Helicoptercopy",
			//transform:[290,420,1.5,1.5,0,0,0,53.5,49.6],
		},{
			name:"helicopterBreak",
			namespace:"lib",
			type:"mc_Helicopter",
			transform:[290,420,1.5,1.5,0,0,0,53.5,49.6],
		},{
			name:"popup",
			namespace:"lib",
			type:"popup",
			transform:[235.4,707.3,1,1,0,0,0,-8.1,15.3],
		},{
			name:"patch",
			namespace:"lib",
			type:"Symbol8",
			transform:[512,758.8]
		},{
			name:"velocity",
			namespace:"createjs",
			type:"Text",
			props:{
				x:368,
				y:735,
				font:"bold 16px Arial",
				color:"White",
				text:"0.00",
				textAlign:"center"
			}
		},{
			name:"accleration",
			type:"Text",
			namespace:"createjs",
			props:{
				x:368,
				y:770,
				font:"bold 16px Arial",
				color:"White",
				text:"0.00",
				textAlign:"center"
			}
		},{
			name:"height",
			namespace:"createjs",
			type:"Text",
			props:{
				x:144,
				y:752,
				font:"bold 16px Arial",
				color:"White",
				text:"0.00",
				textAlign:"center"
			}
		},{
			name:"force",
			namespace:"createjs",
			type:"Text",
			props:{
				x:654,
				y:751,
				font:"bold 19px Arial",
				color:"black",
				text:"0",
				textAlign:"center"
			}
		},{
			name:"resetButton",
			type:"Button",
			up:"replayIconN",
			over:"replayIconO",
			down:"replayIconC",
			props:{
				x:938,
				y:728,
				scaleX:0.5 * 1.25,
				scaleY:0.5 * 1.25,
			}
		},{
			name:"stepper",
			type:"NumericStepper",
			value:0,
			min:-200000,
			max:30000,
			step:250,
			inc:{
				up:"incN",
				over:"incO",
				down:"incD",
			},
			dec:{
				up:"decN",
				over:"decO",
				down:"decD",
			},
			gap:1,
			props:{
				x:562,
				y:723,
				scaleX:0.6,
				scaleY:0.6,
			}
		},
	]
}