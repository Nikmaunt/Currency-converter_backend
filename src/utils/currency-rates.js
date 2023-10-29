const conversionRatesRepository = require('../repositories/conversionRatesRepository');
const axios = require('axios');

async function fetchConversionRates() {
    try {
        const data = await conversionRatesRepository.getConversionRates();

        if (data) {
            const timestamp = new Date(data.timestamp);
            const now = new Date();
            const hoursDiff = (now - timestamp) / (1000 * 60 * 60);

            if (hoursDiff <= 2) {
                return data.rates;
            }
        }

        const response = await axios.get(
            `https://api.apilayer.com/exchangerates_data/latest?base=${process.env.BASE_CURRENCY}&apikey=${process.env.APILAYER_KEY}`
        );

        const rates = response?.data?.rates;

        if (rates && Object.keys(rates).length > 0) {
            await conversionRatesRepository.setConversionRates(rates, new Date());
            return rates;
        }
    } catch (error) {
        console.error(error);
    }
}


module.exports = { fetchConversionRates };
