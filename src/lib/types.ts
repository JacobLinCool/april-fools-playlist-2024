export interface PlaylistItem {
	name: string;
	artist: string;
	cover: string;
	url: string;
	lrc?: string;
}

export type Playlist = PlaylistItem[];
