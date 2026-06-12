<script setup lang="ts">
const pillars = ['AI', 'DATA', 'CLOUD', 'INFRASTRUCTURE', 'SECURITY', 'APPLICATION']

const missions = [
  'Membangun ekosistem teknologi yang optimal, scalable, dan sesuai kebutuhan klien.',
  'Menghadirkan solusi modern AI, Cloud, Cybersecurity, dan Enterprise Infrastructure.',
  'Menjadi mitra strategis dalam mendorong inovasi dan transformasi digital berkelanjutan.',
  'Mengembangkan SDM profesional dan bersertifikasi.',
  'Memberikan nilai tambah melalui pendekatan berbasis data dan analitik.',
]
</script>

<template>
  <section class="hero" aria-label="Profil PT Viontech Integrasi Optima">
    <!-- Layered atmosphere: grid, beams, glow -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__grid" />
      <div class="hero__glow hero__glow--gold" />
      <div class="hero__glow hero__glow--blue" />
    </div>

    <div class="container hero__inner">
      <div class="hero__main">
        <div class="hero__brand" v-reveal>
          <LogosViontechLogo :size="86" />
          <div>
            <p class="hero__brand-name">PT VIONTECH</p>
            <p class="hero__brand-sub">— INTEGRASI OPTIMA —</p>
            <p class="hero__brand-tag">Integrating Intelligence, Accelerating Innovation</p>
          </div>
        </div>

        <h1 class="hero__title" v-reveal="1">
          ENTERPRISE INFRASTRUCTURE &amp;
          <span class="text-gold">AI SOLUTION PROVIDER</span>
        </h1>

        <ul class="hero__pillars" v-reveal="2">
          <li v-for="(p, i) in pillars" :key="p">
            <span v-if="i" class="hero__dot" aria-hidden="true" />{{ p }}
          </li>
        </ul>

        <p class="hero__desc" v-reveal="3">
          PT Viontech Integrasi Optima adalah perusahaan teknologi integrasi terdepan yang
          menghadirkan solusi digital cerdas, andal, dan inovatif untuk mempercepat transformasi
          digital pemerintah, industri, dan masyarakat.
        </p>

        <div class="hero__actions" v-reveal="4">
          <a href="#layanan" class="btn btn--gold">Jelajahi Layanan</a>
          <a href="#kontak" class="btn btn--ghost">Konsultasi Gratis</a>
        </div>
      </div>

      <!-- Visi & Misi panel — mirrors the infographic's right rail -->
      <aside class="hero__vm" v-reveal="2" aria-label="Visi dan Misi">
        <div class="vm__block">
          <h2 class="vm__title">
            <span class="vm__icon"><UiAppIcon name="telescope" :size="22" /></span>
            VISI
          </h2>
          <p class="vm__text">
            Menjadi perusahaan teknologi integrasi terdepan di Indonesia yang menghadirkan solusi
            digital cerdas, andal, dan inovatif untuk mempercepat transformasi digital pemerintah,
            industri, dan masyarakat.
          </p>
        </div>

        <div class="vm__divider" aria-hidden="true" />

        <div class="vm__block">
          <h2 class="vm__title">
            <span class="vm__icon"><UiAppIcon name="target" :size="22" /></span>
            MISI
          </h2>
          <ol class="vm__list">
            <li v-for="(misi, i) in missions" :key="i">
              <span class="vm__num">{{ i + 1 }}</span>
              <span>{{ misi }}</span>
            </li>
          </ol>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(7rem, 13vw, 10rem) clamp(3.5rem, 7vw, 6rem);
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
  grid-template-columns: 1.55fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
}

/* ----- Brand lockup ----- */
.hero__brand {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 2rem;
}

.hero__brand > div {
  min-width: 0;
}

.hero__brand-name {
  font-family: var(--font-display);
  font-stretch: 118%;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  color: var(--text-strong);
  line-height: 1;
}

.hero__brand-sub {
  margin-top: 0.25rem;
  font-size: 0.74rem;
  letter-spacing: 0.42em;
  color: var(--gold-ink);
  font-weight: 700;
}

.hero__brand-tag {
  margin-top: 0.45rem;
  font-style: italic;
  font-size: 0.82rem;
  color: var(--link-accent);
}

/* ----- Headline ----- */
.hero__title {
  font-family: var(--font-display);
  font-stretch: 116%;
  font-weight: 900;
  font-size: clamp(1.9rem, 4.6vw, 3.4rem);
  line-height: 1.06;
  letter-spacing: 0.01em;
  color: var(--text-strong);
  text-wrap: balance;
}

.hero__title .text-gold {
  display: block;
  margin-top: 0.2rem;
}

/* ----- Pillar ticker ----- */
.hero__pillars {
  list-style: none;
  margin: 1.4rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.9rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.86rem;
  letter-spacing: 0.14em;
  color: var(--text-body);
}

.hero__pillars li {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
}

.hero__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold-400);
}

.hero__desc {
  margin-top: 1.5rem;
  max-width: 54ch;
  color: var(--text-muted);
  font-size: 1.02rem;
  line-height: 1.75;
}

/* ----- CTAs ----- */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2.2rem;
}

.btn {
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

/* ----- Visi & Misi rail ----- */
.hero__vm {
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius-lg);
  padding: clamp(1.4rem, 2.5vw, 2rem);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-pop);
}

.vm__title {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-display);
  font-stretch: 115%;
  font-weight: 800;
  font-size: 1.05rem;
  letter-spacing: 0.18em;
  color: var(--text-strong);
}

.vm__icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.14);
  color: var(--gold-400);
  border: 1px solid rgba(246, 185, 59, 0.35);
  flex: none;
}

.vm__text {
  margin-top: 0.9rem;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.vm__divider {
  height: 1px;
  margin-block: 1.4rem;
  background: linear-gradient(90deg, transparent, rgba(246, 185, 59, 0.5), transparent);
}

.vm__list {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.85rem;
}

.vm__list li {
  display: flex;
  gap: 0.8rem;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.vm__num {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--gold-grad);
  color: var(--navy-950);
  font-weight: 800;
  font-size: 0.8rem;
  display: grid;
  place-items: center;
  flex: none;
  margin-top: 0.1rem;
}

@media (max-width: 1020px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }
}

/* Tighten the brand lockup so the wide-tracked subtitle never overflows */
@media (max-width: 480px) {
  .hero__brand {
    gap: 0.8rem;
  }

  .hero__brand svg {
    width: 60px;
    height: 60px;
  }

  .hero__brand-name {
    font-size: 1.25rem;
  }

  .hero__brand-sub {
    font-size: 0.64rem;
    letter-spacing: 0.16em;
  }
}
</style>
