import React, {FC, ReactChildren} from 'react';
import styled from "styled-components";

type BlockTitleType = {
    title: string
    children?: ReactChildren
}

export const BlockTitle: FC<BlockTitleType> = ({title, children}) => {
    return (
        <Header>
            <h2>{title}</h2>
            {children}
        </Header>
    );
};

const Header = styled.div `
  background-color: var(--bloks-color);
  border-radius: var(--border-radius) ;
  padding: 20px;
`