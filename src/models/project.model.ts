export interface Project {
	rank: number;
	name: string;
	banner: string;
	technologies: Array<Technologies>;
	about: string;
	linkSet: LinkSet;
	isPrivate: boolean;
	inProgress: boolean;
}

export interface Technologies {
	[name: string]: Array<string>;
}

export interface LinkSet {
	[type: string]: string;
}
