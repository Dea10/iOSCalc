import { useState } from "react";

enum Operations {
    Addition,
    Substraction,
    Product,
    Div
}

export const useCalc = () => {
    const [ isFirstInput, setIsFirstInput ] = useState(true);
    const [ lastOperator, setLastOperator ] = useState<Operations>();
    const [ baseNumber, setBaseNumber ] = useState('0');
    const [ lastResult, setLastResult ] = useState('0');

    const cleanBaseNumber = () => setBaseNumber('0');
    const cleanLastResult = () => setLastResult('0');
    const cleanAll= () => {
        cleanBaseNumber();
        cleanLastResult();
        setIsFirstInput(true);
    }
    
    const concatToBaseNumber = (newNumber: string) => {
        if ((baseNumber === '0' || baseNumber === '-0') && newNumber === '0') return;
        if (baseNumber.length === 1 && baseNumber === '0') {
            setBaseNumber(newNumber);
        } else {
            if (baseNumber === '-0') {
                setBaseNumber('-' + newNumber);
            } else {
                setBaseNumber( baseNumber + newNumber );
            }
        }
    };
    
    const concatDecimalPoint = (decimalPoint: string) => {
        if (baseNumber.includes('.')) return;
        setBaseNumber(baseNumber + decimalPoint);
    }
    
    const toggleMinusPlus = () => {
        if(baseNumber.includes('-')) {
            setBaseNumber(baseNumber.replace('-', ''))
        } else {
            setBaseNumber('-' + baseNumber)
        }
    }
    
    const deleteLast = () => {
        if(baseNumber.length === 1 || (baseNumber.length === 2 && baseNumber.includes('-'))) {
            cleanBaseNumber();
        } else {
            setBaseNumber(baseNumber.slice(0, -1));
        }
    }

    const sendToLastResult = () => {
        if (baseNumber.endsWith('.')) {
            setLastResult(baseNumber.slice(0, -1));
        } else {
            setLastResult(baseNumber);
        }
    }

    const addition = () => {
        if (isFirstInput) {
            sendToLastResult();
        } else {
            equals();
        }
        
        setLastOperator(Operations.Addition);
        cleanBaseNumber();
        setIsFirstInput(false);
    }

    const substraction = () => {
        if (isFirstInput) {
            sendToLastResult();
        } else {
            equals();
        }
        
        setLastOperator(Operations.Substraction);
        cleanBaseNumber();
        setIsFirstInput(false);
    }

    const product = () => {
        if (isFirstInput) {
            sendToLastResult();
        } else {
            equals();
        }
        
        setLastOperator(Operations.Product);
        cleanBaseNumber();
        setIsFirstInput(false);
    }

    const div = () => {
        if (isFirstInput) {
            sendToLastResult();
        } else {
            equals();
        }
        
        setLastOperator(Operations.Div);
        cleanBaseNumber();
        setIsFirstInput(false);
    }

    const equals = (isFinalInput = false) => {
        let result = '';
        switch (lastOperator) {
            case Operations.Addition:
                setLastResult(`${Number(lastResult) + Number(baseNumber)}`);
                result = `${Number(lastResult) + Number(baseNumber)}`
                break;
                
            case Operations.Substraction:
                setLastResult(`${Number(lastResult) - Number(baseNumber)}`);
                result = `${Number(lastResult) - Number(baseNumber)}`
                break;

            case Operations.Product:
                setLastResult(`${Number(lastResult) * Number(baseNumber)}`);
                result = `${Number(lastResult) * Number(baseNumber)}`
                break;

            case Operations.Div:
                setLastResult(`${Number(lastResult) / Number(baseNumber)}`);
                result = `${Number(lastResult) / Number(baseNumber)}`
                break;
        
            default:
                break;
        }

        if(isFinalInput) {
            setBaseNumber(result);
            cleanLastResult();
        } else {
            cleanBaseNumber();
        }

        setIsFirstInput(true);
    }

    return {
        baseNumber,
        lastResult,
        cleanAll,
        toggleMinusPlus,
        deleteLast,
        concatToBaseNumber,
        concatDecimalPoint,
        div,
        product,
        substraction,
        addition,
        equals
    };
}