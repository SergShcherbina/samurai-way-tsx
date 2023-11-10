import React from 'react';
import image from '../../assets/img/oops404.webp'
import styled from "styled-components";

export const NotFound = () => {
    return (
        <Root>
            <img src={image} alt={'404'}/>
        </Root>
    );
};

const Root = styled.div`
  width: 100%;
  
  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`