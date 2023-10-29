const conversionRatesRepository = require("../repositories/conversionRatesRepository");

exports.convertCurrency = async (req, res) => {
    const { amount, from } = req.query;

    if (!amount || !from) {
        return res.status(400).json({ error: 'Недостаточно данных для конвертации.' });
    }

    const rates = await conversionRatesRepository.getConversionRates();

    if (!rates.rates || !rates.rates[from]) {
        return res.status(400).json({ error: 'Недостаточно данных о курсах обмена.' });
    }

    const convertedCurrencies = {};
    for (const currency in rates.rates) {
        if (currency !== from) {
            const convertedValue = (amount / rates.rates[from]) * rates.rates[currency];
            convertedCurrencies[currency] = parseFloat(convertedValue.toFixed(4));
        }
    }

    res.json({ convertedCurrencies });
};
