//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {};
game.actPath = '';
game.sharedPath = '';
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){		
	CAAT.DEBUG = 0;
	game.mainEleImg = [];
					//image_id, image_X_Position, image_Y_Position
	game.mainEleImg[game.mainEleImg.length] = ['grid',  	0,   0];	
		
	var assets = [
		{id:'grid', url:game.actPath+'wvSupGrid.gif'},
		{id:'s11Lbl', url:game.actPath+'s11Lbl.gif'},
		{id:'dashBG', url:game.sharedPath+'dash.gif'},
		{id:'wellleft2', url:game.sharedPath+'wellleft2.gif'},
		{id:'well100b', url:game.sharedPath+'well100b.gif'},
		{id:'well50b', url:game.sharedPath+'well50b.gif'},
		{id:'wellright2', url:game.sharedPath+'wellright2.gif'},
		{id:'buttons', url:game.sharedPath+'buttons.png'},
		{id:'banner', url:game.sharedPath+'banner.png'},
		{id:'sliderPath', url:game.sharedPath+'slider_18_13.png'},
		{id:'sliderKnob', url:game.sharedPath+'horizThumb.gif'}
	];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		750, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
	//
	// Timer collapses are fixed by freezing the activity
	//
	CAAT.bindEvent(window, 'blur', function (event) {
		if(game.gameStatus == 'started') {
			game.pauseBtnMDownHandler();
		}
	}, false);
}

game.Cleanup = function(){
	CAAT.clearEvents();
    CAAT.currentDirector.clean();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function( cont, startIndex, endIndex ){
	game.mainContainerActors = [];
	var _director = game.getDirector();
	for(var i=startIndex; i<endIndex; i++) {
		var thisActor = game.__addImageOnScene( _director.getImage(game.mainEleImg[i][0]), 1, 1 );		
		thisActor.
			centerOn(thisActor.width/2, thisActor.height/2).
			setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
		cont.addChild( thisActor );	
		game.mainContainerActors.push(thisActor);
	}
}

game.__gameInitialize = function( director ){		
	var _scene = director.createScene();		
	game.getDirector = function() { return director; };
	game.getScene = function() { return _scene; };		
	var cont = game.createPanels( director, _scene );
	game.__createMainImgScene( cont[0], 0, 1);	
	game.createGraphContainer(director, _scene, cont[0]);
	game.__createBannerContainer(cont[0]);
	CAAT.loop(60);
}