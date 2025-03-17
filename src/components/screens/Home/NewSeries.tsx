"use client"

import { fetchNewSeries } from "@/query/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { FilmItem } from '@/components/FilmItem';

export const NewSeries = () => {
    const { data } = useSuspenseQuery(fetchNewSeries);

    return (
        <div className="p-4">
            <h3 className="font-bold text-3xl mb-4">Новые сериалы</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.docs.map(film => (
                        <FilmItem key={film.id} film={film} />
                ))}
            </div>
        </div>
    )
}