const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');
const expect = chai.expect;

describe('calculateNumber', function () {
    it('should add two rounded numbers when type is SUM', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should subtract two rounded numbers when type is SUBTRACT', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should divide two rounded numbers when type is DIVIDE', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Invalid type" for unknown type', function () {
        expect(calculateNumber('MULTIPLY', 1.4, 4.5)).to.equal('Invalid type');
    });
});
