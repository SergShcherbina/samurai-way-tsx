import React, {FC} from 'react';
import {IconLike, IconNext, IconPause, IconPlay, IconPrev, IconStop} from "../icons-component";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../app/model/store";

type PropsType = {
    togglePlay: () => void
    isAllList: boolean
    onToggleList: () => void
}

export const ControlBlock: FC<PropsType> = React.memo(({togglePlay, onToggleList, isAllList}) => {
    const isPlay = useSelector<AppStateType, boolean>(state => state.music.isPlay)

    return (
        <IconsWrap>
            <IconStop/>
            <IconPrev/>
            {isPlay ? <IconPause onClick={togglePlay}/> : <IconPlay onClick={togglePlay}/>}
            <IconNext/>
            <IconLike onClick={onToggleList} color={!isAllList ? '#f44336' : ''}/>
        </IconsWrap>
    );
});

const IconsWrap = styled.div`
  justify-self: center;
`
