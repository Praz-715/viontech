<script setup lang="ts">
import { company, promises, waLink } from '~/data/company'
import { totalProducts, productCategories } from '~/data/products'

const wa = waLink(
  `Halo ${company.nama}, saya ingin konsultasi kebutuhan pengadaan barang & jasa.`,
)
</script>

<template>
  <section class="hero" aria-label="Profil PT Viontech Integrasi Optima">
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__grid" />
      <div class="hero__glow hero__glow--gold" />
      <div class="hero__glow hero__glow--blue" />
    </div>

    <div class="container hero__inner">
      <div class="hero__main">
        <!-- No logo lockup here: the carousel directly above already carries it. -->
        <p class="hero__tagline" v-reveal>{{ company.tagline }}</p>

        <h1 class="hero__title" v-reveal="1">
          Solusi Pengadaan Terpercaya
          <span class="text-gold">untuk Kebutuhan Anda</span>
        </h1>

        <p class="hero__desc" v-reveal="2">
          {{ company.nama }} bergerak di bidang <strong>pengadaan barang dan jasa</strong>
          untuk instansi pemerintah, TNI/Polri, BUMN, dan sektor swasta — menyediakan furniture,
          elektronik, dan perlengkapan barak/asrama langsung dari pabrik.
        </p>

        <div class="hero__actions" v-reveal="3">
          <a href="#katalog" class="btn btn--gold">Lihat Katalog Produk</a>
          <a :href="wa" class="btn btn--ghost" target="_blank" rel="noopener">
            <UiAppIcon name="whatsapp" :size="18" />
            Konsultasi Gratis
          </a>
        </div>

        <dl class="hero__stats" v-reveal="4">
          <div>
            <dt>{{ totalProducts }}+</dt>
            <dd>Item produk katalog</dd>
          </div>
          <div>
            <dt>100%</dt>
            <dd>Barang original pabrik</dd>
          </div>
          <div>
            <dt>{{ productCategories.length }}</dt>
            <dd>Kategori produk</dd>
          </div>
          <div>
            <dt>Nasional</dt>
            <dd>Jangkauan pengiriman</dd>
          </div>
        </dl>
      </div>

      <aside class="hero__promises" v-reveal="2" aria-label="Komitmen layanan">
        <p class="promises__eyebrow">Mengapa memilih kami</p>
        <ul class="promises__list">
          <li v-for="p in promises" :key="p.title">
            <span class="promises__icon"><UiAppIcon :name="p.icon" :size="22" /></span>
            <span>
              <strong>{{ p.title }}</strong>
              <small>{{ p.desc }}</small>
            </span>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(6.5rem, 12vw, 9rem) clamp(3.5rem, 7vw, 6rem);
  background: var(--bg-hero);
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(ellipse 90% 80% at 60% 20%, black 0%, transparent 75%);
}

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
}

.hero__glow--gold {
  width: 420px;
  height: 420px;
  right: -120px;
  top: -140px;
  background: var(--glow-gold);
}

.hero__glow--blue {
  width: 560px;
  height: 560px;
  left: -180px;
  bottom: -240px;
  background: var(--glow-blue);
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;
}

.hero__tagline {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-ink);
}

.hero__title {
  margin-top: 0.7rem;
  font-family: var(--font-display);
  font-stretch: 116%;
  font-weight: 900;
  font-size: clamp(1.9rem, 4.4vw, 3.2rem);
  line-height: 1.06;
  color: var(--text-strong);
  text-wrap: balance;
}

.hero__title .text-gold {
  display: block;
  margin-top: 0.2rem;
}

.hero__desc {
  margin-top: 1.4rem;
  max-width: 58ch;
  color: var(--text-muted);
  font-size: 1.02rem;
  line-height: 1.75;
}

.hero__desc strong {
  color: var(--text-body);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}

.btn--gold {
  background: var(--gold-grad);
  color: var(--navy-950);
  box-shadow: 0 14px 30px -12px rgba(246, 185, 59, 0.5);
}

.btn--gold:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 38px -12px rgba(246, 185, 59, 0.65);
}

.btn--ghost {
  border: 1.5px solid color-mix(in srgb, var(--blue-400) 45%, transparent);
  color: var(--text-body);
}

.btn--ghost:hover {
  background: color-mix(in srgb, var(--blue-400) 12%, transparent);
  transform: translateY(-3px);
}

/* ----- Stat strip ----- */
.hero__stats {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: start;
  gap: 1.6rem 2.4rem;
  margin: 2.4rem 0 0;
  padding-top: 1.7rem;
  border-top: 1px solid var(--panel-border);
}

.hero__stats dt {
  font-family: var(--font-display);
  font-stretch: 114%;
  font-weight: 900;
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
  line-height: 1;
  background: var(--gold-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__stats dd {
  margin: 0.4rem 0 0;
  font-size: 0.78rem;
  line-height: 1.4;
  max-width: 16ch;
  color: var(--text-muted);
}

/* ----- Promise rail ----- */
.hero__promises {
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius-lg);
  padding: clamp(1.4rem, 2.5vw, 1.9rem);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-pop);
}

.promises__eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-ink);
}

.promises__list {
  list-style: none;
  margin: 1.2rem 0 0;
  padding: 0;
  display: grid;
  gap: 1.15rem;
}

.promises__list li {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
}

.promises__icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.14);
  color: var(--gold-400);
  border: 1px solid rgba(246, 185, 59, 0.35);
  flex: none;
}

.promises__list strong {
  display: block;
  font-family: var(--font-display);
  font-stretch: 108%;
  font-weight: 800;
  font-size: 0.86rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--text-strong);
  line-height: 1.3;
}

.promises__list small {
  display: block;
  margin-top: 0.28rem;
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--text-muted);
}

@media (max-width: 1020px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .hero__stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.3rem;
  }

  .hero__stats dd {
    max-width: none;
  }
}
</style>
