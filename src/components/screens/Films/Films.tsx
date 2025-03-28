"use client";

import { fetchNewFilms } from "@/query/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { FilmItem } from '@/components/FilmItem';
import { Filters } from "@/components/Filters";

export const Films = () => {
    const { data } = useSuspenseQuery(fetchNewFilms);

    return (
        <div className="p-4">
            <Filters />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
                {data.docs.map(film => (
                    <FilmItem key={film.id} film={film} />
                ))}
            </div>
        </div>
    )
}