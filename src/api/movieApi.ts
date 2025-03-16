import { API_KEY } from "@/constans/api";
import { Film } from "@/types/Film";

export const getMovies = async (): Promise<Film[]> => {
    const response = await fetch("https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&sortField=year&sortType=-1", {
        method: "GET",
        headers: {
            'X-API-KEY': API_KEY
        }
    });
    if (!response.ok) {
        throw new Error("ошибка загрузки");
    }
    const data = await response.json();
    console.log(data)

    return data;
}