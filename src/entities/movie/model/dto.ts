import { Movie } from './types';

export type MovieResponse = {
    total: number;
    limit: number;
    page: number;
    pages: number;
    docs: Movie[];
};