import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Marisa Al Zahra melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
            <p className="mt-3 text-lg text-muted-foreground">
                Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2">
                    <FormKontak />
                </section>

                <aside className="rounded-xl bg-card p-6 shadow">
                    <h2 className="text-lg font-bold text-primary">Temukan Saya di</h2>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>
                            <a href="https://github.com/Marisa3107" target="_blank" rel="noopener noreferrer" className="text-aksen dark:text-sky-200 hover:underline">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="mailto:marisaalzahraofc@gmail.com" className="text-aksen dark:text-sky-200 hover:underline">
                                marisaalzahraofc@gmail.com
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </main>
    );
}