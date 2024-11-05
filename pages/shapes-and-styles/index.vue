<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

useSeoMeta({
  title: "Shapes and Styles | Half Price Packaging",
  link: [
    { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
  ],
  meta: [
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: "Shapes and Styles | Half Price Packaging" },
    { name: 'description', content: "Explore endless shapes and styles for your custom packaging needs at Half Price Packaging. Unleash your creativity today!" },
    { property: 'og:title', content: "Shapes and Styles | Half Price Packaging" },
    { property: 'og:description', content: "Explore endless shapes and styles for your custom packaging needs at Half Price Packaging. Unleash your creativity today!" },
    { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: "https://www.halfpricepackaging.com/_nuxt/img/shapes-and-styles.3742134.webp" },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'halfpricepackaging.com' },
    { name: 'twitter:title', content: "Shapes and Styles | Half Price Packaging" },
    { name: 'twitter:description', content: "Explore endless shapes and styles for your custom packaging needs at Half Price Packaging. Unleash your creativity today!" },
    { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_nuxt/img/shapes-and-styles.3742134.webp" },
  ],
});

useHead({
  link: [
    { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
  ],
});

</script>

<template>
  <div class="hpp__industriesListingPageWrapper bg-white">

    <div class="breadcrumbs__wrap pt-[20px] pb-[50px] md:py-[50px]">
      <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
        <ul class="flex items-center gap-[10px]">
          <li><a href="#" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg></a></li>
          <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg></span></li>
          <li><span>Shapes & Styles</span></li>
        </ul>
      </div>
    </div>
    <div class="section__headerWrap">
      <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
        <div class="inner__wrap w-full md:w-[800px] md:mx-auto mb-[50px] text-left md:text-center">
          <h1 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The most versatile
            paperboard printing solution on the market</h1>
          <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">Tap into unlimited
            customization from start to finish to craft the perfect box experience.</p>
        </div>
      </div>
    </div>
    <LazyShapesStylesProductsWrapper />
    <LazyGeneralFaqWrapper />
    <LazyGeneralSampleKitWrapper />

  </div>
</template>