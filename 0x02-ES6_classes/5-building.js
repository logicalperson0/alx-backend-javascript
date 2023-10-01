export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;

    if (this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqrt() {
    return this._sqrt;
  }
}
