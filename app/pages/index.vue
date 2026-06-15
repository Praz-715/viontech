<script setup lang="ts">
const siteUrl = 'https://viontech.co.id'
const title = 'PT Viontech Integrasi Optima — Enterprise Infrastructure & AI Solution Provider'
// Kept under ~160 chars so Google does not truncate it in the SERP snippet.
const description =
  'Perusahaan teknologi integrasi terdepan di Indonesia: solusi AI, Cloud, Data Center, Cybersecurity, dan Software Development untuk pemerintah dan enterprise.'
// Longer copy for social shares, which allow more room than SERP snippets.
const ogDescription =
  'PT Viontech Integrasi Optima menghadirkan solusi AI, Data Analytics, Cloud, Infrastructure, Cybersecurity, dan Software Development untuk pemerintah, financial services, industri, healthcare, dan pendidikan.'

useSeoMeta({
  title,
  description,
  keywords:
    'system integrator indonesia, enterprise infrastructure, AI solution provider, data center, cloud solutions, cybersecurity, oracle partner, fortinet partner, software development jakarta',
  ogTitle: title,
  ogDescription,
  ogType: 'website',
  ogUrl: siteUrl,
  ogLocale: 'id_ID',
  ogSiteName: 'PT Viontech Integrasi Optima',
  ogImage: `${siteUrl}/og-image.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'PT Viontech Integrasi Optima — Enterprise Infrastructure & AI Solution Provider',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: ogDescription,
  twitterImage: `${siteUrl}/og-image.png`,
  twitterImageAlt: 'PT Viontech Integrasi Optima — Enterprise Infrastructure & AI Solution Provider',
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'PT Viontech Integrasi Optima',
        alternateName: 'Viontech',
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        slogan: 'Integrating Intelligence, Accelerating Innovation',
        description,
        email: 'admin@viontech.co.id',
        telephone: '+62817322890',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Jakarta',
          addressCountry: 'ID',
        },
        knowsAbout: [
          'Enterprise Infrastructure',
          'Artificial Intelligence',
          'Data Analytics',
          'Cloud Computing',
          'Cybersecurity',
          'Software Development',
        ],
      }),
    },
  ],
})
</script>

<template>
  <main>
    <SectionsHeroSection />
    <SectionsServicesSection />
    <SectionsTechSection />
    <SectionsMarketSection />
    <SectionsWhySection />
    <SectionsPartnershipSection />
    <SectionsHighlightsSection />
  </main>
</template>
