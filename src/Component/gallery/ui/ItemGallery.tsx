import React, {FC} from 'react';
import styled from "styled-components";
import image from '../../../assets/img/icon-resize.svg'

type PropsType = {
    img: string
    title: string
}

export const ItemGallery: FC<PropsType> = ({img, title}) => {
    return (
        <Root>
            <ImgWrapper>
                <img src={img} alt={'alt'}/>
            </ImgWrapper>
            <p>{title}</p>
        </Root>

    );
};

const ImgWrapper = styled.div`
  width: 195px;
  height: 195px;
  transition: all 0.3s;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 0;
    height: 0;
    background: url("${image}") center / cover no-repeat;
    opacity: 0;
    transition: all 0.3s;
  }
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 195px;
  gap: 10px;
  position: relative;

  &:hover {
    ${ImgWrapper} {
      transform: translateY(-2px);
      &:before {
        width: 50px;
        height: 50px;
        opacity: 1;
      }
    }
  }
`
