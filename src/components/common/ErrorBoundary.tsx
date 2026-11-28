import React from 'react';

interface State { failed: boolean }

/** Penangkap error: kalau satu layar rusak, pengguna melihat pesan ramah, bukan layar putih. */
export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State { return { failed: true }; }

  componentDidCatch(error: unknown) { console.error('NODUS error:', error); }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#FBF9F5] px-6 text-center text-[#151517] dark:bg-[#151517] dark:text-[#FBF9F5]">
        <p className="font-serif text-2xl font-semibold">Ada yang tidak berjalan semestinya.</p>
        <p className="mt-2 max-w-sm text-[14px] leading-relaxed opacity-80">Progres belajarmu aman. Muat ulang halaman untuk melanjutkan. Kalau terulang, kabari kami lewat Pengaturan, Dari pembuat NODUS.</p>
        <button onClick={() => window.location.reload()} className="btn-ink mt-5 !px-6 !py-3">Muat ulang</button>
      </div>
    );
  }
}
