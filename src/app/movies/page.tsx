import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { fetchNewFilms } from "@/entities/movie/api";
import { getQueryClient } from "@/shared/lib/getQueryClient";
import { Films } from "@/widgets/movie-list";

export default async function FilmsPage() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery(fetchNewFilms);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Films />
        </HydrationBoundary>
    );
}
