import React, {FC} from 'react';
import styled from "styled-components";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../../../../component/button/button";
import {Input} from "../../../../component/form-controls/Input";
import {fieldMaxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {ResponseProfileType} from "../../model/profile-types";

export type AboutMeReduxFormType = ResponseProfileType;

const AboutMeReduxForm: FC<InjectedFormProps<AboutMeReduxFormType>> = (props, {onClose}) => {
    const maxLength = fieldMaxLengthCreator(100);

    return (
        <Form onSubmit={props.handleSubmit}>
            <h3>Change information</h3>
            <Field
                id={"fullName"}
                name={"fullName"}
                component={Input}
                validate={[requiredField]}
                label={'Name'}/>
            <Field
                id={"aboutMe"}
                name={"aboutMe"}
                component={Input}
                validate={[requiredField]}
                label={'About me'}/>
            <Field
                id={"lookingForAJobDescription"}
                name={"lookingForAJobDescription"}
                component={Input}
                validate={[requiredField]}
                label={'Looking for a job description'}/>
            <Field
                id={"contacts.facebook"}
                name={"contacts.facebook"}
                component={Input}
                validate={[]}
                label={'facebook'}/>
            <Field
                id={"contacts.github"}
                name={"contacts.github"}
                component={Input}
                validate={[]}
                label={'github'}/>

            <Field
                id={"contacts.instagram"}
                name={"contacts.instagram"}
                component={Input}
                validate={[]}
                label={'instagram'}/>
            <Field
                id={"contacts.vk"}
                name={"contacts.vk"}
                component={Input}
                validate={[]}
                label={'vkontakte'}/>
            <label>
                <Field name={"lookingForAJob"} type={'checkbox'} component={Input}/>
                Looking for a job
            </label>
            <Button>Change</Button>
        </Form>

    );
};

export const AboutMeForm =
    reduxForm<AboutMeReduxFormType>({form: 'aboutMeForm'})(AboutMeReduxForm)


const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 15px;

  background-color: var(--block-color);
  min-width: 350px;
  padding: 20px 30px;
  border-radius: var(--border-radius);

  & label {
    display: flex;
    align-items: end;
    gap: 10px;
    margin-bottom: 25px;
  }

  & input {
    flex: 1 0 300px;
  }
`