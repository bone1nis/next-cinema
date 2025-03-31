import { API_KEY, API_URL } from "@/shared/config";

import { Movie, MovieResponse } from "@/entities/movie/model";

const FAKE_MOVIES: MovieResponse = {
    total: 12,
    limit: 12,
    page: 1,
    pages: 1,
    docs: Array.from({ length: 12 }, (_, index) => ({
        id: index,
        name: `Неизвестный фильм ${index + 1}`,
        year: 2024,
        description: "Описание недоступно.",
        poster: {
            url: "https://picsum.photos/200/300",
            previewUrl: "https://picsum.photos/200/300"
        },
        rating: { kp: 0, imdb: 0, filmCritics: 0, russianFilmCritics: 0, await: 0 },
        votes: { kp: 0, imdb: 0, filmCritics: 0, russianFilmCritics: 0, await: 0 },
        genres: [{ name: "Неизвестно" }],
        countries: [{ name: "Неизвестно" }],
        movieLength: 0,
        ageRating: 0
    }))
};

const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

const fetchMovies = async (typeNumber: number, genreName?: string): Promise<MovieResponse> => {
    const queryParams = new URLSearchParams({
        page: "1",
        limit: "12",
        sortField: "year",
        sortType: "-1",
        typeNumber: typeNumber.toString(),
        status: "completed"
    });

    const selectFields = ["poster", "id", "name", "description", "year"]
        .map(field => `selectFields=${field}`)
        .join("&");

    const notNullFields = ["id", "poster.url", "name", "description", "year"]
        .map(field => `notNullFields=${field}`)
        .join("&");

    if (genreName) {
        queryParams.append("genres.name", genreName);
    }

    const url = `${API_URL}movie?${queryParams}&${selectFields}&${notNullFields}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-API-KEY": API_KEY
            }
        });

        if (!response.ok) throw new Error(`Fetch error: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.warn("Using fake movies due to fetch error:", error);
        return deepClone(FAKE_MOVIES);
    }
};

const fetchMovieById = async (id: number): Promise<Movie> => {
    const url = `${API_URL}movie/${id}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-API-KEY": API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.warn(`Using fake movie (id: ${id}) due to fetch error:`, error);
        return deepClone(FAKE_MOVIES.docs[id % 12]);
    }
};

export const getMovies = (genreName?: string) => fetchMovies(1, genreName);
export const getMovieById = (id: number) => fetchMovieById(id);
export const getNewFilms = () => fetchMovies(1);
export const getNewSeries = () => fetchMovies(2);
