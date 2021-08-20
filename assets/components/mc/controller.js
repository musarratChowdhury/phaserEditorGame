class Controller {
  constructor() {
    emitter.on(G.SET_SCORE, this.setScore);
    emitter.on(G.UP_POINTS, this.upPoints);
  }
  setScore(val) {
    model.score = val;
  }
  upPoints(point) {
    let score = model.score; //getter
    score += point;
    model.score = score; //setter
  }
}
