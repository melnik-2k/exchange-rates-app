import React, {useContext, useEffect, useState} from 'react';
import style from './ConvertCurrencies.module.css';
import ConvertInput from "./ConvertInput/ConvertInput";
import CurrenciesContext from "../../contexts/CurrenciesContext";

const ConvertCurrencies = () => {
    const {currencies, error, isLoading} = useContext(CurrenciesContext);
    const uah = currencies.find((currency) => currency.name.toLowerCase() === 'uah');
    const eur = currencies.find((currency) => currency.name.toLowerCase() === 'eur');

    const [firstCurrency, setFirstCurrency] = useState(uah);
    const [secondCurrency, setSecondCurrency] = useState(eur);

    const [firstAmount, setFirstAmount] = useState(0);
    const [secondAmount, setSecondAmount] = useState(0);

    useEffect(() => {
        setFirstCurrency(uah);
        setSecondCurrency(eur);
    }, [uah, eur]);

    useEffect(() => {
        if (firstCurrency && secondCurrency) {
            setSecondAmount(firstAmount * firstCurrency.rate / secondCurrency.rate);
        }
    }, [firstAmount, firstCurrency]);

    useEffect(() => {
        if (firstCurrency && secondCurrency) {
            setFirstAmount(secondAmount * secondCurrency.rate / firstCurrency.rate);
        }
    }, [secondAmount, secondCurrency]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error with message: {error}</div>
    }

    return (
        <main>
            <div className="container">
                <div className={style.wrap}>
                    <h1 className={style.title}>Convert currencies</h1>
                    <div className={style.inputs}>
                        <ConvertInput currency={firstCurrency} setCurrency={setFirstCurrency} amount={firstAmount}
                                      setAmount={setFirstAmount}/>
                        <ConvertInput currency={secondCurrency} setCurrency={setSecondCurrency} amount={secondAmount}
                                      setAmount={setSecondAmount}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ConvertCurrencies;