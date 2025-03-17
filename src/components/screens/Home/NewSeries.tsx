"use client"

import { fetchNewSeries } from "@/query/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { FilmItem } from '@/components/FilmItem';

export const NewSeries = () => {
    const { data } = useSuspenseQuery(fetchNewSeries);

    return (
        <div>
            <h3 className="font-bold text-3xl mb-3">Новые сериалы</h3>
            <div className="flex justify-between items-end w-full">
                {data.docs.map(film => (
                    <FilmItem key={film.id} film={film} />
                ))}
            </div>
        </div>
    )
}