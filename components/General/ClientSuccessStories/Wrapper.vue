<script lang="ts" setup>
const { $device } = useNuxtApp();
</script>

<template>
    <ClientOnly>
        <div v-if="$device.isDesktop" class="hpp__featuredProductsWrapper pt-[50px] pb-[50px] bg-[#ffffff]">
            <div class="container mx-auto px-[15px]">
                <GeneralClientSuccessStoriesHeader />
            </div>
            <GeneralClientSuccessStoriesItems />
        </div>
        <div v-else class="hpp__featuredProductsWrapper pt-[50px] pb-[50px] bg-[#ffffff]">
            <div class="px-[20px]">
                <GeneralClientSuccessStoriesHeader />
            </div>
            <GeneralClientSuccessStoriesItemsGrid />
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped></style>
