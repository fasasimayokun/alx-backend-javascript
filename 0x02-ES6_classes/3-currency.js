export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // the get method for the code attribute
  get code() { return this._code; }

  // the get method for the name attribute
  get name() { return this._name; }

  set code(code) {
    // the set method for the code attribute
    this._code = code;
  }

  set name(name) {
    // the set method for the name attribute
    this._name = name;
  }

  displayFullCurrency() {
    // the method that displays the name and code together
    return `${this.name} (${this.code})`;
  }
}
