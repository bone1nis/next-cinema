
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/helpers/getQueryClient";
import { fetchNewFilms, fetchNewSeries } from "@/query/movieQuery";
import { NewFilms } from "@/components/screens/Home/NewFilms";
import { NewSeries } from "@/components/screens/Home/NewSeries";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(fetchNewFilms);
  await queryClient.prefetchQuery(fetchNewSeries);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewFilms />
      <NewSeries />
    </HydrationBoundary>
  );
}