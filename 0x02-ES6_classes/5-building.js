export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;

    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqrt() {
    return this._sqrt;
  }

  set sqrt(sqrt) {
    this._sqrt = sqrt;
  }
}
