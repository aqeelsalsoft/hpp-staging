<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://www.halfpricepackaging.com${route.path}`,
    },
  ],
})
useSeoMeta({
  title: "404 Not Found | Half Price Packaging",
  meta: [
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: "404 Not Found | Half Price Packaging" },
    { name: 'description', content: " Oops! You've hit a dead end. At Half Price Packaging, explore our range of packaging solutions or contact us for help. Let’s get you back on track!" },
    { property: 'og:title', content: "404 Not Found | Half Price Packaging" },
    { property: 'og:description', content: " Oops! You've hit a dead end. At Half Price Packaging, explore our range of packaging solutions or contact us for help. Let’s get you back on track!" },
    { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'halfpricepackaging.com' },
    { name: 'twitter:title', content: "404 Not Found | Half Price Packaging" },
    { name: 'twitter:description', content: " Oops! You've hit a dead end. At Half Price Packaging, explore our range of packaging solutions or contact us for help. Let’s get you back on track!" },
  ],
});
</script>
<template>
  <div class="bg-white flex flex-col justify-center gap-3 items-center p-4">
    <h1>Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
    <NuxtLink to="/"
      class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[6px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
      Go back to the homepage
    </NuxtLink>
  </div>
</template>
