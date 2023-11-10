import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../component/form-controls/Input";
import styled from "styled-components";

export type UserSearchFormType = {
    value: string
}

const UserSearch: FC<InjectedFormProps<UserSearchFormType>> = (props) => {
    return (
        <Root onSelect={props.handleSubmit}>
            <Field name={'value'}
                   placeholder={'search for user by name'}
                   type={'search'}
                   component={Input}
            />
        </Root>
    );
};

export const UserSearchForm =
    reduxForm<UserSearchFormType>({form: 'userSearch'})(UserSearch);

const Root = styled.form`
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
`