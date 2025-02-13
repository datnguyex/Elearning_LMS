import { UsePreventTextAndMaxValueProps } from './../types/UsePreventTextAndMaxValueProps';
import React from 'react';

const UsePreventTextAndMaxValue = ({
    maxValue,
    setState,
    event,
    setStateFake,
}: UsePreventTextAndMaxValueProps): void => {
    const inputValue = event.target.value;
    const numericValue = Number(inputValue);

    if (inputValue === '' || inputValue === null) {
        return setStateFake('');
    }

    if (!isNaN(numericValue) && numericValue <= maxValue) {
        setStateFake(inputValue);
        setState(inputValue);
    }
};

export default UsePreventTextAndMaxValue;
