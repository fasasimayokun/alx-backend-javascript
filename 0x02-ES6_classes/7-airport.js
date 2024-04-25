export default class Airport {
  constructor(name, code) {
    // the name attribute
    this._name = name;
    // assinging the protected attribute with codevalue
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }
}
