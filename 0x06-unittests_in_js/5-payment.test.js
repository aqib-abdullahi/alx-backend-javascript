const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleLogSpy.restore();
    });

    it('should log correct message for total amount 100 and 20', function () {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(consoleLogSpy);
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
    });

    it('should log correct message for total amount 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnce(consoleLogSpy);
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
    });
});
