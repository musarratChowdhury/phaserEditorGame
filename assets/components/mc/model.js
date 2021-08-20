class Model {
  constructor() {
    this._score = 0;
    this.gameover = false;
  }
  set score(val) {
    this._score = val;
    console.log("scoreupdated");
    //
    //triggering an event to update the score
    emitter.emit(G.SCORE_UPDATED);
  }
  get score() {
    return this._score;
  }
}
