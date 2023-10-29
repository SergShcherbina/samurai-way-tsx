import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../../../common/form-controls/Input";
import {requiredField} from "../../../utils/validators/validators";
import styled from "styled-components";

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
export type LoginReduxFormType = {
    login: string;
    password: string;
    rememberMe: boolean;
};

const LoginRedux = (props: InjectedFormProps<LoginReduxFormType>) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor={"login"}>Email</label>
                <Field
                    id={"login"}
                    name={"login"}
                    component={Input}
                    validate={[requiredField]} //ф-и в validate вызывается самим redux-form
                />
            </div>

            <div>
                <label htmlFor={"Password"}>Password</label>
                <Field id={"Password"}
                       name={"password"}
                       type={'password'}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>

            <label>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
                Remember me
            </label>

            <Error>{props.error}</Error>

            <button>Sign in</button>
        </Form>
    );
};

//оборачиваем компоненту в reduxForm и даем имя форме 'login'
export const LoginReduxForm = reduxForm<LoginReduxFormType>({form: "login"})(LoginRedux);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  & div:has(label) {       //div в котором вложенным label
    position: relative;
    font-size: 0.8rem;

    & label {
      position: absolute;
      border-radius: 3px;
      padding: 0 3px;
      border: 1px solid var(--border-color);
      top: -8px;
      left: 15px;
      z-index: 1;
      
      color: var(--second-text-color);
      background-color: var(--color-bloks);
    }
  }

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
