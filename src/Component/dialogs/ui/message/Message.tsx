import React from "react";
import styled from "styled-components";

type Props = {
    message: string
    time: string
    idMessage: string
};
export const Message: React.FC<Props> = ({message, time, idMessage}) => {

    return (
        <RootMessage id={idMessage}>
            <div>{message}</div>
            <Time>{time}</Time>
        </RootMessage>
    )
};

const RootMessage = styled.div`
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  padding: 10px;
  width: fit-content;
  text-align: right;
  align-self: end;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 10px;
    width: 7px;
    height: 10px;
    background-color: var(--background-color);
    transform: rotate(45deg);
  }
`
const Time = styled.span`
  font-size: 0.5rem;
`
