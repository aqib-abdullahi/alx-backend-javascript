export default class Airport {
  constructor(name, code) {
    // if (typeof name === 'string' && typeof code === 'number') {
    this._name = name;
    this._code = code;
    // } else {
    //     throw new TypeError('Name and Code must both be strings');
    // }
  }

  // toString() {
  //     return `[${this._code}]`
  // }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
