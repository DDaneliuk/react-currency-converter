import {FETCH_BASE, FETCH_CONVERT, FETCH_CURRENCY, FETCH_RATES} from "../type/type";

const initialState = {
    ratesList: [],
    allCurrency: [],
    convertResult:[]
};

const rateListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BASE:
            return {...state, ratesList: action.payload.rates}
        case FETCH_CURRENCY:
            const currencyKeys = Object.keys(action.payload.rates);
            return {...state, allCurrency: currencyKeys}

        case FETCH_CONVERT:
            return {...state, convertResult: action.payload}
        default:
            return state;
    }
};

export default rateListReducer
