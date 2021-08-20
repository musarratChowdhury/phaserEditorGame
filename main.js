var game;
var model;
var emitter;
var controller;
var G;

window.addEventListener("load", function () {
  game = new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    backgroundColor: "#242424",

    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  });

  game.scene.add("Boot", Boot, true);
  game.scene.add("SceneMain", SceneMain);
  game.scene.add("SceneOver", SceneOver);
  game.scene.add("SceneTitle", SceneTitle);
  model = new Model();
  G = new Constants();
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/asset-pack.json");
  }

  create() {
    this.scene.start("SceneTitle");

    console.log("hello");
  }
}
