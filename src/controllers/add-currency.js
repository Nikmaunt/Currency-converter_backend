
const conversionRatesRepository = require("../repositories/conversionRatesRepository");

exports.addCurrency = async (req, res) => {
    const { currencyCode } = req.body;

    if (!currencyCode) {
        return res.status(400).json({ error: 'Currency code is missing' });
    }

    const rates = await conversionRatesRepository.getConversionRates();

    if (!rates || !rates[currencyCode] || !rates['USD']) {
        return res.status(400).json({ error: 'Insufficient data on exchange rates' });
    }

    const valueInCurrency = rates[currencyCode];

    res.json({ valueInCurrency });
};
