import Image from 'next/image'

import { Movie } from "@/types/Film";

type FilmItemProps = {
    film: Movie;
}

export const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
    return (
        <div className="w-3xs bg-white shadow-md rounded-lg overflow-hidden p-3 flex flex-col items-center text-center transition-transform hover:scale-105">
            <Image
                src={film.poster.url}
                alt={`Постер ${film.name}`}
                width={150}
                height={225}
                className="object-cover rounded-md"
            />
            <h5 className="font-bold text-lg mt-2">{film.name}</h5>
            <p className="text-gray-600 text-sm">({film.year})</p>
        </div>
    );
}