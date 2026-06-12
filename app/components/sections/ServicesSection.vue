<script setup lang="ts">
const services = [
  {
    icon: 'server',
    title: 'Infrastructure & Data Center',
    items: ['Enterprise Server', 'Storage', 'Virtualization', 'HCI', 'Backup & DR'],
  },
  {
    icon: 'brain',
    title: 'AI & Data Analytics',
    items: ['Artificial Intelligence', 'Machine Learning', 'Data Lake', 'Data Warehouse', 'BI & Dashboard'],
  },
  {
    icon: 'database',
    title: 'Database Solutions',
    items: ['Oracle Database', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: 'cloud',
    title: 'Cloud Solutions',
    items: ['AWS', 'Huawei Cloud', 'Hybrid Cloud', 'Multi Cloud Architecture'],
  },
  {
    icon: 'shield',
    title: 'Network & Security',
    items: ['Fortinet', 'Cisco', 'Firewall & WAF', 'LAN/WAN', 'Security Architecture'],
  },
  {
    icon: 'code',
    title: 'Software Development',
    items: ['Web Application', 'Mobile Application', 'API Development', 'Middleware Integration'],
  },
]
</script>

<template>
  <section id="layanan" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Layanan &amp; Solusi</h2>
      </div>
      <p class="section-lede" v-reveal="1">
        Solusi teknologi end-to-end untuk transformasi digital Anda.
      </p>

      <div class="services">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          class="card service"
          v-reveal="i"
        >
          <span class="service__icon">
            <UiAppIcon :name="service.icon" :size="30" />
          </span>
          <h3>{{ service.title }}</h3>
          <ul>
            <li v-for="item in service.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}

.service {
  padding: 1.5rem 1.25rem;
  border-top: 4px solid transparent;
  border-image: linear-gradient(90deg, var(--blue-500), var(--cyan-400)) 1;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.service:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-pop);
}

.service__icon {
  width: 58px;
  height: 58px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  background: linear-gradient(140deg, var(--navy-800), var(--navy-600));
  color: var(--gold-300);
  margin-bottom: 1rem;
}

.service h3 {
  font-family: var(--font-display);
  font-stretch: 108%;
  font-weight: 800;
  font-size: 0.98rem;
  line-height: 1.25;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--navy-800);
  min-height: 2.5em;
}

.service ul {
  list-style: none;
  margin: 0.9rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.45rem;
}

.service li {
  position: relative;
  padding-left: 1rem;
  font-size: 0.86rem;
  color: var(--ink-soft);
}

.service li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--gold-500);
}
</style>
