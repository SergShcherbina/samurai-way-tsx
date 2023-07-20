import React from "react";
import styled from "styled-components";

type Props = {
    id: string
    name: string
    src: string
}

export const Friend: React.FC<Props> = ({id, name, src}) => {
  return (
    <WrapperFriends>
      <ImageFriends src={src} />
      <TxtName>{name}</TxtName>
    </WrapperFriends>
  );
};

const WrapperFriends = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ImageFriends = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;
const TxtName = styled.div`
  color: #fff;
  font-size: 16px;
`;
