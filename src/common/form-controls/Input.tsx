import React, {ComponentPropsWithoutRef, FC} from "react";
import {FieldType} from "./Textarea";
import styled, {css} from "styled-components";
import iconSearch from './search.svg'

type InputType = {
    label?: string
    fulWidth?: boolean
} & FieldType & ComponentPropsWithoutRef<'input'>

export const Input: FC<InputType> = (
    {
        input,
        meta,
        placeholder,
        type,
        label,
        ...rest
    }) => {
    return (
        <Wrapper type={type}>
            {label && <label htmlFor={input.name}>{label}</label>}
            <StyleInput
                {...input}
                {...rest}
                placeholder={placeholder}
                id={input.name}
                type={type}
                errors={meta.touched && meta.error ? 'true' : 'false'}
            />
            {meta.touched && meta.error ? <ErrorMessage> {meta.error} </ErrorMessage> : null}
        </Wrapper>
    );
};

const Wrapper = styled.div <{ type: string | undefined }>`{
  position: relative;
  font-size: 0.8rem;

  & label {
    position: absolute;
    border-radius: 3px;
    padding: 0 3px;
    border: 1px solid var(--border-color);
    top: -8px;
    left: 15px;
    z-index: 1;

    color: var(--second-text-color);
    background-color: var(--color-bloks);
  }

  ${props => props.type === 'search' && css`
    &:before {
      content: '';
      position: absolute;
      top: 18px;
      right: 10px;
      width: 15px;
      height: 15px;
      background: url(${iconSearch})center / cover no-repeat;
    }`
  }`


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

  //стили для скрытия крестика type=search
  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }
`
const ErrorMessage = styled.div`
  color: var(--error-color);
`