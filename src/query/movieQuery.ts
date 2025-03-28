import { getMovieById, getNewFilms, getNewSeries } from "@/api/movieApi";
import { queryOptions } from "@tanstack/react-query";

export const fetchNewFilms = queryOptions({
    queryKey: ["newFilms"],
    queryFn: getNewFilms
});

export const fetchNewSeries = queryOptions({
    queryKey: ["newSeries"],
    queryFn: getNewSeries
});

export const fetchMovieById = (id: number) =>
    queryOptions({
        queryKey: ["movie", id],
        queryFn: () => getMovieById(id)
    });