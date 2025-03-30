import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { MovieDetails } from "@/features/movie-details";
import { fetchMovieById } from "@/entities/movie/api";
import { getQueryClient } from "@/shared/lib/getQueryClient";

export default async function MoviePage({ params }: { params: { id: string } }) {
    const queryClient = getQueryClient();
    const { id } = await params;
    

    await queryClient.prefetchQuery(fetchMovieById(Number(id)));

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="flex justify-center">
                <MovieDetails id={Number(id)} />
            </div>
        </HydrationBoundary>
    );
}