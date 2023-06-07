import React from "react";
import s from './../Dialogs.module.css';




const Message = (props) => {

    if (props.id===1)
        return <div className={s.sender}><div className={s.dialogs+' '+s.messageMain}>{props.message}</div></div>
    else
         return <div className={s.recipient}><div className={s.dialogs+' '+s.messageMain}>{props.message}</div></div>

}


export default Message;