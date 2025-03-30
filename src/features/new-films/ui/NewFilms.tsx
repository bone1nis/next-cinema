"use client"

import { fetchNewFilms } from "@/entities/movie/api/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query"
import { MovieItem } from '@/widgets/movie-item';
import { Carousel } from "@/shared/ui/carousel";
import { Spinner } from "@bprogress/next";
import { ErrorMessage } from "@/shared/ui/error-message";

export const NewFilms = () => {
    const { data, isLoading, isError } = useSuspenseQuery(fetchNewFilms);

    if (isLoading) return <Spinner />;

    if (isError || !data) return <ErrorMessage />;

    return (
        <div className="p-4">
            <h3 className="font-bold text-3xl mb-4">Новые фильмы</h3>
            <Carousel
                items={data.docs}
                renderItem={(film) => <MovieItem movie={film} />}
            />
        </div>
    )
}