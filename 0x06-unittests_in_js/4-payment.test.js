const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(function () {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should stub calculateNumber and log correct message', function () {
        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');
    });
});
