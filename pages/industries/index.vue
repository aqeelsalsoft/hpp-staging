<script setup>
import { useRoute } from 'vue-router';
const { setCategories } = useCategoriesStore();
const { hasCategories, Categories } = storeToRefs(useCategoriesStore());

if (!hasCategories.value) {
  const { data, status, error, refresh, clear } = await useAsyncData(
    'categories',
    () => $fetch(`${useRuntimeConfig().public.apiURL}/categories?type=0`),
    { initialCache: false }
  );

  if (data?.value) {
    setCategories(data?.value?.categories || []);
  }
}

const route = useRoute();

useSeoMeta({
  title: "Packaging Boxes by Industries | Half Price Packaging",
  meta: [
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: "Packaging Boxes by Industries | Half Price Packaging" },
    { name: 'description', content: "Check out our custom packaging that covers various industries and businesses with quality printing &amp; material options for each at best pricing and free shipping." }
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

    <div class="breadcrumbs__wrap px-[20px] md:px-0 py-[20px]">
      <div class="md:container md:mx-auto md:px-[15px]">
        <ul class="flex flex-wrap items-center gap-[5px] md:gap-[10px]">
          <li><a href="/" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 md:size-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg></a></li>
          <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="size-3 md:size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg></span></li>
          <li><span class="font-description text-sm md:text-base">Industries</span></li>
        </ul>
      </div>
    </div>
    <div class="section__headerWrap">
      <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
        <div class="inner__wrap w-full md:w-[800px] md:mx-auto mb-[50px] md:text-center">
          <h1 class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl">Custom
            packaging solutions for every industry.</h1>
          <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">Half Price
            Packaging possesses extensive expertise in delivering personalized packaging solutions to over
            3000 businesses across the globe. Below, you will find a carefully curated selection of
            packaging solutions designed to cater to various industries.</p>
        </div>
      </div>
    </div>
    <div class="industries__listWrapper mb-[50px]">
      <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-[20px] md:gap-[30px]">
          <div v-for="(item, index) in Categories" :key="index"
            class="group relative px-[20px] py-[40px] bg-[#f9f9f9] rounded-[20px] mb-3">
            <NuxtLink :to="`${item.type === 0 ? '/industry/' : '/'}${item.slug}`">
              <dt class="text-base font-semibold leading-7 text-gray-900 text-center">
                <div class="flex items-center justify-center mx-auto">
                  <NuxtImg preload format="webp"
                    :src="`${useRuntimeConfig().public.catMediaURL}${item.cate_icon_image}`"
                    :alt="item.cate_icon_image_alt" width="500" height="345" class="max-w-full h-auto" />
                </div>
                <span class="font-description font-medium block text-[16px] leading-[20px]">{{ item.title }}</span>
              </dt>
            </NuxtLink>
          </div>

        </div>
      </div>
    </div>
    <LazyGeneralGreenInitiativeWrapper />
    <LazyGeneralSampleKitWrapper />

  </div>
</template>