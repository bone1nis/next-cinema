import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { MoviesList } from "@/widgets/movie-list";
import { fetchMovies } from "@/entities/movie/api";
import { getQueryClient } from "@/shared/lib/getQueryClient";

export default async function MoviesPage({ searchParams }: { searchParams?: Record<string, string> }) {
    const queryClient = getQueryClient();
    const genre = searchParams?.genre || "";

    await queryClient.prefetchQuery(fetchMovies(genre));

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <MoviesList genre={genre} />
        </HydrationBoundary>
    );
}
