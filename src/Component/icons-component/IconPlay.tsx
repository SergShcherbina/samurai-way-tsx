import React, {FC} from 'react';
import styled from "styled-components";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconPlay: FC<PropsType> = ({...props}) => {
    return (
        <ButtonIcon {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z"/>
            </svg>
        </ButtonIcon>

    );
};

const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
`