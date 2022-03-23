import axios from 'axios'
import {FETCH_BASE, FETCH_CONVERT, FETCH_CURRENCY, FETCH_RATES} from '../type/type'
import {formatDateForApi} from "../../helper/format-date";

// TODO - fetch and save list

const API_KEY_RATE = "7771b358ff147e43010af94323679a35"
const RATE_API_URL = "https://api.exchangeratesapi.io/v1/"
const date = formatDateForApi()

export const fetchRateList = () => {
    const request = axios
        .get(`${RATE_API_URL}/${date}?access_key=${API_KEY_RATE}`)
        .then((res) => res.data);
    return {
        type: FETCH_RATES,
        payload: request
    }
}
export const fetchRateByBase = async (base) => {
    const request = await axios
        .get(`${RATE_API_URL}/${date}?access_key=${API_KEY_RATE}&base=${base}`)
        .then((res) => res.data);
    return {
        type: FETCH_BASE,
        payload: request
    }
}
export const getAllCurrency = () => {
    const request = axios
        .get(`${RATE_API_URL}/${date}?access_key=${API_KEY_RATE}`)
        .then((res) => res.data);
    return {
        type: FETCH_CURRENCY,
        payload: request
    }
}

export const convertRate = (fromCurr, toCurr, amount) => {
    const request = axios
        .get(`${RATE_API_URL}/convert?access_key=${API_KEY_RATE}&from=${fromCurr}&to=${toCurr}&amount=${amount}&format=1`)
        .then((res) => res.data);
    return {
        type: FETCH_CONVERT,
        payload: request
    }
}
