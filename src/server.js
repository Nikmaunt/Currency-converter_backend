const express = require('express');
const app = express();
const cron = require('cron');
const cors = require('cors');
const { updateCurrencyRates } = require('./utils/currency-updater');
const routes = require('./routes');

app.use(express.json());
app.use(cors());

app.use('/', routes);

const cronJob = new cron.CronJob('0 */12 * * *', updateCurrencyRates);
cronJob.start();

const port = process.env.SERVER_PORT || 8013;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
