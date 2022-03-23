import { combineReducers } from 'redux'
import rateList from './reducers/rateList';
import userReducer from './reducers/user'

const rootReducer = combineReducers({
    rateList, userReducer
})

export default rootReducer
