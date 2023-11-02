import React, {FC} from 'react';
import styled, {css} from "styled-components";

type ButtonType = {
    variant?: 'primary' | 'outline'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonType> = ({variant = 'primary', children, ...rest}) => {
    return (
        <Root variant={variant} {...rest}>
            {children}
        </Root>
    );
};

const Root = styled.button<{ variant: 'primary' | 'outline' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;
  padding: 10px 15px;
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--main-color);
  color: var(--bloks-color);
  font-size: 1rem;
  box-shadow: 1px 2px 4px var(--text-color);
  transition: all 0.3s;

  & svg path {
    transition: fill 0.3s;
    fill: ${props =>
            props.variant === 'primary'
                    ? 'var(--bloks-color)'
                    : 'var(--text-color)'
    };
  }

  &:not([disabled]):hover {
    transform: translateY(1px);
    box-shadow: 1px 1px 1px #777575;
  }

  &:not([disabled]):active {
    transform: translateY(2px);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.7;
  }

  ${props => props.variant === 'outline' && css`
    background-color: var(--bloks-color);
    border: 1px solid var(--main-color);
    box-shadow: 1px 2px 4px var(--main-color);
    color: var(--text-color);

    &:not([disabled]):hover {
      background-color: var(--main-color);
      color: var(--bloks-color);

      & svg path {
        fill: var(--bloks-color);
      }
    }
  `};

`
