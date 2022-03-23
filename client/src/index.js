import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store/store";
import {createStore, applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(store)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

