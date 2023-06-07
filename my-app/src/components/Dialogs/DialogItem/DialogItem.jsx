import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialogs + ' ' + s.active}>
        <img src='https://cs7.pikabu.ru/post_img/big/2019/03/26/11/1553625291161446207.jpg' />
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem;