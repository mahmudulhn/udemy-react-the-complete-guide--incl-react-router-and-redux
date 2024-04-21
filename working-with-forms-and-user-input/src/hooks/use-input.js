import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched: state.isTouched,
        }
    }
    if (action.type === 'BLUR') {
        return {
            value: state.value,
            isTouched: true,
        }
    }
    if (action.type === 'RESET') {
        return initialInputState
    }
    return inputStateReducer;
}

const useInput = (validateValue) => {
    const [inputSate, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputSate.value);
    const hasError = !valueIsValid && inputSate.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({
            type: 'INPUT',
            value: event.target.value
        });
    };

    const inputBlurHandler = (event) => {
        dispatch({
            type: 'BLUR'
        });
    };

    const reset = () => {
        dispatch({
            type: 'RESET'
        });
    }

    return {
        value: inputSate.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;