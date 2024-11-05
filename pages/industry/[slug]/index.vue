<script setup>
const { $device } = useNuxtApp();

import { useRoute, useRouter } from 'vue-router';
const { setCategories } = useCategoriesStore();
const { hasCategories, Categories } = storeToRefs(useCategoriesStore());

const { setIsModalShow, setIsModalImage } = useGlobalStore();

const openModal = (image_path) => {
    setIsModalImage(image_path);
    setIsModalShow(true);
}

import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html';

const vCleanHtml = buildVueDompurifyHTMLDirective();

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;


const { data, status, error, refresh, clear } = await useAsyncData(
  'shapes-materials',
  () => $fetch(`${useRuntimeConfig().public.apiURL}/shapes-and-materials`, {
    params: {
      industry: slug,
      type: 0,
      cacheBust: new Date().getTime()
    }
  }),
  { initialCache: false }
);

console.log("industry data::", data?.value, status?.value, error?.value);

// if (!data.value || data.value == null) {
//     router.push('/404')
// }
if (!hasCategories.value) {
    const { data, status, error, refresh, clear } = await useAsyncData(
        'categories',
        () => $fetch(`${useRuntimeConfig().public.apiURL}/categories?type=1`),
        { initialCache: false }
    );

    if (data?.value) {
        setCategories(data?.value?.categories || []);
    }
}


// Create the image link dynamically
const featuredImageLink = computed(() => {
    return data.value?.category?.feature_image
        ? `${useRuntimeConfig().public.catMediaURL}${data.value.category.feature_image}`
        : '';
});

// Create the image link dynamically
const ctaImageLink = computed(() => {
    return data.value?.category?.cta_image
        ? `${useRuntimeConfig().public.catMediaURL}${data.value.category.cta_image}`
        : '';
});

// Create the image link dynamically
const ctaImageLink2 = computed(() => {
    return data.value?.category?.collection_image
        ? `${useRuntimeConfig().public.catMediaURL}${data.value.category.collection_image}`
        : '';
});

// Computed property to remove HTML tags for WhyUs Description
const cleanWhyUsDescription = computed(() => {
    return (data?.value?.category?.whyus_desc && data?.value?.category?.whyus_desc != 'null')
        ? data?.value?.category?.whyus_desc.replace(/<\/?[^>]+(>|$)/g, "")
        : '';
});

// Computed property to remove HTML tags
const cleanWhyUsDescription2 = computed(() => {
    return data?.value?.category?.whyus_desc
        ? data?.value?.category?.background_desc.replace(/<\/?[^>]+(>|$)/g, "")
        : '';
});




import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper and SwiperSlide components
import 'swiper/css'; // Import basic Swiper styles
import 'swiper/css/effect-coverflow'; // Import effect-specific styles
// import 'swiper/css/autoplay'; // Import autoplay-specific styles
import 'swiper/css/navigation';

import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules'; // Import modules

const img = useImage()
const backgroundStyles = computed(() => {
    const imgUrl = img('/images/industry/soap/gallery/soap-box-gallery2.jpg', { format: 'webp', width: '303px', height: '405px' })
    return { backgroundImage: `url('${imgUrl}')` }
});

// Set up the SEO metadata
useSeoMeta({
    title: data?.value?.category?.seo_title || 'Half Price Packaging',
    meta: [
        { name: 'description', content: data?.value?.category?.description, },
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: data?.value?.category?.seo_title || 'Half Price Packaging', },
        { property: 'og:title', content: data?.value?.category?.seo_title || 'Half Price Packaging', },
        { property: 'og:description', content: data?.value?.category?.description, },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}`, },
        { property: 'og:type', content: 'website', },
        { property: 'og:image', content: `https://www.halfpricepackaging.com/storage/cat_uploads/${data?.value?.category?.feature_image}`, },
        { name: 'twitter:card', content: 'summary_large_image', },
        { property: 'twitter:domain', content: 'halfpricepackaging.com', },
        { name: 'twitter:title', content: data?.value?.category?.seo_title || 'Half Price Packaging', },
        { name: 'twitter:description', content: data?.value?.category?.description, },
        { name: 'twitter:image', content: `https://www.halfpricepackaging.com/storage/cat_uploads/${data?.value?.category?.feature_image}`, },
    ],
});

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const reviewCount = getRandomNumber(40, 60);

// Dynamically append the schema
const appendSchema = () => {
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';

    if (data?.value?.category?.schema_script) {
        scriptTag.innerHTML = JSON.parse(data?.value?.category?.schema_script);
    } else {
        scriptTag.innerHTML = ''
    }

    return scriptTag;
};

// Injecting the JSON-LD schema dynamically using useHead()
useHead({
    link: [
        { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}`, },
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                "brand": {
                    "@type": "Brand",
                    "name": "HalfPricePackaging"
                },
                "name": data?.value?.category?.title,
                "mpn": data?.value?.category?.slug,
                "url": `https://www.halfpricepackaging.com${route.path}`,
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "1.00",
                    "highPrice": "10.00",
                    "priceCurrency": "USD",
                    "offerCount": "1000000",
                    "url": `https://www.halfpricepackaging.com${route.path}`,
                    "availability": "In Stock",
                    "eligibleQuantity": {
                        "@type": "QuantitativeValue",
                        "minValue": "300"
                    },
                    "seller": {
                        "@type": "Organization",
                        "name": "HalfPricePackaging"
                    }
                },
                "review": [
                    {
                        "@type": "Review",
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": data?.value?.category?.rating_value,
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Karisten"
                        },
                        "datePublished": formattedDate
                    }
                ],
                "image": [
                    `https://www.halfpricepackaging.com/storage/product_uploads/${data?.value?.category?.feature_image}`
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": data?.value?.category?.rating_value,
                    "reviewCount": reviewCount
                },
                "description": data?.value?.category?.description,
                "sku": data?.value?.category?.slug
            })
        },
    ]
});


</script>

<template>
    <div class="hpp__catPageWrapper">
        <div class="hpp__categoryBannerWrapper pt-[20px] md:pt-[30px] bg-[#f9fafb]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <div class="flex flex-wrap md:flex-no-wrap">
                    <div class="breadcrumbs__wrap w-full mb-[20px] px-[15px]">
                        <ul class="flex items-center gap-[10px]">
                            <li><a href="/" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg></a></li>
                            <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg></span></li>
                            <li><a href="/industries">Industry</a></li>
                            <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg></span></li>
                            <li><span>{{ data?.category?.title }} </span></li>
                        </ul>
                    </div>
                    <div class="content__wrap w-full md:w-[60%] mb-10 md:mb-0">
                        <div class="hpp__categoryBannerContentWrapper pl-0 md:pl-[15px] pr-0 md:pr-[50px]">
                            <div class="desc__wrap max-w-[600px]">
                                <h1
                                    class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 md:text-4xl">
                                    {{
                                        data?.category?.sub_title }}</h1>
                                <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">{{
                                    data?.category?.sub_text }}</p>
                                <!-- <div class="btn__wrapper"> -->
                                <!-- <NuxtLink to="/catalogue"
                                        class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[35px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                        Browse Our Catalogue</NuxtLink> -->
                                <!-- </div> -->
                            </div>
                            <div class="thumb__wrapper w-full max-w-[600px]">
                                <NuxtImg format="webp" :src="featuredImageLink" :alt="data?.category?.sub_title"
                                    width="600" class="max-w-full h-auto" sizes="600px xxs:412px xs:430px" />
                            </div>
                        </div>

                    </div>
                    <div class="form__wrapper w-full md:w-[40%]">
                        <h2
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 md:text-4xl mb-6 md:mb-6">
                            Get an Instant Quote</h2>
                        <ProductDetailBannerForm :title="data?.category?.sub_title" :products="data?.related_products" />
                        <div class="logos__wrapper">
                            <div class="flex items-center -mx-[15px]">
                                <div class="icon__wrap px-[15px]">
                                    <svg class="w-[140px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1050">
                                        <title id="title">Google Reviews</title>
                                        <g id="Google">
                                            <g id="Group">
                                                <g id="Google-01.eps">
                                                    <g id="Group-3">
                                                        <g class="st0">
                                                            <path id="Fill-1" class="fill-[#4885ed]"
                                                                d="M324.32,453.91h-121.67v36.28h86.29c-4.26,50.87-46.39,72.56-86.15,72.56-50.87,0-95.26-40.21-95.26-96.57s42.31-97.19,95.37-97.19c40.93,0,65.05,26.22,65.05,26.22l25.28-26.3s-32.45-36.29-91.62-36.29c-75.36,0-133.65,63.9-133.65,132.92s54.84,133.58,135.57,133.58c71.01,0,122.99-48.87,122.99-121.14,0-15.25-2.2-24.06-2.2-24.06h0" />
                                                        </g>
                                                    </g>
                                                    <path id="Fill-4" class="fill-[#db3236]"
                                                        d="M427.12,460.76c24.28,0,47.29,19.81,47.29,51.74s-22.91,51.63-47.4,51.63c-26.91,0-48.14-21.76-48.14-51.88s20.97-51.5,48.25-51.5ZM426.63,427.33c-49.37,0-84.76,38.96-84.76,84.41s34.32,85.8,85.34,85.8c46.19,0,84.02-35.63,84.02-84.81,0-56.37-44.01-85.4-84.6-85.4h0Z" />
                                                    <path id="Fill-5" class="fill-[#f4c20d]"
                                                        d="M611.12,460.76c24.28,0,47.29,19.81,47.29,51.74s-22.91,51.63-47.4,51.63c-26.91,0-48.14-21.76-48.14-51.88s20.96-51.5,48.25-51.5ZM610.63,427.33c-49.38,0-84.76,38.96-84.76,84.41s34.32,85.8,85.34,85.8c46.19,0,84.02-35.63,84.02-84.81,0-56.37-44.01-85.4-84.6-85.4h0Z" />
                                                    <path id="Fill-6" class="fill-[#4885ed]"
                                                        d="M798.97,461.14c22.4,0,45.41,19.41,45.41,52.55s-22.96,52.25-45.9,52.25c-24.36,0-47.03-20.07-47.03-51.93s23.54-52.87,47.52-52.87h0ZM795.66,427.33c-45.7,0-81.61,40.6-81.61,86.17,0,51.91,41.64,86.33,80.82,86.33,24.23,0,37.11-9.76,46.62-20.96v17.01c0,29.75-17.81,47.57-44.69,47.57s-38.99-19.59-43.52-30.7l-32.67,13.85c11.59,24.86,34.92,50.79,76.46,50.79,45.43,0,80.06-29.03,80.06-89.91v-154.97h-35.64v14.61c-10.96-11.98-25.95-19.79-45.83-19.79h0Z" />
                                                    <path id="Fill-7" class="fill-[#db3236]"
                                                        d="M1037.85,460.03c15.62,0,26.87,8.26,31.64,18.16l-76.57,31.82c-3.3-24.63,20.17-49.98,44.93-49.98ZM1036.35,427.33c-43.36,0-79.76,34.3-79.76,84.9,0,53.55,40.58,85.31,83.92,85.31,36.18,0,58.38-19.68,71.64-37.31l-29.56-19.55c-7.67,11.84-20.49,23.4-41.9,23.4-24.04,0-35.09-13.09-41.93-25.77l114.65-47.3-5.95-13.86c-11.08-27.15-36.91-49.81-71.11-49.81h0Z" />
                                                    <polygon id="Fill-8" class="fill-[#3cba54]"
                                                        points="904.32 593.34 941.96 593.34 941.96 341.17 904.32 341.17 904.32 593.34" />
                                                </g>
                                                <path id="Reviews" class="fill-[#6c6d70]"
                                                    d="M83.71,791.07v-33.43h9.84l22.13,33.43h15.22v-.72l-22.95-33.79.12-.6c5.47-1.51,10.01-4.5,13.64-8.95s5.45-9.55,5.45-15.28c0-5.01-1.19-9.51-3.57-13.49-2.38-3.98-5.64-7.08-9.78-9.31-4.14-2.23-8.71-3.34-13.7-3.34h-29.51v85.49h13.12ZM99.75,745.22h-16.04v-27.1h16.51c2.81,0,5.23.66,7.26,1.97,2.03,1.31,3.59,3,4.68,5.07,1.09,2.07,1.64,4.22,1.64,6.45,0,3.98-1.37,7.24-4.1,9.79-2.73,2.55-6.05,3.82-9.95,3.82h0ZM162.53,792.98c6.32,0,11.75-1.43,16.28-4.3,4.53-2.87,8.2-6.81,11.01-11.82h0l-10.89-5.25c-1.64,2.95-3.81,5.27-6.5,6.98-2.69,1.71-5.88,2.57-9.54,2.57-4.61,0-8.65-1.53-12.12-4.6-3.47-3.06-5.45-7.42-5.91-13.07h45.79c.23-1.67.35-3.06.35-4.18,0-5.89-1.15-11.18-3.45-15.88-2.3-4.7-5.66-8.4-10.07-11.1-4.41-2.71-9.62-4.06-15.63-4.06s-10.93,1.47-15.46,4.42c-4.53,2.95-8.06,6.91-10.6,11.88-2.54,4.97-3.81,10.37-3.81,16.18,0,6.13,1.31,11.64,3.92,16.54,2.62,4.9,6.25,8.74,10.89,11.52,4.65,2.79,9.9,4.18,15.75,4.18ZM177.87,753.46h-32.44c1.09-4.22,3.06-7.58,5.91-10.09,2.85-2.51,6.34-3.76,10.48-3.76,3.44,0,6.34.72,8.73,2.15s4.16,3.2,5.33,5.31c1.17,2.11,1.83,4.24,1.99,6.39h0ZM228.59,791.07l24.83-60.89h-14.05l-16.86,43.94h-.47l-16.51-43.94h-14.41l24.59,60.89h12.88ZM265.37,721.34c2.42,0,4.47-.86,6.15-2.57,1.68-1.71,2.52-3.8,2.52-6.27s-.84-4.56-2.52-6.27c-1.68-1.71-3.73-2.57-6.15-2.57s-4.47.86-6.15,2.57c-1.68,1.71-2.52,3.8-2.52,6.27s.84,4.56,2.52,6.27c1.68,1.71,3.73,2.57,6.15,2.57ZM271.81,791.07v-60.89h-12.88v60.89h12.88ZM310.82,792.98c6.32,0,11.75-1.43,16.28-4.3,4.53-2.87,8.2-6.81,11.01-11.82h0l-10.89-5.25c-1.64,2.95-3.81,5.27-6.5,6.98-2.69,1.71-5.88,2.57-9.54,2.57-4.61,0-8.65-1.53-12.12-4.6s-5.45-7.42-5.91-13.07h45.79c.23-1.67.35-3.06.35-4.18,0-5.89-1.15-11.18-3.45-15.88-2.3-4.7-5.66-8.4-10.07-11.1s-9.62-4.06-15.63-4.06-10.93,1.47-15.46,4.42c-4.53,2.95-8.06,6.91-10.6,11.88-2.54,4.97-3.81,10.37-3.81,16.18,0,6.13,1.31,11.64,3.92,16.54,2.62,4.9,6.25,8.74,10.89,11.52s9.9,4.18,15.75,4.18ZM326.16,753.46h-32.44c1.09-4.22,3.06-7.58,5.91-10.09,2.85-2.51,6.34-3.76,10.48-3.76,3.44,0,6.34.72,8.73,2.15s4.16,3.2,5.33,5.31c1.17,2.11,1.83,4.24,1.99,6.39h0ZM371.84,791.07l13.59-43.7h.35l13.7,43.7h13.59l19.09-60.89h-13.7l-12.06,43.58h-.47l-13.35-43.58h-13.23l-13.47,43.58h-.47l-12.06-43.58h-13.94l19.09,60.89h13.35ZM458.51,792.98c4.53,0,8.67-.8,12.41-2.39,3.75-1.59,6.7-3.84,8.84-6.75,2.15-2.91,3.22-6.27,3.22-10.09,0-4.46-1.5-8.22-4.51-11.28-3.01-3.06-7.44-5.35-13.29-6.87h0l-8.78-2.27c-2.89-.8-5.07-1.77-6.56-2.93-1.48-1.15-2.23-2.65-2.23-4.48s.98-3.46,2.93-4.66c1.95-1.19,4.37-1.79,7.26-1.79,6.01,0,10.15,2.35,12.41,7.04h0l11.24-5.01c-1.87-4.3-4.92-7.58-9.13-9.85-4.22-2.27-9.1-3.4-14.64-3.4-4.14,0-7.96.74-11.48,2.21-3.51,1.47-6.3,3.56-8.37,6.27s-3.1,5.85-3.1,9.43c0,4.62,1.56,8.44,4.68,11.46,3.12,3.02,7.07,5.13,11.83,6.33h0l7.14,1.79c3.9.96,6.79,2.07,8.67,3.34s2.81,3.02,2.81,5.25-1.09,4.04-3.28,5.19-4.88,1.73-8.08,1.73-6.19-.84-8.73-2.51-4.51-4.1-5.91-7.28h0l-11.48,5.13c1.8,4.78,4.88,8.7,9.25,11.76,4.37,3.06,9.99,4.6,16.86,4.6Z" />
                                                <polygon id="Star" class="fill-[#f4c20d]"
                                                    points="573.61 776.56 541.96 793.2 548.01 757.95 522.4 732.99 557.79 727.85 573.61 695.79 589.44 727.85 624.83 732.99 599.22 757.95 605.26 793.2 573.61 776.56" />
                                                <polygon id="Star1" data-name="Star" class="fill-[#f4c20d]"
                                                    points="694.44 776.56 662.79 793.2 668.84 757.95 643.23 732.99 678.62 727.85 694.44 695.79 710.27 727.85 745.66 732.99 720.05 757.95 726.1 793.2 694.44 776.56" />
                                                <polygon id="Star2" data-name="Star" class="fill-[#f4c20d]"
                                                    points="817.9 776.56 786.25 793.2 792.29 757.95 766.69 732.99 802.08 727.85 817.9 695.79 833.73 727.85 869.11 732.99 843.51 757.95 849.55 793.2 817.9 776.56" />
                                                <polygon id="Star3" data-name="Star" class="fill-[#f4c20d]"
                                                    points="936.11 776.56 904.45 793.2 910.5 757.95 884.89 732.99 920.28 727.85 936.11 695.79 951.93 727.85 987.32 732.99 961.71 757.95 967.76 793.2 936.11 776.56" />
                                                <polygon id="Star4" data-name="Star" class="fill-[#f4c20d]"
                                                    points="1059.56 776.56 1027.91 793.2 1033.96 757.95 1008.35 732.99 1043.74 727.85 1059.56 695.79 1075.39 727.85 1110.78 732.99 1085.17 757.95 1091.21 793.2 1059.56 776.56" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="icon__wrap px-[15px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1151.43 546.38"
                                        class="w-[140px]">
                                        <g>
                                            <path
                                                d="M302.28,100.06h116.35v21.66h-45.81v122.1h-25.11v-122.1h-45.62l.19-21.66ZM413.65,139.73h21.47v20.13h.38c.77-2.88,2.11-5.56,4.03-8.24s4.22-5.18,7.09-7.28c2.68-2.3,5.75-4.03,9.2-5.37,3.26-1.34,6.71-2.11,10.16-2.11,2.68,0,4.6.19,5.56.19.96.19,2.11.38,3.07.38v22.04c-1.53-.38-3.26-.58-4.98-.77-1.73-.19-3.26-.38-4.98-.38-3.83,0-7.48.77-10.93,2.3-3.45,1.53-6.33,3.83-9.01,6.71-2.49,3.07-4.6,6.71-6.13,11.12-1.53,4.41-2.3,9.58-2.3,15.33v49.45h-23l.38-103.51ZM580.02,243.82h-22.62v-14.57h-.38c-2.88,5.37-7.09,9.39-12.65,12.65s-11.31,4.79-17.06,4.79c-13.61,0-23.58-3.26-29.71-10.16-6.13-6.71-9.2-17.06-9.2-30.67v-66.13h23v63.83c0,9.2,1.73,15.72,5.37,19.36,3.45,3.83,8.43,5.75,14.76,5.75,4.79,0,8.82-.77,12.08-2.3s5.94-3.45,7.86-5.94c2.11-2.49,3.45-5.56,4.41-9.01s1.34-7.28,1.34-11.31v-60.38h23v104.08h-.19ZM619.13,210.46c.77,6.71,3.26,11.31,7.67,14.18,4.41,2.68,9.78,4.03,15.91,4.03,2.11,0,4.6-.19,7.28-.58s5.37-.96,7.67-1.92c2.49-.96,4.41-2.3,5.94-4.22s2.3-4.22,2.11-7.09c-.19-2.88-1.15-5.37-3.26-7.28-2.11-1.92-4.6-3.26-7.67-4.6-3.07-1.15-6.71-2.11-10.73-2.88-4.03-.77-8.05-1.73-12.27-2.68-4.22-.96-8.43-2.11-12.46-3.45s-7.48-3.07-10.73-5.56c-3.07-2.3-5.75-5.18-7.48-8.82-1.92-3.64-2.88-7.86-2.88-13.23,0-5.75,1.34-10.35,4.22-14.18,2.68-3.83,6.33-6.9,10.54-9.2,4.22-2.3,9.01-4.03,14.18-4.98s10.16-1.34,14.76-1.34c5.37,0,10.54.58,15.33,1.73s9.39,2.88,13.23,5.56c4.03,2.49,7.28,5.94,9.78,9.97,2.68,4.03,4.22,9.01,4.98,14.76h-23.96c-1.15-5.56-3.64-9.2-7.48-11.12-4.03-1.92-8.43-2.88-13.61-2.88-1.53,0-3.64.19-5.75.38-2.3.38-4.22.77-6.33,1.53-1.92.77-3.64,1.92-4.98,3.26s-2.11,3.26-2.11,5.56c0,2.88.96,4.98,2.88,6.71s4.41,3.07,7.67,4.41c3.07,1.15,6.71,2.11,10.73,2.88,4.03.77,8.24,1.73,12.46,2.68,4.22.96,8.24,2.11,12.27,3.45s7.67,3.07,10.73,5.56c3.07,2.3,5.75,5.18,7.67,8.63,1.92,3.45,2.88,7.86,2.88,12.84,0,6.13-1.34,11.31-4.22,15.72-2.88,4.22-6.52,7.86-10.93,10.54-4.41,2.68-9.58,4.6-14.95,5.94-5.56,1.15-10.93,1.92-16.29,1.92-6.52,0-12.65-.77-18.21-2.3-5.56-1.53-10.54-3.83-14.57-6.71-4.03-3.07-7.28-6.71-9.58-11.31-2.3-4.41-3.64-9.78-3.83-16.1h23.19v.19h.19ZM694.84,139.73h17.44v-31.44h23v31.24h20.7v17.06h-20.7v55.59c0,2.49.19,4.41.38,6.33.19,1.73.77,3.26,1.34,4.41.77,1.15,1.92,2.11,3.26,2.68,1.53.58,3.45.96,6.13.96,1.53,0,3.26,0,4.79-.19s3.26-.38,4.79-.77v17.83c-2.49.38-4.98.58-7.48.77-2.49.38-4.79.38-7.48.38-6.13,0-10.93-.58-14.57-1.73s-6.52-2.88-8.63-4.98c-2.11-2.3-3.45-4.98-4.22-8.24s-1.15-7.28-1.34-11.5v-61.34h-17.44v-17.44.38ZM772.09,139.73h21.66v14.18h.38c3.26-6.13,7.67-10.35,13.42-13.03s11.88-4.03,18.78-4.03c8.24,0,15.33,1.34,21.47,4.41,6.13,2.88,11.12,6.71,15.14,11.88,4.03,4.98,7.09,10.93,9.01,17.63s3.07,13.99,3.07,21.47-.96,13.8-2.68,20.32c-1.92,6.52-4.6,12.46-8.24,17.44s-8.24,9.01-13.99,12.08-12.27,4.6-19.93,4.6c-3.26,0-6.71-.38-9.97-.96-3.26-.58-6.52-1.53-9.58-2.88-3.07-1.34-5.94-3.07-8.43-5.18-2.68-2.11-4.79-4.6-6.52-7.28h-.38v51.95h-23v-142.61h-.19ZM852.4,191.87c0-4.6-.58-9.2-1.92-13.61-1.15-4.41-3.07-8.24-5.56-11.69s-5.56-6.13-9.01-8.24c-3.64-2.11-7.86-3.07-12.46-3.07-9.58,0-16.87,3.26-21.85,9.97-4.79,6.71-7.28,15.72-7.28,26.84,0,5.37.58,10.16,1.92,14.57s3.07,8.24,5.75,11.5c2.49,3.26,5.56,5.75,9.2,7.67,3.64,1.92,7.67,2.88,12.46,2.88,5.37,0,9.58-1.15,13.23-3.26s6.52-4.98,9.01-8.24c2.3-3.45,4.03-7.28,4.98-11.69.96-4.6,1.53-9.01,1.53-13.61ZM892.85,100.06h23v21.66h-23v-21.66ZM892.85,139.73h23v104.08h-23v-104.08ZM936.36,100.06h23v143.76h-23V100.06ZM1029.51,246.69c-8.24,0-15.72-1.34-22.23-4.22-6.52-2.88-11.88-6.52-16.48-11.31-4.41-4.79-7.86-10.73-10.16-17.44s-3.64-14.18-3.64-22.04,1.15-15.14,3.64-21.85c2.3-6.71,5.75-12.46,10.16-17.44,4.41-4.79,9.97-8.63,16.48-11.31,6.52-2.68,13.99-4.22,22.23-4.22s15.72,1.34,22.23,4.22c6.52,2.68,11.88,6.52,16.48,11.31,4.41,4.79,7.86,10.73,10.16,17.44,2.3,6.71,3.64,13.99,3.64,21.85s-1.15,15.33-3.64,22.04c-2.49,6.71-5.75,12.46-10.16,17.44-4.41,4.79-9.97,8.63-16.48,11.31-6.52,2.68-13.8,4.22-22.23,4.22ZM1029.51,228.48c4.98,0,9.58-1.15,13.23-3.26,3.83-2.11,6.71-4.98,9.2-8.43s4.22-7.48,5.37-11.69c1.15-4.41,1.73-8.82,1.73-13.42s-.58-8.82-1.73-13.23-2.88-8.24-5.37-11.69-5.56-6.13-9.2-8.24c-3.83-2.11-8.24-3.26-13.23-3.26s-9.58,1.15-13.23,3.26c-3.83,2.11-6.71,4.98-9.2,8.24-2.49,3.45-4.22,7.28-5.37,11.69s-1.73,8.82-1.73,13.23.58,9.01,1.73,13.42c1.15,4.41,2.88,8.24,5.37,11.69,2.49,3.45,5.56,6.33,9.2,8.43,3.83,2.3,8.24,3.26,13.23,3.26ZM1088.93,139.73h17.44v-31.44h23v31.24h20.7v17.06h-20.7v55.59c0,2.49.19,4.41.38,6.33.19,1.73.77,3.26,1.34,4.41.77,1.15,1.92,2.11,3.26,2.68,1.53.58,3.45.96,6.13.96,1.53,0,3.26,0,4.79-.19s3.26-.38,4.79-.77v17.83c-2.49.38-4.98.58-7.48.77-2.49.38-4.79.38-7.48.38-6.13,0-10.93-.58-14.57-1.73-3.64-1.15-6.52-2.88-8.63-4.98-2.11-2.3-3.45-4.98-4.22-8.24s-1.15-7.28-1.34-11.5v-61.34h-17.44v-17.44.38Z" />
                                            <path class="fill-[#00b67a]"
                                                d="M275.44,100.06h-105.23L137.82,0l-32.59,100.06-105.23-.19,85.11,61.91-32.59,100.06,85.11-61.91,85.11,61.91-32.39-100.06,85.11-61.72Z" />
                                            <path class="fill-[#005128]"
                                                d="M197.62,184.4l-7.28-22.62-52.52,38.14,59.8-15.53Z" />
                                        </g>
                                        <g>
                                            <path class="fill-[#00b67a]"
                                                d="M.04,330.75h215.63v215.63H.04v-215.63ZM233.64,330.75h215.63v215.63h-215.63v-215.63ZM467.24,330.75h215.63v215.63h-215.63v-215.63ZM700.85,330.75h215.63v215.63h-215.63v-215.63ZM934.45,330.75h215.63v215.63h-215.63v-215.63Z" />
                                            <path class="fill-white"
                                                d="M107.86,476.08l32.79-8.31,13.7,42.23-46.5-33.92ZM183.33,421.49h-57.73l-17.74-54.36-17.74,54.36h-57.73l46.72,33.69-17.74,54.36,46.72-33.69,28.75-20.66,46.5-33.69ZM341.46,476.08l32.79-8.31,13.7,42.23-46.5-33.92ZM416.93,421.49h-57.73l-17.74-54.36-17.74,54.36h-57.73l46.72,33.69-17.74,54.36,46.72-33.69,28.75-20.66,46.5-33.69ZM575.06,476.08l32.79-8.31,13.7,42.23-46.5-33.92ZM650.53,421.49h-57.73l-17.74-54.36-17.74,54.36h-57.73l46.72,33.69-17.74,54.36,46.72-33.69,28.75-20.66,46.5-33.69ZM808.66,476.08l32.79-8.31,13.7,42.23-46.5-33.92ZM884.13,421.49h-57.73l-17.74-54.36-17.74,54.36h-57.73l46.72,33.69-17.74,54.36,46.72-33.69,28.75-20.66,46.5-33.69ZM1042.26,476.08l32.79-8.31,13.7,42.23-46.5-33.92ZM1117.74,421.49h-57.73l-17.74-54.36-17.74,54.36h-57.73l46.72,33.69-17.74,54.36,46.72-33.69,28.75-20.66,46.5-33.69Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Banner End -->
        <HomeReviewLogosWrapper />

        <div class="hpp__catProductsWrapper pt-[50px] pb-[50px] bg-white">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <ClientOnly>
                    <div v-if="$device.isDesktop" class="flex items-center mb-[30px]">
                        <div class="flex items-center">
                            <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[10px]">{{
                                data?.category?.sub_title }} Products</h2>
                            <div class="divider__wrap flex bg-[#999999] h-[20px] w-[1px] mx-[15px]"></div>
                            <p class="font-description text-[#212529] text-[16px] leading-[24px] mb-0">We cover all your
                                packaging needs. Can't find yours?
                                <NuxtLink to="/catalogue"
                                    class="font-description ml-[10px] text-[#ef4b5f] text-[13px] uppercase font-bold inline-flex items-center">
                                    <span>View All</span><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="size-3 ml-1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </NuxtLink>
                            </p>
                        </div>
                    </div>

                    <div v-else class="block mb-[50px]">
                        <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[10px]">{{
                            data?.category?.sub_title }} Products</h2>
                        <p class="font-description text-[#212529] text-[16px] leading-[24px] mb-[20px]">We cover all
                            your
                            packaging needs. Can't find yours?</p>
                        <NuxtLink to="/catalogue"
                            class="font-description text-[#ef4b5f] text-[16px] uppercase font-bold inline-flex items-center">
                            <span>View All</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="4" stroke="currentColor" class="size-3 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </NuxtLink>
                    </div>
                </ClientOnly>

                <div class="flex flex-wrap">
                    <ClientOnly>
                        <div v-if="$device.isDesktop" class="categories__ListWrapper w-[300px] pr-[30px]">
                            <div class="cat__listWrapper mb-[50px]">
                                <h3
                                    class="font-headings text-[#212529] text-[24px] leading-[30px] font-bold pb-[15px] mb-[25px] border-b border-[#e5e5e5]">
                                    Industries
                                </h3>
                                <ul class="font-description font-medium text-gray-500 text-[14px]">

                                    <li class="mb-[10px]" v-for="(item, index) in Categories.slice(0, 25)" :key="index">
                                        <nuxt-link :to="`${item.type === 0 ? '/industry/' : '/'}${item.slug}`"
                                            class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                            {{ item.sub_title }}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="2.5" stroke="currentColor"
                                                class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>

                                        </nuxt-link>
                                    </li>

                                </ul>
                            </div>

                            <div class="view__catalogueWrapper">
                                <div class="view__catalogueWrap bg-bottom bg-no-repeat bg-contain overflow-hidden rounded-[32px] pt-[50px] px-[30px] pb-[110%] bg-[#a5a87a]"
                                    :style="backgroundStyles">
                                    <h3 class="font-headings text-white text-[24px] leading-[30px] font-bold mb-[25px]">
                                        Find a better price and we’ll beat it by up to 20%.
                                    </h3>
                                    <NuxtLink to="/catalogue"
                                        class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[6px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                        Browse Our Catalogue</NuxtLink>
                                </div>
                            </div>

                        </div>
                        <div v-else class="hidden mb-[50px]">
                            <div class="cat__navAccorion">
                                Industries
                            </div>
                            <div class="btn__wrap">
                                <NuxtLink to="/catalogue"
                                    class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[6px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                    Browse Our Catalogue</NuxtLink>
                            </div>
                        </div>
                    </ClientOnly>

                    <div
                        class="grid grid-cols-2 md:grid-cols-4 content-start gap-[20px] md:gap-[30px] w-full md:w-[calc(100%_-_300px)]">
                        <div class="item__wrap" v-for="(item, index) in data?.related_products" :key="index">
                            <NuxtLink :to="`/${item.primary_industry}/${item.slug}`"
                                class="relative flex flex-wrap md:flex-nowrap items-center sm:block bg-white md:px-4 md:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                                <div class="thumb__wrap w-full bg-[#efefef] rounded-[32px] overflow-hidden">
                                    <NuxtImg format="webp"
                                        :src="useRuntimeConfig().public.productMediaURL + item.feature_image"
                                        :alt="item.feature_image_alt" loading="lazy" fit="cover" width="336"
                                        height="336" class="w-full h-auto" />
                                </div>
                                <div class="desc__wrap py-[10px]">
                                    <div
                                        class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                        <span>Min. {{ item.max_order_quantity > 0 ? item.max_order_quantity : 200 }}
                                            units</span><span class="text-[18px] px-1">·</span><span>Delivery: 4
                                            weeks</span>
                                    </div>
                                    <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">
                                        {{ item.name }}</h3>
                                </div>
                            </NuxtLink>
                        </div>
                        <div v-if="data?.popup_products && data?.popup_products?.length > 0" class="item__wrap"
                            v-for="(item, index) in data?.popup_products" :key="index">
                            <a @click="openModal(item.image_path)"
                                class="relative flex flex-wrap md:flex-nowrap items-center sm:block bg-white md:px-4 md:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                                <div class="thumb__wrap w-full bg-[#efefef] rounded-[32px] overflow-hidden">
                                    <NuxtImg format="webp"
                                        :src="`https://www.halfpricepackaging.com/${item.image_path}`"
                                        :alt="item.image_alt" loading="lazy" fit="cover" width="336" height="336"
                                        class="w-full h-auto" />
                                </div>
                                <div class="desc__wrap py-[10px]">
                                    <div
                                        class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                                        <span>Min. 200
                                            units</span><span class="text-[18px] px-1">·</span><span>Delivery: 4
                                            weeks</span>
                                    </div>
                                    <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">
                                        {{ item.name }}</h3>
                                </div>
                            </a>
                        </div>
                        <div class="item__wrap">
                            <div
                                class="relative flex flex-wrap items-center p-[20px] group rounded-[32px] transition-all duration-300 bg-gray-100 h-full">
                                <div class="desc__wrap">
                                    <h3 class="font-headings text-[24px] leading-[30px] font-bold mb-6">
                                        Explore all {{ data?.category?.sub_title }} Products</h3>
                                    <div class="btn__wrap">
                                        <NuxtLink to="/catalogue"
                                            class="font-description block ease-in-out duration-[0.3s] text-[#ffffff] text-sm bg-[#bc3042] rounded-[6px] py-[8px] px-[30px] border border-[#d4486f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f] text-center">View All</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Products End -->

        <div class="hpp__catGalleryWrapper pt-[50px] pb-[100px] bg-white">
            <div class="container mx-auto px-[15px]">

                <div class="flex flex-wrap justify-center">
                    <div class="text-center basis-full mb-[50px] max-w-2xl">
                        <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[15px]">
                            {{ data?.category?.sub_title }} Gallery</h2>
                    </div>
                </div>

            </div>

            <div class="hpp__galleryCarouselWrap">
                <div class="swiper__carouselWrapper relative">
                    <ClientOnly fallback-tag="span" fallback="Loading Carousel...">
                        <Swiper
                            :navigation="{ enabled: true, prevEl: '.swiper__prevButton', nextEl: '.swiper__nextButton' }"
                            :loop="true" :centeredSlides="true" slides-per-view="4" :space-between="0"
                            :modules="[EffectCoverflow, Navigation]" effect="coverflow" :coverflowEffect="{
                                rotate: 0,
                                stretch: 0,
                                depth: 250,
                                modifier: 1,
                                slideShadows: false
                            }">
                            <!-- Repeat this block for each SwiperSlide -->
                            <SwiperSlide v-for="(image, index) in data?.related_products" :key="index">
                                <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                                    <NuxtImg @click="openModal(image.feature_image_path)" format="webp"
                                        :src="`${useRuntimeConfig().public.productMediaURL}${image.feature_image}`"
                                        :alt="image.feature_image_alt" width="334" height="450" loading="lazy"
                                        fit="cover" class="w-full h-auto cursor-pointer" />
                                    <!-- <UButton label="" @click="isOpen = true" />

                                    <UModal v-model="isOpen" prevent-close>
                                        <UCard
                                            :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                            <template #header>
                                                <div class="flex items-center justify-between">
                                                    <h3
                                                        class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                                        Modal
                                                    </h3>
                                                    <UButton color="gray" variant="ghost"
                                                        icon="i-heroicons-x-mark-20-solid" class="-my-1"
                                                        @click="isOpen = false" />
                                                </div>
                                            </template>

<Placeholder class="h-32" />
</UCard>
</UModal> -->
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </ClientOnly>
                    <!-- Custom Previous and Next Buttons -->

                    <button aria-label="previous"
                        class="swiper__prevButton rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 left-[2rem] group z-[9]"><svg
                            stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                            class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg></button>
                    <button aria-label="next"
                        class="swiper__nextButton rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 right-[2rem] group z-[9]"><svg
                            stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                            class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg></button>
                </div>
            </div>

        </div>
        <!-- Gallery Entry End -->

        <LazyGeneralInstantPricesWrapper />
        <!-- Instant Pricing Form End -->

        <div class="hpp__whyChooseUsContentWrapper pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px] bg-white">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">

                <div class="flex flex-wrap md:flex-nowrap items-center mb-[50px] md:mb-[100px]"
                    v-if="data?.category?.whyus_title && data?.category?.whyus_title !== 'null' && data?.category?.whyus_desc !== null">
                    <div class="thumb__wrapper w-full md:w-[45%] px-0 md:px-[15px] mb-6 md:mb-0">
                        <div class="thumb__wrap rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" :src="ctaImageLink" width="556" height="363"
                                :alt="data?.category?.cta_image_alt" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                    </div>
                    <div class="desc__wrapper w-full md:w-[55%] pl-0 md:pl-[70px] pr-0 md:pr-[15px]">
                        <h2
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {{
                                data?.category?.whyus_title }}</h2>
                        <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">{{
                            cleanWhyUsDescription }}</p>
                        <div class="btn__wrapper">
                            <NuxtLink to="#instantFormWrapper"
                                class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[6px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                Get Custom Quote</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap items-center"
                    v-if="data?.category?.background_title && data?.category?.background_title != 'null'">
                    <div class="desc__wrapper w-full md:w-[55%] pl-0 md:pl-[15px] pr-0 md:pr-[70px] order-2 md:order-1">
                        <h2
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {{
                                data?.category?.background_title }}</h2>
                        <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">{{
                            cleanWhyUsDescription2 }}</p>
                        <div class="btn__wrapper">
                            <NuxtLink to="#instantFormWrapper"
                                class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[6px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                Get Custom Quote</NuxtLink>
                        </div>
                    </div>
                    <div class="thumb__wrapper w-full md:w-[45%] px-0 md:px-[15px] mb-6 md:mb-0 order-1 md:order-2">
                        <div class="thumb__wrap rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" :src="ctaImageLink2" width="556" height="363"
                                :alt="data?.category?.collection_image_alt" loading="lazy" fit="cover"
                                class="w-full h-auto" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Why Choose Us End -->

        <LazyIndustryMoreInfoWrapper :title="data?.category?.sub_title" :content="data?.category?.seo_content" />
        <!-- More Info End -->

        <LazyGeneralFaqWrapper :faqs="data?.category?.faq"
            v-if="data?.category?.faq && data?.category?.faq[0]?.question != ''" />

        <LazyGeneralSampleKitWrapper />
        <!-- Instant Pricing Form End -->
        <!-- Dynamic BreadCrumb Schema Script -->
        <div v-html="data?.category?.schema_script"></div>
    </div>
</template>

<style scoped>
/* Add some basic styling if necessary */
</style>
