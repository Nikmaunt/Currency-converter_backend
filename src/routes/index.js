const express = require('express');
const router = express.Router();
const convertController = require('../controllers/convert');
const addCurrencyController = require('../controllers/add-currency');
const sortCurrenciesController = require('../controllers/sort-currencies');
const initialCurrenciesController = require('../controllers/initial-currencies');


router.get('/convert', convertController.convertCurrency);
router.post('/add-currency', addCurrencyController.addCurrency);
router.get('/sort-currencies', sortCurrenciesController.sortCurrencies);
router.get('/initial-currencies', initialCurrenciesController.getInitialCurrencies);

module.exports = router;
