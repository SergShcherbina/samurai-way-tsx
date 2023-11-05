import {MusicActionsType, RootObjectMusic} from "./types-music";

const initialState: RootObjectMusic = {
    data: [
        {
            id: 3135553,
            readable: true,
            title: "One More Time",
            title_short: "One More Time",
            title_version: "",
            isrc: "GBDUW0000053",
            link: "https://www.deezer.com/track/3135553",
            duration: 320,
            track_position: 1,
            disk_number: 1,
            rank: 894964,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135554,
            readable: true,
            title: "Aerodynamic",
            title_short: "Aerodynamic",
            title_version: "",
            isrc: "GBDUW0000057",
            link: "https://www.deezer.com/track/3135554",
            duration: 212,
            track_position: 2,
            disk_number: 1,
            rank: 678714,
            explicit_lyrics: false,
            explicit_content_lyrics: 6,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-9.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135555,
            readable: true,
            title: "Digital Love",
            title_short: "Digital Love",
            title_version: "",
            isrc: "GBDUW0000058",
            link: "https://www.deezer.com/track/3135555",
            duration: 301,
            track_position: 3,
            disk_number: 1,
            rank: 680417,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-0.dzcdn.net/stream/c-01ef0c4982c94b86c7c0e6b2a70dde4b-9.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135556,
            readable: true,
            title: "Harder, Better, Faster, Stronger",
            title_short: "Harder, Better, Faster, Stronger",
            title_version: "",
            isrc: "GBDUW0000059",
            link: "https://www.deezer.com/track/3135556",
            duration: 224,
            track_position: 4,
            disk_number: 1,
            rank: 799459,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135557,
            readable: true,
            title: "Crescendolls",
            title_short: "Crescendolls",
            title_version: "",
            isrc: "GBDUW0000060",
            link: "https://www.deezer.com/track/3135557",
            duration: 211,
            track_position: 5,
            disk_number: 1,
            rank: 537938,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-0.dzcdn.net/stream/c-02585dc790f2904c4e870cb3bcecfcf3-10.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135558,
            readable: true,
            title: "Nightvision",
            title_short: "Nightvision",
            title_version: "",
            isrc: "GBDUW0000061",
            link: "https://www.deezer.com/track/3135558",
            duration: 104,
            track_position: 6,
            disk_number: 1,
            rank: 519877,
            explicit_lyrics: false,
            explicit_content_lyrics: 6,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-1.dzcdn.net/stream/c-155b4d90d3d16d951e3d67c297988edc-9.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135559,
            readable: true,
            title: "Superheroes",
            title_short: "Superheroes",
            title_version: "",
            isrc: "GBDUW0000062",
            link: "https://www.deezer.com/track/3135559",
            duration: 237,
            track_position: 7,
            disk_number: 1,
            rank: 605651,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-3.dzcdn.net/stream/c-3d8caae0a1c59f417f31bb747c43818b-9.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135560,
            readable: true,
            title: "High Life",
            title_short: "High Life",
            title_version: "",
            isrc: "GBDUW0000063",
            link: "https://www.deezer.com/track/3135560",
            duration: 201,
            track_position: 8,
            disk_number: 1,
            rank: 517200,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-8.dzcdn.net/stream/c-8052077a75a884e93bda2e2b63f74bbb-9.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135561,
            readable: true,
            title: "Something About Us",
            title_short: "Something About Us",
            title_version: "",
            isrc: "GBDUW0000064",
            link: "https://www.deezer.com/track/3135561",
            duration: 232,
            track_position: 9,
            disk_number: 1,
            rank: 688701,
            explicit_lyrics: false,
            explicit_content_lyrics: 6,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-8.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135562,
            readable: true,
            title: "Voyager",
            title_short: "Voyager",
            title_version: "",
            isrc: "GBDUW0000065",
            link: "https://www.deezer.com/track/3135562",
            duration: 227,
            track_position: 10,
            disk_number: 1,
            rank: 591324,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-9.dzcdn.net/stream/c-98625d3ad54e88765fdfb812de62e515-9.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135563,
            readable: true,
            title: "Veridis Quo",
            title_short: "Veridis Quo",
            title_version: "",
            isrc: "GBDUW0000066",
            link: "https://www.deezer.com/track/3135563",
            duration: 345,
            track_position: 11,
            disk_number: 1,
            rank: 834060,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-f.dzcdn.net/stream/c-f6fde4f6f42bde740e3d07b019fde318-8.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135564,
            readable: true,
            title: "Short Circuit",
            title_short: "Short Circuit",
            title_version: "",
            isrc: "GBDUW0000067",
            link: "https://www.deezer.com/track/3135564",
            duration: 206,
            track_position: 12,
            disk_number: 1,
            rank: 466890,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-6.dzcdn.net/stream/c-6ef3bfc9e8f226b582bade5842df4517-10.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135565,
            readable: true,
            title: "Face to Face",
            title_short: "Face to Face",
            title_version: "",
            isrc: "GBDUW0000068",
            link: "https://www.deezer.com/track/3135565",
            duration: 240,
            track_position: 13,
            disk_number: 1,
            rank: 579430,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-7.dzcdn.net/stream/c-7af918cb131b9d5b8f5c1e40e62da91b-10.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        },
        {
            id: 3135566,
            readable: true,
            title: "Too Long",
            title_short: "Too Long",
            title_version: "",
            isrc: "GBDUW0000069",
            link: "https://www.deezer.com/track/3135566",
            duration: 600,
            track_position: 14,
            disk_number: 1,
            rank: 563394,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: "https://cdns-preview-d.dzcdn.net/stream/c-ddf495316e2afbe4327d9a6e17840a69-9.mp3",
            image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
            artist: {
                id: 27,
                name: "Daft Punk",
                tracklist: "https://api.deezer.com/artist/27/top?limit=50",
                type: "artist"
            },
            type: "track"
        }
    ],
    total: 14,
    activeTrack: {
        id: 3135553,
        readable: true,
        title: "One More Time",
        title_short: "One More Time",
        title_version: "",
        isrc: "GBDUW0000053",
        link: "https://www.deezer.com/track/3135553",
        duration: 320,
        track_position: 1,
        disk_number: 1,
        rank: 894964,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview: "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3",
        image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
        artist: {
            id: 27,
            name: "Daft Punk",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist"
        },
        type: "track"
    },
    isAutoPlay: false,
    isPlay: false,
    favoriteMusic: [{
        id: 3135555,
        readable: true,
        title: "Digital Love",
        title_short: "Digital Love",
        title_version: "",
        isrc: "GBDUW0000058",
        link: "https://www.deezer.com/track/3135555",
        duration: 301,
        track_position: 3,
        disk_number: 1,
        rank: 680417,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview: "https://cdns-preview-0.dzcdn.net/stream/c-01ef0c4982c94b86c7c0e6b2a70dde4b-9.mp3",
        image: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
        artist: {
            id: 27,
            name: "Daft Punk",
            tracklist: "https://api.deezer.com/artist/27/top?limit=50",
            type: "artist"
        },
        type: "track"
    }],
    volume: Number(localStorage.getItem('volumePlayer')) || 20,
    rangeTrack: 0,
    refLink: {} as HTMLAudioElement,
}

export const reducerMusic = (state: RootObjectMusic = initialState, action: MusicActionsType) => {
    switch (action.type) {
        case 'MUSIC/ACTIVE-TRACK':
            return {
                ...state,
                activeTrack: state.data.filter(track => track.id === action.payload)[0]
            };
        case 'MUSIC/SET-PLAY':
            return {
                ...state,
                isPlay: action.payload.play,
                isAutoPlay: action.payload.autoplay
            }
        case 'MUSIC/SET-VOLUME':
            return {
                ...state, volume: action.payload
            }
        case 'MUSIC/SET-FAVORITE-TRACK':
            if (state.favoriteMusic.find(track => track.id === action.payload)) {
                return {
                    ...state, favoriteMusic:
                        state.favoriteMusic.filter(track => track.id !== action.payload)
                }
            } else {
                return {
                    ...state, favoriteMusic:
                        [...state.data.filter(track => track.id === action.payload), ...state.favoriteMusic]
                }
            }
        case 'MUSIC/SET-RANGE-TRACK':
            return {
                ...state, rangeTrack: action.payload
            }
        case 'MUSIC/SET-REF':
            return {
                ...state, refLink: action.payload
            }
        default:
            return state
    }
}




