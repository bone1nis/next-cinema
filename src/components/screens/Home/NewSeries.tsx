"use client"

import { fetchNewSeries } from "@/query/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { FilmItem } from '@/components/FilmItem';
import { Carousel } from "@/components/UI/carousel/Carousel";

export const NewSeries = () => {
    const { data } = useSuspenseQuery(fetchNewSeries);

    return (
        <div className="p-4">
            <h3 className="font-bold text-3xl mb-4">Новые сериалы</h3>
            <Carousel
                items={data.docs}
                renderItem={(film) => <FilmItem film={film} />}
            />
        </div>
    )
}