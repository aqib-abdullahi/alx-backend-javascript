const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
    it('should add two rounded numbers when type is SUM', function () {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should subtract two rounded numbers when type is SUBTRACT', function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should divide two rounded numbers when type is DIVIDE', function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Invalid type" for unknown type', function () {
        assert.strictEqual(calculateNumber('MULTIPLY', 1.4, 4.5), 'Invalid type');
    });
});
