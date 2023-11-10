import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../app/model/store";
import {TrackType} from "../../model/types-music";

export const TrackName = React.memo(() => {
    const activeTrack = useSelector<AppStateType, TrackType>(state => state.music.activeTrack)

    return (
        <SongName>
            <p>{activeTrack.artist.name}</p>
            <span>{activeTrack.title}</span>
        </SongName>
    );
});

const SongName = styled.div`
  font-weight: 700;
  font-size: 1.1rem;

  & > span {
    font-weight: normal;
    font-size: 0.9rem;
  }
`