import {GET_LOCAL_CURR, GET_USER} from "../type/type";

export const getUserCurrency = (currency) => {
    return {
        type: GET_USER,
        payload: currency
    }
}

export const getUserCurrLocaleStore = () => {
    return {
        type: GET_LOCAL_CURR
    }
}
