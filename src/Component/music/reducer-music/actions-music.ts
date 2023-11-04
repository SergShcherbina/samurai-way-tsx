
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
            type: 'MUSIC/SET-FAVORITE-MUSIC',
            payload: id,
        } as const
    }
}
