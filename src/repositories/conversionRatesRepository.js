const { db } = require('../firebase');

class ConversionRatesRepository {
    async getConversionRates() {
        try {
            const conversionRatesRef = db.collection('currency').doc('conversion_rates');
            const snapshot = await conversionRatesRef.get();
            const data = snapshot.data();

            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async setConversionRates(rates, timestamp) {
        try {
            const conversionRatesRef = db.collection('currency').doc('conversion_rates');
            await conversionRatesRef.set({
                rates,
                timestamp: timestamp.toString(),
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = new ConversionRatesRepository();