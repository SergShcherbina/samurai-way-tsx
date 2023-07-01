import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Input} from "../FormControls/Input";
import {requiredField} from "../../utils/validators/validators";

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
type LoginReduxFormType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {

    const onSubmit = (dataForm: LoginReduxFormType) => {
        console.log(dataForm, dataForm.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const LoginForm = (props: InjectedFormProps<LoginReduxFormType>) => {
    return (
        //добавляем onSubmit обязательно props.handleSubmit именно с таким названием
        <form onSubmit={props.handleSubmit}>
            <div><Field
                placeholder={'login'}                              //импортируем сюда свою компоненту вместо "input"
                name={"login"}
                component={Input}
                validate={[requiredField]}                         //ф-и в validate вызывается самим redux-form
            /></div>
            <div><Field
                placeholder={'password'}
                name={"password"}
                component={Input}
                validate={[requiredField]}
            /></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me</div>
            <button>submit</button>
        </form>
    )
}

//оборачиваем компоненту в reduxForm и даем имя форме 'login'
const LoginReduxForm = reduxForm<LoginReduxFormType>({form: 'login'})(LoginForm);



