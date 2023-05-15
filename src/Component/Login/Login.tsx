import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

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
            <div><Field placeholder={'login'} name={"login"} component={'input'}/></div>
            <div><Field placeholder={'password'} name={"password"} component={'input'}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={'input'}/> remember me</div>
            <button>submit</button>
        </form>
    )
}

//оборачиваем компоненту в reduxForm и даем имя форме 'login'
const LoginReduxForm = reduxForm<LoginReduxFormType>({form: 'login'})(LoginForm);



