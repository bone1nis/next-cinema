export type MovieRating = {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
};

export type MovieVotes = {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
};

export type MovieGenre = {
    name: string;
};

export type MovieCountry = {
    name: string;
};

export type MovieReleaseYears = {
    start: number | null;
    end: number | null;
};

export type MoviePoster = {
    url: string;
    previewUrl: string;
};

export type MoviePerson = {
    id: number;
    photo: string;
    name?: string | null;
    enName?: string;
    description?: string;
    profession?: string;
    enProfession?: string;
};

export type MoviePremiere = {
    world: string | null;
    russia: string | null;
    digital: string | null;
    cinema: string | null;
    bluray: string | null;
    dvd: string | null;
};

export type MovieBackdrop = {
    previewUrl: string | null;
    url: string | null;
};

export type MovieExternalId = {
    kpHD: string;
};

export type Movie = {
    id: number;
    name: string;
    year: number;
    description: string;
    poster: MoviePoster;
    alternativeName?: string;
    enName?: string | null;
    type?: string;
    typeNumber?: number;
    shortDescription?: string | null;
    slogan?: string | null;
    status?: string;
    rating?: MovieRating;
    votes?: MovieVotes;
    movieLength?: number;
    totalSeriesLength?: number | null;
    seriesLength?: number | null;
    ratingMpaa?: string | null;
    ageRating?: number;
    genres?: MovieGenre[];
    countries?: MovieCountry[];
    persons?: MoviePerson[];
    premiere?: MoviePremiere;
    top10?: null;
    top250?: null;
    isSeries?: boolean;
    ticketsOnSale?: boolean;
    lists?: string[];
    createdAt?: string;
    updatedAt?: string;
    isTmbChecked?: boolean;
    backdrop?: MovieBackdrop;
    externalId?: MovieExternalId;
    studioParsed?: boolean;
    keywordsParsed?: boolean;
};