<script  setup>
const { $device } = useNuxtApp();

import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  product_id: {
        type: Number,
        default: null
    },
});

const { data, status, error, refresh, clear } = await useAsyncData(
  'related_products',
  () => $fetch(`${useRuntimeConfig().public.apiURL}/get-related-products?product_id=${props.product_id}`),
  { initialCache: false }
);


</script>

<template>
    <div class="hpp__featuredProductsWrapper pt-[30px] md:pt-[50px] pb-[30px] md:pb-[50px] bg-white" v-if="data?.products?.length && $device.isDesktop">
        <div class="container mx-auto px-[15px]">
            <ProductDetailRelatedProductsHeader />
        </div>
        <ProductDetailRelatedProductsItems :products="data?.products" />
    </div>
    <div class="hpp__featuredProductsWrapper pt-[30px] md:pt-[50px] pb-[30px] md:pb-[50px] bg-white" v-if="data?.products?.length && !$device.isDesktop">
        <div class="container mx-auto px-[15px]">
            <ProductDetailRelatedProductsHeader />
        </div>
        <ProductDetailRelatedProductsItemsGrid :products="data?.products" />
    </div>
</template>

<style lang="scss" scoped></style>
