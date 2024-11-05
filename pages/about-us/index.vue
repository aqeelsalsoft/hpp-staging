<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

useSeoMeta({
    title: "About Us | Half Price Packaging",
    meta: [
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: "About Us | Half Price Packaging" },
        { name: 'description', content: "Know much more about Half Price Packaging through about us where you can know about our work, growth, and quality standards that we use to manufacture your custom box." },
        { property: 'og:title', content: "About Us | Half Price Packaging" },
        { property: 'og:description', content: "Know much more about Half Price Packaging through about us where you can know about our work, growth, and quality standards that we use to manufacture your custom box." },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: "https://www.halfpricepackaging.com/_nuxt/img/about.233bc5d.webp" },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'halfpricepackaging.com' },
        { name: 'twitter:title', content: "About Us | Half Price Packaging" },
        { name: 'twitter:description', content: "Know much more about Half Price Packaging through about us where you can know about our work, growth, and quality standards that we use to manufacture your custom box." },
        { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_nuxt/img/about.233bc5d.webp" },
    ],
});

useHead({
    link: [
        { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
    ],
});

</script>

<template>
    <div class="hpp__aboutUsPageWrapper bg-white">

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
                    <li><span>About Us</span></li>
                </ul>
            </div>
        </div>

        <div class="section__headerWrap">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <div class="inner__wrap flex flex-wrap items-center">
                    <div class="content__wrapper w-full md:w-[55%] pr-0 md:pr-[50px] mb-6 md:mb-0">
                        <h1
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
                            About
                            Us</h1>
                        <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[40px]">We give your
                            product the attention they deserve.</p>
                        <div class="btn__wrapper flex">
                            <!-- <NuxtLink to="#hpp__teamSection" -->
                            <NuxtLink :to="{path: '', hash: '#hpp__teamSection'}"
                                class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[13px] md:text-[14px] bg-[#bc3042] hover:bg-[#ef4b5f] rounded-[6px] py-[6px] md:py-[8px] px-[35px] md:px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                Meet The Team</NuxtLink>
                            <!-- <NuxtLink to="#hpp__locationsSection" -->
                            <NuxtLink :to="{path: '', hash: '#hpp__locationsSection'}"
                                class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[13px] md:text-[14px] bg-[#bc3042] hover:bg-[#ef4b5f] rounded-[6px] py-[6px] md:py-[8px] px-[35px] md:px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f] ml-[10px]">
                                Location</NuxtLink>
                        </div>
                    </div>
                    <div class="thumb__wrapper w-full md:w-[45%] text-right">
                        <NuxtImg preload format="webp" src="/images/about-us/about-banner-thumb.jpg"
                            alt="Banner Box By Material" width="488" height="417"
                            class="max-w-full h-auto inline-block" />
                    </div>
                </div>
            </div>
        </div>
        <LazyHomeReviewLogosWrapper />
        <LazyAboutGroupContentWrapper />
        <LazyAboutCompanyCTAWrapper />
        <LazyAboutTeamWrapper />
        <LazyAboutLocationsWrapper />
        <LazyAboutWhyChooseUsWrapper />
        <LazyGeneralSampleKitWrapper />
    </div>
</template>

<style lang="scss"></style>