<script lang="ts" setup>
// import useDevice from '@nuxtjs/device';
const { isDesktop } = useDevice();
</script>

<template>
        <div class="hpp__packagingStylesWrapper pt-[50px] pb-[50px] bg-[#ffffff]">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <HomeFeaturedIndustriesHeader />
            </div>
            <ClientOnly>
                <LazyHomeFeaturedIndustriesItems v-if="isDesktop" />
                <LazyHomeFeaturedIndustriesItemsGrid v-else />
            </ClientOnly>
        </div>
        <!-- <div v-else class="hpp__packagingStylesWrapper pt-[50px] pb-[50px] bg-[#ffffff]">
            <div class="px-[20px]">
                <HomeFeaturedIndustriesHeader />
            </div>
            <HomeFeaturedIndustriesItemsGrid />
        </div> -->
</template>

<style lang="scss" scoped></style>
