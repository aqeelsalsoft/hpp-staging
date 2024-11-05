<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

useSeoMeta({
    title: "Shipping Policy | Half Price Packaging",
    meta: [
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: "Shipping Policy | Half Price Packaging" },
        { name: 'description', content: "Discover our transparent shipping policy, and get insights into our reliable delivery process for custom packaging services." },
        { property: 'og:title', content: "Shipping Policy | Half Price Packaging" },
        { property: 'og:description', content: "Discover our transparent shipping policy, and get insights into our reliable delivery process for custom packaging services." },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
        { property: 'og:type', content: 'website' },
        // { property: 'og:image', content: "https://www.halfpricepackaging.com/_nuxt/img/shipping.6863077.webp" },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'halfpricepackaging.com' },
        { name: 'twitter:title', content: "Shipping Policy | Half Price Packaging" },
        { name: 'twitter:description', content: "Discover our transparent shipping policy, and get insights into our reliable delivery process for custom packaging services." },
        // { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_nuxt/img/shipping.6863077.webp" },
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

        <div class="breadcrumbs__wrap py-[20px] py-[50px]">
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
                    <li><span>Shipping Policy</span></li>
                </ul>
            </div>
        </div>
        <div class="section__headerWrap bg-gray-100 py-[30px] py-[50px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <div class="inner__wrap flex flex-wrap">
                    <div class="content__wrapper w-full">
                        <h1
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-0">
                            Shipping Policy</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="hpp__pageContentWrapper pt-[30px] md:pt-[50px] pb-[50px] md:pb-[100px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">
                    <NuxtLink to="/">Half Price Packaging</NuxtLink> offers Safe and Free shipping services across the
                    USA, Canada, Australia, and the UK. Our clients are entitled to free shipping in these regions.
                    However, we charge a very minimal shipping fee on all kinds of printing and packaging products
                    outside of these countries.
                </p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Standard
                    Turnaround Time</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Our standard
                    turnaround time is just 8 to 10 working days. We count this time after the approval of digital
                    proofs of your ordered products from your side.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Wrong Address
                </h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">Suppose the
                    client provides the wrong address that is not sufficient for Courier Company. In that case, the
                    shipment will be returned to us, and the client will be liable to bear reshipment costs for
                    delivering the order to the updated address.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Unclaimed
                    Shipments</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">If a
                    shipment goes unclaimed by the client, it will be returned to the company, and they will be liable
                    to pay for the reshipment of the order.<br />Half Price Packaging will not be liable for:</p>

                <ol class="!list-decimal pl-[20px]">
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Delays instigated by
                        courier companies.</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Delays due to
                        unavoidable weather or political circumstances.</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Delays initiated by
                        government authorities like customs and clearance departments.</li>
                    <li class="font-description text-[16px] leading-[24px] text-gray-600 mb-[10px]">Delays because of
                        improper order details and shipping addresses provided by clients.</li>
                </ol>

            </div>
        </div>
        <LazyGeneralSampleKitWrapper />
    </div>
</template>