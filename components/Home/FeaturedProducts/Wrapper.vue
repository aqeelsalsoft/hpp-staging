<script lang="ts" setup>
const { $device } = useNuxtApp();
</script>

<template>
    <div class="hpp__featuredProductsWrapper pt-[50px] pb-[50px] bg-[#ffffff]">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
            <HomeFeaturedProductsHeader />
        </div>
        <ClientOnly>
            <HomeFeaturedProductsItems v-if="$device.isDesktop" />
            <HomeFeaturedProductsItemsGrid v-else />
        </ClientOnly>
    </div>
</template>

<style lang="scss" scoped></style>
