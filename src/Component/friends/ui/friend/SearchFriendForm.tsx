import React, {FC} from 'react';
import {Input} from "../../../../common/form-controls/Input";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import styled from "styled-components";
import iconSearch from '../../../../common/form-controls/search.svg'

export type FormSearchType = {
    searchValue: string
}

const SearchFriend: FC<InjectedFormProps<FormSearchType>> = (props) => {

    return (
        <Root onSelect={props.handleSubmit}>
            <Field
                name={'searchValue'}
                placeholder={'search by name'}
                component={Input}
                type={'search'}
            />
        </Root>
    );
};

export const SearchFriendForm =
    reduxForm<FormSearchType>({form: "searchFriend"})(SearchFriend);

const Root = styled.form`
  margin: 10px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
`