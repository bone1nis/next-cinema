import Link from "next/link";

export const Header = () => {
    return (
        <header className="w-full p-5 flex items-center bg-dark text-white">
            <Link href="\" className="text-2xl font-bold uppercase">Next<span className="text-primary uppercase">Cinema</span></Link>
            <nav className="flex w-full items-center justify-center">
                <Link
                    href="/films"
                    className="text-lg font-medium px-4 py-2 relative transition-all duration-300 hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                    Фильмы
                </Link>
            </nav>
        </header>
    );
};