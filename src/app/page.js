import Hero from "@/components/Hero";
import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwalBelajar = [
  { hari: "Rabu", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Sabtu", waktu: "16.00 - 21.00", kegiatan: "Mengerjakan tugas praktikum" },
  { hari: "Minggu", waktu: "19.30 - 20.30", kegiatan: "Menonton video dan menulis laporan" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-10">
      
      <Hero
        nama="Marisa Al Zahra"
        tagline="Siswa kelas XI PPLG, calon Junior Web Developer di Kelas Industri UBIG."
      />

      
      <Kartu judul="Tentang Saya">
        <p className="leading-relaxed text-gray-700">
           Saya adalah siswa kelas XI jurusan Pengembangan Perangkat Lunak dan Gim, Saya memiliki ketertarikan di bidang teknologi.
           Saya ingin bisa membuat website yang rapi dan bermanfaat untuk sekolah dan masyarakat sekitar.
        </p>
      </Kartu>

      
      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Mendengarkan Musik</li>
            <li>Bersepeda</li>
            <li>Bermain Badminton</li>
            <li>Menonton Drama/Film</li>
            <li>Memasak</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-3 text-gray-700">
           Menjadi seorang Web Developer yang kreatif, dan mampu menghasilkan karya digital yang bermanfaat bagi banyak orang. Langkah yang akan saya lakukan:
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-gray-700">
            <li>Tekun belajar dan memperdalam ilmu pemrograman.</li>
            <li>Terus mengasah kemampuan dalam membuat dan mengembangkan website.</li>
            <li>Mengembangkan kemampuan agar siap bersaing di dunia kerja bidang teknologi.</li>
          </ol>
        </Kartu>
      </div>

      
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      
      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-gray-700">
            <thead>
              <tr className="bg-utama text-white">
                <th className="p-3">Hari</th>
                <th className="p-3">Waktu</th>
                <th className="p-3">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwalBelajar.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-medium">{item.hari}</td>
                  <td className="p-3">{item.waktu}</td>
                  <td className="p-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}