"use client"

import { fetchNewFilms } from "@/query/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { FilmItem } from '@/components/FilmItem';

export const NewFilms = () => {
    const {data} = useSuspenseQuery(fetchNewFilms);

    return (
        <div className="p-4">
            <h3 className="font-bold text-3xl mb-3">Новые фильмы</h3>
            <div className="flex justify-between items-end w-full">
                {data.docs.map(film => (
                    <FilmItem key={film.id} film={film} />
                ))}
            </div>
        </div>
    )
}