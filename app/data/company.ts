// Company profile transcribed from the 2026 catalog PDF — see doc/katalog-viontech.md.

export const company = {
  nama: 'PT Viontech Integrasi Optima',
  namaPendek: 'Viontech',
  tagline: 'Integrasi Teknologi & Pengadaan, Langsung dari Sumbernya',
  taglineKatalog: 'Terjamin Kualitas, Harga Langsung dari Pabrik',
  eyebrow: 'IT Solution · Pengadaan Barang & Jasa',
  headline: 'Solusi Teknologi & Pengadaan Terpercaya untuk Instansi Anda',
  bidang:
    'Integrasi teknologi dan pengadaan barang & jasa untuk instansi pemerintah, TNI/Polri, BUMN, dan sektor swasta',
  intro:
    'PT Viontech Integrasi Optima adalah mitra integrasi teknologi sekaligus penyedia pengadaan barang & jasa untuk instansi pemerintah, TNI/Polri, BUMN, dan sektor swasta — dari infrastruktur data center, cloud, keamanan jaringan, dan pengembangan aplikasi, hingga furniture kantor, elektronik, serta perlengkapan barak/asrama langsung dari pabrik.',
  liniProduk: 'ALSATRI (Alat Satuan Tri Matra)',
  alamat:
    'AIWORK Office Space, Plaza Simatupang Lt. 6 Unit 3, Jl. TB Simatupang Kav. IS No. 01, Pondok Pinang, Kebayoran Lama, Jakarta Selatan 12310',
  alamatSingkat: 'Plaza Simatupang, Jakarta Selatan',
  telepon: '0817 322 890',
  teleponE164: '+62817322890',
  waNumber: '62817322890',
  email: 'admin@viontech.co.id',
  emailAlt: 'vio.viontech@gmail.com',
  website: 'viontech.co.id',
  url: 'https://viontech.co.id',
  logo: '/images/logo_viontech_full.webp',
  logoMark: '/images/logo_viontech.webp',
} as const

export const waLink = (pesan: string) =>
  `https://wa.me/${company.waNumber}?text=${encodeURIComponent(pesan)}`

/** Hal. 1 — the four promises under the cover lockup. */
export const promises = [
  {
    icon: 'bank',
    title: 'Terpercaya',
    desc: 'Melayani instansi pemerintah, TNI/Polri, BUMN & swasta.',
  },
  {
    icon: 'badge',
    title: 'Kualitas Terjamin',
    desc: 'Produk original sesuai spesifikasi teknis (spektek).',
  },
  {
    icon: 'factory',
    title: 'Harga Langsung dari Pabrik',
    desc: 'Kemitraan langsung dengan produsen terpercaya.',
  },
  {
    icon: 'truck',
    title: 'Pengiriman Aman & Tepat Waktu',
    desc: 'Jangkauan nasional dengan distribusi terintegrasi.',
  },
] as const

/** Hal. 2 — headline numbers. */
export const stats = [
  { value: '71', suffix: '', label: 'Item produk dalam katalog 2026' },
  { value: '100', suffix: '%', label: 'Barang original langsung dari pabrik' },
  { value: '9', suffix: '', label: 'Kategori produk & perlengkapan' },
  { value: 'Nasional', suffix: '', label: 'Jangkauan pengiriman se-Indonesia' },
] as const

/** Hal. 3 — Keunggulan Kompetitif. */
export const advantages = [
  {
    icon: 'factory',
    title: 'Harga Langsung dari Pabrik',
    desc: 'Kemitraan langsung dengan produsen menghilangkan biaya distributor berlapis, sehingga harga lebih kompetitif.',
  },
  {
    icon: 'shield',
    title: 'Jaminan Kualitas & Keaslian',
    desc: 'Seluruh barang memiliki jaminan keaslian sesuai spesifikasi teknis (spektek) dan standar mutu.',
  },
  {
    icon: 'truck',
    title: 'Pengiriman Tepat Waktu',
    desc: 'Jaringan logistik nasional yang andal memastikan pengiriman cepat, aman, dan tepat waktu ke seluruh Indonesia.',
  },
  {
    icon: 'badge',
    title: 'Legalitas Lengkap',
    desc: 'Didukung dokumen legalitas usaha lengkap, siap untuk e-Katalog LKPP dan tender pemerintah maupun swasta.',
  },
  {
    icon: 'clipboard',
    title: 'Administrasi & Dokumentasi Lengkap',
    desc: 'Kami mengawal setiap project dengan administrasi dan dokumentasi yang lengkap, rapi, dan sesuai regulasi.',
  },
  {
    icon: 'handshake',
    title: 'Handling Project Aman & Rapi',
    desc: 'Kami membantu handling project dengan aman, terstruktur, dan terkoordinasi untuk hasil terbaik dan minim risiko.',
  },
] as const

/**
 * Carousel banner. Two business lines in one list: the IT solution practice
 * first, then the five procurement supply lines. `kind` drives the eyebrow and
 * where the slide's CTA points.
 */
export const pillars = [
  {
    id: 'infra-solution',
    kind: 'it',
    eyebrow: 'IT Solution',
    title: 'Infrastructure & Data Center',
    desc: 'Enterprise server, storage, virtualisasi, HCI, dan backup/DR — Oracle, HPE, Dell, Lenovo, Nutanix, dengan jaringan dan keamanan Fortinet & Cisco.',
    image: '/images/produk/01_Infra_Solution.webp',
    cta: { label: 'Lihat Layanan IT', href: '#layanan' },
  },
  {
    id: 'it-smart-solution',
    kind: 'it',
    eyebrow: 'IT Solution',
    title: 'IT Smart Solution',
    desc: 'Database, cloud, data analytics, dan pengembangan aplikasi web/mobile — Oracle, PostgreSQL, AWS, Huawei Cloud, React, Vue, Laravel, dan Go.',
    image: '/images/produk/02_IT_Smart_Solution.webp',
    cta: { label: 'Lihat Layanan IT', href: '#layanan' },
  },
  {
    id: 'furniture-kantor',
    kind: 'pengadaan',
    eyebrow: 'Pengadaan Barang & Jasa',
    title: 'Furniture Kantor',
    desc: 'Meja kerja, kursi jabatan, lemari arsip, dan filling kabinet untuk ruang kerja yang produktif.',
    image: '/images/produk/03_Furniture_Kantor.webp',
    cta: { label: 'Lihat Katalog', href: '#katalog' },
  },
  {
    id: 'elektronik',
    kind: 'pengadaan',
    eyebrow: 'Pengadaan Barang & Jasa',
    title: 'Elektronik',
    desc: 'Laptop, printer, TV LED, proyektor, AC, hingga sistem audio visual bergaransi resmi pabrik.',
    image: '/images/produk/04_Elektronik.webp',
    cta: { label: 'Lihat Katalog', href: '#katalog' },
  },
  {
    id: 'interior-ruangan',
    kind: 'pengadaan',
    eyebrow: 'Pengadaan Barang & Jasa',
    title: 'Interior & Perlengkapan Ruangan',
    desc: 'Set meja rapat, sofa, gordyn, dan atribut protokoler untuk ruang rapat serta ruang pimpinan.',
    image: '/images/produk/05_Interior_dan_Perlengkapan_Ruangan.webp',
    cta: { label: 'Lihat Katalog', href: '#katalog' },
  },
  {
    id: 'asrama-hunian',
    kind: 'pengadaan',
    eyebrow: 'Pengadaan Barang & Jasa',
    title: 'Perlengkapan Asrama & Hunian',
    desc: 'Tempat tidur susun, springbed, lemari pakaian, dan tekstil untuk barak, asrama, dan mess.',
    image: '/images/produk/06_Perlengkapan_Asrama_Hunian.webp',
    cta: { label: 'Lihat Katalog', href: '#katalog' },
  },
  {
    id: 'gudang-logistik',
    kind: 'pengadaan',
    eyebrow: 'Pengadaan Barang & Jasa',
    title: 'Perlengkapan Gudang & Logistik',
    desc: 'Rak penyimpanan, pallet, hand pallet, dan troli untuk operasional gudang yang efisien.',
    image: '/images/produk/07_Perlengkapan_Gudang_Logistik.webp',
    cta: { label: 'Lihat Katalog', href: '#katalog' },
  },
] as const

/** Hal. 16 — Sektor Pasar & Mitra Kerja. */
export const sectors = [
  {
    icon: 'bank',
    title: 'Instansi Pemerintah',
    image: '/images/mitra_kerja/instansi_pemerintah.webp',
    items: [
      'Infrastruktur IT & aplikasi layanan publik',
      'Pengadaan fasilitas kantor',
      'Standar sesuai instansi & regulasi',
    ],
  },
  {
    icon: 'shield',
    title: 'TNI / Polri',
    image: '/images/mitra_kerja/tni_polri.webp',
    items: [
      'Fasilitas barak & asrama',
      'Jaringan & sistem keamanan data',
      'Perlengkapan operasional tahan lama',
    ],
  },
  {
    icon: 'building',
    title: 'BUMN & BUMD',
    image: '/images/mitra_kerja/bumn_bumd.webp',
    items: [
      'Data center & sistem operasional perusahaan',
      'Kebutuhan kantor skala besar',
      'Dukungan proyek jangka panjang',
    ],
  },
  {
    icon: 'truck',
    title: 'Swasta: Logistik & Manufaktur',
    image: '/images/mitra_kerja/swasta_dan_logistik.webp',
    items: [
      'Aplikasi & integrasi sistem operasional',
      'Furniture & elektronik kantor',
      'Peralatan gudang & efisiensi kerja',
    ],
  },
] as const

/** Hal. 17 — Legalitas & Komitmen Kualitas. */
export const legal = [
  { label: 'Nomor Induk Berusaha (NIB)', value: '1006260097653' },
  { label: 'NPWP Perusahaan', value: '1000000009980601' },
  { label: 'Status Penanaman Modal', value: 'PMDN' },
  { label: 'Status Pajak', value: 'Sudah PKP (Pengusaha Kena Pajak)' },
  { label: 'Produk PDN', value: 'Produk Dalam Negeri — mendukung produk lokal berkualitas' },
] as const

export const kbli = {
  utama: 'Perdagangan Besar Mesin Kantor & Industri Pengolahan',
  cakupan: [
    'Peralatan Telekomunikasi',
    'Suku Cadang Elektronik',
    'Piranti Lunak',
    'TI & Jasa Komputer',
    'Barang Percetakan',
  ],
} as const

export const commitments = [
  'Barang 100% original, sesuai spesifikasi teknis (spektek) yang dipersyaratkan.',
  'Harga bersaing hasil kemitraan langsung dengan pabrik.',
  'Proses pengadaan transparan dan akuntabel.',
  'Dukungan purna jual & garansi resmi.',
] as const

/** Hal. 18 — closing value props. */
export const partnerValues = [
  {
    icon: 'badge',
    title: 'Produk Terjamin',
    desc: 'Barang 100% original, sesuai spesifikasi teknis, langsung dari pabrik.',
  },
  {
    icon: 'handshake',
    title: 'Harga Kompetitif',
    desc: 'Kemitraan langsung dengan pabrik untuk harga terbaik.',
  },
  {
    icon: 'clipboard',
    title: 'Administrasi Proyek',
    desc: 'Dokumentasi lengkap, transparan, akuntabel, dan sesuai regulasi.',
  },
  {
    icon: 'team',
    title: 'Berpengalaman',
    desc: 'Tim profesional berpengalaman dalam pengadaan dan manajemen proyek.',
  },
] as const

/** Visi & Misi — carried over from the previous company profile. */
export const visi =
  'Menjadi perusahaan teknologi integrasi terdepan di Indonesia yang menghadirkan solusi digital cerdas, andal, dan inovatif untuk mempercepat transformasi digital pemerintah, industri, dan masyarakat.'

export const misi = [
  'Membangun ekosistem teknologi yang optimal, scalable, dan sesuai kebutuhan klien.',
  'Menghadirkan solusi modern AI, Cloud, Cybersecurity, dan Enterprise Infrastructure.',
  'Menjadi mitra strategis dalam mendorong inovasi dan transformasi digital berkelanjutan.',
  'Mengembangkan SDM profesional dan bersertifikasi.',
  'Memberikan nilai tambah melalui pendekatan berbasis data dan analitik.',
] as const

/** The two things the company sells, side by side. */
export const businessLines = [
  {
    icon: 'server',
    title: 'IT Solution & Integrasi',
    desc: 'Infrastruktur data center, cloud, database, jaringan & keamanan, data analytics, hingga pengembangan aplikasi web dan mobile.',
    points: ['Infrastructure & Data Center', 'Cloud & Database', 'Network & Security', 'Software Development'],
    href: '#layanan',
  },
  {
    icon: 'truck',
    title: 'Pengadaan Barang & Jasa',
    desc: 'Furniture kantor, elektronik, perlengkapan barak/asrama, dan atribut protokoler instansi — original, langsung dari pabrik.',
    points: ['Furniture & Interior', 'Elektronik Kantor', 'Perlengkapan Asrama', 'Atribut Instansi'],
    href: '#katalog',
  },
] as const
