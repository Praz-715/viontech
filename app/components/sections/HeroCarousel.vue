<script setup lang="ts">
import { company, pillars, waLink } from '~/data/company'

/**
 * Top-of-page banner. One slide per supply pillar: brand + copy on the left,
 * the category artwork on the right.
 *
 * Built on native scroll-snap rather than a transform track — touch swipe,
 * momentum, and keyboard scrolling come for free, and the pointer handlers
 * below only add mouse dragging on top of it.
 */
const AUTOPLAY_MS = 7000

const track = ref<HTMLElement | null>(null)
const index = ref(0)
const paused = ref(false)

const wa = waLink(
  `Halo ${company.nama}, saya ingin konsultasi kebutuhan IT solution / pengadaan barang & jasa.`,
)

const slideWidth = () => track.value?.clientWidth ?? 1

const goTo = (i: number, smooth = true) => {
  const el = track.value
  if (!el) return
  const n = pillars.length
  const target = ((i % n) + n) % n
  el.scrollTo({ left: target * slideWidth(), behavior: smooth ? 'smooth' : 'auto' })
}

const step = (d: number) => goTo(index.value + d)

// Scroll is the single source of truth for which slide is active — drag,
// swipe, buttons and autoplay all funnel through it.
const onScroll = () => {
  const el = track.value
  if (!el) return
  index.value = Math.round(el.scrollLeft / slideWidth())
}

// ---- mouse drag (touch already scrolls natively) ----
/** Fraction of a slide you must drag before it commits to the next one. */
const DRAG_COMMIT = 0.12

let down = false
let startX = 0
let startScroll = 0
let startIndex = 0
let suppressClick = false

const dragging = ref(false)
/**
 * `scroll-snap-type: mandatory` re-snaps after every scrollLeft write, which
 * cancels a JS-driven drag mid-gesture. Suspend snapping for the gesture and
 * restore it once the settle animation has finished.
 */
const snapOff = ref(false)
let snapTimer: ReturnType<typeof setTimeout> | undefined

const onPointerDown = (e: PointerEvent) => {
  if (e.pointerType === 'touch' || !track.value) return
  down = true
  dragging.value = false
  startX = e.clientX
  startScroll = track.value.scrollLeft
  startIndex = Math.round(startScroll / slideWidth())
  clearTimeout(snapTimer)
  snapOff.value = true
}

const onPointerMove = (e: PointerEvent) => {
  if (!down || !track.value) return
  const dx = e.clientX - startX
  if (Math.abs(dx) > 4) dragging.value = true
  track.value.scrollLeft = startScroll - dx
}

const restoreSnap = () => {
  clearTimeout(snapTimer)
  snapTimer = setTimeout(() => (snapOff.value = false), 700)
}

const onPointerUp = () => {
  if (!down) return
  down = false
  if (!dragging.value) {
    snapOff.value = false
    return
  }

  // The click event fires after pointerup — hold the guard for one tick so a
  // drag that ends on a button does not also activate it.
  suppressClick = true
  setTimeout(() => (suppressClick = false), 0)
  dragging.value = false

  const dragged = (track.value?.scrollLeft ?? 0) - startScroll
  const commit = Math.abs(dragged) > slideWidth() * DRAG_COMMIT
  goTo(commit ? startIndex + Math.sign(dragged) : startIndex)
  restoreSnap()
}

const onLinkClick = (e: MouseEvent) => {
  if (suppressClick) e.preventDefault()
}

// ---- autoplay ----
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return

  timer = setInterval(() => {
    if (paused.value || down || document.hidden) return
    step(1)
  }, AUTOPLAY_MS)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section
    id="solusi"
    class="carousel"
    aria-roledescription="carousel"
    aria-label="Solusi teknologi dan pengadaan terintegrasi"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="carousel__bg" aria-hidden="true">
      <div class="carousel__grid" />
      <div class="carousel__glow carousel__glow--gold" />
      <div class="carousel__glow carousel__glow--blue" />
    </div>

    <div class="container carousel__inner">
      <div
        ref="track"
        class="track"
        :class="{ 'is-dragging': dragging, 'is-snap-off': snapOff }"
        tabindex="0"
        @scroll.passive="onScroll"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        @pointerleave="onPointerUp"
        @keydown.left.prevent="step(-1)"
        @keydown.right.prevent="step(1)"
      >
        <article
          v-for="(p, i) in pillars"
          :key="p.id"
          class="slide"
          role="group"
          aria-roledescription="slide"
          :aria-label="`${i + 1} dari ${pillars.length}: ${p.title}`"
        >
          <div class="slide__copy">
            <div class="slide__logo">
              <BrandLogo variant="full" :height="118" :priority="i === 0" />
            </div>

            <p class="slide__eyebrow">{{ p.eyebrow }}</p>
            <h2 class="slide__title">{{ p.title }}</h2>
            <p class="slide__desc">{{ p.desc }}</p>

            <div class="slide__actions">
              <a :href="p.cta.href" class="btn btn--gold" @click="onLinkClick">
                {{ p.cta.label }}
              </a>
              <a
                :href="wa"
                class="btn btn--ghost"
                target="_blank"
                rel="noopener"
                @click="onLinkClick"
              >
                <UiAppIcon name="whatsapp" :size="18" />
                Konsultasi
              </a>
            </div>
          </div>

          <div class="slide__media">
            <img
              :src="p.image"
              :alt="`${p.title} — ${company.nama}`"
              :loading="i === 0 ? 'eager' : 'lazy'"
              :fetchpriority="i === 0 ? 'high' : undefined"
              decoding="async"
              draggable="false"
            />
          </div>
        </article>
      </div>

      <!-- controls -->
      <div class="controls">
        <button class="arrow" aria-label="Slide sebelumnya" @click="step(-1)">
          <UiAppIcon name="chevron" :size="22" />
        </button>

        <ul class="dots">
          <li v-for="(p, i) in pillars" :key="p.id">
            <button
              class="dot"
              :class="{ 'is-active': i === index }"
              :aria-label="`Ke slide ${i + 1}: ${p.title}`"
              :aria-current="i === index ? 'true' : undefined"
              @click="goTo(i)"
            />
          </li>
        </ul>

        <button class="arrow" aria-label="Slide berikutnya" @click="step(1)">
          <UiAppIcon name="chevron" :size="22" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  padding-block: clamp(6rem, 11vw, 8.5rem) clamp(2.5rem, 5vw, 4rem);
  background: var(--bg-hero);
}

.carousel__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.carousel__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(ellipse 90% 80% at 60% 20%, black 0%, transparent 75%);
}

.carousel__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
}

.carousel__glow--gold {
  width: 420px;
  height: 420px;
  right: -120px;
  top: -140px;
  background: var(--glow-gold);
}

.carousel__glow--blue {
  width: 560px;
  height: 560px;
  left: -180px;
  bottom: -240px;
  background: var(--glow-blue);
}

.carousel__inner {
  position: relative;
}

/* ---------- track ---------- */
.track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  border-radius: var(--radius-lg);
}

.track::-webkit-scrollbar {
  display: none;
}

.track:focus-visible {
  outline: 2px solid var(--gold-400);
  outline-offset: 6px;
}

.track.is-dragging {
  cursor: grabbing;
  user-select: none;
}

.track.is-snap-off {
  scroll-snap-type: none;
}

.slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3.5rem);
}

/* ---------- left column ---------- */
/* No box-shadow: the next slide sits flush against the right edge of the
   track, so a shadow here blurs across the boundary and shows up as a smudge
   on the right of the visible slide. */
.slide__logo {
  display: inline-flex;
  padding: 0.9rem 1.7rem;
  border-radius: var(--radius-lg);
  background: linear-gradient(155deg, #ffffff 0%, #eaf1fd 100%);
  border: 1px solid rgba(255, 255, 255, 0.55);
}

.slide__eyebrow {
  margin-top: 1.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-ink);
}

.slide__title {
  margin-top: 0.6rem;
  font-family: var(--font-display);
  font-stretch: 116%;
  font-weight: 900;
  font-size: clamp(1.75rem, 3.8vw, 2.9rem);
  line-height: 1.08;
  color: var(--text-strong);
  text-wrap: balance;
}

.slide__desc {
  margin-top: 1rem;
  max-width: 46ch;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.slide__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.8rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  font-size: 0.92rem;
  padding: 0.8rem 1.6rem;
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

/* ---------- right column ---------- */
.slide__media {
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(300px, 44vh, 470px);
}

.slide__media img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-md);
  -webkit-user-drag: none;
}

/* ---------- controls ---------- */
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: clamp(1.5rem, 3vw, 2.2rem);
}

.arrow {
  width: 44px;
  height: 44px;
  flex: none;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1.5px solid var(--panel-border);
  background: var(--panel-bg);
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, transform 0.2s;
}

.arrow:hover {
  color: var(--gold-ink);
  border-color: var(--panel-border-hover);
  transform: translateY(-2px);
}

.arrow:first-of-type svg {
  transform: rotate(90deg);
}

.arrow:last-of-type svg {
  transform: rotate(-90deg);
}

.dots {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--panel-border);
  cursor: pointer;
  transition: width 0.3s ease, background 0.3s ease;
}

.dot.is-active {
  width: 30px;
  background: var(--gold-grad);
}

@media (max-width: 900px) {
  .slide {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  /* Artwork first on narrow screens — it reads faster than the copy */
  .slide__media {
    order: -1;
  }

  .slide__media {
    height: clamp(230px, 32vh, 320px);
  }

  .slide__desc {
    max-width: none;
  }
}
</style>
