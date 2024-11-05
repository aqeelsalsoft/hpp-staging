<script setup>
import { useRoute } from 'vue-router';
import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html';

const vCleanHtml = buildVueDompurifyHTMLDirective();


const route = useRoute();
const slug = route.params.slug;

const { data, status, error, refresh, clear } = await useAsyncData(
  'blog-slug',
  () => $fetch(`${useRuntimeConfig().public.apiURL}/get-post-by-slug/${slug}`, {
    params: {
      cacheBust: new Date().getTime() // Cache-busting parameter
    }
  }),
  { initialCache: false }
);

// Set up the SEO metadata
useSeoMeta({
    title: data?.value?.seo_title || 'Half Price Packaging',
    meta: [
        { name: 'description', content: data?.value?.description, },
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: data?.value?.seo_title || 'Half Price Packaging', },
        { property: 'og:title', content: data?.value?.seo_title || 'Half Price Packaging', },
        { property: 'og:description', content: data?.value?.description, },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}`, },
        { property: 'og:type', content: 'website', },
        { property: 'og:image', content: `https://www.halfpricepackaging.com/storage/post_images/${data?.value?.image}`, },
        { name: 'twitter:card', content: 'summary_large_image', },
        { property: 'twitter:domain', content: 'halfpricepackaging.com', },
        { name: 'twitter:title', content: data?.value?.seo_title || 'Half Price Packaging', },
        { name: 'twitter:description', content: data?.value?.description, },
        { name: 'twitter:image', content: `https://www.halfpricepackaging.com/storage/post_images/${data?.value?.image}`, },
    ],
});

// Utility function to get the current date
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

// Use useHead to inject dynamic schema in <head>
useHead({
    link: [
        {
            rel: 'canonical',
            href: `https://www.halfpricepackaging.com${route.path}`,
        },
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": data?.value?.title,
                "description": data?.value?.meta_description,
                "image": [
                    `https://www.halfpricepackaging.com/storage/post_images/${data?.value?.image}`
                ],
                "datePublished": `${formattedDate}T09:20:00+08:00`,
                "dateModified": `${formattedDate}T09:20:00+08:00`,
                "author": [
                    {
                        "@type": "Person",
                        "name": data?.value?.author_name,
                        "url": "https://twitter.com/william_hpp"
                    }
                ],
            })
        }
    ]
});

</script>

<template>
    <div class="hpp__blogListingPageWrapper bg-white">

        <div class="breadcrumbs__wrap pt-[20px] pb-[50px] md:py-[50px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
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
                    <li>
                        <NuxtLink to="/blog" aria-label="Blog Page Link">Blog</NuxtLink>
                    </li>
                    <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg></span></li>
                    <li><span>{{ data?.title }}</span></li>
                </ul>
            </div>
        </div>

        <div class="section__headerWrap md:mb-[50px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <div class="inner__wrap flex flex-wrap items-center border-b border-[#e5e5e5] pb-[50px] md:pb-[100px]">
                    <div class="content__wrapper w-full md:w-[50%] md:pr-[50px] mb-[50px] md:mb-0">
                        <div class="post__categoriesWrapper mb-4">
                            <span
                                class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-description font-normal text-gray-600 ring-1 ring-inset ring-gray-500/10">{{
                                data?.category_name }}</span>
                        </div>
                        <h1
                            class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
                            {{ data?.title }}</h1>
                        <div class="post__metaWrapper flex items-center mb-[30px]">
                            <span class="icon__wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-4 text-gray-600">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                </svg>

                            </span>
                            <span
                                class="inline-block pl-[10px] font-description text-[15px] leading-[24px] text-gray-600">{{
                                    data?.created_at }}</span>
                        </div>
                        <div class="post__authorWrap">
                            <ul role="list" class="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2">
                                <li>
                                    <div class="flex items-center gap-x-6">
                                        <NuxtImg format="webp" src="/images/author-william-jason.jpg"
                                            alt="Why Choose Us Thumbnail" loading="lazy" width="70" height="70"
                                            fit="cover" class="h-16 w-16 rounded-full" />
                                        <div>
                                            <h3
                                                class="font-headings text-base font-semibold leading-6 tracking-tight text-gray-900 mb-0">
                                                {{ data?.author_name }}</h3>
                                            <p
                                                class="font-description text-sm font-semibold leading-6 uppercase text-[#ef4b5f]">
                                                <span>Last Updated: {{ data?.updated_at }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="thumb__wrapper w-full md:w-[50%] md:text-right">
                        <NuxtImg preload format="webp" :src="`${useRuntimeConfig().public.postMediaURL}${data?.image}`"
                            alt="A Guide to Cannabis Seed Packaging: Everything You Need to Know" width="654"
                            height="350" fit="cover"
                            class="max-w-full h-auto inline-block rounded-[32px] shadow-lg shadow-[0_0_80px_-20px_rgba(0,0,0,0.3)]" />
                    </div>
                </div>
            </div>
        </div>

        <div class="blog__detailWrapper pt-[30px] md:pt-[50px] pb-[25px] md:pb-[50px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">

                <div v-clean-html="data?.post" class="blog__detailContentWrap max-w-[740px] mx-auto"></div>

                <div class="mt-[40px] md:mt-[80px] border-b border-[#e5e5e5]"></div>
            </div>
        </div>

        <div class="blog__listWrapper pt-[25px] md:pt-[50px] pb-[50px] md:pb-[100px] ">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">

                <div class="inner__wrap w-full md:w-[800px] mx-auto mb-[50px] text-left md:text-center">
                    <h1 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Related Blog
                        Posts</h1>
                    <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">Find a variety
                        of informative and engaging blogs, articles, and other resources to help you stay up-to-date on
                        the latest industry trends and insights.</p>

                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px]">

                    <article
                        class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/designing-limited-edition-packaging.webp"
                                    alt="Banner Box By Material" loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">Designing Limited Edition Packaging: Essential Tips for Impactful
                                    Results</NuxtLink>
                            </h2>
                            <NuxtLink to="#" class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor"
                                    class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article
                        class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/pr-boxes.webp" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">How to Maximize the Benefits of PR Boxes in Your Marketing Strategy
                                </NuxtLink>
                            </h2>
                            <NuxtLink to="#" class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor"
                                    class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article
                        class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/inspiring-yellow-packaging-ideas.jpg"
                                    alt="Banner Box By Material" loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">10 Inspiring Packaging Ideas to Go Yellow This Season</NuxtLink>
                            </h2>
                            <NuxtLink to="#" class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor"
                                    class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                </div>

            </div>
        </div>

        <LazyGeneralSampleKitWrapper />
    </div>
</template>

<style lang="scss">
.blog__detailWrapper {
    .blog__detailContentWrap {
        h2 {
            @apply font-headings text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-[40px] mb-3;
        }

        h3 {
            @apply font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-[20px] mb-2;
        }

        p {
            @apply font-description text-[16px] leading-[24px] text-gray-600 mb-[20px];
        }

        img {
            @apply max-w-full h-auto rounded-[32px];
        }
        a{
            @apply text-[#ef4b5f];
        }
    }
}
</style>
