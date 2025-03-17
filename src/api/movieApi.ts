import { API_KEY, API_URL } from "@/constans/api";
import { MovieResponse } from "@/types/Film";

export const getNewFilms = async (): Promise<MovieResponse> => {
    const response = await fetch(`${API_URL}movie?page=1&limit=12&selectFields=poster&selectFields=id&selectFields=name&selectFields=description&selectFields=year&notNullFields=id&notNullFields=poster.url&notNullFields=name&notNullFields=description&notNullFields=year&sortField=year&sortType=-1&type=&typeNumber=1&status=completed`, {
        method: "GET",
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    if (!response.ok) {
        throw new Error("Error fetch movies");
    }

    const data = await response.json();

    return data;
}

export const getNewSeries = async (): Promise<MovieResponse> => {
    const response = await fetch(`${API_URL}movie?page=1&limit=12&selectFields=poster&selectFields=id&selectFields=name&selectFields=description&selectFields=year&notNullFields=id&notNullFields=poster.url&notNullFields=name&notNullFields=description&notNullFields=year&sortField=year&sortType=-1&type=&typeNumber=2&status=completed`, {
        method: "GET",
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    if (!response.ok) {
        throw new Error("Error fetch movies");
    }

    const data = await response.json();

    return data;
}