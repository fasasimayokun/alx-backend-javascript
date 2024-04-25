export default class HolbertonClass {
  constructor(size, location) {
    //
    this._size = size;
    this._location = location;
  }

  toString() {
    // the method that returns the str representstion of the obj
    return this._location;
  }

  valueOf() {
    // the method that represent the value of the obj during calculation
    return this._size;
  }
}
