<script setup lang="ts">
const reasons = [
  {
    icon: 'team',
    title: 'Tim Bersertifikat',
    desc: 'Engineers bersertifikat Oracle, Cisco, VMware, Fortinet, dan lebih dari 15 sertifikasi internasional.',
  },
  {
    icon: 'puzzle',
    title: 'End-to-End Solution',
    desc: 'Dari konsultasi, perancangan, implementasi, hingga maintenance dan dukungan purna jual.',
  },
  {
    icon: 'sectors',
    title: 'Pengalaman Multi-Sektor',
    desc: 'Portofolio luas di pemerintahan, keuangan, manufaktur, dan layanan publik.',
  },
  {
    icon: 'clock',
    title: 'SLA Terjamin',
    desc: 'Komitmen service level agreement dengan response time cepat dan dukungan 24/7.',
  },
  {
    icon: 'handshake',
    title: 'Mitra Teknologi Global',
    desc: 'Authorized partner Oracle, HPE, Dell, Lenovo, Fortinet, Cisco, dan brand terkemuka lainnya.',
  },
  {
    icon: 'bulb',
    title: 'Inovasi Berkelanjutan',
    desc: 'Selalu mengadopsi teknologi terkini termasuk AI, cloud-native, dan zero-trust security.',
  },
]
</script>

<template>
  <section id="mengapa" class="section">
    <div class="container">
      <div class="section-bar" v-reveal>
        <h2>Mengapa Viontech?</h2>
      </div>

      <div class="reasons card" v-reveal="1">
        <article v-for="(r, i) in reasons" :key="r.title" class="reason" v-reveal="i">
          <span class="reason__icon"><UiAppIcon :name="r.icon" :size="28" /></span>
          <h3>{{ r.title }}</h3>
          <p>{{ r.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reasons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  margin-top: 2.2rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.reason {
  padding: 1.8rem 1.3rem;
  text-align: center;
  border-right: 1px solid var(--surface-2);
  transition: background 0.25s ease;
}

.reason:last-child {
  border-right: 0;
}

.reason:hover {
  background: var(--surface-1);
}

.reason__icon {
  width: 60px;
  height: 60px;
  margin-inline: auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(140deg, var(--navy-800), var(--navy-600));
  color: var(--gold-300);
  margin-bottom: 1rem;
}

.reason h3 {
  font-family: var(--font-display);
  font-stretch: 106%;
  font-weight: 800;
  font-size: 0.86rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--navy-800);
  line-height: 1.3;
  min-height: 2.6em;
  display: grid;
  place-items: center;
}

.reason p {
  margin-top: 0.6rem;
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--ink-soft);
}

@media (max-width: 1100px) {
  .reason {
    border-bottom: 1px solid var(--surface-2);
  }
}
</style>
