<script setup lang="ts">
import { company, businessLines, visi, misi } from '~/data/company'
import { totalProducts } from '~/data/products'
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
            <strong>{{ company.nama }}</strong> bergerak di dua lini yang saling melengkapi:
            <strong>integrasi teknologi</strong> dan <strong>pengadaan barang &amp; jasa</strong>
            untuk instansi pemerintah, TNI/Polri, BUMN, dan sektor swasta.
          </p>

          <p class="about__body">
            Di sisi teknologi kami membangun infrastruktur data center, cloud, database, jaringan
            &amp; keamanan, hingga aplikasi web dan mobile. Di sisi pengadaan kami menyediakan lini
            produk <strong>{{ company.liniProduk }}</strong> — furniture, elektronik, dan
            perlengkapan barak/asrama — bekerja sama langsung dengan pabrik sehingga kualitas
            terjamin, harga lebih kompetitif, dan pengiriman lebih cepat.
          </p>

          <div class="lines">
            <article v-for="(b, i) in businessLines" :key="b.title" class="line" v-reveal="i">
              <span class="line__icon"><UiAppIcon :name="b.icon" :size="24" /></span>
              <h3>{{ b.title }}</h3>
              <p>{{ b.desc }}</p>
              <ul>
                <li v-for="pt in b.points" :key="pt">
                  <UiAppIcon name="check" :size="14" />{{ pt }}
                </li>
              </ul>
              <a :href="b.href" class="line__link">
                Selengkapnya <UiAppIcon name="arrow" :size="15" />
              </a>
            </article>
          </div>
        </div>

        <aside class="about__aside" v-reveal="2">
          <div class="about__badge">
            <BrandLogo variant="mark" :height="60" />
            <p class="about__badge-name">PT VIONTECH</p>
            <p class="about__badge-sub">Integrasi Optima</p>
          </div>

          <div class="vm">
            <h3 class="vm__title">
              <span class="vm__icon"><UiAppIcon name="target" :size="18" /></span>
              Visi
            </h3>
            <p class="vm__text">{{ visi }}</p>
          </div>

          <div class="vm">
            <h3 class="vm__title">
              <span class="vm__icon"><UiAppIcon name="rocket" :size="18" /></span>
              Misi
            </h3>
            <ol class="vm__list">
              <li v-for="(m, i) in misi" :key="i">
                <span class="vm__num">{{ i + 1 }}</span>
                <span>{{ m }}</span>
              </li>
            </ol>
          </div>

          <dl class="about__facts">
            <div>
              <dt>{{ totalProducts }}+</dt>
              <dd>Item produk katalog 2026</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>Barang original dari pabrik</dd>
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

/* ---- the two business lines ---- */
.lines {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.9rem;
}

.line {
  display: flex;
  flex-direction: column;
  padding: 1.4rem 1.3rem;
  border-radius: var(--radius-md);
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  box-shadow: var(--shadow-card);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.line:hover {
  transform: translateY(-5px);
  border-color: var(--panel-border-hover);
}

.line__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  background: linear-gradient(140deg, var(--navy-800), var(--navy-600));
  color: var(--gold-300);
  margin-bottom: 0.9rem;
}

.line h3 {
  font-family: var(--font-display);
  font-stretch: 108%;
  font-weight: 800;
  font-size: 0.98rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.3;
  color: var(--text-strong);
}

.line > p {
  margin-top: 0.55rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.line ul {
  list-style: none;
  margin: 0.9rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.4rem;
  flex: 1;
}

.line li {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--text-body);
}

.line li svg {
  flex: none;
  margin-top: 0.15rem;
  color: var(--gold-500);
}

.line__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1.1rem;
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--gold-ink);
  transition: gap 0.2s;
}

.line__link:hover {
  gap: 0.6rem;
}

/* ---- aside ---- */
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

/* ---- visi & misi ---- */
.vm {
  margin-top: 1.4rem;
}

.vm__title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-stretch: 112%;
  font-weight: 800;
  font-size: 0.92rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-strong);
}

.vm__icon {
  width: 32px;
  height: 32px;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.14);
  border: 1px solid rgba(246, 185, 59, 0.35);
  color: var(--gold-400);
}

.vm__text {
  margin-top: 0.7rem;
  font-size: 0.86rem;
  line-height: 1.65;
  color: var(--text-muted);
}

.vm__list {
  list-style: none;
  margin: 0.8rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.65rem;
}

.vm__list li {
  display: flex;
  gap: 0.6rem;
  font-size: 0.84rem;
  line-height: 1.55;
  color: var(--text-muted);
}

.vm__num {
  width: 22px;
  height: 22px;
  flex: none;
  margin-top: 0.1rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--gold-grad);
  color: var(--navy-950);
  font-weight: 800;
  font-size: 0.72rem;
}

.about__facts {
  margin: 1.5rem 0 0;
  padding-top: 1.3rem;
  border-top: 1px solid var(--panel-border);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.about__facts dt {
  font-family: var(--font-display);
  font-stretch: 114%;
  font-weight: 900;
  font-size: 1.4rem;
  line-height: 1;
  background: var(--gold-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.about__facts dd {
  margin: 0.3rem 0 0;
  font-size: 0.78rem;
  line-height: 1.45;
  color: var(--text-muted);
}

.about__quote {
  margin-top: 1.4rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--panel-border);
  font-style: italic;
  font-size: 0.9rem;
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
  .lines,
  .about__facts {
    grid-template-columns: 1fr;
  }
}
</style>
