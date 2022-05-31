import React, {useContext, useState} from 'react';
import style from './ConvertInput.module.css';
import CurrenciesContext from "../../../contexts/CurrenciesContext";

const ConvertInput = ({ currency, setCurrency, amount, setAmount }) => {
    const { currencies } = useContext(CurrenciesContext);

    const onCurrencyChange = (e) => {
        const currency = currencies.find((currency) => currency.isoCode === e.target.value);
        setCurrency(currency);
    };

    const onAmountChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div className={style.wrap}>
            <input type="number" value={amount} className={style.input} onChange={onAmountChange}/>
            <select value={currency?.isoCode} className={style.select} onChange={onCurrencyChange}>
                {
                    currencies.map((currency) => (
                        <option key={currency.isoCode} value={currency.isoCode}>
                            {currency.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default ConvertInput;