"use client";

import { fetchMovies } from "@/entities/movie/api/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { MovieItem } from '@/widgets/movie-item/MovieItem';
import { MoviesFilters } from "@/entities/movie/ui/filters";

export const MoviesList = ({ genre }: { genre: string }) => {
    const { data } = useSuspenseQuery(fetchMovies(genre));

    return (
        <div className="p-4">
            <MoviesFilters />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
                {data.docs.map(film => (
                    <MovieItem key={film.id} movie={film} />
                ))}
            </div>
        </div>
    )
}