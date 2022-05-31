import {createContext} from "react";

const CurrenciesContext = createContext({
    currencies: [],
    error: {},
    isLoading: false,
});

export default CurrenciesContext;