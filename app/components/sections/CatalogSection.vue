<script setup lang="ts">
import { company, waLink } from '~/data/company'
import { productCategories, totalProducts, type Product } from '~/data/products'

const activeId = ref<string>('semua')

const tabs = computed(() => [
  { id: 'semua', nama: 'Semua Produk', icon: 'sparkle', count: totalProducts },
  ...productCategories.map((c) => ({
    id: c.id,
    nama: c.nama,
    icon: c.icon,
    count: c.produk.length,
  })),
])

/** Flat list carrying the parent category, so a card can label itself in "Semua" mode. */
const allItems = productCategories.flatMap((c) =>
  c.produk.map((p) => ({ ...p, kategori: c.nama, kategoriId: c.id })),
)

const visible = computed(() =>
  activeId.value === 'semua' ? allItems : allItems.filter((p) => p.kategoriId === activeId.value),
)

const activeBlurb = computed(
  () =>
    productCategories.find((c) => c.id === activeId.value)?.deskripsi ??
    `Seluruh ${totalProducts} item dalam katalog 2026 — furniture, elektronik, tekstil, dan atribut instansi.`,
)

// ---------------- lightbox ----------------
const openIndex = ref<number | null>(null)
const isOpen = computed(() => openIndex.value !== null)
const current = computed(() => (openIndex.value === null ? null : visible.value[openIndex.value]))

const open = (i: number) => (openIndex.value = i)
const close = () => (openIndex.value = null)
const step = (delta: number) => {
  if (openIndex.value === null) return
  const n = visible.value.length
  openIndex.value = (openIndex.value + delta + n) % n
}

const onKey = (e: KeyboardEvent) => {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') step(1)
  else if (e.key === 'ArrowLeft') step(-1)
}

// Selecting another category invalidates the index the lightbox points at.
watch(activeId, close)

// Lock the page behind the overlay, and keep the listener off the document when closed.
watch(isOpen, (v) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) document.addEventListener('keydown', onKey)
  else document.removeEventListener('keydown', onKey)
})

onUnmounted(() => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKey)
})

const askAbout = (p: Product) =>
  waLink(`Halo ${company.nama}, saya ingin menanyakan ketersediaan dan harga untuk: ${p.nama}.`)
</script>

<template>
  <section id="katalog" class="section catalog-section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Katalog Produk 2026</h2>
      </div>
      <p class="section-lede" v-reveal="1">
        {{ totalProducts }} item dalam {{ productCategories.length }} kategori — seluruhnya original
        dan langsung dari pabrik. Klik produk untuk melihat detail spesifikasi.
      </p>

      <!-- Category filter -->
      <div class="tabs" role="tablist" aria-label="Kategori produk" v-reveal="2">
        <button
          v-for="t in tabs"
          :key="t.id"
          class="tab"
          :class="{ 'is-active': activeId === t.id }"
          role="tab"
          :aria-selected="activeId === t.id"
          @click="activeId = t.id"
        >
          <UiAppIcon :name="t.icon" :size="17" />
          <span>{{ t.nama }}</span>
          <em>{{ t.count }}</em>
        </button>
      </div>

      <p class="catalog__blurb" aria-live="polite">{{ activeBlurb }}</p>

      <!-- Product grid -->
      <ul class="grid">
        <li v-for="(p, i) in visible" :key="p.slug + p.kategoriId" class="prod">
          <button class="prod__btn" type="button" @click="open(i)">
            <span class="prod__media">
              <img
                :src="p.gambar"
                :alt="`${p.nama} — ${p.kategori} — PT Viontech Integrasi Optima`"
                width="1448"
                height="1086"
                loading="lazy"
                decoding="async"
              />
            </span>
            <!-- Name only — dimensions and codes live in the detail panel, where
                 they have room to breathe. -->
            <span class="prod__foot">
              <span class="prod__name">{{ p.nama }}</span>
            </span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Lightbox -->
    <ClientOnly>
      <Teleport to="body">
        <div
          v-if="isOpen && current"
          class="lb"
          role="dialog"
          aria-modal="true"
          :aria-label="current.nama"
          @click.self="close"
        >
          <button ref="closeBtn" class="lb__close" aria-label="Tutup" @click="close">
            <UiAppIcon name="close" :size="22" />
          </button>

          <button
            v-if="visible.length > 1"
            class="lb__nav lb__nav--prev"
            aria-label="Produk sebelumnya"
            @click="step(-1)"
          >
            <UiAppIcon name="chevron" :size="24" />
          </button>

          <div class="lb__panel" @click.stop>
            <img
              :src="current.gambar"
              :alt="current.nama"
              width="1448"
              height="1086"
              decoding="async"
            />
            <div class="lb__info">
              <p class="lb__cat">{{ current.kategori }}</p>
              <h3>{{ current.nama }}</h3>

              <dl v-if="current.dimensi || current.kode || current.merek" class="lb__meta">
                <template v-if="current.dimensi">
                  <dt>Dimensi</dt>
                  <dd>{{ current.dimensi }}</dd>
                </template>
                <template v-if="current.kode">
                  <dt>Kode</dt>
                  <dd>{{ current.kode }}</dd>
                </template>
                <template v-if="current.merek">
                  <dt>Merek</dt>
                  <dd>{{ current.merek }}</dd>
                </template>
              </dl>

              <ul class="lb__specs">
                <li v-for="s in current.spesifikasi" :key="s">
                  <UiAppIcon name="check" :size="15" />{{ s }}
                </li>
              </ul>

              <a :href="askAbout(current)" class="lb__cta" target="_blank" rel="noopener">
                <UiAppIcon name="whatsapp" :size="18" />
                Tanya harga produk ini
              </a>

              <p class="lb__hint">
                {{ openIndex! + 1 }} / {{ visible.length }} &middot; gunakan tombol panah untuk
                menelusuri
              </p>
            </div>
          </div>

          <button
            v-if="visible.length > 1"
            class="lb__nav lb__nav--next"
            aria-label="Produk berikutnya"
            @click="step(1)"
          >
            <UiAppIcon name="chevron" :size="24" />
          </button>
        </div>
      </Teleport>
    </ClientOnly>
  </section>
</template>

<style scoped>
.catalog-section {
  background: var(--bg-highlights);
}

/* ---------- tabs ---------- */
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
}

.tab {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--panel-border);
  background: var(--panel-bg);
  color: var(--text-muted);
  font-family: inherit;
  font-size: 0.84rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
}

.tab:hover {
  color: var(--gold-ink);
  border-color: var(--panel-border-hover);
  transform: translateY(-2px);
}

.tab.is-active {
  background: var(--gold-grad);
  border-color: transparent;
  color: var(--navy-950);
}

.tab em {
  font-style: normal;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  background: color-mix(in srgb, currentColor 14%, transparent);
}

.catalog__blurb {
  margin-top: 1.2rem;
  max-width: 62ch;
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-muted);
}

/* ---------- grid ---------- */
.grid {
  list-style: none;
  margin: 1.6rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.prod__btn {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* Fill the stretched grid cell so every card in a row lines up, whether its
     name runs to one line or two. */
  height: 100%;
  padding: 0;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  border-radius: var(--radius-md);
  border: 1px solid var(--panel-border);
  background: var(--surface-0);
  box-shadow: var(--shadow-card);
  font-family: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.prod__btn:hover,
.prod__btn:focus-visible {
  transform: translateY(-6px);
  box-shadow: var(--shadow-pop);
  border-color: var(--panel-border-hover);
}

.prod__media {
  display: block;
  aspect-ratio: 4 / 3;
  background: var(--surface-1);
}

.prod__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prod__foot {
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0.8rem 0.95rem 0.9rem;
  border-top: 1px solid var(--surface-2);
}

.prod__name {
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--ink);
  text-wrap: balance;
}

/* ---------- lightbox ---------- */
.lb {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.75rem, 3vw, 2rem);
  background: rgba(3, 8, 22, 0.86);
  backdrop-filter: blur(6px);
}

.lb__panel {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  max-width: 1100px;
  max-height: 90vh;
  margin-inline: auto;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--surface-0);
  box-shadow: var(--shadow-pop);
}

.lb__panel > img {
  width: 100%;
  height: 100%;
  max-height: 90vh;
  object-fit: contain;
  background: var(--surface-1);
}

.lb__info {
  padding: clamp(1.2rem, 2.5vw, 1.9rem);
  overflow-y: auto;
}

.lb__cat {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #b07a10;
}

.lb__info h3 {
  margin-top: 0.4rem;
  font-family: var(--font-display);
  font-stretch: 112%;
  font-weight: 900;
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  line-height: 1.2;
  color: var(--navy-800);
}

.lb__meta {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.3rem 0.9rem;
  margin: 1rem 0 0;
  padding: 0.8rem 0;
  border-block: 1px solid var(--surface-2);
  font-size: 0.82rem;
}

.lb__meta dt {
  font-weight: 700;
  color: var(--ink-soft);
}

.lb__meta dd {
  margin: 0;
  color: var(--ink);
  font-weight: 600;
}

.lb__specs {
  list-style: none;
  margin: 1.1rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.55rem;
}

.lb__specs li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--ink-soft);
}

.lb__specs svg {
  flex: none;
  margin-top: 0.15rem;
  color: var(--blue-500);
}

.lb__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.4rem;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  background: var(--gold-grad);
  color: var(--navy-950);
  font-weight: 800;
  font-size: 0.88rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.lb__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px -12px rgba(246, 185, 59, 0.6);
}

.lb__hint {
  margin-top: 1rem;
  font-size: 0.72rem;
  color: var(--ink-soft);
}

.lb__close {
  position: absolute;
  top: clamp(0.75rem, 3vw, 1.5rem);
  right: clamp(0.75rem, 3vw, 1.5rem);
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.lb__close:hover {
  background: rgba(255, 255, 255, 0.22);
  transform: rotate(90deg);
}

.lb__nav {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.lb__nav:hover {
  background: rgba(255, 255, 255, 0.22);
}

.lb__nav--prev svg {
  transform: rotate(90deg);
}

.lb__nav--next svg {
  transform: rotate(-90deg);
}

@media (max-width: 880px) {
  .lb__panel {
    grid-template-columns: 1fr;
    grid-template-rows: auto minmax(0, 1fr);
    max-height: 86vh;
  }

  .lb__panel > img {
    max-height: 38vh;
  }

  .lb {
    grid-template-columns: 1fr;
  }

  .lb__nav {
    position: absolute;
    bottom: 1rem;
  }

  .lb__nav--prev {
    left: 25%;
  }

  .lb__nav--next {
    right: 25%;
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}
</style>
