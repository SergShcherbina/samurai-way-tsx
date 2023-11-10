export const actionsMusic = {
     setActiveTrackAC: (id: number) => {
        return {
            type: 'MUSIC/ACTIVE-TRACK',
            payload: id
        } as const
    },
     setPlayAC: (play: boolean, autoplay: boolean = false) => {
        return {
            type: 'MUSIC/SET-PLAY',
            payload: {play, autoplay}
        } as const
    },
     setVolumeAC:  (value: number) => {
        return {
            type: 'MUSIC/SET-VOLUME',
            payload: value
        } as const
    },
     setFavoriteMusicAC: (id: number) => {
        return {
            type: 'MUSIC/SET-FAVORITE-TRACK',
            payload: id,
        } as const
    },
    setRangeTrackAC: (range: number) => {
        return {
            type: 'MUSIC/SET-RANGE-TRACK',
            payload: range,
        } as const
    },
    setRefLinkAC: (refLink: HTMLAudioElement) => {
         return {
             type: 'MUSIC/SET-REF',
             payload: refLink
         } as const
    }
}
