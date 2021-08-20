// You can write more code here

/* START OF COMPILED CODE */

class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");

    /* START-USER-CTR-CODE */

    // Write your code here.
    this.scoreUp = false;
    this.drawFalse = false;
    this.delay = 0;
    this.score = 0;
    /* END-USER-CTR-CODE */
  }
  preload() {
    this.load.audio("right", "assets/audio/correct.mp3");
    this.load.audio("wrong", "assets/audio/incorrect.mp3");
  }
  editorCreate() {
    this.checkGrp = this.add.group();
    this.txtObjects = [];
    this.allImages = [];
    this.counter = 0;
    this.imageMatched = 0;

    //event emitter
    emitter = new Phaser.Events.EventEmitter();
    //adding controller
    controller = new Controller();

    this.correctSound = this.sound.add("right", { volume: 0.2 });
    this.incorrectSound = this.sound.add("wrong", { volume: 0.2 });

    // background
    const bg = this.add.image(403, 304, "background");
    this.allImages.push(bg);

    // ball
    const ball = this.add.image(293, 400, "ball");
    ball.scaleX = 0.08921934715841301;
    ball.scaleY = 0.08921934715841301;
    ball.data = "топка";
    this.allImages.push(ball);

    // bike
    const bike = this.add.image(330, 310, "bike");
    bike.scaleX = 0.16959514269039055;
    bike.scaleY = 0.16959514269039055;
    bike.data = "велосипед";
    this.allImages.push(bike);

    // bird
    const bird = this.add.image(231, 53, "bird");
    bird.scaleX = 0.170608090608657;
    bird.scaleY = 0.170608090608657;
    bird.data = "птица";
    this.allImages.push(bird);

    // cat
    const cat = this.add.image(704, 392, "cat");
    cat.scaleX = 0.08565525217239767;
    cat.scaleY = 0.08565525217239767;
    cat.data = "маче";
    this.allImages.push(cat);

    // dog
    const dog = this.add.image(116, 380, "dog");
    dog.scaleX = 0.06506311153070121;
    dog.scaleY = 0.06506311153070121;
    dog.data = "куче";
    this.allImages.push(dog);

    // car
    const car = this.add.image(532, 299, "car");
    car.scaleX = 0.24053165894554573;
    car.scaleY = 0.24053165894554573;
    car.angle = 3;
    car.data = "автомобил";
    this.allImages.push(car);

    // sun
    const sun = this.add.image(421, 68, "sun");
    sun.scaleX = 0.20156792213072383;
    sun.scaleY = 0.20156792213072383;
    sun.data = "сонце";
    this.allImages.push(sun);

    // grandma
    const grandma = this.add.image(456, 357, "grandma");
    grandma.scaleX = 0.2675600601605762;
    grandma.scaleY = 0.2675600601605762;
    grandma.data = "баба";
    this.allImages.push(grandma);

    // fountain
    const fountain = this.add.image(652, 329, "fountain");
    fountain.scaleX = 0.08373457867503842;
    fountain.scaleY = 0.08373457867503842;
    fountain.data = "фонтана";
    this.allImages.push(ball);

    // dustbin
    const dustbin = this.add.image(581, 388, "dustbin");
    dustbin.scaleX = 0.377157402994059;
    dustbin.scaleY = 0.377157402994059;
    dustbin.data = "канта";
    this.allImages.push(dustbin);
    //event listener on....................................................
    this.allImages.forEach((obj) => {
      obj.setInteractive();
    });
    this.allImages.forEach((obj) => {
      obj.on("clicked", this.clickHandler, this);
      obj.on("clicked_", this.clickHandlerR, this);
    });

    // text
    const text = this.add.text(43, 508, "", {});
    text.text = "маче";
    text.setStyle({
      backgroundColor: "",
      color: "#124c0cff",
      fontFamily: "\"'Anton', sans-seriff\"",
      fontSize: "30px",
      fontStyle: "bold",
    });
    this.txtObjects.push(text);

    // text_1
    const text_1 = this.add.text(140, 509, "", {});
    text_1.text = "велосипед";
    text_1.setStyle({
      color: "#124c0cff",
      fontFamily: "\"'Anton', sans-seriff\"",
      fontSize: "30px",
      fontStyle: "bold",
    });
    this.txtObjects.push(text_1);

    // text_2
    const text_2 = this.add.text(306, 508, "", {});
    text_2.text = "автомобил";
    text_2.setStyle({
      color: "#124c0cff",
      fontFamily: "\"'Anton', sans-seriff\"",
      fontSize: "30px",
      fontStyle: "bold",
    });
    this.txtObjects.push(text_2);

    // text_3
    const text_3 = this.add.text(484, 508, "", {});
    text_3.text = "сонце";
    text_3.setStyle({
      color: "#124c0cff",
      fontFamily: "\"'Anton', sans-seriff\"",
      fontSize: "30px",
      fontStyle: "bold",
    });
    this.txtObjects.push(text_3);
    // text_4
    const text_4 = this.add.text(590, 509, "", {});
    text_4.text = "куче";
    text_4.setStyle({
      color: "#124c0cff",
      fontFamily: "\"'Anton', sans-seriff\"",
      fontSize: "30px",
      fontStyle: "bold",
    });
    this.txtObjects.push(text_4);
    // text_5
    const text_5 = this.add.text(677, 510, "", {});
    text_5.text = "канта";
    text_5.setStyle({
      color: "#124c0cff",
      fontFamily: "\"'Anton', sans-seriff\"",
      fontSize: "30px",
      fontStyle: "bold",
    });
    this.txtObjects.push(text_5);
    //lets make an array of the texts

    //.........................................................game input here
    this.input.on(
      "gameobjectdown",
      function (pointer, gameObject) {
        gameObject.emit("clicked", gameObject);
      },
      this
    );

    this.input.on(
      "gameobjectup",
      function (pointer, gameObject) {
        gameObject.emit("clicked_", gameObject);
      },
      this
    );
    /////////////////////////score and timer text here..........
    // text_6
    this.scoreText = this.add.text(520, 429, "", {});
    this.scoreText.text = "SCORE : 0";
    this.scoreText.setStyle({
      color: "#980808ff",
      fontFamily: "\"'Anton', sans-seriff\"",
      fontSize: "25px",
      fontStyle: "bold",
    });

    // text_7
    this.counterTxt = this.add.text(668, 429, "", {});
    this.counterTxt.text = "TIMER : 0";
    this.counterTxt.setStyle({
      color: "#980808ff",
      fontFamily: "\"'Anton', sans-seriff\"",
      fontSize: "25px",
      fontStyle: "bold",
    });
  }

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
  }
  clickHandler(obj) {
    //handler for text and image object matching effects
    this.txtObjects.forEach((txt) => {
      if (obj.data == txt.text) {
        console.log("works");
        this.scoreUp = true;
        txt.alpha = 0.4;
      }
    });
    //adding correct and false images into the group
    //correct >
    if (this.scoreUp) {
      var chk = this.add.image(
        game.input.activePointer.x,
        game.input.activePointer.y,
        "correct"
      );
      chk.data = 0;
      Align.scaleToGameW(chk, 0.09);
      this.checkGrp.add(chk);
      this.correctSound.play();
    }
    //incorrect >
    if (!this.scoreUp) {
      var chk = this.add.image(
        game.input.activePointer.x,
        game.input.activePointer.y,
        "false"
      );
      chk.data = 0;
      Align.scaleToGameW(chk, 0.09);
      this.checkGrp.add(chk);
      this.incorrectSound.play();
    }
  }
  clickHandlerR(obj) {
    if (this.scoreUp) {
      //emitter.emit(G.UP_POINTS, 1000);
      this.score += 100;
      this.scoreText.setText("SCORE : " + this.score);
      this.scoreUp = false;

      obj.data = "";
      this.imageMatched++;
      if (this.imageMatched >= this.txtObjects.length) {
        model.gameover = true;
      }
    } else {
      //emitter.emit(G.UP_POINTS, -1000);
      this.score -= 100;
      this.scoreText.setText("SCORE :" + this.score);
      this.scoreUp = false;
    }
  }
  endgame() {
    this.scene.switch("SceneOver");
  }
  update() {
    if (model.gameover) {
      this.delay++;
      if (this.delay >= 60) return this.endgame();
    }
    this.counter++;
    this.counterTxt.setText("TIME : " + Number(this.counter / 60).toFixed(0));

    // counting timer for false and correct images
    this.checkGrp.children.iterate(
      function (child) {
        child.data++;
        if (child.data >= 40) {
          child.visible = false;
        }
      }.bind(this)
    );

    //
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
