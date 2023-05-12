import React from 'react';
import { reduxForm, Field  } from 'redux-form';

export const Login = () => {
    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const LoginForm = (props: any) => {
    return (
        //добавляем onSubmit
        <form onSubmit={props.onSubmit}>
            <div><Field placeholder={'login'} name={"login"}  component={'input'}/></div>
            <div><Field placeholder={'pasword'} name={"password"}  component={'input'}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={'input'}/> remember me</div>
            <button>submit</button>
        </form>
    )
}

//оборачиваем компоненту в reduxForm и даем имя форме 'login'
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);



