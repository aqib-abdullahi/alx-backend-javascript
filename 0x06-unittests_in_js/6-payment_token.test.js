const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', function () {
    it('should resolve with a successful response from the API when success is true', function (done) {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done(); // Call done to indicate the end of the asynchronous test
            })
            .catch((error) => {
                done(error); // Pass any errors to done to indicate test failure
            });
    });
});
