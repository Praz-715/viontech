<script setup lang="ts">
import { company, legal } from '~/data/company'
import { productCategories, totalProducts } from '~/data/products'

const title =
  'PT Viontech Integrasi Optima — Pengadaan Furniture, Elektronik & Perlengkapan Instansi'
// Kept under ~160 chars so Google does not truncate it in the SERP snippet.
const description =
  'Pengadaan barang & jasa untuk instansi pemerintah, TNI/Polri, BUMN, dan swasta. Furniture, elektronik, dan perlengkapan asrama original langsung dari pabrik.'
// Longer copy for social shares, which allow more room than SERP snippets.
const ogDescription = `${company.nama} menyediakan ${totalProducts} item furniture kantor, elektronik, perlengkapan barak/asrama, dan atribut protokoler instansi — kualitas terjamin, harga langsung dari pabrik, pengiriman nasional.`

useSeoMeta({
  title,
  description,
  keywords:
    'pengadaan barang dan jasa, supplier furniture kantor, ALSATRI, perlengkapan asrama TNI Polri, lemari arsip besi, meja kursi kantor, elektronik kantor, papan data instansi, e-katalog LKPP, procurement jakarta',
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
        slogan: company.tagline,
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
        knowsAbout: productCategories.map((c) => c.nama),
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
    <SectionsCatalogSection />
    <SectionsAdvantagesSection />
    <SectionsMarketSection />
    <SectionsLegalSection />
  </main>
</template>
