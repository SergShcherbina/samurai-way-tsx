import React, {useRef, useState} from 'react';
import {RangeVolume} from "./RangeVolume";
import styled from "styled-components";
import {IconStop, IconPause, IconLike, IconPrev, IconPlay, IconNext} from "../icons-component";
import {DataTimeType, RangeSong} from "./RangeSong";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../app/model/store";
import {TrackType} from "../music/reducer-music/music-types";
import {Dispatch} from "redux";
import {setPlayAC} from "../music/reducer-music/reducer-music";

export const Player = () => {
    const songRef = useRef<HTMLAudioElement>(null)
    const [dataTime, setDataTime] = useState({} as DataTimeType)
    const activeTrack = useSelector<AppStateType, TrackType>(state => state.music.activeTrack)
    const isPlay = useSelector<AppStateType, boolean>(state => state.music.isPlay)
    const isAutoPlay = useSelector<AppStateType, boolean>(state => state.music.isAutoPlay)
    const dispatch: Dispatch = useDispatch()

    const togglePlay = () => {
        if (isPlay) {
            songRef.current?.pause()
            dispatch(setPlayAC(false))
        } else {
            void songRef.current?.play()
            dispatch(setPlayAC(true, true))
        }
    };

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
            <SongName>
                <p>{activeTrack.artist.name}</p>
                <span>{activeTrack.title}</span>
            </SongName>

            <IconsWrap>
                <IconStop/>
                <IconPrev/>
                {isPlay ? <IconPause onClick={togglePlay}/> : <IconPlay onClick={togglePlay}/>}
                <IconNext/>
                <IconLike/>
            </IconsWrap>

            <RangeVolume songRef={songRef}/>

            <audio
                autoPlay={isAutoPlay}
                ref={songRef}
                src={activeTrack.preview || ''}
                onTimeUpdate={updateTimeTrack}
            />

            <RangeSong songRef={songRef} dataTime={dataTime}/>
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

  background-color: rgb(255 95 173);
  border-radius: 10px;
  padding: var(--padding-blocks) 40px;
  border: 2px solid var(--main-color);
`
const IconsWrap = styled.div`
  justify-self: center;
`
const SongName = styled.div`
  font-weight: 700;
  font-size: 1.1rem;

  & > span {
    font-weight: normal;
    font-size: 0.9rem;
  }
`