import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";

async function ambilProyek(slug) {
    const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();
    return data;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const item = await ambilProyek(slug); // Benerin: panggil fungsinya, bukan variabel 'proyek'

    if (!item) {
        return { title: "Proyek tidak ditemukan" };
    }
    return { title: item.judul, description: item.deskripsi };
}

export default async function DetailProyek({ params }) {
    const { slug } = await params;
    const item = await ambilProyek(slug);

    if (!item) {
        notFound();
    }
    
    return (
        <main className="mx-auto max-w-3xl px-4 py-10">
            
            {/* --- BREADCRUMB --- */}
            <nav className="text-sm text-muted-foreground mb-6">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link href="/" className="hover:text-aksen hover:underline">
                            Beranda
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/proyek" className="hover:text-aksen hover:underline">
                            Proyek
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="font-semibold text-primary" aria-current="page">
                        {item.judul}
                    </li>
                </ol>
            </nav>
            {/* ------------------- */}

            <h1 className="text-3xl font-bold text-primary md:text-4xl">{item.judul}</h1>
            
            <div className="mt-3 flex items-center gap-3">
                <Badge>{item.kategori}</Badge>
                <span className="text-muted-foreground">Dibuat di {item.minggu}</span>
            </div>

            <Image
                src={item.gambar_url} // Benerin: pakai gambar_url sesuai database
                alt={`Tangkapan layar ${item.judul}`}
                width={640}
                height={420}
                loading="eager" 
                className="mt-6 h-auto w-full rounded-xl border border-border"
            />

            <p className="mt-6 text-lg">{item.deskripsi}</p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold text-primary">Yang Saya Pelajari</h2>
            <ul className="mt-3 list-disc pl-5">
                {item.fitur.map((f) => (
                    <li key={f}>{f}</li>
                ))}
            </ul>
        </main>
    );
}