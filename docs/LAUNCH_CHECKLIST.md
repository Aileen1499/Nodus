# NODUS — Checklist peluncuran (Play Store & App Store)

Status kode: web/PWA siap uji. Yang di bawah ini harus dilakukan pemilik produk; kode tidak bisa menggantikannya.

## 1. Pembayaran (wajib sebelum menarik uang)
- [ ] Pilih penyedia. Aplikasi di toko **wajib** memakai pembelian dalam aplikasi (Google Play Billing / Apple IAP) untuk langganan konten digital. Cara paling ringkas: **RevenueCat** (membungkus keduanya). Untuk web: **Midtrans** atau **Xendit**.
- [ ] Daftarkan penyedia lewat `registerBillingProvider()` di `src/lib/billing.ts`.
- [ ] Buat webhook server yang menulis `users/{uid}.isPro` di Firestore. Klien tidak boleh menentukan status Pro sendiri.
- [ ] Atur aturan Firestore agar `isPro` hanya bisa ditulis server.
- [ ] Baru setelah semua lolos uji, set `VITE_BILLING_LIVE=true` di Vercel. Selama `false`, semua konten tetap terbuka (mode pratinjau) dan halaman Paket menampilkan "Kabari saya".
- Harga rencana: Rp 59.000/bulan, Rp 399.000/tahun (uji gratis 7 hari). Ini hipotesis awal; uji A/B setelah ada pengguna.

## 2. Paket gratis vs Pro (sumber kebenaran: `src/lib/plans.ts`)
- Gratis: jalur "Mulai dari Nol" penuh, 2 pelajaran pertama di setiap jalur lain, 3 alat (Margin, Titik Impas, Harga & Diskon), Arena, Brankas.
- Pro: semua jalur, semua alat, sertifikat, mentor AI tanpa batas kredit.

## 3. Pembungkus aplikasi native
- [ ] Pasang Capacitor (`@capacitor/core`, `@capacitor/cli`, platform android/ios), arahkan ke `dist`.
- [ ] Ikon adaptif Android dan set ikon iOS (sumber: `public/logo.svg`), splash screen.
- [ ] Akun pengembang: Google Play (sekali US$25), Apple Developer (US$99/tahun).

## 4. Syarat toko yang sudah dipenuhi di kode
- Kebijakan Privasi dan Ketentuan Layanan di dalam aplikasi (Pengaturan → Bantuan).
- Hapus akun dari dalam aplikasi (Pengaturan → Data), wajib di kedua toko bila ada pembuatan akun.
- Safe-area (`viewport-fit=cover`), tema terang/gelap, manifest PWA.

## 5. Yang masih perlu kamu isi
- [ ] `VITE_SUPPORT_EMAIL` di Vercel (email dukungan; muncul di Pengaturan dan halaman legal).
- [ ] Teks Kebijakan Privasi dan Ketentuan: tinjau oleh konsultan hukum sebelum rilis.
- [ ] Formulir "Data safety" (Play) dan "App Privacy" (Apple): isi sesuai pemakaian Firebase dan Gemini.
- [ ] Tangkapan layar toko (6,7"/5,5"/tablet), deskripsi, kategori (Pendidikan), peringkat usia.
- [ ] Uji di perangkat nyata (Android dan iPhone): login Firebase, font, notch/safe-area, pembelian sandbox.
- [ ] Konten Gemini AI: pastikan kunci API ada di server, bukan di klien.

## 6. Catatan kualitas
- Rumus kalkulator diuji otomatis (58 pemeriksaan) terhadap hitungan manual.
- Sertifikat adalah catatan belajar internal, bukan sertifikasi profesi (sudah tertulis di aplikasi).
- Studi kasus berangka ditandai "ilustrasi".

## Fitur pertumbuhan yang sudah ada dan yang masih menunggu infrastruktur

Sudah berfungsi penuh di klien:
- Sertifikat dapat dibagikan (Web Share) atau diunduh sebagai PNG.
- Template Excel (.xlsx, rumus hidup) untuk ketujuh alat, dari layar alat.
- Jalur "Kasus Bisnis Indonesia" (6 pelajaran: warung, F&B, marketplace, piutang, impor, ekspor).
- Latihan tulis dengan umpan balik Socrates (AI bila kunci Gemini/serverless ada; pemeriksaan lokal sederhana bila tidak). Dibatasi Pro saat `VITE_BILLING_LIVE=true`.
- Streak harian dan pengingat belajar (di web hanya saat aplikasi terbuka).

Menunggu server / aplikasi native:
- Pengingat latar belakang: pasang Capacitor Local Notifications (`@capacitor/local-notifications`), jadwalkan dari `src/lib/reminder.ts`.
- Hadiah undangan: server harus mencatat `?ref=` (disimpan lokal di `nodus_ref_in_v1`), memvalidasi, lalu memberi bulan Pro ke kedua pihak setelah pembayaran/aktivasi pertama. Cegah penyalahgunaan (satu hadiah per perangkat/akun).
- Paket Pelajar: verifikasi status pelajar (mis. email kampus atau penyedia verifikasi) sebelum diskon diberikan.
- Paket Keluarga/Tim: model akun anggota, kuota kursi, faktur. Harga di `OTHER_PLANS` (src/lib/plans.ts) adalah usulan; tetapkan sendiri.
