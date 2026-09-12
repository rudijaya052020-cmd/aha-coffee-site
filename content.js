/* =========================================================
   AHA Coffee — Default Content
   Semua teks & gambar di sini BISA diedit lewat admin.html.
   File ini cuma dipakai kalau belum ada perubahan tersimpan
   di browser (localStorage). Begitu kamu save dari admin,
   isi terbaru akan dipakai, bukan file ini lagi.
   ========================================================= */

window.AHA_DEFAULT_CONTENT = {
  logo: "images/logo.jpeg",

  hero: {
    eyebrow: "Coffee cart untuk hari yang tidak terulang",
    title: "Bukan sekadar sajian kopi, tetapi bagian kecil dari momen yang akan selalu dikenang.",
    lede: "Hadirkan AHA Coffee di hari spesial Anda, dan biarkan setiap tegukan menjadi bagian dari cerita cinta yang indah — dari pernikahan intim hingga perayaan besar bersama orang-orang terkasih.",
    image: "images/aha-varian-warna-warni.jpg",
    tagTitle: "A Little Sip",
    tagSubtitle: "for Your Special Moment",
    stats: [
      { value: "4", label: "Pilihan paket" },
      { value: "200+", label: "Cup untuk Grand Package" },
      { value: "100%", label: "Menu dapat disesuaikan" }
    ]
  },

  about: {
    kicker: "Mengapa AHA Coffee",
    title: "Detail kecil yang ikut merawat kesan besar di hari itu.",
    desc: "Kami membangun setiap booth dengan satu tujuan: menyatu dengan tema acara Anda, bukan menonjol sendiri.",
    values: [
      { title: "Delicious Selection", desc: "Kopi dan non-kopi pilihan, diracik konsisten oleh tim barista kami." },
      { title: "Aesthetic Setup", desc: "Booth dirancang menyatu dengan dekorasi dan palet warna acara Anda." },
      { title: "Professional Service", desc: "Barista ramah dan berpengalaman menangani acara dari skala kecil hingga besar." },
      { title: "Perfect for Your Moment", desc: "Wedding, engagement, garden party, hingga acara privat lainnya." },
      { title: "Customizable", desc: "Menu dan detail booth menyesuaikan tema, dari label cup hingga signage." }
    ]
  },

  packagesIntro: {
    kicker: "Wedding Package",
    title: "Pilih porsi yang pas untuk jumlah tamu Anda.",
    desc: "Setiap paket sudah termasuk barista, booth, cup & straw, serta setup dan breakdown penuh. Ini kali pertama kami membuka layanan wedding, jadi paket berikut adalah rekomendasi awal — terbuka untuk disesuaikan sepenuhnya dengan kebutuhan Anda."
  },
  packages: [
    {
      name: "Intimate",
      cups: "50 Cups",
      desc: "Cocok untuk intimate wedding dengan tamu terbatas dan suasana yang hangat.",
      includes: [
        "Pilihan 2 Coffee + 1 Non-Coffee",
        "Booth standar",
        "1 Barista",
        "Cup & straw custom",
        "Setup & breakdown",
        "Durasi 2 jam"
      ],
      cta: "Book This Package"
    },
    {
      name: "Sweet",
      cups: "100 Cups",
      desc: "Pilihan pas untuk keluarga dan kerabat dekat di hari bahagia Anda.",
      includes: [
        "Pilihan 3 Coffee + 2 Non-Coffee",
        "Booth standar",
        "1–2 Barista",
        "Cup & straw custom",
        "Setup & breakdown",
        "Durasi 3 jam"
      ],
      cta: "Book This Package"
    },
    {
      name: "Signature",
      cups: "150 Cups",
      desc: "Untuk celebration lebih meriah, lengkap dengan detail custom.",
      includes: [
        "Full menu Coffee & Non-Coffee",
        "Booth estetik + signage",
        "2 Barista",
        "Cup, straw & label custom",
        "Setup & breakdown",
        "Durasi 4 jam"
      ],
      cta: "Book This Package"
    },
    {
      name: "Grand",
      cups: "200+ Cups",
      desc: "Pengalaman coffee corner lengkap untuk perayaan besar Anda.",
      includes: [
        "Full menu + request khusus",
        "Booth premium + dekorasi",
        "2–3 Barista",
        "Custom penuh cup & signage",
        "Setup & breakdown",
        "Durasi & tim custom"
      ],
      cta: "Request a Quote"
    }
  ],

  menu: {
    kicker: "Choose Your Favorite",
    title: "Menu yang disukai banyak tamu.",
    image: "images/aha-brand-arabica-matcha.jpg",
    coffee: [
      { name: "Kopi Susu Gula Aren", tag: "Signature favorit" },
      { name: "Coffee Latte", tag: "Klasik & lembut" },
      { name: "Cappuccino", tag: "Creamy foam" },
      { name: "Signature Coffee", tag: "Racikan khusus AHA" }
    ],
    nonCoffee: [
      { name: "Matcha", tag: "Segar & earthy" },
      { name: "Thai Tea", tag: "Manis gurih" },
      { name: "Signature Non-Coffee", tag: "Racikan khusus AHA" }
    ],
    note: "Menu dapat disesuaikan dengan paket dan kebutuhan acara Anda.",
    contactNote: "Ada pertanyaan soal menu atau rasa? Tanya langsung lewat WhatsApp atau Instagram kami."
  },

  customize: {
    kicker: "Make It Yours",
    title: "Your Wedding. Your Style. Your AHA Coffee.",
    desc: "Setiap detail bisa disesuaikan agar booth kami terasa seperti bagian dari tema besar hari Anda, bukan tambahan yang berdiri sendiri.",
    image: "images/aha-botol-coffee-thaitea-matcha.jpg",
    items: [
      "Custom cup sticker",
      "Custom label",
      "Custom signage",
      "Custom menu",
      "Penyesuaian warna dengan tema wedding"
    ]
  },

  visitShop: {
    kicker: "Kunjungi Toko Kami",
    title: "Bukan cuma untuk acara — mampir dan ngopi santai juga bisa.",
    desc: "Selain melayani wedding, engagement, dan berbagai acara spesial, AHA Coffee juga buka setiap hari sebagai coffee shop. Datang langsung, duduk santai, dan nikmati menu favorit kamu di tempat.",
    image: "images/aha-kopi-suasana-santai.jpg",
    address: "Isi alamat toko AHA Coffee di sini",
    hours: "Setiap hari, 09.00 – 21.00 WIB",
    mapUrl: "",
    ctaMap: "Lihat Lokasi di Maps"
  },

  galleryIntro: {
    kicker: "Galeri",
    title: "Sekilas suasana di lapangan."
  },
  gallery: [
    { image: "images/aha-varian-warna-warni.jpg", alt: "Enam varian minuman AHA Coffee warna-warni" },
    { image: "images/aha-brand-arabica-matcha.jpg", alt: "Kopi 100% Arabica dan Matcha Premium AHA Coffee" },
    { image: "images/aha-botol-coffee-thaitea-matcha.jpg", alt: "Botol Coffee, Thai Tea dan Matcha AHA Coffee" },
    { image: "images/aha-tiga-gelas-segar.jpg", alt: "Tiga gelas minuman segar AHA Coffee" },
    { image: "images/aha-good-day.jpg", alt: "Segelas es kopi AHA, Today is a Good Day" },
    { image: "images/aha-kopi-suasana-santai.jpg", alt: "Segelas es kopi AHA Coffee dengan suasana santai" }
  ],

  testimonialsIntro: {
    kicker: "Testimoni",
    title: "Cerita dari pelanggan yang sudah mencoba kopi kami.",
    desc: "Ini baru pertama kali AHA Coffee membuka layanan untuk wedding, jadi testimoni berikut adalah cerita jujur dari pelanggan yang sudah mencicipi kopi kami sehari-hari — bukan dari acara pernikahan."
  },
  testimonials: [
    { image: "images/Testimoni1.jpg", alt: "Testimoni pelanggan AHA Coffee 1" },
    { image: "images/Testimoni2.jpg", alt: "Testimoni pelanggan AHA Coffee 2" },
    { image: "images/Testimoni3.jpg", alt: "Testimoni pelanggan AHA Coffee 3" },
    { image: "images/Testimoni4.jpg", alt: "Testimoni pelanggan AHA Coffee 4" },
    { image: "images/Testimoni5.jpg", alt: "Testimoni pelanggan AHA Coffee 5" },
    { image: "images/Testimoni6.jpg", alt: "Testimoni pelanggan AHA Coffee 6" },
    { image: "images/Testimoni7.jpg", alt: "Testimoni pelanggan AHA Coffee 7" },
    { image: "images/Testimoni8.jpg", alt: "Testimoni pelanggan AHA Coffee 8" }
  ],

  stepsIntro: {
    kicker: "Alur Pemesanan",
    title: "Lima langkah menuju hari spesial Anda."
  },
  steps: [
    { title: "Choose Your Package", desc: "Pilih paket yang sesuai jumlah tamu dan kebutuhan acara." },
    { title: "Share Your Details", desc: "Ceritakan tanggal, venue, dan tema acara Anda." },
    { title: "Customize", desc: "Sesuaikan menu, cup, dan detail booth bersama tim kami." },
    { title: "Confirm Your Booking", desc: "Konfirmasi jadwal dan detail akhir pemesanan." },
    { title: "Enjoy Your Special Day", desc: "Nikmati hari Anda, biarkan kami yang mengurus kopinya." }
  ],

  faqIntro: {
    kicker: "FAQ",
    title: "Pertanyaan yang sering ditanyakan."
  },
  faq: [
    { q: "Apakah AHA Coffee bisa datang ke venue mana saja?", a: "Bisa. Tim kami dapat menjangkau berbagai venue, dengan biaya transport menyesuaikan jarak lokasi." },
    { q: "Apakah menu bisa diganti sesuai selera?", a: "Bisa. Setiap paket punya jumlah pilihan menu yang bisa disesuaikan, dan kami juga menerima request menu khusus." },
    { q: "Apakah cup bisa dicustom dengan nama pengantin?", a: "Tentu. Custom cup sticker dan label sudah menjadi bagian dari layanan kami mulai dari paket Sweet ke atas." },
    { q: "Berapa minimal order untuk booking?", a: "Minimal order mengikuti paket Intimate (50 cups). Untuk kebutuhan lebih kecil, silakan hubungi kami langsung." },
    { q: "Berapa lama durasi pelayanan di lokasi?", a: "Durasi menyesuaikan paket, mulai dari 2 jam untuk Intimate hingga custom durasi untuk Grand Package." },
    { q: "Bisakah request paket di luar pilihan yang ada?", a: "Bisa. Silakan hubungi kami untuk konsultasi kebutuhan khusus di luar keempat paket standar." }
  ],

  booking: {
    kicker: "Let's Make Your Moment Special",
    title: "Ceritakan rencana acara Anda.",
    lede: "Isi form berikut dan tim kami akan mengirimkan penawaran serta rekomendasi paket yang paling sesuai.",
    whatsapp: "0812-xxxx-xxxx",
    whatsappLink: "https://wa.me/62812xxxxxxx",
    instagramHandle: "@ahacoffee.id",
    instagramUrl: "https://instagram.com/ahacoffee.id",
    shopeeUrl: "https://shopee.co.id/ahacoffee",
    email: "hello@ahacoffee.id",
    area: "Jabodetabek & sekitarnya"
  },

  footer: {
    tagline: "Good coffee. Beautiful moments. Memorable weddings.",
    services: ["Wedding", "Engagement", "Private Event", "Special Event"],
    note: "© 2026 AHA Coffee — A little sip for your special moment.",
    subNote: "Wedding & Special Moments"
  }
};

/* ---------------------------------------------------------
   Helper bersama: baca konten aktif (hasil edit admin kalau
   ada, kalau belum ada pakai default di atas).
   --------------------------------------------------------- */
window.AHA_STORAGE_KEY = "ahaCoffeeContent_v1";

// Gabungkan konten default dengan konten tersimpan, supaya kalau
// suatu saat ada field baru (fitur baru), konten lama yang sudah
// disimpan dari admin tidak error / hilang — cuma field barunya
// saja yang diisi dari default.
function ahaDeepMerge(base, override) {
  if (Array.isArray(base)) {
    return override !== undefined ? override : base;
  }
  if (base && typeof base === "object") {
    const result = Object.assign({}, base);
    if (override && typeof override === "object") {
      Object.keys(override).forEach(function (key) {
        const baseVal = base[key];
        const overrideVal = override[key];
        if (
          baseVal && typeof baseVal === "object" && !Array.isArray(baseVal) &&
          overrideVal && typeof overrideVal === "object" && !Array.isArray(overrideVal)
        ) {
          result[key] = ahaDeepMerge(baseVal, overrideVal);
        } else {
          result[key] = overrideVal;
        }
      });
    }
    return result;
  }
  return override !== undefined ? override : base;
}

// URL file JSON di server yang menyimpan hasil edit dari admin.html.
// File ini di-update otomatis lewat GitHub tiap kali admin klik "Simpan".
window.AHA_CONTENT_URL = "/data/content.json";

window.getAhaContent = function () {
  const defaults = JSON.parse(JSON.stringify(window.AHA_DEFAULT_CONTENT));
  let serverOverride = null;

  // Ambil versi terbaru dari server (data/content.json) supaya SEMUA
  // pengunjung lihat isi yang sama, bukan cuma dari browser admin.
  // Pakai XMLHttpRequest synchronous supaya tidak perlu ubah struktur
  // index.html/admin.html yang sudah ada.
  try {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", window.AHA_CONTENT_URL + "?t=" + Date.now(), false);
    xhr.send(null);
    if (xhr.status === 200 && xhr.responseText) {
      serverOverride = JSON.parse(xhr.responseText);
    }
  } catch (e) {
    console.warn("Gagal ambil konten dari server, coba cache lokal.", e);
  }

  if (serverOverride && Object.keys(serverOverride).length > 0) {
    try { localStorage.setItem(window.AHA_STORAGE_KEY, JSON.stringify(serverOverride)); } catch (e) {}
    return ahaDeepMerge(defaults, serverOverride);
  }

  // Fallback: kalau server belum bisa diakses (mis. dibuka langsung dari
  // file lokal tanpa hosting, atau lagi offline), pakai cache lokal browser.
  try {
    const saved = localStorage.getItem(window.AHA_STORAGE_KEY);
    if (saved) return ahaDeepMerge(defaults, JSON.parse(saved));
  } catch (e) {
    console.warn("Gagal membaca cache lokal, pakai default.", e);
  }
  return defaults;
};

// Simpan perubahan ke server (lewat Netlify Function -> GitHub) supaya
// SEMUA pengunjung ikut lihat versi terbaru, bukan cuma browser ini.
// Mengembalikan Promise: resolve({ok:true}) kalau berhasil.
window.saveAhaContent = function (content, adminPassword) {
  try { localStorage.setItem(window.AHA_STORAGE_KEY, JSON.stringify(content)); } catch (e) {}

  return fetch("/.netlify/functions/save-content", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: adminPassword, content: content })
  }).then(function (res) {
    return res.json().then(function (data) {
      if (!res.ok) throw new Error(data && data.error ? data.error : "Gagal menyimpan ke server.");
      return data;
    });
  });
};
