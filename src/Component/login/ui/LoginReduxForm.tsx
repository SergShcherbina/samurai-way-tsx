import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../../../common/form-controls/Input";
import {requiredField} from "../../../utils/validators/validators";

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
export type LoginReduxFormType = {
    login: string;
    password: string;
    rememberMe: boolean;
};

const LoginRedux = (props: InjectedFormProps<LoginReduxFormType>) => {
    return (
        //добавляем onSubmit обязательно props.handleSubmit именно с таким названием
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"login"} //импортируем сюда свою компоненту вместо "input"
                    name={"login"}
                    component={Input}
                    validate={[requiredField]} //ф-и в validate вызывается самим redux-form
                />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            <div >
                {/*эта ошибка приходит из thunk благодаря action stopSubmit из redux-form*/}
                {props.error}
            </div>
            <button>submit</button>
        </form>
    );
};

//оборачиваем компоненту в reduxForm и даем имя форме 'login'
export const LoginReduxForm = reduxForm<LoginReduxFormType>({form: "login"})(LoginRedux);
