import styles from "./FormsControls.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";
import React from "react";

const FormControl = ({input, meta: {touched, error }, children}) => {
    const hasError =touched && error;
    return <div className={styles.formControl+" "+ (hasError ? styles.error: "")}>
        <div>
            {children}
        </div>
        { hasError && <span>{error}</span> }
    </div>
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...restProps} {...input} /></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...restProps} {...input} /></FormControl>
}

export  const createField = (name, placeholder, validators, component, props={}, text="") =>  ( <div>
    <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/> {text}
</div>
    )