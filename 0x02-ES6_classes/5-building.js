export default class Building {
  constructor(sqft) {
    if (
      this.constructor !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    ) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // the set method for the sqft attribute
  get sqft() { return this._sqft; }

  // the set method for the sqft attribute
  set sqft(sqft) { this._sqft = sqft; }

  evacuationWarningMessage() {
    return this.sqrt;
  }
}
