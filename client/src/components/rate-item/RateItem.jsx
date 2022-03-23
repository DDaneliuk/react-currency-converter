import React from "react"
// style
import style from './RateItem.module.scss'

const RateItem = (props) => {
    return (
        <div className={style.rateItem}>
            <div className={style.rateFlex}>
                <div className={style.item}>
                    <p>1 {props.code}</p>
                </div>
                <div className={style.item}>
                    <p>{props.value} {props.userCurr}</p>
                </div>
            </div>
        </div>
    )
}

export default RateItem
