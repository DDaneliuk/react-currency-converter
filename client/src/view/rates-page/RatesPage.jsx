import React, {useEffect, useState} from 'react'
// style
import style from './RatesPage.module.scss'
// components
import RateItem from "../../components/rate-item/RateItem";
// redux
import {useDispatch, useSelector} from "react-redux";
// action - redux
import {fetchRateByBase, fetchRateList} from "../../store/actions/rateList";
import userReducer from "../../store/reducers/user";
import {getUserCurrency} from "../../store/actions/user";

const RatesPage = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const [userCurr, setUserCurr] = useState('')
    const [ratesObj, setRatesObj] = useState({})

    useEffect(async () => {
        dispatch(fetchRateList())
        setUserCurr(state.userReducer.userCurr)
        setRatesObj(state.rateList.ratesList)
    }, [])

    useEffect(() => {
        if (!userCurr) {
            dispatch(fetchRateByBase(userCurr))
        }
    }, [userCurr])

    const selectCurrencyHandler = (e) => {
        dispatch(fetchRateByBase(e.target.value))
        dispatch(getUserCurrency(e.target.value))
    }
    const rateItem = Object.keys(ratesObj).map(function (key) {
        return <RateItem value={key}>{ratesObj[key]}</RateItem>
    });
    return (
        <div className="pageWrapper">
            <div className="heading">
                <h1>Rates</h1>
            </div>
            {state ?
                <div>
                    <div>
                        <p>Your default currency is UAH, but you can select another. Try it!</p>
                        {state.rateList.allCurrency.length === 0 ? null :
                            <select value={state.userReducer.userCurr} onChange={selectCurrencyHandler}>
                                {state.rateList.allCurrency.map((c, i) => (
                                    <option value={c} key={i}>{c}</option>
                                ))}
                            </select>
                        }
                    </div>
                    <div className={style.rateResults}>
                        {state.rateList ?
                            <div>
                                {Object.entries(state.rateList.ratesList).map(([key, value], i) => {
                                    return (<RateItem key={i} code={key} value={value} userCurr={state.userReducer.userCurr}/>)
                                })
                                }
                            </div>
                            : null}
                    </div>
                </div>
                :
                <p>Loading...</p>
            }

        </div>

    )
}

export default RatesPage
