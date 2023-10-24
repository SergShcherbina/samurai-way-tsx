import React from "react";
import {FieldType} from "./Textarea";
import styled from "styled-components";

//наш кастомный input для redux-form
//в пропсах приходят все данные о input, в том числе validate
export const Input = ({input, meta, ...props}: FieldType) => {
    return (
        <div>
            <StyleInput
                {...input}
                {...props}
                // type={'search'}
                errors={meta.touched && meta.error ? 'true' : 'false'}
            />
            {meta.touched && meta.error ? <ErrorMessage> {meta.error} </ErrorMessage> : null}
        </div>
    );
};

const StyleInput = styled.input <{ errors: string }>`
    //box-shadow: inset 0 0 2px 2px ${props => props.errors ? '#f44336' : 'none'};
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  border: 1px solid var(--border-color);
  font-size: 1rem;

  &:focus {
    box-shadow: 0 0 5px var(--main-color);
    outline: none;
  }
`
const ErrorMessage = styled.div`
  color: #f44336;
`