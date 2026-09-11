AHA COFFEE — WEDDING & SPECIAL MOMENTS
Panduan Pakai (Baca Ini Dulu)
=========================================================

STRUKTUR FOLDER
-----------------
aha-coffee-site/
├─ index.html      -> website utama (yang dilihat pengunjung)
├─ admin.html       -> panel admin (buat kamu edit konten & gambar)
├─ content.js       -> "database" isi website (jangan diedit manual, cukup lewat admin.html)
├─ style.css        -> tampilan/tema skeuomorphism
└─ images/          -> taruh SEMUA file gambar di sini

WAJIB: taruh file-file gambar berikut di dalam folder images/ dengan
nama PERSIS seperti ini (huruf besar/kecil ikut berpengaruh):

  logo.jpeg
  aha-varian-warna-warni.jpg
  aha-brand-arabica-matcha.jpg
  aha-botol-coffee-thaitea-matcha.jpg
  aha-tiga-gelas-segar.jpg
  aha-good-day.jpg
  aha-kopi-suasana-santai.jpg
  Testimoni1.jpg
  Testimoni2.jpg
  Testimoni3.jpg
  Testimoni4.jpg
  Testimoni5.jpg
  Testimoni6.jpg
  Testimoni7.jpg
  Testimoni8.jpg

Kalau logo.jpeg belum ditaruh, website tetap jalan normal — cuma di
navbar akan tampil ikon cangkir kopi sebagai pengganti sementara.


CARA MEMBUKA WEBSITE
-----------------
Cara paling gampang: klik dua kali index.html, akan terbuka di
browser (Chrome/Edge/Firefox).

Kalau nanti fitur admin (simpan gambar upload / localStorage) terasa
tidak konsisten di browser kamu, coba cara yang lebih stabil:
1. Install ekstensi "Live Server" di VS Code, klik kanan index.html
   -> "Open with Live Server", ATAU
2. Buka folder ini lewat Command Prompt/Terminal, jalankan:
       python -m http.server 8000
   lalu buka http://localhost:8000 di browser.


CARA PAKAI ADMIN PANEL (admin.html)
-----------------
1. Klik dua kali admin.html.
2. Masukkan kode admin: ahacoffee123
   (Kode ini bisa kamu ganti sendiri: buka admin.html pakai Notepad,
   cari tulisan ADMIN_PASSWORD, ganti isinya. Ini kode sederhana ya
   bro, sifatnya cuma buat jaga-jaga orang iseng buka, BUKAN sistem
   keamanan tingkat website beneran — karena semua tersimpan di
   browser kamu sendiri, bukan di server.)
3. Edit teks apa saja langsung di kolom yang tersedia — hero, paket,
   menu, galeri, testimoni, FAQ, kontak, footer, dst.
4. Untuk ganti gambar, ada 2 cara di setiap kolom gambar:
   a. Upload langsung lewat tombol pilih file — gambar akan otomatis
      tersimpan (praktis buat coba-coba cepat).
   b. ATAU cukup ketik nama file di kolom "path", asal file aslinya
      sudah kamu taruh di folder images/ (lebih hemat tempat
      penyimpanan browser, disarankan untuk jangka panjang).
5. Klik "Simpan Perubahan" di atas atau di bawah halaman.
6. Buka index.html di BROWSER YANG SAMA untuk melihat hasilnya.


CARA KERJA ADMIN PANEL SEKARANG (SUDAH TERSAMBUNG KE SERVER)
-----------------
Sejak update ini, klik "Simpan Perubahan" di admin.html TIDAK cuma
disimpan di browser kamu — tapi dikirim ke server (lewat file
netlify/functions/save-content.js), yang otomatis meng-update file
data/content.json di repo GitHub kamu. Netlify mendeteksi perubahan
itu dan re-deploy ulang situsnya secara otomatis (~30-60 detik),
sehingga SEMUA pengunjung (dari HP, laptop, browser apa pun) ikut
melihat versi terbaru — bukan cuma kamu.

WAJIB disiapkan sekali di awal (kalau belum) supaya fitur simpan ini
berfungsi:
1. Situs ini di-deploy ke Netlify lewat GITHUB (bukan drag & drop
   manual), karena serverless function butuh itu.
2. Buat Personal Access Token di GitHub (Settings -> Developer
   settings -> Fine-grained tokens), khusus untuk repo ini, dengan
   permission "Contents: Read and write".
3. Di Netlify: Site settings -> Environment variables, tambahkan:
     ADMIN_PASSWORD  = (samakan dengan ADMIN_PASSWORD di admin.html)
     GITHUB_TOKEN    = token dari langkah 2
     GITHUB_REPO     = username-kamu/nama-repo
     GITHUB_BRANCH   = main (atau nama branch utama repo kamu)
4. Deploy ulang situsnya setelah environment variables diisi.

Kalau ada langkah di atas yang belum kamu lakukan, tombol "Simpan
Perubahan" akan menampilkan pesan error yang jelas (bukan diam-diam
gagal), dan perubahan kamu tetap aman tersimpan sementara di browser
sampai masalahnya diperbaiki.

BATASAN YANG PERLU KAMU TAHU
-----------------
- Fitur "Export Backup" dan "Import Backup" di admin.html berguna
  buat menyimpan hasil editan ke file .json, supaya kamu bisa
  pindahkan pengaturan itu ke browser/device lain, atau simpan
  cadangan sebelum klik "Reset ke Default".
- Kalau upload banyak gambar besar lewat admin, penyimpanan browser
  (localStorage) ada batasnya (sekitar 5-10MB). Kalau mentok, lebih
  baik pakai cara "ketik nama file" (poin 4b di atas) daripada upload
  langsung.


RINGKASAN PERUBAHAN — PUTARAN 1
-----------------
- Tema diganti total ke skeuomorphism (kulit, logam kuningan, kertas
  resi/menu) — dari yang sebelumnya flat/minimalis.
- Logo ditambahkan di navbar & footer (medali kuningan berisi logo).
- Badge "Paling Dipilih" di paket Signature DIHAPUS, karena ini baru
  pertama kali AHA Coffee buka layanan wedding — belum ada data paket
  mana yang paling laku.
- Teks & bagian testimoni diubah supaya jujur: sekarang jelas
  disebut sebagai testimoni dari pelanggan kopi harian, BUKAN dari
  klien wedding (karena memang belum ada, wajar untuk yang baru buka).
- Testimoni diperluas dari 6 jadi 8 foto sesuai file yang kamu kirim.
- Ditambahkan admin.html — panel edit konten & gambar tanpa coding.

RINGKASAN PERUBAHAN — PUTARAN 2
-----------------
- BUG DIPERBAIKI: kotak "A Little Sip / for Your Special Moment" di
  foto hero dulu menimpa/menutupi teks yang sudah ada di dalam foto
  kamu. Sekarang kotak itu dipindah jadi "plakat kuningan" yang
  duduk DI LUAR foto (di bawah bingkai), jadi tidak akan pernah
  menutupi apa pun di dalam foto, gambar apapun yang kamu pasang.
- Bagian Menu sekarang punya slot foto di sampingnya (isi lewat
  admin -> Menu -> "Foto di Sebelah Menu").
- Bagian Menu sekarang ada kotak kecil ajakan "Ada pertanyaan? Chat
  WhatsApp / Instagram" — link & nomornya diatur dari admin -> Booking
  & Kontak.
- Section BARU: "Kunjungi Toko Kami" — buat kasih tahu pengunjung
  bahwa AHA Coffee juga buka sebagai coffee shop harian, bisa datang
  langsung buat ngopi santai. Berisi foto toko, alamat, jam buka,
  tombol ke Google Maps (opsional), tombol Shopee, dan tombol
  WhatsApp. Semua bisa diisi lewat admin -> "Kunjungi Toko Kami".
  -> WAJIB: isi alamat toko yang benar & link Google Maps di admin,
     karena saat ini masih placeholder ("Isi alamat toko AHA Coffee
     di sini").
- Toko online Shopee sekarang ditampilkan & bisa diklik di 3 tempat:
  bagian "Kunjungi Toko Kami", daftar kontak di Booking, dan Footer.
  -> WAJIB: ganti link Shopee di admin -> Booking & Kontak (field
     "Link Toko Shopee") dengan link toko Shopee kamu yang asli.
- Instagram sekarang juga ditampilkan di Booking & Footer.
  -> WAJIB: isi handle & link Instagram asli di admin -> Booking &
     Kontak.
- WhatsApp sekarang punya 2 kolom: teks yang tampil (mis.
  0812-xxxx-xxxx) DAN link chat asli (format: https://wa.me/62xxxx,
  nomor tanpa angka 0 di depan, contoh nomor 0812-3456-7890 jadi
  https://wa.me/6281234567890). Supaya tombol "Chat WhatsApp" di web
  benar-benar membuka chat ke nomor kamu, isi kolom link-nya di
  admin -> Booking & Kontak.
- Konten lama yang sudah kamu simpan dari admin sebelumnya TETAP
  AMAN — field-field baru di atas otomatis terisi nilai default
  kalau belum pernah kamu isi, tidak akan bikin website error.
