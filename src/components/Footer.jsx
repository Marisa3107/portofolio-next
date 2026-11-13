export default function Footer() {
    const tahun = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-utama px-4 py-6 text-center text-sm text-white">
            <p>
                &copy; {tahun} Marisa Al Zahra. Dibuat dengan Next.js di Kelas Industri UBIG.
            </p>
        </footer>
    );
}