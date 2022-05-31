import React, {useContext, useEffect, useState} from 'react';
import style from './Header.module.css';
import CurrenciesContext from "../../contexts/CurrenciesContext";

const currenciesToRenderCodes = ['978', '840'];

const Header = () => {
    const { currencies, isLoading, error } = useContext(CurrenciesContext);
    const currenciesToRender = currencies.filter((currency) => currenciesToRenderCodes.includes(currency.isoCode));

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.headerWrap}>
                    <h3 className={style.logo}>Exchange Rates</h3>
                    <div className={style.currencies}>
                        {
                            currenciesToRender.map((currency) => (
                                <div key={currency.isoCode} className={style.currencyItem}>
                                    {currency.name} | {currency.rate} UAH
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;