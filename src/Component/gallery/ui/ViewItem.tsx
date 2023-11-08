import React, {FC} from 'react';
import styled from "styled-components";

type PropsType = {
    urlImg: string
    title: string
    open: boolean
    onClose: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const ViewItem: FC<PropsType> = ({urlImg, title, open, onClose}) => {
    return (
        <>
            {open &&
                <Backdrop onClick={(e) => onClose(e)}>
                    <Wrapper>
                        <ImgWrap>
                            <img src={urlImg} alt={title}/>
                        </ImgWrap>
                        <Descriptions>
                            {title}
                        </Descriptions>
                    </Wrapper>
                </Backdrop>
            }
        </>
    );
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.39);

  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 440px;
  height: fit-content;
  background-color: var(--block-color);
  border-radius: var(--border-radius);
  padding: 20px;
`

const ImgWrap = styled.div`
  height: 400px;
  width: 400px;
  user-select: none;

  & img {
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`
const Descriptions = styled.h4`
  margin-top: 20px;
`