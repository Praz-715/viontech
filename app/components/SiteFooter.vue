<script setup lang="ts">
import { company, partnerValues, waLink } from '~/data/company'

const wa = waLink(
  `Halo ${company.nama}, saya ingin bermitra untuk kebutuhan pengadaan barang & jasa.`,
)

const contacts = [
  { icon: 'whatsapp', label: 'WhatsApp', value: company.telepon, href: wa },
  { icon: 'mail', label: 'Email', value: company.email, href: `mailto:${company.email}` },
  {
    icon: 'globe',
    label: 'Website',
    value: company.website,
    href: company.url,
  },
  { icon: 'pin', label: 'Alamat', value: company.alamat, href: undefined },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer id="kontak" class="footer">
    <div class="container">
      <div class="footer__head" v-reveal>
        <div>
          <h2>Mari Bermitra dengan Kami</h2>
          <p>
            {{ company.nama }} siap menjadi mitra pengadaan barang dan jasa Anda — kualitas
            terjamin, harga langsung dari pabrik,
            <strong>pelayanan profesional, dan administrasi proyek yang andal.</strong>
          </p>
        </div>
        <a :href="wa" class="footer__cta" target="_blank" rel="noopener">
          <UiAppIcon name="whatsapp" :size="20" />
          Hubungi via WhatsApp
        </a>
      </div>

      <ul class="values" v-reveal="1">
        <li v-for="v in partnerValues" :key="v.title">
          <span class="values__icon"><UiAppIcon :name="v.icon" :size="22" /></span>
          <strong>{{ v.title }}</strong>
          <span>{{ v.desc }}</span>
        </li>
      </ul>

      <div class="footer__panel card" v-reveal="2">
        <ul class="footer__contacts">
          <li v-for="c in contacts" :key="c.label">
            <span class="footer__icon"><UiAppIcon :name="c.icon" :size="20" /></span>
            <span class="footer__detail">
              <small>{{ c.label }}</small>
              <component
                :is="c.href ? 'a' : 'span'"
                :href="c.href"
                :target="c.href?.startsWith('http') ? '_blank' : undefined"
                :rel="c.href?.startsWith('http') ? 'noopener' : undefined"
              >
                {{ c.value }}
              </component>
            </span>
          </li>
        </ul>

        <blockquote class="footer__quote">
          <p>&ldquo;Kami Bukan Sekadar Supplier, Tapi&nbsp;Partner&nbsp;Solusi&rdquo;</p>
          <cite>— PT VIONTECH INTEGRASI OPTIMA</cite>
        </blockquote>
      </div>

      <div class="footer__base">
        <div class="footer__brand">
          <BrandLogo variant="mark" :height="30" />
          <span>&copy; {{ year }} {{ company.nama }}. Seluruh hak cipta dilindungi.</span>
        </div>
        <span class="footer__tagline">{{ company.tagline }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: clamp(3rem, 6vw, 5rem) 1.75rem;
  background: var(--bg-highlights);
}

.footer__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer__head h2 {
  font-family: var(--font-display);
  font-stretch: 114%;
  font-weight: 900;
  font-size: clamp(1.6rem, 3.4vw, 2.4rem);
  line-height: 1.15;
  color: var(--text-strong);
}

.footer__head p {
  margin-top: 0.8rem;
  max-width: 62ch;
  font-size: 0.98rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.footer__head strong {
  color: var(--gold-ink);
}

.footer__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  flex: none;
  padding: 0.95rem 1.8rem;
  border-radius: 999px;
  background: var(--gold-grad);
  color: var(--navy-950);
  font-weight: 800;
  font-size: 0.96rem;
  box-shadow: 0 14px 30px -12px rgba(246, 185, 59, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
}

.footer__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 38px -12px rgba(246, 185, 59, 0.65);
}

/* ---- value grid ---- */
.values {
  list-style: none;
  margin: 2.2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1rem;
}

.values li {
  padding: 1.4rem 1.25rem;
  border-radius: var(--radius-md);
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
}

.values__icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.13);
  border: 1px solid rgba(246, 185, 59, 0.35);
  color: var(--gold-400);
  margin-bottom: 0.9rem;
}

.values strong {
  display: block;
  font-family: var(--font-display);
  font-stretch: 106%;
  font-weight: 800;
  font-size: 0.86rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-strong);
}

.values li > span:last-child {
  display: block;
  margin-top: 0.45rem;
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--text-muted);
}

/* ---- contact panel ---- */
.footer__panel {
  display: grid;
  grid-template-columns: 1.9fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
  padding: clamp(1.5rem, 3.5vw, 2.2rem);
  border-radius: var(--radius-lg);
}

.footer__contacts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem 1.5rem;
}

.footer__contacts li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.footer__icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--navy-800);
  color: var(--gold-400);
  display: grid;
  place-items: center;
  flex: none;
}

.footer__detail {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  line-height: 1.4;
  min-width: 0;
}

.footer__detail small {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-soft);
}

.footer__detail a,
.footer__detail span {
  font-weight: 700;
  color: var(--ink);
  font-size: 0.92rem;
  overflow-wrap: anywhere;
}

.footer__detail a:hover {
  color: var(--blue-500);
}

.footer__quote {
  margin: 0;
  background: linear-gradient(135deg, var(--navy-900), var(--navy-700));
  border-radius: var(--radius-md);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.footer__quote::after {
  content: '';
  position: absolute;
  right: -30px;
  bottom: -40px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(77, 154, 255, 0.35), transparent 70%);
}

.footer__quote p {
  position: relative;
  font-family: var(--font-display);
  font-weight: 800;
  font-style: italic;
  font-size: 1.05rem;
  line-height: 1.4;
  background: var(--gold-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer__quote cite {
  display: block;
  margin-top: 0.7rem;
  font-style: normal;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  color: var(--paper-dim);
}

.footer__base {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.75rem;
  color: var(--text-muted);
  font-size: 0.82rem;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.footer__tagline {
  font-style: italic;
  color: var(--link-accent);
}

@media (max-width: 1020px) {
  .footer__panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .footer__contacts {
    grid-template-columns: 1fr;
  }
}
</style>
