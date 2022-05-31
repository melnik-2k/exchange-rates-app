import React from 'react';
import Header from "./Header/Header";
import ConvertCurrencies from "./ConvertCurrencies/ConvertCurrencies";
import useCurrencies from "../hooks/useCurrencies";
import CurrenciesContext from "../contexts/CurrenciesContext";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const App = () => {
    const {currencies, error, isLoading} = useCurrencies();

    if(isLoading) {
        return <Loader/>
    }

    if(error) {
        return <ErrorMessage messageError={error}/>
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