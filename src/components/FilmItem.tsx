"use client";
import Image from 'next/image'

import { Movie } from "@/types/Film";
import { useRouter } from 'next/navigation';

type FilmItemProps = {
    film: Movie;
    small?: boolean;
}

export const FilmItem: React.FC<FilmItemProps> = ({ film, small }) => {
    const router = useRouter();

    const formatedFilmName = film.name.length > 30 ? film.name.slice(0, 31) + "..." : film.name;

    const imageSize = small ? 100 : 150;
    const height = small ? 150 : 225;
    const containerClass = small
        ? "w-[200px] h-[280px] p-2"
        : "w-full h-[320px] p-3";

    const fontSize = small ? "text-sm" : "text-lg";
    const titleClass = small ? "text-base" : "text-lg";

    return (
        <div
            className={`bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer ${containerClass}`}
            onClick={() => router.push(`/film/${film.id}`)}>
            
            <div className={`relative ${small ? 'w-[100px] h-[150px]' : 'w-[150px] h-[225px]'}`}>
                <Image
                    src={film.poster.url}
                    alt={`Постер ${film.name}`}
                    width={imageSize}
                    height={height}
                    className="object-cover rounded-md"
                />
            </div>

            <h5 className={`font-bold mt-2 ${titleClass}`}>{formatedFilmName}</h5>
            <p className={`text-gray-600 ${fontSize}`}>({film.year})</p>
        </div>
    );
}
