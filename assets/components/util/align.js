class Align {
  static scaleToGameW(obj, per) {
    obj.displayWidth = game.config.width * per;
    obj.scaleY = obj.scaleX;
  }
  static scaleToGameH(obj, per1, per2) {
    obj.displayHeight = game.config.height * per1;
    obj.displayWidth = game.config.width * per2;
  }
  static center(obj) {
    obj.x = game.config.width / 2;
    obj.y = game.config.height / 2;
  }
}
