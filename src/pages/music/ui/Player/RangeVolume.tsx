import React, {ChangeEvent, FC, RefObject, useEffect} from 'react';
import styled from "styled-components";
import volumeBg from '../../../../assets/img/volume-bg.png';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../app/model/store";
import {Dispatch} from "redux";
import {actionsMusic} from "../../model/actions-music";

type PropsType = {
    songRef: RefObject<HTMLAudioElement>
}

export const RangeVolume: FC<PropsType> = React.memo(({songRef}) => {
    const currentVolume = useSelector<AppStateType, number>(state => state.music.volume);
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        if (songRef.current) {
            songRef.current.volume = currentVolume / 100
        }
    }, [currentVolume]);

    const onVolume = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionsMusic.setVolumeAC(Number(e.target.value)));
    };

    return (
        <>
            <InputRange
                type={'range'}
                onChange={onVolume}
                value={currentVolume}
            />
        </>
    );
});

const InputRange = styled.input`
  appearance: none;
  padding: 9px 0;
  background: transparent;
  cursor: pointer;
  justify-self: flex-end;

  &::-webkit-slider-runnable-track {
    appearance: none;
    background-image: url(${volumeBg});
    background-position: center;
    background-repeat: no-repeat;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 24px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid var(--second-text-color);
  }
`
