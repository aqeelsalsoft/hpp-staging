<script setup>
import { useRoute } from 'vue-router';
import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html';

const vCleanHtml = buildVueDompurifyHTMLDirective();

const route = useRoute();
const slug = route.params.slug;


const { data, status, error, refresh, clear } = await useAsyncData(
  'knowledge',
  () => $fetch(`${useRuntimeConfig().public.apiURL}/page?page=${slug}`),
  { initialCache: false }
);

console.log("data", data?.value);


useSeoMeta({
  title: data?.value?.seo_title,
  meta: [
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: data?.value?.seo_title },
    { name: 'description', content: data?.value?.description },
    { property: 'og:title', content: data?.value?.seo_title },
    { property: 'og:description', content: data?.value?.description },
    { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'halfpricepackaging.com' },
    { name: 'twitter:title', content: data?.value?.seo_title },
    { name: 'twitter:description', content: data?.value?.description },
  ],
});

useHead({
  link: [
    { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
  ],
});

</script>

<template>
  <div class="hpp__contentPageWrapper bg-white">

    <div class="breadcrumbs__wrap py-[20px] md:py-[50px]">
      <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
        <ul class="flex items-center gap-[10px]">
          <li><a href="/" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg></a></li>
          <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg></span></li>
          <li><span>{{ data?.title }}</span></li>
        </ul>
      </div>
    </div>
    <div class="section__headerWrap bg-gray-100 py-[30px] md:py-[50px]">
      <div class="md:container md:mx-auto px-[20px] px-[15px]">
        <div class="inner__wrap flex flex-wrap">
          <div class="content__wrapper w-full">
            <h1
              class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-0">
              {{ data?.title }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="hpp__pageContentWrapper pt-[30px] md:pt-[50px] pb-[50px] md:pb-[100px]">
      <div class="md:container md:mx-auto px-[20px] md:px-[15px]" v-clean-html="data?.content"> </div>
      <div class="md:container md:mx-auto px-[20px] md:px-[15px]" v-clean-html="data?.mainContent"> </div>
    </div>
    <LazyGeneralSampleKitWrapper />
  </div>
</template>