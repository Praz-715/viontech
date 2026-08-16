// Source of truth for the 2026 catalog. Names, codes, dimensions and specs were
// transcribed from the product cards themselves — where the older PDF disagreed
// with the card artwork, the card wins. doc/katalog-viontech.md mirrors this file.
// Each `gambar` is a finished product card (1448x1086 WebP) in public/images/produk/.

export interface Product {
  slug: string
  nama: string
  gambar: string
  kode?: string
  merek?: string
  dimensi?: string
  spesifikasi: string[]
}

export interface ProductCategory {
  id: string
  nama: string
  icon: string
  deskripsi: string
  produk: Product[]
}

export const productCategories: ProductCategory[] = [
  {
    id: "lemari-penyimpanan",
    nama: "Lemari & Penyimpanan",
    icon: "cabinet",
    deskripsi: "Furniture kayu jati & besi untuk arsip, pakaian, dan penyimpanan yang kuat, rapi, dan tahan lama.",
    produk: [
      {
        slug: "lemari-arsip-besi-2-pintu",
        nama: "Lemari Arsip Besi 2 Pintu",
        gambar: "/images/produk/lemari_dan_penyimpanan/lemari_arsip_2_pintu.webp",
        spesifikasi: [
          "Bahan besi berkualitas",
          "2 pintu dengan kunci",
          "Ideal untuk arsip & dokumen",
          "Awet & anti rayap"
        ]
      },
      {
        slug: "lemari-kunci-kunci",
        nama: "Lemari Kunci-Kunci",
        gambar: "/images/produk/lemari_dan_penyimpanan/lemari_kunci_kunci.webp",
        spesifikasi: [
          "Kayu jati pilihan",
          "Kapasitas banyak kunci",
          "Dilengkapi kunci pengaman",
          "Tampilan elegan"
        ]
      },
      {
        slug: "lemari-makan",
        nama: "Lemari Makan",
        gambar: "/images/produk/lemari_dan_penyimpanan/lemari_makan.webp",
        spesifikasi: [
          "Kayu jati berkualitas",
          "Rak atas & laci bawah luas",
          "Cocok untuk dapur & makan",
          "Kuat & tahan lama"
        ]
      },
      {
        slug: "lemari-pakaian-2-pintu",
        nama: "Lemari Pakaian 2 Pintu",
        gambar: "/images/produk/lemari_dan_penyimpanan/lemari_pakaian_2_pintu.webp",
        spesifikasi: [
          "Kayu jati solid",
          "2 pintu + ruang luas",
          "Gantungan & laci",
          "Kuat & elegan"
        ]
      },
      {
        slug: "lemari-pakaian-3-pintu",
        nama: "Lemari Pakaian 3 Pintu",
        gambar: "/images/produk/lemari_dan_penyimpanan/lemari_pakaian_3_pintu.webp",
        spesifikasi: [
          "Kayu jati pilihan",
          "3 pintu dengan kunci",
          "Ruang luas & rapi",
          "Awet & tahan lama"
        ]
      },
      {
        slug: "lemari-pakaian-kiri-1",
        nama: "Lemari Pakaian Kiri 1",
        gambar: "/images/produk/lemari_dan_penyimpanan/lemari_pakaian_1_pintu.webp",
        spesifikasi: [
          "Bahan berkualitas",
          "1 pintu dengan kunci",
          "Cocok untuk pakaian dan serbaguna",
          "Awet & kokoh"
        ]
      },
      {
        slug: "rak-buku-pimpinan-type-c",
        nama: "Rak Buku Pimpinan Type C",
        gambar: "/images/produk/lemari_dan_penyimpanan/rak_buku_pimpinan_type_c.webp",
        spesifikasi: [
          "Kayu jati berkualitas",
          "Rak buku + laci penyimpanan",
          "Tampilan mewah",
          "Cocok untuk ruang kerja"
        ]
      },
      {
        slug: "lemari-piala",
        nama: "Lemari Piala",
        gambar: "/images/produk/lemari_dan_penyimpanan/lemari_piala.webp",
        dimensi: "160 x 38 x 215 cm",
        spesifikasi: [
          "Display kaca elegan",
          "Untuk piala & penghargaan",
          "Pintu kaca dengan kunci",
          "Tampilan mewah & kokoh"
        ]
      },
      {
        slug: "lemari-buku-pimpinan-type-a",
        nama: "Lemari Buku Pimpinan Type A",
        gambar: "/images/produk/lemari_dan_penyimpanan/lemari_buku_pimpinan_type_a.webp",
        dimensi: "100 x 40 x 210 cm",
        spesifikasi: [
          "Kayu jati premium",
          "Rak buku bertingkat",
          "Penyimpanan bawah tertutup",
          "Elegan & fungsional"
        ]
      }
    ]
  },
  {
    id: "meja-kursi-kantor",
    nama: "Meja & Kursi Kantor",
    icon: "chair",
    deskripsi: "Meja kerja, meja rapat, dan kursi jabatan yang fungsional, nyaman, dan menunjang produktivitas.",
    produk: [
      {
        slug: "kursi-hadap",
        nama: "Kursi Hadap",
        gambar: "/images/produk/meja_dan_kursi_kantor/kursi_hadap.webp",
        kode: "K. Hadap 5002",
        spesifikasi: [
          "Rangka besi chrome",
          "Busa empuk",
          "Nyaman & elegan",
          "Cocok untuk kantor, lobby & meeting room"
        ]
      },
      {
        slug: "kursi-roda-type-staff",
        nama: "Kursi Roda Type Staff",
        gambar: "/images/produk/meja_dan_kursi_kantor/kursi_roda_type_staff.webp",
        spesifikasi: [
          "Sandaran ergonomis",
          "Tinggi dapat diatur",
          "Busa & kulit",
          "Putar 360°"
        ]
      },
      {
        slug: "kursi-roda-type-d",
        nama: "Kursi Roda Type D",
        gambar: "/images/produk/meja_dan_kursi_kantor/kursi_roda_type_d.webp",
        spesifikasi: [
          "Sandaran tinggi & empuk",
          "Armrest kayu elegan",
          "Tinggi dapat diatur",
          "Roda kuat & stabil"
        ]
      },
      {
        slug: "kursi-roda-type-e",
        nama: "Kursi Roda Type E",
        gambar: "/images/produk/meja_dan_kursi_kantor/kursi_roda_type_e.webp",
        kode: "AY 041 E / Black",
        spesifikasi: [
          "Desain modern & elegan",
          "Sandaran empuk",
          "Tinggi dapat diatur",
          "Roda 5 titik"
        ]
      },
      {
        slug: "meja-makan-set-6-kursi",
        nama: "Meja Makan + Kursi (6 Orang)",
        gambar: "/images/produk/meja_dan_kursi_kantor/meja_makan_kursi_6_orang.webp",
        spesifikasi: [
          "Kayu jati berkualitas",
          "Finishing halus & mewah",
          "Kokoh & tahan lama",
          "Cocok untuk ruang makan atau meeting informal"
        ]
      },
      {
        slug: "meja-rapat-ruang-pimpinan",
        nama: "Meja Rapat Ruang Pimpinan",
        gambar: "/images/produk/meja_dan_kursi_kantor/meja_rapat_pimpinan.webp",
        spesifikasi: [
          "Material kayu berkualitas",
          "Permukaan luas & kokoh",
          "Tampilan mewah",
          "Cocok untuk rapat penting"
        ]
      },
      {
        slug: "meja-rapat-ruang-rapat",
        nama: "Meja Rapat Ruang Rapat",
        gambar: "/images/produk/meja_dan_kursi_kantor/meja_rapat_ruang_rapat.webp",
        spesifikasi: [
          "Desain elegan & profesional",
          "Kokoh & tahan lama",
          "Material kayu berkualitas",
          "Cocok untuk ruang rapat formal"
        ]
      },
      {
        slug: "meja-tulis-1-biro-type-c",
        nama: "Meja Tulis 1 Biro Type C",
        gambar: "/images/produk/meja_dan_kursi_kantor/meja_tulis_biro_type_c.webp",
        spesifikasi: [
          "Desain modern & fungsional",
          "Finishing rapi & berkualitas",
          "Laci penyimpanan luas",
          "Nyaman untuk kerja harian"
        ]
      },
      {
        slug: "meja-tulis-1-biro-type-e",
        nama: "Meja Tulis 1 Biro Type E",
        gambar: "/images/produk/meja_dan_kursi_kantor/meja_tulis_biro_type_e.webp",
        spesifikasi: [
          "Tampilan mewah & elegan",
          "Ruang penyimpanan optimal",
          "Material premium",
          "Kokoh & tahan lama"
        ]
      },
      {
        slug: "meja-tv",
        nama: "Meja TV",
        gambar: "/images/produk/meja_dan_kursi_kantor/meja_tv.webp",
        spesifikasi: [
          "Desain minimalis & klasik",
          "Material kayu pilihan",
          "Penyimpanan luas",
          "Awet & tahan lama"
        ]
      },
      {
        slug: "meja-umum",
        nama: "Meja Umum",
        gambar: "/images/produk/meja_dan_kursi_kantor/meja_umum.webp",
        spesifikasi: [
          "Sederhana & multifungsi",
          "Cocok untuk berbagai kebutuhan",
          "Konstruksi kuat & stabil",
          "Praktis & ekonomis"
        ]
      },
      {
        slug: "meja-rapat-lengkap",
        nama: "Meja Rapat Lengkap",
        gambar: "/images/produk/meja_dan_kursi_kantor/meja_rapat_lengkap.webp",
        spesifikasi: [
          "Set meja rapat lengkap",
          "Desain modern & profesional",
          "Kursi ergonomis nyaman",
          "Ideal untuk meeting produktif"
        ]
      }
    ]
  },
  {
    id: "kursi-perlengkapan-lain",
    nama: "Kursi & Perlengkapan Aula",
    icon: "podium",
    deskripsi: "Bangku, kursi susun, podium, dan rak senjata untuk aula, ruang serbaguna, dan instansi keamanan.",
    produk: [
      {
        slug: "bangku-panjang-rangka-besi",
        nama: "Bangku Panjang Rangka Besi",
        gambar: "/images/produk/kursi_dan_perlengkapan_lain/bangku_panjang_rangka_besi.webp",
        spesifikasi: [
          "Rangka besi kokoh",
          "Finishing anti karat",
          "Kayu berkualitas",
          "Nyaman & tahan lama",
          "Cocok untuk aula, sekolah, & ruang publik"
        ]
      },
      {
        slug: "kursi-susun-kain-loreng",
        nama: "Kursi Susun Kain Loreng",
        gambar: "/images/produk/kursi_dan_perlengkapan_lain/kursi_susun_kin_loreng.webp",
        spesifikasi: [
          "Busa empuk & nyaman",
          "Kain loreng berkualitas",
          "Rangka besi kuat",
          "Ringan & mudah ditata",
          "Kursi dapat disusun",
          "Cocok untuk aula, meeting, dan acara formal"
        ]
      },
      {
        slug: "lasenar-podium",
        nama: "Lasenar (Podium)",
        gambar: "/images/produk/kursi_dan_perlengkapan_lain/podium.webp",
        spesifikasi: [
          "Desain elegan & berwibawa",
          "Material kayu pilihan",
          "Finishing halus & kokoh",
          "Ideal untuk pidato, presentasi, & acara resmi"
        ]
      },
      {
        slug: "rak-senjata",
        nama: "Rak Senjata",
        gambar: "/images/produk/kursi_dan_perlengkapan_lain/rak_senjata.webp",
        spesifikasi: [
          "Kayu solid",
          "Ergonomis",
          "Kuat & stabil",
          "Penyimpanan optimal",
          "Finishing halus",
          "Aman & tahan lama"
        ]
      }
    ]
  },
  {
    id: "rak-perlengkapan",
    nama: "Rak & Perlengkapan",
    icon: "shelf",
    deskripsi: "Rak penyimpanan multifungsi untuk dapur, kamar mandi, dokumen, dan ruang senjata.",
    produk: [
      {
        slug: "filling-kabinet-4-laci",
        nama: "Filling Kabinet 4 Laci",
        gambar: "/images/produk/rak_dan_perlengkapan/filling_kabinet_4_laci.webp",
        spesifikasi: [
          "4 laci kapasitas besar",
          "Keamanan dokumen",
          "Material berkualitas"
        ]
      },
      {
        slug: "rak-handuk",
        nama: "Rak Handuk",
        gambar: "/images/produk/rak_dan_perlengkapan/rak_handuk.webp",
        spesifikasi: [
          "Material stainless steel",
          "Kokoh & stabil",
          "Tahan air & karat"
        ]
      },
      {
        slug: "rak-piring",
        nama: "Rak Piring",
        gambar: "/images/produk/rak_dan_perlengkapan/rak_piring.webp",
        spesifikasi: [
          "Kayu jati berkualitas",
          "Kokoh & awet",
          "Finishing coklat walnut elegan"
        ]
      },
      {
        slug: "rak-senjata-dimensi",
        nama: "Rak Senjata (varian dimensi)",
        gambar: "/images/produk/rak_dan_perlengkapan/rak_senjata.webp",
        dimensi: "70 × 60 × 70 cm · 18 × 18 × 70 cm · 52 × 53 × 18 cm",
        spesifikasi: [
          "Desain aman & kokoh",
          "Penyimpanan terorganisir",
          "Material berkualitas"
        ]
      }
    ]
  },
  {
    id: "aksesoris-kamar",
    nama: "Aksesoris Kamar & Cermin",
    icon: "mirror",
    deskripsi: "Cermin, meja rias, dan kapstok dengan finishing kayu jati coklat walnut.",
    produk: [
      {
        slug: "cermin-gantung",
        nama: "Cermin Gantung",
        gambar: "/images/produk/aksesoris_kamar/cermis_gantung.webp",
        spesifikasi: [
          "Kaca jernih berkualitas",
          "Kuat & aman",
          "Kayu jati premium"
        ]
      },
      {
        slug: "meja-rias",
        nama: "Meja Rias",
        gambar: "/images/produk/aksesoris_kamar/meja_rias.webp",
        spesifikasi: [
          "Penyimpanan praktis",
          "Kursi empuk nyaman",
          "Finishing premium"
        ]
      },
      {
        slug: "kapstok-gantung",
        nama: "Kapstok Gantung",
        gambar: "/images/produk/aksesoris_kamar/kapstok_gantung.webp",
        spesifikasi: [
          "Kait kuat & tahan lama",
          "Desain modern",
          "Kayu jati berkualitas"
        ]
      },
      {
        slug: "kapstok-standar",
        nama: "Kapstok Standar",
        gambar: "/images/produk/aksesoris_kamar/kapstok_standar.webp",
        spesifikasi: [
          "Kokoh & stabil",
          "Gantungan banyak",
          "Kayu jati elegan"
        ]
      }
    ]
  },
  {
    id: "tempat-tidur-sofa",
    nama: "Tempat Tidur & Sofa",
    icon: "bed",
    deskripsi: "Springbed, kasur, tempat tidur susun, dan sofa untuk fasilitas asrama, mess, dan ruang tamu.",
    produk: [
      {
        slug: "kasur-busa",
        nama: "Kasur Busa",
        gambar: "/images/produk/tempat_tidur_dan_sofa/kasur_busa.webp",
        spesifikasi: [
          "Material busa berkualitas",
          "Tebal & empuk",
          "Nyaman & tahan lama",
          "Cocok untuk berbagai kebutuhan"
        ]
      },
      {
        slug: "springbed-180x200",
        nama: "Springbed 180 x 200 cm",
        gambar: "/images/produk/tempat_tidur_dan_sofa/springbed_180x200.webp",
        dimensi: "180 x 200 cm",
        spesifikasi: [
          "Pegas berkualitas tinggi",
          "Topper empuk",
          "Support optimal",
          "Tidur lebih nyenyak"
        ]
      },
      {
        slug: "springbed-200x200",
        nama: "Springbed 200 x 200 cm",
        gambar: "/images/produk/tempat_tidur_dan_sofa/springbed_200x200.webp",
        dimensi: "200 x 200 cm (king size)",
        spesifikasi: [
          "Ukuran king size",
          "Dukungan maksimal",
          "Desain elegan",
          "Tahan lama & kokoh"
        ]
      },
      {
        slug: "tempat-tidur-susun-besi",
        nama: "Tempat Tidur Susun Besi",
        gambar: "/images/produk/tempat_tidur_dan_sofa/tempat_tidur_susun_besi.webp",
        dimensi: "200 × 90 × 170 cm",
        spesifikasi: [
          "Rangka besi kuat",
          "Kokoh & stabil",
          "Hemat ruang",
          "Ideal untuk asrama & mess"
        ]
      },
      {
        slug: "sofa-type-c",
        nama: "Sofa Type C",
        gambar: "/images/produk/tempat_tidur_dan_sofa/sofa_type_c.webp",
        spesifikasi: [
          "Desain modern & elegan",
          "Kain berkualitas berkelas premium",
          "Empuk & nyaman",
          "Cocok untuk ruang tamu & ruang keluarga",
          "Konstruksi kokoh & awet"
        ]
      },
      {
        slug: "sofa-type-d",
        nama: "Sofa Type D",
        gambar: "/images/produk/tempat_tidur_dan_sofa/sofa_type_d.webp",
        spesifikasi: [
          "Desain minimalis",
          "Pilihan warna menarik",
          "Nyaman & ergonomis",
          "Cocok untuk berbagai interior"
        ]
      }
    ]
  },
  {
    id: "tekstil-perlengkapan-tidur",
    nama: "Tekstil & Perlengkapan Tidur",
    icon: "pillow",
    deskripsi: "Bantal, bed cover, selimut, sprei, dan seragam kedinasan berbahan berkualitas.",
    produk: [
      {
        slug: "bantal",
        nama: "Bantal",
        gambar: "/images/produk/tekstil_dan_perlengkapan_tidur/bantal.webp",
        spesifikasi: [
          "Empuk & nyaman",
          "Sirkulasi udara baik",
          "Mudah dirawat"
        ]
      },
      {
        slug: "bed-cover",
        nama: "Bed Cover",
        gambar: "/images/produk/tekstil_dan_perlengkapan_tidur/bed_cover.webp",
        spesifikasi: [
          "Kain tebal berkualitas",
          "Desain menarik",
          "Tahan lama & mudah cuci"
        ]
      },
      {
        slug: "bantal-guling",
        nama: "Bantal Guling",
        gambar: "/images/produk/tekstil_dan_perlengkapan_tidur/bantal_guling.webp",
        spesifikasi: [
          "Lembut & nyaman",
          "Dukungan optimal",
          "Higienis & mudah dicuci"
        ]
      },
      {
        slug: "selimut",
        nama: "Selimut",
        gambar: "/images/produk/tekstil_dan_perlengkapan_tidur/selimut.webp",
        spesifikasi: [
          "Hangat & nyaman",
          "Lembut di kulit",
          "Mudah dicuci & awet"
        ]
      },
      {
        slug: "sprei-sarung-bantal",
        nama: "Sprei & Sarung Bantal",
        gambar: "/images/produk/tekstil_dan_perlengkapan_tidur/sprei_dan_sarung_bantal.webp",
        spesifikasi: [
          "Bahan halus & nyaman",
          "Pilihan motif beragam",
          "Awet & tidak mudah pudar"
        ]
      },
      {
        slug: "seragam-kedinasan",
        nama: "Seragam Kedinasan",
        gambar: "/images/produk/tekstil_dan_perlengkapan_tidur/seragam_kedinasan.webp",
        spesifikasi: [
          "Bahan berkualitas",
          "Jahitan rapi",
          "Tampilan profesional"
        ]
      }
    ]
  },
  {
    id: "elektronik",
    nama: "Elektronik & Peralatan Kerja",
    icon: "plug",
    deskripsi: "Elektronik bergaransi resmi pabrik untuk fasilitas asrama dan kantor, dari dapur sampai ruang kontrol.",
    produk: [
      {
        slug: "dispenser-hot-cold",
        nama: "Dispenser Hot & Cold",
        gambar: "/images/produk/elektronik/dispenser_hot_and_cold.webp",
        spesifikasi: [
          "Air panas & dingin",
          "Aman & hemat energi",
          "Desain modern & elegan"
        ]
      },
      {
        slug: "kulkas-1-pintu",
        nama: "Kulkas 1 Pintu",
        gambar: "/images/produk/elektronik/kulkas_1_pintu.webp",
        spesifikasi: [
          "Pendinginan cepat & merata",
          "Hemat energi",
          "Kompak & praktis"
        ]
      },
      {
        slug: "kulkas-2-pintu",
        nama: "Kulkas 2 Pintu",
        gambar: "/images/produk/elektronik/kulkas_2_pintu.webp",
        spesifikasi: [
          "Pendinginan optimal",
          "Kapasitas lebih besar",
          "Hemat energi"
        ]
      },
      {
        slug: "mesin-cuci-10kg",
        nama: "Mesin Cuci 10 Kg",
        gambar: "/images/produk/elektronik/mesin_cuci_10kg.webp",
        spesifikasi: [
          "Pencucian kuat & bersih",
          "Berbagai mode pencucian",
          "Low noise (hening)"
        ]
      },
      {
        slug: "tv-led-32-bracket",
        nama: "TV LED 32\" + Bracket",
        gambar: "/images/produk/elektronik/tv_led_32inch.webp",
        spesifikasi: [
          "Layar jernih HD Ready",
          "Suara jernih & nyaman",
          "Sudah termasuk bracket"
        ]
      },
      {
        slug: "tv-led-42-bracket",
        nama: "TV LED 42\" + Bracket",
        gambar: "/images/produk/elektronik/tv_led_42inch.webp",
        spesifikasi: [
          "Gambar lebih tajam & jernih (Full HD)",
          "Suara lebih imersif",
          "Sudah termasuk bracket"
        ]
      },
      {
        slug: "proyektor",
        nama: "Proyektor",
        gambar: "/images/produk/elektronik/proyektor.webp",
        spesifikasi: [
          "Gambar jernih",
          "Resolusi tinggi",
          "Sistem pendingin efisien"
        ]
      },
      {
        slug: "interactive-display",
        nama: "Interactive Display",
        gambar: "/images/produk/elektronik/interaktive_display.webp",
        spesifikasi: [
          "Layar sentuh",
          "4K Ultra HD",
          "Kolaborasi tanpa batas"
        ]
      },
      {
        slug: "audio-visual-control-room",
        nama: "Audio Visual & Control Room",
        gambar: "/images/produk/elektronik/audio_visual_control_room.webp",
        spesifikasi: [
          "Audio jernih",
          "Visual tajam",
          "Kontrol terintegrasi"
        ]
      },
      {
        slug: "videotron",
        nama: "Videotron",
        gambar: "/images/produk/elektronik/videotron.webp",
        spesifikasi: [
          "Tampilan terang",
          "LED berkualitas",
          "Tahan lama & hemat energi"
        ]
      },
      {
        slug: "laptop",
        nama: "Laptop",
        gambar: "/images/produk/elektronik/laptop.webp",
        spesifikasi: [
          "Performa tinggi",
          "Aman & handal",
          "Baterai tahan lama"
        ]
      },
      {
        slug: "aio-desktop",
        nama: "AIO Desktop (All-in-One)",
        gambar: "/images/produk/elektronik/aio_desktop.webp",
        spesifikasi: [
          "Desain minimalis",
          "Performa optimal",
          "Hemat ruang"
        ]
      },
      {
        slug: "printer",
        nama: "Printer",
        gambar: "/images/produk/elektronik/printer.webp",
        merek: "Epson EcoTank",
        spesifikasi: [
          "Print berkualitas tinggi",
          "Hemat tinta",
          "Mudah digunakan"
        ]
      },
      {
        slug: "scanner",
        nama: "Scanner",
        gambar: "/images/produk/elektronik/scanner.webp",
        merek: "Brother",
        spesifikasi: [
          "Scan cepat & tajam",
          "Duplex otomatis",
          "Hemat waktu"
        ]
      },
      {
        slug: "ups",
        nama: "UPS",
        gambar: "/images/produk/elektronik/ups.webp",
        merek: "APC Smart-UPS C 1000",
        spesifikasi: [
          "Daya stabil & aman",
          "Backup baterai",
          "Perlindungan maksimal"
        ]
      },
      {
        slug: "ac-standing",
        nama: "AC Standing",
        gambar: "/images/produk/elektronik/ac_standing.webp",
        spesifikasi: [
          "Pendinginan cepat",
          "Hembusan merata",
          "Hemat energi"
        ]
      },
      {
        slug: "mesin-foto-copy",
        nama: "Mesin Foto Copy",
        gambar: "/images/produk/elektronik/mesin_foto_copy.webp",
        merek: "Canon",
        spesifikasi: [
          "Copy & print berkualitas",
          "Scan warna tajam",
          "Multifungsi & efisien"
        ]
      },
      {
        slug: "acces-control",
        nama: "Acces Control (Absensi & Akses Pintu)",
        gambar: "/images/produk/elektronik/access_control.webp",
        spesifikasi: [
          "Absensi akurat",
          "Akses aman",
          "Mudah digunakan"
        ]
      }
    ]
  },
  {
    id: "atribut-instansi",
    nama: "Protokoler & Atribut Instansi",
    icon: "flag",
    deskripsi: "Kelengkapan protokoler resmi: papan data, bendera, bingkai kenegaraan, dan papan informasi.",
    produk: [
      {
        slug: "papan-nama-jabatan",
        nama: "Papan Nama Jabatan",
        gambar: "/images/produk/atribut_instansi/papan_nama_jabatan.webp",
        spesifikasi: [
          "Desain elegan",
          "Material premium",
          "Tahan lama"
        ]
      },
      {
        slug: "papan-pengumuman-mading",
        nama: "Papan Pengumuman Mading",
        gambar: "/images/produk/atribut_instansi/papan_mading.webp",
        dimensi: "240 x 120 x 2 cm",
        spesifikasi: [
          "Mudah dipasang",
          "Kokoh & awet",
          "Ukuran ideal"
        ]
      },
      {
        slug: "papan-peta",
        nama: "Papan Peta",
        gambar: "/images/produk/atribut_instansi/papan_peta.webp",
        dimensi: "180 x 120 x 2 cm",
        spesifikasi: [
          "Visual jelas",
          "Bahan berkualitas",
          "Perawatan mudah"
        ]
      },
      {
        slug: "papan-tulis-gantung-enamel",
        nama: "Papan Tulis Gantung Enamel",
        gambar: "/images/produk/atribut_instansi/papan_tulis_gantung.webp",
        dimensi: "240 x 120 x 2,5 cm",
        spesifikasi: [
          "Tulis & hapus mudah",
          "Anti noda & tahan lama",
          "Gantung kuat"
        ]
      },
      {
        slug: "bingkai-presiden-wapres",
        nama: "Bingkai Presiden & Wapres",
        gambar: "/images/produk/atribut_instansi/bingkai_presiden.webp",
        spesifikasi: [
          "Finishing premium",
          "Kokoh & elegan",
          "Mudah dipasang"
        ]
      },
      {
        slug: "gordyn",
        nama: "Gordyn",
        gambar: "/images/produk/atribut_instansi/gordyn.webp",
        spesifikasi: [
          "Bahan berkualitas",
          "Tahan lama",
          "Warna elegan"
        ]
      },
      {
        slug: "bendera-merah-putih-ruangan",
        nama: "Bendera Merah Putih Ruangan",
        gambar: "/images/produk/atribut_instansi/bendera_merah_putih.webp",
        spesifikasi: [
          "Warna tahan lama",
          "Jahitan rapi",
          "Bahan berkualitas"
        ]
      },
      {
        slug: "papan-data",
        nama: "Papan Data",
        gambar: "/images/produk/atribut_instansi/papan_data.webp",
        dimensi: "240 x 120 x 2 cm (kaki 75 cm)",
        spesifikasi: [
          "Informasi tersusun",
          "Kokoh & awet",
          "Mudah dipasang"
        ]
      }
    ]
  }
]

export const totalProducts = productCategories.reduce((n, c) => n + c.produk.length, 0)
