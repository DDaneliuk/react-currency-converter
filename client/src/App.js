import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {getAllCurrency} from "./store/actions/rateList";
import UserCurrency from "./view/user-currency/UserCurrency";
import {getUserCurrLocaleStore} from "./store/actions/user";
import './style/main.scss'

const ConverterPage = React.lazy(() => import('./view/converter-page/ConverterPage'));
const RatesPage = React.lazy(() => import('./view/rates-page/RatesPage'));


function App(props) {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.userReducer)
    const [getUserCurr, setGetUserCurr] = useState(null)

    useEffect(async () => {
        dispatch(getAllCurrency())
        const userCurr = localStorage.getItem("userCurr")
        if (userCurr) {
            setGetUserCurr(userCurr)
            dispatch(getUserCurrLocaleStore())
        }
    }, [])

    return (
        <Router>
            <NavBar/>
            {Object.entries(state).length === 0 && !getUserCurr ?
                <UserCurrency/> :
                null
            }
            <Routes>
                <Route path="/" element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <ConverterPage/>
                    </React.Suspense>
                }/>
                <Route path="rates" element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <RatesPage/>
                    </React.Suspense>
                }/>
            </Routes>
        </Router>
    );
}

export default App;


