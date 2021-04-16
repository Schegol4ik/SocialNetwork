import React from 'react';
import s from './Headercomp.module.css';
import {NavLink} from "react-router-dom";



const Header =(props) =>{
    return(
        <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png' />
            <div className={s.loginBlock}>
                { props.isAuth ?
                    <div>{props.login}-<button onClick={props.logoutThunk}>Log Out</button></div>
                    :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    )
}

export default Header;