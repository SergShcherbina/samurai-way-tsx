import React from 'react';
import {fieldMaxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../../common/form-controls/Input";
import {DialogReduxFormType} from "./Dialogs";

//creator для валидации длинны выносим за пределы формы и сохр-й результат передаем в validate !!!!!
const maxLength = fieldMaxLengthCreator(200);

const DialogsForm: React.FC<InjectedFormProps<DialogReduxFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Input} //импортируем сюда свою компоненту вместо "input"
                name={"dialogMessage"}
                placeholder={"message"}
                validate={[requiredField, maxLength]} //ф-и в validate вызывается самим redux-form
            />
            <button>send</button>
        </form>
    );
};

export const DialogReduxForm = reduxForm<DialogReduxFormType>({form: "dialogsForm"})(DialogsForm);


