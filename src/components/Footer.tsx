export const Footer = () => {
    return (
        <footer className="w-full p-10 flex items-center justify-between bg-dark text-white">
            <h2 className="text-2xl font-bold  uppercase">Next<span className="text-primary uppercase">Cinema</span></h2>
            <span>© {new Date().getFullYear()} Kinomore</span>
        </footer>
    );
};