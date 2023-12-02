function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // For failure case, the function doesn't resolve or reject
        }
    });
}

module.exports = getPaymentTokenFromAPI;
