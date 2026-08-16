# Deploy PT Viontech ke cPanel

Panduan upload `viontech-site.zip` ke hosting cPanel (`viontech.co.id`),
fix HTTPS, dan verifikasi SEO.

---

## 0. TL;DR — apa yang berubah & kenapa

| Masalah lama | Penyebab | Sudah diperbaiki |
|---|---|---|
| Situs tetap **HTTP**, bukan HTTPS | SSL sudah aktif, tapi **tidak ada redirect** HTTP→HTTPS | `.htaccess` baru memaksa redirect 301 ke `https://viontech.co.id` |
| SEO "jalan tapi sia-sia" | `canonical` / `og:url` / `og:image` menunjuk ke **`www.viontech.id`** — domain yang **tidak ada** (DNS gagal). Google diberi tahu "halaman asli ada di domain lain" | Semua URL kini `https://viontech.co.id` |
| Nomor telepon lama | — | Diganti **WhatsApp** `+62 817-322-890` (link `wa.me` + pesan otomatis) |

> **SEO sebenarnya sudah jalan** (semua meta tag, JSON-LD, sitemap ter-render di HTML).
> Masalahnya cuma **menunjuk ke domain yang salah**. Setelah upload build baru, beres.

---

## 1. SSG vs SSR — kenapa situs ini TIDAK butuh SSR

Situs ini di-build sebagai **SSG (Static Site Generation)**: seluruh HTML sudah
jadi saat build (`npm run generate`). Untuk **company profile**, ini memberi SEO
yang **sama bagusnya** dengan SSR — crawler Google langsung membaca HTML lengkap
tanpa perlu menjalankan JavaScript.

- **SSG** = HTML dibuat sekali saat build → file statis → cepat, murah, aman, SEO penuh. **(dipakai sekarang ✅)**
- **SSR** = HTML dibuat ulang **tiap request** oleh server Node.js → hanya perlu kalau konten berubah per-user/real-time (mis. dashboard login, harga live).

Company profile isinya tetap → **SSG adalah pilihan yang benar.** Tidak perlu
Node.js berjalan di server. (Kalau suatu saat butuh SSR, lihat **Lampiran A**.)

---

## 2. Upload ke cPanel (cara dipakai)

1. Login cPanel → **File Manager**.
2. Masuk ke folder **`public_html`** (document root domain utama).
3. **Kosongkan dulu** isi lama: Select All → Delete (sisakan folder sistem kalau ada,
   tapi hapus `index.html`/build lama). Jangan hapus `public_html` itu sendiri.
4. Klik **Upload** → pilih `viontech-site.zip` → tunggu 100%.
5. Kembali ke `public_html`, klik kanan `viontech-site.zip` → **Extract** →
   extract **di `public_html`** (bukan subfolder).
6. **Aktifkan "Show Hidden Files (dotfiles)"** di File Manager
   (Settings ▸ Show Hidden Files) supaya `.htaccess` kelihatan & ikut ter-extract.
7. Hapus `viontech-site.zip` setelah selesai.

Struktur akhir `public_html`:

```
public_html/
├── .htaccess        ← redirect HTTPS + cache + security headers
├── index.html       ← homepage (HTML sudah ter-render penuh)
├── 200.html, 404.html
├── _nuxt/           ← CSS & JS (nama ber-hash)
├── images/          ← logo, 71 kartu produk, foto sektor (WebP, ±15 MB)
├── logo_viontech.ico, favicon.ico, og-image.png
├── robots.txt, sitemap.xml
└── _payload.json
```

---

## 3. Pastikan HTTPS aktif

HTTPS **sudah bisa diakses** (sertifikat AutoSSL sudah terbit). `.htaccess` di atas
otomatis memaksa semua HTTP → HTTPS. Untuk memastikan:

1. cPanel → **SSL/TLS Status** → cek `viontech.co.id` & `www` **hijau (AutoSSL)**.
   Kalau belum, klik **Run AutoSSL**.
2. Buka `http://viontech.co.id` → harus **otomatis lompat** ke `https://`.
3. Kalau masih HTTP setelah extract: pastikan `.htaccess` benar-benar ada di
   `public_html` (langkah 2.6).

> Kalau hosting pakai **LiteSpeed** (umum di cPanel), `.htaccess` langsung dibaca.
> Tidak perlu restart apa pun.

---

## 4. Verifikasi SEO setelah live

1. **Cek meta langsung**: buka `https://viontech.co.id`, klik kanan → View Source.
   Pastikan `<link rel="canonical" href="https://viontech.co.id">` (bukan `.id` lama).
2. **Google Search Console** (https://search.google.com/search-console):
   - Add property `https://viontech.co.id`
   - Verifikasi (TXT record DNS atau upload file HTML)
   - Submit sitemap: `https://viontech.co.id/sitemap.xml`
   - Minta indexing via "URL Inspection" → Request Indexing
3. **Tes share WhatsApp/FB**: paste `https://viontech.co.id` → harus muncul
   judul + deskripsi + gambar `og-image.png`.
   (FB debugger: https://developers.facebook.com/tools/debug/)
4. **Rich Results Test** (JSON-LD Organization):
   https://search.google.com/test/rich-results → masukkan URL.

---

## 5. Update situs di kemudian hari

Tiap ada perubahan kode:

```bash
npm run generate          # build ulang → .output/public
# lalu zip ulang (forward-slash, termasuk .htaccess):
tar -a -c -f viontech-site.zip -C .output/public .
```

Upload & extract zip baru ke `public_html` (timpa yang lama).

---

## Lampiran A — Kalau benar-benar mau SSR (Node.js di cPanel)

Hanya kalau nanti butuh konten dinamis. cPanel harus punya **"Setup Node.js App"**
(CloudLinux + Passenger).

1. Build mode server (bukan generate):
   ```bash
   npm run build         # menghasilkan .output/server + .output/public
   ```
2. Upload **seluruh isi `.output/`** + `package.json` ke folder app (mis. `~/viontech-app`),
   **di luar** `public_html`.
3. cPanel → **Setup Node.js App** → Create:
   - Application root: `viontech-app`
   - Application URL: `viontech.co.id`
   - Startup file: `.output/server/index.mjs`
   - Node version: 20+
4. Jalankan **Run NPM Install**, set env `NODE_ENV=production`, lalu **Restart**.
5. Passenger akan mem-proxy domain ke server Nuxt.

> Untuk company profile, langkah ini **tidak disarankan** — lebih ribet, lebih
> mahal resource, tanpa keuntungan SEO. Tetap pakai SSG (Bagian 2).
