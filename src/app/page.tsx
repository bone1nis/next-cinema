
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { NewFilms } from "@/features/new-films";
import { NewSeries } from "@/features/new-series";
import { fetchNewFilms, fetchNewSeries } from "@/entities/movie/api";
import { getQueryClient } from "@/shared/lib/getQueryClient";

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