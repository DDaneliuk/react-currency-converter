import {GET_LOCAL_CURR, GET_USER} from "../type/type";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER:
            localStorage.setItem("userCurr", action.payload)
            return {...state, userCurr: action.payload}
        case GET_LOCAL_CURR:
            const curr = localStorage.getItem("userCurr")
            return {...state, userCurr: curr}
        default:
            return state;
    }
};

export default userReducer
