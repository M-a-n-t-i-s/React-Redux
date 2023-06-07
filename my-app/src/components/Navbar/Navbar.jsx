import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return  (
    <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className ={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' className ={ navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className ={ navData => navData.isActive ? s.active : s.item }>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' className ={ navData => navData.isActive ? s.active : s.item }>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' className ={ navData => navData.isActive ? s.active : s.item }>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' className ={ navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
        </div>
        <div className={s.friends}>
            <h2>Friends</h2>
            <span>
                <img src='https://cs7.pikabu.ru/post_img/big/2019/03/26/11/1553625291161446207.jpg' />
                <img src='https://cs7.pikabu.ru/post_img/big/2019/03/26/11/1553625291161446207.jpg' />
                <img src='https://cs7.pikabu.ru/post_img/big/2019/03/26/11/1553625291161446207.jpg' />
            </span>
        </div>
    </nav>

    )
}

export default NavBar;