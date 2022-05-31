import {useEffect, useState} from "react";
import axios from "axios";
import currencyAdapter from "../adapters/currencyAdapter";

const useCurrencies = () => {
    const [currencies, setCurrencies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setError('');
            setIsLoading(true);
            try {
                const response = await axios.get('https://api.monobank.ua/bank/currency');
                const currencies = currencyAdapter(response.data);
                setCurrencies(currencies);                
            } catch (e) {
                setError(e.message);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return {currencies, isLoading, error};
};

export default useCurrencies;