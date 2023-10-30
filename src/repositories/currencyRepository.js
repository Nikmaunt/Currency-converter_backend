const { db } = require('../firebase');

const getInitialCurrencies = async () => {
    try {
        const currencyDoc = await db.collection('currency').doc('conversion_rates').get();
        const data = currencyDoc.data();

        if (data) {
            return data.rates;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error when retrieving currency data:', error);
        throw new Error('Error when retrieving currency data');
    }
};

module.exports = { getInitialCurrencies };
