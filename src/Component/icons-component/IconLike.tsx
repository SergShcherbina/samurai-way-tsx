import React, {FC} from 'react';
import styled from "styled-components";

type PropsType = React.ButtonHTMLAttributes<HTMLDivElement>

export const IconLike: FC<PropsType> = ({color, ...props}) => {
    return (
        <span {...props} >
            <Svg  width="22" height="22" viewBox="0 0 24 24" fill={color ? color : "currentColor"} xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"/>
            </Svg>
        </span>
    );
};

const Svg = styled.svg`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`
