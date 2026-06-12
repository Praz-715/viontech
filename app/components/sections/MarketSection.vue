<script setup lang="ts">
const markets = [
  {
    icon: 'bank',
    title: 'Pemerintah & Sektor Publik',
    desc: 'Kementerian, BUMN, Pemda, dan lembaga negara membutuhkan solusi IT andal dan terstandar.',
  },
  {
    icon: 'finance',
    title: 'Financial Services',
    desc: 'Bank, asuransi, dan fintech memerlukan infrastruktur aman, cepat, dan scalable.',
  },
  {
    icon: 'factory',
    title: 'Industri & Manufaktur',
    desc: 'Otomasi, sistem MES, dan digitalisasi lini produksi untuk efisiensi operasional.',
  },
  {
    icon: 'health',
    title: 'Healthcare & Education',
    desc: 'Sistem informasi rumah sakit, e-learning, dan manajemen data akademik.',
  },
]
</script>

<template>
  <section id="target-pasar" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Target Pasar</h2>
      </div>
      <p class="section-lede" v-reveal="1">
        Melayani berbagai sektor dengan solusi teknologi yang tepat dan terukur.
      </p>

      <div class="markets">
        <article v-for="(m, i) in markets" :key="m.title" class="market" v-reveal="i">
          <span class="market__icon"><UiAppIcon :name="m.icon" :size="30" /></span>
          <h3>{{ m.title }}</h3>
          <p>{{ m.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.markets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}

.market {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  padding: 1.7rem 1.4rem;
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  box-shadow: var(--shadow-card);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.market::after {
  content: '';
  position: absolute;
  right: -40px;
  top: -40px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(246, 185, 59, 0.14), transparent 70%);
}

.market:hover {
  transform: translateY(-6px);
  border-color: var(--panel-border-hover);
}

.market__icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.12);
  border: 1px solid rgba(246, 185, 59, 0.35);
  color: var(--gold-400);
  margin-bottom: 1.1rem;
}

.market h3 {
  font-family: var(--font-display);
  font-stretch: 110%;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--text-strong);
  line-height: 1.3;
}

.market p {
  margin-top: 0.7rem;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--text-muted);
}
</style>
