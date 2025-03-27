import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full p-10 bg-dark text-white">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="\" className="text-2xl font-bold  uppercase">Next<span className="text-primary uppercase">Cinema</span></Link>
                <span>© {new Date().getFullYear()} Kinomore</span>
            </div>
        </footer>
    );
};