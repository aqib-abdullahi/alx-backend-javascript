export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(curCode) {
    if (typeof curCode === 'string') {
      this._code = curCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  set name(curName) {
    if (typeof curName === 'string') {
      this._name = curName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
