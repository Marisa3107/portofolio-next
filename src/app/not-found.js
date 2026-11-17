import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#f0fdf4] text-center px-4">
      {/* Angka 404 Besar */}
      <h1 className="text-8xl font-bold text-red-600 mb-4">404</h1>
      
      {/* Judul */}
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Halaman tidak ditemukan
      </h2>
      
      {/* Kalimat Penjelasan */}
      <p className="text-slate-600 mb-6">
        Alamat yang kamu buka tidak ada atau sudah dipindahkan.
      </p>
      
      {/* Tombol Kembali ke Beranda */}
      <Link 
        href="/" 
        className="bg-[#1e293b] text-white px-6 py-2 rounded-md hover:bg-slate-700 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}