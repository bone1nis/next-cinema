"use client";

import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { GenresEnum } from "@/shared/config";

export const MoviesFilters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const genreFromURL = searchParams.get("genre") || "";
    const [genre, setGenre] = useState(genreFromURL);

    useEffect(() => {
        setGenre(genreFromURL);
    }, [genreFromURL]);

    const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setGenre(event.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());
        if (genre) {
            params.set("genre", genre);
        } else {
            params.delete("genre");
        }
        router.push(`/movies?${params.toString()}`);
    };

    return (
        <div className="bg-[var(--color-background)] text-[var(--color-foreground)] p-6 rounded-lg shadow-md mb-8">
            <form onSubmit={handleSubmit} className="flex items-center justify-between space-x-4">
                <div className="flex-1">
                    <select
                        id="genre"
                        value={genre}
                        onChange={handleGenreChange}
                        className="p-2 w-full border border-[var(--color-secondary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                        <option value="">Все</option>
                        {Object.values(GenresEnum).map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="py-2 px-4 bg-[var(--color-primary)] text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                >
                    Применить
                </button>
            </form>
        </div>
    );
};
