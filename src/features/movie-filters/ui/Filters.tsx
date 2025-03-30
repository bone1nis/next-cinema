import React, { ChangeEvent, useState } from 'react';

export const Filters = () => {
    const [releaseYear, setReleaseYear] = useState('');
    const [genre, setGenre] = useState('');
    const [type, setType] = useState('');

    const handleReleaseYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setReleaseYear(event.target.value);
    };

    const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setGenre(event.target.value);
    };

    const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value);
    };

    return (
        <div className="bg-[var(--color-background)] text-[var(--color-foreground)] p-6 rounded-lg shadow-md mb-8">
            <form className="flex items-center justify-between space-x-4">
                <div className="flex-1">
                    <select
                        id="release-year"
                        value={releaseYear}
                        onChange={handleReleaseYearChange}
                        className="p-2 w-full border border-[var(--color-secondary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                        <option value="">Год выпуска</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>

                <div className="flex-1">
                    <select
                        id="genre"
                        value={genre}
                        onChange={handleGenreChange}
                        className="p-2 w-full border border-[var(--color-secondary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                        <option value="">Жанр</option>
                        <option value="action">Экшн</option>
                        <option value="comedy">Комедия</option>
                        <option value="drama">Драма</option>
                        <option value="horror">Ужасы</option>
                    </select>
                </div>

                <div className="flex-1">
                    <select
                        id="type"
                        value={type}
                        onChange={handleTypeChange}
                        className="p-2 w-full border border-[var(--color-secondary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                        <option value="">Тип</option>
                        <option value="movie">Фильм</option>
                        <option value="series">Сериал</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="py-2 px-4 bg-[var(--color-primary)] text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                >
                    Применить
                </button>
            </form>
        </div>
    );
};
