import React from 'react';
import style from './ErrorMessage.module.css';

const ErrorMessage = ({ messageError }) => {
    return (
        <div className={style.wrap}>
            <div className={style.message}>Error with message: {messageError}</div>
        </div>
    );
};

export default ErrorMessage;