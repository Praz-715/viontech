<script setup lang="ts">
const contacts = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: '+62 817-322-890',
    href: 'https://wa.me/62817322890?text=Halo%20Viontech%2C%20saya%20tertarik%20dengan%20layanan%20transformasi%20digital%20Anda.',
  },
  { icon: 'mail', label: 'Email', value: 'admin@viontech.co.id', href: 'mailto:admin@viontech.co.id' },
  { icon: 'globe', label: 'Website', value: 'viontech.co.id', href: 'https://viontech.co.id' },
  { icon: 'pin', label: 'Alamat', value: 'Jakarta, Indonesia', href: undefined },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer id="kontak" class="footer">
    <div class="container">
      <div class="footer__panel card" v-reveal>
        <div class="footer__intro">
          <h2>HUBUNGI KAMI</h2>
          <p>
            Siap membantu transformasi digital Anda.
            <strong>Hubungi kami untuk konsultasi gratis.</strong>
          </p>
        </div>

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
          <p>&ldquo;Integrasi Cerdas, Transformasi&nbsp;Nyata&rdquo;</p>
          <cite>— PT VIONTECH INTEGRASI OPTIMA</cite>
        </blockquote>
      </div>

      <div class="footer__base">
        <div class="footer__brand">
          <LogosViontechLogo :size="30" mono style="color: var(--text-muted)" />
          <span>&copy; {{ year }} PT Viontech Integrasi Optima. Seluruh hak cipta dilindungi.</span>
        </div>
        <span class="footer__tagline">Integrating Intelligence, Accelerating Innovation</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: clamp(3rem, 6vw, 5rem) 1.75rem;
}

.footer__panel {
  display: grid;
  grid-template-columns: 1.1fr 1.6fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: clamp(1.5rem, 3.5vw, 2.5rem);
  border-radius: var(--radius-lg);
}

.footer__intro h2 {
  font-family: var(--font-display);
  font-stretch: 115%;
  font-weight: 900;
  font-size: 1.4rem;
  letter-spacing: 0.04em;
  color: var(--navy-800);
}

.footer__intro p {
  margin-top: 0.6rem;
  color: var(--ink-soft);
  font-size: 0.94rem;
  line-height: 1.6;
}

.footer__intro strong {
  color: #b07a10;
}

.footer__contacts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.1rem 1.5rem;
}

.footer__contacts li {
  display: flex;
  align-items: center;
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
  line-height: 1.3;
}

.footer__detail small {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-soft);
}

.footer__detail a,
.footer__detail span {
  font-weight: 700;
  color: var(--ink);
  font-size: 0.95rem;
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
  font-family: var(--font-display);
  font-weight: 800;
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.35;
  background: var(--gold-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer__quote cite {
  display: block;
  margin-top: 0.7rem;
  font-style: normal;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  color: var(--paper-dim); /* quote card stays navy in both themes */
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
