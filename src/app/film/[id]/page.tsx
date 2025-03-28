import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/helpers/getQueryClient";
import { fetchMovieById } from "@/query/movieQuery";
import { Film } from "@/components/screens/Film/Film";

export default async function FilmPage({ params }: { params: { id: string } }) {
    const queryClient = getQueryClient();
    const id = Number(params.id);

    await queryClient.prefetchQuery(fetchMovieById(id));

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="flex justify-center">
                <Film id={id} />
            </div>
        </HydrationBoundary>
    );
}