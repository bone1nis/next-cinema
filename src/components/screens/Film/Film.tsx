"use client";
import { ErrorMessage } from "@/components/UI/ErrorMessage";
import { Spinner } from "@/components/UI/Spinner";
import { fetchMovieById } from "@/query/movieQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Movie } from "@/types/Film";

export const Film = ({ id }: { id: number }) => {
    const { data, isLoading, isError } = useSuspenseQuery(fetchMovieById(id));

    if (isLoading) return <Spinner />;
    if (isError || !data) return <ErrorMessage />;

    const {
        alternativeName,
        name,
        poster,
        description,
        year,
        rating,
        genres,
        countries,
        movieLength,
        ageRating,
    } = data as Required<Movie>;

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-2">
                    {name || alternativeName} ({year})
                </h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <Image
                        src={poster.url}
                        alt={name}
                        width={200}
                        height={300}
                        className="rounded-md shadow-lg object-cover"
                    />
                    <div className="flex-1">
                        <p className="text-gray-700 mb-3">{description}</p>

                        {rating?.kp !== 0 && (
                            <p className="text-yellow-500 font-bold text-lg">
                                Рейтинг: {rating.kp.toFixed(1)} / 10
                            </p>
                        )}

                        {genres?.length > 0 && (
                            <div className="mt-2">
                                <h3 className="text-lg font-semibold">Жанры:</h3>
                                <p className="text-gray-600">{genres.map((genre) => genre.name).join(", ")}</p>
                            </div>
                        )}

                        {countries?.length > 0 && (
                            <div className="mt-2">
                                <h3 className="text-lg font-semibold">Страны:</h3>
                                <p className="text-gray-600">{countries.map((country) => country.name).join(", ")}</p>
                            </div>
                        )}

                        {movieLength && (
                            <div className="mt-2">
                                <h3 className="text-lg font-semibold">Длительность:</h3>
                                <p className="text-gray-600">{movieLength} мин.</p>
                            </div>
                        )}

                        {ageRating && (
                            <div className="mt-2">
                                <h3 className="text-lg font-semibold">Возрастной рейтинг:</h3>
                                <p className="text-gray-600">{ageRating}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};