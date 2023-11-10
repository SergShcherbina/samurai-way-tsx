import React, {FC} from 'react';
import styled from "styled-components";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconPrev: FC<PropsType> = ({...props}) => {
    return (
        <ButtonIcon {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 18V6L2.5 12L11 18ZM11.5 12L20 18V6L11.5 12Z"/>
            </svg>
        </ButtonIcon>
    );
};

const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
`