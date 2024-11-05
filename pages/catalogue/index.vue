<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/images/industry/soap/gallery/soap-box-gallery2.jpg', { format: 'webp', width: '303px', height: '405px' })
  return { backgroundImage: `url('${imgUrl}')` }
})

const currentPage = ref(1);
const perPage = ref(10);
const totalPages = ref(1);
const isProcessing = ref(false);
const selected = ref(false);
const industries = ref([]);
const shapes = ref([]);
const tags = ref(null);
const loading = ref(false);
const allProducts = ref([]);
const products = ref([]);
const oldProducts = ref([]);
const flag = ref(false);
isProcessing.value = true;
const { data, status, error, refresh, clear } = await useAsyncData(
  'products',
  () => $fetch(`${useRuntimeConfig().public.apiURL}/products`, {
    params: {
      page: 1,
      cacheBust: new Date().getTime() // Cache-busting parameter
    }
  }),
  { initialCache: false }
);
allProducts.value = data?.value;
isProcessing.value = false;

if (true) {
  const { data: categoriesData, status: categoriesStatus, error: categoriesError, refresh: categoriesRefresh, clear: categoriesClear } = await useAsyncData(
    'categories',
    () => $fetch(`${useRuntimeConfig().public.apiURL}/categories`, {
      params: {
        cacheBust: new Date().getTime() // Cache-busting parameter
      }
    }),
    { initialCache: false }
  );

  // Filter and map into industries and shapes
  industries.value = categoriesData.value.categories.filter(category => category.type === 0);
  shapes.value = categoriesData.value.categories.filter(category => category.type === 1);
}

const updateSelection = (id) => {
  selected.value = id;
  console.log("here", selected.value);
  ProductFilter();
};

const ProductFilter = async () => {
  loading.value = true;
  const { data } = await useAsyncData(
    'products-single',
    () => $fetch(`${useRuntimeConfig().public.apiURL}/products?id=${selected.value}`),
    { initialCache: false }
  );
  allProducts.value = data?.value;

  if (allProducts.value.length) {
    products.value = allProducts.value;
  } else {
    products.value = [];
  }
  loading.value = false;
  flag.value = false;
  const targetElement = document.getElementById('catalogue-products');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const goToPage = async (url) => {
  if (!url) return;
  if (selected.value) {
    url = url + '&id=' + selected.value;
  }
  const { data } = await useFetch(url);

  allProducts.value = data?.value;
  const targetElement = document.getElementById('catalogue-products');
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://www.halfpricepackaging.com${route.path}`,
    },
  ],
})

// Set up the SEO metadata
useSeoMeta({
  title: "Packaging Catalogue | Half Price Packaging",
  meta: [
    { name: 'description', content: "Discover a world of versatile packaging solutions in our catalog. From eco-friendly options to custom designs, find your perfect fit!", },
    { name: 'robots', content: `${useRuntimeConfig().public.siteURL === 'https://staging.halfpricepackaging.com/' ? 'noindex, nofollow' : 'index, follow'}` },
    { name: 'title', content: "Packaging Catalogue | Half Price Packaging", },
    { property: 'og:title', content: "Packaging Catalogue | Half Price Packaging", },
    { property: 'og:description', content: "Discover a world of versatile packaging solutions in our catalog. From eco-friendly options to custom designs, find your perfect fit!", },
    { property: 'og:url', content: `https://www.halfpricepackaging.com${route.path}`, },
    { property: 'og:type', content: 'website', },
    { name: 'twitter:card', content: 'summary_large_image', },
    { property: 'twitter:domain', content: 'halfpricepackaging.com', },
    { name: 'twitter:title', content: "Packaging Catalogue | Half Price Packaging", },
    { name: 'twitter:description', content: "Discover a world of versatile packaging solutions in our catalog. From eco-friendly options to custom designs, find your perfect fit!", },
  ],
});

</script>

<template>
  <div class="hpp__categoryBannerWrapper pt-[30px] md:pt-[50px] pb-[30px] md:pb-[50px] bg-[#f9fafb]">
    <div class="container mx-auto px-[15px]">
      <div class="flex ">
        <div class="content__wrap w-[45%]">
          <div class="hpp__categoryBannerContentWrapper pl-[15px] pr-[50px]">
            <div class="breadcrumbs__wrap mb-[20px]">
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
                <li><span>Catalogue</span></li>
              </ul>
            </div>
            <div class="desc__wrap">
              <h1 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Catalogue</h1>
              <!-- <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">
                                Premium-quality and
                                perfectly-dimensioned soap box complemented by custom cutouts, add-ons, and finishes for
                                a strong first
                                impression - whether displayed on the shelf or shipped to your customers.</p>
                            <div class="btn__wrapper">
                                <NuxtLink to="#"
                                    class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[35px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                    Browse Products</NuxtLink>
                            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hpp__catProductsWrapper pt-[50px] pb-[50px] bg-white">
    <div class="container mx-auto px-[15px]">
      <div class="flex flex-wrap">
        <div class="categories__ListWrapper w-full md:w-[300px] pr-0 md:pr-[30px] mb-8 md:mb-0">
          <div class="cat__listWrapper mb-[30px] md:mb-[50px]">
            <h3
              class="font-headings text-[#212529] text-[24px] leading-[30px] font-bold pb-[15px] mb-[25px] border-b border-[#e5e5e5]">
              Industries
            </h3>
            <ul class="font-description font-medium text-gray-500 text-[14px]">

              <li class="mb-[10px]" v-for="item in industries" :key="item.id">
                <UCheckbox :name="item.title" :value="item.id" color="primary" :checked="item.id == selected"
                  :label="item.title" :ui="{ label: 'text-[#242424]' }" @change="updateSelection(item.id)" />
              </li>
            </ul>
          </div>

          <div class="cat__listWrapper mb-[50px]">
            <h3
              class="font-headings text-[#212529] text-[24px] leading-[30px] font-bold pb-[15px] mb-[25px] border-b border-[#e5e5e5]">
              Packaging Styles
            </h3>
            <ul class="font-description font-medium text-gray-500 text-[14px]">
              <li class="mb-[10px]" v-for="item in shapes" :key="item.id">
                <UCheckbox :checked="item.id == selected" :name="item.title" :value="item.id" color="primary"
                  :label="item.title" :ui="{ label: 'text-[#242424]' }" @change="updateSelection(item.id)" />
              </li>
            </ul>
          </div>

          <div class="view__catalogueWrapper hidden md-block">
            <div
              class="view__catalogueWrap bg-bottom bg-no-repeat bg-contain overflow-hidden rounded-[32px] pt-[50px] px-[30px] pb-[110%] bg-[#a5a87a]"
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
        <div class="w-full md:w-[calc(100%_-_300px)]">
          <div id="catalogue-products" class="grid grid-cols-2 md:grid-cols-4 content-start gap-[20px] gap-[30px]">
            <div class="item__wrap" v-for="item in allProducts?.data" :key="item.id">
              <NuxtLink :to="`/${item.primary_industry}/${item.slug}`"
                class="relative flex flex-wrap items-center sm:block bg-white px-0 md:px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                  <NuxtImg format="webp" :src="`${useRuntimeConfig().public.productMediaURL}/${item.feature_image}`"
                    alt="Soap Sleeves Thumbnail" loading="lazy" fit="cover" width="336" height="336"
                    class="w-full h-auto" />
                </div>
                <div class="desc__wrap py-[10px]">
                  <div
                    class="font-description hidden text-[11px] leading-[17px] text-acai-120 sm:flex items-center flex-wrap mb-1">
                    <span>Min. {{ item.max_order_quantity > 0 ? item.max_order_quantity : 200 }} units</span><span
                      class="text-[18px] px-1">·</span><span>Delivery: 4
                      weeks</span>
                  </div>
                  <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-0.5">{{ item.name }}</h3>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-end mt-4 space-x-2 ml-auto"
            v-if="allProducts?.meta?.links && allProducts?.meta?.links.length > 0">
            <button v-for="(link, index) in allProducts?.meta?.links" :key="index" class="px-4 py-2 rounded-md" :class="{
              'bg-blue-500 text-white': link.active,
              'bg-gray-200': !link.active,
              'opacity-50 cursor-not-allowed': link.url === null
            }" :disabled="link.url === null" @click="goToPage(link.url)">
              <span v-html="link.label"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
