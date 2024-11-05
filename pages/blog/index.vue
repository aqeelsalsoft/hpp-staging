<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const allPosts = ref([])
const { data, status, error, refresh, clear } = await useAsyncData(
    'blogs',
    () => $fetch(`${useRuntimeConfig().public.apiURL}/articles?page=1&type=1`),
    { initialCache: false }
);

allPosts.value = data?.value;


const route = useRoute();

useSeoMeta({
    title: "Packaging Blog: Tips, Trends, and Case Studies",
    meta: [
        { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
        { name: 'title', content: "Packaging Blog: Tips, Trends, and Case Studies" },
        { name: 'description', content: "Stay informed and inspired with our custom packaging blog at Half Price Packaging. Discover trends, tips, and industry insights." },
        { property: 'og:title', content: "Packaging Blog: Tips, Trends, and Case Studies" },
        { property: 'og:description', content: "Stay informed and inspired with our custom packaging blog at Half Price Packaging. Discover trends, tips, and industry insights." },
        { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}` },
        { property: 'og:type', content: 'website' },
        // { property: 'og:image', content: "https://www.halfpricepackaging.com/_nuxt/img/about.233bc5d.webp" },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'halfpricepackaging.com' },
        { name: 'twitter:title', content: "Packaging Blog: Tips, Trends, and Case Studies" },
        { name: 'twitter:description', content: "Stay informed and inspired with our custom packaging blog at Half Price Packaging. Discover trends, tips, and industry insights." },
        // { name: 'twitter:image', content: "https://www.halfpricepackaging.com/_nuxt/img/about.233bc5d.webp" },
    ],
});

useHead({
    link: [
        { rel: 'canonical', href: `https://www.halfpricepackaging.com${route.path}` },
    ],
});

const goToPage = async (url) => {
  if (!url) return;
  const { data } = await useFetch(url + '&type=1');

  allPosts.value = data?.value;
  const targetElement = document.getElementById('blog-posts');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

</script>
<template>
    <div class="hpp__blogListingPageWrapper bg-white">

        <div class="breadcrumbs__wrap pt-[30px] pb-[50px] md:py-[50px]">
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
                    <li><span>Blog</span></li>
                </ul>
            </div>
        </div>

        <div class="section__headerWrap mb-[50px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <div class="inner__wrap w-full md:w-[800px] mx-auto mb-[50px] text-left md:text-center">
                    <h1
                        class="font-headings text-[36px] leading-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Read inspiring
                        stories about</h1>
                    <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">Find a variety
                        of informative and engaging blogs, articles, and other resources to help you stay up-to-date on
                        the latest industry trends and insights.</p>

                </div>
            </div>
        </div>

        <div id="blog-posts" class="blog__listWrapper pt-[20px] md:pt-[50px] pb-[50px] md:pb-[100px]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">

                <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px]">

                    <article v-for="post in allPosts?.data" :key="post.id"
                        class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink :to="`/blog/${post.slug}`" class="block relative pt-[55%]">
                                <NuxtImg format="webp" :src="`${useRuntimeConfig().public.postMediaURL}${post.image}`"
                                    :alt="post.falt_tag" loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">{{
                                            post.postcategory[0]?.title || '' }}</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
                            </h2>
                            <NuxtLink :to="`/blog/${post.slug}`" class="group text-[#ef4b5f] inline-flex items-center">
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
                <div class="flex justify-end mt-4 space-x-2 ml-auto"
                      v-if="allPosts?.meta?.links && allPosts?.meta?.links.length > 0">
                      <button v-for="(link, index) in allPosts?.meta?.links" :key="index" class="px-4 py-2 rounded-md" :class="{
                        'bg-blue-500 text-white': link.active,
                        'bg-gray-200': !link.active,
                        'opacity-50 cursor-not-allowed': link.url === null
                      }" :disabled="link.url === null" @click="goToPage(link.url)">
                        <span v-html="link.label"></span>
                      </button>
                    </div>
            </div>
        </div>

        <LazyGeneralSampleKitWrapper />
    </div>
</template>
