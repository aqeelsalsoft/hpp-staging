<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

useSeoMeta({
    title: "Refund and Cancellation Policy: Your Guide to Hassle-Free Transactions",
    meta: [
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: "Refund and Cancellation Policy: Your Guide to Hassle-Free Transactions" },
        { name: 'description', content: "Know our transparent refund &amp; cancellation policy at Half Price Packaging. Ensuring peace of mind for your custom packaging orders." },
        { property: 'og:title', content: "Refund and Cancellation Policy: Your Guide to Hassle-Free Transactions" },
        { property: 'og:description', content: "Know our transparent refund &amp; cancellation policy at Half Price Packaging. Ensuring peace of mind for your custom packaging orders." },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: "https://www.halfpricepackaging.com/_nuxt/img/Refund-policy-banner.1fcb6ea.webp" },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'halfpricepackaging.com' },
        { name: 'twitter:title', content: "Refund and Cancellation Policy: Your Guide to Hassle-Free Transactions" },
        { name: 'twitter:description', content: "Know our transparent refund &amp; cancellation policy at Half Price Packaging. Ensuring peace of mind for your custom packaging orders." },
        { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_nuxt/img/Refund-policy-banner.1fcb6ea.webp" },
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
                    <li><a href="#" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg></a></li>
                    <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg></span></li>
                    <li><span>Refund / Cancellation Policy</span></li>
                </ul>
            </div>
        </div>
        <div class="section__headerWrap bg-gray-100 py-[30px] md:py-[50px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <div class="inner__wrap flex flex-wrap">
                    <div class="content__wrapper w-full">
                        <h1
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-0">
                            Refund / Cancellation Policy</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="hpp__pageContentWrapper pt-[30px] md:pt-[50px] pb-[50px] md:pb-[100px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">We
                    acknowledge that you may want to return a product to us or cancel your orders due to some reason. We
                    have formed a policy to assist you with any issue that you come across whether it is returning
                    merchandise or canceling orders. This policy applies to all orders submitted to Half Price
                    Packaging. This policy does not disturb any legal privileges you might have under Consumer
                    Protection Acts.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Refunds &
                    Returns</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">As the
                    products and services offered by Half Price Packaging are tailored according to the customer's
                    instructions and guidelines, it is suggested that the client must report to the company if they find
                    supplied products are not according to their specifications or faulty. You can send feedback at
                    <NuxtLink to="mailto:orders@halfpricepackaging.com">orders@halfpricepackaging.com</NuxtLink> within
                    3 working days after you receive the order.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Company Side
                    Defects</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">If the
                    product fault is proven, the company will be liable to reprint the complete order. The company's
                    decision on determining the defect and its responsibility will be final. The customer will ship back
                    the entire order to the company within 7 working days and bear the shipping cost on his own.
                    Customers will provide documents and evidence of defects by providing digital photographs to get
                    orders reprinted.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Client-Side
                    Defects</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[30px] md:mb-[40px]">If the
                    ordered product proved defective on the customer’s part and still wants to get cash refunded, they
                    will be bound to send us the whole order. The shipping, product setup, printing, and billing costs
                    will be deducted while refunding.</p>

                <h2 class="font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-3">Order
                    Cancellation</h2>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">We forward the printing
                    jobs to the press department as soon as you accept the proof. After the approval of the proof, you
                    have only 4 hours to cancel your order. A cancellation fee which is 5% of the total order cost will
                    be charged if the order is canceled after processing. Order cancellation is to be informed within 12
                    to 24 hours.</p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">If you want to cancel
                    your order after it has been processed in the press, there will be No Refund. On the other hand, we
                    can provide you with a warehouse facility free of cost. We can ship the order at the time of need.
                </p>
                <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[20px]">For any query about our
                    refund and order cancellation policy or shipping policy, you can reach us via our online chat
                    support, where our sales and customer care representatives can help you in the best way. You can
                    also call us at <NuxtLink to="tel:+18662252112">866-225-2112</NuxtLink> or mail us at <NuxtLink
                        to="mailto:orders@halfpricepackaging.com">orders@halfpricepackaging.com</NuxtLink> in this
                    respect.</p>
            </div>
        </div>
        <LazyGeneralSampleKitWrapper />
    </div>
</template>