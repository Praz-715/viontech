<script setup lang="ts">
// Official vendor SVGs, self-hosted in /public/logos (no external CDN dependency)
const partners = [
  { id: 'oracle', name: 'Oracle' },
  { id: 'hpe', name: 'Hewlett Packard Enterprise' },
  { id: 'dell', name: 'Dell Technologies' },
  { id: 'lenovo', name: 'Lenovo' },
  { id: 'nutanix', name: 'Nutanix' },
  { id: 'fortinet', name: 'Fortinet' },
  { id: 'cisco', name: 'Cisco' },
  { id: 'vmware', name: 'VMware' },
  { id: 'aws', name: 'Amazon Web Services' },
  { id: 'huawei', name: 'Huawei Cloud' },
]

const roles = [
  { icon: 'gear', title: 'Technology Integrator' },
  { icon: 'architect', title: 'Solution Architect' },
  { icon: 'headset', title: 'Managed Service Provider' },
]
</script>

<template>
  <section id="partnership" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Partnership Strategy</h2>
      </div>
      <p class="section-lede" v-reveal="1">
        Bekerja sama dengan vendor teknologi global terkemuka.
      </p>

      <ul class="partners" aria-label="Mitra teknologi global">
        <li
          v-for="(p, i) in partners"
          :key="p.id"
          class="partner"
          v-reveal="i"
        >
          <img
            :src="`/logos/${p.id}.svg`"
            :alt="`Logo ${p.name}`"
            loading="lazy"
            decoding="async"
          />
          <span class="partner__name">{{ p.name }}</span>
        </li>
      </ul>

      <div class="roles" v-reveal="3">
        <div v-for="role in roles" :key="role.title" class="role">
          <span class="role__icon"><UiAppIcon :name="role.icon" :size="24" /></span>
          <span class="role__title">{{ role.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  list-style: none;
  margin: 2.2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
}

/* Balanced 5×2 wall on wide screens (10 partners) */
@media (min-width: 1100px) {
  .partners {
    grid-template-columns: repeat(5, 1fr);
  }
}

.partner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  min-height: 116px;
  padding: 1.3rem 1rem 1rem;
  background: var(--surface-0);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.partner:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-pop);
  border-color: var(--panel-border-hover);
}

.partner img {
  height: 34px;
  max-width: 82%;
  object-fit: contain;
}

.partner__name {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  color: var(--ink-soft);
}

.roles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 1.6rem;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--panel-border);
  border: 1px solid var(--panel-border);
}

/* Stays navy in both themes — the brand band anchoring the section */
.role {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 1rem;
  background: var(--panel-solid);
  transition: background 0.25s ease;
}

.role:hover {
  background: var(--panel-hover);
}

.role__icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(246, 185, 59, 0.12);
  border: 1px solid rgba(246, 185, 59, 0.35);
  color: var(--gold-400);
  flex: none;
}

.role__title {
  font-family: var(--font-display);
  font-stretch: 110%;
  font-weight: 800;
  font-size: 0.88rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
}

@media (max-width: 760px) {
  .roles {
    grid-template-columns: 1fr;
  }

  .role {
    justify-content: flex-start;
  }
}
</style>
