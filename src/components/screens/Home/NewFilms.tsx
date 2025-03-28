"use client"

import { fetchNewFilms } from "@/query/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { FilmItem } from '@/components/FilmItem';
import { Carousel } from "@/components/UI/carousel/Carousel";
import { Spinner } from "@bprogress/next";
import { ErrorMessage } from "@/components/UI/ErrorMessage";

export const NewFilms = () => {
    const { data, isLoading, isError } = useSuspenseQuery(fetchNewFilms);

    if (isLoading) return <Spinner />;

    if (isError || !data) return <ErrorMessage />;

    return (
        <div className="p-4">
            <h3 className="font-bold text-3xl mb-4">Новые фильмы</h3>
            <Carousel
                items={data.docs}
                renderItem={(film) => <FilmItem film={film} />}
            />
        </div>
    )
}