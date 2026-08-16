<script setup lang="ts">
import { sectors, company, waLink } from '~/data/company'

const wa = waLink(
  `Halo ${company.nama}, saya ingin mendiskusikan kebutuhan pengadaan untuk instansi kami.`,
)
</script>

<template>
  <section id="sektor" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Sektor Pasar &amp; Mitra Kerja</h2>
      </div>
      <p class="section-lede" v-reveal="1">
        Solusi pengadaan &amp; fasilitas untuk berbagai sektor strategis.
      </p>

      <div class="sectors">
        <article v-for="(s, i) in sectors" :key="s.title" class="sector" v-reveal="i">
          <div class="sector__media">
            <img
              :src="s.image"
              :alt="`Fasilitas ${s.title} — PT Viontech Integrasi Optima`"
              width="1448"
              height="1086"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="sector__body">
            <h3>
              <span class="sector__icon"><UiAppIcon :name="s.icon" :size="22" /></span>
              {{ s.title }}
            </h3>
            <ul>
              <li v-for="item in s.items" :key="item">
                <UiAppIcon name="check" :size="15" />{{ item }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="cta" v-reveal="2">
        <p>
          <strong>{{ company.nama }}</strong> siap mendukung pengadaan dari skala kecil hingga
          proyek besar.
        </p>
        <a :href="wa" class="cta__btn" target="_blank" rel="noopener">
          <UiAppIcon name="whatsapp" :size="18" />
          Konsultasikan kebutuhan Anda
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sectors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}

/* Four sectors — a balanced 2×2 beats a 3+1 orphan row */
@media (min-width: 1000px) {
  .sectors {
    grid-template-columns: repeat(2, 1fr);
  }
}

.sector {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  box-shadow: var(--shadow-card);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.sector:hover {
  transform: translateY(-6px);
  border-color: var(--panel-border-hover);
}

.sector__media {
  overflow: hidden;
  background: var(--surface-1);
}

.sector__media img {
  width: 100%;
  height: 100%;
  min-height: 190px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.sector:hover .sector__media img {
  transform: scale(1.06);
}

.sector__body {
  padding: 1.3rem 1.3rem 1.4rem;
}

.sector h3 {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-display);
  font-stretch: 108%;
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.25;
  color: var(--text-strong);
}

.sector__icon {
  width: 40px;
  height: 40px;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.13);
  border: 1px solid rgba(246, 185, 59, 0.35);
  color: var(--gold-400);
}

.sector ul {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

.sector li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.sector li svg {
  flex: none;
  margin-top: 0.15rem;
  color: var(--gold-500);
}

/* ---- closing CTA band ---- */
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 1.6rem;
  padding: 1.4rem 1.6rem;
  border-radius: var(--radius-lg);
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
}

.cta p {
  font-size: 1rem;
  line-height: 1.55;
  color: var(--text-body);
}

.cta strong {
  color: var(--text-strong);
}

.cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  background: var(--gold-grad);
  color: var(--navy-950);
  font-weight: 800;
  font-size: 0.9rem;
  flex: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta__btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 30px -12px rgba(246, 185, 59, 0.6);
}

@media (max-width: 520px) {
  .sector {
    grid-template-columns: 1fr;
  }

  .sector__media img {
    min-height: 170px;
  }
}
</style>
