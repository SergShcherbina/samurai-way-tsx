import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {RangeVolume} from "./RangeVolume";
import styled from "styled-components";
import {DataTimeType, RangeTrack} from "./RangeTrack";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../app/model/store";
import {TrackType} from "../../reducer-music/types-music";
import {Dispatch} from "redux";
import {ControlBlock} from "./ControlBlock";
import {TrackName} from "./TrackName";
import {actionsMusic} from "../../reducer-music/actions-music";

type PropsType = {
    onToggleList: () => void
    isAllList: boolean
}

export const Player: FC<PropsType> = ({onToggleList, isAllList}) => {
    const songRef = useRef<HTMLAudioElement>(null)
    const [dataTime, setDataTime] = useState({} as DataTimeType)
    const activeTrack = useSelector<AppStateType, TrackType>(state => state.music.activeTrack)
    const isPlay = useSelector<AppStateType, boolean>(state => state.music.isPlay)
    const isAutoPlay = useSelector<AppStateType, boolean>(state => state.music.isAutoPlay)
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        if(songRef.current){
            dispatch(actionsMusic.setRefLinkAC(songRef.current))
        }
    }, []);

    const togglePlay = useCallback(() => {
        if (isPlay) {
            songRef.current?.pause()
            dispatch(actionsMusic.setPlayAC(false))
        } else {
            void songRef.current?.play()
            dispatch(actionsMusic.setPlayAC(true, true))
        }
    }, [isPlay]);

    const updateTimeTrack = () => {
        if (songRef.current) {
            const durationSong = songRef.current.duration;
            const currentTime = songRef.current.currentTime;
            const progress = (currentTime / durationSong) * 100;

            const minutesPassed = Math.floor(currentTime / 60) || 0;
            const secondsPassed = Math.floor(currentTime % 60) || 0;

            const minutesDuration = Math.floor(durationSong / 60) || 0;
            const secondDuration = Math.floor(durationSong % 60) || 0;

            setDataTime({
                progress,
                minutesPassed,
                secondsPassed,
                minutesDuration,
                secondDuration
            })
        }
    };

    return (
        <PlayerRoot>
            <TrackName/>
            <ControlBlock togglePlay={togglePlay} onToggleList={onToggleList} isAllList={isAllList}/>
            <RangeVolume songRef={songRef}/>

            <audio
                autoPlay={isAutoPlay}
                ref={songRef}
                src={activeTrack.preview || ''}
                onTimeUpdate={updateTimeTrack}
            />

            <RangeTrack songRef={songRef} dataTime={dataTime}/>
        </PlayerRoot>
    );
};

const PlayerRoot = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  position: sticky;
  top: 5px;

  background-color: var(--block-color);
  border-radius: 10px;
  padding: var(--padding-blocks) 40px;
  border: 2px solid var(--border-color);
`
