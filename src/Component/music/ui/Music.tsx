import React, {useState} from "react";
import {Player} from "../../Player/Player";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../app/model/store";
import {RootObjectMusic} from "../reducer-music/music-types";
import {TrackItem} from "./TrackItem";

export const Music = () => {
    const [isAllList, setIsAllList] = useState<boolean>(true)
    const dataMusic = useSelector<AppStateType, RootObjectMusic>(state => state.music)

    const onToggleList = () => {
        setIsAllList(!isAllList)
    }

    const dataMusicList = isAllList ? dataMusic.data : dataMusic.favoriteMusic

    return (
        <MusicRoot>
            <Player onToggleList={onToggleList} isAllList={isAllList}/>
            <TrackList>
                {dataMusicList.map(item =>
                    <TrackItem
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        artist={item.artist.name}
                        duration={item.duration}
                        id={item.id}
                    />)}
            </TrackList>
        </MusicRoot>
    );
};

const MusicRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const TrackList = styled.div`
  background-color: var(--block-color);
  border-radius: var(--border-radius);
  padding: var(--padding-blocks);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px
`