<script setup lang="ts">
const highlights = [
  { icon: 'badge', value: '15+', label: 'Tahun Pengalaman Industri Teknologi' },
  { icon: 'rocket', value: '100+', label: 'Proyek Sukses di Berbagai Sektor' },
  { icon: 'team', value: '50+', label: 'Engineer Profesional & Bersertifikat' },
  { icon: 'clock', value: '24/7', label: 'Layanan Support dan Monitoring' },
  { icon: 'star', value: '5★', label: 'Komitmen Kualitas & Kepuasan Klien' },
]
</script>

<template>
  <section class="section highlights-section" aria-label="Key Highlights 2026">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Key Highlights 2026</h2>
      </div>

      <div class="highlights">
        <article v-for="(h, i) in highlights" :key="h.label" class="highlight" v-reveal="i">
          <span class="highlight__icon"><UiAppIcon :name="h.icon" :size="22" /></span>
          <strong class="highlight__value text-gold">{{ h.value }}</strong>
          <span class="highlight__label">{{ h.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlights-section {
  background: var(--bg-highlights);
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}

.highlight {
  text-align: center;
  padding: 1.8rem 1.2rem;
  border-radius: var(--radius-md);
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  box-shadow: var(--shadow-card);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.highlight:hover {
  transform: translateY(-6px);
  border-color: var(--panel-border-hover);
}

.highlight__icon {
  width: 46px;
  height: 46px;
  margin-inline: auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(77, 154, 255, 0.12);
  border: 1px solid rgba(77, 154, 255, 0.3);
  color: var(--blue-400);
  margin-bottom: 0.9rem;
}

.highlight__value {
  display: block;
  font-family: var(--font-display);
  font-stretch: 116%;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 2.6rem);
  line-height: 1;
}

.highlight__label {
  display: block;
  margin-top: 0.65rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--text-muted);
}
</style>
