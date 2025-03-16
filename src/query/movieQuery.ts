import { getMovies } from "@/api/movieApi";
import { queryOptions } from "@tanstack/react-query";

export const fetchAllMovies = queryOptions({
    queryKey: ["movies"],
    queryFn: getMovies
});