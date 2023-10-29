# Getting Started


This is a backend part of [this repository](https://github.com/Nikmaunt/currency-converter).

[Node.js](https://nodejs.org) and [Firebase](https://firebase.google.com)  project.


## Install Dependencies

```bash
npm run install
```

or

```bash
npm install axios cron dotenv express firebase firebase-admin nodemon
```

## Run the Development Server

```bash
npm run dev
```
## API

Fixer API, Free Plan, 1000 requests a month

```html
https://api.apilayer.com/fixer/latest?base=${process.env.BASE_CURRENCY}&apikey=${process.env.APILAYER_KEY}
```

Exchange Rates Data API API, Free Plan, 250 requests a month

```html
https://api.apilayer.com/exchangerates_data/latest?base=${process.env.BASE_CURRENCY}&apikey=${process.

```
