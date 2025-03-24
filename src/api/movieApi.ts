import { API_KEY, API_URL } from "@/constans/api";
import { Movie, MovieResponse } from "@/types/Film";

const fetchMovies = async (typeNumber: number): Promise<MovieResponse> => {
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

    const url = `${API_URL}movie?${queryParams}&${selectFields}&${notNullFields}`;

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
        console.error("Failed to fetch movies:", error);
        throw error;
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
        console.error("Failed to fetch movies:", error);
        throw error;
    }
}

export const getMovieById = (id: number) => fetchMovieById(id);
export const getNewFilms = () => fetchMovies(1);
export const getNewSeries = () => fetchMovies(2);