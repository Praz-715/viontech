<script setup lang="ts">
import { company, waLink } from '~/data/company'

const links = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Solusi', href: '#solusi' },
  { label: 'Katalog', href: '#katalog' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Sektor', href: '#sektor' },
]

const wa = waLink(
  `Halo ${company.nama}, saya ingin menanyakan katalog produk dan penawaran pengadaan.`,
)

const open = ref(false)
const scrolled = ref(false)
const { theme, toggle, sync } = useTheme()

onMounted(() => {
  sync()
  const onScroll = () => (scrolled.value = window.scrollY > 24)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled }">
    <div class="container header__inner">
      <a href="#" class="brand" :aria-label="`${company.nama} — beranda`">
        <BrandLogo variant="mark" :height="40" priority />
        <span class="brand__text">
          <strong>PT VIONTECH</strong>
          <small>Integrasi Optima</small>
        </span>
      </a>

      <nav class="nav" :class="{ 'is-open': open }" aria-label="Navigasi utama">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="open = false">
          {{ link.label }}
        </a>
        <a :href="wa" class="nav__cta" target="_blank" rel="noopener" @click="open = false">
          Hubungi Kami
        </a>
      </nav>

      <div class="header__tools">
        <button
          class="theme-toggle"
          :aria-label="theme === 'dark' ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'"
          :title="theme === 'dark' ? 'Tema terang' : 'Tema gelap'"
          @click="toggle"
        >
          <UiAppIcon :name="theme === 'dark' ? 'sun' : 'moon'" :size="18" />
        </button>

        <button
          class="burger"
          :aria-expanded="open"
          aria-label="Buka menu navigasi"
          @click="open = !open"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 50;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.header.is-scrolled {
  background: var(--header-bg);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px -16px rgba(0, 0, 0, 0.45);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 0.7rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand__text strong {
  font-family: var(--font-display);
  font-stretch: 112%;
  font-weight: 900;
  font-size: 1.02rem;
  letter-spacing: 0.04em;
  color: var(--text-strong);
}

.brand__text small {
  font-size: 0.68rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--gold-500);
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 0.92rem;
  font-weight: 600;
}

.nav a:not(.nav__cta) {
  color: var(--text-muted);
  transition: color 0.2s;
}

.nav a:not(.nav__cta):hover {
  color: var(--gold-ink);
}

.nav__cta {
  background: var(--gold-grad);
  color: var(--navy-950);
  font-weight: 800;
  padding: 0.55rem 1.2rem;
  border-radius: 999px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.nav__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px -10px rgba(246, 185, 59, 0.55);
}

.header__tools {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: transparent;
  border: 1.5px solid var(--panel-border);
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, transform 0.2s;
}

.theme-toggle:hover {
  color: var(--gold-ink);
  border-color: var(--panel-border-hover);
  transform: rotate(15deg);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  padding: 0.5rem;
  cursor: pointer;
}

.burger span {
  width: 24px;
  height: 2px;
  background: var(--text-strong);
  border-radius: 2px;
}

@media (max-width: 940px) {
  .burger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    inset-inline: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: var(--header-solid);
    border-top: 1px solid var(--panel-border);
    padding: 0.5rem 1.25rem 1.25rem;
    display: none;
  }

  .nav.is-open {
    display: flex;
  }

  .nav a:not(.nav__cta) {
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--panel-border);
  }

  .nav__cta {
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
