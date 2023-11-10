import React from "react";
import styled, {css} from "styled-components";

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
            <StyleTextarea {...input} {...props} color={'#f44336'} errors={meta.touched && meta.error}/>
            {meta.touched && meta.error ? <ErrorMessage> {meta.error} </ErrorMessage> : null}
        </div>
    );
};

const StyleTextarea = styled.textarea <{ errors: boolean | string, color: string }>`
  border-radius: 5px;
  outline: none;
  
  //комбинирование стилей в зависимости от пропсов не забываем import css и типизация его 
  ${props => props.errors && css<{ color: string }>`
    box-shadow: 0 0 3px ${props => props.color};
  `
  };

  &:focus-visible {
    outline: 1px solid var(--main-color);
  }

`
const ErrorMessage = styled.div`
  color: var(--error-color);
`