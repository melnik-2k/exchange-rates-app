import React from 'react';
import style from './App.module.css';
import Header from "./Header/Header";
import ConvertCurrencies from "./ConvertCurrencies/ConvertCurrencies";
import useCurrencies from "../hooks/useCurrencies";
import CurrenciesContext from "../contexts/CurrenciesContext";

const App = () => {
    const {currencies, error, isLoading} = useCurrencies();

    if(isLoading) {
        return <div>Loading</div>
    }

    if(error) {
        return <div>error</div>
    }

    return (
        <div>
            <CurrenciesContext.Provider value={{ currencies, error, isLoading }}>
                <Header/>
                <ConvertCurrencies/>
            </CurrenciesContext.Provider>
        </div>
    );
};

export default App;