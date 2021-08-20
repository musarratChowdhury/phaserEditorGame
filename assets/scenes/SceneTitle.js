// You can write more code here

/* START OF COMPILED CODE */

class SceneTitle extends Phaser.Scene {
  constructor() {
    super("SceneTitle");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate() {
    // startScreenBg
    const startScreenBg = this.add.image(481, 314, "startScreenBg");
    startScreenBg.scaleX = 1.4746464763025533;
    startScreenBg.scaleY = 1.4746464763025533;

    // start_button
    this.startButton = this.add.image(421, 330, "start_button");
    this.startButton.setInteractive();
    this.startButton.on("clicked", this.clickHandler, this);
    //
    this.input.on(
      "gameobjectup",
      function (pointer, gameObject) {
        gameObject.emit("clicked", gameObject);
      },
      this
    );
    //
    console.log("sceneTitle");
  }

  /* START-USER-CODE */

  // Write your code here
  clickHandler() {
    this.scene.start("SceneMain");
  }

  create() {
    this.editorCreate();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
