import React, {FC} from 'react';
import styled from "styled-components";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconNext: FC<PropsType> = ({...props}) => {
    return (
        <ButtonIcon {...props}>
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L12.5 12L4 6V18ZM13 6V18L21.5 12L13 6Z"/>
            </svg>
        </ButtonIcon>

    );
};

const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
`