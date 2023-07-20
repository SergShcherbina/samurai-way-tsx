import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../../../common/form-controls/Textarea";
import {requiredField} from "../../../../../utils/validators/validators";
import classes from './addPostForm.module.css'

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
type FormDataType = {
    addPostProfile: string;
};

//импортируем InjectedFormProps из redux-form в <джинериках> уточняющий type
const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea} name="addPostProfile" validate={[requiredField]}
                       placeholder="Введите текст"/>
            </div>
            <button className={classes.button} onBlur={props.reset} >Send</button>
        </form>
    );
};
//типизация возвращаемого значения формы
export const AddPostReduxForm = reduxForm<FormDataType>({form: "addPostProfile"})(AddPostForm);
