import React from 'react';
import {fieldMaxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../../common/form-controls/Input";
import {DialogReduxFormType} from "./Dialogs";
import {Button} from "../../../Button/button";
import styled from "styled-components";

//creator для валидации длинны выносим за пределы формы и сохр-й результат передаем в validate !!!!!
const maxLength = fieldMaxLengthCreator(200);

const DialogsForm: React.FC<InjectedFormProps<DialogReduxFormType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field
                component={Input} //импортируем сюда свою компоненту вместо "input"
                name={"dialogMessage"}
                placeholder={"message"}
                validate={[requiredField, maxLength]} //ф-и в validate вызывается самим redux-form
            />
            <ButtonStyle variant={'outline'} disabled={!props.anyTouched || !props.valid}>Send</ButtonStyle>
        </Form>
    );
};

export const DialogReduxForm = reduxForm<DialogReduxFormType>({form: "dialogsForm"})(DialogsForm);

const Form = styled.form`
  display: flex;
  gap: 10px;
  
  & >div {
    flex-grow: 1;
  }
`
const ButtonStyle = styled(Button)`
    height: 50px;
`