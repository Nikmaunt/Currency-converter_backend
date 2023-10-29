const {fetchConversionRates} = require("../utils/currency-rates");


exports.sortCurrencies = async (req, res) => {
    const { sortBy, sortOrder } = req.query;

    if (!sortBy) {
        return res.status(400).json({ error: 'Sorting criteria not provided.' });
    }

    const rates = await fetchConversionRates();

    if (!rates) {
        return res.status(400).json({ error: 'Insufficient currency rate data.' });
    }

    const currencyList = Object.keys(rates).map((currencyCode) => ({
        code: currencyCode,
        rate: rates[currencyCode],
    }));

    if (sortBy === 'name') {
        currencyList.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.code.localeCompare(b.code);
            } else if (sortOrder === 'desc') {
                return b.code.localeCompare(a.code);
            }
        });
    } else if (sortBy === 'value') {
        currencyList.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.rate - b.rate;
            } else if (sortOrder === 'desc') {
                return b.rate - a.rate;
            }
        });
    } else {
        return res.status(400).json({ error: 'Unsupported sorting criteria.' });
    }

    const sortedRates = {};
    currencyList.forEach((currency) => {
        sortedRates[currency.code] = currency.rate;
    });

    res.json({ rates: sortedRates });
};
