import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/helpers/getQueryClient";
import { fetchNewFilms } from "@/query/movieQuery";
import { Films } from "@/components/screens/Films/Films";

export default async function FilmsPage() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery(fetchNewFilms);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Films />
        </HydrationBoundary>
    );
}
