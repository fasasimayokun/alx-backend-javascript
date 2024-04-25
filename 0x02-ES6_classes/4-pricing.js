export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // the get method for the amount attribute
  get amount() { return this._amount; }

  // the get method for the currency attribute
  get currency() { return this._currency; }

  set amount(amount) {
    // the set method for the amount attribute
    this._amount = amount;
  }

  set currency(currency) {
    // the set method for the currency attribute
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
