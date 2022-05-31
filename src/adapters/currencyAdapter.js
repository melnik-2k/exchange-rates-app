import currenciesDictionary from '../assets/currencies.json';
import uniqBy from "../utils/uniqBy";

const baseCurrency = {
    isoCode: '980',
    name: 'UAH',
    rate: 1
};

const currencyAdapter = (rawCurrencies) => {
    const currencies = rawCurrencies.reduce((acc, rawCurrency) => {
        const currency = currenciesDictionary.find((currency) => currency.number === rawCurrency.currencyCodeA.toString());
        if (currency) {
            acc.push({
                isoCode: currency.number,
                name: currency.code,
                rate: rawCurrency.rateCross ?? ((rawCurrency.rateSell + rawCurrency.rateBuy) / 2).toFixed(2),
            });
        }

        return acc;
    }, [baseCurrency]);

    return uniqBy(currencies, 'isoCode');
};

export default currencyAdapter;