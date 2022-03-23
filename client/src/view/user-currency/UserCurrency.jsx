import React, {useState} from 'react'
// style
import style from './UserCurrency.module.scss'
//redux
import {useDispatch, useSelector} from "react-redux";
import {getUserCurrency} from "../../store/actions/user";

const UserCurrency = () => {
    const dispatch =useDispatch()
    const state = useSelector((state) => state.rateList.allCurrency)

    const [optionCurr, setOptionCurr] = useState('USD')

    const SelectHandler = (e) => {
        setOptionCurr(e.target.value)
    }
    const submitCurr = () => {
        dispatch(getUserCurrency(optionCurr))
    }

    return (
        <div className="pageWrapper">
            <h1>Choose your default currency</h1>
            {state ?
                <div className={style.flexForm}>
                    <select value={optionCurr} onChange={SelectHandler}>
                        {state.map((c, i) => (
                            <option value={c} key={i}>{c}</option>
                        ))}
                    </select>
                    <button onClick={submitCurr} className='primaryBtn'>Choose</button>
                </div>
                : <p>Wait... Loading a selector</p>
            }

        </div>
    )
}

export default UserCurrency
