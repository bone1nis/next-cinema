"use client";

import { fetchNewFilms } from "@/entities/movie/api/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { MovieItem } from '@/widgets/movie-item/MovieItem';
import { Filters } from "@/entities/movie/ui/filters";

export const Films = () => {
    const { data } = useSuspenseQuery(fetchNewFilms);

    return (
        <div className="p-4">
            <Filters />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
                {data.docs.map(film => (
                    <MovieItem key={film.id} movie={film} />
                ))}
            </div>
        </div>
    )
}