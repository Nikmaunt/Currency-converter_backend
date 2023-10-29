const axios = require('axios');
const { db } = require('../firebase');
const conversionRatesRepository = require("../repositories/conversionRatesRepository");


const updateCurrencyRates = async () => {
    try {
        const response = await axios.get(
            `https://api.apilayer.com/exchangerates_data/latest?base=${process.env.BASE_CURRENCY}&apikey=${process.env.APILAYER_KEY}`
        );

        const rates = response?.data?.rates;

        if (rates && Object.keys(rates).length > 0) {
            await conversionRatesRepository.setConversionRates(rates, new Date());
        }
    } catch (error) {
        console.error('Error updating currency rates:', error);
    }
};

module.exports = { updateCurrencyRates };
