<script setup lang="ts">
import { company, legal } from '~/data/company'
import { productCategories, totalProducts } from '~/data/products'

const title = 'PT Viontech Integrasi Optima — IT Solution & Pengadaan Barang / Jasa'
// Kept under ~160 chars so Google does not truncate it in the SERP snippet.
const description =
  'Mitra IT solution dan pengadaan barang & jasa untuk pemerintah, TNI/Polri, BUMN, dan swasta: data center, cloud, jaringan, aplikasi, furniture & elektronik kantor.'
// Longer copy for social shares, which allow more room than SERP snippets.
const ogDescription = `${company.nama} menghadirkan solusi IT — infrastruktur data center, cloud, database, jaringan & keamanan, hingga pengembangan aplikasi — sekaligus pengadaan ${totalProducts} item furniture kantor, elektronik, dan perlengkapan barak/asrama langsung dari pabrik.`

useSeoMeta({
  title,
  description,
  keywords:
    'system integrator indonesia, it solution jakarta, data center, cloud, cybersecurity, oracle partner, fortinet partner, software development, pengadaan barang dan jasa, supplier furniture kantor, ALSATRI, perlengkapan asrama TNI Polri, elektronik kantor, e-katalog LKPP, procurement jakarta',
  ogTitle: title,
  ogDescription,
  ogType: 'website',
  ogUrl: company.url,
  ogLocale: 'id_ID',
  ogSiteName: company.nama,
  ogImage: `${company.url}/og-image.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${company.nama} — ${company.tagline}`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: ogDescription,
  twitterImage: `${company.url}/og-image.png`,
  twitterImageAlt: `${company.nama} — ${company.tagline}`,
})

const nib = legal.find((l) => l.label.includes('NIB'))?.value
const npwp = legal.find((l) => l.label.includes('NPWP'))?.value

useHead({
  link: [{ rel: 'canonical', href: company.url }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.nama,
        alternateName: company.namaPendek,
        url: company.url,
        logo: `${company.url}${company.logo}`,
        image: `${company.url}/og-image.png`,
        description,
        email: company.email,
        telephone: company.teleponE164,
        taxID: npwp,
        identifier: nib,
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'AIWORK Office Space, Plaza Simatupang Lt. 6 Unit 3, Jl. TB Simatupang Kav. IS No. 01, Pondok Pinang',
          addressLocality: 'Kebayoran Lama, Jakarta Selatan',
          addressRegion: 'DKI Jakarta',
          postalCode: '12310',
          addressCountry: 'ID',
        },
        slogan: company.tagline,
        knowsAbout: [
          'Enterprise Infrastructure & Data Center',
          'Cloud & Database Solutions',
          'Network & Cybersecurity',
          'Data Analytics & AI',
          'Software Development',
          ...productCategories.map((c) => c.nama),
        ],
        makesOffer: productCategories.map((c) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Product', name: c.nama, description: c.deskripsi },
        })),
      }),
    },
  ],
})
</script>

<template>
  <main>
    <SectionsHeroCarousel />
    <SectionsHeroSection />
    <SectionsAboutSection />

    <!-- IT solution block -->
    <SectionsServicesSection />
    <SectionsTechSection />
    <SectionsPartnershipSection />
    <SectionsWhySection />

    <!-- Procurement block -->
    <SectionsCatalogSection />
    <SectionsAdvantagesSection />

    <!-- Shared -->
    <SectionsMarketSection />
    <SectionsLegalSection />
    <SectionsHighlightsSection />
  </main>
</template>
