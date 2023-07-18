import React from "react";
import styled from "styled-components";

export const EveryFriend = (props: any) => {
  return (
    <WrapperFriends>
      <ImageFriaengs src={props.src} />
      <TxtName>{props.name}</TxtName>
    </WrapperFriends>
  );
};

const WrapperFriends = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageFriaengs = styled.img`
  max-width: 40px;
  max-height: 40px;
  border-radius: 100%;
`;
const TxtName = styled.div`
  color: #fff;
  font-size: 16px;
`;
