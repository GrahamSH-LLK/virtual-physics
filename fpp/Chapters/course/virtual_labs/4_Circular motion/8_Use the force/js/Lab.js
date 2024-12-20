var Lab = (function () {
  var scope = this;

  function Activity() {
    createjs.Container.call(this);
    this.car1 = new control();
    this.car2 = new control();

    this.Track1 = [
      {
        center: { x: 683, y: 319 },
        radius: 9.6,
      },
      {
        center: { x: 333, y: 547 },
        radius: 10.4,
      },
    ];
    this.Track2 = [
      {
        center: { x: 683, y: 319 },
        radius: 9.6,
      },
      {
        center: { x: 333, y: 547 },
        radius: 10.4,
      },
    ];
    this.won = false;
    this.cars = {
      redCar: {
        name: "redCar",
        x: 437,
        y: 210.5,
        maxAcceleration: 7.59,
        maxVelocity: 0,
        velocity: 0,
        velocityX: 0,
        velocityY: 0,
        accelerationX: 0,
        accelerationY: 0,
        accelerating: false,
        displacementX: 437,
        displacementY: 210.5,
        movingStraight: true,
        angle: 0,
        position: 0,
        finalVelocity: 0,
        centripetalAcc: 0,
        startConditions: false,
        animation: "redCarAnimation",
        reached: false,
      },
      purpleCar: {
        name: "purpleCar",
        x: 437,
        y: 182,
        maxAcceleration: 17.59,
        maxVelocity: 8.25,
        velocity: 0,
        velocityX: 0,
        velocityY: 0,
        accelerationX: 0,
        accelerationY: 0,
        accelerating: false,
        displacementX: 437,
        displacementY: 182,
        movingStraight: true,
        angle: 0,
        position: 0,
        finalVelocity: 8.25,
        centripetalAcc: 0,
        startConditions: false,
        animation: "purpleCarAnimation",
        reached: false,
      },
    };

    this.init = false;
    this.running = false;
    this.centripetalAcc = 0;
  }

  Activity.prototype = Object.create(createjs.Container.prototype);
  Activity.prototype.constructor = Activity;
  Activity.prototype.startLab = function () {
    var scope = this;

    this._reset = this.reset.bind(this);
    this._play = play.bind(this);
    this._pause = pause.bind(this);
    this._keydown = keydown.bind(this);
    this._keyup = keyup.bind(this);

    this.layout.line3.graphics
      .setStrokeStyle(2)
      .beginStroke("black")
      .moveTo(0, 0)
      .lineTo(45, 0)
      .endStroke();
    this.layout.line4.graphics
      .setStrokeStyle(2)
      .beginStroke("black")
      .moveTo(0, 0)
      .lineTo(0, 37)
      .endStroke();

    scope.layout.needle1.snapToPixel = false;
    scope.layout.needle2.snapToPixel = false;
    this.layout.resetButton.addEventListener("click", this._reset);
    this.layout.playButton.addEventListener("click", this._play);
    this.layout.pauseButton.addEventListener("click", this._pause);
    this.layout.stepper.addEventListener("valueChange", function (e) {
      scope.layout.speed.text = e.currentTarget.value.toFixed(1);

      scope.cars.redCar.maxVelocity = e.currentTarget.value;
    });

    this.reset();

    this.layout.redCar.snapToPixel = false;
    this.layout.purpleCar.snapToPixel = false;
  };

  function keydown(e) {
    if (e.keyCode == 38) {
      this.layout.stepper.handleEvent({
        type: "mousedown",
        currentTarget: this.layout.stepper._inc,
      });
    } else if (e.keyCode == 40) {
      this.layout.stepper.handleEvent({
        type: "mousedown",
        currentTarget: this.layout.stepper._dec,
      });
    }
  }

  function keyup(e) {
    this.layout.stepper.handleEvent({});
  }

  Activity.prototype.reset = function () {
    document.removeEventListener("keydown", this._keydown);
    document.removeEventListener("keyup", this._keyup);
    this._keyup();

    this.layout.line1.graphics.clear();
    this.layout.line2.graphics.clear();
    this.layout.xVelocity.text = "0.0";
    this.layout.yVelocity.text = "0.0";
    this.car1.reset();
    var scope = this;
    this.won = false;
    this.init = false;
    this.car1._pause();
    this.car2._pause();
    for (var name in this.cars) {
      this.cars[name].velocity = 0;
      this.cars[name].velocityY = 0;
      this.cars[name].accelerationX = 0;
      this.cars[name].accelerationY = 0;
      this.cars[name].accelerating = false;
      this.cars[name].movingStraight = true;
      this.cars[name].position = 0;
      this.cars[name].centripetalAcc = 0;
    }

    this.layout.redCrash.visible = false;
    // control.running=false;

    this.layout.redCar.x = this.cars.redCar.x;
    this.layout.redCar.y = this.cars.redCar.y;
    this.layout.redCar.rotation = 0;
    this.layout.redCrash.visible = false;
    this.layout.redCar.visible = true;
    this.layout.redCarAnimation.gotoAndStop(0);
    this.layout.purpleCarAnimation.gotoAndStop(0);

    this.layout.speedometer1.value = 0;
    this.layout.speedometer2.value = 0;

    this.layout.purpleCar.x = this.cars.purpleCar.x;
    this.layout.purpleCar.y = this.cars.purpleCar.y;
    (this.layout.purpleCar.rotation = 0),
      (scope.layout.redCarAnimation.visible = false);
    scope.layout.purpleCarAnimation.visible = false;

    scope.layout.stepper.enable();

    scope.layout.resetButton.enable();

    scope.layout.playButton.enable().visible = true;
    scope.layout.pauseButton.disable().visible = false;

    document.addEventListener("keydown", this._keydown);
    document.addEventListener("keyup", this._keyup);
  };

  function play() {
    if (!this.init) {
      var c1 = this.cars.redCar;
      var c2 = this.cars.purpleCar;
      c1.track = this.Track1;
      c2.track = this.Track2;
      this.cars.redCar.finalVelocity = this.cars.redCar.maxVelocity;
      this.car1._initialize(
        c1.name,
        c1.maxAcceleration,
        c1.maxVelocity,
        c1.velocity,
        c1.finalVelocity,
        c1.velocityX,
        c1.displacementX,
        c1.displacementY,
        c1.angle,
        c1.track,
        c1.animation,
      );
      this.car2._initialize(
        c2.name,
        c2.maxAcceleration,
        c2.maxVelocity,
        c2.velocity,
        c2.finalVelocity,
        c2.velocityX,
        c2.displacementX,
        c2.displacementY,
        c2.angle,
        c2.track,
        c2.animation,
      );
      this.init = true;
    }
    this.layout.stepper.disable();
    document.removeEventListener("keydown", this._keydown);
    document.removeEventListener("keyup", this._keyup);
    this._keyup();

    if (!this.cars.redCar.reached) {
      this.car1._play();
    }
    this.car2._play();
    this.layout.playButton.disable().visible = false;
    this.layout.pauseButton.enable().visible = true;
    this.layout.resetButton.enable();
  }
  function pause() {
    this.layout.pauseButton.disable().visible = false;
    this.layout.playButton.enable().visible = true;
    this.car1._pause();
    this.car2._pause();
  }

  return Activity;
})();

//=========================================================================================================================================

var control = function () {
  var timeStep = 0.19;
  this.diffTime = 0;
  this.time = 0;
  this.turnStartTime = 0;
  this._initialize = initialize.bind(this);
  this._updateState = updateState.bind(this);
  this._play = play.bind(this);
  this._checkSpeed = checkSpeed.bind(this);
  this._crash = crash.bind(this);
  this._pause = pause.bind(this);
  this.reset = reset.bind(this);
  this._startConditions = startConditions.bind(this);
  this.running = false;
  this.crash = false;
  this.TOTALPATHS = 2;
  this.redPatchEnd = 671;
  this.flag = false;

  function initialize(
    name,
    maxAcceleration,
    maxVelocity,
    velocity,
    finalVelocity,
    velocityX,
    displacementX,
    displacementY,
    angle,
    track,
    animation,
  ) {
    this.name = name;
    this.maxAcceleration = maxAcceleration;
    this.maxVelocity = maxVelocity;
    this.velocity = velocity;
    this.velocityX = velocityX;
    this.velocityY = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.accelerating = false;
    this.displacementX = displacementX;
    this.displacementY = displacementY;
    this.movingStraight = true;
    this.angle = angle;
    this.position = 0;
    this.radius = 0;
    this.finalVelocity = finalVelocity;
    this.centripetalAcc = 0;
    this.startCondition = false;
    this.track = track;
    this.animation = animation;

    // createjs.Ticker.addEventListener("tick", this._updateState);
  }

  function play() {
    this.running = true;
    createjs.Ticker.addEventListener("tick", this._updateState);
  }

  function pause() {
    this.running = false;
    createjs.Ticker.removeEventListener("tick", this._updateState);
  }

  function reset() {
    lab.cars["redCar"].reached = false;
    lab.cars["purpleCar"].reached = false;
    this.running = false;
    this.crash = false;
    this.flag = false;
    this.diffTime = 0;
    this.time = 0;
    this.turnStartTime = 0;
  }

  function updateState() {
    for (var i = 0; i < 2; i++) {
      var scope = this;
      if (this.name == "redCar") {
        lab.layout.speedometer1.value = Math.abs(this.velocity);
        lab.layout.xVelocity.text = this.velocityX.toFixed(1);
        this.temp = -this.velocityY;
        lab.layout.yVelocity.text = this.temp.toFixed(1);
        lab.layout.line2.graphics
          .clear()
          .setStrokeStyle(34)
          .beginStroke("red")
          .moveTo(0, 0)
          .lineTo(this.velocityX, 0)
          .endStroke();
        lab.layout.line1.graphics
          .clear()
          .setStrokeStyle(42)
          .beginStroke("red")
          .moveTo(0, 0)
          .lineTo(0, this.velocityY)
          .endStroke();
      }
      this.time = this.time + timeStep;
      if (this.position > 1 && this.displacementX > 615) {
        if (this.name == "redCar") {
          lab._pause();
          lab.cars[this.name].reached = true;
          lab.cars["purpleCar"].reached = true;
        } else {
          this._pause();
          lab.cars[this.name].reached = true;
        }
        lab.layout.yVelocity.text = "0.0";
        if (lab.cars.redCar.reached && lab.cars.purpleCar.reached) {
          lab.layout.playButton.disable().visible = false;
          lab.layout.pauseButton.disable().visible = true;
        }
        lab.layout[this.name].x = 616;
        if (lab.won == false) {
          lab.won = true;
          lab.layout[this.animation].visible = true;
          lab.layout[this.animation].uncache();
          lab.layout[this.animation].addEventListener("end", function () {
            lab.layout[scope.animation].removeAllEventListeners("end");
            lab.layout[scope.animation].cache(-200, -200, 500, 500);
            return;
          });
          lab.layout[this.animation].play();
          lab.layout[this.animation].loop = false;
        }
        return;
      }
      if (this.running) {
        if (!this.startCondition) {
          this._startConditions();
        }
        if (this.movingStraight == true) {
          if (this.velocityX < this.finalVelocity) {
            this.velocityX =
              this.velocityX + this.accelerationX * timeStep * 0.1;
          } else {
            this.velocityX = this.finalVelocity;
          }

          if (this.crash) {
            return false;
          }
          if (this.accelerating && this.velocityX >= this.maxVelocity) {
            this.accelerating = false;
          }
          if (this.name == "redCar") {
            lab.layout.speedometer2.value = this.accelerationX;
          }
          this.displacementX = this.displacementX + this.velocityX * timeStep;
          lab.layout[this.name].x = this.displacementX;

          if (this.flag == true) {
            this.displacementY = this.displacementY + this.velocityY * timeStep;
            lab.layout[this.name].y = this.displacementY;
          }

          if (this.name == "redCar" && this.flag == true) {
            if (lab.layout.redCar.x > 863) {
              lab.layout.redCrash.rotation = lab.layout.redCar.rotation - 70;
              lab.layout.redCrash.x = lab.layout.redCar.x;
              lab.layout.redCrash.y = lab.layout.redCar.y;
              lab.layout.redCrash.visible = true;
              lab.layout.redCar.visible = false;
              lab.layout.redCrash.uncache();
              lab.layout.redCrash.addEventListener("end", function () {
                lab.layout.redCrash.removeAllEventListeners("end");
                lab.layout.redCrash.cache(0, 0, 50, 30);
                return;
              });
              lab.layout.redCrash.gotoAndPlay(0);
              lab.layout.redCrash.loop = false;
              lab.car1._pause();
              lab.layout.line1.graphics.clear();
              lab.layout.line2.graphics.clear();
              lab.layout.xVelocity.text = "0.0";
              lab.layout.yVelocity.text = "0.0";
              lab.layout.speedometer1.value = 0;
              lab.layout.speedometer2.value = 0;
              lab.cars["redCar"].reached = true;
            } else if (lab.layout.redCar.x < 134) {
              lab.layout.redCrash.rotation = lab.layout.redCar.rotation + 70;
              lab.layout.redCrash.x = lab.layout.redCar.x;
              lab.layout.redCrash.y = lab.layout.redCar.y;
              lab.layout.redCrash.visible = true;
              lab.layout.redCar.visible = false;
              lab.layout.redCrash.uncache();
              lab.layout.redCrash.addEventListener("end", function () {
                lab.layout.redCrash.removeAllEventListeners("end");
                lab.layout.redCrash.cache(0, 0, 50, 30);
                return;
              });
              lab.layout.redCrash.gotoAndPlay(0);
              lab.layout.redCrash.loop = false;
              lab.car1._pause();
              lab.layout.line1.graphics.clear();
              lab.layout.line2.graphics.clear();
              lab.layout.xVelocity.text = "0.0";
              lab.layout.yVelocity.text = "0.0";
              lab.layout.speedometer1.value = 0;
              lab.layout.speedometer2.value = 0;
              lab.cars["redCar"].reached = true;
            }
          }

          this.velocity = Math.sqrt(
            this.velocityX * this.velocityX + this.velocityY * this.velocityY,
          );
          this.centripetalAcc = 0;

          if (!this.flag) {
            if (this.position < this.TOTALPATHS) {
              if (this.velocityX > 0) {
                if (this.displacementX >= this.track[this.position].center.x) {
                  //need to start turn
                  this.movingStraight = false;
                  this.radius = Math.abs(
                    this.displacementY - this.track[this.position].center.y,
                  );
                  this.velocity = this.velocity;
                  this.turnStartTime = this.time;
                  this.accelerationX = 0;
                  this.init_rotation = this.angle;
                }
              } else if (this.velocityX < 0) {
                if (this.displacementX <= this.track[this.position].center.x) {
                  this.movingStraight = false;
                  this.radius = Math.abs(
                    this.displacementY - this.track[this.position].center.y,
                  );
                  this.velocity = -this.velocity;
                  this.turnStartTime = this.time;
                  this.accelerationX = 0;
                  this.init_rotation = this.angle;
                }
              }
            }
          }
        } else {
          this.diffTime = this.time - this.turnStartTime;
          this.angle =
            ((1 * this.diffTime) /
              ((2 * Math.PI * this.radius) / this.velocity)) *
              360 +
            this.init_rotation;
          this.centripetalAcc = Math.abs(
            (this.velocity * this.velocity) / this.track[this.position].radius,
          );
          if (this.name == "redCar") {
            lab.layout.speedometer2.value = this.centripetalAcc;
          }
          this.velocityX =
            Math.abs(this.velocity) * Math.cos((this.angle * Math.PI) / 180);
          this.velocityY =
            Math.abs(this.velocity) * Math.sin((this.angle * Math.PI) / 180);
          this.displacementX =
            this.radius *
              Math.sin((this.diffTime * this.velocity) / this.radius) +
            this.track[this.position].center.x;
          this.displacementY =
            -this.radius *
              Math.cos((this.diffTime * this.velocity) / this.radius) +
            this.track[this.position].center.y;
          lab.layout[this.name].rotation = this.angle;
          lab.layout[this.name].x = this.displacementX;
          lab.layout[this.name].y = this.displacementY;
          //this.init_rotation = this._rotation;
          if (this._checkSpeed.call()) {
            if (Math.abs(this.angle - this.init_rotation) >= 35) {
              this.flag = true;
              this._crash();
            }
          }

          if (this.velocity > 0) {
            if (this.displacementX <= this.track[this.position].center.x) {
              this.velocityY = 0;
              this.movingStraight = true;
            }
          } else {
            if (this.displacementX >= this.track[this.position].center.x) {
              this.velocityY = 0;
              this.movingStraight = true;
            }
          }
          if (this.movingStraight) {
            this.position++;
          }
        }
      }
    }
  }

  function checkSpeed() {
    if (this.maxAcceleration != 0) {
      if (this.centripetalAcc > this.maxAcceleration) {
        return true;
      } else {
        return false;
      }
    }
  }

  function crash() {
    this.centripetalAcc = 0;
    this.crashed = true;
    this.accelerationX = 0;
    this.velocityX =
      Math.abs(this.velocity) * Math.cos((this.angle * Math.PI) / 180);
    this.velocityY =
      Math.abs(this.velocity) * Math.sin((this.angle * Math.PI) / 180);
    this.movingStraight = true;
  }

  function startConditions() {
    if (this.finalVelocity != 0) {
      this.velocityX = 0;
      this.accelerationX =
        (0.5 * (this.finalVelocity * this.finalVelocity)) / 21.36;
      if (this.name == "redCar") {
        lab.layout.speedometer2.value = this.accelerationX;
      }
      this.accelerating = true;
    }
    // else if(this.redVelocityX == 0 && this.redVelocityY ==0){ //figure out the acceleration in order to get to the right speed.
    // var dist = this.redPatchEnd - this.redDisplacementX;
    // this.accelerationX = (this.redVelocity * this.redVelocity)/(2*dist);
    // if(this.name=="redCar"){
    // lab.layout.speedometer2.value = this.accelerationX;
    // }
    // }
    this.startCondition = true;
  }
};
