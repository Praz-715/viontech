<script setup lang="ts">
import { advantages } from '~/data/company'

const closers = [
  'Kualitas Terjamin',
  'Harga Kompetitif',
  'Tim Profesional',
  'Proses Transparan',
  'Aman & Terpercaya',
]
</script>

<template>
  <section id="keunggulan" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Keunggulan Kompetitif</h2>
      </div>
      <p class="section-lede" v-reveal="1">
        Nilai lebih yang kami berikan untuk setiap kebutuhan pengadaan dan layanan Anda.
      </p>

      <div class="adv">
        <article v-for="(a, i) in advantages" :key="a.title" class="adv__item card" v-reveal="i">
          <span class="adv__icon"><UiAppIcon :name="a.icon" :size="26" /></span>
          <div>
            <h3>{{ a.title }}</h3>
            <p>{{ a.desc }}</p>
          </div>
        </article>
      </div>

      <div class="pledge" v-reveal="2">
        <span class="pledge__icon"><UiAppIcon name="target" :size="26" /></span>
        <p>
          Kami berkomitmen menjadi mitra strategis yang
          <strong>andal, profesional, dan terpercaya</strong> untuk mendukung kesuksesan setiap
          project Anda.
        </p>
      </div>

      <ul class="closers" v-reveal="3">
        <li v-for="c in closers" :key="c">
          <UiAppIcon name="check" :size="15" />{{ c }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.adv {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}

.adv__item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 1.4rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.adv__item:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-pop);
}

.adv__icon {
  width: 54px;
  height: 54px;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(232, 160, 32, 0.12);
  border: 1px solid rgba(232, 160, 32, 0.4);
  color: var(--gold-500);
}

.adv__item h3 {
  font-family: var(--font-display);
  font-stretch: 108%;
  font-weight: 800;
  font-size: 0.98rem;
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--navy-800);
}

.adv__item p {
  margin-top: 0.5rem;
  font-size: 0.87rem;
  line-height: 1.65;
  color: var(--ink-soft);
}

/* ---- pledge band (stays navy in both themes) ---- */
.pledge {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-top: 1.6rem;
  padding: 1.4rem 1.6rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(100deg, var(--navy-900), var(--navy-700));
  border: 1px solid var(--line-dark);
}

.pledge__icon {
  width: 52px;
  height: 52px;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.14);
  border: 1px solid rgba(246, 185, 59, 0.4);
  color: var(--gold-400);
}

.pledge p {
  font-size: clamp(0.95rem, 1.7vw, 1.12rem);
  line-height: 1.55;
  color: var(--paper);
}

.pledge strong {
  color: var(--gold-300);
}

.closers {
  list-style: none;
  margin: 1.4rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.6rem;
}

.closers li {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
}

.closers svg {
  color: var(--gold-500);
}

@media (max-width: 620px) {
  .pledge {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
