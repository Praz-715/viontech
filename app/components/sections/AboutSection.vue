<script setup lang="ts">
import { company } from '~/data/company'
import { totalProducts } from '~/data/products'

const guarantees = [
  {
    icon: 'factory',
    title: 'Harga Langsung dari Pabrik',
    desc: 'Kemitraan langsung, harga lebih kompetitif.',
  },
  {
    icon: 'shield',
    title: 'Jaminan Kualitas & Keaslian',
    desc: 'Produk original, sesuai spesifikasi teknis (spektek).',
  },
  {
    icon: 'truck',
    title: 'Pengiriman Tepat Waktu',
    desc: 'Cepat, aman, dan tepat waktu ke seluruh Indonesia.',
  },
  {
    icon: 'badge',
    title: 'Legalitas Lengkap',
    desc: 'Siap untuk tender pemerintah maupun swasta.',
  },
]
</script>

<template>
  <section id="tentang" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Tentang Kami</h2>
      </div>

      <div class="about">
        <div class="about__copy" v-reveal="1">
          <p class="about__lead">
            <strong>{{ company.nama }}</strong> bergerak di bidang
            <strong>pengadaan barang dan jasa (procurement)</strong> untuk instansi pemerintah,
            TNI/Polri, BUMN, dan sektor swasta.
          </p>

          <p class="about__body">
            Katalog kami menampilkan lini produk <strong>{{ company.liniProduk }}</strong> —
            furniture, elektronik, dan perlengkapan barak/asrama. Kami bekerja sama langsung dengan
            pabrik/produsen sehingga kualitas terjamin, harga lebih kompetitif, dan pengiriman lebih
            cepat.
          </p>

          <ul class="about__guarantees">
            <li v-for="g in guarantees" :key="g.title">
              <span class="about__icon"><UiAppIcon :name="g.icon" :size="20" /></span>
              <span>
                <strong>{{ g.title }}</strong>
                <small>{{ g.desc }}</small>
              </span>
            </li>
          </ul>
        </div>

        <aside class="about__aside" v-reveal="2">
          <div class="about__badge">
            <BrandLogo variant="mark" :height="64" />
            <p class="about__badge-name">PT VIONTECH</p>
            <p class="about__badge-sub">Integrasi Optima</p>
          </div>

          <dl class="about__facts">
            <div>
              <dt>{{ totalProducts }}+</dt>
              <dd>Item produk dalam katalog 2026</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>Barang original langsung dari pabrik</dd>
            </div>
            <div>
              <dt>Nasional</dt>
              <dd>Jangkauan pengiriman se-Indonesia</dd>
            </div>
          </dl>

          <p class="about__quote">
            &ldquo;Kami bukan sekadar supplier, tapi <strong>partner solusi</strong>.&rdquo;
          </p>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: clamp(1.5rem, 3.5vw, 3rem);
  margin-top: 2.2rem;
  align-items: start;
}

.about__lead {
  font-size: clamp(1.05rem, 2vw, 1.28rem);
  line-height: 1.6;
  color: var(--text-body);
}

.about__lead strong {
  color: var(--text-strong);
}

.about__body {
  margin-top: 1rem;
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--text-muted);
}

.about__body strong {
  color: var(--gold-ink);
}

.about__guarantees {
  list-style: none;
  margin: 1.9rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.1rem 1.4rem;
}

.about__guarantees li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.about__icon {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  background: linear-gradient(140deg, var(--navy-800), var(--navy-600));
  color: var(--gold-300);
  flex: none;
}

.about__guarantees strong {
  display: block;
  font-size: 0.88rem;
  font-weight: 800;
  line-height: 1.3;
  color: var(--text-strong);
}

.about__guarantees small {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--text-muted);
}

/* ----- Aside ----- */
.about__aside {
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius-lg);
  padding: clamp(1.4rem, 2.5vw, 1.9rem);
  box-shadow: var(--shadow-card);
}

.about__badge {
  text-align: center;
  padding-bottom: 1.3rem;
  border-bottom: 1px solid var(--panel-border);
}

.about__badge :deep(.brand-logo) {
  margin-inline: auto;
}

.about__badge-name {
  margin-top: 0.7rem;
  font-family: var(--font-display);
  font-stretch: 114%;
  font-weight: 900;
  font-size: 1.05rem;
  letter-spacing: 0.05em;
  color: var(--text-strong);
}

.about__badge-sub {
  font-size: 0.66rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-ink);
}

.about__facts {
  margin: 1.4rem 0 0;
  display: grid;
  gap: 1.1rem;
}

.about__facts dt {
  font-family: var(--font-display);
  font-stretch: 114%;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1;
  background: var(--gold-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.about__facts dd {
  margin: 0.3rem 0 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.about__quote {
  margin-top: 1.5rem;
  padding-top: 1.3rem;
  border-top: 1px solid var(--panel-border);
  font-style: italic;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-body);
}

.about__quote strong {
  color: var(--gold-ink);
  font-style: normal;
}

@media (max-width: 1020px) {
  .about {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .about__guarantees {
    grid-template-columns: 1fr;
  }
}
</style>
