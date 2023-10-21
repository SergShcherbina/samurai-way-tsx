import React from "react";
import { FieldType } from "./Textarea";
import styled from "styled-components";

//наш кастомный input для redux-form
//в пропсах приходят все данные о input, в том числе validate
export const Input = ({ input, meta, ...props }: FieldType) => {
  return (
    <div>
      <StyleInput {...input} {...props} errors={meta.touched && meta.error ? 'true' : 'false'} />
      {meta.touched && meta.error ? <ErrorMessage > {meta.error} </ErrorMessage> : null}
    </div>
  );
};

const StyleInput = styled.textarea <{ errors: string }>`
  box-shadow: inset 0 0 2px 2px ${props => props.errors  ? '#f44336' : 'none'};
  border-radius: 10px;
  position: relative;
`
const ErrorMessage = styled.div`
  color: #f44336;
`