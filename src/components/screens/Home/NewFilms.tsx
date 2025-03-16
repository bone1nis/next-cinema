"use client"
import { fetchAllMovies } from "@/query/movieQuery";
import { useQuery } from "@tanstack/react-query"

export const NewFilms = () => {
    const { data, error, isLoading } = useQuery(fetchAllMovies);
    return (
        <div>Новые фильмы</div>
    )
}