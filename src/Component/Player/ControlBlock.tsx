import React, {FC} from 'react';
import {IconLike, IconNext, IconPause, IconPlay, IconPrev, IconStop} from "../icons-component";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/model/store";
import {TrackType} from "../music/reducer-music/types-music";
import {Dispatch} from "redux";
import {actionsMusic} from "../music/reducer-music/actions-music";

type PropsType = {
    togglePlay: () => void
    isAllList: boolean
    onToggleList: () => void
}

export const ControlBlock: FC<PropsType> = React.memo(({togglePlay, onToggleList, isAllList}) => {
    const isPlay = useSelector<AppStateType, boolean>(state => state.music.isPlay)
    const activeTrack = useSelector<AppStateType, TrackType>(state => state.music.activeTrack)
    const trackList = useSelector<AppStateType, TrackType[]>(state => state.music.data)
    const dispatch: Dispatch = useDispatch()

    const nextTrackHandler = () => {
        for (let i = 0; i < trackList.length; i++) {
            if (trackList[i].id === activeTrack.id) {
                const nextTrack = trackList[i + 1] || trackList[0]
                    dispatch(actionsMusic.setActiveTrackAC(nextTrack.id))
                    break
            }
        }
    }

    const prevTrackHandler = () => {
        for (let i = 0; i < trackList.length; i++) {
            if (trackList[i].id === activeTrack.id) {
                const prevTrack = trackList[i - 1] || trackList[trackList.length - 1]
                dispatch(actionsMusic.setActiveTrackAC(prevTrack.id))
                break
            }
        }
    }

    return (
        <IconsWrap>
            <IconStop/>
            <IconPrev onClick={prevTrackHandler}/>
            {isPlay ? <IconPause onClick={togglePlay}/> : <IconPlay onClick={togglePlay}/>}
            <IconNext onClick={nextTrackHandler}/>
            <IconLike onClick={onToggleList} color={!isAllList ? '#f44336' : ''}/>
        </IconsWrap>
    );
});

const IconsWrap = styled.div`
  justify-self: center;


  & button svg {
    transition: all 0.2s;

    &:hover {
      fill: var(--main-color);
    }
`
