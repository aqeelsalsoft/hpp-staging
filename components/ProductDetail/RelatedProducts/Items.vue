<script setup>

const props = defineProps({
  products: {
        type: Array,
        default: []
    },
});
</script>

<template>
    <div class="hpp__featuredProductsWrapper">
        <div class="hpp__productsInner">
            <ClientOnly fallbackTag="span">
                <ProductDetailRelatedProductsItemSlider :products="products" />
            </ClientOnly>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
