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
        console.error('Ошибка при получении данных о валютах:', error);
        throw new Error('Ошибка при получении данных о валютах.');
    }
};

module.exports = { getInitialCurrencies };
