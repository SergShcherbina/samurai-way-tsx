import React, {FC} from 'react';
import {IconLike, IconNext, IconPause, IconPlay, IconPrev, IconStop} from "../../../../component/icons-component";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../app/model/store";
import {TrackType} from "../../model/types-music";
import {Dispatch} from "redux";
import {actionsMusic} from "../../model/actions-music";

type PropsType = {
    togglePlay: () => void
    isAllList: boolean
    onToggleList: () => void
    songRef: HTMLAudioElement | null
}

export const ControlBlock: FC<PropsType> = React.memo(({togglePlay, onToggleList, isAllList, songRef}) => {
    const isPlay = useSelector<AppStateType, boolean>(state => state.music.isPlay)
    const activeTrack = useSelector<AppStateType, TrackType>(state => state.music.activeTrack)
    const trackList = useSelector<AppStateType, TrackType[]>(state => state.music.data)
    const dispatch: Dispatch = useDispatch()
    const refLink = useSelector<AppStateType, HTMLAudioElement | null>(state => state.music.refLink)

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

    const onStopRange = () => {
        if (songRef) {
            dispatch(actionsMusic.setPlayAC(false))
            songRef.currentTime = 0
            songRef.pause()
        }
    }

    return (
        <IconsWrap>
            <IconStop onClick={onStopRange}/>
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
