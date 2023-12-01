const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('should return the sum of rounded numbers for positive integers', function () {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return the sum of rounded numbers for one decimal', function () {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return the sum of rounded numbers for both numbers having decimals', function () {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
