const { getInitialCurrencies } = require('../repositories/currencyRepository');

exports.getInitialCurrencies = async (req, res) => {
    try {
        const initialCurrencies = await getInitialCurrencies();

        if (initialCurrencies) {
            res.json({ initialCurrencies });
        } else {
            res.status(500).json({ error: 'Данные о валютах отсутствуют в базе данных.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};