import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // the get method for the sqft attribute
  get sqft() { return this._sqft; }

  // the get method for the floors attribute
  get floors() { return this._floors; }

  // the set method for sqft attribute
  set sqft(sqft) { this._sqft = sqft; }

  // the set method for floors attribute
  set floors(floors) { this._floors = floors; }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
