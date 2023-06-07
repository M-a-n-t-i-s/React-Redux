import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import '../../index.js';
import {Navigate, useNavigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = state.messagesData
        .map(mess => <Message className={s.message} message={mess.message} key={mess.id} id={mess.id}/>);
    // let newMessageElement = React.createRef();

    // let onSentNewMessage = () => {
    //
    //     let text = newMessageElement.current.value;
    //     props.sentNewMessage(text);
    //     newMessageElement.current.value = '';
    //
    // }
    let addNewMessage = (values) => {
        props.sentNewMessage(values.newMessageElement);
    }
    if (!props.isAuth)  return  <Navigate to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            <div></div>

        </div>
    )
}

let maxLength100 =maxLengthCreator(100)

const AddMessageForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
        <div className={s.newMessageField}>
        <Field name={"newMessageElement"} component={Textarea}  validate={[required, maxLength100]} placeholder='Enter your message'/>
        {/*<Field name={"newMessageElement"} component={"textarea"} ref={newMessageElement} placeholder='Enter your message'></Field>*/}
        <button>Sent</button>
    </div>
    </form>

}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm "})(AddMessageForm)
export default Dialogs;