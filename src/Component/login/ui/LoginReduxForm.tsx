import React, {FC} from "react";
import {reduxForm, Field, InjectedFormProps, FormProps} from "redux-form";
import {Input} from "../../../common/form-controls/Input";
import {requiredField} from "../../../utils/validators/validators";
import styled from "styled-components";

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
export type LoginReduxFormType = {
    login: string;
    password: string;
    rememberMe: boolean;
    captcha: string
};

const LoginRedux: FC<{ captcha: string } & InjectedFormProps<LoginReduxFormType, { captcha: string }>> = (props) => {

    return (
        <Form onSubmit={props.handleSubmit}>
            <Field
                id={"login"}
                name={"login"}
                component={Input}
                validate={[requiredField]} //ф-и в validate вызывается самим redux-form
                label={'Email'}
            />
            <Field id={"Password"}
                   name={"password"}
                   type={'password'}
                   component={Input}
                   validate={[requiredField]}
                   label={'Password'}
            />
            <label>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
                Remember me
            </label>

            <Error>{props.error}</Error>

            {props.captcha.length > 0 &&
                <div>
                    <Field id={"captcha"}
                           name={"captcha"}
                           component={Input}
                           validate={[requiredField]}
                           label={'Captcha'}
                    />
                    <br/>
                    <img src={props.captcha} alt={'captcha'}/>
                </div>
            }

            <button>Sign in</button>
        </Form>
    );
};

//оборачиваем компоненту в reduxForm и даем имя форме 'login'
export const LoginReduxForm =
    reduxForm<LoginReduxFormType, { captcha: string }>({form: "login"})(LoginRedux);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & label {
    display: flex;
    align-items: end;
    gap: 10px;
  }

  & button {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    background-color: var(--main-color);
    border: none;
    padding: 12px;
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
      background-color: var(--hover-btn-color);
    }
  }
`
const Error = styled.div`
  color: red;
`
