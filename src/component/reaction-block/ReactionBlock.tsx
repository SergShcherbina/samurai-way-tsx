import React, {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart, faHeartCrack} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

type PropsType = {
    id: string
    like: number
    dislike: number
    watch: number
    likeHandler: (id: string) => void
    dislikeHandler: (id: string) => void
};

export const ReactionBlock: FC<PropsType> = (
    {
        id,
        like,
        dislike,
        watch,
        likeHandler,
        dislikeHandler
    }
) => {
    return (
        <Icons>
            <span onClick={() => likeHandler(id)}>
                <FontAwesomeIcon icon={faHeart} size={"sm"}/> {like}
            </span>
            <span onClick={() => dislikeHandler(id)}>
                <FontAwesomeIcon icon={faHeartCrack} size={"sm"}/> {dislike}
            </span>
            <span>
                <FontAwesomeIcon icon={faEye} size={"sm"}/> {watch}
            </span>
        </Icons>
    );
};

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-self: end;

  & span {
    transition: 0.3s all;
    cursor: pointer;

    & svg {
      transition: all 0.3s;
    }

    &:hover {
      transform: translateY(-2px);

      &:nth-child(1) {
        & svg path {
          fill: var(--error-color);
        }
      }

      &:nth-child(2) {
        & svg path {
          fill: var(--main-color);
        }
      }

      &:last-child {
        &:hover {
          transform: translateY(0px);
          cursor: auto;
        }

        & svg {
          transform: rotateX(180deg);
        }
      }

    }
  }
`