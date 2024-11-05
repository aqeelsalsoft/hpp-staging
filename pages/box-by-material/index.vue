<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

useSeoMeta({
  title: "Packaging Materials | Half Price Packaging",
  meta: [
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: "Packaging Materials | Half Price Packaging" },
    { name: 'description', content: "We have a huge collection of high-quality packaging materials of all types and strengths to create desirable packaging solutions for your diverse range of products." },
    { property: 'og:title', content: "Packaging Materials | Half Price Packaging" },
    { property: 'og:description', content: "We have a huge collection of high-quality packaging materials of all types and strengths to create desirable packaging solutions for your diverse range of products." },
    { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: "https://www.halfpricepackaging.com/_nuxt/img/CoverCC.cbde523.jpg" },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'halfpricepackaging.com' },
    { name: 'twitter:title', content: "Packaging Materials | Half Price Packaging" },
    { name: 'twitter:description', content: "We have a huge collection of high-quality packaging materials of all types and strengths to create desirable packaging solutions for your diverse range of products." },
    { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_nuxt/img/CoverCC.cbde523.jpg" },
  ],
});

useHead({
  link: [
    { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
  ],
});

</script>

<template>
  <div class="hpp__industriesListingPageWrapper">
    <BoxByMaterialBreadcrumbsWrapper />
    <BoxByMaterialHeaderWrapper />
    <LazyBoxByMaterialMaterialSelectionWrapper />
    <LazyBoxByMaterialMaterialMoreInfoWrapper />
    <LazyGeneralFaqWrapper :faqs="items" />
    <LazyGeneralSampleKitWrapper />
  </div>
</template>