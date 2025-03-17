export type MovieRating = {
    kp: number;
    imdb: number;
    fimlCritics: number;
    russianFilmCritics: number;
    await: number;
}

export type MovieVotes = {
    kp: number;
    imdb: number;
    fimlCritics: number;
    russianFilmCritics: number;
    await: number;
}

export type MovieGenre = {
    name: string;
};

export type MovieCountry = {
    name: string
};

export type MovieReleaseYears = {
    start: number | null;
    end: number | null;
}

export type MoviePoster = {
    url: string;
    previewUrl: string;
}

export type Movie = {
    id: number;
    name: string;
    year: number;
    description: string;
    poster: MoviePoster;
};

export type MovieResponse = {
    total: number;
    limit: number;
    page: number;
    pages: number;
    docs: Movie[];
}