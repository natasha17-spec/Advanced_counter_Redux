import {createStore} from "redux";


export const COUNT_VALUE = "COUNT_VALUE";
export const INCORRECT = "INCORRECT";
export const MAX_VALUE = "MAX_VALUE";
export const MIN_VALUE = "MIN_VALUE";
export const SET_VALUE = "SET_VALUE";
export const SET_TO_ZERO = "SET_TO_ZERO";
export const INCORRECT_SET = "INCORRECT_SET";

const initialState = {
    count_start: 0,
    min: 0,
    max: 20,
    error: false,
    set: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_VALUE: {
            return {
                ...state,
                count_start: state.count_start + 1
            }
        }

        case INCORRECT: {
            return {
                ...state,
                count_start: 'Error'
            }
        }
        case INCORRECT_SET: {
            return {
                ...state,
                count_start: 'press set'
            }
        }
        case MAX_VALUE: {
            return {
                ...state,
                max: Number(action.max)
            }
        }
        case MIN_VALUE: {
            return {
                ...state,
                min: Number(action.min)
            }
        }
        case SET_VALUE: {
            return {
                ...state,
                count_start: action.min
            }
        }
        case SET_TO_ZERO: {
            return {
                ...state,
                count_start: action.min
            }
        }
    }
    return state
};
    export const incorrectAC = () => {
        return {type: INCORRECT}
    };
    export const incorrectSetAC = () => {
        return {type: INCORRECT_SET}
    };
    export const maxValueAC = (max) => {
        return {type: MAX_VALUE, max}
    };
    export const minValueAC = (min) => {
        return {type: MIN_VALUE, min}
    };
    export const setValueAC = (min) => {
        return {type: SET_VALUE, min}
    };
    export const setToZeroAC = (min) => {
        return {type: SET_TO_ZERO, min}
    };
    export const countValueAC = () => {
        return {type: COUNT_VALUE}
    };

    const store = createStore(reducer);
    export default store;