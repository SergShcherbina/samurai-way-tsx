export type RootObjectMusic = {
    data: TrackType[];
    total: number;
    activeTrack: TrackType,
    isAutoPlay: boolean,
    isPlay: boolean,
    volume: number
}
export type ArtistType = {
    id: number;
    name: string;
    tracklist: string;
    type: string;
}
export type TrackType = {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    isrc: string;
    link: string;
    duration: number;
    track_position: number;
    disk_number: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    image: string;
    artist: ArtistType;
    type: string;
}