import React, {useEffect, useState} from 'react'
// style
import style from './ConverterForm.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getUserCurrency} from "../../store/actions/user";
import {convertRate, fetchRateList} from "../../store/actions/rateList";

const ConverterForm = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    const [userCurr, setUserCurr] = useState('')
    const [convertSelect, setConvertSelect] = useState('')
    const [amountInput, setAmountInput] = useState('')
    const [errorState, setErrorState] = useState('')

    const userSelectHandler = (e) => {
        setUserCurr(e.target.value)
        dispatch(getUserCurrency(e.target.value))
    }
    const convertSelectHandler = (e) => {
        setConvertSelect(e.target.value)
    }

    const amountInputHandler = (e) => {
        setAmountInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setErrorState('')
        if (amountInput) {
            dispatch(convertRate(userCurr, convertSelect, amountInput))
        } else {
            setErrorState('fill convert amount')
        }

    }

    useEffect(() => {
        setConvertSelect(state.rateList.allCurrency[0])
        setUserCurr(state.userReducer.userCurr)
    }, [state.rateList.allCurrency])

    return (
        <div className={style.formBlock}>
            <form className={style.formFlex}>
                <div>
                    <label>Convert From</label>
                    <div className={style.filedSet}>
                        {state.rateList ?
                            <div>
                                <select value={userCurr} onChange={userSelectHandler}>
                                    {state.rateList.allCurrency.map((c, i) => (
                                        <option value={c} key={i}>{c}</option>
                                    ))}
                                </select>
                            </div>
                            : <p>Wait selector </p>
                        }
                        <div>
                            <input type="number" placeholder="1000" value={amountInput} onChange={amountInputHandler}/>
                            <div> {errorState ? <p>{errorState}</p> : null}</div>
                        </div>
                    </div>
                    <div>
                        <label>Convert To</label>
                        <div className={style.filedSet}>
                            <select value={convertSelect} onChange={convertSelectHandler}>
                                {state.rateList.allCurrency.map((c, i) => (
                                    <option value={c} key={i}>{c}</option>
                                ))}
                            </select>
                            <button className={style.submitBtn} onClick={submitHandler}>Convert</button>
                        </div>
                    </div>
                </div>
            </form>
            {state.rateList.convertResult.length === 0 ?
                null :
                <div className={style.resultBlock}>
                    <h2>Result</h2>
                    <div>
                        <h1>{state.rateList.convertResult.result.toFixed(2)} {state.rateList.convertResult.query.to}</h1>
                    </div>
                </div>
            }

        </div>
    )
}

export default ConverterForm
