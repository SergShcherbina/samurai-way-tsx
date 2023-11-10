import React, {FC} from 'react';
import styled from "styled-components";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconStop: FC<PropsType> = ({...props}) => {
    return (
        <ButtonIcon {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H18V18H6V6Z"/>
            </svg>
        </ButtonIcon>
    );
};

const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
`