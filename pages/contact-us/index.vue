<script setup>

import { useRoute } from 'vue-router';

const route = useRoute();

useSeoMeta({
    title: "Contact Us | Half Price Packaging",
    meta: [
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: "Contact Us | Half Price Packaging" },
        { name: 'description', content: "Get top-tier custom packaging services from Half Price Packaging. Contact us today for expert solutions tailored to your brand to stand out." },
        { property: 'og:title', content: "Contact Us | Half Price Packaging" },
        { property: 'og:description', content: "Get top-tier custom packaging services from Half Price Packaging. Contact us today for expert solutions tailored to your brand to stand out." },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
        { property: 'og:type', content: 'website' },
        // { property: 'og:image', content: "https://www.halfpricepackaging.com/_nuxt/img/about.233bc5d.webp" },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'halfpricepackaging.com' },
        { name: 'twitter:title', content: "Contact Us | Half Price Packaging" },
        { name: 'twitter:description', content: "Get top-tier custom packaging services from Half Price Packaging. Contact us today for expert solutions tailored to your brand to stand out." },
        // { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_nuxt/img/about.233bc5d.webp" },
    ],
});

useHead({
    link: [
        { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
    ],
});
</script>

<template>
    <div class="hpp__contactUsPageWrapper bg-white">

        <div class="breadcrumbs__wrap py-[20px]">
            <div class="container mx-auto px-[15px]">
                <ul class="flex items-center gap-[10px]">
                    <li>
                        <NuxtLink to="/" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg></NuxtLink>
                    </li>
                    <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg></span></li>
                    <li><span>Contact Us</span></li>
                </ul>
            </div>
        </div>

        <div class="section__headerWrap bg-gray-100 py-[30px] md:py-[50px]">
            <div class="md:container md:mx-auto px-[20px] px-[15px]">
                <div class="inner__wrap flex flex-wrap">
                    <div class="content__wrapper w-full">
                        <h1
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
                            Contact Us</h1>
                        <p class="font-description text-[16px] leading-[24px] text-gray-600">Let's create together</p>
                    </div>
                </div>
            </div>
        </div>

        <LazyContactMapWrapper />
        <LazyContactCompanyDetailWrapper />
        <LazyGeneralFaqWrapper />
        <LazyGeneralSampleKitWrapper />
    </div>
</template>

<style lang="scss" scoped></style>
