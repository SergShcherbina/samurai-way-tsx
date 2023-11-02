import React, {FC} from 'react';
import styled from "styled-components";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconPause: FC<PropsType> = ({...props}) => {
    return (
        <ButtonIcon {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z"/>
            </svg>
        </ButtonIcon>
    );
};

const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
`