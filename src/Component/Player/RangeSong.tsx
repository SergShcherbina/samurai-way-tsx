import React, {ChangeEvent, FC, RefObject} from 'react';
import styled from "styled-components";
import {getZero} from "../../utils/get-zero/get-zero";

export type DataTimeType = {
    progress: number,
    minutesPassed: number,
    secondsPassed: number,
    minutesDuration: number,
    secondDuration: number
}

type PropsType = {
    songRef: RefObject<HTMLAudioElement>
    dataTime: DataTimeType
}

export const RangeSong: FC<PropsType> = (
    {
        songRef,
        dataTime: {
            progress,
            minutesPassed= 0,
            secondsPassed= 0,
            minutesDuration= 0,
            secondDuration= 0,
        }
    }) => {

    const onRangeTrack = (e: ChangeEvent<HTMLInputElement>) => {
        if (songRef.current) {
            const durationSong = songRef.current.duration;
            const InputValue = +e.currentTarget.value;
            songRef.current.currentTime = (InputValue / 100) * durationSong;
        }
    };

    const timeSong = () => {
        const current = getZero(minutesPassed) + ':' + getZero(secondsPassed)
        const duration =  getZero(minutesDuration) + ':' + getZero(secondDuration)
        return `${current} / ${duration}`
    }

    return (
        <Root>
            <SongRange
                type={'range'}
                onChange={onRangeTrack}
                value={progress ? progress : 0}
            />
            <p>
                {timeSong()}
            </p>
        </Root>
    );
};

const Root = styled.div`
  display: flex;
  width: 100%;
  grid-column: 1 / -1;
  gap: 10px
`
const SongRange = styled.input`
  appearance: none;
  padding: 9px 0;
  background: transparent;
  cursor: pointer;
  flex-grow: 1;

  &::-webkit-slider-runnable-track {
    appearance: none;
    background-color: var(--active-color);
    border-radius: 8px;
    height: 6px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    margin-top: -9px;
    width: 12px;
    height: 24px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid var(--second-text-color);
  }
`
