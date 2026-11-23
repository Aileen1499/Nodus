import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { SUPPORT_EMAIL } from '../../lib/plans';
import { useModal } from '../../lib/useModal';

export type LegalKind = 'privacy' | 'terms';

interface LegalViewProps {
  kind: LegalKind;
  onClose: () => void;
}

// CATATAN RILIS: teks ini draf yang menggambarkan perilaku aplikasi saat ini.
// Tinjau dengan konsultan hukum (UU PDP No. 27/2022) dan lengkapi nama badan usaha,
// alamat, dan email kontak sebelum diajukan ke App Store / Play Store.
const UPDATED = '19 November 2026';

type Section = { h: string; p: string[] };

const PRIVACY: Section[] = [
  { h: 'Data yang kami proses', p: [
    'Tanpa akun, kemajuan belajarmu (pelajaran yang dikuasai, poin, stabilo, catatan, dan konsep tersimpan) disimpan di perangkatmu saja.',
    'Jika kamu membuat akun (email atau Google), kami menyimpan nama, email, foto profil, poin, rentetan hari belajar, kuota AI, dan daftar pelajaran yang dikuasai di server agar bisa dipulihkan di perangkat lain. Stabilo dan catatan tidak dikirim ke server.',
    'Saat kamu memakai fitur AI (membedah topik atau bertanya ke mentor), teks yang kamu tulis dikirim ke penyedia model AI (Google Gemini) melalui server kami untuk menghasilkan jawaban. Jangan memasukkan data pribadi atau rahasia ke kolom tersebut.',
  ] },
  { h: 'Untuk apa data dipakai', p: [
    'Hanya untuk menjalankan aplikasi: menyimpan kemajuan, sinkron antar perangkat, mengelola paket, dan menjawab pertanyaanmu. Kami tidak menjual data pribadimu dan tidak menampilkan iklan pihak ketiga.',
  ] },
  { h: 'Pihak yang memproses data', p: [
    'Google Firebase (autentikasi dan basis data), Vercel (hosting dan fungsi server), Google Gemini (pemrosesan AI), dan penyedia pembayaran yang kamu pilih saat berlangganan (data kartu atau pembayaran diproses oleh mereka, bukan oleh kami).',
  ] },
  { h: 'Hakmu', p: [
    'Kamu dapat menghapus akun dan seluruh data di server kapan saja lewat Pengaturan, Hapus akun. Kamu juga dapat mengatur ulang data di perangkat lewat Pengaturan, Reset progres.',
    'Kamu berhak meminta akses, perbaikan, atau penghapusan data pribadimu sesuai UU Pelindungan Data Pribadi.',
  ] },
  { h: 'Keamanan dan anak', p: [
    'Kami memakai koneksi terenkripsi dan membatasi akses data. Tidak ada sistem yang sepenuhnya bebas risiko.',
    'NODUS ditujukan untuk pengguna berusia 17 tahun ke atas.',
  ] },
  { h: 'Perubahan dan kontak', p: [
    'Jika kebijakan ini berubah secara berarti, kami akan memberi tahu lewat aplikasi.' + (SUPPORT_EMAIL ? ` Pertanyaan: ${SUPPORT_EMAIL}.` : ''),
  ] },
];

const TERMS: Section[] = [
  { h: 'Sifat layanan', p: [
    'NODUS adalah platform belajar bisnis, ekonomi, dan keuangan. Seluruh materi, kalkulator, studi kasus, dan jawaban AI bersifat edukasi umum, bukan nasihat investasi, pajak, hukum, atau keuangan. Angka pada studi kasus bersifat ilustrasi. Keputusan dan risikonya menjadi tanggung jawabmu.',
    'Sertifikat penyelesaian adalah catatan belajar internal, bukan sertifikasi profesi atau lembaga resmi.',
  ] },
  { h: 'Akun', p: [
    'Kamu bertanggung jawab atas keamanan akunmu dan kebenaran data yang kamu berikan. Kami dapat menangguhkan akun yang menyalahgunakan layanan, misalnya mengambil konten secara massal atau membebani sistem AI.',
  ] },
  { h: 'Paket berbayar', p: [
    'Paket Pro membuka seluruh jalur dan alat. Harga ditampilkan sebelum pembelian. Langganan diperpanjang otomatis sampai kamu membatalkannya di akun toko aplikasi atau penyedia pembayaranmu, paling lambat sebelum periode berikutnya dimulai.',
    'Uji coba gratis (jika ada) berubah menjadi langganan berbayar kecuali dibatalkan sebelum berakhir. Pengembalian dana mengikuti kebijakan toko aplikasi tempat kamu membeli.',
  ] },
  { h: 'Hak kekayaan intelektual', p: [
    'Konten NODUS dilindungi hak cipta. Kamu boleh memakainya untuk belajar pribadi. Menyalin, menjual ulang, atau mendistribusikannya tanpa izin tertulis tidak diperbolehkan.',
  ] },
  { h: 'Batas tanggung jawab', p: [
    'Layanan disediakan apa adanya. Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian yang timbul dari keputusan yang kamu ambil berdasarkan isi aplikasi.',
  ] },
  { h: 'Hukum dan kontak', p: [
    'Ketentuan ini tunduk pada hukum Republik Indonesia.' + (SUPPORT_EMAIL ? ` Hubungi kami di ${SUPPORT_EMAIL}.` : ''),
  ] },
];

export const LegalView: React.FC<LegalViewProps> = ({ kind, onClose }) => {
  useModal(onClose);
  const sections = kind === 'privacy' ? PRIVACY : TERMS;
  const title = kind === 'privacy' ? 'Kebijakan Privasi' : 'Ketentuan Layanan';
  return (
    <div className="fixed inset-0 z-[95] pt-[env(safe-area-inset-top)] flex flex-col bg-[#FBF9F5] dark:bg-[#0F1520] animate-fade-in" role="dialog" aria-modal="true" aria-label={title}>
      <div className="flex items-center gap-3 border-b border-slate-200/80 px-4 py-3 dark:border-white/10 sm:px-8">
        <button onClick={onClose} aria-label="Kembali" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <p className="eyebrow">NODUS</p>
          <h2 className="font-serif text-xl font-semibold leading-tight text-slate-900 dark:text-white">{title}</h2>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <article className="mx-auto w-full max-w-2xl px-5 pb-16 pt-6 sm:px-7">
          <p className="text-[13px] text-slate-500 dark:text-slate-400">Diperbarui {UPDATED}</p>
          {sections.map((s) => (
            <section key={s.h} className="mt-7">
              <h3 className="font-serif text-xl font-medium text-slate-900 dark:text-white">{s.h}</h3>
              {s.p.map((t) => <p key={t} className="mt-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">{t}</p>)}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
};
