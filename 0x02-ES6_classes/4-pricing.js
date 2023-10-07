import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(Amount) {
    if (typeof Amount === 'string') {
      this._amount = Amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount === 'number') && (typeof conversionRate === 'number')) {
      return amount * conversionRate;
    }
    throw new TypeError('amount and conversion rate must both be numbers');
  }
}
