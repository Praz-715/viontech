<script setup lang="ts">
// Official vendor SVGs, self-hosted in /public/logos — alt text from this map
const logoNames: Record<string, string> = {
  oracle: 'Oracle',
  hpe: 'Hewlett Packard Enterprise',
  dell: 'Dell Technologies',
  lenovo: 'Lenovo',
  nutanix: 'Nutanix',
  fortinet: 'Fortinet',
  cisco: 'Cisco',
  vmware: 'VMware',
  proxmox: 'Proxmox',
  postgresql: 'PostgreSQL',
  aws: 'Amazon Web Services',
  huawei: 'Huawei Cloud',
  minio: 'MinIO',
  purestorage: 'Pure Storage',
  react: 'React',
  vue: 'Vue.js',
  laravel: 'Laravel',
  go: 'Go',
  php: 'PHP',
  node: 'Node.js',
  elastic: 'Elastic',
  metabase: 'Metabase',
}

const stacks = [
  {
    icon: 'server',
    title: 'Infrastructure & Server',
    items: [
      'Oracle M/T/X Series',
      'HPE DL & Superdome',
      'Dell PowerEdge',
      'Lenovo ThinkSystem',
      'Nutanix HCI',
    ],
    logos: ['oracle', 'hpe', 'dell', 'lenovo', 'nutanix'],
  },
  {
    icon: 'shield',
    title: 'Network & Security',
    items: [
      'Fortinet (Firewall, WAF)',
      'Cisco Networking',
      'SAN/LAN/WAN',
      'Virtualisasi VMware',
      'Proxmox & OLVM',
    ],
    logos: ['fortinet', 'cisco', 'vmware', 'proxmox'],
  },
  {
    icon: 'database',
    title: 'Database & Cloud',
    items: [
      'Oracle DB, PostgreSQL',
      'MongoDB, MariaDB',
      'AWS & Huawei Cloud',
      'PureStorage, Synology',
      'MinIO Object Storage',
    ],
    logos: ['oracle', 'postgresql', 'aws', 'huawei', 'minio', 'purestorage'],
  },
  {
    icon: 'code',
    title: 'App Development',
    items: [
      'React.js, Vue.js, Laravel',
      'Golang, PHP, Node.js',
      'React Native (Mobile)',
      'Oracle APEX',
      'ELK Stack, Metabase',
    ],
    logos: ['react', 'vue', 'laravel', 'go', 'php', 'node', 'elastic', 'metabase'],
  },
]
</script>

<template>
  <section id="teknologi" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Teknologi &amp; Keahlian</h2>
      </div>

      <div class="stacks">
        <article v-for="(stack, i) in stacks" :key="stack.title" class="card stack" v-reveal="i">
          <header class="stack__head">
            <span class="stack__icon"><UiAppIcon :name="stack.icon" :size="22" /></span>
            <h3>{{ stack.title }}</h3>
          </header>

          <ul class="stack__items">
            <li v-for="item in stack.items" :key="item">{{ item }}</li>
          </ul>

          <div class="stack__logos">
            <img
              v-for="logo in stack.logos"
              :key="logo"
              :src="`/logos/${logo}.svg`"
              :alt="`Logo ${logoNames[logo]}`"
              :title="logoNames[logo]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stacks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}

.stack {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.stack:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-pop);
}

.stack__head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding-bottom: 0.9rem;
  border-bottom: 2px solid var(--surface-2);
}

.stack__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  background: linear-gradient(140deg, var(--navy-800), var(--navy-600));
  color: var(--gold-300);
  flex: none;
}

.stack__head h3 {
  font-family: var(--font-display);
  font-stretch: 108%;
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--navy-800);
  line-height: 1.25;
}

.stack__items {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
  flex: 1;
}

.stack__items li {
  position: relative;
  padding-left: 1.05rem;
  font-size: 0.88rem;
  color: var(--ink-soft);
}

.stack__items li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.48em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--blue-500);
}

.stack__logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.7rem 1rem;
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--line);
}

/* Uniform chip height keeps mixed wordmarks & icon marks visually aligned */
.stack__logos img {
  height: 18px;
  max-width: 72px;
  width: auto;
  object-fit: contain;
}
</style>
