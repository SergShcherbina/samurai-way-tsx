import React, {FC} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setActiveTrackAC, setPlayAC} from "../reducer-music/reducer-music";
import {AppStateType} from "../../../app/model/store";
import {Dispatch} from "redux";
import {TrackType} from "../reducer-music/music-types";
import {getZero} from "../../../utils/get-zero/get-zero";

type PropsType = {
    image: string
    title: string
    artist: string
    duration: number
    id: number
}

export const TrackItem: FC<PropsType> = ({image, title, artist, duration, id}) => {
    const dispatch: Dispatch = useDispatch();
    const activeTrack = useSelector<AppStateType, TrackType>(state => state.music.activeTrack)

    const onActiveTrack = (id: number) => {
        dispatch(setActiveTrackAC(id))
        dispatch(setPlayAC(true, true))
    }

    const minutesDuration = Math.floor(duration / 60)
    const secondsDuration = duration - Math.floor(duration / 60) * 60

    return (
        <TrackRoot
            onClick={() => onActiveTrack(id)}
            active={activeTrack.id === id}
        >
            <img src={image} alt={'alt'}/>
            <Title>
                <h3>{artist}</h3>
                <p>{title}</p>
            </Title>
            <span>{getZero(minutesDuration) + ':' + getZero(secondsDuration) }</span>
        </TrackRoot>
    );
};

const TrackRoot = styled.button<{ active: boolean }>`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 10px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
  background-color: ${props => props.active ? '#cfcfcf' : ''};

  display: flex;
  gap: 10px;

  & img {
    height: 100%;
    border-radius: 3px;
    object-fit: contain;
  }

  & span {
    align-self: flex-end;
    text-align: end;
    flex-grow: 1;
  }

  &:hover {
    box-shadow: 0 1px 5px var(--main-color);
    transform: translateY(1px);
  }

  &:active {
    transform: translateY(0);
  }
`
const Title = styled.div`
  text-align: left;
`