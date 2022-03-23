import React from "react"
// style
import style from './NavBar.module.scss'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className={style.navBlock}>
                <div className={style.navItem}>
                    <NavLink to="/"><p>Converter</p></NavLink>
                </div>
                <div className={style.navItem}>
                    <NavLink to="/rates">Rates</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
