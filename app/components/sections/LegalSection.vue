<script setup lang="ts">
import { legal, kbli, commitments } from '~/data/company'
</script>

<template>
  <section id="legalitas" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Legalitas &amp; Komitmen Kualitas</h2>
      </div>
      <p class="section-lede" v-reveal="1">
        Legalitas lengkap, komitmen kuat untuk pelayanan terbaik.
      </p>

      <div class="legal">
        <div class="legal__data card" v-reveal="1">
          <h3 class="legal__head">
            <span class="legal__head-icon"><UiAppIcon name="bank" :size="20" /></span>
            Data Legalitas Perusahaan
          </h3>

          <dl class="legal__list">
            <div v-for="l in legal" :key="l.label">
              <dt>{{ l.label }}</dt>
              <dd>{{ l.value }}</dd>
            </div>
          </dl>

          <div class="legal__kbli">
            <p class="legal__kbli-title">Bidang Usaha (KBLI)</p>
            <p class="legal__kbli-main">{{ kbli.utama }}</p>
            <ul>
              <li v-for="k in kbli.cakupan" :key="k">{{ k }}</li>
            </ul>
          </div>
        </div>

        <div class="legal__commit" v-reveal="2">
          <h3 class="commit__head">
            <span class="commit__head-icon"><UiAppIcon name="badge" :size="22" /></span>
            Komitmen Kami
          </h3>

          <ol class="commit__list">
            <li v-for="(c, i) in commitments" :key="c">
              <span class="commit__num">{{ i + 1 }}</span>
              <span>{{ c }}</span>
            </li>
          </ol>
        </div>
      </div>

      <ul class="pills" v-reveal="3">
        <li><UiAppIcon name="shield" :size="16" />Legalitas Lengkap</li>
        <li><UiAppIcon name="badge" :size="16" />Kualitas Terjamin</li>
        <li><UiAppIcon name="handshake" :size="16" />Kemitraan Terpercaya</li>
        <li><UiAppIcon name="team" :size="16" />Layanan Profesional</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.legal {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 1rem;
  margin-top: 2.2rem;
  align-items: start;
}

/* ---- legality card (light) ---- */
.legal__data {
  padding: clamp(1.3rem, 2.5vw, 1.9rem);
}

.legal__head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--font-display);
  font-stretch: 110%;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--navy-800);
}

.legal__head-icon {
  width: 40px;
  height: 40px;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(140deg, var(--navy-800), var(--navy-600));
  color: var(--gold-300);
}

.legal__list {
  margin: 1.3rem 0 0;
  display: grid;
  gap: 0.9rem;
}

.legal__list > div {
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--surface-2);
}

.legal__list dt {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--blue-500);
}

.legal__list dd {
  margin: 0.25rem 0 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ink);
  overflow-wrap: anywhere;
}

.legal__kbli-title {
  margin-top: 1.2rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--blue-500);
}

.legal__kbli-main {
  margin-top: 0.25rem;
  font-size: 0.92rem;
  font-weight: 600;
  font-style: italic;
  color: var(--ink);
}

.legal__kbli ul {
  list-style: none;
  margin: 0.7rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.legal__kbli li {
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
  background: var(--surface-1);
  border: 1px solid var(--surface-2);
  color: var(--ink-soft);
}

/* ---- commitment card (navy in both themes) ---- */
.legal__commit {
  padding: clamp(1.3rem, 2.5vw, 1.9rem);
  border-radius: var(--radius-md);
  background: linear-gradient(150deg, var(--navy-900), var(--navy-700));
  border: 1px solid var(--line-dark);
  box-shadow: var(--shadow-card);
}

.commit__head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--font-display);
  font-stretch: 110%;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
}

.commit__head-icon {
  width: 42px;
  height: 42px;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.14);
  border: 1px solid rgba(246, 185, 59, 0.4);
  color: var(--gold-400);
}

.commit__list {
  list-style: none;
  margin: 1.4rem 0 0;
  padding: 0;
  display: grid;
  gap: 1.1rem;
}

.commit__list li {
  display: flex;
  gap: 0.8rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--paper);
}

.commit__num {
  width: 27px;
  height: 27px;
  flex: none;
  margin-top: 0.1rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--gold-grad);
  color: var(--navy-950);
  font-weight: 800;
  font-size: 0.8rem;
}

/* ---- trust pills ---- */
.pills {
  list-style: none;
  margin: 1.6rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.8rem;
}

.pills li {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--text-muted);
}

.pills svg {
  color: var(--gold-500);
}

@media (max-width: 940px) {
  .legal {
    grid-template-columns: 1fr;
  }
}
</style>
