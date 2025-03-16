import { Film } from "@/types/Film";

type FilmItemProps = {
    item: Film;
}

export const FilmItem: React.FC<FilmItemProps> = ({ item }) => {
    return (
        <div className="container">
            {item.name}
        </div>
    );
}