import Image from 'next/image'

import { Movie } from "@/types/Film";

type FilmItemProps = {
    film: Movie;
}

export const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
    return (
        <div className='text-center flex flex-col gap-1 items-center w-3xs'>
            <h5 className='font-bold text-2xl'>{film.name}</h5>
            <p className='font-bold text-xl'>({film.year})</p>
            <Image src={film.poster.url} alt={`Постер ${film.name}`} width={150} height={100} className='object-cover' />
        </div>
    );
}