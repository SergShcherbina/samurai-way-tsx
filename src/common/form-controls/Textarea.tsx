import React from "react";
import styled from "styled-components";

export type FieldType = {
    input: TextareaInputType;
    meta: TextareaMetaType;
    placeholder: string;
};
type TextareaInputType = {
    name: string;
    onBlur: () => void;
    onChange: () => void;
    onDragStart: () => void;
    onDrop: () => void;
    onFocus: () => void;
    value: string;
};
type TextareaMetaType = {
    active: boolean;
    asyncValidating: boolean;
    autofilled: boolean;
    dirty: boolean;
    dispatch: any;
    error: string;
    form: string;
    initial: undefined;
    invalid: boolean;
    pristine: boolean;
    submitFailed: boolean;
    submitting: boolean;
    touched: boolean;
    valid: boolean;
    visited: boolean;
    warning: any;
};

//наш кастомный input для redux-form
//в пропсах приходят все данные о input, в том числе validate
export const Textarea: React.FC<FieldType> = ({input, meta, ...props}) => {

    return (
        <div>
            <StyleTextarea {...input} {...props} errors={meta.touched && meta.error ? 'true' : ''}/>
            {meta.touched && meta.error ? <ErrorMessage> {meta.error} </ErrorMessage> : null}
        </div>
    );
};

const StyleTextarea = styled.textarea <{ errors: string }>`
  //box-shadow: inset 0 -2px 0px 1px ${props => props.errors  ? '#f44336' : 'none'};
`
const ErrorMessage = styled.div`
  color: #f44336;
`