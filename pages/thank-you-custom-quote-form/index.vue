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
  title: "Thank you custom quote | Half Price Packaging",
  meta: [
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: "Thank you custom quote | Half Price Packaging" },
    { property: 'og:title', content: "Thank you custom quote | Half Price Packaging" },
    { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
  ],
});
</script>
<template>
  <div>
    <div class="flex h-screen items-center justify-center">
      <div>
        <div class="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 text-green-600" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 class="text-4xl font-bold">THANK YOU</h1>
          <p>Thank you for submitting your inquiry, our representative will contact you shortly.</p>
          <a
            class="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-3 w-3" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <NuxtLink to="/" class="text-sm font-medium"> Home </NuxtLink>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>